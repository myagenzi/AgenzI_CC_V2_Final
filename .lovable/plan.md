

## Audit + Realignment Plan

Two-part fix: (A) finish the Zenzai structural realignment from the previous plan and strip sections that aren't in base content, (B) audit CaaS, MaaS, and Home for the same class of issues (broken physics, hsla canvas crash risk, sticky-label collisions, mosaic gaps, invented content).

---

## Part A — Zenzai (`/what-we-do/intelligence-zenzai`)

### A1. Kill the runtime crash (BLOCKER)
`CursorMetaballs.tsx` passes CSS variables (`35 84% 67%`) to canvas via legacy `hsla()` → SyntaxError, hero never renders.
- Replace `hsla(${gold}, 1)` → `hsl(${gold} / 1)` (modern syntax canvas accepts) for all 3 stops.
- Add a hard fallback if `getPropertyValue` returns empty.
- Lift `.debug-panel` z-index above the hero gradient overlay.

### A2. Remove sections that aren't in base content
Base `#pg-zenzai` has only: Hero → Three Layers cards → Layer 01/02/03 accordions → CTA. The `ProjectsRail` and `TopicsRow` we added are invented placeholders the user no longer wants on-page.
- Delete `ProjectsRail.tsx` and `TopicsRow.tsx`.
- Remove their imports/usages from `IntelligenceZenzai.tsx`.
- Page becomes: Hero → Marquee → ZenzaiAbout → LayerServices → CtaStripe → footer ribbon.

### A3. Visual fixes
- `index.css` `.metaball-canvas`: `mix-blend-mode: screen` → `normal`; `contrast(22)` → `contrast(18)` so gold/royal reads instead of going grey.
- `ZenzaiHero.tsx`: soften overlay `from-background/40 via-background/30` → `from-transparent via-background/15`.
- `ZenzaiAbout.tsx`: move mosaic offsets (`md:mt-16`, `md:mt-8`) from the Reveal wrapper onto the inner `<article>` so reveal-translate doesn't clip on first paint.
- `LayerServices.tsx`: sticky label `top-28` → `top-24`, add `md:ml-2` to clear LeftRail at 1106px.
- `CtaStripe.tsx`: copy already says "actually costing you" — verify, no change if correct.

---

## Part B — Cross-page audit (CaaS, MaaS, Home)

### B1. CaaS (`/what-we-do/creative-caas`)
- Verify no `hsla(${var})` canvas usage in any CaaS component (CursorMetaballs is Zenzai-only, but double-check `CursorPortal` and `CaasHero`).
- Check `LeftRail` collision with any sticky elements at 1106px.
- Verify all section copy still maps to `base/_unpacked/index.html#pg-caas`. Any invented sections get the same treatment as Zenzai (flagged for removal, asked before deleting if ambiguous).

### B2. MaaS (`/what-we-do/marketing-maas`)
- Same canvas/hsla check.
- `SystemBlock` sticky-label / `LeftRail` clearance at md.
- Verify section list against `base/_unpacked/index.html#pg-maas`. The earlier MaaS rebuild used reference grammar — confirm no orphan placeholder sections remain.
- `ClientWall` order in page tree.

### B3. Home (`/`)
- `Hero.tsx` halo / Mirror / FinalCta — confirm no canvas crash path.
- Verify shared `CtaStripe` copy doesn't regress on any page.
- No structural changes unless an actual bug surfaces.

### B4. Shared components
- `CtaStripe`, `MarqueeStatement`, `Reveal`, `MediaPlaceholder`, `LeftRail` — confirm a single fix here doesn't break consumers.
- `Header` mobile drawer + LeftRail — confirm both render together cleanly on every page at 1106px and 390px.

---

## Files Touched

| File | Change |
|---|---|
| `src/components/site/zenzai/CursorMetaballs.tsx` | Fix `hsla → hsl(... / a)` (kills crash); debug-panel z-index |
| `src/components/site/zenzai/ProjectsRail.tsx` | DELETE (not in base) |
| `src/components/site/zenzai/TopicsRow.tsx` | DELETE (not in base) |
| `src/components/site/zenzai/ZenzaiHero.tsx` | Soften gradient overlay |
| `src/components/site/zenzai/ZenzaiAbout.tsx` | Move mosaic offsets onto `<article>` |
| `src/components/site/zenzai/LayerServices.tsx` | Sticky-label top + LeftRail clearance |
| `src/pages/what-we-do/IntelligenceZenzai.tsx` | Remove ProjectsRail + TopicsRow; clean imports |
| `src/index.css` | `.metaball-canvas` blend/contrast; `.debug-panel` z-index |
| CaaS / MaaS / Home files | Read-only audit first; only edit if a real bug or base-content mismatch is found (will list specifics in commit) |

## Out of Scope
- New components, new dependencies, new content
- Real images / project artwork (placeholders stay where used)
- Any rewrite of base HTML content

