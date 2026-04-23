import { Reveal } from "@/components/site/Reveal";

const cards = [
  {
    glyph: "◎",
    title: "Revenue Attribution",
    desc: "Full-funnel tracking from first click to closed deal. No more guessing which channel actually paid for itself.",
  },
  {
    glyph: "⟳",
    title: "Paid Media Mastery",
    desc: "Google, Meta, LinkedIn — managed by humans, optimised by AI. Daily bids. Weekly creative. Monthly reviews.",
  },
  {
    glyph: "◐",
    title: "Lifecycle Marketing",
    desc: "Email, retargeting, nurture, recovery. The 97% who didn't convert get pulled back with sequences that actually work.",
  },
  {
    glyph: "✦",
    title: "Brand Authority",
    desc: "Positioning, PR, founder presence, reputation. Your market forms an opinion — we make sure it's the right one.",
  },
];

export function MaasSpecialtyGrid() {
  return (
    <section className="px-6 py-20 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-mono-tech mb-4 text-[11px] uppercase tracking-[0.3em] text-primary">
              We specialise in building
            </p>
            <h2
              className="font-display font-extrabold leading-[1.05] tracking-[-0.03em] text-foreground"
              style={{ fontSize: "clamp(30px, 4.2vw, 56px)" }}
            >
              Revenue systems for businesses{" "}
              <span className="text-primary italic">that need pipeline, not posters.</span>
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={(i % 4) as 0 | 1 | 2 | 3}>
              <article className="glass-lavender group flex h-full flex-col rounded-[20px] p-7 transition hover:-translate-y-1 hover:shadow-[0_18px_40px_-24px_hsl(var(--lav-purple)/0.45)]">
                <span
                  className="font-display text-[40px] font-extrabold leading-none text-primary"
                  aria-hidden
                >
                  {c.glyph}
                </span>
                <h3
                  className="font-display mt-6 font-bold uppercase leading-tight tracking-[-0.02em] text-foreground"
                  style={{ fontSize: "clamp(18px, 1.8vw, 22px)" }}
                >
                  {c.title}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground">
                  {c.desc}
                </p>
                <div className="mt-6 h-px w-10 bg-gradient-to-r from-[hsl(var(--lav-purple))] to-transparent transition-all duration-500 group-hover:w-full" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
