# Pricing Page — Full Build (SalesSight-inspired, Lavender Brand)

New `/pricing` route. Vibe pulled from the reference: **soft purple-to-blue gradient hero, large serif headline, floating glass stat cards overlapping the hero, big rounded gradient feature tiles, clean white surface with generous whitespace**. Translated into our lavender system (Bricolage display + Space Grotesk body, lav-purple/magenta/pink + gold, glass-lavender). All copy verbatim from `base/_unpacked/index.html` lines 1387–1470.

## Route + nav

- New page `src/pages/Pricing.tsx` mounted at `/pricing` in `App.tsx`.
- `Header.tsx` + `Footer.tsx` "Pricing" links repointed from anchors → `/pricing`.

## Sections (top → bottom)

**1. `PricingHero.tsx`** — gradient hero with floating preview cards
- Full-width section with a soft lavender→pink→sky radial gradient background (mirrors reference's purple haze).
- Centered chip `◆ PRICING · TRANSPARENT`, large H1 *"Honest pricing."* with gold italic *"Built around outcomes, not hours."*, sub paragraph verbatim (line 1391).
- Below the headline: a small `glass-lavender` "Free Audit" inline pill row (email-bar style from reference) — "Start with a free 30-min audit" + `cta-purple` "Book Free Audit →" button.
- **Floating overlap row** (mirrors reference's 3 floating dashboard cards bridging hero → next section): three small `glass-lavender` preview cards stacked at the hero's bottom edge, slight rotation, showing micro-versions of the 3 packages (Starter / Growth / Full System) with just name + price chip. Pure decoration to create the editorial overlap effect.

**2. `PricingPackages.tsx`** — three package cards
- Eyebrow `Packages` (centered), H2 *"Pick where you start. Scale when it works."* (synthesized headline, kept brand-tone).
- 3-column grid (stacks on mobile). All copy verbatim from lines 1398–1422.
  - **Starter** — light `glass-lavender` card, gold left rule, price in display font, ghost CTA.
  - **Growth** — featured center card on dark `tile-cosmic` surface with gold "MOST CHOSEN" pill, lav-purple solid CTA, slightly elevated (scale 1.03, stronger shadow) — mirrors reference's purple gradient highlight tile.
  - **Full System** — light `glass-lavender` card, magenta left rule, ghost CTA.
- Each card: tier name (mono uppercase), title (display), description, big price + sub, hairline divider, feature list with lav-purple bullet dots, CTA at bottom.

**3. `PricingGuarantee.tsx`** — 90-day guarantee band
- Two-column `glass-lavender` panel (reuse pattern from `HowGuarantee`). Left = eyebrow `The Guarantee` + H3 + body verbatim (line 1425). Right = giant `90D` glyph in gold display + "Guaranteed" mono label on lav-purple radial.

**4. `PricingTables.tsx`** — per-service pricing
- Eyebrow `Per-Service Pricing`, H2 *"Every service. Every price. No mystery."* (synthesized).
- Three stacked table blocks, each in its own `glass-lavender` rounded container with section header + colored chip:
  - **CaaS — Creative as a Service** (gold `ENGINE 01` chip) — 8 rows verbatim (lines 1433–1440), columns: Service / Our Price / Market Rate.
  - **Zenzai — Automations** (lav-purple `LAYER 01` chip) — 6 rows verbatim (lines 1446–1451), columns: Automation / Setup / Monthly.
  - **MaaS — Marketing** (pink `ENGINE 02` chip) — 6 rows verbatim (lines 1457–1462), columns: Service / Price.
- Tables: Bricolage body, lav-purple hairline row dividers, hover row tint, sticky header, `overflow-x-auto` wrapper for mobile.

**5. `PricingComparison.tsx`** — visual rhythm break (inspired by reference's "Data-driven Decision Making" + "Real-time Analytics" gradient tiles)
- 2-column grid:
  - Left: large rounded gradient tile (lav-purple → pink, like reference's pink card) — small mock preview card inside (e.g., "Traditional Agency / ₹20k–1.5L per month") + below it "AgenzI CaaS / from ₹2,999/mo" highlight. Headline *"Same output. Different cost structure."* + short body.
  - Right: light `glass-lavender` tile with a subtle bar-chart placeholder graphic + headline *"Outcomes you can actually measure."* + 3 stat pills (20–40% Cost ↓ · 2–5× Output ↑ · 90-Day Guarantee).
- Pure brand expression, supplements the table data without inventing pricing.

**6. `PricingCta.tsx`** — closing band
- Dark `tile-cosmic` rounded block. H2 *"Not sure where to"* + gold italic *"start?"* Sub verbatim (line 1468). Single primary CTA `Book Your Free AI Audit →`.

## Cross-cutting

- Page wrapper: `LenisProvider` + `surface-lavender` + `<Header/>` + sections + `<Footer/>` (matches `About.tsx` / `HowItWorks.tsx` pattern).
- All CTAs, package cards, table rows, chips get `data-magnify` for the magnifier cursor.
- Body copy in tables/cards naturally triggers the new **Reading Lens** cursor state.
- `Reveal` wrappers (one-time, no scroll-velocity scrub) on sections.

## Files

**Created**
- `src/pages/Pricing.tsx`
- `src/components/site/pricing/PricingHero.tsx`
- `src/components/site/pricing/PricingPackages.tsx`
- `src/components/site/pricing/PricingGuarantee.tsx`
- `src/components/site/pricing/PricingTables.tsx`
- `src/components/site/pricing/PricingComparison.tsx`
- `src/components/site/pricing/PricingCta.tsx`

**Modified**
- `src/App.tsx` — register `/pricing` route
- `src/components/site/Header.tsx` — Pricing link → `/pricing`
- `src/components/site/Footer.tsx` — Pricing link → `/pricing`

**Untouched**
- All Home / CaaS / Zenzai / MaaS / About / How It Works content components, design tokens, Lenis scroll, magnifier cursor, MetaballsGL.
