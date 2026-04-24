import { Reveal } from "@/components/site/Reveal";

export function AboutCta() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
        <div
          className="tile-cosmic relative overflow-hidden rounded-[32px] p-10 lg:p-16"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-60"
            style={{
              background:
                "radial-gradient(50% 60% at 80% 20%, hsl(var(--lav-purple)/.35), transparent 60%), radial-gradient(40% 50% at 10% 90%, hsl(var(--lav-pink)/.22), transparent 60%)",
            }}
          />
          <div className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.3fr_1fr]">
            <div>
              <Reveal>
                <h2
                  className="font-display font-bold leading-[0.95] tracking-[-0.02em] text-[hsl(var(--starlight))]"
                  style={{ fontSize: "clamp(34px, 4.5vw, 56px)" }}
                >
                  Ready to build<br />the system your<br />
                  <span style={{ color: "hsl(var(--gold))", fontStyle: "italic" }}>
                    business deserves?
                  </span>
                </h2>
              </Reveal>
              <Reveal delay={1}>
                <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-[hsl(var(--starlight)/.7)]">
                  Start with a free 30-minute audit. No commitment. Just clarity.
                </p>
              </Reveal>
            </div>
            <div className="flex flex-col items-start gap-3 lg:items-end">
              <Reveal delay={1}>
                <a
                  href="mailto:hello@agenzi.ai"
                  data-magnify
                  className="cta-purple rounded-full px-7 py-3.5 text-[13px] font-semibold"
                >
                  Book Your Free AI Audit →
                </a>
              </Reveal>
              <Reveal delay={2}>
                <a
                  href="/#pricing"
                  data-magnify
                  className="rounded-full border border-[hsl(var(--starlight)/.2)] px-7 py-3.5 text-[13px] font-semibold text-[hsl(var(--starlight)/.85)] transition hover:border-[hsl(var(--starlight)/.4)] hover:text-[hsl(var(--starlight))]"
                >
                  See pricing
                </a>
              </Reveal>
              <Reveal delay={3}>
                <span className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[hsl(var(--starlight)/.5)]">
                  ◴ limited spots this quarter
                </span>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
