

# Zenzai Page Full Rebuild + CaaS Marquee Fix

Inspiration: the uploaded MDS screenshot — calm white surface, soft purple/blue accents, large rounded media tiles, clean stat/feature cards with numbered chips, dark cosmic feature panel, dark contact band. Translated into our **lavender brand system** (Bricolage + Space Grotesk, lav-purple/magenta/pink + gold), **not** copied 1:1. Content lifted verbatim from `base/_unpacked/index.html` (Zenzai sections).

---

## Part 1 — Zenzai page (full revamp)

### Strip
Remove `LeftRail`, `CursorPortal`, dark `ZenzaiHero` / `ZenzaiAbout` / `LayerServices`, hand-rolled footer ribbon. Page becomes a clean lavender stack like Home/CaaS.

### Keep
**`MetaballsGL`** interactive WebGL — preserved as the hero's interactive element, re-tinted via lavender CSS vars. Reduced-motion fallback (`CursorMetaballs2D`) stays.

### New components in `src/components/site/zenzai/lavender/`

**1. `ZenLavenderHero.tsx`** — clean two-column hero (mirrors MDS hero rhythm)
- Left: chip `Engine 03 · Zenzai`, H1 *"You've already tried AI."* + gradient italic line *"You just never built the system around it."*, sub copy verbatim from source, dual CTA (`cta-purple` Book Free Audit + ghost See services).
- Right: large rounded `glass-lavender` media tile with `MetaballsGL` inside — same "framed media block" feel as MDS hero image, but lavender.
- Tiny `ScrollTeaser` at bottom (CSS pulse, no JS).

**2. `ZenPillars.tsx`** — 3-feature row (mirrors MDS "Індивідуальний підхід / Якість / Підтримка" row)
- Three light cards with a small lav-purple/gold glyph plate on top, short title, 1-line sub.
- Content from source: **Automate · Integrate · Build** taglines.

**3. `ZenIntroBlock.tsx`** — section intro + "6 reasons" style grid (mirrors MDS "6 переваг" panel)
- Left column: eyebrow `Three Layers`, H2 *"Start with automations. Add integrations. Build what doesn't exist yet."* (gradient on last line), short body, CTA.
- Right: a tall dark cosmic tile (`tile-cosmic`) labeled **Layer 01 — Automations** as the "highlighted" card.
- Below: 5 numbered light cards (02–06) for the remaining layers/themes from source (Integrations, Custom AI, Compounding, Ownership, Speed). Numbers in gold display type, lav-purple bullet + title + 1-liner.

**4. `ZenLayerServices.tsx`** — full accordion stack (lavender skin of `ServiceAccordion`)
- Three blocks (Layer 01 / 02 / 03) with eyebrow + gradient headline + accordion of all services from source lines 1351–1390 (verbatim copy + tags).
- One-time scroll reveal only (no scroll-velocity scrub).

**5. `ZenContactBand.tsx`** — dark CTA band (mirrors MDS dark contact strip)
- Dark cosmic background, left headline *"Your business is running on repetition AI should be doing."* + gradient *"Let's find out how much that's actually costing you."*, right side: `cta-purple` Book Free Audit + ghost See pricing + small "limited spots" note. Replaces previous footer ribbon.

**6. `ScrollTeaser.tsx`** (shared, also used on CaaS hero)
- Small vertical hairline `h-10 w-px bg-[hsl(var(--lav-purple)/.4)]` + "Scroll" label in `font-mono-tech text-[10px]`, soft pulse keyframe. Pure CSS — never reacts to mouse/scroll.

### Page composition (`IntelligenceZenzai.tsx`)
```
<LenisProvider>
  <div className="surface-lavender min-h-screen">
    <Header />
    <ZenLavenderHero/>           (MetaballsGL preserved inside)
    <MarqueeStatement words={["Automate","Integrate","Build","Compound"]} />
    <ZenPillars/>
    <ZenIntroBlock/>             (id="zen-svcs")
    <ZenLayerServices/>
    <ZenContactBand/>
    <Footer />
  </div>
</LenisProvider>
```
All interactive elements get `data-magnify` so the magnifier cursor works.

---

## Part 2 — CaaS scroll teaser fix (and global)

**Problem**: `MarqueeStatement` listens to Lenis scroll velocity and rewrites `animationDuration` on every event → it speeds up wildly with the wheel and feels "vague / chasing the mouse".

**Fix** (`src/components/site/caas/MarqueeStatement.tsx`):
- Remove the Lenis velocity listener. Single fixed CSS speed, calm and constant.
- Downsize: `text-3xl md:text-5xl` (was 5xl/7xl), `py-4` (was py-8), gap-8, lighter border, lav-purple dot. Becomes a refined small ticker — consistent with page vibe.

**Add `ScrollTeaser`** at the bottom of `CaasOrbitalHero` (the same component used on Zenzai hero) — small, on-brand, never reacts to scroll.

---

## Files

**Created**
- `src/components/site/zenzai/lavender/ZenLavenderHero.tsx`
- `src/components/site/zenzai/lavender/ZenPillars.tsx`
- `src/components/site/zenzai/lavender/ZenIntroBlock.tsx`
- `src/components/site/zenzai/lavender/ZenLayerServices.tsx`
- `src/components/site/zenzai/lavender/ZenContactBand.tsx`
- `src/components/site/zenzai/lavender/ScrollTeaser.tsx`

**Modified**
- `src/pages/what-we-do/IntelligenceZenzai.tsx` — full rewrite, lavender stack
- `src/components/site/caas/MarqueeStatement.tsx` — remove velocity listener, downsize
- `src/components/site/caas/lavender/CaasOrbitalHero.tsx` — append `<ScrollTeaser/>`
- `src/index.css` — `.scroll-teaser` keyframe (pulse hairline) if needed

**Untouched**
- `MetaballsGL` (re-skinned via CSS vars only)
- All Home/CaaS sections, Header, Footer, design tokens, magnifier cursor

