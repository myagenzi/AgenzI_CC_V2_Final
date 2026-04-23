

## Direction

Treat cellinteractive.jp as the **motion + layout grammar** and `base/_unpacked/index.html#pg-zenzai` as the **content source**. Every section keeps the reference's physics, asymmetric grid, and scroll choreography — wrapped around AgenzI copy in AgenzI tokens (gold + royal + starlight on dark).

This same approach (reference = direction, base = content) becomes the doctrine for CaaS and MaaS too — but this plan touches Zenzai only.

---

## Section-by-section build

### 1. Hero — Metaball physics (rebuilt properly)

Reference uses a real **metaball physics simulation** — multiple charge points, return force, linear + angular damping, light/diffuse rendering. Current implementation is 3 SVG circles with a gooey filter — we rebuild it correctly.

**Component:** `CursorMetaballs.tsx` (rewrite)
- **Canvas-based**, not SVG. 5 blobs (varied radii 40–110px), each with `pos`, `vel`, `anchor`, `mass`.
- Per-frame physics: spring force toward anchor (stiffness `k`), cursor attraction (inverse-square, capped), **linear damping** (0.92), **angular damping** (drift rotation), velocity integration.
- **Rendering:** draw each blob as a radial-gradient circle into an offscreen canvas, then apply a CSS `filter: blur(18px) contrast(22)` on the canvas element → true metaball merge (this is how the reference does it; cheaper than marching-squares, identical look).
- Gradient stops use `--gold` core → `--royal` mid → transparent edge.
- On rapid cursor motion blobs visibly **split apart**, then spring back and **re-merge** at rest — exactly the reference behavior.
- `prefers-reduced-motion` → static centered halo.

**Debug overlay:** small bottom-left mono panel showing live values:
```
METABALL · live
linear damping     0.92
return force       0.018
cursor distance    142px
charges            5
```
Tiny, semi-transparent, hairline border. Mirrors the reference's "engineered" feel.

**Hero copy** (verbatim from base line 1333–1335): eyebrow `ENGINE 03 · ZENZAI`, headline with gold accent on second clause, paragraph, two CTAs.

---

### 2. About — Statement + 3 cards (asymmetric, scroll-staggered)

Reference uses a **staggered horizontal stagger** — 3 image tiles fade up at different delays, slightly offset vertically (not a uniform row).

**Component:** `ZenzaiAbout.tsx` (refine)
- Eyebrow `Three Layers` + H2 *"Start with automations. Add integrations. Build what doesn't exist yet."*
- 3 layer cards in a `grid-cols-12` mosaic:
  - Card 1 (Automations) — `col-span-4`, `mt-0`
  - Card 2 (Integrations) — `col-span-4`, `mt-16` (offset down)
  - Card 3 (Custom AI) — `col-span-4`, `mt-8`
- Each card: `[IMAGE 4/5 — Layer 0X visual]` placeholder at top, then glyph (⚡/⟳/◈), title, description (verbatim base copy)
- Scroll-stagger reveal: `IntersectionObserver` with `0ms / 140ms / 280ms` delays so they cascade in.

---

### 3. Service — Layer accordions with reference's keyword-grid feel

Reference shows 4 keyword columns. Base HTML has **3 layers with detailed services + pricing** — richer content. We honor the reference's "scannable column" feel by adding a **keyword preview row** above each accordion.

**Component:** `LayerServices.tsx` (refine)
- Three stacked layer blocks (Layer 01 / 02 / 03), each with:
  - Eyebrow + H2 (verbatim base)
  - **Keyword strip** (new) — horizontal mono row of service names like `WhatsApp Automation · Lead Capture · Invoice Follow-Up · Booking · Support AI · Reporting` — clicking a keyword scrolls the matching accordion item open
  - `ServiceAccordion` with all services + pricing tags (verbatim base lines 1355–1377)
- Sticky-on-scroll layer label on the left at `md+` (matches the reference's vertical category anchoring)

---

### 4. Projects — Asymmetric mosaic (placeholders, but real grid)

Reference uses a **5-card asymmetric mosaic** — large lead tile + 4 supporting tiles in irregular spans. We rebuild the grid faithfully with placeholders that read as "build log artifacts" so the page doesn't feel empty.

**Component:** `ProjectsRail.tsx` (rewrite)
- Eyebrow `Build Log` + H2 *"Systems we've shipped."* + sub *"Selected automations, integrations, and custom builds. Real projects, redacted client names."*
- `grid-cols-12` mosaic at `md+`:
  - Tile 1 — `col-span-7 row-span-2` — `[IMAGE 16:9 — Hero case]` + label *"WhatsApp AI · D2C beauty brand · 2025 · Automation"*
  - Tile 2 — `col-span-5` — `[IMAGE 4/3]` + *"CRM ↔ WhatsApp ↔ Tally · 2025 · Integration"*
  - Tile 3 — `col-span-5` — `[IMAGE 4/3]` + *"OCR pipeline for invoice processing · 2025 · Custom AI"*
  - Tile 4 — `col-span-4` — `[IMAGE 1/1]` + *"Booking + reminders · clinic chain · 2024 · Automation"*
  - Tile 5 — `col-span-8` — `[IMAGE 21/9]` + *"Custom forecasting model · D2C · 2024 · Custom AI"*
- Hover: media placeholder scales `1.02`, label slides up, gold underline draws in (mirrors reference's hover-zoom)
- Scroll reveal: each tile fades + lifts with mass-based stagger (closer to viewport = earlier)

Every tile is clearly a placeholder (label says `[IMAGE …]`) — easy to swap real artwork later.

---

### 5. Topics — 3-card row (build log entries as placeholders)

Reference is 3 article cards. We mirror the structure with placeholder build-log topics that fit AgenzI's voice.

**Component:** `TopicsRow.tsx` (rewrite)
- Eyebrow `Field Notes` + H2 *"How we think about AI in the wild."*
- 3-column row at `md+`, stacked at mobile:
  - Card 1 — `[IMAGE 16:9]` + category `Build Log` + title *"Why most AI pilots quietly die in 90 days"* + date placeholder
  - Card 2 — `[IMAGE 16:9]` + category `Method` + title *"The 3-layer model: why we never lead with custom AI"* + date placeholder
  - Card 3 — `[IMAGE 16:9]` + category `Case Note` + title *"What changed when WhatsApp started talking to the CRM"* + date placeholder
- Hover: hairline divider grows under category, image gains gold ring

---

### 6. CTA — Verbatim base copy

`CtaStripe` already in place. Update wording to match base line 1382 verbatim: *"…how much that's actually costing you."* (currently missing "actually").

---

## Shared engine signature (kept)

`Header` · `LeftRail currentEngine="Intelligence — Zenzai"` · `CursorPortal` · `MarqueeStatement words=["Automate","Integrate","Build","Compound"]` · `Footer`. Unchanged from current page.

---

## Files Touched

| File | Action |
|---|---|
| `src/components/site/zenzai/CursorMetaballs.tsx` | Rewrite — canvas physics + CSS-filter merge + debug overlay |
| `src/components/site/zenzai/ZenzaiAbout.tsx` | Refine — asymmetric mosaic, scroll-stagger delays |
| `src/components/site/zenzai/LayerServices.tsx` | Refine — keyword strip + sticky layer label |
| `src/components/site/zenzai/ProjectsRail.tsx` | Rewrite — proper 5-tile asymmetric mosaic |
| `src/components/site/zenzai/TopicsRow.tsx` | Rewrite — 3-card row with field-notes placeholders |
| `src/pages/what-we-do/IntelligenceZenzai.tsx` | Re-add `ProjectsRail` + `TopicsRow` between `LayerServices` and `CtaStripe`; fix CTA wording |
| `src/components/site/caas/CtaStripe.tsx` | One-line fix: *"actually costing you"* (verbatim base) |
| `src/index.css` | `.metaball-canvas` (blur+contrast filter), `.debug-panel`, `.layer-keyword-strip`, `.project-tile` mosaic hover, `.topic-card` ring |

## Out of Scope

- Real project artwork / real article content (all placeholders, clearly labeled)
- WebGL, three.js, or any new dependencies — pure canvas + CSS filters
- CaaS / MaaS / Header / Footer / Homepage (this plan is Zenzai-only; same doctrine applied to those pages later)

