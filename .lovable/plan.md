

# About Page — Full Build (Zenrixa-inspired, Lavender Brand)

New `/about` route. Vibe pulled from the reference: large editorial headline left + dark "subject" media tile right, soft globe motif, pill chip cluster, big rounded section blocks, generous white space. Translated into our lavender system (Bricolage + Space Grotesk, lav-purple/magenta/pink + gold, glass-lavender). All copy verbatim from `base/_unpacked/index.html` lines 1506–1554.

## Route + nav

- New page `src/pages/About.tsx` mounted at `/about` in `App.tsx`.
- `Header.tsx` + `Footer.tsx` "About" links repointed from anchors → `/about`.

## Sections (top → bottom)

**1. `AboutHero.tsx`** — editorial split hero
- Left: chip `About · AgenzI` (chip-purple), H1 *"We're not building an agency."* + gold italic *"We're building the operating system for business growth."* Dual CTA: `cta-purple` Book Free Audit · ghost See pricing.
- Right: tall rounded `glass-lavender` media tile (placeholder portrait silhouette) with a small floating "Design to explore" mini-card overlay (lavender glass).
- Bottom strip across hero (matching reference's "Years Exp · Based in · Scroll Down"): `5+ Yrs Building Systems · Based in Hyderabad, India · Scroll Down ↓` in `font-mono-tech text-[11px]`.
- Faint giant "AGENZI" wordmark behind tile (low-opacity, like "ZENRIXA" in reference).

**2. `AboutWeCreate.tsx`** — pill cluster row (mirrors reference's We / Create / → / Future pills)
- 4 oversized pill chips centered: **We** (ghost) · **Build** (cta-purple solid) · **→** (dark cosmic circle) · **Systems** (ghost). Pure brand expression, no extra copy.

**3. `AboutVision.tsx`** — "The Vision" (lines 1514–1521)
- Left: faint dotted globe SVG + small chip "About Us · Hub supports businesses worldwide".
- Right: eyebrow `The Vision`, body paragraph verbatim with *"AI is creating something new"* in lav-purple italic.
- Below: 3-card grid (`vgrid`): **Human + AI, not Human vs AI** · **Systems over services** · **Outcomes over activity** — light glass cards, gold left rule, hover-lift.

**4. `AboutRoadmap.tsx`** — "Where we're going" (lines 1524–1539)
- Eyebrow `Roadmap`, H2 *"Where we're going."*
- Horizontal 4-step timeline with hairline connector + lav-purple nodes: **2024 Foundation · 2025 Systemisation · 2026 Expansion · 2027+ Platform**. Each node = year in gold display, title, 2-line description. Reveal-on-scroll one-time only.
- Below: large `glass-lavender` manifesto quote panel — quote verbatim, signature line in lav-purple mono. Subtle gold quotation mark glyph.

**5. `AboutPrinciples.tsx`** — "What We Stand For" (lines 1541–1552)
- Eyebrow `What We Stand For`, H2 *"Our principles don't change with the brief."* (gold on `brief.`)
- 2×2 grid of 4 cards, each with a colored left rule (gold, lav-purple, magenta, pink) matching the source's `--gold/--peri/--pink/--nebula`. Title + description verbatim.

**6. `AboutCta.tsx`** — closing dark band (mirrors reference's dark "Swat Agency" tile feel)
- Dark cosmic surface (`tile-cosmic`), large rounded block. Left: H2 *"Ready to build the system your business deserves?"* (gold on `business deserves?`). Sub *"Start with a free 30-minute audit. No commitment. Just clarity."*
- Right: `cta-purple` Book Your Free AI Audit + ghost See pricing + small "limited spots" note.

## Cross-cutting

- All sections wrapped in `surface-lavender` parent on `About.tsx` with `<Header/>` and `<Footer/>`.
- `data-magnify` on every CTA, chip, nav link, principle card title, roadmap node so the magnifier cursor works.
- Reveal animations: simple one-time `Reveal` wrappers — no scroll-velocity scrubs (avoid the marquee bug class).
- Placeholders use existing `MediaPlaceholder` component for the hero portrait + globe motif.

## Files

**Created**
- `src/pages/About.tsx`
- `src/components/site/about/AboutHero.tsx`
- `src/components/site/about/AboutWeCreate.tsx`
- `src/components/site/about/AboutVision.tsx`
- `src/components/site/about/AboutRoadmap.tsx`
- `src/components/site/about/AboutPrinciples.tsx`
- `src/components/site/about/AboutCta.tsx`

**Modified**
- `src/App.tsx` — register `/about` route
- `src/components/site/Header.tsx` — About link → `/about`
- `src/components/site/Footer.tsx` — About link → `/about`

**Untouched**
- All home / CaaS / Zenzai / MaaS components, design tokens, magnifier cursor, Lenis scroll.

