## Goal

Connect this project to your own Supabase project and add Email + Password sign-up and login.

## Setup (you'll do this in the Lovable UI)

After approving this plan, Lovable will prompt you to authorize the **native Supabase integration** and pick (or create) the Supabase project to connect. Once linked, Lovable injects `VITE_SUPABASE_URL`, `VITE_SUPABASE_PUBLISHABLE_KEY`, and `VITE_SUPABASE_PROJECT_ID` automatically — no manual `.env` editing.

In your Supabase dashboard → Authentication → URL Configuration, set:
- Site URL: your preview URL (`https://id-preview--b00d1afd-02ad-4320-8f94-b7c8cd77439f.lovable.app`)
- Redirect URLs: same URL (and your production domain when you have one)

For faster testing, you can disable "Confirm email" in Authentication → Providers → Email.

## What I'll build

### 1. Supabase client
- `src/integrations/supabase/client.ts` — typed client using the injected env vars, configured with `persistSession: true`, `autoRefreshToken: true`, `storage: localStorage`.

### 2. Auth context
- `src/hooks/useAuth.tsx` — `AuthProvider` + `useAuth()` exposing `{ user, session, loading, signIn, signUp, signOut }`.
- Subscribes via `onAuthStateChange` **before** calling `getSession()` (correct order to avoid missed events).
- Wrap `<App />` with `<AuthProvider>` in `src/App.tsx`.

### 3. `/auth` page (`src/pages/Auth.tsx`)
- Tabbed UI (Login / Sign Up) using existing shadcn `Tabs`, `Input`, `Button`, `Label`, styled to match the site (rounded glass card, primary CTA).
- Sign-up calls `supabase.auth.signUp({ email, password, options: { emailRedirectTo: window.location.origin + '/' } })`.
- Login calls `supabase.auth.signInWithPassword({ email, password })`.
- Friendly error toasts via existing `useToast` (handle `User already registered`, `Invalid login credentials`).
- Redirects to `/` when a session is detected.

### 4. Header integration (`src/components/site/Header.tsx`)
- Replace the existing static "Login" link with auth-aware behavior:
  - Logged out → "Login" links to `/auth`.
  - Logged in → small avatar/initial dropdown with "Sign out".
- Same change inside the mobile drawer.

### 5. Routing (`src/App.tsx`)
- Add `<Route path="/auth" element={<Auth />} />` above the catch-all.

## Out of scope (ask if you want these)

- User profiles table, roles/RBAC, password reset page, Google/magic-link providers, protected routes — none of these are added now. Easy to layer on next.

## Files touched

- New: `src/integrations/supabase/client.ts`, `src/hooks/useAuth.tsx`, `src/pages/Auth.tsx`
- Edited: `src/App.tsx`, `src/components/site/Header.tsx`
