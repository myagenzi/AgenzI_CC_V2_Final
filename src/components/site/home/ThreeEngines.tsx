import { Reveal } from "@/components/site/Reveal";

const engines = [
  {
    num: "01",
    tag: "Engine 01",
    title: "CaaS",
    sub: "Creative as a Service. Videos, posts, ads, brand identity. One brief — we handle the rest. Human direction. AI speed.",
    pts: ["Content without the briefing loop", "48-hour creative turnaround", "From ₹2,999/month"],
    cta: "Explore CaaS",
    accent: "from-[#120830] to-nebula",
  },
  {
    num: "02",
    tag: "Engine 02",
    title: "MaaS",
    sub: "Marketing as a Service. Performance marketing measured in revenue. Every rupee traced to a customer.",
    pts: ["Every rupee traced to a customer", "Pipeline that fills itself", "Performance + Growth + Perception"],
    cta: "Explore MaaS",
    accent: "from-[#0d1a3d] to-[#1e3a6e]",
  },
  {
    num: "03",
    tag: "Engine 03",
    title: "Zenzai",
    sub: "AI · Automation · Tech. Automations live in 48 hours. Every tool connected. Custom AI built for your business.",
    pts: ["WhatsApp · CRM · Support automated", "All your tools finally connected", "Custom AI models + mobile apps"],
    cta: "Explore Zenzai",
    accent: "from-[#0d0820] to-[#2b1460]",
  },
];

export function ThreeEngines() {
  return (
    <section id="three-engines" className="border-t border-border bg-cosmic py-20">
      <div className="mx-auto mb-9 flex max-w-[1200px] flex-col items-start justify-between gap-6 px-6 lg:flex-row lg:items-end lg:px-12">
        <Reveal>
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground/40">
            One system. Three engines.
          </p>
          <h2 className="font-display text-[clamp(26px,3.5vw,44px)] font-extrabold leading-tight tracking-[-0.03em] text-foreground">
            Creative. Marketing. <span className="text-primary">Automation.</span>
          </h2>
        </Reveal>
        <p className="text-[11px] uppercase tracking-[0.1em] text-foreground/20">← Drag to explore →</p>
      </div>

      <div className="scrollbar-none mx-auto flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 lg:px-12">
        {engines.map((e) => (
          <article
            key={e.title}
            className="group flex w-[88%] shrink-0 snap-start flex-col rounded-3xl border border-border bg-card p-7 transition hover:-translate-y-1 hover:shadow-card sm:w-[60%] lg:w-[32%]"
          >
            <div className="mb-3 font-display text-5xl font-extrabold leading-none tracking-[-0.04em] text-foreground/10">
              {e.num}
            </div>
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">{e.tag}</p>
            <h3 className="mb-2 font-display text-3xl font-extrabold tracking-[-0.02em] text-foreground">
              {e.title}
            </h3>
            <p className="mb-5 text-sm leading-relaxed text-foreground/55">{e.sub}</p>
            <ul className="mb-6 space-y-2">
              {e.pts.map((p) => (
                <li key={p} className="flex items-start gap-2 text-sm text-foreground/50">
                  <span className="mt-px text-primary">→</span>
                  {p}
                </li>
              ))}
            </ul>
            <div
              className={`mb-5 flex aspect-[16/10] items-center justify-center rounded-2xl bg-gradient-to-br ${e.accent} relative overflow-hidden`}
              aria-hidden
            >
              <div
                className="absolute inset-0"
                style={{ background: "radial-gradient(circle at 30% 40%, hsl(var(--gold) / 0.08), transparent 60%)" }}
              />
              <div className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full bg-primary/90">
                <span className="ml-1 inline-block border-y-[9px] border-l-[16px] border-y-transparent border-l-cosmic" />
              </div>
            </div>
            <p className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-primary transition group-hover:gap-3">
              {e.cta} <span>→</span>
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
