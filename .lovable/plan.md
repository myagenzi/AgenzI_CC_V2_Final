

# Zenzai — Reference-Grade Rebuild

Direction: **cellinteractive.jp = motion + layout grammar**, **base HTML = content source**. Goal is mercury-liquid metaballs, scrubbed scroll choreography, pinned asymmetric layouts — at the fidelity of the reference, not a CSS approximation.

---

## New dependencies (greenlight required, all small + battle-tested)

| Lib | Size | Used for |
|---|---|---|
| `gsap` + `ScrollTrigger` | ~70KB | Pinned sections, scrubbed reveals, timeline sequencing |
| `@studio-freight/lenis` | ~5KB | Smooth scroll (drives ScrollTrigger) |
| `ogl` | ~30KB | Real WebGL fragment-shader metaballs |

No three.js, no GSAP paid plugins. Pure runtime, no build changes.

---

## Section-by-section build

### 1. Hero — WebGL fragment-shader metaballs (replaces canvas hack)

**New:** `src/components/site/zenzai/MetaballsGL.tsx`
- OGL `Renderer` + full-viewport quad with a fragment shader.
- Shader: signed-distance-field merge of N metaballs (5–7), cursor as an additional charge, smooth-min for liquid merge, gradient sampled `--gold → --royal → transparent` at the iso-surface.
- Cursor input from JS uniform (normalized + lerped for smoothness).
- Scroll uniform (0→1) drives a slow internal warp so the field "breathes" as you scroll past.
- WebGPU/WebGL detect: `if (!gl)` → falls back to existing `CursorMetaballs` 2D canvas → static halo for `prefers-reduced-motion`.
- Debug overlay kept (gold/royal mono panel) but values now read from shader uniforms (cursor pos, blob count, merge factor, scroll t).

`ZenzaiHero.tsx`:
- Headline gets **per-line scrubbed reveal** (GSAP `ScrollTrigger` with `scrub: true`) instead of one-shot timeout. Each line drifts in with mass-weighted easing; second clause (gold) lags 200ms.
- Hero pin: section pins for ~80vh of scroll while the metaballs warp + headline settles, then releases. Mirrors cellinteractive's hero pin.
- Eyebrow row gets a hairline that **draws left→right** during pin, then sub-paragraph + CTA row fade in.

### 2. Marquee — kept, but tied to scroll velocity

`MarqueeStatement` already exists. Wrap with a Lenis velocity reader so marquee speed reacts to scroll velocity (faster scroll = faster drift, idle = slow). Cellinteractive does this on their word ribbons.

### 3. Three Layers — true asymmetric mosaic with scrubbed parallax

`ZenzaiAbout.tsx` rewrite:
- 12-col grid: card 1 `col-span-5 row-start-1`, card 2 `col-span-4 col-start-7 row-start-1 mt-32`, card 3 `col-span-6 col-start-4 row-start-2 -mt-16`. Real overlap, intentional negative space.
- Each card's media block parallaxes at a different rate (`y: -40 to 40` via ScrollTrigger scrub) — cards drift past each other as you scroll.
- Glyph (⚡/⟳/◈) becomes oversized SVG that **rotates slowly with scroll** (continuous, not on-trigger).
- Card hover: media tile scales 1.03, gold hairline draws across bottom, copy lifts 4px. All transform-based, 60fps.

### 4. Layer Services — sticky-label vertical scroll choreography

`LayerServices.tsx` refine:
- Each `Layer` becomes a **pinned section** (~120vh): the sticky vertical label stays locked while the eyebrow → headline → keyword strip → accordion sequence reveals top-down with scrubbed timeline.
- Keyword strip animates as a **horizontal char-by-char reveal** (split text, GSAP stagger) tied to scroll progress 0.2→0.5.
- Accordion items fade up one-at-a-time as scroll passes, not all at once.
- Sticky label gains a thin progress bar (vertical line that fills as you scroll the layer) — the "engineered build log" feel from the reference.

### 5. CTA stripe — scrubbed reveal with letter-mass settle

`CtaStripe` (Zenzai instance only): headline split into characters, each letter drops in with random y-offset 20→0 driven by scroll, settles into baseline. Gold clause lights up last. Subcopy + buttons fade in after 70% reveal.

### 6. Footer ribbon — kept as-is.

---

## Shared infrastructure additions

**New:** `src/lib/lenis.tsx` — Lenis provider + ScrollTrigger sync. Mounted once in `IntelligenceZenzai.tsx` for now (not global, so CaaS/MaaS/Home stay untouched).

**New:** `src/lib/scroll.ts` — small wrapper exposing `useScrollTrigger(ref, options)` hook so components stay clean.

**Cleanup:** Old `CursorMetaballs.tsx` becomes `CursorMetaballs2D.tsx` (kept as fallback path, no longer the primary).

---

## Files Touched

| File | Action |
|---|---|
| `package.json` | Add `gsap`, `@studio-freight/lenis`, `ogl` |
| `src/lib/lenis.tsx` | NEW — Lenis provider + ScrollTrigger bridge |
| `src/lib/scroll.ts` | NEW — `useScrollTrigger` hook |
| `src/components/site/zenzai/MetaballsGL.tsx` | NEW — OGL fragment-shader metaballs + debug uniforms |
| `src/components/site/zenzai/CursorMetaballs.tsx` | Renamed → `CursorMetaballs2D.tsx`, kept as fallback |
| `src/components/site/zenzai/ZenzaiHero.tsx` | Per-line scrubbed reveal, hero pin, MetaballsGL swap |
| `src/components/site/zenzai/ZenzaiAbout.tsx` | True asymmetric 12-col mosaic, scrubbed parallax, glyph scroll-rotate |
| `src/components/site/zenzai/LayerServices.tsx` | Pinned layers, scrubbed timeline, keyword char-stagger, sticky progress bar |
| `src/components/site/caas/CtaStripe.tsx` | Optional `scrub` prop for Zenzai instance only (others untouched) |
| `src/components/site/caas/MarqueeStatement.tsx` | Read Lenis velocity, no-op if no provider (CaaS/MaaS unaffected) |
| `src/pages/what-we-do/IntelligenceZenzai.tsx` | Wrap with `LenisProvider`, pass `scrub` to `CtaStripe` |
| `src/index.css` | `.metaball-gl` canvas styles, `.layer-progress` sticky bar, mosaic parallax helpers |

## Out of Scope

- Real project artwork (placeholders stay)
- CaaS / MaaS / Home (this plan is Zenzai-only; same toolkit applied to those after Zenzai is signed off)
- Custom cursor system, page transitions, magnetic buttons (next pass)
- Font swap (separate decision)

