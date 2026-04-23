import { MediaPlaceholder } from "@/components/site/MediaPlaceholder";
import { Reveal } from "@/components/site/Reveal";

const tiles = [
  { label: "Revenue dashboard", rot: -6, top: "2%", left: "8%", size: "w-40 h-40 md:w-52 md:h-52", delay: "0s" },
  { label: "Attribution graph", rot: 5, top: "10%", left: "55%", size: "w-32 h-32 md:w-44 md:h-44", delay: "0.5s" },
  { label: "Pipeline curve", rot: -3, top: "52%", left: "2%", size: "w-36 h-36 md:w-48 md:h-48", delay: "1.1s" },
  { label: "Brand reel", rot: 7, top: "55%", left: "50%", size: "w-40 h-40 md:w-56 md:h-56", delay: "0.3s" },
];

const stats = [
  { stat: "100%", label: "Revenue traced to source" },
  { stat: "12", label: "Services. One MaaS." },
  { stat: "3", label: "Systems pointed at pipeline" },
  { stat: "30m", label: "Free audit. No deck." },
];

export function MaasLavenderHero() {
  return (
    <section id="top" className="relative px-6 pb-16 pt-28 lg:px-12 lg:pb-24 lg:pt-32">
      <div className="mx-auto max-w-[1200px]">
        {/* Hero dark panel */}
        <div className="glass-dark-panel relative overflow-hidden rounded-[28px] p-8 md:p-14">
          <div className="orb-gold absolute -top-20 right-[-60px] h-[280px] w-[280px]" aria-hidden />
          <div className="orb-gold absolute -bottom-24 left-[-40px] h-[220px] w-[220px] opacity-60" aria-hidden />

          <div className="relative grid gap-10 lg:grid-cols-12 lg:gap-8">
            {/* Left: copy */}
            <div className="lg:col-span-7">
              <Reveal>
                <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[12px] text-white/80 backdrop-blur">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[hsl(var(--lav-pink))]" />
                  Engine 02 · Marketing as a Service
                </div>
              </Reveal>

              <Reveal delay={1}>
                <h1
                  className="font-display font-extrabold leading-[1.0] tracking-[-0.04em] text-white"
                  style={{ fontSize: "clamp(38px, 6.4vw, 88px)" }}
                >
                  Marketing that doesn't bring in customers{" "}
                  <span className="italic text-[hsl(var(--lav-pink))]">isn't marketing.</span>{" "}
                  <span className="italic text-[hsl(var(--lav-lilac))]">It's decoration.</span>
                </h1>
              </Reveal>

              <Reveal delay={2}>
                <p className="mt-6 max-w-xl text-[clamp(15px,1.5vw,18px)] leading-relaxed text-white/75">
                  You paid the invoice. You asked for results. You got a deck full of impressions,
                  reach, and engagement.{" "}
                  <span className="font-semibold text-white">MaaS measures one thing — revenue.</span>{" "}
                  Every rupee traced to a customer. Every channel tied to pipeline.
                </p>
              </Reveal>

              <Reveal delay={3}>
                <div className="mt-9 flex flex-wrap items-center gap-3">
                  <a
                    href="#contact"
                    className="cta-purple inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold"
                  >
                    Book Free Audit →
                  </a>
                  <a
                    href="#maas-systems"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/85 backdrop-blur transition hover:bg-white/10"
                  >
                    See systems <span aria-hidden>↓</span>
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Right: floating tiles */}
            <div className="relative flex justify-center lg:col-span-5 lg:justify-end">
              <div className="relative aspect-square w-full max-w-[460px]">
                <div className="orb-gold absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2" aria-hidden />
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
                      <MediaPlaceholder aspect="1/1" kind="image" label={t.label} className="rounded-3xl" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats strip */}
          <div className="relative mt-12 grid grid-cols-2 gap-4 border-t border-white/10 pt-8 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.stat}>
                <div className="font-display text-[clamp(28px,3.2vw,42px)] font-extrabold leading-none tracking-tight text-white">
                  {s.stat}
                </div>
                <div className="mt-2 text-[12px] leading-snug text-white/60">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
