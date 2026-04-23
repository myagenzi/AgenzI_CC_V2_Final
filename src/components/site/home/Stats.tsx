import { Reveal } from "@/components/site/Reveal";
import { CountUp } from "@/components/site/effects/CountUp";

const stats = [
  { num: "70%", label: "Lower cost than traditional agencies" },
  { num: "48h", label: "From brief to live creative" },
  { num: "3", label: "Services. One integrated system." },
  { num: "90D", label: "Performance guarantee in writing" },
];

export function Stats() {
  return (
    <section className="px-6 py-32 lg:px-12 lg:py-48">
      <div className="mx-auto max-w-[1100px]">
        <Reveal>
          <p className="mb-4 text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
            By the numbers
          </p>
        </Reveal>
        <Reveal delay={1}>
          <h2
            className="mx-auto mb-20 max-w-2xl text-center font-display font-extrabold leading-[1.05] tracking-[-0.03em] text-foreground"
            style={{ fontSize: "clamp(32px, 5vw, 56px)" }}
          >
            Built for the math that matters.
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 gap-y-12 sm:grid-cols-4 sm:gap-0">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={(Math.min(i + 1, 4)) as 1 | 2 | 3 | 4}>
              <div className={`px-0 text-center sm:px-6 ${i !== 0 ? "sm:border-l sm:border-foreground/[0.07]" : ""}`}>
                <div className="mb-3 font-display text-[44px] font-extrabold leading-none tracking-[-0.04em] text-primary sm:text-[52px]">
                  <CountUp value={s.num} />
                </div>
                <div className="text-[12px] leading-snug text-foreground/45">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
