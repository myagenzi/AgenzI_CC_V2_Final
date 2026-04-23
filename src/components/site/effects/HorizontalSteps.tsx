import { useRef, type ReactNode } from "react";
import { useScrollSetup, gsap, ScrollTrigger } from "@/lib/scroll";

type Props = { children: ReactNode[]; className?: string };

/**
 * Pinned vertical-scroll → horizontal-translate panel set.
 * Children render side-by-side; vertical scroll drives horizontal translate.
 */
export function HorizontalSteps({ children, className = "" }: Props) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useScrollSetup(sectionRef, (el) => {
    const track = trackRef.current;
    if (!track) return;
    const distance = () => track.scrollWidth - el.clientWidth;

    gsap.to(track, {
      x: () => -distance(),
      ease: "none",
      scrollTrigger: {
        trigger: el,
        start: "top top",
        end: () => `+=${distance()}`,
        scrub: 1,
        pin: true,
        invalidateOnRefresh: true,
        anticipatePin: 1,
      },
    });

    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`relative overflow-hidden ${className}`}
    >
      <div ref={trackRef} className="flex w-max">
        {children.map((c, i) => (
          <div
            key={i}
            className="w-screen shrink-0 px-6 py-20 lg:px-16 lg:py-28"
            style={{ width: "100vw" }}
          >
            <div className="mx-auto h-full max-w-[1100px]">{c}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
