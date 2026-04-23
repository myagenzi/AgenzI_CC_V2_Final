import { useRef } from "react";
import { Reveal } from "@/components/site/Reveal";
import { useScrollSetup, gsap } from "@/lib/scroll";

const engines = [
  {
    num: "01",
    title: "CaaS",
    sub: "Creative as a Service. Videos, posts, ads, brand identity. One brief — we handle the rest. Human direction. AI speed.",
    pts: ["Content without the briefing loop", "48-hour creative turnaround", "From ₹2,999/month"],
    cta: "Explore CaaS",
    span: "md:col-span-5 md:translate-y-8",
    rate: -40,
  },
  {
    num: "02",
    title: "MaaS",
    sub: "Marketing as a Service. Performance marketing measured in revenue. Every rupee traced to a customer.",
    pts: ["Every rupee traced to a customer", "Pipeline that fills itself", "Performance + Growth + Perception"],
    cta: "Explore MaaS",
    span: "md:col-span-4 md:-translate-y-6",
    rate: 20,
  },
  {
    num: "03",
    title: "Zenzai",
    sub: "AI · Automation · Tech. Automations live in 48 hours. Every tool connected. Custom AI built for your business.",
    pts: ["WhatsApp · CRM · Support automated", "All your tools finally connected", "Custom AI models + mobile apps"],
    cta: "Explore Zenzai",
    span: "md:col-span-3 md:translate-y-12",
    rate: -25,
  },
];

export function ThreeEngines() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useScrollSetup(sectionRef, (el) => {
    el.querySelectorAll<HTMLElement>("[data-engine-card]").forEach((card) => {
      const rate = parseFloat(card.dataset.rate || "0");
      gsap.fromTo(
        card,
        { y: rate },
        {
          y: -rate,
          ease: "none",
          scrollTrigger: { trigger: card, start: "top bottom", end: "bottom top", scrub: 1 },
        },
      );
    });
  }, []);

  return (
    <section ref={sectionRef} id="three-engines" className="px-6 py-32 lg:px-12 lg:py-48">
      <div className="mx-auto max-w-[1100px]">
        <Reveal>
          <p className="mb-4 text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
            One system. Three engines.
          </p>
        </Reveal>
        <Reveal delay={1}>
          <h2
            className="mx-auto mb-6 max-w-3xl text-center font-display font-extrabold leading-[1.05] tracking-[-0.03em] text-foreground"
            style={{ fontSize: "clamp(36px, 6vw, 68px)" }}
          >
            Creative. Marketing. <em className="not-italic text-primary">Automation.</em>
          </h2>
        </Reveal>
        <Reveal delay={2}>
          <p className="mx-auto mb-24 max-w-2xl text-center text-[15px] leading-relaxed text-moondust">
            Three disciplines that traditionally live in three different agencies — running as one integrated engine.
          </p>
        </Reveal>

        <div className="grid items-start gap-6 md:grid-cols-12">
          {engines.map((e, i) => (
            <article
              key={e.title}
              data-engine-card
              data-rate={e.rate}
              className={`glass-card group relative flex h-full flex-col rounded-2xl p-8 transition hover:border-white/15 hover:bg-white/[0.04] ${e.span}`}
            >
              <span
                aria-hidden
                className="pointer-events-none absolute bottom-0 left-0 h-px w-0 bg-primary transition-[width] duration-500 group-hover:w-full"
              />
              <div className="mb-6 font-display text-2xl font-extrabold leading-none tracking-[-0.04em] text-primary">
                {e.num}
              </div>
              <h3 className="mb-3 font-display text-3xl font-extrabold tracking-[-0.02em] text-foreground transition-transform duration-300 group-hover:-translate-y-1">
                {e.title}
              </h3>
              <p className="mb-6 text-[14px] leading-relaxed text-foreground/55">{e.sub}</p>
              <ul className="mb-8 space-y-2.5">
                {e.pts.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-[13px] text-foreground/55">
                    <span className="mt-px text-primary">→</span>
                    {p}
                  </li>
                ))}
              </ul>
              <p className="mt-auto inline-flex items-center gap-1.5 text-[13px] font-semibold text-primary transition group-hover:gap-2.5">
                {e.cta} <span>→</span>
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
