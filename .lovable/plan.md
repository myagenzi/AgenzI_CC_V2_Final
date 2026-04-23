

## Understood

**Reference:** `https://monopo.london/services` (monopo London — Japanese minimalist meets European brutalist studio site).

**What you want — confirmed:**
1. Header nav: rename "Solutions" → **"What We Do"** as a **dropdown** with 3 items: Creative—CaaS, Marketing—MaaS, Intelligence—Zenzai. Same glass-pill header on every page.
2. Build only the **Creative—CaaS page** now, in the monopo aesthetic — but keep our existing AgenzI shell (header + footer + nav).
3. Aesthetic switch on this page only: monochrome (black / white / studio grey) with one electric accent, oversized type, mono labels, fixed left rail, floating cursor portal on service hover, smooth scroll, scroll-reveals, grain overlay.
4. Other pages (MaaS, Zenzai) stub-routed to "coming soon" so the dropdown works end-to-end.

## Build Plan

### 1. Header dropdown (sitewide)
Rewrite `src/components/site/Header.tsx`:
- "What We Do" becomes a hover/click dropdown (Radix `DropdownMenu`, glass styling).
- 3 items → `/what-we-do/creative-caas`, `/what-we-do/marketing-maas`, `/what-we-do/intelligence-zenzai`.
- Other links convert from `#anchor` to `/#anchor` so they work from sub-pages.
- Mobile drawer: nested expandable "What We Do" group.
- Logo links to `/`.

### 2. Routes (`src/App.tsx`)
```text
/                                     → Index (homepage, unchanged)
/what-we-do/creative-caas             → CreativeCaaS (new, full build)
/what-we-do/marketing-maas            → ComingSoon stub
/what-we-do/intelligence-zenzai      → ComingSoon stub
*                                     → NotFound
```

### 3. Creative—CaaS page (`src/pages/what-we-do/CreativeCaaS.tsx`)

**Layout shell** — page-scoped class `.surface-mono` that overrides tokens to monochrome (deep black `#0A0A0A`, pure white, studio grey `#F4F4F4`, one electric blue accent `#1E40FF`). Keeps shared `<Header />` + `<Footer />` floating on top.

```text
┌──────┬───────────────────────────────────────────────┐
│      │  HERO                                         │
│ FIX  │   01 / SERVICES                               │
│ ED   │   WE BUILD                                    │
│ RAIL │   EXPRESSIVE                                  │
│      │   BRANDS.                  ↘ split-text reveal│
│ logo │                                               │
│ MENU ├───────────────────────────────────────────────┤
│ ●    │  INTRO PARAGRAPH (max-w-2xl, mono caption)    │
│      ├───────────────────────────────────────────────┤
│      │  03 SERVICE GROUPS (Branding / Digital /      │
│      │  Communications) — numbered, hover reveals    │
│      │  cursor-following ghost image                 │
│      ├───────────────────────────────────────────────┤
│      │  CAPABILITIES — multi-column lists with →     │
│      ├───────────────────────────────────────────────┤
│      │  PROCESS / CTA                                │
└──────┴───────────────────────────────────────────────┘
```

**Components** (`src/components/site/caas/`):
- `LeftRail.tsx` — fixed 88px sidebar, vertical AGENZI wordmark (writing-mode), MENU trigger that opens an overlay with staggered link reveals.
- `CaasHero.tsx` — split-text reveal headline using existing `Reveal` primitive + per-word stagger.
- `ServiceGroup.tsx` — numbered (`01.`, `02.`, `03.`) row; on hover binds to `CursorPortal` to display a ghost thumbnail that follows the cursor (mousemove transform, no extra deps).
- `CapabilityList.tsx` — multi-col grid, `→` arrows that translate-x on hover.
- `CursorPortal.tsx` — single mounted div listening to mousemove; service rows register an image via context.
- `MarqueeStatement.tsx` — slow horizontal "EXPRESSIVE · CONFIDENT · CRAFTED" marquee divider.

**Motion:**
- Reuse existing `Reveal` (already 800ms cubic-bezier).
- Smooth scroll: native `html { scroll-behavior: smooth }` is already on. Skip Lenis (no new deps) — feel achieved via slow eases.
- Hover underline-grow via `.story-link` utility (added to index.css).
- Grain: keep global `body::after` noise; on `.surface-mono` raise opacity slightly.

**Typography:**
- Display: keep Bricolage Grotesque (existing, fits brutalist scale).
- Mono labels: add **JetBrains Mono** via Google Fonts `<link>` in `index.html` (single file change, no npm).
- Section titles: `clamp(64px, 11vw, 200px)`, `tracking-[-0.04em]`, uppercase, mixed weights.

**Content** (from your three groups):
- 01 / BRANDING — Brand Strategy · Identity Systems · Naming · Verbal Identity · Guidelines
- 02 / DIGITAL — UI/UX · Web Design · Web Development · Motion Design · Prototyping
- 03 / COMMUNICATIONS — Campaign · Art Direction · Content Production · Social · Editorial
(Refine copy from monopo reference + AgenzI's CaaS positioning.)

### 4. Token additions (`src/index.css`)
- `.surface-mono` scope: monochrome semantic tokens + `--electric: 230 100% 56%`.
- `.story-link` underline-grow utility.
- `@keyframes marquee` for statement bar.
- JetBrains Mono `@import` (Google Fonts) or `<link>` in `index.html`.

### 5. Stub pages
`src/pages/what-we-do/ComingSoon.tsx` — minimal centered page reusing header/footer; used by both MaaS and Zenzai routes until built.

### 6. Verify
- Dropdown opens on hover + click, mobile drawer nested, all 3 routes resolve.
- Creative-CaaS renders cleanly at 1106px and 390px.
- No console errors. No new npm deps.

## Files Touched
- `src/components/site/Header.tsx` — dropdown rewrite
- `src/App.tsx` — 3 new routes
- `src/pages/what-we-do/CreativeCaaS.tsx` — new
- `src/pages/what-we-do/ComingSoon.tsx` — new
- `src/components/site/caas/LeftRail.tsx` — new
- `src/components/site/caas/CaasHero.tsx` — new
- `src/components/site/caas/ServiceGroup.tsx` — new
- `src/components/site/caas/CapabilityList.tsx` — new
- `src/components/site/caas/CursorPortal.tsx` — new
- `src/components/site/caas/MarqueeStatement.tsx` — new
- `src/index.css` — `.surface-mono`, `.story-link`, marquee keyframes
- `index.html` — JetBrains Mono link tag

## Out of Scope
- Building MaaS / Zenzai pages (stubs only).
- Changing the homepage.
- Adding Framer Motion or Lenis (achieved with existing Reveal + CSS — no new deps).

