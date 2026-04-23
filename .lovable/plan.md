

# Home Page Rebuild — Lavender/Purple Vibe with Brand Palette

Rebuilding the home page to match the uploaded reference (light lavender bg, dark glass stat panel, floating tile mosaic, rounded pill stats, clean card rows). Content stays verbatim. Fonts stay as-is (Bricolage Grotesque + Space Grotesk). Colors come from your brand palette below.

---

## 1. Palette mapping (home page only, scoped via `.surface-lavender`)

| Role | Hex | From your palette |
|---|---|---|
| Page background | `#F5F7FA` | Soft White Background |
| Surface dark (glass panel) | `#1C1C1C` w/ violet overlay `#4B2A99` 14% | Deep Black + Deep Violet |
| Primary | `#6C3FCF` | Brand Purple |
| Primary hover | `#8A5CFF` | Vibrant Lavender |
| Primary soft (chips/halos) | `#B983FF` | Light Lilac |
| Accent gradient start | `#6C3FCF` → `#D946EF` | Brand Purple → Neon Magenta |
| Glow / orb | `#FFB300` → `#FF8C42` | Golden Yellow → Orange Glow |
| Sparkle highlights | `#FFE066`, `#FFF3B0` | Star Glow, Light Sparkle |
| Foreground (ink) | `#1C1C1C` | Deep Black |
| Muted text | `#5B5775` (derived from #C7CDD6 darkened) | Neutral Shadow family |
| Borders / dividers | `#E5E7EB` | Light Grey |
| Foreground on dark panel | `#F5F7FA` | Soft White |

The rest of the site keeps current dark theme until you approve rolling this out.

---

## 2. Section-by-section

All copy verbatim from current components.

### Hero — two-column
- **Left (7 cols)**: glass eyebrow pill (white/70 + lilac dot), huge ink headline (no gradient, fully visible), accent clause "better systems." in Brand Purple, sub copy in muted ink, two CTAs (primary solid purple, secondary white glass).
- **Right (5 cols)**: floating mosaic of 4 rounded `MediaPlaceholder` tiles at varied sizes/rotations with soft drop-shadows. Subtle infinite float (y±6px, staggered). Behind them: soft golden orb glow (`#FFB300 → transparent` radial) — nods to your logo's center orb.
- No pin, no scrub.

### Dark glass stat panel (replaces visible Ticker)
- Full-width rounded-3xl, `#1C1C1C` bg with subtle violet grid + lilac glow corner.
- Reuses ticker copy as inline metric labels with purple chips.
- Includes a chart-style `MediaPlaceholder` on the left and 3 metric rows on the right.

### Stats — rounded pill row
- 4 white rounded-2xl pills, equal width. Big ink number + label + small purple chip. No parallax.

### Three Engines
- 3 equal-height cards, `md:grid-cols-3`, all same size, no drift.
- CaaS card = dark variant (`#1C1C1C` bg, white text, magenta accent line).
- MaaS + Zenzai = white glass (ink text, purple accents).
- Each card: top `MediaPlaceholder` ("Engine visual"), number, title, sub, bullets, CTA link.

### Problem / Mirror
- Side-by-side, no GSAP pin.
- "What you have now" — pale white card, ink list with grey divider lines.
- "Now imagine this" — dark glass card with purple accents, CSS `sticky top-24` only on its column at `lg`.
- Mirror restyled as a clean two-col: sticky title left, stacked pain points right, fade-in only.

### How It Works
- 3 cards in a row (desktop) / stack (mobile). No horizontal scroll pin, no horizontal translate.
- Big purple number, title, body, bullets, footer line.

### Statement
- Oversized ink headline, accent span in Brand Purple, centered on lavender. No char scrub — simple fade.

### ProofWebinar
- Dark glass panel with purple/magenta stat chips. Trust tags as lavender pills. Webinar bar = white card with purple CTA.

### FinalCta
- Ink headline (fixes invisibility), Brand Purple primary CTA with golden halo behind (nods to logo orb).

### Header
- Logo `h-9 md:h-11` (was `h-6 md:h-7`).
- Glass adapts to lavender: `bg-white/70 backdrop-blur` with ink text.

---

## 3. Motion rules
- On-mount fade/slide only (300–600ms via existing `Reveal`).
- Hero tiles: gentle infinite float (CSS keyframes).
- No ScrollTrigger pins, no scrubs, no parallax, no velocity-reactive ticker/marquee on home.
- `prefers-reduced-motion` → all motion off.

---

## 4. Files touched

**New**
- `src/components/site/home/StatPanel.tsx` — dark glass panel
- `src/components/site/home/HeroTiles.tsx` — floating placeholder mosaic with golden orb

**Updated**
- `src/pages/Index.tsx` — wrap in `surface-lavender`, drop visible Ticker (its copy moves into StatPanel)
- `src/components/site/home/Hero.tsx` — two-col, ink text, no pin/gradient
- `src/components/site/home/Stats.tsx` — pill row
- `src/components/site/home/ThreeEngines.tsx` — equal cards, no parallax, one dark variant
- `src/components/site/home/Problem.tsx` — side-by-side, CSS sticky only
- `src/components/site/home/Mirror.tsx` — clean two-col fade-in
- `src/components/site/home/HowItWorks.tsx` — row of cards, no horizontal pin
- `src/components/site/home/Statement.tsx` — ink + purple accent, no char scrub
- `src/components/site/home/ProofWebinar.tsx` — dark glass restyle
- `src/components/site/home/FinalCta.tsx` — ink text, purple CTA + golden halo
- `src/components/site/Header.tsx` — bigger logo, lavender-aware glass
- `src/index.css` — add `.surface-lavender` scope tokens + helpers (`.glass-lavender`, `.glass-dark-panel`, `.pill-stat`, `.float-tile`, `.orb-gold`)

## Out of scope
- CaaS / MaaS / Zenzai / other pages — untouched until you approve home
- Real artwork (placeholders stay, clearly labelled)
- Font swap (keeping current Bricolage + Space Grotesk)
- New dependencies

