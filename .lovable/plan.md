

## What I Understood

Rebuild **`/what-we-do/marketing-maas`** so the **layout, rhythm, and section order match `thinkingbox.com/services` exactly**, while keeping:
- AgenzI **content** from `base/_unpacked/index.html#pg-maas` (3 systems, 12 services, hero copy, CTA).
- **Homepage shell** (Header, Footer, background, fonts, color tokens).
- **Shared engine signature** across all 3 service pages: `LeftRail` + `CursorPortal` + `MarqueeStatement`.

Every place thinkingbox plays a video or image, I drop in a **labeled aspect-ratio placeholder box** (e.g. `[VIDEO 16:9 — Hero reel]`, `[IMAGE 16:9 — Performance category]`) so you can swap in real assets later.

## thinkingbox.com/services — Section Map (what we're cloning)

```text
1. HERO
   - Full-bleed background VIDEO (lightbulb / abstract object loop)
   - Massive serif/grotesque headline that animates between words:
     "We build experiential / experiential / immersive / digital..."
   - Sub-line: "Unstuck Yourself."
   - No buttons in hero — pure statement

2. MANIFESTO (3 numbered rows)
   .01 The dreamers are also the doers.
   .02 The budget goes on the screen.
   .03 We build for the long term.
   - Big mono number, paragraph beside it, hairline dividers

3. SERVICE CATEGORIES (5 large editorial blocks, repeat pattern)
   For each category:
   - Full-bleed wide IMAGE/VIDEO (16:9, takes ~70% viewport width)
   - Big H3 title (e.g. "Creative Campaigns")
   - Meta line: keywords · "N projects"
   - 2-3 sentence description
   - Hover state: image plays/scales

4. CLIENT LOGO WALL
   - 3 rows × ~15 logos each, monochrome, hairline grid

5. (Footer is part of their global shell)
```

## Mapping → AgenzI MaaS

| thinkingbox section | AgenzI MaaS equivalent | Media placeholder |
|---|---|---|
| Hero video + animated headline | MaasHero (already has the kinetic text) — add full-bleed video bg placeholder behind | `[VIDEO 16:9 — Hero loop]` |
| 3 numbered manifesto rows | `SystemsManifesto` — already exists, restyle to match thinkingbox proportions | none |
| 5 service category blocks | **3 system blocks** (Performance / Growth / Perception) — each with a media slot above the headline, then the 4-service accordion below | `[VIDEO 16:9 — Performance reel]` × 3 |
| Client logo wall | NEW `ClientWall` — 3 rows of monochrome placeholder logos | `[LOGO]` × 30 grid cells |
| (CTA) | `CtaStripe` — already in place | none |

## Build Plan

### 1. New component — `src/components/site/MediaPlaceholder.tsx`
Reusable labeled box. Props: `aspect` (`"16/9" \| "4/5" \| "1/1"`), `label`, `kind` (`"video" \| "image"`). Renders a glass card with hairline border, centered mono label like `▸ VIDEO 16:9 · Performance reel`, and a faint diagonal hatch background. One component, used everywhere we need a media slot.

### 2. `MaasHero.tsx` — add background video slot
Wrap the existing kinetic headline in a `relative` container. Add an absolutely-positioned `MediaPlaceholder aspect="21/9" label="Hero loop"` behind the text at `opacity-30`, with a dark gradient overlay so the headline stays readable. Keep all existing copy, CTAs, Reveal logic.

### 3. `SystemsManifesto.tsx` — tighten proportions
Match thinkingbox: number column narrower (`col-span-1`), paragraph wider (`col-span-9`), more vertical padding (`py-16 md:py-24`), bigger num display. Keep `.01/.02/.03` style. No media here — pure typography, like thinkingbox.

### 4. `SystemBlock.tsx` — add media slot above each system
Insert a full-bleed `MediaPlaceholder aspect="16/9"` ABOVE the eyebrow + headline of each system block. Three blocks → three media placeholders:
- System 01 Performance → `[VIDEO 16:9 — Performance reel]`
- System 02 Growth → `[VIDEO 16:9 — Growth pipeline]`
- System 03 Perception → `[VIDEO 16:9 — Perception case study]`

The accordion of services stays below — that's our editorial twist on thinkingbox's "keywords · N projects" meta line. Add a meta line above the accordion: `Performance · Attribution · Paid Media · 04 services` to mirror their meta strip.

### 5. NEW component — `src/components/site/maas/ClientWall.tsx`
Mirrors thinkingbox's logo wall. Renders a 5-column × 3-row grid of `aspect-[2/1]` glass placeholders, each labeled `[LOGO]` in faint mono. Hairline dividers between cells. Heading above: `Trusted by teams that count revenue, not impressions.` (mono eyebrow + small display headline). Inserted between the last `SystemBlock` and `CtaStripe`.

### 6. Page assembly — `src/pages/what-we-do/MarketingMaaS.tsx`
New section order to mirror thinkingbox:

```text
<Header />
<LeftRail currentEngine="Marketing — MaaS" />
<CursorPortal>
  <main className="md:pl-[88px]">
    <MaasHero />                     ← + background video placeholder
    <MarqueeStatement words=[...] />  ← stays (our signature, not in thinkingbox)
    <SystemsManifesto />              ← retuned to thinkingbox proportions
    <SystemBlock × 3 />               ← + media placeholder above each
    <ClientWall />                    ← NEW (mirrors logo wall)
    <CtaStripe />                     ← stays
    <footer ribbon />                 ← stays
  </main>
</CursorPortal>
<Footer />
```

### 7. Styling — `src/index.css`
- `.media-ph` — hairline border `border-foreground/[0.12]`, glass background, faint diagonal hatch via repeating-linear-gradient, centered label slot.
- `.logo-cell` — same hairline grid cell, hover lifts opacity.
- Tighten `.manifesto-row` padding to match thinkingbox (`py-16 md:py-24`).
- No new keyframes, no new deps.

### 8. Verify
- `/what-we-do/marketing-maas` at 1106px and 390px renders the full thinkingbox-style flow.
- All media slots clearly labeled so you know what to drop in.
- Header dropdown, LeftRail, CursorPortal, accordions all functional.
- No console errors. CaaS page untouched.

## Files Touched
- `src/components/site/MediaPlaceholder.tsx` — NEW (reusable)
- `src/components/site/maas/ClientWall.tsx` — NEW
- `src/components/site/maas/MaasHero.tsx` — add bg video placeholder
- `src/components/site/maas/SystemsManifesto.tsx` — proportions
- `src/components/site/maas/SystemBlock.tsx` — media slot + meta line
- `src/pages/what-we-do/MarketingMaaS.tsx` — wire ClientWall into order
- `src/index.css` — `.media-ph`, `.logo-cell`, tightened `.manifesto-row`

## Out of Scope
- Actual videos / images / logos (placeholders only — you'll add later).
- Header / Footer / Homepage / CaaS / Zenzai pages.
- New npm dependencies.

