import { useRef } from "react";
import { Reveal } from "@/components/site/Reveal";
import { ServiceAccordion, type ServiceItem } from "@/components/site/caas/ServiceAccordion";
import { useScrollSetup, gsap } from "@/lib/scroll";

type Props = {
  eyebrow: string;
  headline: React.ReactNode;
  items: ServiceItem[];
  thumbId?: string;
  first?: boolean;
  mediaLabel?: string;
  metaLine?: string;
  systemNumber?: string;
};

export function SystemBlock({
  eyebrow,
  headline,
  items,
  metaLine,
  systemNumber,
}: Props) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const barRef = useRef<HTMLSpanElement | null>(null);

  useScrollSetup(sectionRef, (el) => {
    if (!barRef.current) return;
    gsap.fromTo(
      barRef.current,
      { scaleY: 0 },
      {
        scaleY: 1,
        transformOrigin: "top center",
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top 65%",
          end: "bottom 35%",
          scrub: true,
        },
      },
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative border-t border-foreground/[0.08] px-6 py-24 md:px-16 md:py-32"
    >
      <div className="grid grid-cols-12 gap-6">
        {/* Sticky chapter rail */}
        <aside className="col-span-12 md:col-span-4">
          <div className="md:sticky md:top-28">
            <div className="flex items-start gap-5">
              <span
                ref={barRef}
                aria-hidden
                className="hidden h-44 w-px origin-top bg-gradient-to-b from-electric to-electric/0 md:inline-block"
              />
              <div className="flex-1">
                <p className="font-mono-tech mb-6 text-[11px] uppercase tracking-[0.3em] text-foreground/55">
                  {eyebrow}
                </p>
                {systemNumber && (
                  <div
                    className="num-outline-gold"
                    style={{ fontSize: "clamp(96px, 11vw, 200px)" }}
                  >
                    {systemNumber}
                  </div>
                )}
              </div>
            </div>
          </div>
        </aside>

        {/* Content column */}
        <div className="col-span-12 md:col-span-8">
          <Reveal>
            {metaLine && (
              <p className="font-mono-tech mb-5 text-[11px] uppercase tracking-[0.25em] text-gold"
                 style={{ color: "hsl(var(--gold))" }}>
                {metaLine}
              </p>
            )}
            <h2
              className="font-display mb-12 font-bold uppercase leading-[0.95] tracking-[-0.03em] text-foreground"
              style={{ fontSize: "clamp(32px, 5.2vw, 76px)" }}
            >
              {headline}
            </h2>
          </Reveal>

          <ServiceAccordion items={items} />
        </div>
      </div>
    </section>
  );
}
