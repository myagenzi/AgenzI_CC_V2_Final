import { Reveal } from "@/components/site/Reveal";
import { MetaballsGL } from "@/components/site/zenzai/MetaballsGL";
import { ScrollTeaser } from "./ScrollTeaser";

export function ZenLavenderHero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-6 pb-16 pt-28 lg:px-12 lg:pt-32"
    >
      {/* soft nebula */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <div
          className="absolute left-[12%] top-[20%] h-[700px] w-[700px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, hsl(var(--lav-lilac) / 0.45) 0%, hsl(var(--lav-pink) / 0.20) 40%, transparent 70%)",
            filter: "blur(20px)",
          }}
        />
      </div>

      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 lg:grid-cols-12">
        {/* Left: copy */}
        <div className="lg:col-span-6">
          <Reveal>
            <span
              data-magnify
              className="chip-purple inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em]"
            >
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[hsl(var(--lav-purple))]" />
              Engine 03 · Zenzai
            </span>
          </Reveal>

          <Reveal delay={1}>
            <h1
              className="font-display mt-7 font-extrabold leading-[1.0] tracking-[-0.035em] text-foreground"
              style={{ fontSize: "clamp(38px, 6.2vw, 80px)" }}
            >
              You've already tried AI.{" "}
              <span
                className="italic"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(var(--lav-purple)), hsl(var(--lav-magenta)) 55%, hsl(var(--lav-pink)))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                You just never built the system around it.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={2}>
            <p className="mt-7 max-w-[520px] text-[clamp(15px,1.3vw,17px)] leading-relaxed text-muted-foreground">
              ChatGPT for emails. An automation that half-works. A pilot your team quietly stopped
              using. The problem was never AI — you bolted a tool onto a broken process.
            </p>
          </Reveal>

          <Reveal delay={3}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="/book-audit"
                data-magnify
                className="cta-purple inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold"
              >
                Book Free Audit →
              </a>
              <a
                href="#zen-svcs"
                data-magnify
                className="inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-5 py-3 text-sm font-medium text-foreground backdrop-blur transition hover:bg-white"
              >
                See services <span aria-hidden>↓</span>
              </a>
            </div>
          </Reveal>
        </div>

        {/* Right: framed media tile housing the WebGL metaballs */}
        <div className="lg:col-span-6">
          <Reveal delay={2}>
            <div
              className="relative aspect-[4/5] w-full overflow-hidden rounded-[28px] border border-border shadow-glow-lav"
              style={{
                background:
                  "linear-gradient(160deg, hsl(var(--lav-lilac) / 0.45), hsl(var(--lav-pink) / 0.30) 50%, hsl(var(--lav-purple) / 0.20))",
              }}
            >
              <div className="absolute inset-0">
                <MetaballsGL />
              </div>
              {/* soft top wash for legibility */}
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, hsl(0 0% 100% / 0.10) 0%, transparent 35%, transparent 65%, hsl(0 0% 100% / 0.18) 100%)",
                }}
              />
              <div className="absolute left-5 top-5 flex items-center gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[hsl(var(--lav-purple))]" />
                <span className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-foreground/65">
                  Zenzai · Live System
                </span>
              </div>
              <div className="absolute bottom-5 right-5">
                <span className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-foreground/55">
                  Automate · Integrate · Build
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* scroll teaser */}
      <div className="mt-14 flex justify-center">
        <ScrollTeaser />
      </div>
    </section>
  );
}
