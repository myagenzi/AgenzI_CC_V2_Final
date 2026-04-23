import { useRef } from "react";
import { Reveal } from "@/components/site/Reveal";
import { useScrollSetup, gsap } from "@/lib/scroll";

type Props = {
  headline: React.ReactNode;
  sub?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  /** When true, headline letters scrub-reveal on scroll (Zenzai-style). */
  scrub?: boolean;
  /** Plain string for character split when scrub=true. */
  headlineText?: string;
};

export function CtaStripe({
  headline,
  sub,
  primaryHref = "/#contact",
  primaryLabel = "Book Free Audit →",
  secondaryHref = "/#pricing",
  secondaryLabel = "See pricing →",
  scrub = false,
  headlineText,
}: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useScrollSetup(ref, (el) => {
    if (!scrub) return;
    const chars = el.querySelectorAll<HTMLElement>("[data-cta-char]");
    const sub = el.querySelector<HTMLElement>("[data-cta-sub]");
    const ctas = el.querySelector<HTMLElement>("[data-cta-actions]");

    if (chars.length) {
      gsap.fromTo(
        chars,
        { yPercent: (i) => 40 + ((i * 13) % 30), opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          ease: "power3.out",
          stagger: 0.012,
          scrollTrigger: { trigger: el, start: "top 75%", end: "bottom 50%", scrub: 0.6 },
        },
      );
    }
    if (sub) {
      gsap.fromTo(
        sub,
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: { trigger: el, start: "top 55%" },
        },
      );
    }
    if (ctas) {
      gsap.fromTo(
        ctas,
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: { trigger: el, start: "top 50%" },
        },
      );
    }
  }, [scrub]);

  const renderScrubHeadline = () => {
    if (!headlineText) return headline;
    return headlineText.split("").map((c, i) => (
      <span key={i} data-cta-char className="inline-block whitespace-pre">
        {c === " " ? "\u00A0" : c}
      </span>
    ));
  };

  return (
    <section ref={ref} className="border-t border-foreground/[0.08] px-6 py-24 md:px-16 md:py-36">
      {scrub ? (
        <h2
          className="font-display font-bold uppercase leading-[0.95] tracking-[-0.035em]"
          style={{ fontSize: "clamp(36px, 6.5vw, 104px)" }}
        >
          {renderScrubHeadline()}
        </h2>
      ) : (
        <Reveal>
          <h2
            className="font-display font-bold uppercase leading-[0.95] tracking-[-0.035em]"
            style={{ fontSize: "clamp(36px, 6.5vw, 104px)" }}
          >
            {headline}
          </h2>
        </Reveal>
      )}

      {sub && (
        <p data-cta-sub className="mt-6 max-w-xl text-base text-foreground/60">
          {sub}
        </p>
      )}
      <div data-cta-actions className="mt-10 flex flex-wrap items-center gap-4">
        <a
          href={primaryHref}
          className="cta-glow inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
        >
          {primaryLabel}
        </a>
        <a
          href={secondaryHref}
          className="story-link font-mono-tech text-xs uppercase tracking-[0.25em] text-foreground/70 hover:text-foreground"
        >
          {secondaryLabel}
        </a>
      </div>
    </section>
  );
}
