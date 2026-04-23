import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
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

function StickyEngine({
  data,
  index,
  total,
  onActive,
}: {
  data: EngineData;
  index: number;
  total: number;
  onActive: (i: number) => void;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const isLast = index === total - 1;

  // Per-card scroll progress over its own scroll spacer.
  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start start", "end start"],
  });

  // Last card never fades — it stays as the final resting state.
  const scale = useTransform(scrollYProgress, [0, 1], isLast ? [1, 1] : [1, 0.92]);
  const opacity = useTransform(scrollYProgress, [0, 0.85, 1], isLast ? [1, 1, 1] : [1, 0.6, 0]);
  const y = useTransform(scrollYProgress, [0, 1], isLast ? [0, 0] : [0, -40]);

  // Active-index detection via IntersectionObserver on the sticky card.
  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            onActive(index);
          }
        }
      },
      { threshold: [0.5, 0.75, 0.95], rootMargin: "-15% 0px -15% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [index, onActive]);

  return (
    <div
      ref={wrapRef}
      className="relative"
      style={{ height: isLast ? "110vh" : "150vh", zIndex: 10 + index }}
    >
      <div className="sticky top-[12vh] flex items-start justify-center px-4 md:px-8">
        <motion.div
          ref={cardRef}
          style={{ scale, opacity, y }}
          className="w-full max-w-[1180px]"
        >
          <EngineCard data={data} />
        </motion.div>
      </div>
    </div>
  );
}

export function EnginesStack() {
  const reduced = useReducedMotion();
  const [active, setActive] = useState(0);

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

      {/* Desktop: per-card sticky stack */}
      <section className="relative hidden lg:block">
        <div className="px-6 pb-12 pt-20 lg:px-12 lg:pt-24">
          <Header />
        </div>

        <div className="relative">
          {engines.map((e, i) => (
            <StickyEngine
              key={e.name}
              data={e}
              index={i}
              total={engines.length}
              onActive={setActive}
            />
          ))}
        </div>

        {/* Counter + dots */}
        <div className="sticky bottom-6 z-50 flex items-center justify-center gap-4 pb-6">
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
      </section>
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
