import { useRef } from "react";
import { useScrollSetup, gsap } from "@/lib/scroll";

const systems = [
  {
    n: "01",
    glyph: "◎",
    title: "Performance",
    desc: "Every rupee traced to a customer. Paid search, paid social, AI-optimised bidding. Revenue attribution before a single ad runs.",
  },
  {
    n: "02",
    glyph: "⟳",
    title: "Growth Systems",
    desc: "SEO, email, lead gen, CRO, referral. A pipeline that fills itself. Your happiest customers become your best salespeople.",
  },
  {
    n: "03",
    glyph: "◐",
    title: "Perception",
    desc: "Your market forms an opinion before they ever talk to you. We control that opinion — brand strategy, PR, positioning, reputation.",
  },
];

export function SystemsTriad() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useScrollSetup(sectionRef, (el) => {
    const cards = el.querySelectorAll<HTMLElement>("[data-triad-card]");
    gsap.fromTo(
      cards,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 75%", once: true },
      },
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative border-t border-foreground/[0.08] px-6 py-24 md:px-16 md:py-32"
    >
      <div className="mb-16 max-w-4xl">
        <p className="font-mono-tech mb-5 text-[11px] uppercase tracking-[0.3em] text-gold"
           style={{ color: "hsl(var(--gold))" }}>
          Three Systems · One Outcome
        </p>
        <h2
          className="font-display font-bold uppercase leading-[0.95] tracking-[-0.03em] text-foreground"
          style={{ fontSize: "clamp(36px, 5.8vw, 88px)" }}
        >
          Performance. Pipeline. Perception.
          <br />
          <span className="text-electric italic">All pointing at revenue.</span>
        </h2>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {systems.map((s) => (
          <article
            key={s.n}
            data-triad-card
            className="tile-cosmic group relative flex flex-col p-7 md:p-8"
          >
            <div className="mb-6 flex items-baseline justify-between">
              <span
                className="font-display text-[44px] font-extrabold leading-none tracking-[-0.04em] text-electric"
              >
                {s.glyph}
              </span>
              <span className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-foreground/50">
                {s.n}
              </span>
            </div>
            <h3
              className="font-display mb-3 font-bold uppercase tracking-[-0.02em] text-foreground"
              style={{ fontSize: "clamp(22px, 2.4vw, 30px)" }}
            >
              {s.title}
            </h3>
            <p className="text-[14px] leading-relaxed text-foreground/70 md:text-[15px]">
              {s.desc}
            </p>
            <div className="mt-6 h-px w-12 bg-gradient-to-r from-electric/70 to-transparent transition-all duration-500 group-hover:w-full" />
          </article>
        ))}
      </div>
    </section>
  );
}
