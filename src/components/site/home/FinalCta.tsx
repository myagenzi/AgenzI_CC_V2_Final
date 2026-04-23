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
        <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
          Step one
        </p>
      </Reveal>
      <Reveal delay={1}>
        <h2
          className="mx-auto mb-7 max-w-4xl font-display font-extrabold leading-[1.02] tracking-[-0.04em] text-foreground"
          style={{ fontSize: "clamp(36px, 6.4vw, 80px)" }}
        >
          A 30-minute <span className="text-primary">conversation.</span>
        </h2>
      </Reveal>
      <Reveal delay={2}>
        <p className="mx-auto mb-10 max-w-xl text-[clamp(15px,1.5vw,18px)] leading-relaxed text-muted-foreground">
          No pitch. No commitment. Just a clear picture of what's possible — and a roadmap that's yours to keep.
        </p>
      </Reveal>
      <Reveal delay={3}>
        <a
          href="mailto:hello@agenzi.io"
          className="cta-purple inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold"
        >
          Book Your Free AI Audit →
        </a>
      </Reveal>
    </section>
  );
}
