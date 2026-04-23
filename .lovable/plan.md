

## Goal
Decode `base/index.html` (a packed self-extracting bundle) into readable source, then convert the **homepage** into a clean React + Tailwind foundation using AgenzI's brand palette, guided by the Reflect.app reference now in `references/01-home/links.md`.

## Step 1 — Unpack the base bundle
Create `scripts/unpack-base.mjs` that:
1. Parses `<script type="__bundler/manifest">`, `__bundler/template`, and `__bundler/ext_resources` blocks from `base/index.html`
2. Base64-decodes + gunzips each asset (Node built-ins only — no new deps)
3. Writes to `base/_unpacked/`:
   ```text
   base/_unpacked/
   ├── index.html      ← real readable HTML
   ├── styles/*.css
   ├── scripts/*.js
   └── assets/*
   ```

Original `base/index.html` stays untouched. Re-runnable if you upload a new base.

## Step 2 — Study reference + unpacked source
- Fetch `https://reflect.app/home?ref=godly` (markdown + screenshot) to capture layout, rhythm, type scale, motion cues
- Read `base/_unpacked/index.html` end-to-end: identify home section, shared nav/footer, fonts, exact color usage

## Step 3 — Establish design system (Option A — full replacement)
Update `src/index.css` and `tailwind.config.ts` with AgenzI tokens in HSL:
- `--background` Navy `#0A1033`
- `--foreground` Cream `#F8F7F2`
- `--primary` Gold `#F2B861`
- `--accent` Purple `#7B5499`
- `--secondary` Periwinkle `#6870BD`
- Derived: muted, border, ring, card, popover, sidebar variants
- Register brand fonts found in unpacked CSS
- Copy `logo-horizontal.png`, `logo-stacked.png`, `logo-symbol.png` into `src/assets/`

Generic light/dark theme is fully replaced. shadcn `Button` variants stay token-driven so they pick up the new palette automatically.

## Step 4 — Build the homepage
```text
src/pages/Index.tsx
src/components/site/
├── Header.tsx           ← logo + nav, mobile sheet menu
├── Footer.tsx           ← shared footer
└── home/
    ├── Hero.tsx
    └── (additional sections as found in source)
```
- Semantic HTML, fully responsive, accessible
- Tailwind tokens only — no hardcoded hex
- shadcn `Button` for CTAs
- Wire `/` route in `src/App.tsx` to new `Index.tsx`
- Reference influence (Reflect.app): generous whitespace, restrained typography, soft motion — adapted to AgenzI's navy + gold palette

Other pages (What We Do, How It Works, Pricing, About) are NOT built in this step.

## Step 5 — Verify
- Confirm preview renders cleanly at desktop + mobile widths
- No console errors, no broken assets
- Report what shipped + what's ready for the next page

## Technical Notes
- Unpack script: Node `zlib` + `fs` only, zero new dependencies
- If bundle format deviates from gzip+base64, script logs the manifest shape so I can adapt in one follow-up
- Brand colors converted to HSL for shadcn token compatibility
- Reference fetch uses `code--fetch_website` (markdown + screenshot)

## What Happens After Approval
I switch to default mode and execute Steps 1–5 in order, reporting back when the homepage foundation is live in preview.

