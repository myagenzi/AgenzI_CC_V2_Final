import { Reveal } from "@/components/site/Reveal";

type Pkg = {
  tier: string;
  title: string;
  desc: string;
  price: string;
  sub: string;
  features: string[];
  cta: string;
  featured?: boolean;
  accent: string;
};

const packages: Pkg[] = [
  {
    tier: "STARTER",
    title: "One Engine",
    desc: "One service area. Prove the system before expanding.",
    price: "From ₹3k",
    sub: "/month · CaaS, MaaS, or Zenzai automation",
    features: [
      "1 service area of your choice",
      "Human Agent oversight",
      "Monthly review call",
      "Delivery within 48 hours",
    ],
    cta: "Get started →",
    accent: "hsl(var(--gold))",
  },
  {
    tier: "GROWTH",
    title: "Two Engines",
    desc: "CaaS + MaaS or CaaS + Zenzai. Where the system starts compounding.",
    price: "From ₹12k",
    sub: "/month · 2 service areas integrated",
    features: [
      "2 integrated service areas",
      "Dedicated Human Agent",
      "AI setup + custom configuration",
      "Weekly check-in",
      "90-day performance guarantee",
    ],
    cta: "Start with Growth →",
    featured: true,
    accent: "hsl(var(--lav-purple))",
  },
  {
    tier: "FULL SYSTEM",
    title: "Three Engines",
    desc: "CaaS + MaaS + Zenzai. The complete operating system.",
    price: "Custom",
    sub: "/month · Scoped to your business",
    features: [
      "All three service areas",
      "Dedicated Human Agent + AI stack",
      "Full cross-system integration",
      "Custom AI model development",
      "Quarterly strategy sessions",
    ],
    cta: "Let's talk →",
    accent: "hsl(var(--lav-pink))",
  },
];

export function PricingPackages() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
        <Reveal>
          <div className="text-center">
            <span className="font-mono-tech text-[11px] uppercase tracking-[0.3em] text-foreground/55">
              Packages
            </span>
            <h2
              className="mx-auto mt-3 max-w-[760px] font-display font-bold leading-[1.02] tracking-[-0.02em] text-foreground"
              style={{ fontSize: "clamp(30px, 4vw, 52px)" }}
            >
              Pick where you start.{" "}
              <span style={{ color: "hsl(var(--gold))", fontStyle: "italic" }}>
                Scale when it works.
              </span>
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 items-stretch gap-6 lg:mt-20 lg:grid-cols-3 lg:gap-7">
          {packages.map((p, i) => (
            <Reveal key={p.tier} delay={((i + 1) as 1 | 2 | 3)}>
              <PackageCard pkg={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function PackageCard({ pkg }: { pkg: Pkg }) {
  if (pkg.featured) {
    return (
      <div
        className="tile-cosmic relative flex h-full flex-col overflow-hidden rounded-[28px] p-8 lg:p-10"
        style={{
          transform: "translateY(-12px)",
          boxShadow: "0 40px 80px -28px hsl(var(--lav-purple)/.5)",
        }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-80"
          style={{
            background:
              "radial-gradient(60% 60% at 80% 0%, hsl(var(--lav-purple)/.45), transparent 65%), radial-gradient(50% 50% at 0% 100%, hsl(var(--lav-pink)/.28), transparent 70%)",
          }}
        />
        <div className="relative flex h-full flex-col">
          <div
            className="absolute -top-4 right-0 rounded-full px-3 py-1 font-mono-tech text-[10px] font-semibold uppercase tracking-[0.25em]"
            style={{
              background: "hsl(var(--gold))",
              color: "hsl(var(--cosmic))",
            }}
          >
            Most Chosen
          </div>
          <span className="font-mono-tech text-[10px] uppercase tracking-[0.32em] text-[hsl(var(--starlight)/.6)]">
            {pkg.tier}
          </span>
          <h3
            className="mt-3 font-display font-bold tracking-[-0.02em] text-[hsl(var(--starlight))]"
            style={{ fontSize: "clamp(26px, 2.6vw, 34px)" }}
          >
            {pkg.title}
          </h3>
          <p className="mt-3 text-[14px] leading-[1.65] text-[hsl(var(--starlight)/.75)]">
            {pkg.desc}
          </p>
          <div className="mt-8">
            <div
              className="font-display font-black leading-none tracking-[-0.03em]"
              style={{ fontSize: "clamp(40px, 5vw, 60px)", color: "hsl(var(--gold))" }}
            >
              {pkg.price}
            </div>
            <div className="mt-2 text-[12px] text-[hsl(var(--starlight)/.55)]">{pkg.sub}</div>
          </div>
          <div className="my-7 h-px bg-[hsl(var(--starlight)/.12)]" />
          <ul className="flex flex-1 flex-col gap-3">
            {pkg.features.map((f) => (
              <li key={f} className="flex items-start gap-3 text-[14px] text-[hsl(var(--starlight)/.85)]">
                <span
                  aria-hidden
                  className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full"
                  style={{ background: "hsl(var(--gold))" }}
                />
                {f}
              </li>
            ))}
          </ul>
          <a
            href="mailto:hello@agenzi.ai"
            data-magnify
            className="cta-purple mt-8 inline-flex items-center justify-center rounded-full px-6 py-3.5 text-[13px] font-semibold"
          >
            {pkg.cta}
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="glass-lavender relative flex h-full flex-col overflow-hidden rounded-[28px] p-8 lg:p-9">
      <div
        aria-hidden
        className="absolute left-0 top-8 bottom-8 w-[3px] rounded-r-full"
        style={{ background: pkg.accent }}
      />
      <span className="font-mono-tech text-[10px] uppercase tracking-[0.32em] text-foreground/55">
        {pkg.tier}
      </span>
      <h3
        className="mt-3 font-display font-bold tracking-[-0.02em] text-foreground"
        style={{ fontSize: "clamp(24px, 2.4vw, 32px)" }}
      >
        {pkg.title}
      </h3>
      <p className="mt-3 text-[14px] leading-[1.65] text-foreground/70">{pkg.desc}</p>
      <div className="mt-7">
        <div
          className="font-display font-black leading-none tracking-[-0.03em] text-foreground"
          style={{ fontSize: "clamp(36px, 4.5vw, 54px)" }}
        >
          {pkg.price}
        </div>
        <div className="mt-2 text-[12px] text-foreground/55">{pkg.sub}</div>
      </div>
      <div className="my-7 h-px bg-foreground/10" />
      <ul className="flex flex-1 flex-col gap-3">
        {pkg.features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-[14px] text-foreground/80">
            <span
              aria-hidden
              className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full"
              style={{ background: pkg.accent }}
            />
            {f}
          </li>
        ))}
      </ul>
      <a
        href="mailto:hello@agenzi.ai"
        data-magnify
        className="mt-8 inline-flex items-center justify-center rounded-full border border-foreground/15 bg-white/40 px-6 py-3.5 text-[13px] font-semibold text-foreground transition hover:bg-white/70"
      >
        {pkg.cta}
      </a>
    </div>
  );
}
