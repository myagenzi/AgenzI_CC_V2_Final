import { Reveal } from "@/components/site/Reveal";
import { MediaPlaceholder } from "@/components/site/MediaPlaceholder";

const engines = [
  {
    num: "01",
    title: "CaaS",
    sub: "Creative as a Service. Videos, posts, ads, brand identity. One brief — we handle the rest. Human direction. AI speed.",
    pts: ["Content without the briefing loop", "48-hour creative turnaround", "From ₹2,999/month"],
    cta: "Explore CaaS",
    dark: true,
  },
  {
    num: "02",
    title: "MaaS",
    sub: "Marketing as a Service. Performance marketing measured in revenue. Every rupee traced to a customer.",
    pts: ["Every rupee traced to a customer", "Pipeline that fills itself", "Performance + Growth + Perception"],
    cta: "Explore MaaS",
    dark: false,
  },
  {
    num: "03",
    title: "Zenzai",
    sub: "AI · Automation · Tech. Automations live in 48 hours. Every tool connected. Custom AI built for your business.",
    pts: ["WhatsApp · CRM · Support automated", "All your tools finally connected", "Custom AI models + mobile apps"],
    cta: "Explore Zenzai",
    dark: false,
  },
];

export function ThreeEngines() {
  return (
    <section id="three-engines" className="px-6 py-24 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1180px]">
        <Reveal>
          <p className="mb-3 text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
            One system. Three engines.
          </p>
        </Reveal>
        <Reveal delay={1}>
          <h2
            className="mx-auto mb-5 max-w-3xl text-center font-display font-extrabold leading-[1.05] tracking-[-0.03em] text-foreground"
            style={{ fontSize: "clamp(32px, 5.4vw, 60px)" }}
          >
            Creative. Marketing. <span className="text-primary">Automation.</span>
          </h2>
        </Reveal>
        <Reveal delay={2}>
          <p className="mx-auto mb-16 max-w-2xl text-center text-[15px] leading-relaxed text-muted-foreground">
            Three disciplines that traditionally live in three different agencies — running as one integrated engine.
          </p>
        </Reveal>

        <div className="grid items-stretch gap-5 md:grid-cols-3">
          {engines.map((e, i) => {
            const isDark = e.dark;
            return (
              <Reveal key={e.title} delay={(i + 1) as 1 | 2 | 3}>
                <div
                  className={
                    isDark
                      ? "glass-dark-panel group relative flex h-full flex-col rounded-3xl p-7"
                      : "glass-lavender group relative flex h-full flex-col rounded-3xl p-7 transition hover:-translate-y-1"
                  }
                >
                  <div className="relative z-10 mb-5">
                    <MediaPlaceholder
                      aspect="16/9"
                      kind="image"
                      label="Engine visual"
                      className={isDark ? "!rounded-2xl !border-white/10 !bg-white/[0.03]" : "!rounded-2xl"}
                    />
                  </div>
                  <div className="relative z-10 flex flex-1 flex-col">
                    <div
                      className={`mb-3 font-display text-xl font-extrabold leading-none tracking-[-0.04em] ${
                        isDark ? "text-[hsl(var(--lav-lilac))]" : "text-primary"
                      }`}
                    >
                      {e.num}
                    </div>
                    <h3
                      className={`mb-3 font-display text-2xl font-extrabold tracking-[-0.02em] ${
                        isDark ? "text-white" : "text-foreground"
                      }`}
                    >
                      {e.title}
                    </h3>
                    <p
                      className={`mb-5 text-[14px] leading-relaxed ${
                        isDark ? "text-white/65" : "text-muted-foreground"
                      }`}
                    >
                      {e.sub}
                    </p>
                    <ul className="mb-6 space-y-2">
                      {e.pts.map((p) => (
                        <li
                          key={p}
                          className={`flex items-start gap-2 text-[13px] ${
                            isDark ? "text-white/65" : "text-muted-foreground"
                          }`}
                        >
                          <span className={isDark ? "mt-px text-[hsl(var(--lav-lilac))]" : "mt-px text-primary"}>→</span>
                          {p}
                        </li>
                      ))}
                    </ul>
                    <p
                      className={`mt-auto inline-flex items-center gap-1.5 text-[13px] font-semibold transition group-hover:gap-2.5 ${
                        isDark ? "text-[hsl(var(--lav-lilac))]" : "text-primary"
                      }`}
                    >
                      {e.cta} <span>→</span>
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
