import { Reveal } from "@/components/site/Reveal";

const traps = [
  {
    icon: "⚡",
    title: "The Manual Grind",
    desc: "Every new client means more emails, more meetings, and more burnout. You're trading time for money with no escape ramp in sight.",
  },
  {
    icon: "📈",
    title: "The Revenue Ceiling",
    desc: "You can't grow because you are the engine. When you stop, the money stops. Your business needs you to survive — and that's a liability.",
  },
];

export function Problem() {
  return (
    <section id="problem" className="px-6 py-24 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1100px]">
        <Reveal>
          <p className="mb-3 text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
            The Problem
          </p>
        </Reveal>
        <Reveal delay={1}>
          <h2
            className="mx-auto mb-5 max-w-3xl text-center font-display font-extrabold leading-[1.05] tracking-[-0.03em] text-foreground"
            style={{ fontSize: "clamp(32px, 5.4vw, 60px)" }}
          >
            You don't have a scaling problem.
            <br />
            You have a{" "}
            <span className="text-primary">"Systems" problem.</span>
          </h2>
        </Reveal>
        <Reveal delay={2}>
          <p className="mx-auto mb-16 max-w-2xl text-center text-[15px] leading-relaxed text-muted-foreground">
            Most businesses fail to scale because they rely on Human Speed. You're stuck in the "Hustle" trap — working harder while the ceiling gets lower.
          </p>
        </Reveal>

        <div className="grid items-start gap-6 md:grid-cols-2">
          {/* Hustle traps */}
          <div className="space-y-5">
            {traps.map((item, i) => (
              <Reveal key={item.title} delay={(i + 2) as 2 | 3}>
                <div className="glass-lavender rounded-3xl p-7">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="text-2xl">{item.icon}</span>
                    <h3 className="font-display text-xl font-extrabold text-foreground">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-[14px] leading-relaxed text-muted-foreground">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* The shift */}
          <div className="lg:sticky lg:top-24">
            <Reveal delay={3}>
              <div className="glass-dark-panel relative rounded-3xl p-8">
                <div className="relative z-10">
                  <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[hsl(var(--lav-lilac))]">
                    The Shift
                  </p>
                  <h3 className="mb-4 font-display text-2xl font-extrabold text-white">
                    Top 1% founders are moving from{" "}
                    <span className="text-[hsl(var(--lav-lilac))]">
                      "Hustle" to Agentic Logic.
                    </span>
                  </h3>
                  <p className="mb-5 text-[14px] leading-relaxed text-white/70">
                    They're not working harder. They've built AI systems that work for them — 24/7, without burnout, at a fraction of the cost.
                  </p>
                  <p className="mb-6 text-[14px] font-semibold leading-relaxed text-white">
                    Are you building a job — or building an architecture?
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Agentic AI", "24/7 Automation", "Zero Manual Friction", "Scale Without Hiring"].map(
                      (tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 text-[11px] font-medium text-white/85"
                        >
                          {tag}
                        </span>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
