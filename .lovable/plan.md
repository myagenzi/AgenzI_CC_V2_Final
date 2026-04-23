

## Goal
Rebuild the AgenzI homepage to match the **layout, rhythm, and minimalism of Reflect.app** — keeping all current AgenzI content, the navy + gold palette, and the brand fonts. Same words, completely Reflect-style presentation.

## Reflect Pattern We Are Adopting

```text
┌──────────────────────────────────────────────────┐
│  Slim pill nav (logo · links · login + CTA)      │
├──────────────────────────────────────────────────┤
│                                                  │
│              ◦ small eyebrow pill                │
│                                                  │
│        MASSIVE CENTERED HEADLINE (1-3 lines)     │
│                                                  │
│           one quiet centered sub-line            │
│                                                  │
│            ┌──────────────────┐                  │
│            │   ONE hero visual │   ← glowing     │
│            │   (halo / horizon)│     focal point │
│            └──────────────────┘                  │
└──────────────────────────────────────────────────┘
        (huge whitespace before next section)
```
Every subsequent section repeats this cadence: eyebrow → big centered title → one focused visual or a quiet 3-up grid. No decorative rails, no oversized wordmarks, no busy backgrounds.

## Step 1 — Header (rebuild)
Convert the fixed full-width navy bar into Reflect's **floating pill nav**:
- Transparent page bg, header centered with a max-width
- Logo on far left, nav links inside a soft rounded-full pill in the center, "Login" + "Book Free Audit" CTA on the right
- Subtle border, very faint backdrop-blur — no heavy shadow
- Mobile: same pill collapses to logo + menu icon, drawer unchanged

## Step 2 — Hero (full rewrite)
Replace the current dense hero with Reflect's centered composition:
- Remove: giant `AGENZI` background wordmark, off-center halo cluster, 4-column stat strip, fixed bottom Hyderabad/IST bar
- Keep + restyle:
  - Small pill eyebrow `✦ Human + AI · One System` (centered, rounded-full, faint border)
  - Headline centered, `clamp(56px, 9vw, 128px)`, tight tracking, gold italic accent on "better systems."
  - One quiet centered sub-line in moondust
  - Two centered CTAs (primary gold pill + ghost link with arrow)
- **One hero visual centered below**: the existing animated halo nucleus, scaled larger and re-centered as the focal "horizon glow" (Reflect's signature). Soft radial gold/royal bloom, slow pulse, no rings clutter.
- Generous vertical breathing room above and below (min-h-screen with content vertically centered)
- Stats move OUT of hero into their own quiet strip lower on the page (Step 4)

## Step 3 — Ticker (quiet down)
Reduce visual weight: smaller text, lower opacity, single thin divider above and below, slower scroll. Same logos/words, Reflect-grade restraint.

## Step 4 — Section rhythm (apply to every remaining section)
Restructure `ThreeEngines`, `Problem`, `Mirror`, `HowItWorks`, `Statement`, `ProofWebinar`, `FinalCta` to share **one consistent rhythm**:

```text
   eyebrow (centered, gold, 11px tracking-widest)
   ↓
   big centered section title (display font, clamp 40-72px)
   ↓
   one quiet centered intro line (max-w-2xl, moondust)
   ↓
   the section's content (grid, cards, or visual)
   ↓
   massive bottom padding (py-32 lg:py-48)
```
- Cards: flat, 1px border at `peri/15`, generous internal padding, no gradients on the card surface itself — only one accent (icon or number) carries color
- Numbers/steps: thin, large, gold, no boxes
- Stats strip: single horizontal row, centered, hairline dividers, lots of whitespace (relocated from hero)
- Remove most decorative gradients/grids inside sections — keep ONE subtle radial glow per page maximum

## Step 5 — Motion
Match Reflect's soft, slow feel:
- Reveal: 800ms ease-out, 24px translateY, stagger 100ms
- Hero halo: existing pulse, slowed to 5s, no spin clutter
- Hover on CTAs: 1px lift + brighten gold, no scale
- Remove the spinning concentric rings on the halo

## Step 6 — Footer (light polish)
Centered layout, smaller logo, single row of links, hairline top border, no columns of marketing fluff. Quiet.

## Step 7 — Verify
- Desktop (1106 viewport) and mobile (390) render cleanly
- Vertical rhythm feels like Reflect: lots of air, one focal point per section
- All AgenzI content preserved verbatim
- No console errors, no broken assets
- Tokens only — zero hardcoded hex

## Files Touched
- `src/components/site/Header.tsx` — pill nav rebuild
- `src/components/site/Footer.tsx` — minimal centered polish
- `src/components/site/home/Hero.tsx` — full rewrite (centered, single focal halo)
- `src/components/site/home/Ticker.tsx` — quiet restyle
- `src/components/site/home/ThreeEngines.tsx` — rhythm + flat cards
- `src/components/site/home/Problem.tsx` — rhythm
- `src/components/site/home/Mirror.tsx` — rhythm
- `src/components/site/home/HowItWorks.tsx` — rhythm + thin step numerals
- `src/components/site/home/Statement.tsx` — centered minimal
- `src/components/site/home/ProofWebinar.tsx` — rhythm
- `src/components/site/home/FinalCta.tsx` — centered glow + single CTA
- `src/pages/Index.tsx` — add a new `Stats` section between Ticker and ThreeEngines (relocated from hero)
- `src/components/site/home/Stats.tsx` — NEW, hairline-divided 4-up strip
- `src/index.css` — add `.pill-nav`, `.section-title` helpers; slow halo to 5s; tighten reveal timing

## Out of Scope
- No changes to colors, fonts, or content copy
- No changes to other pages (What We Do, Pricing, etc.)
- No new dependencies

