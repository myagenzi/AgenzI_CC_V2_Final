import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const lines: { text: string; accent?: boolean }[] = [
  { text: "You know what your brand" },
  { text: "needs to say." },
  { text: "You just can't say it", accent: true },
  { text: "fast enough.", accent: true },
];

export function CaasHero() {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(() => setShown(true), 80);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <section className="relative px-6 pb-16 pt-40 md:px-16 md:pb-24 md:pt-48">
      <div className="mb-12 flex items-center gap-4">
        <span className="font-mono-tech text-[11px] uppercase tracking-[0.3em] text-foreground/50">
          01 / Engine · CaaS
        </span>
        <span className="h-px flex-1 bg-white/10" />
        <span className="font-mono-tech text-[11px] uppercase tracking-[0.3em] text-foreground/50">
          Creative as a Service
        </span>
      </div>

      <h1 className="font-display font-bold uppercase leading-[0.95] tracking-[-0.035em]">
        {lines.map((l, i) => (
          <span key={i} className="block overflow-hidden">
            <span
              className={cn(
                "inline-block transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
                shown ? "translate-y-0 opacity-100" : "translate-y-full opacity-0",
                l.accent && "text-electric",
              )}
              style={{
                fontSize: "clamp(40px, 7.2vw, 124px)",
                transitionDelay: `${i * 110}ms`,
              }}
            >
              {l.text}
            </span>
          </span>
        ))}
      </h1>

      <div className="mt-14 grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-6 md:col-start-7">
          <p className="font-mono-tech mb-3 text-[11px] uppercase tracking-[0.25em] text-foreground/50">
            ↓ Manifesto
          </p>
          <p className="text-base leading-relaxed text-foreground/75 md:text-lg">
            Your competitor posted four times this week. You're still in the approval loop for last
            month's reel. CaaS is the creative system that fixes that.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="/#contact"
              className="cta-glow inline-flex items-center gap-3 rounded-full bg-foreground px-7 py-3.5 text-sm font-semibold text-background transition hover:bg-electric hover:text-foreground"
            >
              Book Free Audit <span aria-hidden>→</span>
            </a>
            <a
              href="#caas-svcs"
              className="story-link font-mono-tech text-xs uppercase tracking-[0.25em] text-foreground/70 hover:text-foreground"
            >
              See services ↓
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
