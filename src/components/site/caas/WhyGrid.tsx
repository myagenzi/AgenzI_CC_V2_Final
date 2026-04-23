import { Reveal } from "@/components/site/Reveal";

const cards = [
  {
    glyph: "⚡",
    title: "Speed",
    desc: "What takes your agency two weeks takes us 24–48 hours. AI doesn't wait for department approvals.",
  },
  {
    glyph: "₹",
    title: "Cost",
    desc: "A 60-second video used to cost ₹50,000. Ours starts at ₹4,999. Different cost structure — not cheaper quality.",
  },
  {
    glyph: "◈",
    title: "Consistency",
    desc: "One system. One voice. Instagram, ads, website, pitch deck — finally from the same brand.",
  },
];

export function WhyGrid() {
  return (
    <section className="px-6 py-20 md:px-16 md:py-28">
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

      <div className="grid grid-cols-1 gap-px bg-white/8 md:grid-cols-3">
        {cards.map((c, i) => (
          <Reveal key={c.title} delay={(i % 4) as 0 | 1 | 2 | 3}>
            <div className="h-full bg-background p-8 md:p-10">
              <div className="font-display mb-8 text-4xl text-electric">{c.glyph}</div>
              <h3 className="font-display mb-3 text-2xl font-bold uppercase tracking-tight">
                {c.title}
              </h3>
              <p className="text-sm leading-relaxed text-foreground/65">{c.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
