

## Building Now

Executing the approved plan: build **Marketing — MaaS** with the homepage shell (Header/Footer/background) plus the shared engine signature (LeftRail + CursorPortal + MarqueeStatement). Lifting `.surface-mono` off CaaS so all three engine pages share one visual language.

## Steps

1. **Route swap** — `src/App.tsx`: `/what-we-do/marketing-maas` → new `MarketingMaaS`.
2. **Shared upgrades**
   - `LeftRail.tsx` — accept `currentEngine` prop for the vertical wordmark.
   - `MarqueeStatement.tsx` — already accepts `words`; restyle dividers to homepage tokens.
   - `CtaStripe.tsx` (NEW) — reusable CTA strip, homepage glass + accent.
3. **MaaS page** — `src/pages/what-we-do/MarketingMaaS.tsx` composing:
   `Header → LeftRail → CursorPortal( MaasHero → Marquee → SystemsManifesto → SystemBlock×3 → CtaStripe ) → Footer`
4. **New MaaS components** — `src/components/site/maas/`
   - `MaasHero.tsx` — `02 / ENGINE · MaaS` + manifesto headline + 2 CTAs.
   - `SystemsManifesto.tsx` — `.01/.02/.03` numbered grid (Performance/Growth/Perception).
   - `SystemBlock.tsx` — eyebrow + display headline + service card list.
   - `MaasServiceCard.tsx` — homepage glass card; registers CursorPortal preview on hover.
5. **CaaS unify** — drop `.surface-mono` wrapper on `CreativeCaaS.tsx`; swap inline CTA for shared `CtaStripe`.
6. **CSS** — `src/index.css`: add `.manifesto-row` + `.num-display`; lift `.acc-row` and `.tag-*` utilities out of `.surface-mono` scope so they work on homepage tokens.
7. **Verify** — render `/what-we-do/marketing-maas` and `/what-we-do/creative-caas` at 1106px and 390px; confirm dropdown, accordions, cursor portal, no console errors.

## Content Source
All copy verbatim from `base/_unpacked/index.html#pg-maas` (hero, manifesto, 12 services across 3 systems, CTA).

## Files Touched
- `src/App.tsx`
- `src/pages/what-we-do/MarketingMaaS.tsx` — NEW
- `src/components/site/maas/MaasHero.tsx` — NEW
- `src/components/site/maas/SystemsManifesto.tsx` — NEW
- `src/components/site/maas/SystemBlock.tsx` — NEW
- `src/components/site/maas/MaasServiceCard.tsx` — NEW
- `src/components/site/caas/CtaStripe.tsx` — NEW
- `src/components/site/caas/LeftRail.tsx` — `currentEngine` prop
- `src/components/site/caas/MarqueeStatement.tsx` — homepage-token dividers
- `src/pages/what-we-do/CreativeCaaS.tsx` — drop `.surface-mono`, use shared CtaStripe
- `src/index.css` — `.manifesto-row`, `.num-display`; tag/accordion utilities un-scoped

## Out of Scope
Header / Footer / Homepage / Zenzai page / new npm deps.

