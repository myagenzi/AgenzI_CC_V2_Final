import { Reveal } from "@/components/site/Reveal";

const stats = [
  { num: "70%", label: "Lower cost than traditional agencies", chip: "Save" },
  { num: "48h", label: "From brief to live creative", chip: "Fast" },
  { num: "3",   label: "Services. One integrated system.",     chip: "Unified" },
  { num: "90D", label: "Performance guarantee in writing",     chip: "Promise" },
];

export function Stats() {
  return (
    <section className="px-6 py-20 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1100px]">
        <Reveal>
          <p className="mb-3 text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
            By the numbers
          </p>
        </Reveal>
        <Reveal delay={1}>
          <h2
            className="mx-auto mb-14 max-w-2xl text-center font-display font-extrabold leading-[1.05] tracking-[-0.03em] text-foreground"
            style={{ fontSize: "clamp(28px, 4.5vw, 52px)" }}
          >
            Built for the math that matters.
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={(Math.min(i + 1, 4)) as 1 | 2 | 3 | 4}>
              <div className="pill-stat flex h-full flex-col gap-3 p-5">
                <div className="flex items-start justify-between">
                  <div className="font-display text-[40px] font-extrabold leading-none tracking-[-0.04em] text-foreground">
                    {s.num}
                  </div>
                  <span className="chip-purple rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider">
                    {s.chip}
                  </span>
                </div>
                <div className="text-[12px] leading-snug text-muted-foreground">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
