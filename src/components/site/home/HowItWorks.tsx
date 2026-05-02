import { Reveal } from "@/components/site/Reveal";

const steps = [
  {
    num: "01",
    badge: "Analyze",
    title: "Map Your Friction Points",
    sub: "We find exactly where time and money are leaking from your business.",
    body: "We map your friction points and manual 'time-sinks.' No jargon. No overwhelm. Just a clear picture of what's slowing you down and what can be fixed immediately.",
    pts: [
      "Where time is being wasted daily",
      "What can be automated this week",
      "Where manual work is costing you growth",
    ],
    foot: "Your friction map is yours to keep — regardless of what you decide.",
  },
  {
    num: "02",
    badge: "Architect",
    title: "Build Your Digital Army",
    sub: "We build your infrastructure using Agentic AI and RAG protocols.",
    body: "We architect your 'Digital Army' — AI agents, automated workflows, and knowledge systems that work together as one integrated engine. Human strategy meets AI execution.",
    pts: [
      "Agentic AI that thinks and acts",
      "RAG-powered knowledge systems",
      "One integrated system across all functions",
    ],
  },
  {
    num: "03",
    badge: "Automate",
    title: "You Become the Architect",
    sub: "We deploy. You move from Operator to Architect.",
    body: "The system goes live. You stop managing tasks and start steering the business. No chasing. No coordination. No stitching tools. You see the output.",
    pts: [
      "Leads qualify and book automatically",
      "Content publishes consistently",
      "Operations run without you in the loop",
    ],
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="px-6 py-24 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1180px]">
        <Reveal>
          <p className="mb-3 text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
            The Soft Power Framework
          </p>
        </Reveal>
        <Reveal delay={1}>
          <h2
            className="mx-auto mb-5 max-w-3xl text-center font-display font-extrabold leading-[1.05] tracking-[-0.03em] text-foreground"
            style={{ fontSize: "clamp(32px, 5.4vw, 60px)" }}
          >
            The Architecture of{" "}
            <span className="text-primary">Modern Business.</span>
          </h2>
        </Reveal>
        <Reveal delay={2}>
          <p className="mx-auto mb-14 max-w-2xl text-center text-[15px] leading-relaxed text-muted-foreground">
            Three phases. One transformation. From bottleneck to architect in 30 days.
          </p>
        </Reveal>

        <div className="grid items-stretch gap-5 md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.num} delay={(i + 1) as 1 | 2 | 3}>
              <article className="glass-lavender flex h-full flex-col rounded-3xl p-7">
                <div className="mb-4 flex items-baseline justify-between">
                  <div className="font-display text-5xl font-extrabold leading-none tracking-[-0.04em] text-primary">
                    {s.num}
                  </div>
                  <span className="chip-purple rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider">
                    {s.badge}
                  </span>
                </div>
                <h3 className="mb-3 font-display text-2xl font-extrabold tracking-[-0.02em] text-foreground">
                  {s.title}
                </h3>
                <p className="mb-3 text-[14px] font-medium text-foreground/85">{s.sub}</p>
                <p className="mb-5 text-[13px] leading-relaxed text-muted-foreground">{s.body}</p>
                <ul className="mb-4 space-y-2">
                  {s.pts.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-[13px] text-muted-foreground">
                      <span className="text-primary">→</span>
                      {p}
                    </li>
                  ))}
                </ul>
                {s.foot && (
                  <p className="mt-auto text-[12px] italic text-muted-foreground">{s.foot}</p>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
