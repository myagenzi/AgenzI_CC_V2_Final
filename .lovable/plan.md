

# Fix: Zenzai card not showing in the stack

## Problem

In `EnginesStack.tsx`:
- Section height is `320vh` (~3 viewport scrolls)
- Card enter/exit ranges are spread 0 → 0.72, leaving the last 28% of scroll with Zenzai just sitting
- But the sticky container releases at progress = 1, so Zenzai's "rest time" gets eaten by the unpin
- Active-index thresholds (`0.34`, `0.66`) don't line up with the actual transform ranges (`0.4`, `0.72`), so the counter/dots are out of sync too
- Net effect: Zenzai briefly appears then the section unpins — feels like it never arrives

## Fix

Rebalance the timeline so each card gets equal scroll real-estate and Zenzai gets a proper "rest" window before unpin:

**1. Section height** → `360vh` (3 cards × 120vh each — gives breathing room)

**2. Per-card ranges** (evenly thirds, with overlap for the wipe):

| Card | inStart | inEnd | outStart | outEnd |
|---|---|---|---|---|
| 0 CaaS | 0.00 | 0.00 | 0.30 | 0.40 |
| 1 MaaS | 0.30 | 0.40 | 0.63 | 0.73 |
| 2 Zenzai | 0.63 | 0.73 | 1.00 | 1.00 |

Zenzai now finishes entering at 0.73 and has 0.27 of section progress (~97vh) to sit fully visible before unpin — feels intentional, not rushed.

**3. Active-index thresholds** → align with the new ranges:
- index 0 when progress < 0.36
- index 1 when progress < 0.68
- else index 2

**4. Add a tiny `clamp` on the transforms** by ensuring Framer Motion clamps (default behavior) — no code change needed, just confirming current `useTransform` calls clamp by default.

## Files

- `src/components/site/home/EnginesStack.tsx` — update `ranges` array, section `height`, and `activeIndex` thresholds

## Out of scope
- Card visuals / layout (working as designed)
- Other sections

