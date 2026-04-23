import { useRef } from "react";
import { Reveal } from "@/components/site/Reveal";
import { useScrollSetup, gsap } from "@/lib/scroll";

const HEAD = "A 30-minute conversation.";

export function FinalCta() {
  const ref = useRef<HTMLHeadingElement | null>(null);

  useScrollSetup(ref as React.RefObject<HTMLElement>, (el) => {
    const chars = el.querySelectorAll<HTMLElement>("[data-char]");
    gsap.fromTo(
      chars,
      { yPercent: 100, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,
        ease: "power3.out",
        duration: 0.8,
        stagger: { each: 0.018, from: "start" },
        scrollTrigger: { trigger: el, start: "top 80%", once: true },
      },
    );
  }, []);

  const accent = "conversation.";
  const accentIdx = HEAD.indexOf(accent);
  const before = HEAD.slice(0, accentIdx);
  const split = (s: string) =>
    Array.from(s).map((ch, i) => (
      <span key={i} className="inline-block overflow-hidden whitespace-pre align-bottom">
        <span data-char className="inline-block">{ch}</span>
      </span>
    ));

  return (
    <section
      id="contact"
      className="relative overflow-hidden px-6 py-32 text-center lg:px-12 lg:py-48"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--gold) / 0.18) 0%, hsl(var(--royal) / 0.12) 35%, transparent 70%)",
          animationDuration: "5s",
        }}
      />
      <Reveal>
        <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
          Step one
        </p>
      </Reveal>
      <h2
        ref={ref}
        className="mx-auto mb-8 max-w-4xl font-display font-extrabold leading-[1.02] tracking-[-0.04em] text-gradient-light"
        style={{ fontSize: "clamp(40px, 7vw, 88px)" }}
      >
        {split(before)}
        <br />
        <em className="not-italic text-primary">{split(accent)}</em>
      </h2>
      <Reveal delay={2}>
        <p className="mx-auto mb-12 max-w-xl text-[clamp(15px,1.6vw,18px)] leading-relaxed text-moondust">
          No pitch. No commitment. Just a clear picture of what's possible — and a roadmap that's yours to keep.
        </p>
      </Reveal>
      <Reveal delay={3}>
        <a
          href="mailto:hello@agenzi.io"
          className="cta-glow inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground"
        >
          Book Your Free AI Audit →
        </a>
      </Reveal>
    </section>
  );
}
