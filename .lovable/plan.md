

## Understood

You want me to take the **real CaaS content from `base/_unpacked/index.html`** (the `#pg-caas` block) and pour it into the **monopo.london editorial layout** I already built — keeping the monochrome / oversized type / left rail / cursor portal / marquee aesthetic. Plus fix the **header dropdown** to match the base file: each item shows a **glyph + name + sub-label** (`✦ CaaS — Creative as a Service`, `◈ MaaS — Marketing as a Service`, `⬡ Zenzai — AI · Automation · Tech`).

## Content I'm pulling from `base/index.html` (verbatim, just re-typeset)

**Hero (replaces the placeholder "WE BUILD EXPRESSIVE BRANDS")**
- Eyebrow: `01 / ENGINE · CaaS`
- Headline: *"You know what your brand needs to say. You just can't say it fast enough."* (last line in electric accent)
- Sub: "Your competitor posted four times this week. You're still in the approval loop for last month's reel. CaaS is the creative system that fixes that."
- CTAs: `Book Free Audit →` · `See services ↓`

**Why CaaS** — 3-up flat grid: Speed · Cost · Consistency (full copy from base)

**Delivery Modes** — 3 tabs: Capture (Human-led) / AI-Augmented / Automated (full copy from base)

**What We Build · Phase 1 — Live Now** — 8 numbered accordion rows (`01`–`08`):
01 Social Media Content Pack · 02 Repurposing Engine · 03 Photography + AI Edit Sprint · 04 Commercial Ad Production · 05 Event Reel + Same-Day Delivery · 06 Founder Content Engine · 07 Product Photography + Catalogue Video · 08 Corporate Event Branding + Content
Each: short tagline, full description, bullet list (where present), price tag · market-rate tag · audience tag.

**Phase 2 · Arriving This Year** — 4 dimmed accordion rows (`09`–`12`): AI Avatar Spokesperson · Multilingual Dubbing · Podcast Production Suite · UGC Simulation Pack.

**CTA Strip** — *"Traditional agency: ₹20k–1.5L/month. CaaS starts at ₹2,999/month. Same output. Faster. No chaos."* + Book Free Audit / Full pricing buttons.

**Footer ribbon** — `© 2026 AgenzI · CaaS` + cross-links to MaaS / Zenzai / Pricing.

## Build Plan

### 1. Header dropdown — fix glyphs + sub-labels
`src/components/site/Header.tsx`
- Update `whatWeDo` array entries to: `{ glyph, label, sub, href }` with `✦ / ◈ / ⬡`.
- Render each `DropdownMenuItem` as `[glyph circle] [name + sub]`, matching the base file's `ndd-i` layout. Glass-pill keeps current styling.
- Mobile drawer: same glyph prefix on each row.

### 2. Creative—CaaS page — full content rewrite
Rewrite `src/pages/what-we-do/CreativeCaaS.tsx` keeping the monopo shell (LeftRail, CursorPortal, MarqueeStatement, Reveal) but replacing every section:

```text
HERO          → real CaaS hero copy + two CTAs
MARQUEE       → "Speed · Cost · Consistency · 48-Hour Turnaround · Human-directed"
WHY CAAS      → 3-card flat grid (Speed / Cost / Consistency)
DELIVERY      → 3 horizontal tabs (Capture / Augmented / Automated)
                — uses Radix Tabs, monochrome styling, hairline underline
LIVE NOW      → "Phase 1 · Live Now" — 8 accordion rows (Radix Accordion)
                Numbered (01–08), title, sub, expand to full copy + tags.
                Hover binds CursorPortal ghost preview per row.
ARRIVING      → "Phase 2 · Arriving This Year" — 4 rows at opacity 60
CTA STRIP     → big monochrome statement + 2 buttons
FOOTER NOTE   → cross-links to MaaS / Zenzai / Pricing inside main, then shared <Footer />
```

### 3. New / supporting components
- **`src/components/site/caas/ServiceAccordion.tsx`** (NEW) — Radix `Accordion` styled monochrome: number column, title + subtitle row, `↓` glyph that rotates, body with description + tag pills (`tgp` price / `tgg` market / `tgn` audience). Replaces the static `ServiceGroup` for the live-services section.
- **`src/components/site/caas/DeliveryTabs.tsx`** (NEW) — three pill triggers, monochrome underline indicator, animated panel swap. Uses Radix `Tabs`.
- **`src/components/site/caas/WhyGrid.tsx`** (NEW) — 3 hairline-bordered cards with glyph + title + copy.
- Keep existing `LeftRail`, `CursorPortal`, `MarqueeStatement`, `CaasHero` — but `CaasHero` headline gets replaced with the real two-line statement; eyebrow becomes `01 / ENGINE · CaaS`.

### 4. Styling tweaks (`src/index.css`)
- Add 3 tag pill utilities scoped to `.surface-mono`: `.tag-price` (electric outline), `.tag-market` (foreground/40 outline), `.tag-audience` (foreground/20 outline).
- Add `.acc-row` hairline borders + hover `bg-foreground/[0.02]`.
- No new keyframes; reuse existing motion.

### 5. Typography & color rules (already in place, just confirming)
- Display: Bricolage Grotesque, uppercase headlines `clamp(48–180px)`, `tracking-[-0.04em]`.
- Mono labels: JetBrains Mono `text-[11px] tracking-[0.3em]`.
- Palette: `#0A0A0A` bg, `#FFFFFF` fg, `#F4F4F4` studio grey, electric `#1E40FF` for accents only (price tags, hover states, hero last-line).
- All scoped under `.surface-mono` — homepage untouched.

### 6. Verify
- `/what-we-do/creative-caas` renders all sections at 1106px and 390px.
- Dropdown shows glyph + name + sub on every link, matches base layout.
- Accordions open/close; tabs switch; cursor portal still triggers on service hover.
- No console errors. No new npm deps (Radix Accordion + Tabs already shipped via shadcn).

## Files Touched
- `src/components/site/Header.tsx` — glyph + sub-label dropdown items (desktop + mobile)
- `src/pages/what-we-do/CreativeCaaS.tsx` — full rewrite with base content
- `src/components/site/caas/CaasHero.tsx` — swap headline + eyebrow + CTAs
- `src/components/site/caas/ServiceAccordion.tsx` — NEW
- `src/components/site/caas/DeliveryTabs.tsx` — NEW
- `src/components/site/caas/WhyGrid.tsx` — NEW
- `src/components/site/caas/MarqueeStatement.tsx` — update word list
- `src/index.css` — `.surface-mono` tag pill + accordion row utilities

## Out of Scope
- MaaS and Zenzai pages (still ComingSoon stubs).
- Homepage, header pill shell, footer.
- New dependencies — using existing Radix Accordion + Tabs.

