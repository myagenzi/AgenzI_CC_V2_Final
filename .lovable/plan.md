# Marketing-MaaS — full rebuild in homepage lavender style

Total visual reset of `/what-we-do/marketing-maas`. Wipe every trace of the dark "cosmic" MaaS look. Adopt the **homepage lavender system** (`surface-lavender`, Bricolage + Space Grotesk, purple/lilac/magenta + gold accents) using the reference screenshot as the structural mood. Also strip the `LeftRail` sidebar from all three What-We-Do pages.

## Reference reading

The screenshot's vibe (translated, not copied):
- Dark purple hero panel with floating illustrative tile + bold short headline + horizontal stat strip
- White body sections with crisp serif/grotesk hierarchy
- A tall **vertical accordion list** of categories where the *active* row gets a purple-pink gradient pill
- White card grid (4 tiles) under a centered tagline
- Oversized "ghost" word marquee (`digital agency · digital agency`)
- Light service rows with a media block on the right
- Avatar row, a black stats/awards table, a giant "Latest News" word with mascot, contact strip

We will **interpret** that structure with our own copy + brand. No mascot art (we don't have it) — use the existing `HeroTiles`/`MediaPlaceholder`/`orb-gold` floating-tile language already proven on the homepage hero.

## Final page composition

```text
<div class="surface-lavender">
  Header
  main:
    1. MaasLavenderHero      pill badge · headline · sub · CTAs · 4-stat strip · floating tiles
    2. MaasIntroBand         small eyebrow + 2-col intro + "View More About Us" media block
    3. MaasCategoryList      vertical accordion: Performance · Pipeline · Perception · Attribution · Growth (active row = lav-purple→lav-magenta gradient pill, expands inline copy)
    4. MaasSpecialtyGrid     centered tagline + 4 white cards (Digital Mastery / Performance Success / Strategic Process / Design Excellence — reframed for MaaS: Revenue Attribution / Paid Media / Lifecycle / Brand Authority)
    5. MaasGhostMarquee      huge outlined-purple "marketing as a service" repeating ghost text
    6. MaasServiceRows       3 light rows (one per System), each with sticky number + headline + ServiceAccordion items
    7. MaasAwardsTable       dark glass-dark-panel table: year · award · category (uses base-HTML credibility lines: clients, retention, ROI, etc.)
    8. MaasLatestBand        oversized "Latest" / "Insights" headline with mascot tile + 3 article cards
    9. MaasGetInTouch        repeating "get in touch _ get in touch _" band → CTA card
    10. footer-row links
  Footer
</div>
```

All copy stays **1:1 from current MaaS** (manifesto, three systems, 12 services). Only the visual shell changes.

## Lavender design language reused (no new tokens)

From `surface-lavender` already in `index.css`:
- Surfaces: `bg-background` (`--lav-bg #F5F7FA`), `glass-lavender`, `glass-dark-panel`, `pill-stat`, `media-ph`
- Accents: `chip-purple`, `cta-purple`, `orb-gold`, `float-tile`
- Palette vars: `--lav-purple #6C3FCF`, `--lav-purple-hover #8A5CFF`, `--lav-lilac #B983FF`, `--lav-magenta #D946EF`, `--lav-pink #FF7ACF`, `--lav-gold #FFB300`
- Fonts: `font-display` Bricolage Grotesque · `font-sans` Space Grotesk · `font-mono-tech` JetBrains Mono

New gradient used only by the active accordion row: `linear-gradient(90deg, hsl(var(--lav-purple)), hsl(var(--lav-magenta)) 60%, hsl(var(--lav-pink)))` — added inline, no new global token needed.

## Sidebar removal (all What-We-Do pages)

Remove `LeftRail` import + render and the `md:pl-[88px]` left padding on `<main>` and on the `<Footer>` wrapper from:
- `src/pages/what-we-do/MarketingMaaS.tsx`
- `src/pages/what-we-do/CreativeCaaS.tsx`
- `src/pages/what-we-do/IntelligenceZenzai.tsx`

`CursorPortal` is kept on CaaS and Zenzai (it's their service-tile cursor follower). On the new lavender MaaS we **drop** `CursorPortal` too — the lavender surface uses the default cursor like the homepage.

## New components (all under `src/components/site/maas/lavender/`)

- `MaasLavenderHero.tsx` — `glass-dark-panel` hero card on lavender bg. Pill badge "Engine 02 · Marketing as a Service". Bricolage 800 H1 (clamp 40/7vw/96): "Marketing that doesn't *bring in customers* isn't marketing. It's *decoration.*" — italic accents in `text-[hsl(var(--lav-pink))]`. Sub paragraph in `text-foreground/85`. Two CTAs: `cta-purple` "Book Free Audit →" + `glass-lavender` "See systems ↓". Right column: `HeroTiles`-style floating mosaic with 3–4 `MediaPlaceholder` tiles + `orb-gold`. Below hero: 4 `pill-stat` cards (Revenue traced · Channels tied to pipeline · 12 services · 3 systems).
- `MaasIntroBand.tsx` — small `chip-purple` eyebrow "About MaaS"; 2-col intro pulling the manifesto paragraph; "View More About Systems →" CTA strip with `media-ph` background image block.
- `MaasCategoryList.tsx` — vertical list, each row = full-width button, mono number + Bricolage label. Active row gets the purple→magenta→pink gradient bg with white text and an inline collapsible body of one short paragraph. Categories: `Performance / Pipeline / Perception / Attribution / Growth Loops`. Open by default: Performance.
- `MaasSpecialtyGrid.tsx` — centered tagline "We specialise in building / revenue systems for businesses." 4 white `glass-lavender` cards: Revenue Attribution, Paid Media, Lifecycle Marketing, Brand Authority. Each card: small icon glyph (◎ ⟳ ◐ ✦) in `text-[hsl(var(--lav-purple))]`, title, 2-line desc.
- `MaasGhostMarquee.tsx` — full-bleed band; two layered marquee rows of `marketing as a service _` in massive Bricolage with `-webkit-text-stroke: 1.5px hsl(var(--lav-purple) / 0.35); color: transparent;`. Reuses existing `animate-marquee`.
- `MaasServiceRows.tsx` — replaces `SystemBlock`. Three rows alternating media-left/right. Sticky left/right column carries an outlined gradient number (Bricolage 800, clamp 96/12vw/200), a `chip-purple` meta tag, and a thin animated `--gradient-rail` bar. The other column carries headline + `ServiceAccordion` (existing component, will re-skin via lavender wrapper class).
- `MaasAwardsTable.tsx` — `glass-dark-panel` rounded card with 6 rows: year · proof point · category. Pulled from existing copy (e.g. "2026 · ₹1Cr+ traced revenue · Attribution", "2025 · 38 active clients · Retention", etc.).
- `MaasLatestBand.tsx` — left: oversized "Insights" Bricolage word with floating `MediaPlaceholder` tile inside, ghost echo word behind. Right: three article-card placeholders with date + title + 1-line excerpt. Article copy: 3 manifesto-aligned thought-pieces.
- `MaasGetInTouch.tsx` — full-bleed marquee strip "get in touch _" at 80px Bricolage outlined purple, with a centered `glass-lavender` card holding email + `cta-purple` "Book Free Audit →".

## Existing files edited

- `src/pages/what-we-do/MarketingMaaS.tsx` — full rewrite: wrap in `<div className="surface-lavender min-h-screen">` like `Index.tsx`; remove `LeftRail`, `LenisProvider`, `CursorPortal`, `MarqueeStatement`, `SystemsTriad`, `SystemBlock`, `MaasHero`, `ClientWall`, `CtaStripe` imports; mount the 9 new lavender components in order; keep the `<section>` of footer-row links restyled to `border-foreground/10`.
- `src/pages/what-we-do/CreativeCaaS.tsx` — drop `LeftRail` import + render; remove `md:pl-[88px]` from `<main>` and footer wrapper.
- `src/pages/what-we-do/IntelligenceZenzai.tsx` — same sidebar removal.
- `src/index.css` — append a tiny `.surface-lavender` scoped block: `.lav-row-active { background: linear-gradient(90deg, hsl(var(--lav-purple)), hsl(var(--lav-magenta)) 60%, hsl(var(--lav-pink))); color: #fff; }` and `.lav-num-outline { -webkit-text-stroke: 1.5px hsl(var(--lav-purple) / 0.55); color: transparent; }`. No new fonts, no new color tokens.
- `src/components/site/caas/ServiceAccordion.tsx` — **untouched**. The lavender wrapper around it (in `MaasServiceRows`) inherits `surface-lavender` tokens automatically (`text-foreground`, `border-border`), so it re-skins for free.

## Files NOT touched

- Homepage (`src/pages/Index.tsx` and all `src/components/site/home/*`)
- CaaS hero/components beyond removing the sidebar
- Zenzai components beyond removing the sidebar
- Tailwind config, brand fonts, shadcn primitives
- The deck-of-cards `EnginesStack` and existing memory of homepage layout

## Order of execution

1. Strip `LeftRail` + `md:pl-[88px]` from all three What-We-Do pages.
2. Add the 2-line CSS additions to `src/index.css`.
3. Build the 9 new lavender MaaS components in `src/components/site/maas/lavender/`.
4. Rewrite `MarketingMaaS.tsx` to mount them inside `surface-lavender`.
5. Smoke-check `/what-we-do/marketing-maas`, `/what-we-do/creative-caas`, `/what-we-do/intelligence-zenzai`, and `/`.

## Out of scope

- Real illustrations / mascot art (we keep `MediaPlaceholder` + floating tiles).
- Refactoring CaaS / Zenzai page layouts beyond the sidebar removal.
- Any change to the homepage palette, copy, or animations.

Approve and I'll execute in this order.