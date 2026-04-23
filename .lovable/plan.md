

# Reference-Grade Rebuild — CaaS, MaaS, Home (+ Zenzai hero fix)

Same doctrine as Zenzai: **reference site = motion + layout grammar, base HTML = content source, gold/royal/starlight tokens preserved**. Every page gets: Lenis smooth scroll, GSAP scrubbed choreography, asymmetric grids, scroll-velocity marquees, pinned sequences, real-feeling parallax — and zero invented copy.

---

## 0. Zenzai hero fix (quick, before anything else)

Symptom: hero text appears blank/half on load because GSAP `fromTo({yPercent:18, opacity:.55})` sets the start state immediately, and the CSS `translate-y-full opacity-0` on-mount transition collides with it. Pin also delays full reveal until scroll.

Fix in `ZenzaiHero.tsx`:
- Remove the `shown` state + CSS transition entirely (GSAP owns the reveal).
- Change scrub start state to `{yPercent: 8, opacity: 0.85}` and use a one-shot intro timeline (`scrub: false`, plays on mount in 1.1s) instead of scrub-locked. The pin keeps the section but the headline is fully readable from frame 1 of pin.
- Add a fail-safe: if `prefers-reduced-motion`, headline renders fully visible with no animation.

---

## 1. Home (`/`) — reference: **reflect.app** (calm, editorial, layered cards, slow parallax, generous whitespace, soft glows, sequenced hero)

| Section | Current | Reference-grade upgrade |
|---|---|---|
| `Hero` | Static halo, IO fade | Pinned hero (~70vh). Headline scrubbed in **per word** with mass easing. Halo becomes a **slow-drifting OGL gradient orb** (reflect-style soft glow) with cursor-reactive warp. Sub + CTAs fade in late. |
| `Ticker` | CSS marquee | Lenis-velocity reactive (idle-slow → scroll-fast). |
| `Stats` | Static count | Numbers **count up** as they scrub into view (GSAP, no third-party). Card row staggers with mass easing. |
| `ThreeEngines` | 3 equal cards | Editorial mosaic: card 1 wider + lower, card 2 narrower + higher, card 3 offset. Each card's media tile parallaxes at a different rate. Hover: gold hairline draws across, copy lifts 4px. |
| `Problem` | Side-by-side panels | Pinned section, **left panel scrolls past while right panel stays**. Reflect uses this exact horizontal-rest motion. |
| `Mirror` | Static | Sticky title on left, pain points reveal one-by-one via scrubbed timeline. |
| `HowItWorks` | 3 cards | Pinned 3-step horizontal scroll (scrub vertical scroll → translate cards horizontally). |
| `Statement` | Static | Letter-mass settle (chars drop in randomised, settle to baseline). |
| `ProofWebinar` | Static | Numbers count-up + tag pills stagger. |
| `FinalCta` | Static | Headline char-stagger + soft halo behind CTA. |

Wrap whole page with `LenisProvider`. All copy from `#pg-home`. Where the base mentions an image/video and we have none, drop a labelled `MediaPlaceholder` (already exists).

---

## 2. CaaS (`/what-we-do/creative-caas`) — reference: **monopo.london/services** (oversized typography, vertical sticky labels, asymmetric service rows, kinetic accents, marquee statement, dark with chromatic accents)

| Section | Upgrade |
|---|---|
| `CaasHero` | Pinned ~80vh. Headline per-line scrubbed with second clause (gold) lagging. Hairline draws left→right across the eyebrow row. Sub + CTAs fade in late. |
| `MarqueeStatement` | Already exists — wire to Lenis velocity (already done in shared component). |
| `WhyGrid` | Becomes a **bento mosaic** (12-col, varied span, intentional negative space). Each tile has a parallaxing background tone. |
| `DeliveryTabs` | Tab bar becomes sticky during the section; tab content cross-fades with subtle y-translate. Active tab indicator slides (GSAP `to`). |
| `ServiceAccordion` (Phase 1 + 2) | Sticky **vertical phase label** on left (monopo signature). Each accordion row has scrubbed reveal as it enters viewport. Tag pills stagger after row reveal. Click-to-open keeps existing accordion behaviour. |
| `CtaStripe` | Pass `scrub` prop (already supports it) → letter-mass settle. |
| Footer ribbon | Keep. |

All copy from `#pg-caas`.

---

## 3. MaaS (`/what-we-do/marketing-maas`) — reference: **thinkingbox.com/services** (cinematic dark hero, oversized stat callouts, system-as-architecture blocks, big chromatic gradients, scroll-pinned chapter intros)

| Section | Upgrade |
|---|---|
| `MaasHero` | Pinned hero with **video-placeholder background** that scales 1.0 → 1.08 across the pin (thinkingbox signature). Headline per-line scrubbed; accent clause in `--electric`/gold lags. |
| `MarqueeStatement` | Velocity-reactive (shared). |
| `SystemsManifesto` | Each numbered system gets a **scrubbed chapter intro**: number scales from 0.6 → 1, title char-stagger, copy fades. |
| `SystemBlock` × 3 (Performance, Growth, Perception) | Each block becomes a **pinned chapter** (~100vh): sticky title + system number on left, service list scrolls past on right with scrubbed reveal. Vertical progress bar in the sticky column. |
| `ClientWall` | Logo grid: each cell gains a subtle **scroll-driven brightness pass** (left-to-right shimmer tied to scroll). |
| `CtaStripe` | Same `scrub` prop. |

All copy from `#pg-maas`.

---

## 4. Shared infrastructure additions

| New / changed | Purpose |
|---|---|
| `src/lib/lenis.tsx` | Already exists. Wrap Home, CaaS, MaaS the same way Zenzai is wrapped. |
| `src/lib/scroll.ts` | Already exists (`useScrollSetup`). Reused by every new animation. |
| `src/components/site/effects/SoftOrb.tsx` | NEW — small OGL gradient orb shader for Home hero (replaces static halo). Falls back to CSS radial-gradient if no WebGL. |
| `src/components/site/effects/CountUp.tsx` | NEW — GSAP-driven number counter, ScrollTrigger entry. |
| `src/components/site/effects/StickyChapter.tsx` | NEW — reusable pinned-chapter wrapper (sticky title col + scrolling content col + progress bar). Used by MaaS SystemBlock and CaaS ServiceAccordion. |
| `src/components/site/effects/HorizontalSteps.tsx` | NEW — pinned vertical-scroll → horizontal-translate panel set. Used by Home `HowItWorks`. |
| `src/index.css` | Add `.soft-orb`, `.sticky-chapter`, `.h-steps`, `.bento-tile` helpers. |

All new effects components have `prefers-reduced-motion` fallbacks (no animation, content fully visible).

---

## 5. Files Touched

**Zenzai fix**
- `src/components/site/zenzai/ZenzaiHero.tsx`

**Home**
- `src/pages/Index.tsx` (wrap in `LenisProvider`)
- `src/components/site/home/Hero.tsx`, `Ticker.tsx`, `Stats.tsx`, `ThreeEngines.tsx`, `Problem.tsx`, `Mirror.tsx`, `HowItWorks.tsx`, `Statement.tsx`, `ProofWebinar.tsx`, `FinalCta.tsx`

**CaaS**
- `src/pages/what-we-do/CreativeCaaS.tsx` (already wrapped? if not, wrap)
- `src/components/site/caas/CaasHero.tsx`, `WhyGrid.tsx`, `DeliveryTabs.tsx`, `ServiceAccordion.tsx`, `ServiceGroup.tsx`

**MaaS**
- `src/pages/what-we-do/MarketingMaaS.tsx` (wrap)
- `src/components/site/maas/MaasHero.tsx`, `SystemsManifesto.tsx`, `SystemBlock.tsx`, `ClientWall.tsx`

**Shared (new)**
- `src/components/site/effects/SoftOrb.tsx`
- `src/components/site/effects/CountUp.tsx`
- `src/components/site/effects/StickyChapter.tsx`
- `src/components/site/effects/HorizontalSteps.tsx`
- `src/index.css` (helper classes)

## Out of Scope

- Real artwork/video (labelled `MediaPlaceholder` stays where needed)
- Custom cursor system, page transitions, magnetic buttons (next pass)
- Pricing / About / other base pages (not yet built)
- Font swap, copy edits (content stays verbatim from base HTML)
- New runtime dependencies — uses what we already added (gsap, ScrollTrigger, Lenis, ogl)

