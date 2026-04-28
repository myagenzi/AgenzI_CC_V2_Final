# Increase Nav Logo Size 2×

## Change
In `src/components/site/Header.tsx` (line 72), the logo currently uses `h-11 w-auto md:h-14` (44px mobile / 56px desktop).

Update to `h-22 w-auto md:h-28` (88px / 112px) — exactly 2× current size.

Since Tailwind v3 doesn't ship `h-22` by default, use arbitrary values:
```tsx
<img src={logo} alt="AgenzI" className="h-[88px] w-auto md:h-[112px]" />
```

## Notes
- The pill nav container will naturally grow taller to fit the larger logo (no other changes needed — it uses `items-center` and flexible padding).
- All other nav items, dropdown, and CTA button stay unchanged.
- No CSS or other files need changes.

## Files
- `src/components/site/Header.tsx` — line 72 only