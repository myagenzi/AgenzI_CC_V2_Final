import { Reveal } from "@/components/site/Reveal";

export function FinalCta() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden px-6 py-32 text-center lg:px-12 lg:py-48"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--gold) / 0.14) 0%, hsl(var(--royal) / 0.10) 35%, transparent 70%)",
        }}
      />
      <Reveal>
        <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
          Step one
        </p>
      </Reveal>
      <Reveal delay={1}>
        <h2 className="mx-auto mb-8 max-w-4xl font-display font-extrabold leading-[1.02] tracking-[-0.04em] text-foreground"
            style={{ fontSize: "clamp(40px, 7vw, 88px)" }}>
          A 30-minute
          <br />
          <em className="not-italic text-primary">conversation.</em>
        </h2>
      </Reveal>
      <Reveal delay={2}>
        <p className="mx-auto mb-12 max-w-xl text-[clamp(15px,1.6vw,18px)] leading-relaxed text-moondust">
          No pitch. No commitment. Just a clear picture of what's possible — and a roadmap that's yours to keep.
        </p>
      </Reveal>
      <Reveal delay={3}>
        <a
          href="mailto:hello@agenzi.io"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition hover:-translate-y-px hover:bg-primary-bright"
        >
          Book Your Free AI Audit →
        </a>
      </Reveal>
    </section>
  );
}
