import { MediaPlaceholder } from "@/components/site/MediaPlaceholder";
import { Reveal } from "@/components/site/Reveal";

const metrics = [
  { label: "Human strategy + AI execution", value: "1 system" },
  { label: "Creative · Marketing · Automation", value: "All in one" },
  { label: "Built for your business", value: "Bespoke" },
];

export function StatPanel() {
  return (
    <section className="px-6 py-16 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-[1100px]">
        <Reveal>
          <div className="glass-dark-panel relative grid gap-10 rounded-3xl p-8 md:grid-cols-[1.2fr_1fr] md:p-12">
            {/* Left — chart placeholder + sources */}
            <div className="relative z-10">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[0,1,2,3].map((i) => (
                    <span
                      key={i}
                      className="inline-block h-7 w-7 rounded-full border-2 border-[#1C1C1C]"
                      style={{
                        background: `linear-gradient(135deg, hsl(${261 + i*12} 70% 60%), hsl(${292 + i*8} 80% 65%))`,
                      }}
                    />
                  ))}
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/55">
                  Sources · live
                </span>
              </div>
              <MediaPlaceholder aspect="2/1" kind="image" label="Performance chart" className="!rounded-2xl !border-white/10 !bg-white/[0.03]" />
              <p className="mt-4 text-[12px] text-white/50">
                Most agencies give you output — we give you a system that keeps producing it.
              </p>
            </div>

            {/* Right — metric rows */}
            <div className="relative z-10 flex flex-col justify-center gap-3">
              {metrics.map((m) => (
                <div
                  key={m.label}
                  className="flex items-center justify-between gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.03] px-4 py-3"
                >
                  <span className="text-[13px] text-white/75">{m.label}</span>
                  <span className="rounded-full bg-[hsl(var(--lav-lilac)/0.15)] px-3 py-1 text-[11px] font-semibold text-[hsl(var(--lav-lilac))] ring-1 ring-[hsl(var(--lav-lilac)/0.25)]">
                    {m.value}
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
