import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/site/Reveal";
import { EngineCard, type EngineData } from "./EngineCard";
import { cn } from "@/lib/utils";

const engines: EngineData[] = [
  {
    num: "01",
    total: "03",
    name: "CaaS",
    desc: "Creative as a Service. Videos, posts, ads, brand identity. One brief — we handle the rest. Human direction. AI speed.",
    tagline: "Creative as a Service · 48h turnaround",
    bullets: [
      "Content without the briefing loop",
      "48-hour creative turnaround",
      "From ₹2,999/month",
    ],
    cta: "Explore CaaS",
    href: "/what-we-do/creative-caas",
    dark: true,
  },
  {
    num: "02",
    total: "03",
    name: "MaaS",
    desc: "Marketing as a Service. Performance marketing measured in revenue. Every rupee traced to a customer.",
    tagline: "Marketing as a Service · Revenue-tracked",
    bullets: [
      "Every rupee traced to a customer",
      "Pipeline that fills itself",
      "Performance + Growth + Perception",
    ],
    cta: "Explore MaaS",
    href: "/what-we-do/marketing-maas",
  },
  {
    num: "03",
    total: "03",
    name: "Zenzai",
    desc: "AI · Automation · Tech. Automations live in 48 hours. Every tool connected. Custom AI built for your business.",
    tagline: "Intelligence · 48h automations live",
    bullets: [
      "WhatsApp · CRM · Support automated",
      "All your tools finally connected",
      "Custom AI models + mobile apps",
    ],
    cta: "Explore Zenzai",
    href: "/what-we-do/intelligence-zenzai",
  },
];

function DesktopStack() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Card 2 slides over Card 1 between 0.15 → 0.45
  const y2 = useTransform(scrollYProgress, [0.15, 0.45], ["110%", "0%"], {
    clamp: true,
  });
  // Card 3 slides over Card 2 between 0.55 → 0.85
  const y3 = useTransform(scrollYProgress, [0.55, 0.85], ["110%", "0%"], {
    clamp: true,
  });

  useMotionValueEvent(scrollYProgress, "change", (p) => {
    const next = p >= 0.65 ? 2 : p >= 0.3 ? 1 : 0;
    setActive((prev) => (prev === next ? prev : next));
  });

  const cardYs = [undefined, y2, y3];

  return (
    <section ref={sectionRef} className="relative hidden lg:block" style={{ height: "320vh" }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <div className="flex h-full flex-col">
          <div className="px-6 pb-8 pt-[10vh] lg:px-12">
            <Header />
          </div>

          <div className="relative flex-1">
            {engines.map((e, i) => (
              <div
                key={e.name}
                className="absolute inset-x-0 top-0 flex justify-center px-4 md:px-8"
                style={{ zIndex: 10 + i }}
              >
                <motion.div
                  style={cardYs[i] ? { y: cardYs[i] } : undefined}
                  className="w-full max-w-[1180px]"
                >
                  <EngineCard data={e} />
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Counter + dots */}
        <div className="pointer-events-none absolute inset-x-0 bottom-6 z-50 flex items-center justify-center gap-4">
          <span className="font-mono-tech rounded-full bg-background/70 px-3 py-1 text-[11px] uppercase tracking-[0.3em] text-muted-foreground backdrop-blur">
            {`0${active + 1} / 03`}
          </span>
          <div className="flex items-center gap-2 rounded-full bg-background/70 px-3 py-1.5 backdrop-blur">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={cn(
                  "h-1.5 w-1.5 rounded-full bg-primary transition-all",
                  active === i ? "scale-125 opacity-100" : "opacity-30",
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function EnginesStack() {
  const reduced = useReducedMotion();

  if (reduced) {
    return (
      <section id="three-engines" className="px-6 py-24 lg:px-12 lg:py-32">
        <Header />
        <div className="mx-auto mt-12 grid max-w-[1180px] gap-6">
          {engines.map((e) => (
            <EngineCard key={e.name} data={e} />
          ))}
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Mobile: simple stacked list */}
      <section id="three-engines" className="px-6 py-20 lg:hidden">
        <Header />
        <div className="mx-auto mt-10 grid max-w-[680px] gap-6">
          {engines.map((e) => (
            <EngineCard key={e.name} data={e} />
          ))}
        </div>
      </section>

      {/* Desktop: shared pinned stage with cards swiping over each other */}
      <DesktopStack />
    </>
  );
}

function Header() {
  return (
    <div className="mx-auto max-w-[1180px] text-center">
      <Reveal>
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
          One system. Three engines.
        </p>
      </Reveal>
      <Reveal delay={1}>
        <h2
          className="mx-auto max-w-3xl font-display font-extrabold leading-[1.05] tracking-[-0.03em] text-foreground"
          style={{ fontSize: "clamp(28px, 4.6vw, 52px)" }}
        >
          Creative. Marketing. <span className="text-primary">Automation.</span>
        </h2>
      </Reveal>
    </div>
  );
}
