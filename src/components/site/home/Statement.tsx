import { useRef } from "react";
import { Reveal } from "@/components/site/Reveal";
import { useScrollSetup, gsap } from "@/lib/scroll";

const TEXT = "Most agencies give you output. We give you a system that keeps producing it.";

export function Statement() {
  const ref = useRef<HTMLParagraphElement | null>(null);

  useScrollSetup(ref as React.RefObject<HTMLElement>, (el) => {
    const chars = el.querySelectorAll<HTMLElement>("[data-char]");
    gsap.fromTo(
      chars,
      { y: () => (Math.random() - 0.5) * 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: "power3.out",
        duration: 0.6,
        stagger: { each: 0.012, from: "random" },
        scrollTrigger: { trigger: el, start: "top 80%", once: true },
      },
    );
  }, []);

  // Split words → chars while preserving "system that keeps producing it." accent
  const accent = "system that keeps producing it.";
  const accentIdx = TEXT.indexOf(accent);
  const before = TEXT.slice(0, accentIdx);
  const accentText = TEXT.slice(accentIdx);

  const split = (s: string) =>
    Array.from(s).map((ch, i) => (
      <span key={i} data-char className="inline-block whitespace-pre">
        {ch}
      </span>
    ));

  return (
    <section className="px-6 py-32 text-center lg:px-12 lg:py-48">
      <Reveal>
        <p
          ref={ref}
          className="mx-auto max-w-4xl font-display font-extrabold leading-[1.15] tracking-[-0.02em] text-foreground/35"
          style={{ fontSize: "clamp(28px, 5vw, 64px)" }}
        >
          <span className="text-foreground/85">{split(before)}</span>
          <em className="not-italic text-primary">{split(accentText)}</em>
        </p>
      </Reveal>
    </section>
  );
}
