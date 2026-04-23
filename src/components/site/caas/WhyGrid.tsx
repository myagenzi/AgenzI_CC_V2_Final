import { useRef } from "react";
import { Reveal } from "@/components/site/Reveal";
import { useScrollSetup, gsap } from "@/lib/scroll";

const cards = [
  {
    glyph: "⚡",
    title: "Speed",
    desc: "What takes your agency two weeks takes us 24–48 hours. AI doesn't wait for department approvals.",
    span: "md:col-span-7 md:row-span-2",
    rate: -30,
  },
  {
    glyph: "₹",
    title: "Cost",
    desc: "A 60-second video used to cost ₹50,000. Ours starts at ₹4,999. Different cost structure — not cheaper quality.",
    span: "md:col-span-5",
    rate: 18,
  },
  {
    glyph: "◈",
    title: "Consistency",
    desc: "One system. One voice. Instagram, ads, website, pitch deck — finally from the same brand.",
    span: "md:col-span-5",
    rate: -12,
  },
];

export function WhyGrid() {
  const sectionRef = useRef<HTMLElement | null>(null);
  useScrollSetup(sectionRef, (el) => {
    el.querySelectorAll<HTMLElement>("[data-bento-tile]").forEach((tile) => {
      const rate = parseFloat(tile.dataset.rate || "0");
      const bg = tile.querySelector<HTMLElement>("[data-bento-bg]");
      if (!bg) return;
      gsap.fromTo(
        bg,
        { y: rate },
        {
          y: -rate,
          ease: "none",
          scrollTrigger: { trigger: tile, start: "top bottom", end: "bottom top", scrub: 1 },
        },
      );
    });
  }, []);

  return (
    <section ref={sectionRef} className="px-6 py-20 md:px-16 md:py-28">
      <div className="mb-12">
        <p className="font-mono-tech mb-4 text-[11px] uppercase tracking-[0.3em] text-foreground/50">
          02 / Why CaaS
        </p>
        <h2
          className="font-display font-bold uppercase leading-[0.95] tracking-[-0.03em]"
          style={{ fontSize: "clamp(40px, 7vw, 110px)" }}
        >
          Not short on ideas.
          <br />
          Short on <span className="text-electric">infrastructure.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-4 md:auto-rows-[280px] md:grid-cols-12">
        {cards.map((c, i) => (
          <Reveal key={c.title} delay={(i % 4) as 0 | 1 | 2 | 3}>
            <div
              data-bento-tile
              data-rate={c.rate}
              className={`bento-tile relative h-full overflow-hidden rounded-lg border border-white/8 bg-white/[0.015] p-8 md:p-10 ${c.span}`}
            >
              <div
                data-bento-bg
                aria-hidden
                className="pointer-events-none absolute inset-0 -z-10"
                style={{
                  background:
                    "radial-gradient(60% 80% at 80% 20%, hsl(var(--electric) / 0.08), transparent 60%)",
                }}
              />
              <div className="font-display mb-8 text-4xl text-electric">{c.glyph}</div>
              <h3 className="font-display mb-3 text-2xl font-bold uppercase tracking-tight">
                {c.title}
              </h3>
              <p className="max-w-md text-sm leading-relaxed text-foreground/65">{c.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
