import { Reveal } from "@/components/site/Reveal";

const proof = [
  {
    num: "70%",
    title: "Lower cost",
    desc: "AI changed the cost structure of creative production. We pass that saving to you — at 60–80% gross margin.",
  },
  {
    num: "48h",
    title: "Brief to live",
    desc: "What takes an agency two weeks takes us 48 hours. AI doesn't sleep or wait for approval chains.",
  },
  {
    num: "90D",
    title: "Performance pact",
    desc: "20–40% cost reduction or 2–5× output increase in 90 days. Or we work free until we deliver. No asterisks.",
  },
];

const trustTags = [
  "Founders",
  "D2C Brands",
  "SMBs",
  "Coaches + Creators",
  "Growth-stage startups",
  "Enterprise",
];

export function ProofWebinar() {
  return (
    <section id="pricing" className="px-6 py-24 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1100px]">
        <Reveal>
          <p data-magnify className="mb-3 text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
            Why It Works
          </p>
        </Reveal>
        <Reveal delay={1}>
          <h2
            className="mx-auto mb-14 max-w-3xl text-center font-display font-extrabold leading-[1.05] tracking-[-0.03em] text-foreground"
            style={{ fontSize: "clamp(32px, 5.4vw, 60px)" }}
          >
            Built by operators.{" "}
            <span className="text-primary">Backed by numbers.</span>
          </h2>
        </Reveal>

        <Reveal delay={2}>
          <div className="glass-dark-panel rounded-3xl p-6 md:p-10">
            <div className="relative z-10 grid gap-6 md:grid-cols-3">
              {proof.map((p) => (
                <div
                  key={p.title}
                  className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-6"
                >
                  <div data-magnify className="mb-3 font-display text-5xl font-extrabold tracking-[-0.04em] text-[hsl(var(--lav-lilac))]">
                    {p.num}
                  </div>
                  <h3 className="mb-2 font-display text-base font-semibold text-white">{p.title}</h3>
                  <p className="text-[13px] leading-relaxed text-white/65">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={3}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              Built for
            </span>
            {trustTags.map((t) => (
              <span
                key={t}
                data-magnify
                className="chip-purple rounded-full px-3.5 py-1.5 text-[12px] font-medium"
              >
                {t}
              </span>
            ))}
          </div>
        </Reveal>

        {/* Philosophy quote */}
        <Reveal delay={3}>
          <div className="glass-lavender mt-14 rounded-3xl px-8 py-10 md:px-14 md:py-14">
            <p
              className="mx-auto max-w-3xl text-center font-display font-bold leading-[1.18] tracking-[-0.02em] text-foreground"
              style={{ fontSize: "clamp(22px, 2.6vw, 32px)" }}
            >
              "AI won't replace your business. But a business using AI well will.{" "}
              <span className="text-[hsl(var(--lav-lilac))]">
                The businesses that build the system now will be the ones everyone else is chasing in three years.
              </span>
              "
            </p>
          </div>
        </Reveal>

        {/* Urgency line */}
        <Reveal delay={4}>
          <div className="mt-10 text-center">
            <p data-magnify className="mb-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">
              Limited availability
            </p>
            <p className="mx-auto max-w-xl text-[13px] leading-relaxed text-muted-foreground">
              We only onboard a small number of businesses each month. Limited spots available for May 2026.
            </p>
          </div>
        </Reveal>

        {/* Webinar bar */}
        <Reveal delay={4}>
          <div className="glass-lavender mt-10 flex flex-col items-center justify-between gap-6 rounded-3xl px-8 py-8 text-center sm:flex-row sm:text-left">
            <div>
              <p data-magnify className="mb-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">
                Free this month
              </p>
              <p className="font-display text-lg font-bold text-foreground">
                See It In Action
              </p>
              <p className="mt-1 text-[13px] text-muted-foreground">
                Watch us build a real AI system for a real business — live. 30 minutes. No pitch. You leave with a playbook.
              </p>
            </div>
            <a
              data-magnify
              href="#contact"
              className="cta-purple shrink-0 whitespace-nowrap rounded-full px-6 py-3 text-[13px] font-semibold"
            >
              Reserve your spot →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
