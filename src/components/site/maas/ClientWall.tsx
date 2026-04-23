import { useRef } from "react";
import { Reveal } from "@/components/site/Reveal";
import { useScrollSetup, gsap } from "@/lib/scroll";

const COLS = 5;
const ROWS = 3;

export function ClientWall() {
  const cells = Array.from({ length: COLS * ROWS });
  const wallRef = useRef<HTMLDivElement | null>(null);

  useScrollSetup(wallRef as React.RefObject<HTMLElement>, (el) => {
    const cellEls = el.querySelectorAll<HTMLElement>("[data-logo-cell]");
    cellEls.forEach((cell, i) => {
      gsap.fromTo(
        cell,
        { filter: "brightness(0.4)", opacity: 0.5 },
        {
          filter: "brightness(1.0)",
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "bottom 50%",
            scrub: true,
          },
          delay: (i % COLS) * 0.05,
        },
      );
    });
  }, []);

  return (
    <section className="border-t border-foreground/[0.08] px-6 py-20 md:px-16 md:py-28">
      <Reveal>
        <p className="font-mono-tech mb-4 text-[11px] uppercase tracking-[0.3em] text-foreground/50">
          Selected Clients · Logo Wall
        </p>
        <h2
          className="font-display mb-12 max-w-3xl font-bold uppercase leading-[0.95] tracking-[-0.03em]"
          style={{ fontSize: "clamp(28px, 4vw, 56px)" }}
        >
          Trusted by teams that count
          <br />
          <span className="text-electric">revenue, not impressions.</span>
        </h2>
      </Reveal>

      <div
        ref={wallRef}
        className="grid border-l border-t border-foreground/[0.08]"
        style={{ gridTemplateColumns: `repeat(${COLS}, minmax(0, 1fr))` }}
      >
        {cells.map((_, i) => (
          <div
            key={i}
            data-logo-cell
            className="logo-cell aspect-[2/1] border-b border-r border-foreground/[0.08]"
          >
            <div className="flex h-full w-full items-center justify-center">
              <span className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-foreground/35">
                ◇ Logo {String(i + 1).padStart(2, "0")}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
