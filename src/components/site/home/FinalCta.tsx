import { Reveal } from "@/components/site/Reveal";

export function FinalCta() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden px-6 py-24 text-center lg:px-12 lg:py-36"
    >
      {/* Golden orb halo behind CTA */}
      <div
        aria-hidden
        className="orb-gold pointer-events-none absolute left-1/2 top-1/2 h-[640px] w-[640px] -translate-x-1/2 -translate-y-1/2 opacity-60"
      />
      <Reveal>
        <p data-magnify className="mb-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
          Your Move
        </p>
      </Reveal>
      <Reveal delay={1}>
        <h2
          className="mx-auto mb-7 max-w-4xl font-display font-extrabold leading-[1.02] tracking-[-0.04em] text-foreground"
          style={{ fontSize: "clamp(36px, 6.4vw, 80px)" }}
        >
          See what your system{" "}
          <span className="italic text-primary">could look like.</span>
        </h2>
      </Reveal>
      <Reveal delay={2}>
        <p className="mx-auto mb-10 max-w-xl text-[clamp(15px,1.5vw,18px)] leading-relaxed text-muted-foreground">
          30 minutes. No pitch. Just a clear picture of what's possible — and a roadmap that's yours to keep regardless of what you decide.
        </p>
      </Reveal>
      <Reveal delay={3}>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            data-magnify
            href="mailto:hello@agenzi.io"
            className="cta-purple inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold"
          >
            Book Your Free AI Audit →
          </a>
          <a
            data-magnify
            href="#pricing"
            className="glass-lavender inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium text-foreground/80 transition hover:text-foreground"
          >
            See pricing
          </a>
        </div>
      </Reveal>
      <Reveal delay={4}>
        <p data-magnify className="mx-auto mt-6 max-w-md text-[12px] leading-relaxed text-muted-foreground">
          We only onboard a small number of businesses each month. No commitment required.
        </p>
      </Reveal>
    </section>
  );
}
