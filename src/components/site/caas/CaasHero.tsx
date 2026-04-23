import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const words = ["WE", "BUILD", "EXPRESSIVE", "BRANDS."];

export function CaasHero() {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(() => setShown(true), 80);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <section className="relative px-6 pb-20 pt-40 md:px-16 md:pb-32 md:pt-48">
      <div className="mb-12 flex items-center gap-4">
        <span className="font-mono-tech text-[11px] uppercase tracking-[0.3em] text-foreground/50">
          01 / Services
        </span>
        <span className="h-px flex-1 bg-white/10" />
        <span className="font-mono-tech text-[11px] uppercase tracking-[0.3em] text-foreground/50">
          Creative — CaaS
        </span>
      </div>

      <h1 className="font-display font-bold uppercase leading-[0.92] tracking-[-0.04em]">
        {words.map((w, i) => (
          <span key={i} className="block overflow-hidden">
            <span
              className={cn(
                "inline-block transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
                shown ? "translate-y-0 opacity-100" : "translate-y-full opacity-0",
              )}
              style={{
                fontSize: "clamp(56px, 11vw, 192px)",
                transitionDelay: `${i * 110}ms`,
              }}
            >
              {w}
            </span>
          </span>
        ))}
      </h1>

      <div className="mt-16 grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-5 md:col-start-7">
          <p className="font-mono-tech mb-3 text-[11px] uppercase tracking-[0.25em] text-foreground/50">
            ↓ Manifesto
          </p>
          <p className="text-lg leading-relaxed text-foreground/75 md:text-xl">
            Creative as a Service. One studio, three disciplines, an always-on engine that ships brand systems,
            digital experiences, and campaigns at the speed your business actually moves.
          </p>
        </div>
      </div>
    </section>
  );
}
