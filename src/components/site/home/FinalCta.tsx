import { Reveal } from "@/components/site/Reveal";

export function FinalCta() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden px-6 py-24 text-center lg:px-12 lg:py-36"
    >
      {/* Orb halo behind CTA */}
      <div
        aria-hidden
        className="orb-gold pointer-events-none absolute left-1/2 top-1/2 h-[640px] w-[640px] -translate-x-1/2 -translate-y-1/2 opacity-60"
      />

      <Reveal>
        <p data-magnify className="mb-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
          The Low-Friction Close
        </p>
      </Reveal>

      <Reveal delay={1}>
        <h2
          className="mx-auto mb-7 max-w-4xl font-display font-extrabold leading-[1.02] tracking-[-0.04em] text-foreground"
          style={{ fontSize: "clamp(36px, 6.4vw, 80px)" }}
        >
          Ready to see your{" "}
          <span className="italic text-primary">business run itself?</span>
        </h2>
      </Reveal>

      <Reveal delay={2}>
        <p className="mx-auto mb-10 max-w-xl text-[clamp(15px,1.5vw,18px)] leading-relaxed text-muted-foreground">
          The global market is moving toward Compute-heavy businesses. Don't get left behind with a manual model.
        </p>
      </Reveal>

      <Reveal delay={3}>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            data-magnify
            href="/book-audit"
            className="cta-purple inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold"
          >
            Book Your 15-Minute System Audit →
          </a>
        </div>
      </Reveal>

      <Reveal delay={4}>
        <p
          data-magnify
          className="mx-auto mt-6 max-w-md text-[12px] leading-relaxed text-muted-foreground"
        >
          No pitch. Just a map of what you can automate in the next 30 days.
        </p>
      </Reveal>
    </section>
  );
}
