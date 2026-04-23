import { useRef } from "react";
import { Reveal } from "@/components/site/Reveal";
import { ServiceAccordion, type ServiceItem } from "@/components/site/caas/ServiceAccordion";
import { MediaPlaceholder } from "@/components/site/MediaPlaceholder";
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
  mediaLabel,
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
      className="border-t border-foreground/[0.08] px-6 py-20 md:px-16 md:py-24"
    >
      {mediaLabel && (
        <Reveal>
          <div className="mb-12">
            <MediaPlaceholder
              aspect="16/9"
              kind="video"
              label={mediaLabel}
              className="md:w-[78%]"
            />
          </div>
        </Reveal>
      )}

      <div className="grid grid-cols-12 gap-6">
        {/* Sticky chapter label */}
        <aside className="col-span-12 md:col-span-3">
          <div className="md:sticky md:top-28">
            <div className="flex items-start gap-4">
              <span
                ref={barRef}
                aria-hidden
                className="hidden h-40 w-px origin-top bg-electric/60 md:inline-block"
              />
              <div className="flex-1">
                <p className="font-mono-tech mb-4 text-[11px] uppercase tracking-[0.3em] text-foreground/55">
                  {eyebrow}
                </p>
                {systemNumber && (
                  <div
                    className="font-display leading-[0.85] tracking-[-0.04em] text-electric/80"
                    style={{ fontSize: "clamp(56px, 8vw, 120px)" }}
                  >
                    {systemNumber}
                  </div>
                )}
              </div>
            </div>
          </div>
        </aside>

        {/* Scrolling content */}
        <div className="col-span-12 md:col-span-9">
          <Reveal>
            <h2
              className="font-display mb-6 font-bold uppercase leading-[0.95] tracking-[-0.03em]"
              style={{ fontSize: "clamp(34px, 5.5vw, 84px)" }}
            >
              {headline}
            </h2>
            {metaLine && (
              <p className="font-mono-tech mb-12 text-[11px] uppercase tracking-[0.25em] text-foreground/55">
                {metaLine}
              </p>
            )}
          </Reveal>

          <ServiceAccordion items={items} />
        </div>
      </div>
    </section>
  );
}
