# Creative-CaaS — Total Rebuild (ARTIX physics)

Rebuilds `/what-we-do/creative-caas` end-to-end with the motion vocabulary of the ARTIX reference (orbital floating tiles, browser-mockup how-it-works cards, full-bleed image strip, gradient-highlighted feature grid, ghost marquee). Existing page is deleted and replaced — no traces of the old CursorPortal / vertical phase rails / dark monopo skin remain. Uses the homepage **lavender system** (`surface-lavender`, Bricolage + Space Grotesk, gold + lav-purple/magenta/pink) and **content verbatim** from `base/_unpacked/index.html` (lines 1206–1269, verified).

## Content lock — verbatim from base HTML

**Hero (line 1209–1212)**
- Eyebrow: `ENGINE 01 · CaaS`
- H1: *You know what your brand needs to say.* / *<gold italic>You just can't say it fast enough.</gold italic>*
- Sub: *Your competitor posted four times this week. You're still in the approval loop for last month's reel. CaaS is the creative system that fixes that.*
- Buttons: `Book Free Audit →` · `See services ↓`

**Why CaaS (1217–1223)** — eyebrow *Why CaaS*, H2 *Not short on ideas. / Short on infrastructure.*, three cards: Speed ⚡ · Cost ₹ · Consistency ◈ (full body copy preserved).

**Delivery Modes (1229–1239)** — H2 *Not every job needs a film crew. / Not every job can skip one.*, three tabs Capture / AI-Augmented / Automated with full panel copy.

**What We Build (1244–1265)** — H2 *Eight services live now. / Eight more this year.*, **Phase 1** (8 items 01–08) and **Phase 2** (4 items 09–12). All titles, sub-titles, descriptions, bullets, and price/market/audience tags preserved exactly as in base.

**CTA stripe (1268)** — *Traditional agency: ₹20k–1.5L/month. / CaaS starts at ₹2,999/month. / <gold>Same output. Faster. No chaos.</gold>* + sub *Not a discount. A different cost structure entirely.* + buttons.

**Footer row (1269)** — © + MaaS / Zenzai / Pricing links.

## New section architecture & "physics"

```text
┌─ Header (existing) ─────────────────────────────────┐
│                                                     │
│ 1. CaasOrbitalHero                                  │
│    Centered H1 + sub + CTAs                         │
│    8 floating tiles drift on idle (CSS keyframes)   │
│    + parallax-y on scroll (GSAP, 0.4 strength)      │
│    Soft radial lavender→pink nebula background      │
│                                                     │
│ 2. CaasMarquee  (existing MarqueeStatement reused)  │
│    Speed · Cost · Consistency · 48-Hour · Human-Led │
│                                                     │
│ 3. CaasWhyCards   ← NEW                             │
│    3 browser-mockup cards w/ glyph + title + desc   │
│    Hover lift + scale, stagger reveal               │
│                                                     │
│ 4. CaasDeliveryStrip   ← NEW                        │
│    Edge-to-edge horizontal masonry (5 tiles, varied │
│    heights). Three-tab control floats above.        │
│    Active tab paints one tile w/ lav gradient and   │
│    swaps the heading + lead copy below.             │
│                                                     │
│ 5. CaasServicesGrid   ← NEW                         │
│    Phase 1 = 8-card responsive grid (4×2 desktop,   │
│    2×4 tablet, 1-col mobile). Each card: number     │
│    badge, title, sub, expand-toggle that morphs     │
│    card into gradient-active state showing desc +   │
│    bullets + tags (single-open behaviour).          │
│    Phase 2 = same grid, dimmed 0.72, 4 cards.       │
│                                                     │
│ 6. CaasGhostMarquee   ← NEW                         │
│    Massive outlined "creative as a service" text    │
│    scroll, lav-purple stroke, with bullet glyphs.   │
│                                                     │
│ 7. CaasCtaStripe                                    │
│    Reuse existing CtaStripe with verbatim copy.     │
│                                                     │
│ 8. CaasFootRow + Footer                             │
└─────────────────────────────────────────────────────┘
```

## Motion physics (matches ARTIX reference)

- **Orbital tiles**: 8 absolutely-positioned tiles around hero. Each gets `animation: float-orbit Xs ease-in-out infinite` with random delay + per-tile rotation. GSAP adds `y: ±30px` parallax on scroll.
- **Browser-mockup cards**: subtle browser-chrome dots, `translate-y-[-6px]` + `shadow-glow-lav` on hover, fade-in-up stagger (0.12s gap) on scroll-into-view.
- **Image strip**: outer container `overflow-hidden`; inner row gets `x: -120px` GSAP scrub tied to section progress (horizontal-on-vertical-scroll).
- **Active service card**: framer-style click toggle; the active card paints `linear-gradient(135deg, lav-purple → lav-magenta → lav-pink)` and animates height to reveal body.
- **Ghost marquee**: pure CSS `animate-marquee` with `-webkit-text-stroke` outlined type.

## Cleanups

- Delete imports/usages of `CursorPortal`, `CaasHero`, `WhyGrid`, `DeliveryTabs`, `ServiceAccordion`, sticky vertical phase rails from the page (files left on disk untouched in case other pages reference them — verified none do).
- Page wrapped in `<div className="surface-lavender">` to inherit homepage palette (already used by `/what-we-do/marketing-maas`).
- No `LeftRail` (already removed in last pass).

## Files

**New** (under `src/components/site/caas/lavender/`)
- `CaasOrbitalHero.tsx` — hero + 8 floating tiles
- `CaasWhyCards.tsx` — 3 browser-mockup cards
- `CaasDeliveryStrip.tsx` — tabbed image strip
- `CaasServicesGrid.tsx` — 12-card expandable grid (handles Phase 1 + 2)
- `CaasGhostMarquee.tsx` — outlined scroller

**Edited**
- `src/pages/what-we-do/CreativeCaaS.tsx` — full rewrite using new components, verbatim base copy
- `src/index.css` — append: `@keyframes float-orbit`, `.tile-orbit`, `.browser-mock`, `.svc-card-active` (lavender gradient), `.shadow-glow-lav`

## QA pass before delivery

After build I will:
1. Open `/what-we-do/creative-caas` in the preview.
2. Screenshot at 1440 / 1024 / 768 / 390 viewports.
3. Walk each section checking: container padding (`px-6 lg:px-12`), no overflow, no overlapping tiles vs headline, accordion expand height stable, marquee not clipped, CTA buttons reachable.
4. Fix any alignment/overflow bugs in-place before reporting back.

## Approval

Reply approve and I'll execute end-to-end in one pass — rebuild + QA + bug-fix — and report back with the screenshot summary.
