import { Reveal } from "@/components/site/Reveal";

const tiles = [
  {
    t: "Speed",
    d: "From conversation to live system in 90 days. No drawn-out timelines.",
    glyph: "⚡",
  },
  {
    t: "Clarity",
    d: "KPIs in writing. Outputs at every step. You always know what you're getting.",
    glyph: "◆",
  },
  {
    t: "Compounding",
    d: "Each month the system learns. Cost per outcome falls. Quality rises.",
    glyph: "↗",
  },
];

export function HowFeatureGrid() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {/* Dark cosmic feature */}
          <Reveal>
            <div className="tile-cosmic relative h-full overflow-hidden rounded-[28px] p-8 lg:p-10">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-60"
                style={{
                  background:
                    "radial-gradient(50% 50% at 80% 10%, hsl(var(--lav-purple)/.32), transparent 60%), radial-gradient(40% 50% at 10% 90%, hsl(var(--lav-pink)/.18), transparent 60%)",
                }}
              />
              <div className="relative">
                <span className="font-mono-tech text-[11px] uppercase tracking-[0.3em] text-[hsl(var(--starlight)/.6)]">
                  Why this works
                </span>
                <h3
                  className="mt-3 font-display font-bold leading-[1.05] tracking-[-0.02em] text-[hsl(var(--starlight))]"
                  style={{ fontSize: "clamp(26px, 3.2vw, 38px)" }}
                >
                  Built for outcomes.
                  <br />
                  <span style={{ color: "hsl(var(--gold))", fontStyle: "italic" }}>
                    Not deliverables.
                  </span>
                </h3>
                <ul className="mt-7 space-y-4">
                  {[
                    "Human strategy + AI execution — same operator end-to-end.",
                    "Outcomes contracted in writing, not slide-deck promises.",
                    "Every step ships an artefact you keep, even if we part ways.",
                  ].map((line) => (
                    <li
                      key={line}
                      className="flex items-start gap-3 text-[14px] leading-relaxed text-[hsl(var(--starlight)/.8)]"
                    >
                      <span
                        className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{ background: "hsl(var(--gold))" }}
                      />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          {/* 3 light glass tiles stacked */}
          <div className="grid grid-cols-1 gap-5">
            {tiles.map((t, i) => (
              <Reveal key={t.t} delay={i as 0 | 1 | 2}>
                <div
                  data-magnify
                  className="glass-lavender flex items-start gap-5 rounded-[24px] p-6 lg:p-7"
                >
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-[18px]"
                    style={{
                      background: "hsl(var(--lav-purple)/.12)",
                      color: "hsl(var(--lav-purple))",
                    }}
                  >
                    {t.glyph}
                  </div>
                  <div>
                    <h4 className="font-display text-[20px] font-semibold tracking-[-0.01em] text-foreground">
                      {t.t}
                    </h4>
                    <p className="mt-1.5 text-[14px] leading-relaxed text-foreground/65">
                      {t.d}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
