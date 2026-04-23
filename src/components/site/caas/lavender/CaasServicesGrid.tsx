import { useState } from "react";
import { Reveal } from "@/components/site/Reveal";
import { cn } from "@/lib/utils";

export type CaasService = {
  n: string;
  title: string;
  sub: string;
  desc: string;
  bullets?: string[];
  tags: { kind: "price" | "market" | "audience"; text: string }[];
};

type Props = {
  phase1: CaasService[];
  phase2: CaasService[];
};

function Card({
  item,
  active,
  onToggle,
  dimmed = false,
}: {
  item: CaasService;
  active: boolean;
  onToggle: () => void;
  dimmed?: boolean;
}) {
  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-2xl border transition-all duration-500",
        active
          ? "border-transparent text-white shadow-glow-lav md:col-span-2 md:row-span-2"
          : "border-border bg-white hover:-translate-y-1 hover:shadow-glow-lav",
        dimmed && !active && "opacity-70",
      )}
      style={
        active
          ? {
              background:
                "linear-gradient(135deg, hsl(var(--lav-purple)) 0%, hsl(var(--lav-magenta)) 55%, hsl(var(--lav-pink)) 100%)",
            }
          : undefined
      }
    >
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-start justify-between gap-4 p-6 text-left md:p-7"
        aria-expanded={active}
      >
        <div className="flex-1">
          <span
            className={cn(
              "font-mono-tech text-[10px] uppercase tracking-[0.28em]",
              active ? "text-white/80" : "text-muted-foreground",
            )}
          >
            {item.n}
          </span>
          <h3
            className={cn(
              "font-display mt-3 font-bold leading-[1.1] tracking-[-0.02em]",
              active ? "text-white" : "text-foreground",
            )}
            style={{ fontSize: active ? "clamp(22px, 2.4vw, 32px)" : "clamp(17px, 1.6vw, 22px)" }}
          >
            {item.title}
          </h3>
          <p
            className={cn(
              "mt-2 text-sm leading-snug",
              active ? "text-white/85" : "text-muted-foreground",
            )}
          >
            {item.sub}
          </p>
        </div>
        <span
          className={cn(
            "font-display mt-1 shrink-0 text-xl transition-transform",
            active ? "rotate-45 text-white" : "text-foreground/50",
          )}
          aria-hidden
        >
          +
        </span>
      </button>

      {active && (
        <div className="animate-fade-in border-t border-white/20 px-6 pb-7 pt-5 md:px-7">
          <p className="text-[15px] leading-relaxed text-white/90">{item.desc}</p>
          {item.bullets && (
            <ul className="mt-4 space-y-1.5">
              {item.bullets.map((b, i) => (
                <li key={i} className="flex gap-2 text-sm text-white/85">
                  <span aria-hidden>→</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          )}
          <div className="mt-5 flex flex-wrap gap-2">
            {item.tags.map((t, i) => (
              <span
                key={i}
                className="font-mono-tech inline-flex items-center rounded-full border border-white/35 bg-white/15 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-white"
              >
                {t.text}
              </span>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}

export function CaasServicesGrid({ phase1, phase2 }: Props) {
  const [open, setOpen] = useState<string | null>(phase1[0]?.n ?? null);

  const toggle = (n: string) => setOpen((cur) => (cur === n ? null : n));

  return (
    <section id="caas-svcs" className="px-6 py-20 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-12">
          <Reveal>
            <span className="chip-purple inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em]">
              What We Build
            </span>
          </Reveal>
          <Reveal delay={1}>
            <h2
              className="font-display mt-5 font-extrabold uppercase leading-[1.02] tracking-[-0.03em] text-foreground"
              style={{ fontSize: "clamp(32px, 5.5vw, 72px)" }}
            >
              Eight services live now.
              <br />
              <span
                style={{
                  background:
                    "linear-gradient(135deg, hsl(var(--lav-purple)), hsl(var(--lav-magenta)), hsl(var(--lav-pink)))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Eight more this year.
              </span>
            </h2>
          </Reveal>
        </div>

        {/* Phase 1 */}
        <div className="mb-6 flex items-center gap-4">
          <span className="font-mono-tech text-[11px] uppercase tracking-[0.3em] text-foreground">
            Phase 1 · Live Now
          </span>
          <span className="h-px flex-1 bg-border" />
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:auto-rows-[1fr] md:grid-cols-4">
          {phase1.map((it) => (
            <Card
              key={it.n}
              item={it}
              active={open === it.n}
              onToggle={() => toggle(it.n)}
            />
          ))}
        </div>

        {/* Phase 2 */}
        <div className="mb-6 mt-16 flex items-center gap-4">
          <span className="font-mono-tech text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
            Phase 2 · Arriving This Year
          </span>
          <span className="h-px flex-1 bg-border" />
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          {phase2.map((it) => (
            <Card
              key={it.n}
              item={it}
              active={open === it.n}
              onToggle={() => toggle(it.n)}
              dimmed
            />
          ))}
        </div>
      </div>
    </section>
  );
}
