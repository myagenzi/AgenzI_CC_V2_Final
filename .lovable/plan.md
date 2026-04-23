

## What I Understood

Build `/what-we-do/intelligence-zenzai` to mirror **cellinteractive.jp**'s structure section-by-section, while:
- Pulling **all copy** from `base/_unpacked/index.html#pg-zenzai` (3 layers, 12 services, hero, CTA).
- Keeping the **homepage shell** (Header, Footer, background, fonts, gold/royal color tokens).
- Keeping the **shared engine signature** (`LeftRail` + `CursorPortal` + `MarqueeStatement`) used on CaaS and MaaS.
- Building a **cursor-reactive metaball** in the hero (the signature Cell Interactive interaction) using the homepage's gold halo as the source visual — it splits into 3 blobs that drift, get attracted to the cursor, and merge back.

## Reference Section Map (cellinteractive.jp)

```text
1. HERO  — Full-bleed dark canvas; metaball blobs react to cursor.
          Tagline + "Show Reel" link + scroll counter.
2. ABOUT — Eyebrow, large statement, paragraph, 3 image tiles in a row.
3. SERVICE — Big section heading + 4-column grid of categories
            (Digital / Brand / Movie / Spatial), each a stack of keywords.
4. PROJECTS — Horizontal/grid of project cards: image + title + year + tag.
5. TOPICS  — 3 article cards: image + headline + category + date.
6. (Footer global)
```

## Mapping → AgenzI Zenzai

| Cell Interactive | AgenzI Zenzai equivalent | Media |
|---|---|---|
| Metaball hero | `ZenzaiHero` with cursor-reactive metaballs (homepage halo, split into 3) | none — generative |
| About statement + 3 tiles | `ZenzaiAbout` — Three-Layers eyebrow + statement + 3 layer cards (Automations / Integrations / Custom AI) | `[IMAGE 4/5]` × 3 |
| 4-column Service grid | `LayerServices` — 3 layer columns (Automations / Integrations / Custom AI), each listing its services | none |
| Projects grid | `ProjectsRail` — 5 case-study placeholder cards | `[IMAGE 16/9]` × 5 |
| Topics articles | `TopicsRow` — 3 article placeholders | `[IMAGE 16/9]` × 3 |
| (CTA) | `CtaStripe` reusing existing component | none |

## Build Plan

### 1. New component — `src/components/site/zenzai/CursorMetaballs.tsx`
Canvas-based interactive blob field for the hero.
- 3 blobs sized 120/90/70 px, gold→royal radial gradient (matches homepage halo tokens).
- Each blob has position, velocity, return-to-anchor force.
- On `mousemove`, blobs are gently attracted to cursor (capped force), giving the "split/redistribute/merge" motion.
- `requestAnimationFrame` loop with linear + angular damping.
- SVG `feGaussianBlur` + `feColorMatrix` filter merges overlapping blobs into one organic shape (true metaball look without WebGL).
- Pure React + SVG, no new deps. Disabled (renders static halo) on `prefers-reduced-motion` and on `<md` to save battery.

### 2. New page — `src/pages/what-we-do/IntelligenceZenzai.tsx`
```text
<Header />
<LeftRail currentEngine="Intelligence — Zenzai" />
<CursorPortal thumbs={...}>
  <main className="md:pl-[88px]">
    <ZenzaiHero />              ← cursor metaballs + headline + CTAs
    <MarqueeStatement words=["Automate","Integrate","Build","Compound"] />
    <ZenzaiAbout />             ← Three Layers statement + 3 layer cards
    <LayerServices />           ← 3 stacked layer sections w/ service accordions
    <ProjectsRail />            ← 5 placeholder project tiles
    <TopicsRow />               ← 3 placeholder article tiles
    <CtaStripe />               ← reused
    <footer ribbon />
  </main>
</CursorPortal>
<Footer />
```

### 3. New components — `src/components/site/zenzai/`
- **`ZenzaiHero.tsx`** — Full-bleed section. `CursorMetaballs` absolutely positioned behind the headline. Eyebrow `ENGINE 03 · ZENZAI`, headline *"You've already tried AI. You just never built the system around it."* (gold accent on second clause, verbatim from base), sub paragraph, two CTAs (Book Free Audit / See services).
- **`ZenzaiAbout.tsx`** — Eyebrow `Three Layers`, headline *"Start with automations. Add integrations. Build what doesn't exist yet."* + 3-card grid (Layer 01/02/03) — each card: glyph (⚡ ⟳ ◈), title, description (verbatim), and a `MediaPlaceholder aspect="4/5"` above. Cards stack on mobile.
- **`LayerServices.tsx`** — 3 stacked sections (Layer 01 Automations / 02 Integrations / 03 Custom AI). Each uses the existing `ServiceAccordion` component with its services and pricing tags from base.
- **`ProjectsRail.tsx`** — Section heading `Projects`, 5-tile grid (`md:grid-cols-3` with first tile spanning 2 cols, mirroring Cell's mosaic). Each tile: `MediaPlaceholder aspect="16/9"` + title + year + tag.
- **`TopicsRow.tsx`** — Section heading `Topics`, 3 article cards in a row: `MediaPlaceholder aspect="16/9"` + category eyebrow + title + date.

### 4. Reuse / route wire-up
- `src/App.tsx` — replace `ComingSoon` for `/what-we-do/intelligence-zenzai` with new `IntelligenceZenzai`.
- Reuse `MediaPlaceholder`, `MarqueeStatement`, `LeftRail`, `CursorPortal`, `ServiceAccordion`, `CtaStripe` exactly as on MaaS.

### 5. Styling — `src/index.css`
- `.metaball-svg` — sets the SVG filter (`<filter><feGaussianBlur stdDeviation="20"/><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 25 -10"/></filter>`) so overlapping blobs merge organically.
- `.layer-card` — glass card hover state for the 3 About cards (lift + gold ring).
- `.project-tile` — hover scale + caption fade for `ProjectsRail`.
- `.topic-card` — hairline divider + hover.
- No new keyframes, no new deps.

### 6. Verify
- `/what-we-do/intelligence-zenzai` at 1106px and 390px renders the full Cell-Interactive-style flow.
- Metaballs follow cursor smoothly (60fps target), split when cursor moves fast, merge back at rest.
- `prefers-reduced-motion` falls back to static halo.
- LeftRail shows "Intelligence — Zenzai", header dropdown, accordions, cursor portal all functional.
- No console errors. CaaS and MaaS pages untouched.

## Files Touched
- `src/components/site/zenzai/CursorMetaballs.tsx` — NEW
- `src/components/site/zenzai/ZenzaiHero.tsx` — NEW
- `src/components/site/zenzai/ZenzaiAbout.tsx` — NEW
- `src/components/site/zenzai/LayerServices.tsx` — NEW
- `src/components/site/zenzai/ProjectsRail.tsx` — NEW
- `src/components/site/zenzai/TopicsRow.tsx` — NEW
- `src/pages/what-we-do/IntelligenceZenzai.tsx` — NEW
- `src/App.tsx` — swap route
- `src/index.css` — `.metaball-svg`, `.layer-card`, `.project-tile`, `.topic-card`

## Out of Scope
- Real videos / images / project artwork (all placeholders).
- Header / Footer / Homepage / CaaS / MaaS pages.
- WebGL or new physics libraries — pure SVG + RAF.
- New npm dependencies.

