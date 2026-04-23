import { Reveal } from "@/components/site/Reveal";

const rows = [
  { year: "2026", title: "₹1Cr+ traced revenue across MaaS clients", cat: "Attribution" },
  { year: "2026", title: "38 active brands on integrated MaaS retainers", cat: "Pipeline" },
  { year: "2025", title: "4.2× average ROAS lift in first 90 days", cat: "Performance" },
  { year: "2025", title: "92% client retention year-over-year", cat: "Retention" },
  { year: "2025", title: "Featured: Founders' Brand Engine framework", cat: "Perception" },
  { year: "2024", title: "Launched MaaS as a productised offer", cat: "Milestone" },
];

export function MaasAwardsTable() {
  return (
    <section className="px-6 py-20 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <h2
              className="font-display font-extrabold uppercase leading-[1.0] tracking-[-0.03em] text-foreground"
              style={{ fontSize: "clamp(28px, 4vw, 56px)" }}
            >
              Receipts. <span className="text-primary italic">Not promises.</span>
            </h2>
            <p className="font-mono-tech text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
              Recent · 2024 → 2026
            </p>
          </div>
        </Reveal>

        <Reveal delay={1}>
          <div className="glass-dark-panel overflow-hidden rounded-[24px]">
            <div className="divide-y divide-white/10">
              {rows.map((r) => (
                <div
                  key={r.title}
                  className="grid grid-cols-12 items-center gap-4 px-6 py-5 text-white/85 transition hover:bg-white/5 md:px-10 md:py-6"
                >
                  <span className="font-mono-tech col-span-2 text-[12px] tracking-[0.25em] text-white/55 md:text-[13px]">
                    {r.year}
                  </span>
                  <span
                    className="font-display col-span-7 font-bold uppercase tracking-[-0.015em] text-white"
                    style={{ fontSize: "clamp(15px, 1.4vw, 20px)" }}
                  >
                    {r.title}
                  </span>
                  <span className="font-mono-tech col-span-3 text-right text-[11px] uppercase tracking-[0.25em] text-[hsl(var(--lav-pink))]">
                    {r.cat}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
