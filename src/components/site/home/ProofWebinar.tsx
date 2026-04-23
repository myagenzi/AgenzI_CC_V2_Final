import { Reveal } from "@/components/site/Reveal";

const proof = [
  { num: "70%", title: "Lower cost", desc: "Vs. running multiple agencies and vendor stacks." },
  { num: "48h", title: "Brief to live", desc: "From your input to creative shipped, every time." },
  { num: "90D", title: "Performance pact", desc: "If we don't move the needle, you keep the system." },
];

const trustTags = ["D2C brands", "B2B SaaS", "Local services", "Founder-led teams"];

export function ProofWebinar() {
  return (
    <section id="pricing" className="px-6 py-32 lg:px-12 lg:py-48">
      <div className="mx-auto max-w-[1100px]">
        <Reveal>
          <p className="mb-4 text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
            Receipts, not promises
          </p>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="mx-auto mb-20 max-w-3xl text-center font-display font-extrabold leading-[1.05] tracking-[-0.03em] text-foreground"
              style={{ fontSize: "clamp(36px, 6vw, 68px)" }}>
            Three numbers that <em className="not-italic text-primary">change the math.</em>
          </h2>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {proof.map((p, i) => (
            <Reveal key={p.title} delay={(i + 1) as 1 | 2 | 3} as="article">
              <div className="glass-card rounded-2xl p-8">
                <div className="mb-4 font-display text-5xl font-extrabold tracking-[-0.04em] text-primary">
                  {p.num}
                </div>
                <h3 className="mb-2 font-display text-base font-semibold text-foreground">{p.title}</h3>
                <p className="text-[13px] leading-relaxed text-foreground/55">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={3}>
          <div className="mt-16 flex flex-wrap items-center justify-center gap-3">
            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/40">
              Built for
            </span>
            {trustTags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-peri/15 px-3.5 py-1.5 text-[12px] text-foreground/65"
              >
                {t}
              </span>
            ))}
          </div>
        </Reveal>

        {/* Webinar bar */}
        <Reveal delay={4}>
          <div className="glass-card mt-20 flex flex-col items-center justify-between gap-6 rounded-2xl px-8 py-8 text-center sm:flex-row sm:text-left">
            <div>
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">
                Free this month
              </p>
              <p className="font-display text-lg font-bold text-foreground">
                Live walkthrough: How AgenzI replaces three agencies in one quarter
              </p>
              <p className="mt-1 text-[13px] text-foreground/50">45 minutes · Q&amp;A · No pitch · Recording sent</p>
            </div>
            <a
              href="#contact"
              className="cta-glow shrink-0 whitespace-nowrap rounded-full bg-primary px-6 py-3 text-[13px] font-semibold text-primary-foreground"
            >
              Save my seat →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
