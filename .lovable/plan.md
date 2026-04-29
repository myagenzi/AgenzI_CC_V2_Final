## Plan: Swap from Lovable Cloud to your own Supabase project

Right now the app is wired to a Lovable Cloud–provisioned Supabase instance (project ref `mzwvcknhgcydvmupcttj`, configured via `.env` and `supabase/config.toml`). To use your own Supabase project instead, we need to switch the integration over — this is done through Lovable's native Supabase integration, not by editing files manually.

### What you need to do (one-time, in the Lovable UI)

1. Open the green **Supabase** button in the top-right of the Lovable editor.
2. Choose **Connect Supabase** and authorize Lovable to access your Supabase account.
3. Select the Supabase **organization** and **project** you want this app to use.
4. Confirm the connection.

Once connected, Lovable will automatically:
- Regenerate `src/integrations/supabase/client.ts` pointing at your project.
- Update `.env` (`VITE_SUPABASE_URL`, `VITE_SUPABASE_PUBLISHABLE_KEY`, `VITE_SUPABASE_PROJECT_ID`) with your project's values.
- Refresh `src/integrations/supabase/types.ts` from your project's schema.
- Update `supabase/config.toml` with your project ref.

These four files are auto-managed — I cannot and should not edit them by hand.

### What I'll do after you connect

Once you've completed the connection, I'll:

1. **Verify the swap** — confirm `.env` and `client.ts` now reference your project ref (not `mzwvcknhgcydvmupcttj`).
2. **Configure Auth in your Supabase project** — you'll need to do this in your own Supabase dashboard under **Authentication → URL Configuration**:
   - **Site URL**: your preview URL (`https://id-preview--b00d1afd-02ad-4320-8f94-b7c8cd77439f.lovable.app`) or your custom domain when published.
   - **Redirect URLs**: add the same URL plus `http://localhost:5173` for local dev.
   - Under **Authentication → Providers → Email**: enable Email provider. For testing, you may want to disable "Confirm email" so signups work immediately without email verification.
3. **Smoke-test** the existing `/auth` page (signup + login) against your project to confirm sessions persist.
4. **Optional cleanup** — the existing `useAuth` hook, `Auth.tsx` page, and Header auth UI all use the standard `@/integrations/supabase/client` import, so no code changes are needed. They will "just work" against the new project.

### Things to be aware of

- **Existing data**: Any users who signed up against the Lovable Cloud instance will not exist in your own project. You'll start fresh.
- **Lovable Cloud stays enabled at the workspace level**, but this project's client will point at your project instead. If you later want backend tools (migrations, edge functions) to act on your project, the native Supabase integration handles that routing automatically.
- **No code edits from me are required for the swap itself** — it's purely a connection action on your side. My follow-up work is verification and any auth-config tweaks needed to make signup/login work end-to-end.

### Next step

Click the **Supabase** button in the top-right and connect your project. Reply here once it's done and I'll verify everything is wired up correctly.
