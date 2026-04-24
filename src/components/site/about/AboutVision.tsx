import { Reveal } from "@/components/site/Reveal";

const cards = [
  {
    t: "Human + AI, not Human vs AI",
    d: "We believe the most powerful outcomes come from pairing human strategy with AI execution — not choosing between them.",
  },
  {
    t: "Systems over services",
    d: "Outputs expire. Systems compound. We build infrastructure that gets better every month — not deliverables that gather dust.",
  },
  {
    t: "Outcomes over activity",
    d: "We don't report on effort. We report on results. If we haven't moved the number, we haven't done our job.",
  },
];

export function AboutVision() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          {/* Globe motif */}
          <Reveal>
            <div className="relative flex flex-col items-start gap-6">
              <div className="relative aspect-square w-full max-w-[360px]">
                <svg
                  viewBox="0 0 200 200"
                  className="absolute inset-0 h-full w-full"
                  fill="none"
                  aria-hidden
                >
                  <circle cx="100" cy="100" r="98" stroke="hsl(var(--lav-purple)/.25)" strokeDasharray="2 4" />
                  <circle cx="100" cy="100" r="70" stroke="hsl(var(--lav-purple)/.18)" strokeDasharray="2 4" />
                  <circle cx="100" cy="100" r="40" stroke="hsl(var(--lav-purple)/.15)" strokeDasharray="2 4" />
                  <ellipse cx="100" cy="100" rx="98" ry="40" stroke="hsl(var(--lav-purple)/.2)" strokeDasharray="2 4" />
                  <ellipse cx="100" cy="100" rx="40" ry="98" stroke="hsl(var(--lav-purple)/.2)" strokeDasharray="2 4" />
                  <circle cx="100" cy="100" r="3" fill="hsl(var(--gold))" />
                </svg>
              </div>
              <span
                data-magnify
                className="chip-purple inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em]"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[hsl(var(--lav-purple))]" />
                Hub supports businesses worldwide
              </span>
            </div>
          </Reveal>

          {/* Copy */}
          <div>
            <Reveal>
              <div className="font-mono-tech text-[11px] uppercase tracking-[0.3em] text-foreground/55">
                The Vision
              </div>
            </Reveal>
            <Reveal delay={1}>
              <p
                className="mt-6 font-display font-medium leading-tight text-foreground/85"
                style={{ fontSize: "clamp(22px, 2.4vw, 34px)" }}
              >
                Every major communication shift created a new kind of company. TV created TV agencies. The internet created web agencies. Social media created social media agencies.
                <br /><br />
                <em className="not-italic" style={{ color: "hsl(var(--lav-purple))", fontStyle: "italic" }}>
                  AI is creating something new.
                </em>{" "}
                And this time, we're building it first.
              </p>
            </Reveal>
          </div>
        </div>

        {/* 3 cards */}
        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal key={c.t} delay={(i % 3) as 0 | 1 | 2}>
              <div
                data-magnify
                className="glass-lavender h-full rounded-2xl border-l-2 p-7 transition-transform duration-300 hover:-translate-y-1"
                style={{ borderLeftColor: "hsl(var(--gold))" }}
              >
                <div className="font-display text-[18px] font-semibold leading-tight text-foreground">
                  {c.t}
                </div>
                <p className="mt-3 text-[14px] leading-relaxed text-foreground/65">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
