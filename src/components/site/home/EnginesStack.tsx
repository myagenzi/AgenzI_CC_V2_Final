import { Reveal } from "@/components/site/Reveal";

const services = [
  {
    icon: "🤖",
    name: "Automated Sales Agents",
    desc: "24/7 lead qualification and appointment setting that speaks your brand voice. Never miss a lead — even when you're asleep.",
    tags: ["Lead Qualification", "Appointment Setting", "Brand Voice"],
  },
  {
    icon: "⚙️",
    name: "Operations Logic",
    desc: "Custom n8n workflows that connect your stack (CRM, Email, Slack) so data moves without you. Eliminate the copy-paste loop forever.",
    tags: ["n8n Workflows", "CRM Integration", "Slack + Email"],
  },
  {
    icon: "✍️",
    name: "Content Engines",
    desc: "Systems that turn one hour of your creativity into a month of multi-platform authority. Your content pipeline runs while you do real work.",
    tags: ["Multi-platform", "Content Repurposing", "Authority Building"],
  },
  {
    icon: "💬",
    name: "Client Concierge",
    desc: "AI-driven support that handles 80% of queries instantly. Your clients get answers — you get your time back.",
    tags: ["80% Auto-resolved", "Instant Responses", "24/7 Support"],
  },
];

export function EnginesStack() {
  return (
    <section id="services" className="px-6 py-24 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1180px]">
        <Reveal>
          <p className="mb-3 text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
            What We Actually Build
          </p>
        </Reveal>
        <Reveal delay={1}>
          <h2
            className="mx-auto mb-5 max-w-3xl text-center font-display font-extrabold leading-[1.05] tracking-[-0.03em] text-foreground"
            style={{ fontSize: "clamp(28px, 4.6vw, 52px)" }}
          >
            Concrete Systems.{" "}
            <span className="text-primary">Tangible Results.</span>
          </h2>
        </Reveal>
        <Reveal delay={2}>
          <p className="mx-auto mb-14 max-w-2xl text-center text-[15px] leading-relaxed text-muted-foreground">
            We don't just "give advice." We deploy functional infrastructure that runs your business while you focus on what only you can do.
          </p>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.name} delay={(Math.min(i + 1, 4)) as 1 | 2 | 3 | 4}>
              <div className="glass-lavender flex h-full flex-col rounded-3xl p-7">
                <div className="mb-4 flex items-center gap-3">
                  <span className="text-3xl">{s.icon}</span>
                  <h3 className="font-display text-xl font-extrabold tracking-[-0.02em] text-foreground">
                    {s.name}
                  </h3>
                </div>
                <p className="mb-6 flex-1 text-[14px] leading-relaxed text-muted-foreground">
                  {s.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((tag) => (
                    <span
                      key={tag}
                      className="chip-purple rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
