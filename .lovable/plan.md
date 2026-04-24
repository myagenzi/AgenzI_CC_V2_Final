

# Cursor Upgrade + About Polish + How It Works Page

## Part A — Dual-state custom cursor (`Cursor.tsx` + `index.css`)

Replace current single-mode cursor with a state machine driven by hover target type.

**State detection** (in `Cursor.tsx`):
- `READING` — hover over `p, li, span, blockquote, .lead, .sd, small, td` (excludes `h1, h2, h3, a, button`).
- `SIGNAL` — hover over `a, button, [role="button"], input, [data-magnify], .chip-purple, nav a, footer a, .pill, .eyebrow`.
- `IDLE` — anywhere else.

**State 1 — Reading Lens (READING)**
- Ring grows to **64×64**, no border, `backdrop-filter: blur(0.4px) contrast(1.05)` + `transform: scale(1.1)` on a pseudo-mask so text *underneath* the lens visually bulges (CSS-only, GPU-cheap).
- Soft lavender vignette ring (`box-shadow: inset 0 0 0 1px hsl(var(--lav-purple)/.45), 0 8px 30px hsl(var(--lav-purple)/.18)`).
- Center dot fades to 0.

**State 2 — Signal Pulse (SIGNAL)**
- Ring stays compact **34×34** with a clear **1.5px solid lav-purple border + center dot** (the "circle and dot" intact).
- 3 concentric rings rendered as absolutely-positioned spans, each with a `signalPulse` keyframe animation (scale 1 → 2.4, opacity 0.6 → 0) at staggered delays `0s / 0.5s / 1s`, infinite.
- Implemented with **CSS keyframes** (not Framer Motion — already in stack, lighter; matches user intent of "ripple animation"). If user explicitly wants Framer Motion, swap in later — CSS path is identical visually.

**State 3 — Idle (default)**
- Current circle+dot, but **boosted contrast**: border 2px, add subtle outer glow `0 0 0 2px hsl(var(--background)/.5)` so cursor is clearly visible on both light and dark sections (current visibility issue).

**Smoothing**
- Replace lerp factor `0.18` with critically-damped spring approximation: `vx += (target - pos) * stiffness; vx *= damping;` (`stiffness=0.18, damping=0.72`) for the "weighted, premium feel".
- State transitions animated via 220ms `cubic-bezier(.2,.8,.2,1)` on size/border/background.

**CSS additions** in `index.css`:
- `@keyframes signalPulse` (scale + opacity).
- `.cursor-idle / .cursor-reading / .cursor-signal` modifier classes.
- `.cursor-reading::before` — backdrop-filter mask layer for bulge effect.

## Part B — About page polish

- **`AboutHero.tsx`**: remove the giant background "AGENZI" wordmark block (lines 16–27).
- **`AboutCta.tsx`**: increase button gap from `gap-5` to `gap-7` and add `mt-2` to the "See pricing" wrapper so it sits clearly below "Book Your Free AI Audit" with no overlap.
- **`Footer.tsx`**: bump logo from `h-24` → `h-48` (2× larger), remove `opacity-80` for full clarity, add `drop-shadow-sm` for refinement.

## Part C — How It Works page (new `/how-it-works` route)

Vibe from reference screenshot: **clean lavender surface, large rounded glass tiles, soft purple/blue glassmorphic accents, dark cosmic feature panel, numbered stat cards with pill chips, generous whitespace**. Brand tokens only (Bricolage display, Space Grotesk body, lav-purple/gold/pink). Content **verbatim** from `base/_unpacked/index.html` lines 1476–1502.

### New components in `src/components/site/how/`

**1. `HowHero.tsx`** — split editorial hero
- Left: chip `◆ How It Works` (chip-purple), H1 *"From conversation to"* + gold italic *"running system. 90 days."*, sub *"Five steps. Measurable outcomes at every stage."*, dual CTA (Book Free Audit + See pricing).
- Right: a **floating glassmorphic composition** mirroring the screenshot — stacked translucent rounded-square tiles (3 of them, slight rotation, lav-purple/pink tints) sitting on a glass "tray" disc. Pure CSS + a couple of small inner pill chips ("Audit", "Deploy", "Compound"). No external assets.
- Bottom strip: stat-pill row (mirrors screenshot's 4 number cards): **5 Steps · 90 Days · 20–40% Cost ↓ · 2–5× Output ↑** as small `glass-lavender` chips with display number + tiny lav-purple pill label.

**2. `HowSteps.tsx`** — the five steps
- Eyebrow `The Five Steps`, H2 *"Audit. Design. Deploy. Optimise. Compound."* (gold on `Compound`).
- **Vertical timeline** with a hairline lav-purple connector on the left and 5 numbered nodes. Each step = `glass-lavender` rounded card with: gold display number `01–05`, lav-purple week pill (`Week 1`, `Week 2–3`…), title in display font, body copy, and an `Output:` block with gold left-rule and italic text. Copy verbatim from HTML lines 1489–1493.
- One-time `Reveal` per row, no scroll-velocity scrub.

**3. `HowGuarantee.tsx`** — 90-day guarantee block
- Two-column `glass-lavender` panel: left = eyebrow `The Guarantee` + H3 *"90-day performance guarantee. In writing. No asterisks."* + body copy verbatim (line 1497). Right = giant `90D` glyph in gold display type with "Guaranteed" mono label underneath, on a soft lav-purple radial background.

**4. `HowFeatureGrid.tsx`** — visual rhythm break (inspired by screenshot's "Tervisical / Mr Riveting" tiles)
- 2×2 mixed grid: a dark `tile-cosmic` "Why this works" tile with 3 bullet points (Human Strategy + AI Execution / Same operator end-to-end / Outcomes contracted in writing — derived from HTML's surrounding context), plus three light `glass-lavender` tiles (Speed · Clarity · Compounding) each with a small lav-purple icon plate. Keeps the editorial feel without inventing copy.

**5. `HowCta.tsx`** — closing band (mirrors home/about CTA pattern, content from line 1501)
- Dark `tile-cosmic` rounded block. H2 *"Step one is a"* + gold italic *"30-minute conversation."* Sub *"No pitch. No commitment. Just a clear picture of what's possible — and a roadmap that's yours to keep."* Single primary CTA *"Book Your Free AI Audit →"* with the button-spacing fix from Part B already applied.

### Page composition (`src/pages/HowItWorks.tsx`)
```
<LenisProvider>
  <surface-lavender>
    <Header/>
    <HowHero/>
    <HowSteps/>
    <HowGuarantee/>
    <HowFeatureGrid/>
    <HowCta/>
    <Footer/>
  </surface-lavender>
</LenisProvider>
```

### Routing + nav
- Register `/how-it-works` in `App.tsx`.
- `Header.tsx` "How It Works" → `/how-it-works` (currently `/#how-it-works`).
- `Footer.tsx` "How It Works" → `/how-it-works`.

All interactive elements get `data-magnify`. Body copy in step cards naturally triggers the new **Reading Lens** state.

## Files

**Created**
- `src/pages/HowItWorks.tsx`
- `src/components/site/how/HowHero.tsx`
- `src/components/site/how/HowSteps.tsx`
- `src/components/site/how/HowGuarantee.tsx`
- `src/components/site/how/HowFeatureGrid.tsx`
- `src/components/site/how/HowCta.tsx`

**Modified**
- `src/components/site/effects/Cursor.tsx` — dual-state machine, spring smoothing, signal rings
- `src/index.css` — `signalPulse` keyframes, `.cursor-reading/.cursor-signal/.cursor-idle` styles, idle visibility boost
- `src/components/site/about/AboutHero.tsx` — remove giant AGENZI wordmark
- `src/components/site/about/AboutCta.tsx` — `gap-7` button spacing
- `src/components/site/Footer.tsx` — logo `h-48`, full opacity, drop-shadow
- `src/App.tsx` — register `/how-it-works`
- `src/components/site/Header.tsx` — How It Works link → `/how-it-works`

**Untouched**
- All Home / CaaS / Zenzai / MaaS / About content components, design tokens, Lenis scroll, MetaballsGL.

