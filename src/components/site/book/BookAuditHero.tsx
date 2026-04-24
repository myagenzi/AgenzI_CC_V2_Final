import { Reveal } from "@/components/site/Reveal";

export function BookAuditHero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-16 lg:pt-44 lg:pb-24">
      {/* Soft lavender orb */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 35%, hsl(var(--lav-purple)/.18), transparent 65%), radial-gradient(40% 35% at 80% 80%, hsl(var(--lav-pink)/.14), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-[1100px] px-6 text-center lg:px-12">
        <Reveal>
          <span className="chip-purple inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-mono-tech uppercase tracking-[0.2em]">
            <span className="text-[hsl(var(--lav-purple))]">◆</span>
            Free Audit · No Commitment
          </span>
        </Reveal>
        <Reveal delay={1}>
          <h1
            className="mx-auto mt-7 max-w-[14ch] font-display font-bold leading-[0.95] tracking-[-0.035em] text-foreground"
            style={{ fontSize: "clamp(48px, 7vw, 96px)" }}
          >
            Let us know if you're{" "}
            <em
              className="font-display"
              style={{ fontStyle: "italic", color: "hsl(var(--lav-purple))" }}
            >
              ready
            </em>{" "}
            to{" "}
            <em
              className="font-display"
              style={{ fontStyle: "italic", color: "hsl(var(--lav-pink))" }}
            >
              build
            </em>{" "}
            your{" "}
            <em
              className="font-display"
              style={{ fontStyle: "italic", color: "hsl(var(--gold))" }}
            >
              AI system.
            </em>
          </h1>
        </Reveal>
        <Reveal delay={2}>
          <p className="mx-auto mt-6 max-w-[52ch] text-[16px] leading-relaxed text-foreground/65">
            30 minutes. We map what's broken. You leave with a clear roadmap —
            yours to keep regardless.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
