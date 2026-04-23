import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { CursorMetaballs } from "./CursorMetaballs";

const lines: { text: string; accent?: boolean }[] = [
  { text: "You've already" },
  { text: "tried AI." },
  { text: "You just never built", accent: true },
  { text: "the system around it.", accent: true },
];

export function ZenzaiHero() {
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const t = window.setTimeout(() => setShown(true), 80);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-40 md:px-16 md:pb-28 md:pt-48">
      {/* Cursor-reactive metaballs */}
      <div className="pointer-events-none absolute inset-0 -z-0">
        <CursorMetaballs />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/30 to-background" />
      </div>

      <div className="relative z-10">
        <div className="mb-12 flex items-center gap-4">
          <span className="font-mono-tech text-[11px] uppercase tracking-[0.3em] text-foreground/50">
            03 / Engine · Zenzai
          </span>
          <span className="h-px flex-1 bg-foreground/[0.08]" />
          <span className="font-mono-tech text-[11px] uppercase tracking-[0.3em] text-foreground/50">
            AI · Automation · Tech
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
              ChatGPT for emails. An automation that half-works. A pilot your
              team quietly stopped using. The problem was never AI — you bolted
              a tool onto a broken process.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="/#contact"
                className="cta-glow inline-flex items-center gap-3 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
              >
                Book Free Audit <span aria-hidden>→</span>
              </a>
              <a
                href="#zen-svcs"
                className="story-link font-mono-tech text-xs uppercase tracking-[0.25em] text-foreground/70 hover:text-foreground"
              >
                See services ↓
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
