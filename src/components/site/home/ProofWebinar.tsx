import { Reveal } from "@/components/site/Reveal";

const proof = [
  { num: "70%", title: "Lower cost", desc: "Vs. running multiple agencies and vendor stacks." },
  { num: "48h", title: "Brief to live", desc: "From your input to creative shipped, every time." },
  { num: "90D", title: "Performance pact", desc: "If we don't move the needle, you keep the system." },
];

const trustTags = ["D2C brands", "B2B SaaS", "Local services", "Founder-led teams"];

export function ProofWebinar() {
  return (
    <section id="pricing" className="px-6 py-24 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1100px]">
        <Reveal>
          <p className="mb-3 text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
            Receipts, not promises
          </p>
        </Reveal>
        <Reveal delay={1}>
          <h2
            className="mx-auto mb-14 max-w-3xl text-center font-display font-extrabold leading-[1.05] tracking-[-0.03em] text-foreground"
            style={{ fontSize: "clamp(32px, 5.4vw, 60px)" }}
          >
            Three numbers that <span className="text-primary">change the math.</span>
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
                  <div className="mb-3 font-display text-5xl font-extrabold tracking-[-0.04em] text-[hsl(var(--lav-lilac))]">
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
                className="chip-purple rounded-full px-3.5 py-1.5 text-[12px] font-medium"
              >
                {t}
              </span>
            ))}
          </div>
        </Reveal>

        {/* Webinar bar */}
        <Reveal delay={4}>
          <div className="glass-lavender mt-14 flex flex-col items-center justify-between gap-6 rounded-3xl px-8 py-8 text-center sm:flex-row sm:text-left">
            <div>
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">
                Free this month
              </p>
              <p className="font-display text-lg font-bold text-foreground">
                Live walkthrough: How AgenzI replaces three agencies in one quarter
              </p>
              <p className="mt-1 text-[13px] text-muted-foreground">45 minutes · Q&amp;A · No pitch · Recording sent</p>
            </div>
            <a
              href="#contact"
              className="cta-purple shrink-0 whitespace-nowrap rounded-full px-6 py-3 text-[13px] font-semibold"
            >
              Save my seat →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
