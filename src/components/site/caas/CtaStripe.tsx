import { Reveal } from "@/components/site/Reveal";

type Props = {
  headline: React.ReactNode;
  sub?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function CtaStripe({
  headline,
  sub,
  primaryHref = "/#contact",
  primaryLabel = "Book Free Audit →",
  secondaryHref = "/#pricing",
  secondaryLabel = "See pricing →",
}: Props) {
  return (
    <section className="border-t border-foreground/[0.08] px-6 py-24 md:px-16 md:py-36">
      <Reveal>
        <h2
          className="font-display font-bold uppercase leading-[0.95] tracking-[-0.035em]"
          style={{ fontSize: "clamp(36px, 6.5vw, 104px)" }}
        >
          {headline}
        </h2>
        {sub && (
          <p className="mt-6 max-w-xl text-base text-foreground/60">{sub}</p>
        )}
        <div className="mt-10 flex flex-wrap items-center gap-4">
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
      </Reveal>
    </section>
  );
}
