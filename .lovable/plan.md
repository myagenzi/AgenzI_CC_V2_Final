
## Goal
Fix the magnifier so the original paragraph stays visible everywhere on the page, and the lens circle cleanly replaces just that ~84px disc with a single, opaque, magnified copy — no ghosting, no doubling, no disappearing text.

## Root cause recap
The previous fix set `[data-mag-source] { color: transparent !important }` on the entire hovered element. That made the whole `<p>`/`<li>` invisible — so outside the lens circle the text vanished too. The bleed-through was actually caused by the lens background sometimes sampling a transparent ancestor (e.g. `glass-lavender`), so the clone wasn't truly opaque.

## Fix

### 1. `src/index.css`
- **Remove** the rule `[data-mag-source] { color: transparent !important; }` (and any related selector). Original text must stay fully visible.
- On `.lens-clone` add `isolation: isolate;` and ensure `background-color` is respected (no `background: transparent` overrides).
- Ensure the inner cloned element fills the lens with `background-color: inherit` via a CSS rule like `.lens-clone > * { background-color: inherit; }`.
- Keep the existing loupe ring `box-shadow` and `clip-path` behavior.

### 2. `src/components/site/effects/Cursor.tsx`
- **Remove** the `sourceEl.setAttribute("data-mag-source", "")` call in `setupClone`.
- **Remove** the matching `removeAttribute("data-mag-source")` calls in `teardownClone` and `setActive`. Original element is no longer mutated.
- **Harden `findOpaqueBg`**:
  - Walk ancestors and only accept a `background-color` whose alpha is ≥ 0.95 (currently 0.5 — too permissive, lets translucent glass surfaces qualify).
  - If no opaque ancestor found, resolve the page background from the CSS variable: `getComputedStyle(document.documentElement).getPropertyValue('--background')` and wrap as `hsl(...)`. Fall back to `#ffffff` only as last resort.
- In `setupClone`, after building the clone, also set `clone.style.backgroundColor = lensBg` so the clone tile itself is opaque (defense in depth — the wrapper is opaque, the clone is opaque).
- Keep all other guards (size limits, form-control skip, scope to deepest text element).

## Acceptance criteria
- Hovering a paragraph leaves the paragraph fully readable outside the circle.
- Inside the circle: a single, crisp, magnified slice of that text — no second layer visible underneath, no neighbor lines bleeding in.
- Works on both dark (lavender/cosmic) and light (cream/white) surfaces — lens picks up the correct opaque background each time.

## Files modified
- `src/components/site/effects/Cursor.tsx`
- `src/index.css`
