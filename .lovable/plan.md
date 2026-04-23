

# One System, Three Engines — Pinned Sticky Card Stack

Rebuild the section as a pin-and-scrub stack of three cards (CaaS, MaaS, Zenzai) using Framer Motion. Cards stack centered with a slide-up wipe. Existing heading stays.

## Layout (per card, desktop ≥ lg)

3-column grid inside one centered rounded card (max-w 1180, ~min-h 560px):

```text
┌─────────────────────────────────────────────────────────────┐
│  LEFT (4 cols)        CENTER (4 cols)        RIGHT (4 cols) │
│  ──────────────       ───────────────        ────────────── │
│  01 / 03              ┌─────────────┐        → point one    │
│  CaaS                 │ placeholder │        → point two    │
│  Creative as a        │  with svc   │        → point three  │
│  Service. Videos…     │  tagline    │                       │
│                       │  inside it  │        [Explore CaaS] │
│                       └─────────────┘                       │
└─────────────────────────────────────────────────────────────┘
                         01 / 03  ●○○
```

- **Left**: small index `01 / 03`, big system name (display font), description paragraph
- **Center**: rounded `MediaPlaceholder` (4/5 aspect) with the service tagline overlaid in the bottom-left of the placeholder ("Creative as a Service · 48h turnaround" etc.)
- **Right**: 3 bullets (arrow + text), then `Explore [System] →` button (primary purple)
- **Bottom of card**: counter `01 / 03` + 3 dots indicator (active dot = purple)
- **Card 1 (CaaS)**: dark variant — `#1C1C1C` bg, white text, magenta/lilac accents
- **Cards 2, 3**: lavender glass — white/70 bg, ink text, purple accents
- **Mobile (< lg)**: cards stack vertically, no pin, no wipe — just normal scroll with the same internal layout reflowed (left/center/right become stacked)

## Animation (Framer Motion + scroll scrub)

- Section becomes a **tall scroll container** (`height: 300vh` for 3 cards = 100vh per card-step).
- Inside, a **sticky inner wrapper** (`sticky top-0 h-screen flex items-center`) holds all 3 cards absolutely centered.
- Use `useScroll({ target: sectionRef, offset: ["start start", "end end"] })` then derive per-card progress with `useTransform`.

**Per-card transforms** (driven by section scroll progress 0 → 1):

| Card | Enter range | y | scale | opacity |
|---|---|---|---|---|
| 1 (CaaS) | 0.00 → 0.33 (rests, then exits) | 0 → -40 | 1 → 0.94 | 1 → 0.5 |
| 2 (MaaS) | 0.20 → 0.55 (slides up in, then exits) | 100% → 0 → -40 | 0.96 → 1 → 0.94 | 0 → 1 → 0.5 |
| 3 (Zenzai) | 0.55 → 0.85 (slides up in, settles) | 100% → 0 | 0.96 → 1 | 0 → 1 |

- Each card uses `motion.div` with `style={{ y, scale, opacity }}`.
- Easing handled by Framer's spring-less transform mapping (smooth via scroll scrub).
- Z-index ascends so newer cards visually cover older ones.
- Counter + dots driven by the same progress (binary thresholds).
- `prefers-reduced-motion` → fall back to plain stacked layout, no pin, instant visibility.

## Files

**New**
- `src/components/site/home/EnginesStack.tsx` — section with pin + Framer Motion scrub, 3 stacked card panels, counter, dots
- `src/components/site/home/EngineCard.tsx` — single card layout (left/center/right) with `dark` variant prop

**Updated**
- `src/pages/Index.tsx` — replace `<ThreeEngines />` with `<EnginesStack />`
- `src/components/site/home/ThreeEngines.tsx` — keep file but unused (safe to delete later)

**Dependencies**
- `framer-motion` — add to project (single new dep, ~50KB gzipped, already common in this stack)

## Content (verbatim from current `ThreeEngines.tsx`)

| # | Name | Description | Tagline (in placeholder) | Bullets | CTA |
|---|---|---|---|---|---|
| 01 | CaaS | Creative as a Service. Videos, posts, ads, brand identity. One brief — we handle the rest. Human direction. AI speed. | Creative as a Service · 48h turnaround | Content without the briefing loop · 48-hour creative turnaround · From ₹2,999/month | Explore CaaS → `/what-we-do/creative-caas` |
| 02 | MaaS | Marketing as a Service. Performance marketing measured in revenue. Every rupee traced to a customer. | Marketing as a Service · Revenue-tracked | Every rupee traced to a customer · Pipeline that fills itself · Performance + Growth + Perception | Explore MaaS → `/what-we-do/marketing-maas` |
| 03 | Zenzai | AI · Automation · Tech. Automations live in 48 hours. Every tool connected. Custom AI built for your business. | Intelligence · 48h automations live | WhatsApp · CRM · Support automated · All your tools finally connected · Custom AI models + mobile apps | Explore Zenzai → `/what-we-do/intelligence-zenzai` |

## Out of scope
- Real card visuals (placeholders stay)
- Any other section
- Other pages

