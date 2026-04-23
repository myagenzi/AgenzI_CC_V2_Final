import { Reveal } from "@/components/site/Reveal";

const proof = [
  { num: "70%", title: "Lower cost", desc: "Vs. running multiple agencies and vendor stacks." },
  { num: "48h", title: "Brief to live", desc: "From your input to creative shipped, every time." },
  { num: "90D", title: "Performance pact", desc: "If we don't move the needle, you keep the system." },
];

const trustTags = ["D2C brands", "B2B SaaS", "Local services", "Founder-led teams"];

export function ProofWebinar() {
  return (
    <section id="pricing" className="bg-cosmic py-24 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
        <Reveal>
          <p className="eyebrow mb-5">Receipts, not promises</p>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="max-w-2xl font-display text-[clamp(28px,4.5vw,54px)] font-extrabold leading-[1.06] tracking-[-0.03em] text-foreground">
            Three numbers that change the math.
          </h2>
        </Reveal>

        <div className="mt-11 grid gap-5 md:grid-cols-3">
          {proof.map((p, i) => (
            <Reveal key={p.title} delay={(i + 1) as 1 | 2 | 3} as="article">
              <div className="rounded-2xl bg-navy p-8">
                <div className="mb-2 font-display text-5xl font-extrabold tracking-[-0.04em] text-primary">
                  {p.num}
                </div>
                <h3 className="mb-1.5 font-display text-base font-semibold">{p.title}</h3>
                <p className="text-[13px] leading-relaxed text-moondust">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={3}>
          <div className="mt-8 flex flex-wrap items-center gap-3.5 border-t border-border pt-7">
            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-foreground/55">
              Built for
            </span>
            <div className="flex flex-wrap gap-2">
              {trustTags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border bg-navy/60 px-3.5 py-1.5 text-xs text-foreground/70"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Webinar bar */}
        <Reveal delay={4}>
          <div className="mt-10 flex flex-col items-start justify-between gap-5 rounded-2xl border border-border bg-gradient-to-r from-navy to-nebula/90 px-7 py-7 sm:flex-row sm:items-center">
            <div>
              <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
                Free this month
              </p>
              <p className="font-display text-lg font-bold text-foreground">
                Live walkthrough: How AgenzI replaces three agencies in one quarter
              </p>
              <p className="mt-1 text-[13px] text-moondust">45 minutes · Q&amp;A · No pitch · Recording sent</p>
            </div>
            <a
              href="#contact"
              className="shrink-0 whitespace-nowrap rounded-full bg-primary px-7 py-3 text-xs font-bold text-primary-foreground transition hover:-translate-y-px hover:bg-primary-bright hover:shadow-gold"
            >
              Save my seat →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
