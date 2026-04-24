import { Reveal } from "@/components/site/Reveal";

const pillars = [
  {
    glyph: "⚡",
    title: "Automate",
    sub: "Repetitive tasks identified and handed to AI in days, not quarters.",
  },
  {
    glyph: "⟳",
    title: "Integrate",
    sub: "Your 12–15 tools talking to each other. One data flow. No copy-pasting.",
  },
  {
    glyph: "◈",
    title: "Build",
    sub: "Custom AI, mobile apps, document pipelines — the moat competitors can't buy.",
  },
];

export function ZenPillars() {
  return (
    <section className="px-6 py-20 lg:px-12">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-6 md:grid-cols-3">
        {pillars.map((p, i) => (
          <Reveal key={p.title} delay={(i + 1) as 1 | 2 | 3}>
            <article
              data-magnify
              className="glass-lavender group relative flex h-full flex-col rounded-[24px] p-7 transition hover:-translate-y-1"
            >
              <div
                className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl text-xl"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(var(--lav-purple) / 0.18), hsl(var(--lav-pink) / 0.18))",
                  color: "hsl(var(--lav-purple))",
                }}
              >
                {p.glyph}
              </div>
              <h3 className="font-display text-2xl font-bold tracking-[-0.02em] text-foreground">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.sub}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
