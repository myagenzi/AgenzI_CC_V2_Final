import { Reveal } from "@/components/site/Reveal";

const items = [
  { label: "Audit findings", desc: "Written PDF you keep" },
  { label: "90-day roadmap", desc: "What to fix, in what order" },
  { label: "Quick-win shortlist", desc: "Things you can ship this week" },
];

export function BookAuditPromise() {
  return (
    <section className="pb-24 lg:pb-32">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
        <div
          className="relative overflow-hidden rounded-[40px] p-10 lg:p-16"
          style={{
            background:
              "linear-gradient(135deg, hsl(var(--lav-purple)/.12) 0%, hsl(var(--lav-pink)/.10) 55%, hsl(var(--gold)/.10) 100%)",
            border: "1px solid hsl(var(--lav-purple)/.18)",
          }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-50 blur-3xl"
            style={{ background: "hsl(var(--lav-purple)/.35)" }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full opacity-40 blur-3xl"
            style={{ background: "hsl(var(--gold)/.25)" }}
          />
          <div className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
            <Reveal>
              <h2
                className="font-display font-bold leading-[1.0] tracking-[-0.025em] text-foreground"
                style={{ fontSize: "clamp(32px, 4.2vw, 56px)" }}
              >
                Everything you need to{" "}
                <em
                  className="font-display"
                  style={{ fontStyle: "italic", color: "hsl(var(--gold))" }}
                >
                  decide
                </em>{" "}
                with{" "}
                <em
                  className="font-display"
                  style={{ fontStyle: "italic", color: "hsl(var(--lav-pink))" }}
                >
                  clarity.
                </em>
              </h2>
              <p className="lead mt-5 max-w-[44ch] text-[15px] leading-relaxed text-foreground/65">
                Walk away with three things — even if you never work with us.
              </p>
            </Reveal>

            <Reveal delay={1}>
              <div className="space-y-3">
                {items.map((it, i) => (
                  <div
                    key={it.label}
                    className="glass-lavender flex items-center gap-4 rounded-2xl p-4 pl-5"
                  >
                    <span className="font-mono-tech text-[11px] tracking-[0.2em] text-[hsl(var(--lav-purple))]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <div className="text-[14px] font-semibold text-foreground">
                        {it.label}
                      </div>
                      <div className="sd text-[12.5px] text-foreground/60">
                        {it.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
