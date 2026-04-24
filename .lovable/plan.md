

# Homepage Content Sync + Magnifier Cursor

Two things in one pass. No design tokens or layout change — just content fidelity to `base/_unpacked/index.html` plus a new global cursor behavior.

## Part A — Content sync (lavender vibe preserved)

### 1. `Hero.tsx` — status strip
Slim bar under the stats grid:
`• Hyderabad, India · IST HH:MM:SS · SYSTEMS ACTIVE`
- Live clock via `setInterval` (1s), cleaned up on unmount.
- Style: `font-mono-tech`, `text-[11px]`, lav-purple dot, muted separators.

### 2. `ProofWebinar.tsx` — copy rewrite
- Eyebrow → **Why It Works**
- H2 → **Built by operators. Backed by numbers.** (gold accent on `Backed by numbers`)
- Stat cards verbatim from source:
  - **70%** — *AI changed the cost structure of creative production. We pass that saving to you — at 60–80% gross margin.*
  - **48h** — *What takes an agency two weeks takes us 48 hours. AI doesn't sleep or wait for approval chains.*
  - **90D** — *20–40% cost reduction or 2–5× output increase in 90 days. Or we work free until we deliver. No asterisks.*
- "Built for" tags → **Founders · D2C Brands · SMBs · Coaches + Creators · Growth-stage startups · Enterprise** (6 chips, existing `chip-purple`)
- New **philosophy quote** block in `glass-lavender` panel above webinar bar — large display type, last sentence in lilac accent:
  *"AI won't replace your business. But a business using AI well will. The businesses that build the system now will be the ones everyone else is chasing in three years."*
- New **urgency line** between philosophy and webinar bar (small uppercase eyebrow + body):
  *We only onboard a small number of businesses each month. Limited spots available for May 2026.*
- Webinar bar:
  - Title → **See It In Action**
  - Sub → *Watch us build a real AI system for a real business — live. 30 minutes. No pitch. You leave with a playbook.*
  - Button → **Reserve your spot →**

### 3. `FinalCta.tsx` — copy rewrite + dual CTA
- Eyebrow → **Your Move**
- H2 → **See what your system could look like.** (gold italic on *could look like*)
- Body → *30 minutes. No pitch. Just a clear picture of what's possible — and a roadmap that's yours to keep regardless of what you decide.*
- Two CTAs (existing pill styles):
  - Primary `cta-purple`: **Book Your Free AI Audit →** (mailto)
  - Secondary `glass-lavender` ghost pill: **See pricing** → `#pricing`
- Note under CTAs (muted, centered): *We only onboard a small number of businesses each month. No commitment required.*

### Explicitly NOT touched
No Nucleus / orbital diagram. No reorder. `StatPanel`, `Stats`, `Ticker`, `Statement`, `EnginesStack`, `Problem`, `Mirror`, `HowItWorks`, `Footer` left as-is.

## Part B — Magnifier cursor (global)

Upgrade the existing `Cursor.tsx` so on hoverable elements the ring becomes a **magnifying lens** that visually enlarges whatever sits beneath it.

**Behavior**
- Default state: existing small dot + lav-purple ring (unchanged).
- On hover over targets: ring grows to a ~84px circular **lens** with a subtle lav-purple border + soft inner shadow + tiny "+" glyph in the corner. The dot hides.
- Targets that trigger the lens: `a, button, [role="button"], nav a, footer a, .chip-purple, .pill, .eyebrow, .tag, [data-magnify]`.
- Add `data-magnify` to small text highlights we want included (eyebrow lines, stat numbers, footer link rows, header nav links, menu items).

**Magnification technique (performance-safe)**
- The lens is a fixed circular div following the cursor (already has lerp).
- Inside the lens: `background-image: -webkit-canvas` is heavy. Instead use the **CSS approach**: when a hover target is detected, briefly apply `transform: scale(1.06)` + `transition: transform 180ms ease-out` to the hovered element via a `data-mag-active` attribute toggled in the existing `mousemove` handler. The lens visually frames the slight scale-up, giving the magnify illusion without canvas/SVG overhead.
- `prefers-reduced-motion` → skip the scale, keep ring color change only.
- Touch / coarse pointers → cursor stays disabled (already handled).

**Files**
- `src/components/site/effects/Cursor.tsx` — extend with lens mode, target detection, and `data-mag-active` toggle on the hovered element (cleanup on leave).
- `src/index.css` — add `.cursor-lens` (lens visual: 84px circle, `border: 1.5px solid hsl(var(--lav-purple))`, `box-shadow: inset 0 0 24px rgba(108,63,207,0.18), 0 6px 24px rgba(108,63,207,0.25)`, backdrop-filter blur(0)) and `[data-mag-active]{ transform: scale(1.06); transition: transform .18s ease-out; will-change: transform; }`.
- Add `data-magnify` to: `Header.tsx` nav links + CTAs, `Footer.tsx` link rows, `Hero.tsx` eyebrow + stat numbers, `ProofWebinar.tsx` chips + stat numbers, `FinalCta.tsx` CTAs + note.

## Files modified

- `src/components/site/home/Hero.tsx`
- `src/components/site/home/ProofWebinar.tsx`
- `src/components/site/home/FinalCta.tsx`
- `src/components/site/effects/Cursor.tsx`
- `src/components/site/Header.tsx`
- `src/components/site/Footer.tsx`
- `src/index.css`

