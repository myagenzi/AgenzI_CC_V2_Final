import { Reveal } from "@/components/site/Reveal";

export function FinalCta() {
  return (
    <section id="contact" className="relative overflow-hidden bg-cosmic px-6 py-24 text-center lg:px-12 lg:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-cta-glow"
      />
      <div className="relative">
        <Reveal>
          <h2 className="mx-auto mb-4 max-w-3xl font-display text-[clamp(28px,5vw,66px)] font-extrabold leading-[1.06] tracking-[-0.03em] text-foreground">
            Step one is a
            <br />
            <span className="text-primary">30-minute conversation.</span>
          </h2>
        </Reveal>
        <Reveal delay={1}>
          <p className="mx-auto mb-9 max-w-lg text-base leading-relaxed text-moondust">
            No pitch. No commitment. Just a clear picture of what's possible — and a roadmap that's yours to keep.
          </p>
        </Reveal>
        <Reveal delay={2}>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="mailto:hello@agenzi.io"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-bold text-primary-foreground transition hover:-translate-y-0.5 hover:bg-primary-bright hover:shadow-gold"
            >
              Book Your Free AI Audit →
            </a>
            <a
              href="#three-engines"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/15 px-7 py-3.5 text-sm font-medium text-foreground transition hover:border-foreground/40 hover:bg-foreground/[0.06]"
            >
              See the engines
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
