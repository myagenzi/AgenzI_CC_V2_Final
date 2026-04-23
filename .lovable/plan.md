

# Header polish + custom cursor + logo sizing

## 1. Navigation bar — lavender glass + hide-on-scroll-down

**Look**
- Swap the current dark glass for a lavender-tinted glossy pill: `bg-white/55 backdrop-blur-xl` with a subtle lilac inner glow and `border border-white/60`. Inherits the home page vibe.
- Text color shifts to ink (`text-foreground`) on home, stays current on other pages (auto-detect via the `.surface-lavender` scope already on `<body>` / page root — fall back gracefully).
- Soft shadow only after scroll: `shadow-[0_8px_32px_rgba(76,42,153,0.12)]`.

**Behavior — auto hide / reveal**
- Track scroll direction with a `useEffect` + `lastScrollY` ref.
- Scrolling **down** past 80px → translate header `-translate-y-[120%]` (slides up out of view).
- Scrolling **up** at any point → translate back to `translate-y-0` (slides in).
- At the very top (< 8px) → always visible, no shadow.
- Smooth: `transition-transform duration-300 ease-out`.
- Mobile drawer open → header stays visible regardless.

## 2. Custom cursor — dot + ring

**New component**: `src/components/site/effects/Cursor.tsx`
- Two fixed elements rendered into a portal:
  - **Dot**: 6px solid Brand Purple (`#6C3FCF`), follows cursor 1:1 with no easing (sharp, precise).
  - **Ring**: 32px circle, 1.5px lilac border, follows cursor with eased lerp (~0.18 factor) so it trails slightly.
- Hover state: when over `a`, `button`, `[role="button"]`, or `.cursor-hover` — ring scales to `1.6`, dot fades to 0, ring border becomes Brand Purple. Creates a "magnify" feel.
- Hidden on touch devices (`@media (hover: none)`) and when `prefers-reduced-motion`.
- Native cursor hidden globally via `body { cursor: none }` — but only on screens with `(hover: hover)` so touch isn't affected.
- Mounted once in `App.tsx` so it works site-wide.

## 3. Logo sizing

**Header logo**
- Current: `h-9 md:h-11`
- New: `h-11 md:h-14` — gives the wordmark + tagline room to breathe without ballooning the pill.
- Pill padding tightens to compensate: `pl-4 pr-3 py-2` → keeps overall bar height balanced.

**Hero logo (you said "in the head it needs to be increase a lot")**
- Interpreting "head" as the hero section — currently no logo there. I'll **not add** one unless you confirm. If you meant the header itself, that's covered above. If you meant a watermark-style large logo behind the hero headline, tell me and I'll add it as a faded backdrop element.

## Files touched

- `src/components/site/Header.tsx` — lavender glass restyle, hide-on-scroll logic, larger logo
- `src/components/site/effects/Cursor.tsx` — new dot + ring cursor component
- `src/App.tsx` — mount `<Cursor />` once globally
- `src/index.css` — add `body { cursor: none }` (scoped to `@media (hover: hover)`), `.cursor-hover` helper, lavender-glass header tokens

## Out of scope
- Section refinements (waiting on your screenshots)
- Real images / silhouettes (separate pass)
- Other pages' headers — they inherit the same Header component, so the new look applies everywhere; if you want home-only styling, say the word

