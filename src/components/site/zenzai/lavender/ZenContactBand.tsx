import { Reveal } from "@/components/site/Reveal";

export function ZenContactBand() {
  return (
    <section className="px-6 py-16 lg:px-12">
      <div
        className="mx-auto max-w-[1200px] overflow-hidden rounded-[32px] border border-white/10 px-8 py-14 text-white md:px-14 md:py-20"
        style={{
          background:
            "radial-gradient(circle at 20% 20%, hsl(var(--lav-purple) / 0.45) 0%, transparent 55%), radial-gradient(circle at 85% 80%, hsl(var(--lav-magenta) / 0.35) 0%, transparent 60%), linear-gradient(135deg, hsl(240 30% 8%), hsl(260 35% 12%))",
        }}
      >
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <Reveal>
              <span className="font-mono-tech text-[11px] uppercase tracking-[0.3em] text-white/60">
                Your Move
              </span>
            </Reveal>
            <Reveal delay={1}>
              <h2
                className="font-display mt-5 font-extrabold leading-[1.05] tracking-[-0.03em]"
                style={{ fontSize: "clamp(30px, 4vw, 52px)" }}
              >
                Your business is running on repetition AI should be doing.{" "}
                <span
                  className="italic"
                  style={{
                    background:
                      "linear-gradient(135deg, hsl(var(--gold)), hsl(var(--lav-pink)))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Let's find out how much that's actually costing you.
                </span>
              </h2>
            </Reveal>
            <Reveal delay={2}>
              <p className="mt-5 max-w-[520px] text-sm leading-relaxed text-white/70 md:text-base">
                30 minutes. We look at your operations. You leave knowing exactly where AI fits —
                and what it's worth in revenue or hours saved.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <div className="flex flex-col items-start gap-3 lg:items-end">
              <a
                href="/book-audit"
                data-magnify
                className="cta-purple inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold"
              >
                Book Free Audit →
              </a>
              <a
                href="/#pricing"
                data-magnify
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10"
              >
                See pricing →
              </a>
              <span className="font-mono-tech mt-2 text-[10px] uppercase tracking-[0.25em] text-white/50">
                Limited spots · May 2026
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
