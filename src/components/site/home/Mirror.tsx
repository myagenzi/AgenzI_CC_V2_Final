import { useRef } from "react";
import { Reveal } from "@/components/site/Reveal";
import { useScrollSetup, gsap } from "@/lib/scroll";

const mirrors = [
  "Chase agencies for last week's content",
  "Manage tools that were supposed to save you time",
  "Coordinate people instead of building your business",
  "Fix broken workflows that should just run",
];

export function Mirror() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useScrollSetup(sectionRef, (el) => {
    const items = el.querySelectorAll<HTMLElement>("[data-mirror-row]");
    items.forEach((row, i) => {
      gsap.fromTo(
        row,
        { x: -20, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          ease: "power2.out",
          scrollTrigger: { trigger: row, start: "top 85%", once: true },
          delay: i * 0.05,
        },
      );
    });
  }, []);

  return (
    <section ref={sectionRef} className="px-6 py-32 lg:px-12 lg:py-48">
      <div className="mx-auto max-w-[1100px]">
        <Reveal>
          <p className="mb-4 text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
            The Mirror
          </p>
        </Reveal>
        <Reveal delay={1}>
          <h2
            className="mx-auto mb-6 max-w-3xl text-center font-display font-extrabold leading-[1.05] tracking-[-0.03em] text-foreground"
            style={{ fontSize: "clamp(36px, 6vw, 68px)" }}
          >
            You didn't start your business
            <br />
            <em className="not-italic text-primary">to do this.</em>
          </h2>
        </Reveal>

        <ul className="mx-auto mt-16 max-w-xl">
          {mirrors.map((m, i) => (
            <li
              key={m}
              data-mirror-row
              className={`flex items-start gap-4 py-5 text-[15px] leading-relaxed text-foreground/65 ${i !== mirrors.length - 1 ? "border-b border-foreground/[0.06]" : ""}`}
            >
              <span className="mt-1 text-primary">▸</span>
              <span>{m}</span>
            </li>
          ))}
        </ul>

        <Reveal delay={3}>
          <p className="mx-auto mt-16 max-w-2xl text-center font-display text-[clamp(20px,2.6vw,30px)] font-bold leading-snug text-foreground">
            You're not lacking effort. You're stuck in a system that doesn't scale.
          </p>
        </Reveal>
        <Reveal delay={4}>
          <div className="mt-10 flex justify-center">
            <a
              href="#contact"
              className="cta-glow inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground"
            >
              Book Your Free AI Audit →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
