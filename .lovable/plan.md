
# Fix the engine stack bug and remove the current console errors

## What is actually broken

There are two separate issues:

1. **The Zenzai card timing is still fragile**
   - The current Framer Motion mapping in `src/components/site/home/EnginesStack.tsx` leaves the third card dependent on a narrow entry window plus sticky release timing.
   - On real scroll, that can still feel like only CaaS and MaaS appear properly.

2. **There is a real React ref warning unrelated to Zenzai**
   - Console logs show: `Function components cannot be given refs`
   - Root cause is `src/components/site/Reveal.tsx`
   - `Reveal` renders `<Tag ref={ref} />`, and when `Tag` is not a native tag or when React treats the polymorphic prop loosely, this pattern can trigger ref warnings.
   - The warnings are currently surfacing from `Mirror` and `HowItWorks`, so even if the stack animation is adjusted, the page still looks “broken” in dev.

## Implementation plan

### 1. Make the stacked card animation deterministic
Update `src/components/site/home/EnginesStack.tsx` so the three-card sequence is easier to read and the last card always gets a full settled state.

Changes:
- Increase the section scroll space slightly again if needed, but more importantly:
- Rework the animation ranges so each card gets:
  - an entry phase
  - a stable fully-visible phase
  - an exit phase
- Give **Zenzai** a full visible resting range before the sticky section unpins
- Keep the counter/dots thresholds perfectly aligned to the same ranges

Recommended shape:
- Card 1: visible immediately, exits during first transition
- Card 2: enters from below, holds, then exits
- Card 3: enters from below earlier than it does now, then holds until section end

Net effect:
- No “flash by” on the last card
- Clear scrubbed wipe between all three cards
- Counter and dots remain synchronized with the visible card

### 2. Fix the `Reveal` ref warning at the source
Refactor `src/components/site/Reveal.tsx` so it no longer attaches a ref directly to an arbitrary polymorphic component.

Safer approach:
- Keep `Reveal` responsible for the intersection observer state only
- Always attach the observer ref to a real DOM wrapper element
- Render the requested `as` element inside that wrapper, or constrain `as` to intrinsic HTML tags and type it accordingly

Best fit for this codebase:
- Replace the current polymorphic ref pattern with a guaranteed DOM node wrapper
- Preserve existing animation classes and delay behavior
- Ensure current usages in `Mirror`, `HowItWorks`, and elsewhere continue to work without changing content structure significantly

### 3. Preserve semantic layout where `Reveal as="article"` is used
Because `HowItWorks` and `ThreeEngines` use `Reveal as="article"`, the ref-safe `Reveal` update needs to avoid breaking semantics or spacing.

Implementation detail:
- Either:
  - make `Reveal` render the chosen intrinsic tag directly while safely typing it, or
  - move `Reveal` one level inside and let the semantic parent (`article`) remain outside
- For this project, the cleaner option is:
  - keep `article` / semantic containers outside where needed
  - use `Reveal` on inner content blocks

Files likely needing small cleanup:
- `src/components/site/home/HowItWorks.tsx`
- `src/components/site/home/ThreeEngines.tsx` if still retained
- Any other `Reveal as="article"` usage found during implementation

### 4. Improve the stack structure for desktop vs mobile
The current section still uses one pinned structure for all breakpoints with only a decorative mobile fallback node.

Update `src/components/site/home/EnginesStack.tsx` to explicitly split behavior:
- **Desktop (`lg+`)**: sticky pinned Framer Motion stack
- **Mobile (`< lg`)**: regular vertical list of three cards, no sticky layering

Why:
- Avoid unnecessary animation logic on smaller viewports
- Make behavior clearer and less brittle
- Reduce chances of the third card being visually obscured on intermediate widths

### 5. Verify layering and clipping rules
While updating `EnginesStack.tsx`, confirm:
- stacked cards are absolutely centered in the same plane
- higher index cards sit above lower ones
- parent containers do not clip the incoming card unexpectedly
- the stack area has enough vertical room below the heading and above the counter

Specific checks:
- `zIndex` order
- `overflow-hidden` only on the intended sticky viewport, not on a container that trims Zenzai too early
- stack container height leaves enough visible card space

## Files to update

- `src/components/site/home/EnginesStack.tsx`
  - rebalance scroll progress ranges
  - align active index thresholds
  - separate desktop/mobile rendering paths more cleanly
  - verify stacking/layering behavior

- `src/components/site/Reveal.tsx`
  - remove the unsafe ref-to-polymorphic-component pattern
  - keep reveal animation behavior intact

- `src/components/site/home/HowItWorks.tsx`
  - adjust any `Reveal as="article"` usage if needed after the `Reveal` refactor

- `src/components/site/home/ThreeEngines.tsx`
  - only if needed for consistency or to remove the same pattern from the unused legacy section

## Expected outcome

After implementation:
- All three engine cards, including **Zenzai**, appear smoothly in the sticky scrub sequence
- The last card remains visible long enough to read before unpinning
- Counter/dots match the visible card
- The React console warnings about refs disappear
- The section remains premium on desktop and stable on mobile

## Out of scope

- Redesigning the card content/layout
- Replacing placeholder visuals
- Changing other sections’ animation language beyond the `Reveal` warning cleanup
