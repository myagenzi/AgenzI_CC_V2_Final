# Fix fish-eye magnifier — clean single-layer magnification

## Problem (confirmed)

Inside the lens you currently see two overlapping layers:
1. The original paragraph (still rendered on the page).
2. The scaled clone, only clipped to a circle but with a transparent background.

So the original text shows through the clone, and the scaled clone's overflow can also smear over neighboring lines. Result = doubled, clumsy text inside the circle.

## Fix strategy

Make the lens behave like a real opaque magnifying loupe:

1. **Hide the original element's text while it's the lens source.**
   - In `Cursor.tsx` `setupClone`, set `data-mag-source=""` on the hovered element.
   - In `index.css`, add `[data-mag-source] { color: transparent !important; text-shadow: none !important; }` so the underlying text disappears (layout preserved — no jump).
   - Remove the attribute in `teardownClone` and on mouse leave.

2. **Give the lens an opaque background that matches the section behind it.**
   - When cloning, walk up from the source element to find the nearest ancestor whose computed `background-color` has alpha > 0; fall back to `getComputedStyle(document.body).backgroundColor`.
   - Apply that color to the `.lens-clone` element as `background-color` (the `clip-path: circle(...)` already constrains it to the circle, so only the circle shows the fill + magnified text).

3. **Constrain the clone so scaled overflow can't bleed past the source's box.**
   - On the clone wrapper: `overflow: hidden` and a clip equal to the source's bounding rect. Since we already size the clone to the source rect, add `overflow: hidden` so scaled children stay clipped to the source box; the lens's `clip-path` then carves the visible circle from that.

4. **Tighten the source selection so we clone the smallest meaningful text node.**
   - Prefer the deepest matching element under the cursor (current code uses `closest(READING_SELECTOR)` which can grab a large `<p>` parent). Walk from `e.target` upward only until the first text-bearing element matching the selector — that's already the deepest. Add a max-area guard: if the source rect is larger than ~1200×600, skip cloning (avoid magnifying entire columns).

5. **Polish the loupe edge** (already mostly there) — keep the inset shadows in `.cursor-reading`. Add a 1px outer ring on `.lens-clone.is-active` via `box-shadow: 0 0 0 1px hsl(var(--lav-purple) / 0.35)` clipped by the same `clip-path` so the boundary reads cleanly.

## Files to modify

- `src/components/site/effects/Cursor.tsx`
  - `setupClone`: add `sourceEl.setAttribute('data-mag-source','')`; compute opaque background from ancestors; set `lens.style.backgroundColor`; set `clone.style.overflow = 'hidden'`.
  - `teardownClone`: remove `data-mag-source` from previous source; clear `lens.style.backgroundColor`.
  - Add max-rect guard before cloning.

- `src/index.css`
  - Add rule: `[data-mag-source] { color: transparent !important; text-shadow: none !important; -webkit-text-fill-color: transparent !important; caret-color: transparent !important; }`
  - Add `.lens-clone.is-active { box-shadow: 0 0 0 1px hsl(var(--lav-purple) / 0.35); }` (will be clipped by `clip-path` along with the content).

## Out of scope

- No changes to signal/idle cursor states.
- No changes to other pages or components.
- No changes to the BookAudit page or Pricing.

## Acceptance

- Hovering a paragraph: inside the circle = single, crisp magnified copy of the line(s) under the cursor. Outside the circle = page looks normal (the source text is invisible only while the lens is on it; restored instantly on leave).
- No doubled/ghost text. No bleeding from neighboring paragraphs.
- Scroll/resize keeps the magnified content anchored.
- Reduced-motion + touch behavior unchanged.
