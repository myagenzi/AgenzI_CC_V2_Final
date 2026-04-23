import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion, MotionValue } from "framer-motion";
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

// Per-card animation ranges across full section progress (0..1)
// Each non-first card: enter, hold, exit. Last card holds until end (no exit).
const ranges: Array<{ inStart: number; inEnd: number; outStart: number; outEnd: number }> = [
  { inStart: 0,     inEnd: 0.001, outStart: 0.28, outEnd: 0.36 },
  { inStart: 0.28,  inEnd: 0.36,  outStart: 0.60, outEnd: 0.68 },
  { inStart: 0.60,  inEnd: 0.68,  outStart: 0.999, outEnd: 1 },
];

function StackedCard({
  data,
  index,
  progress,
}: {
  data: EngineData;
  index: number;
  progress: MotionValue<number>;
}) {
  const r = ranges[index];
  const y = useTransform(
    progress,
    [r.inStart, r.inEnd, r.outStart, r.outEnd],
    index === 0 ? [0, 0, 0, -40] : [600, 0, 0, -40],
  );
  const scale = useTransform(
    progress,
    [r.inStart, r.inEnd, r.outStart, r.outEnd],
    index === 0 ? [1, 1, 1, 0.94] : [0.96, 1, 1, 0.94],
  );
  const opacity = useTransform(
    progress,
    [r.inStart, r.inEnd, r.outStart, r.outEnd],
    index === 0 ? [1, 1, 1, 0.5] : [0, 1, 1, 0.5],
  );

  return (
    <motion.div
      style={{ y, scale, opacity, zIndex: 10 + index }}
      className="absolute inset-0 flex items-center justify-center px-4 md:px-8"
    >
      <div className="w-full max-w-[1180px]">
        <EngineCard data={data} />
      </div>
    </motion.div>
  );
}

export function EnginesStack() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Active card index for counter / dots — aligned with the ranges above
  const activeIndex = useTransform(scrollYProgress, (v) => {
    if (v < 0.32) return 0;
    if (v < 0.64) return 1;
    return 2;
  });

  if (reduced) {
    return (
      <section className="px-6 py-24 lg:px-12 lg:py-32">
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
      {/* Mobile: simple stacked list, no pin */}
      <section className="px-6 py-20 lg:hidden">
        <Header />
        <div className="mx-auto mt-10 grid max-w-[680px] gap-6">
          {engines.map((e) => (
            <EngineCard key={e.name} data={e} />
          ))}
        </div>
      </section>

      {/* Desktop: pinned scrub stack */}
      <section
        id="three-engines"
        ref={sectionRef}
        className="relative hidden lg:block"
        style={{ height: "400vh" }}
      >
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <div className="flex h-full flex-col">
            {/* Heading */}
            <div className="px-6 pt-20 lg:px-12 lg:pt-24">
              <Header />
            </div>

            {/* Stack */}
            <div className="relative flex-1">
              {engines.map((e, i) => (
                <StackedCard key={e.name} data={e} index={i} progress={scrollYProgress} />
              ))}
            </div>

            {/* Counter + dots */}
            <div className="flex items-center justify-center gap-4 pb-10">
              <Counter activeIndex={activeIndex} />
              <Dots activeIndex={activeIndex} />
            </div>
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

function Counter({ activeIndex }: { activeIndex: MotionValue<number> }) {
  const display = useTransform(activeIndex, (i) => `0${i + 1} / 03`);
  return (
    <motion.span className="font-mono-tech text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
      {display}
    </motion.span>
  );
}

function Dots({ activeIndex }: { activeIndex: MotionValue<number> }) {
  return (
    <div className="flex items-center gap-2">
      {[0, 1, 2].map((i) => (
        <Dot key={i} i={i} activeIndex={activeIndex} />
      ))}
    </div>
  );
}

function Dot({ i, activeIndex }: { i: number; activeIndex: MotionValue<number> }) {
  const opacity = useTransform(activeIndex, (a) => (a === i ? 1 : 0.3));
  const scale = useTransform(activeIndex, (a) => (a === i ? 1.2 : 1));
  return (
    <motion.span
      style={{ opacity, scale }}
      className={cn("h-1.5 w-1.5 rounded-full bg-primary")}
    />
  );
}
