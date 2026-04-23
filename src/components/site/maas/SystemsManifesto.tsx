import { useRef } from "react";
import { useScrollSetup, gsap } from "@/lib/scroll";

const systems = [
  {
    n: "01",
    title: "Performance",
    desc: "Every rupee traced to a customer. Paid search, paid social, AI-optimised bidding. Revenue attribution first.",
  },
  {
    n: "02",
    title: "Growth Systems",
    desc: "SEO, email, lead gen, CRO. A pipeline that fills itself. Your happiest customers become your best salespeople.",
  },
  {
    n: "03",
    title: "Perception",
    desc: "Your market forms an opinion before they talk to you. We control that opinion — brand strategy, PR, positioning.",
  },
];

export function SystemsManifesto() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useScrollSetup(sectionRef, (el) => {
    el.querySelectorAll<HTMLElement>("[data-mani-row]").forEach((row) => {
      const num = row.querySelector<HTMLElement>("[data-mani-num]");
      const title = row.querySelectorAll<HTMLElement>("[data-mani-char]");
      const desc = row.querySelector<HTMLElement>("[data-mani-desc]");
      const tl = gsap.timeline({
        scrollTrigger: { trigger: row, start: "top 78%", once: true },
        defaults: { ease: "power3.out" },
      });
      if (num) tl.fromTo(num, { scale: 0.6, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.9 }, 0);
      if (title.length)
        tl.fromTo(
          title,
          { yPercent: 110, opacity: 0 },
          { yPercent: 0, opacity: 1, duration: 0.7, stagger: 0.02 },
          0.15,
        );
      if (desc) tl.fromTo(desc, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, 0.45);
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="border-t border-foreground/[0.08] px-6 py-20 md:px-16 md:py-28"
    >
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

      <div className="mt-16">
        {systems.map((s) => (
          <div
            key={s.n}
            data-mani-row
            className="manifesto-row grid grid-cols-12 items-start gap-6"
          >
            <div className="col-span-12 md:col-span-2">
              <div data-mani-num className="num-display">.{s.n}</div>
            </div>
            <div className="col-span-12 md:col-span-9 md:col-start-4">
              <h3
                className="font-display font-bold uppercase leading-[1] tracking-[-0.025em]"
                style={{ fontSize: "clamp(28px, 3.6vw, 56px)" }}
              >
                {Array.from(s.title).map((ch, i) => (
                  <span key={i} className="inline-block overflow-hidden align-bottom whitespace-pre">
                    <span data-mani-char className="inline-block">{ch}</span>
                  </span>
                ))}
              </h3>
              <p
                data-mani-desc
                className="mt-4 max-w-2xl text-base leading-relaxed text-foreground/70 md:text-lg"
              >
                {s.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
