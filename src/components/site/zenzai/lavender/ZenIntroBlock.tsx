import { Reveal } from "@/components/site/Reveal";

const cards = [
  {
    n: "02",
    title: "Layer 02 — Integrations",
    sub: "Your 12–15 tools connected. CRM, WhatsApp, email, invoicing, e-commerce — one data flow.",
  },
  {
    n: "03",
    title: "Layer 03 — Custom AI + Tech",
    sub: "Custom AI models, mobile apps, document processing. Infrastructure that makes you defensible.",
  },
  {
    n: "04",
    title: "Compounding",
    sub: "Each layer makes the next more valuable. The system gets smarter as you use it.",
  },
  {
    n: "05",
    title: "You own it",
    sub: "Your data, your workflows, your IP. We build it on your stack — not behind our paywall.",
  },
  {
    n: "06",
    title: "Speed",
    sub: "Live in 48 hours to 2 weeks. Not 6-month decks and discovery phases.",
  },
];

export function ZenIntroBlock() {
  return (
    <section id="zen-svcs" className="px-6 py-24 lg:px-12">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left intro */}
          <div className="lg:col-span-5">
            <Reveal>
              <span className="font-mono-tech text-[11px] uppercase tracking-[0.3em] text-[hsl(var(--lav-purple))]">
                Three Layers
              </span>
            </Reveal>
            <Reveal delay={1}>
              <h2
                className="font-display mt-5 font-extrabold leading-[1.05] tracking-[-0.03em] text-foreground"
                style={{ fontSize: "clamp(32px, 4.4vw, 56px)" }}
              >
                Start with automations. Add integrations.{" "}
                <span
                  style={{
                    background:
                      "linear-gradient(135deg, hsl(var(--lav-purple)), hsl(var(--lav-magenta)) 55%, hsl(var(--lav-pink)))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Build what doesn't exist yet.
                </span>
              </h2>
            </Reveal>
            <Reveal delay={2}>
              <p className="mt-6 max-w-[440px] text-[15px] leading-relaxed text-muted-foreground">
                Three layers, one system. Most clients start at Layer 01 and grow into the rest as
                the wins compound. No vaporware. Live software, in days.
              </p>
            </Reveal>
            <Reveal delay={3}>
              <a
                href="mailto:hello@agenzi.ai"
                data-magnify
                className="cta-purple mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
              >
                Map your system →
              </a>
            </Reveal>
          </div>

          {/* Right highlighted dark cosmic tile */}
          <div className="lg:col-span-7">
            <Reveal delay={2}>
              <article
                data-magnify
                className="tile-cosmic relative h-full min-h-[320px] overflow-hidden rounded-[28px] p-8 text-white"
              >
                <div className="flex items-center gap-2">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[hsl(var(--gold))]" />
                  <span className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-white/70">
                    Highlighted · Most Started Here
                  </span>
                </div>
                <div
                  className="font-display mt-6 font-extrabold leading-[0.95] tracking-[-0.04em]"
                  style={{ fontSize: "clamp(48px, 6vw, 96px)", color: "hsl(var(--gold))" }}
                >
                  01
                </div>
                <h3 className="font-display mt-2 text-3xl font-bold tracking-[-0.02em] md:text-4xl">
                  Layer 01 — Automations
                </h3>
                <p className="mt-4 max-w-[480px] text-sm leading-relaxed text-white/75 md:text-base">
                  Fastest wins. Live in 48 hours to 2 weeks. Tasks eating your team's time —
                  identified, automated, done. The proof step before everything else.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {["WhatsApp", "Lead capture", "Invoicing", "Booking", "Support AI", "Reporting"].map(
                    (t) => (
                      <span
                        key={t}
                        className="font-mono-tech rounded-full border border-white/20 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-white/75"
                      >
                        {t}
                      </span>
                    ),
                  )}
                </div>
              </article>
            </Reveal>
          </div>
        </div>

        {/* Numbered cards 02–06 */}
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal key={c.n} delay={((i % 3) + 1) as 1 | 2 | 3}>
              <article
                data-magnify
                className="group relative flex h-full flex-col rounded-[20px] border border-border bg-white/70 p-6 backdrop-blur transition hover:-translate-y-1 hover:bg-white"
              >
                <div
                  className="font-display text-4xl font-extrabold leading-none tracking-[-0.03em]"
                  style={{ color: "hsl(var(--gold))" }}
                >
                  {c.n}
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[hsl(var(--lav-purple))]" />
                  <h4 className="font-display text-lg font-bold tracking-[-0.015em] text-foreground">
                    {c.title}
                  </h4>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.sub}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
