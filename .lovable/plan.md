

# Make engine cards swipe over each other (deck-of-cards stack)

## What changes

Rewrite `src/components/site/home/EnginesStack.tsx` to use a single shared pinned stage so cards physically stack on top of one another as you scroll.

## How it works

**Structure:**
```text
<section>            ← tall scroll container, height: ~300vh
  <div sticky>       ← pinned viewport (h-screen, top-0)
    <Card 1 />       ← z-10, always at rest position
    <Card 2 />       ← z-20, starts translateY(110%), animates to 0
    <Card 3 />       ← z-30, starts translateY(110%), animates to 0
  </div>
</section>
```

**Animation:**
- One `useScroll` on the outer section (`offset: ["start start", "end end"]`) → single `scrollYProgress` 0→1.
- Card 1: static, no transform. Sits at the bottom of the z-stack as the base.
- Card 2: `y` interpolates from `110%` → `0%` over progress range `[0.15, 0.45]`. Slides up over Card 1 and rests there.
- Card 3: `y` interpolates from `110%` → `0%` over progress range `[0.55, 0.85]`. Slides up over Card 2 and rests there.
- **No opacity changes. No scale changes.** Cards stay solid and full-size — they just get covered.
- Final 15% of scroll = all three landed and held before the section unpins.

**Why this matches the reference:**
- Shared sticky stage means all 3 cards live in the same pinned frame for the entire scroll duration (no card "leaves" early).
- Pure `translateY` on solid cards = the deck-of-cards covering effect.
- Increasing `z-index` per card guarantees newer cards land on top.

**Active index / counter:**
- Derived from `scrollYProgress` via `useMotionValueEvent`:
  - progress < 0.30 → active = 0
  - 0.30 ≤ progress < 0.65 → active = 1
  - progress ≥ 0.65 → active = 2
- Counter + dots styling preserved as-is.

**Mobile (`<lg`):** unchanged — simple stacked list, no sticky/pin behavior.

**Reduced motion:** unchanged — flat list of all three cards.

## Files to update

- `src/components/site/home/EnginesStack.tsx` — replace per-card sticky pattern with single shared sticky stage + absolute-positioned cards using pure translateY.

## Preserved

- `EngineCard` component and all card content
- Header copy ("One system. Three engines." + H2)
- Counter + dots visual style
- Mobile + reduced-motion fallbacks

## Out of scope

- CaaS / MaaS / Zenzai page updates (still waiting on screenshots)
- Any card visual/content changes

