import { Reveal } from "@/components/site/Reveal";

const bars = [42, 68, 55, 80, 95, 72, 88];

export function PricingComparison() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-7">
          {/* Left — gradient cost-structure tile */}
          <Reveal delay={1}>
            <div
              className="relative flex h-full flex-col overflow-hidden rounded-[28px] p-8 lg:p-10"
              style={{
                background:
                  "linear-gradient(135deg, hsl(var(--lav-purple)) 0%, hsl(var(--lav-pink)) 100%)",
                minHeight: "440px",
              }}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-60"
                style={{
                  background:
                    "radial-gradient(50% 60% at 80% 10%, hsl(var(--lav-sky)/.35), transparent 65%)",
                }}
              />
              <div className="relative flex flex-col gap-4">
                <div className="rounded-2xl border border-white/25 bg-white/15 p-4 backdrop-blur-md">
                  <div className="font-mono-tech text-[10px] uppercase tracking-[0.28em] text-white/70">
                    Traditional Agency
                  </div>
                  <div
                    className="mt-2 font-display font-bold tracking-[-0.02em] text-white"
                    style={{ fontSize: "clamp(22px, 2.6vw, 30px)" }}
                  >
                    ₹20k – ₹1.5L
                  </div>
                  <div className="mt-1 text-[12px] text-white/70">/month · billed for time</div>
                </div>
                <div className="rounded-2xl border border-white/40 bg-white/85 p-4 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.25)]">
                  <div className="font-mono-tech text-[10px] uppercase tracking-[0.28em] text-foreground/60">
                    AgenzI · CaaS
                  </div>
                  <div
                    className="mt-2 font-display font-bold tracking-[-0.02em] text-foreground"
                    style={{ fontSize: "clamp(22px, 2.6vw, 30px)" }}
                  >
                    From ₹2,999
                  </div>
                  <div className="mt-1 text-[12px] text-foreground/60">/month · billed for outcomes</div>
                </div>
              </div>
              <div className="relative mt-auto pt-10">
                <h3
                  className="font-display font-bold leading-[1.05] tracking-[-0.02em] text-white"
                  style={{ fontSize: "clamp(26px, 3vw, 38px)" }}
                >
                  Same output.
                  <br />
                  <span style={{ color: "hsl(var(--gold))", fontStyle: "italic" }}>
                    Different cost structure.
                  </span>
                </h3>
                <p className="mt-4 max-w-md text-[14px] leading-[1.7] text-white/80">
                  Not a discount. A fundamentally different way of delivering creative, marketing and automation work.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Right — measurable outcomes tile */}
          <Reveal delay={2}>
            <div className="glass-lavender relative flex h-full flex-col overflow-hidden rounded-[28px] p-8 lg:p-10" style={{ minHeight: "440px" }}>
              <div className="flex items-end justify-between">
                <h3
                  className="max-w-xs font-display font-bold leading-[1.05] tracking-[-0.02em] text-foreground"
                  style={{ fontSize: "clamp(24px, 2.8vw, 34px)" }}
                >
                  Outcomes you can{" "}
                  <span style={{ color: "hsl(var(--lav-purple))", fontStyle: "italic" }}>
                    actually measure.
                  </span>
                </h3>
                <div className="hidden gap-1.5 sm:flex">
                  {["Cost", "Output", "Time"].map((t, i) => (
                    <span
                      key={t}
                      className="rounded-full px-2.5 py-1 font-mono-tech text-[9px] uppercase tracking-[0.22em]"
                      style={{
                        background: i === 1 ? "hsl(var(--lav-purple))" : "hsl(var(--lav-purple)/.12)",
                        color: i === 1 ? "white" : "hsl(var(--lav-purple))",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bar chart placeholder */}
              <div className="mt-8 flex h-40 items-end justify-between gap-2 rounded-2xl border border-foreground/10 bg-white/40 p-4">
                {bars.map((h, i) => (
                  <div key={i} className="flex flex-1 flex-col items-center gap-2">
                    <div
                      className="w-full rounded-t-md"
                      style={{
                        height: `${h}%`,
                        background:
                          i === 4
                            ? "linear-gradient(180deg, hsl(var(--lav-purple)) 0%, hsl(var(--lav-pink)) 100%)"
                            : "hsl(var(--lav-purple)/.35)",
                      }}
                    />
                    <span className="font-mono-tech text-[9px] uppercase tracking-[0.2em] text-foreground/45">
                      {["M1", "M2", "M3", "M4", "M5", "M6", "M7"][i]}
                    </span>
                  </div>
                ))}
              </div>

              {/* Stat pills */}
              <div className="mt-auto grid grid-cols-3 gap-3 pt-8">
                {[
                  { num: "20–40%", lbl: "Cost ↓" },
                  { num: "2–5×", lbl: "Output ↑" },
                  { num: "90D", lbl: "Guaranteed" },
                ].map((s) => (
                  <div
                    key={s.lbl}
                    className="rounded-2xl border border-foreground/10 bg-white/60 p-3 text-center"
                  >
                    <div
                      className="font-display font-bold tracking-[-0.02em]"
                      style={{ fontSize: "clamp(18px, 2vw, 24px)", color: "hsl(var(--lav-purple))" }}
                    >
                      {s.num}
                    </div>
                    <div className="mt-1 font-mono-tech text-[9px] uppercase tracking-[0.25em] text-foreground/55">
                      {s.lbl}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
