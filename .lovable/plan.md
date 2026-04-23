

# Hero copy sync + footer logo + fix engines stack animation

Three changes in one pass.

## 1. Restore homepage hero copy (`src/components/site/home/Hero.tsx`)

- Eyebrow: `Human + AI · One System · Built for Your Business`
- Add sub-headline between H1 and body: *"The question is — how long can you afford to stay where you are?"* (clamp 17–22px, muted-foreground/85, medium weight)
- Expand body to: *"While you're managing vendors, chasing updates, and juggling tools — they've already streamlined everything. AgenzI replaces agencies, tools, and manual work with **one intelligent system** built for your business."*
- Add stats strip below CTA row (4 cols desktop / 2 cols mobile, top border `border-foreground/10`):
  - **70%** — Lower cost than traditional agencies
  - **48h** — From brief to live creative
  - **3** — Services. One integrated system.
  - **90D** — Performance guarantee in writing
- Keep CTA buttons, HeroTiles, lavender surface, and layout unchanged.

## 2. Footer logo 4× (`src/components/site/Footer.tsx`)

- `<img>` className: `h-6 w-auto opacity-80` → `h-24 w-auto opacity-80`

## 3. Fix the engines stack animation (`src/components/site/home/EnginesStack.tsx`)

The current pinned-stack approach with `useTransform` on absolutely-positioned cards keeps producing fragile sequencing (Zenzai still not landing cleanly). Replace it with a simpler, deterministic pattern that's been battle-tested for this exact "stacked cards on scroll" effect:

**New approach — sticky cards in normal flow:**
- Section becomes a vertical container (no fixed `400vh` + sticky viewport hack).
- Each engine card wraps in a `sticky top-[12vh]` div with its own scroll spacer (`h-[100vh]`).
- Cards naturally stack as the user scrolls: each new card slides up from below and lands on top of the previous one because each has a slightly higher `z-index` and its sticky position.
- Apply a subtle Framer Motion fade/scale on the previous card using `useScroll` per-card with `target: cardRef, offset: ["start start", "end start"]` — fully scoped, no global progress range coordination.
- Counter + dots driven by an `IntersectionObserver` on each card's sticky wrapper (whichever card's center is closest to viewport center wins).

**Why this fixes it:**
- No more globally-shared `scrollYProgress` ranges that have to be hand-tuned.
- Each card owns its own enter/rest/exit lifecycle independently.
- Zenzai naturally rests at the top until the section fully exits — guaranteed by sticky behavior, not interpolation math.
- Removes the WAAPI/`useTransform` edge cases that caused the prior runtime errors.

**Mobile (`<lg`)**: keep the existing simple stacked list (no sticky).

**Preserved**: the `EngineCard` component, header copy, counter + dots styling, and overall section visual language.

## Files to update

- `src/components/site/home/Hero.tsx` — eyebrow, sub-headline, body, stats strip
- `src/components/site/Footer.tsx` — logo `h-6` → `h-24`
- `src/components/site/home/EnginesStack.tsx` — rewrite to sticky-per-card pattern, IntersectionObserver-driven active index

## Out of scope

- CaaS / MaaS / Zenzai page redesigns (waiting on screenshots)
- Other homepage sections
- EngineCard internals

