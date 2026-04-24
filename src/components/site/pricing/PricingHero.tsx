import { Reveal } from "@/components/site/Reveal";

const previews = [
  { tier: "STARTER", title: "One Engine", price: "From ₹3k", rotate: "-6deg", tint: "hsl(var(--gold)/.18)" },
  { tier: "GROWTH", title: "Two Engines", price: "From ₹12k", rotate: "0deg", tint: "hsl(var(--lav-purple)/.28)", featured: true },
  { tier: "FULL SYSTEM", title: "Three Engines", price: "Custom", rotate: "6deg", tint: "hsl(var(--lav-pink)/.22)" },
];

export function PricingHero() {
  return (
    <section className="relative overflow-hidden pt-36 lg:pt-44">
      {/* Soft gradient haze */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 30% 25%, hsl(var(--lav-purple)/.28), transparent 70%), radial-gradient(50% 50% at 75% 35%, hsl(var(--lav-pink)/.22), transparent 70%), radial-gradient(45% 55% at 50% 90%, hsl(var(--lav-sky)/.18), transparent 75%)",
        }}
      />
      <div className="relative mx-auto max-w-[1200px] px-6 pb-32 lg:px-12 lg:pb-44">
        <Reveal>
          <div className="mx-auto flex w-fit items-center gap-2 rounded-full border border-foreground/10 bg-white/60 px-3.5 py-1.5 backdrop-blur-md">
            <span className="text-[10px]" style={{ color: "hsl(var(--lav-purple))" }}>◆</span>
            <span className="font-mono-tech text-[10px] uppercase tracking-[0.32em] text-foreground/65">
              Pricing · Transparent
            </span>
          </div>
        </Reveal>

        <Reveal delay={1}>
          <h1
            className="mx-auto mt-7 max-w-[900px] text-center font-display font-bold leading-[0.96] tracking-[-0.035em] text-foreground"
            style={{ fontSize: "clamp(44px, 7vw, 92px)" }}
          >
            Honest pricing.
            <br />
            <span style={{ color: "hsl(var(--gold))", fontStyle: "italic" }}>
              Built around outcomes,
              <br />
              not hours.
            </span>
          </h1>
        </Reveal>

        <Reveal delay={2}>
          <p className="mx-auto mt-7 max-w-[520px] text-center text-[15px] leading-[1.75] text-foreground/65">
            Most agencies charge for time. You pay whether it works or not. We charge for delivered outcomes — and guarantee them in writing.
          </p>
        </Reveal>

        <Reveal delay={3}>
          <div className="mx-auto mt-9 flex w-full max-w-[460px] items-center gap-2 rounded-full border border-foreground/10 bg-white/70 p-1.5 pl-5 backdrop-blur-md shadow-[0_10px_40px_-12px_hsl(var(--lav-purple)/.35)]">
            <span className="flex-1 truncate text-[13px] text-foreground/60">
              Start with a free 30-min audit
            </span>
            <a
              href="mailto:hello@agenzi.ai"
              data-magnify
              className="cta-purple shrink-0 rounded-full px-5 py-2.5 text-[12px] font-semibold"
            >
              Book Free Audit
            </a>
          </div>
        </Reveal>
      </div>

      {/* Floating preview cards bridging to next section */}
      <div className="relative mx-auto max-w-[1100px] px-6 lg:px-12">
        <div className="relative -mb-24 grid grid-cols-3 gap-3 lg:-mb-32 lg:gap-6">
          {previews.map((p, i) => (
            <Reveal key={p.tier} delay={(i + 2) as 2 | 3}>
              <div
                className="glass-lavender relative overflow-hidden rounded-2xl p-4 lg:p-5"
                style={{
                  transform: `rotate(${p.rotate}) translateY(${p.featured ? "-14px" : "0"})`,
                  boxShadow: p.featured
                    ? "0 30px 60px -20px hsl(var(--lav-purple)/.45)"
                    : "0 20px 40px -20px hsl(var(--lav-purple)/.25)",
                }}
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0"
                  style={{ background: `radial-gradient(70% 70% at 30% 0%, ${p.tint}, transparent 70%)` }}
                />
                <div className="relative">
                  <span className="font-mono-tech text-[9px] uppercase tracking-[0.28em] text-foreground/55">
                    {p.tier}
                  </span>
                  <div
                    className="mt-2 font-display font-bold leading-tight tracking-[-0.02em] text-foreground"
                    style={{ fontSize: "clamp(14px, 1.6vw, 18px)" }}
                  >
                    {p.title}
                  </div>
                  <div
                    className="mt-3 font-display font-bold tracking-[-0.02em]"
                    style={{
                      fontSize: "clamp(16px, 2vw, 22px)",
                      color: p.featured ? "hsl(var(--lav-purple))" : "hsl(var(--gold))",
                    }}
                  >
                    {p.price}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
