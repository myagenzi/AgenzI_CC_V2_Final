import { Reveal } from "@/components/site/Reveal";

export function PricingGuarantee() {
  return (
    <section className="py-12 lg:py-16">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
        <Reveal>
          <div className="glass-lavender grid grid-cols-1 items-center gap-10 rounded-[28px] p-8 lg:grid-cols-[1.3fr_1fr] lg:p-12">
            <div>
              <span className="font-mono-tech text-[11px] uppercase tracking-[0.3em] text-foreground/55">
                The Guarantee
              </span>
              <h3
                className="mt-3 font-display font-bold leading-[1.05] tracking-[-0.02em] text-foreground"
                style={{ fontSize: "clamp(26px, 3.2vw, 40px)" }}
              >
                90-day performance guarantee.
                <br />
                <span style={{ color: "hsl(var(--gold))", fontStyle: "italic" }}>
                  In writing. No asterisks.
                </span>
              </h3>
              <p className="mt-5 max-w-xl text-[15px] leading-[1.75] text-foreground/70">
                20–40% cost reduction or 2–5× output increase in 90 days. Or we work free until we do. This is not marketing. This is how we operate.
              </p>
            </div>
            <div className="relative flex items-center justify-center">
              <div
                aria-hidden
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "radial-gradient(60% 60% at 50% 50%, hsl(var(--lav-purple)/.22), transparent 70%)",
                }}
              />
              <div className="relative flex flex-col items-center text-center">
                <span
                  className="font-display font-black leading-none tracking-[-0.04em]"
                  style={{
                    fontSize: "clamp(96px, 14vw, 180px)",
                    color: "hsl(var(--gold))",
                  }}
                >
                  90D
                </span>
                <span className="mt-2 font-mono-tech text-[11px] uppercase tracking-[0.35em] text-foreground/60">
                  Guaranteed
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
