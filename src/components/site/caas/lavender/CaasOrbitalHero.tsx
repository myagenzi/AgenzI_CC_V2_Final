import { Reveal } from "@/components/site/Reveal";
import { MediaPlaceholder } from "@/components/site/MediaPlaceholder";
import { ScrollTeaser } from "@/components/site/zenzai/lavender/ScrollTeaser";

const tiles = [
  { label: "Brand reel",       size: "w-24 h-24 md:w-32 md:h-32",  top: "4%",  left: "6%",  rot: -8, delay: "0s"   },
  { label: "Founder cut",      size: "w-20 h-20 md:w-28 md:h-28",  top: "2%",  left: "78%", rot:  6, delay: "0.4s" },
  { label: "Reel pack",        size: "w-28 h-28 md:w-36 md:h-36",  top: "22%", left: "88%", rot:  9, delay: "0.9s" },
  { label: "Product shoot",    size: "w-24 h-24 md:w-32 md:h-32",  top: "60%", left: "92%", rot: -5, delay: "1.3s" },
  { label: "Event reel",       size: "w-28 h-28 md:w-40 md:h-40",  top: "70%", left: "70%", rot:  4, delay: "0.2s" },
  { label: "UGC frame",        size: "w-20 h-20 md:w-28 md:h-28",  top: "78%", left: "8%",  rot: -7, delay: "0.7s" },
  { label: "Catalogue still",  size: "w-24 h-24 md:w-32 md:h-32",  top: "55%", left: "-2%", rot:  8, delay: "1.1s" },
  { label: "Avatar take",      size: "w-20 h-20 md:w-28 md:h-28",  top: "20%", left: "-3%", rot: -4, delay: "1.6s" },
];

export function CaasOrbitalHero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-6 pb-24 pt-28 lg:px-12 lg:pt-32"
    >
      {/* Soft nebula */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <div
          className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(circle, hsl(var(--lav-lilac) / 0.45) 0%, hsl(var(--lav-pink) / 0.25) 35%, hsl(var(--lav-purple) / 0.10) 60%, transparent 75%)",
            filter: "blur(20px)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1100px]">
        {/* Floating tiles ring around the headline */}
        <div className="pointer-events-none absolute inset-0 -mx-6 md:-mx-16">
          {tiles.map((t) => (
            <div
              key={t.label}
              className={`float-tile absolute ${t.size}`}
              style={{
                top: t.top,
                left: t.left,
                animationDelay: t.delay,
                ["--rot" as string]: `${t.rot}deg`,
              }}
            >
              <div className="h-full w-full" style={{ transform: `rotate(${t.rot}deg)` }}>
                <MediaPlaceholder
                  aspect="1/1"
                  kind="image"
                  label={t.label}
                  className="rounded-full shadow-glow-lav"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Centered hero */}
        <div className="relative mx-auto max-w-[760px] py-16 text-center md:py-24">
          <Reveal>
            <span className="chip-purple inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em]">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[hsl(var(--lav-purple))]" />
              Engine 01 · CaaS
            </span>
          </Reveal>

          <Reveal delay={1}>
            <h1
              className="font-display mt-7 font-extrabold leading-[1.0] tracking-[-0.035em] text-foreground"
              style={{ fontSize: "clamp(40px, 7vw, 92px)" }}
            >
              You know what your brand needs to say.{" "}
              <span
                className="italic"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(var(--lav-purple)), hsl(var(--lav-magenta)) 55%, hsl(var(--lav-pink)))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                You just can't say it fast enough.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={2}>
            <p className="mx-auto mt-7 max-w-[560px] text-[clamp(15px,1.4vw,18px)] leading-relaxed text-muted-foreground">
              Your competitor posted four times this week. You're still in the approval loop for
              last month's reel. CaaS is the creative system that fixes that.
            </p>
          </Reveal>

          <Reveal delay={3}>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <a
                href="/#contact"
                className="cta-purple inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold"
              >
                Book Free Audit →
              </a>
              <a
                href="#caas-svcs"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-5 py-3 text-sm font-medium text-foreground backdrop-blur transition hover:bg-white"
              >
                See services <span aria-hidden>↓</span>
              </a>
            </div>
          </Reveal>
        </div>

        {/* scroll teaser */}
        <div className="mt-10 flex justify-center">
          <ScrollTeaser />
        </div>
      </div>
    </section>
  );
}
