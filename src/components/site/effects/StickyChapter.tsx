import { useRef, type ReactNode } from "react";
import { useScrollSetup, gsap } from "@/lib/scroll";

type Props = {
  label: ReactNode;       // sticky left column content (number, eyebrow, title)
  children: ReactNode;    // scrolling right column content
  className?: string;
  /** id for in-page anchors */
  id?: string;
};

/**
 * Pinned chapter wrapper. Left column stays sticky with a vertical progress bar
 * that fills as the chapter scrolls past. Right column scrolls normally.
 */
export function StickyChapter({ label, children, className = "", id }: Props) {
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
          start: "top 70%",
          end: "bottom 30%",
          scrub: true,
        },
      },
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`relative grid grid-cols-12 gap-6 px-6 py-20 md:px-16 md:py-28 ${className}`}
    >
      <aside className="col-span-12 md:col-span-3">
        <div className="md:sticky md:top-32">
          <div className="flex items-start gap-4">
            <span
              ref={barRef}
              aria-hidden
              className="hidden h-32 w-px origin-top bg-foreground/30 md:inline-block"
            />
            <div className="flex-1">{label}</div>
          </div>
        </div>
      </aside>
      <div className="col-span-12 md:col-span-9">{children}</div>
    </section>
  );
}
