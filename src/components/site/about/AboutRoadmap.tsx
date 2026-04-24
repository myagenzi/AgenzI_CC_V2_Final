import { Reveal } from "@/components/site/Reveal";

const steps = [
  {
    y: "2024",
    t: "Foundation",
    d: "Built the core CaaS and Zenzai automation stack. First ten clients. Proof of concept validated.",
  },
  {
    y: "2025",
    t: "Systemisation",
    d: "MaaS launched. Full three-engine system live. Human Agent model scaled. 90-day guarantee introduced.",
  },
  {
    y: "2026",
    t: "Expansion",
    d: "Phase 2 CaaS services. Global markets. White label partnerships. Enterprise tier. Products in development.",
  },
  {
    y: "2027+",
    t: "Platform",
    d: "AgenzI OS — a full business operating platform for the AI era. The category we're building toward.",
  },
];

export function AboutRoadmap() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
        <Reveal>
          <div className="font-mono-tech text-[11px] uppercase tracking-[0.3em] text-foreground/55">
            Roadmap
          </div>
        </Reveal>
        <Reveal delay={1}>
          <h2
            className="mt-4 font-display font-bold leading-[0.95] tracking-[-0.02em] text-foreground"
            style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
          >
            Where we're going.
          </h2>
        </Reveal>

        {/* Timeline */}
        <div className="relative mt-16">
          <div
            aria-hidden
            className="absolute left-0 right-0 top-[14px] hidden h-px bg-foreground/15 md:block"
          />
          <div className="grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-6">
            {steps.map((s, i) => (
              <Reveal key={s.y} delay={(i % 3) as 0 | 1 | 2}>
                <div data-magnify className="relative">
                  <div
                    aria-hidden
                    className="mb-6 hidden h-7 w-7 items-center justify-center rounded-full border border-[hsl(var(--lav-purple)/.4)] bg-background md:flex"
                  >
                    <span className="h-2.5 w-2.5 rounded-full bg-[hsl(var(--lav-purple))]" />
                  </div>
                  <div
                    className="font-display font-bold leading-none"
                    style={{ color: "hsl(var(--gold))", fontSize: "clamp(36px, 4vw, 56px)" }}
                  >
                    {s.y}
                  </div>
                  <div className="mt-3 font-display text-[18px] font-semibold text-foreground">
                    {s.t}
                  </div>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-foreground/65">
                    {s.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Manifesto */}
        <Reveal delay={2}>
          <div className="glass-lavender relative mt-20 overflow-hidden rounded-[28px] p-10 lg:p-16">
            <div
              aria-hidden
              className="absolute -left-2 -top-4 select-none font-display font-black leading-none"
              style={{ color: "hsl(var(--gold)/.18)", fontSize: "clamp(120px, 16vw, 220px)" }}
            >
              "
            </div>
            <p
              className="relative font-display font-medium leading-tight text-foreground/85"
              style={{ fontSize: "clamp(20px, 2.2vw, 30px)" }}
            >
              We started AgenzI because we kept watching good businesses fail — not from lack of talent or effort, but from lack of system. Too many vendors. Too many tools. Nobody owning the whole picture.
              <br /><br />
              AI changed the economics of what's possible. We're using it to do something simple: build one system that actually works — so business owners can stop managing and start building.
            </p>
            <div className="font-mono-tech relative mt-8 text-[12px] uppercase tracking-[0.25em]" style={{ color: "hsl(var(--lav-purple))" }}>
              — The AgenzI Team · Hyderabad, India · 2026
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
