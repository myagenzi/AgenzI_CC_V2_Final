-- Roles enum
create type public.app_role as enum ('admin', 'user');

-- Generic updated_at trigger function
create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

-- profiles
create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  avatar_url text,
  company text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
alter table public.profiles enable row level security;

create trigger profiles_set_updated_at
before update on public.profiles
for each row execute function public.set_updated_at();

-- Auto-create profile on signup
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, full_name, avatar_url)
  values (
    new.id,
    new.raw_user_meta_data ->> 'full_name',
    new.raw_user_meta_data ->> 'avatar_url'
  );
  return new;
end;
$$;

create trigger on_auth_user_created
after insert on auth.users
for each row execute function public.handle_new_user();

-- user_roles
create table public.user_roles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  role public.app_role not null,
  created_at timestamptz not null default now(),
  unique (user_id, role)
);
alter table public.user_roles enable row level security;

-- has_role() — SECURITY DEFINER, prevents recursive RLS
create or replace function public.has_role(_user_id uuid, _role public.app_role)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.user_roles
    where user_id = _user_id and role = _role
  );
$$;

-- audit_bookings (public lead capture)
create table public.audit_bookings (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  email text not null,
  company text,
  phone text,
  message text,
  source text,
  created_at timestamptz not null default now()
);
alter table public.audit_bookings enable row level security;

-- contact_submissions (generic lead capture)
create table public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  email text not null,
  subject text,
  message text not null,
  source text,
  created_at timestamptz not null default now()
);
alter table public.contact_submissions enable row level security;

-- ===== POLICIES =====

-- profiles
create policy "Users view own profile"
  on public.profiles for select to authenticated
  using (auth.uid() = id);

create policy "Users update own profile"
  on public.profiles for update to authenticated
  using (auth.uid() = id);

create policy "Admins view all profiles"
  on public.profiles for select to authenticated
  using (public.has_role(auth.uid(), 'admin'));

-- user_roles
create policy "Users view own roles"
  on public.user_roles for select to authenticated
  using (auth.uid() = user_id);

create policy "Admins manage roles"
  on public.user_roles for all to authenticated
  using (public.has_role(auth.uid(), 'admin'))
  with check (public.has_role(auth.uid(), 'admin'));

-- audit_bookings: public insert, admin read/manage
create policy "Anyone can submit a booking"
  on public.audit_bookings for insert to anon, authenticated
  with check (true);

create policy "Admins read bookings"
  on public.audit_bookings for select to authenticated
  using (public.has_role(auth.uid(), 'admin'));

create policy "Admins update bookings"
  on public.audit_bookings for update to authenticated
  using (public.has_role(auth.uid(), 'admin'));

create policy "Admins delete bookings"
  on public.audit_bookings for delete to authenticated
  using (public.has_role(auth.uid(), 'admin'));

-- contact_submissions: same pattern
create policy "Anyone can submit a contact message"
  on public.contact_submissions for insert to anon, authenticated
  with check (true);

create policy "Admins read contacts"
  on public.contact_submissions for select to authenticated
  using (public.has_role(auth.uid(), 'admin'));

create policy "Admins update contacts"
  on public.contact_submissions for update to authenticated
  using (public.has_role(auth.uid(), 'admin'));

create policy "Admins delete contacts"
  on public.contact_submissions for delete to authenticated
  using (public.has_role(auth.uid(), 'admin'));