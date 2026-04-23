# MaaS rebuild + homepage copy audit

## Track 1 — Marketing-MaaS rebuild (dark cosmic)

Reuse existing tokens/fonts. No lavender on this page.

**Page composition** (`src/pages/what-we-do/MarketingMaaS.tsx`):
```text
Header → LeftRail → CursorPortal:
  MaasHero (rebuilt)
  MarqueeStatement (reuse)
  SystemsTriad (NEW; replaces SystemsManifesto)
  SystemBlock × 3 (visuals restyled, props unchanged)
  ClientWall (reuse)
  CtaStripe (reuse)
  footer-row links
→ Footer
```

**MaasHero** — pinned hero on `--cosmic` with radial nebula glow + faint grid. Badge `ENGINE 02 · MaaS`. H1 (Bricolage 800, clamp(40px,7vw,124px), starlight): "Marketing that doesn't / bring in customers / *isn't marketing.* / *It's decoration.*" — last two lines italic gold. Sub (moondust): exact base-HTML manifesto. CTAs: gold pill `Book Free Audit →` + ghost `See services ↓`. GSAP mask-clip + yPercent stagger reveal like CaaS.

**SystemsTriad** (new) — eyebrow `Three Systems · One Outcome`; H2 "Performance. Pipeline. Perception. / All pointing at revenue." (gold accent on second line). Three cards on `--navy` with `--peri/15` border, rounded-2xl, hover lift + gold ring: ◎ Performance / ⟳ Growth Systems / ◐ Perception with exact base-HTML descriptions.

**SystemBlock restyle** (visuals only, props unchanged) — drop the unfinished video placeholder. Sticky left rail: mono eyebrow + giant outlined gold number (`.num-outline-gold`, clamp(80px,11vw,180px)) + thin gold animated bar. Right col: mono meta line, H2 with gold accents, accordion rows restyled — hover `--peri/8`, gold number, starlight title, moondust body, gold-on-cosmic price tag.

**CSS additions** (`src/index.css`):
- `.tile-cosmic` — navy bg, peri border, gold hover ring
- `.num-outline-gold` — outlined gold display number

## Track 2 — Homepage copy audit (no design changes)

Drift to fix vs `base/_unpacked/index.html`:

- **Problem.tsx** — eyebrow "The Real Problem" → "The Problem". Headline → "You don't have a marketing problem. / You have a *system problem.*"
- **Mirror.tsx** — restore "Take a second." preface and add the "That's not a people problem. It's a system problem. You're not lacking effort…" paragraph block.
- **HowItWorks.tsx** — sync Step 02 body 1:1 with base lines 996–1010.
- **Ticker / EnginesStack / Hero / ProofWebinar / Stats / FinalCta** — spot-check; only patch if drift found.

Lavender homepage system and the deck-of-cards Three Engines animation stay as-is.

## Files

- Rewrite `src/components/site/maas/MaasHero.tsx`
- New `src/components/site/maas/SystemsTriad.tsx`
- Edit `src/components/site/maas/SystemBlock.tsx` (visuals)
- Edit `src/pages/what-we-do/MarketingMaaS.tsx` (swap import)
- Append to `src/index.css` (`.tile-cosmic`, `.num-outline-gold`)
- Edit `src/components/site/home/Problem.tsx`, `Mirror.tsx`, `HowItWorks.tsx`

## Out of scope

- CaaS / Zenzai redesigns (awaiting screenshots)
- Palette / font additions
- AI-generated illustrations (replaced by typography + gradients)

## Order

1. Patch homepage copy (Mirror, Problem, HowItWorks)
2. Add CSS utilities
3. Rebuild MaasHero, build SystemsTriad, repaint SystemBlock
4. Wire MarketingMaaS.tsx
5. Smoke-check `/` and `/what-we-do/marketing-maas`
