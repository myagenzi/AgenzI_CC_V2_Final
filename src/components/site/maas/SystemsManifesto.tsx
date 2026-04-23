import { Reveal } from "@/components/site/Reveal";

const systems = [
  {
    n: "01",
    glyph: "◎",
    title: "Performance",
    desc: "Every rupee traced to a customer. Paid search, paid social, AI-optimised bidding. Revenue attribution first.",
  },
  {
    n: "02",
    glyph: "⟳",
    title: "Growth Systems",
    desc: "SEO, email, lead gen, CRO. A pipeline that fills itself. Your happiest customers become your best salespeople.",
  },
  {
    n: "03",
    glyph: "◐",
    title: "Perception",
    desc: "Your market forms an opinion before they talk to you. We control that opinion — brand strategy, PR, positioning.",
  },
];

export function SystemsManifesto() {
  return (
    <section className="border-t border-foreground/[0.08] px-6 py-20 md:px-16 md:py-28">
      <Reveal>
        <p className="font-mono-tech mb-4 text-[11px] uppercase tracking-[0.3em] text-foreground/50">
          Three Systems · One Outcome
        </p>
        <h2
          className="font-display font-bold uppercase leading-[0.95] tracking-[-0.03em]"
          style={{ fontSize: "clamp(40px, 7vw, 110px)" }}
        >
          Performance. Pipeline. Perception.
          <br />
          <span className="text-electric">All pointing at revenue.</span>
        </h2>
      </Reveal>

      <div className="mt-16 border-t border-foreground/[0.08]">
        {systems.map((s, i) => (
          <Reveal key={s.n} delay={(i + 1) as 1 | 2 | 3}>
            <div className="manifesto-row grid grid-cols-12 items-start gap-6">
              <div className="col-span-12 md:col-span-3">
                <div className="num-display">.{s.n}</div>
              </div>
              <div className="col-span-12 md:col-span-2">
                <div
                  className="font-display text-5xl text-foreground/60"
                  aria-hidden
                >
                  {s.glyph}
                </div>
              </div>
              <div className="col-span-12 md:col-span-7">
                <h3
                  className="font-display font-bold uppercase leading-[1] tracking-[-0.025em]"
                  style={{ fontSize: "clamp(28px, 3.6vw, 56px)" }}
                >
                  {s.title}
                </h3>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-foreground/70 md:text-lg">
                  {s.desc}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
