import { HeroTiles } from "@/components/site/home/HeroTiles";
import { Reveal } from "@/components/site/Reveal";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden px-6 pb-16 pt-32 lg:px-12 lg:pb-24 lg:pt-40"
    >
      <div className="mx-auto grid max-w-[1180px] items-center gap-12 lg:grid-cols-12 lg:gap-8">
        {/* Left — copy */}
        <div className="lg:col-span-7">
          <Reveal>
            <div className="glass-lavender mb-8 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[12px] text-foreground/75">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[hsl(var(--lav-lilac))]" />
              Human + AI · One System · Built for Your Business
            </div>
          </Reveal>

          <Reveal delay={1}>
            <h1
              className="font-display font-extrabold leading-[1.02] tracking-[-0.04em] text-foreground"
              style={{ fontSize: "clamp(40px, 7.2vw, 92px)" }}
            >
              Your competitors aren't working harder.{" "}
              <span className="text-primary">They have better systems.</span>
            </h1>
          </Reveal>

          <Reveal delay={2}>
            <p
              className="mt-6 max-w-xl font-medium text-foreground/85"
              style={{ fontSize: "clamp(17px, 1.7vw, 22px)", lineHeight: 1.4 }}
            >
              The question is — how long can you afford to stay where you are?
            </p>
          </Reveal>

          <Reveal delay={2}>
            <p className="mt-5 max-w-xl text-[clamp(15px,1.5vw,18px)] leading-relaxed text-muted-foreground">
              While you're managing vendors, chasing updates, and juggling tools — they've already streamlined everything. AgenzI replaces agencies, tools, and manual work with{" "}
              <span className="font-semibold text-foreground">one intelligent system</span>{" "}
              built for your business.
            </p>
          </Reveal>

          <Reveal delay={3}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="cta-purple inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold"
              >
                Book Your Free AI Audit →
              </a>
              <a
                href="#how-it-works"
                className="glass-lavender inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-foreground/80 transition hover:text-foreground"
              >
                See how it works <span aria-hidden>↓</span>
              </a>
            </div>
          </Reveal>

          <Reveal delay={3}>
            <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-foreground/10 pt-8 sm:grid-cols-4">
              {[
                { stat: "70%", label: "Lower cost than traditional agencies" },
                { stat: "48h", label: "From brief to live creative" },
                { stat: "3", label: "Services. One integrated system." },
                { stat: "90D", label: "Performance guarantee in writing" },
              ].map((s) => (
                <div key={s.stat}>
                  <div className="font-display text-[clamp(28px,3.2vw,40px)] font-extrabold leading-none tracking-tight text-foreground">
                    {s.stat}
                  </div>
                  <div className="mt-2 text-[12px] leading-snug text-muted-foreground">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Right — floating tile mosaic */}
        <div className="relative flex justify-center lg:col-span-5 lg:justify-end">
          <HeroTiles />
        </div>
      </div>
    </section>
  );
}
