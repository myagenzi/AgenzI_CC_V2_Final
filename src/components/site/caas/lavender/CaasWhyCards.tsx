import { Reveal } from "@/components/site/Reveal";

const cards = [
  {
    glyph: "⚡",
    title: "Speed",
    desc: "What takes your agency two weeks takes us 24–48 hours. AI doesn't wait for department approvals.",
    tone: "from-[hsl(var(--lav-purple))] to-[hsl(var(--lav-lilac))]",
  },
  {
    glyph: "₹",
    title: "Cost",
    desc: "A 60-second video used to cost ₹50,000. Ours starts at ₹4,999. Different cost structure — not cheaper quality.",
    tone: "from-[hsl(var(--lav-magenta))] to-[hsl(var(--lav-pink))]",
  },
  {
    glyph: "◈",
    title: "Consistency",
    desc: "One system. One voice. Instagram, ads, website, pitch deck — finally from the same brand.",
    tone: "from-[hsl(var(--lav-amber))] to-[hsl(var(--lav-gold))]",
  },
];

export function CaasWhyCards() {
  return (
    <section className="px-6 py-20 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1200px]">
        <div className="mx-auto mb-14 max-w-[780px] text-center">
          <Reveal>
            <span className="chip-purple inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em]">
              Why CaaS
            </span>
          </Reveal>
          <Reveal delay={1}>
            <h2
              className="font-display mt-5 font-extrabold uppercase leading-[1.02] tracking-[-0.03em] text-foreground"
              style={{ fontSize: "clamp(32px, 5vw, 64px)" }}
            >
              Not short on ideas.{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, hsl(var(--lav-purple)), hsl(var(--lav-magenta)), hsl(var(--lav-pink)))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Short on infrastructure.
              </span>
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={(i % 4) as 0 | 1 | 2 | 3}>
              <article className="browser-mock group relative overflow-hidden rounded-2xl border border-border bg-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-glow-lav">
                {/* Browser chrome */}
                <div className="flex items-center gap-1.5 border-b border-border/70 bg-white/90 px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-[hsl(var(--lav-pink))]/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[hsl(var(--lav-amber))]/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[hsl(var(--lav-purple))]/40" />
                  <span className="font-mono-tech ml-3 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                    {`0${i + 1}`} · why-caas
                  </span>
                </div>

                {/* Tinted hero */}
                <div
                  className={`relative h-32 bg-gradient-to-br ${c.tone}`}
                  aria-hidden
                >
                  <div className="absolute inset-0 bg-white/55 backdrop-blur-xl" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="font-display flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-3xl text-[hsl(var(--lav-purple))] shadow-lg">
                      {c.glyph}
                    </div>
                  </div>
                </div>

                <div className="p-7">
                  <h3 className="font-display text-2xl font-bold text-foreground">{c.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
