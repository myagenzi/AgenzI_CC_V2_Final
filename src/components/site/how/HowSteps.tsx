import { Reveal } from "@/components/site/Reveal";

const steps = [
  {
    n: "01",
    week: "Week 1",
    title: "Audit",
    body: "We map your entire creative, marketing, and operations setup. Where time leaks. Where money wastes. Where AI wins fastest. No jargon. Just clarity.",
    out: "Prioritised list of interventions — yours to keep regardless of what you decide next.",
  },
  {
    n: "02",
    week: "Week 2–3",
    title: "Design",
    body: "We architect the system. Which services, in what order, at what investment. Human Agent assigned. AI system spec written. KPIs agreed in writing.",
    out: "System blueprint. Timeline. Targets locked before a single rupee is spent.",
  },
  {
    n: "03",
    week: "Week 3–6",
    title: "Deploy",
    body: "The system goes live. Automations deployed. Integrations connected. Creative engine running. First content out. First campaigns active.",
    out: "Live, running system. First results visible within 2 weeks of deployment.",
  },
  {
    n: "04",
    week: "Month 2–3",
    title: "Optimise",
    body: "We look at what the data says. Winning creative scaled. Underperforming campaigns killed. Automation workflows refined.",
    out: "Performance data, optimisation report, updated 30-day roadmap.",
  },
  {
    n: "05",
    week: "Month 3+",
    title: "Compound",
    body: "Every month, the system gets smarter. More data. Better outputs. Lower cost per outcome. The gap between your business and your competitors grows — in your favour.",
    out: "Quarterly review. New capability unlocks. Platform roadmap.",
  },
];

export function HowSteps() {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
        <Reveal>
          <span className="font-mono-tech text-[11px] uppercase tracking-[0.3em] text-foreground/55">
            The Five Steps
          </span>
        </Reveal>
        <Reveal delay={1}>
          <h2
            className="mt-3 font-display font-bold leading-[1.02] tracking-[-0.02em] text-foreground"
            style={{ fontSize: "clamp(34px, 4.5vw, 58px)" }}
          >
            Audit. Design. Deploy.
            <br />
            Optimise.{" "}
            <span style={{ color: "hsl(var(--gold))", fontStyle: "italic" }}>
              Compound.
            </span>
          </h2>
        </Reveal>

        <div className="relative mt-14">
          {/* connector */}
          <div
            aria-hidden
            className="absolute left-[27px] top-2 bottom-2 hidden w-px bg-gradient-to-b from-[hsl(var(--lav-purple)/.4)] via-[hsl(var(--lav-purple)/.18)] to-transparent md:block"
          />
          <div className="flex flex-col gap-6">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={(i % 3) as 0 | 1 | 2}>
                <div className="flex flex-col gap-4 md:flex-row md:items-stretch">
                  {/* Node */}
                  <div className="relative flex shrink-0 items-start md:w-[56px]">
                    <span
                      data-magnify
                      className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-[hsl(var(--lav-purple)/.35)] bg-background font-mono-tech text-[12px] font-bold tracking-wider text-[hsl(var(--lav-purple))]"
                    >
                      {s.n}
                    </span>
                  </div>
                  {/* Card */}
                  <div className="glass-lavender flex-1 rounded-2xl p-6 lg:p-8">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-full bg-[hsl(var(--lav-purple)/.12)] px-3 py-1 font-mono-tech text-[10px] uppercase tracking-[0.25em] text-[hsl(var(--lav-purple))]">
                        {s.week}
                      </span>
                      <span
                        className="font-display text-[42px] font-bold leading-none"
                        style={{ color: "hsl(var(--gold))" }}
                      >
                        {s.n}
                      </span>
                    </div>
                    <h3 className="mt-3 font-display text-[28px] font-bold tracking-[-0.01em] text-foreground">
                      {s.title}
                    </h3>
                    <p className="mt-3 max-w-2xl text-[15px] leading-[1.75] text-foreground/70">
                      {s.body}
                    </p>
                    <div
                      className="mt-5 border-l-2 pl-4 text-[14px] italic text-foreground/65"
                      style={{ borderColor: "hsl(var(--gold))" }}
                    >
                      <span className="font-mono-tech not-italic text-[10px] uppercase tracking-[0.25em] text-foreground/55">
                        Output:
                      </span>
                      <div className="mt-1">{s.out}</div>
                    </div>
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
