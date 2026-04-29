-- 1. Lock search_path on set_updated_at
create or replace function public.set_updated_at()
returns trigger
language plpgsql
set search_path = public
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

-- 2. Replace permissive INSERT policies with minimal validation
drop policy if exists "Anyone can submit a booking" on public.audit_bookings;
create policy "Anyone can submit a booking"
  on public.audit_bookings for insert to anon, authenticated
  with check (
    length(trim(full_name)) > 0
    and length(trim(email)) > 0
    and email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
  );

drop policy if exists "Anyone can submit a contact message" on public.contact_submissions;
create policy "Anyone can submit a contact message"
  on public.contact_submissions for insert to anon, authenticated
  with check (
    length(trim(full_name)) > 0
    and length(trim(email)) > 0
    and length(trim(message)) > 0
    and email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
  );

-- 3. Revoke public EXECUTE on SECURITY DEFINER functions
-- (RLS policies and triggers continue to work; these stop direct RPC calls)
revoke execute on function public.has_role(uuid, public.app_role) from public, anon, authenticated;
revoke execute on function public.handle_new_user() from public, anon, authenticated;