# Fix Marketing-MaaS layout bugs

Three targeted fixes. No new components, no design changes.

## 1. `MaasIntroBand.tsx` — grid collapse + overlapping CTA

**Bug**: `md:col-span-5` / `md:col-span-7` are on the inner `<h2>` and `<p>`, but the direct grid children are the `<Reveal>` wrappers — so each track defaults to ~1fr/12 and text wraps one word per line. Also, the giant "View More About Systems →" overlay sits on top of the placeholder caption.

**Fix**:
- Move `md:col-span-5` and `md:col-span-7` onto the `<Reveal>` wrappers (Reveal already forwards `className` to its root).
- Replace the `MediaPlaceholder` + absolute overlay block with a single self-contained gradient panel (lavender→purple→pink gradient bg, rounded-[24px], aspect-[21/9]) containing only the "View More About Systems →" text centered. Removes the caption-vs-overlay collision entirely.

## 2. `MaasCategoryList.tsx` — gradient ends mid-row

**Bug**: `.lav-row-active` gradient pill is applied separately to the header `<button>` and the body `<p>`, and the gradient stops at 60% magenta → leaves the right portion white on wide rows.

**Fix**:
- Wrap header + body of an open row in one container that carries `lav-row-active`, so the gradient paints the full row width as one continuous block.
- Update `.lav-row-active` in `src/index.css` to extend pink to 100% (`...magenta 55%, pink 100%`) so no white tail remains.
- Body `<p>` becomes transparent bg, just inherits white text.

## 3. `MaasLatestBand.tsx` — floating tile overlaps headline

**Bug**: The rotated tile is an inline flex child between "Latest" and "Reads", but at 1000px viewport it overlaps both the words and the ghosted "Insights" text behind them.

**Fix**:
- Take the floating tile out of the headline flex row. Place "Latest Reads" as a single inline headline (gold "Reads"), and move the floating tile to the right column above the article grid (absolute on md+, hidden on small) so it decorates the band without crashing into type.
- Reduce ghost "Insights" opacity to 0.35 and lower its z so headline always reads cleanly.

## Files

- `src/components/site/maas/lavender/MaasIntroBand.tsx`
- `src/components/site/maas/lavender/MaasCategoryList.tsx`
- `src/components/site/maas/lavender/MaasLatestBand.tsx`
- `src/index.css` (one-line gradient stop update)

## Out of scope

- No copy changes, no new sections, no palette changes.
- Other lavender components (`Hero`, `ServiceRows`, `SpecialtyGrid`, `AwardsTable`, `GhostMarquee`, `GetInTouch`) untouched — they render correctly.

Approve and I'll apply the four edits.
