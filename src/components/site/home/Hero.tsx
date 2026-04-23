import { useRef } from "react";
import { useScrollSetup, gsap, ScrollTrigger } from "@/lib/scroll";
import { SoftOrb } from "@/components/site/effects/SoftOrb";

const HEAD_LINES = [
  { text: "Your competitors aren't" },
  { text: "working harder.", accent: false },
  { text: "They have", accent: true },
  { text: "better systems.", accent: true },
];

export function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const subRef = useRef<HTMLParagraphElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);

  useScrollSetup(sectionRef, (el) => {
    const lines = el.querySelectorAll<HTMLElement>("[data-hero-word]");
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.fromTo(
      lines,
      { yPercent: 105, opacity: 0 },
      { yPercent: 0, opacity: 1, duration: 1.0, stagger: 0.10 },
      0,
    );
    if (subRef.current) tl.fromTo(subRef.current, { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, 0.45);
    if (ctaRef.current) tl.fromTo(ctaRef.current, { y: 14, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, 0.6);

    // Pin hero ~70vh while orb breathes
    ScrollTrigger.create({
      trigger: el,
      start: "top top",
      end: "+=60%",
      pin: true,
      pinSpacing: true,
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative isolate flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pb-32 pt-40 text-center lg:px-12 lg:pt-48"
    >
      {/* Soft orb background — full bleed */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <SoftOrb className="absolute inset-0" />
      </div>

      {/* Eyebrow pill */}
      <div className="glass mb-10 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[12px] text-foreground/75">
        <span className="text-primary">✦</span>
        Human + AI · One System
      </div>

      <h1
        className="mx-auto max-w-5xl font-display font-extrabold leading-[0.98] tracking-[-0.04em] text-gradient-light"
        style={{ fontSize: "clamp(48px, 9vw, 120px)" }}
      >
        {HEAD_LINES.map((l, i) => (
          <span key={i} className="block overflow-hidden">
            <span
              data-hero-word
              className={`inline-block ${l.accent ? "text-primary not-italic" : ""}`}
            >
              {l.accent ? <em className="not-italic">{l.text}</em> : l.text}
            </span>
          </span>
        ))}
      </h1>

      <p
        ref={subRef}
        className="mx-auto mt-8 max-w-xl text-[clamp(15px,1.6vw,18px)] leading-relaxed text-moondust"
      >
        AgenzI replaces agencies, tools, and manual work with one intelligent system built for your business.
      </p>

      <div ref={ctaRef} className="mt-10 flex flex-wrap items-center justify-center gap-3">
        <a
          href="#contact"
          className="cta-glow inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground"
        >
          Book Your Free AI Audit →
        </a>
        <a
          href="#how-it-works"
          className="glass inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-foreground/80 transition hover:text-foreground"
        >
          See how it works <span aria-hidden>↓</span>
        </a>
      </div>
    </section>
  );
}
