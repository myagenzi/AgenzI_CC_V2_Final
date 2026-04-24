import { Reveal } from "@/components/site/Reveal";

export function HowHero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 lg:pt-40 lg:pb-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(60% 50% at 15% 20%, hsl(var(--lav-purple)/.18), transparent 60%), radial-gradient(50% 40% at 90% 10%, hsl(var(--lav-pink)/.14), transparent 60%)",
        }}
      />

      <div className="relative mx-auto grid max-w-[1200px] grid-cols-1 gap-12 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-12">
        {/* Left */}
        <div className="flex flex-col justify-center">
          <Reveal>
            <span data-magnify className="chip-purple inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em]">
              <span className="h-1.5 w-1.5 rounded-full bg-[hsl(var(--lav-purple))]" />
              ◆ How It Works
            </span>
          </Reveal>
          <Reveal delay={1}>
            <h1
              className="mt-6 font-display font-bold leading-[0.95] tracking-[-0.03em] text-foreground"
              style={{ fontSize: "clamp(44px, 6vw, 78px)" }}
            >
              From conversation to
              <br />
              <em
                className="not-italic"
                style={{ color: "hsl(var(--gold))", fontStyle: "italic" }}
              >
                running system. 90 days.
              </em>
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-6 max-w-md text-[16px] leading-[1.75] text-foreground/65">
              Five steps. Measurable outcomes at every stage.
            </p>
          </Reveal>
          <Reveal delay={3}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="mailto:hello@agenzi.ai"
                data-magnify
                className="cta-purple rounded-full px-6 py-3 text-[13px] font-semibold"
              >
                Book Free Audit →
              </a>
              <a
                href="/#pricing"
                data-magnify
                className="rounded-full border border-foreground/15 px-6 py-3 text-[13px] font-semibold text-foreground/80 transition hover:border-foreground/30 hover:text-foreground"
              >
                See pricing
              </a>
            </div>
          </Reveal>
        </div>

        {/* Right: floating glass tile composition */}
        <div className="relative">
          <Reveal delay={1}>
            <div className="relative mx-auto aspect-square w-full max-w-[460px]">
              {/* Tray disc */}
              <div
                className="absolute inset-x-6 bottom-2 h-[78%] rounded-[36px] glass-lavender"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(var(--lav-purple)/.10), hsl(var(--lav-pink)/.06))",
                }}
              />
              {/* Tile 1 */}
              <div
                data-magnify
                className="glass-lavender absolute left-4 top-6 h-[44%] w-[44%] -rotate-6 rounded-3xl p-4 shadow-glow-lav"
                style={{ background: "hsl(var(--lav-purple)/.12)" }}
              >
                <div className="font-mono-tech text-[10px] uppercase tracking-[0.25em] text-foreground/60">01</div>
                <div className="mt-auto pt-8 font-display text-[18px] font-semibold text-foreground">Audit</div>
              </div>
              {/* Tile 2 */}
              <div
                data-magnify
                className="glass-lavender absolute right-4 top-2 h-[48%] w-[48%] rotate-3 rounded-3xl p-4"
                style={{ background: "hsl(var(--lav-pink)/.12)" }}
              >
                <div className="font-mono-tech text-[10px] uppercase tracking-[0.25em] text-foreground/60">03</div>
                <div className="mt-auto pt-8 font-display text-[18px] font-semibold text-foreground">Deploy</div>
              </div>
              {/* Tile 3 */}
              <div
                data-magnify
                className="glass-lavender absolute bottom-6 left-1/2 h-[42%] w-[52%] -translate-x-1/2 -rotate-2 rounded-3xl p-4"
                style={{ background: "hsl(var(--lav-purple)/.16)" }}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono-tech text-[10px] uppercase tracking-[0.25em] text-foreground/60">05</span>
                  <span className="rounded-full bg-[hsl(var(--gold)/.18)] px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-[hsl(var(--gold))]">
                    Live
                  </span>
                </div>
                <div className="mt-auto pt-6 font-display text-[20px] font-semibold text-foreground">Compound</div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Bottom stat strip */}
      <div className="relative mx-auto mt-16 max-w-[1200px] px-6 lg:px-12">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {[
            { n: "5", l: "Steps" },
            { n: "90", l: "Days" },
            { n: "20–40%", l: "Cost ↓" },
            { n: "2–5×", l: "Output ↑" },
          ].map((s) => (
            <div
              key={s.l}
              data-magnify
              className="glass-lavender flex items-center justify-between rounded-2xl px-5 py-4"
            >
              <span className="font-display text-[26px] font-bold leading-none text-foreground">
                {s.n}
              </span>
              <span className="rounded-full bg-[hsl(var(--lav-purple)/.12)] px-2.5 py-1 font-mono-tech text-[10px] uppercase tracking-[0.25em] text-[hsl(var(--lav-purple))]">
                {s.l}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
