# Book Free Audit Page + Fish-Eye Magnifier Cursor

## Part A — New `/book-audit` page

A dedicated route every "Book Free Audit" CTA on the site routes to. Content is verbatim from `base/_unpacked/index.html` lines 1559–1599. Visual vibe pulled from the screenshot: centered editorial headline with multi-color accent words, short sub paragraph, then a two-column block (clean form card on one side, tall rounded media tile on the other), then a wide rounded gradient feature panel, closing into a dark band — all rebuilt in our lavender brand system (Bricolage display + Space Grotesk body, lav-purple / pink / gold, `glass-lavender` cards, `tile-cosmic` dark band, `cta-purple` button).

### Route + global wiring
- New route `/book-audit` in `src/App.tsx`.
- Header "Book Free Audit" button → `Link to="/book-audit"`.
- Mobile drawer "Book Free Audit →" → `/book-audit`.
- Footer "Contact" / Book CTA → `/book-audit`.
- Sweep all "Book Your Free AI Audit" / "Book Free Audit" buttons across pages (Home `FinalCta`, About `AboutCta`, How `HowCta`, Pricing `PricingCta`, CaaS `CtaStripe`, MaaS `MaasGetInTouch`, Zenzai `ZenContactBand`, ProofWebinar) — replace `mailto:hello@agenzi.com` with `Link to="/book-audit"`.

### Page composition (`src/pages/BookAudit.tsx`)
Wrapped in `LenisProvider` + `surface-lavender` shell, with `Header` and `Footer`. Sections:

1. **`BookAuditHero.tsx`** — centered editorial hero
   - Eyebrow chip `chip-purple`: `◆ FREE AUDIT · NO COMMITMENT`
   - H1 (Bricolage, ~clamp(48px,7vw,96px), -2.5px tracking): "Let us know if you're **ready** to **build** your **AI system**." Accent words colored alternately in lav-purple / pink / gold italic — mirrors the multi-color word treatment from the reference. Brand-true rewrite of the original "Book Your Free AI Audit" headline so it scans like the screenshot.
   - Sub: "30 minutes. We map what's broken. You leave with a clear roadmap — yours to keep regardless." (verbatim from line 1563)
   - Soft lavender radial orb behind the headline (`soft-orb`).

2. **`BookAuditForm.tsx`** — two-column block (the heart of the screenshot)
   - **Left column**: white `glass-lavender` form card with rounded-3xl, generous padding, soft lav-purple inner border.
     - Title: "Book your Free AI Audit" (mono eyebrow above)
     - Sub: "30 minutes. No pitch. No commitment."
     - Fields (verbatim from HTML): First name + Last name (2-col), Business email, WhatsApp number, Business / Brand name, "What are you struggling with most?" select with the 6 options from line 1591, optional textarea.
     - Inputs use shadcn `Input`/`Textarea`/`Select`/`Label` styled with `bg-white/70 border-lav-purple/15 focus:border-lav-purple` and proper labels. All labels in mono-tech, all inputs `data-magnify`.
     - Submit: full-width `cta-purple` button "Book Free Audit →". On click, swaps to "Submitted! We'll be in touch shortly ✓" with green background (matches HTML behavior). No backend.
     - Footer note: "We respond within 24 hours. No spam. Ever."
   - **Right column**: tall rounded `glass-lavender` media tile (matches the portrait tile in the screenshot). Contains:
     - Top: small lav-purple pill "What to expect"
     - H3: "A 30-minute call that changes how you see your business."
     - Lead paragraph (verbatim line 1572).
     - Three icon rows (verbatim lines 1573–1575): 🔍 We map your current setup · 📋 You get a roadmap · ✅ No obligation — each as a small glass row with lav-purple icon plate, title, and description.
     - Bottom: gold-rule callout box (verbatim line 1577) with Hyderabad context + `hello@agenzi.com`.

3. **`BookAuditPromise.tsx`** — wide rounded gradient feature panel (the "Keep everything organised" equivalent from the screenshot)
   - Full-width rounded-[40px] tile with lav-purple → pink → gold soft gradient background, faint noise overlay.
   - Left: H2 "Everything you need to **decide** with **clarity**." (accent words in gold italic + pink)
   - Right: 3 small `glass-lavender` chips listing what they walk away with: "Audit findings PDF · Roadmap (90 days) · Quick-win shortlist".
   - Subtle floating orbs for depth.

4. **`BookAuditCta.tsx`** — closing dark band (matches reference's dark footer-like CTA band)
   - `tile-cosmic` rounded-[32px] block with H2 "Still on the fence?" + gold italic "Read the playbook first." Sub line + secondary `cta-purple` button → `/how-it-works`. Keeps the page from ending abruptly on the form.

### Files (Part A)
**Created**
- `src/pages/BookAudit.tsx`
- `src/components/site/book/BookAuditHero.tsx`
- `src/components/site/book/BookAuditForm.tsx`
- `src/components/site/book/BookAuditPromise.tsx`
- `src/components/site/book/BookAuditCta.tsx`

**Modified**
- `src/App.tsx` — register `/book-audit`
- `src/components/site/Header.tsx` — Book Free Audit button + mobile drawer link → `/book-audit`
- `src/components/site/Footer.tsx` — Contact link → `/book-audit`
- `src/components/site/home/FinalCta.tsx`
- `src/components/site/home/ProofWebinar.tsx`
- `src/components/site/home/Hero.tsx` (if it has a Book CTA)
- `src/components/site/about/AboutCta.tsx`
- `src/components/site/how/HowCta.tsx`
- `src/components/site/pricing/PricingCta.tsx`
- `src/components/site/caas/CtaStripe.tsx`
- `src/components/site/maas/lavender/MaasGetInTouch.tsx`
- `src/components/site/zenzai/lavender/ZenContactBand.tsx`

## Part B — True fish-eye magnifier cursor

Current Reading Lens only applies `backdrop-filter: blur + contrast` to the cursor itself, so the text underneath does not actually appear magnified. Replace it with a **real magnifying-glass lens** that shows a live, scaled-up, fish-eye-distorted copy of the text directly under the cursor.

### How it works
On `mousemove`, when the target is a text element (`p, li, blockquote, .lead, .sd, small, td, span` excluding interactive ancestors), the cursor enters `READING` mode and:

1. **Identify the source block** — the closest paragraph-like ancestor.
2. **Clone it once** into a portal element rendered into `document.body` and cache it. Re-clone only when the source element changes (cheap on each scroll/hover into a new paragraph; not per pixel of mouse movement).
3. **Position the clone** absolutely at the source element's bounding-rect coordinates so it overlays the original 1:1, then apply `transform: scale(1.6)` with `transform-origin` set to the cursor's local x/y inside that rect on each frame. This anchors the point under the cursor so it stays visually pinned while everything around it grows.
4. **Clip to a circle** with `clip-path: circle(34px at <cursorX> <cursorY>)` (in viewport coords) so only the lens area shows the scaled clone — the rest of the page reads normally.
5. **Fish-eye barrel curvature** is faked with two stacked CSS effects on the lens:
   - Inset radial shadow on the lens ring: `box-shadow: inset 0 0 22px hsl(var(--lav-purple)/.18), inset 0 0 0 1px hsl(var(--lav-purple)/.55), 0 12px 40px hsl(var(--lav-purple)/.22)` — gives the dome edge.
   - A radial highlight pseudo-element `::after` on the lens (top-left soft white gradient, 20% opacity) — sells the glass dome.
   - Slight `filter: contrast(1.06) saturate(1.04)` on the clipped clone for the optical "pop" through glass.
6. **Smoothing** — lens position uses the existing critically-damped spring; the clone's `transform-origin` updates raw on every `mousemove` (no smoothing) so the magnified text feels locked under the cursor with no rubber-band.
7. **Cleanup** — when leaving READING mode, fade the clone out (180ms opacity) and remove. When entering SIGNAL mode (button/link), the clone is hidden and the existing pulse-ring cursor takes over unchanged.
8. **Performance / fallbacks**:
   - Clone uses `pointer-events: none`, `will-change: transform, clip-path`, and is `aria-hidden`.
   - Skip entirely when `prefers-reduced-motion: reduce` or `(hover: none)` — falls back to the simple ring.
   - Skip on elements inside `<form>`, `input`, `select`, `textarea`.
   - Throttle clone re-creation by tracking `activeSourceEl` ref and only re-cloning when it changes.

### Why this matches what you described
- Text **underneath** the cursor literally renders larger inside the lens (because it's a real scaled DOM clone clipped to a circle).
- The fish-eye **bulge** comes from the dome shading + slight contrast filter; the visual centerpoint stays anchored under the cursor via dynamic `transform-origin`.
- It feels like a glass loupe gliding over the paragraph — exactly the magnifying-glass behavior you asked for, not just a CSS blur on the cursor.

### Files (Part B)
**Modified**
- `src/components/site/effects/Cursor.tsx` — add lens-clone logic (ref to portal div, source-element tracking, clip-path + transform-origin updates per frame).
- `src/index.css` — replace `.cursor-reading` styles with new lens dome shading; add `.lens-clone` + `.lens-clone::after` highlight; keep `.cursor-signal` / `.cursor-idle` as-is.

## Untouched
All other Home / CaaS / MaaS / Zenzai / About / How / Pricing content components, design tokens (colors, fonts, gradients), Lenis scroll, MetaballsGL, signal-pulse cursor.
