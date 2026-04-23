import { Reveal } from "@/components/site/Reveal";
import { ServiceAccordion, type ServiceItem } from "@/components/site/caas/ServiceAccordion";

type Row = {
  number: string;
  meta: string;
  eyebrow: string;
  headline: React.ReactNode;
  items: ServiceItem[];
};

type Props = { rows: Row[] };

export function MaasServiceRows({ rows }: Props) {
  return (
    <section id="maas-systems" className="px-6 py-20 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1200px] space-y-28">
        {rows.map((r, idx) => (
          <article
            key={r.number}
            className="grid grid-cols-12 gap-8 border-t border-border pt-16"
          >
            {/* Sticky number rail */}
            <aside className="col-span-12 md:col-span-4">
              <div className="md:sticky md:top-28">
                <span className="chip-purple inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em]">
                  {r.eyebrow}
                </span>
                <div
                  className="lav-num-outline mt-6"
                  style={{ fontSize: "clamp(96px, 13vw, 200px)" }}
                >
                  {r.number}
                </div>
                <p className="font-mono-tech mt-4 text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
                  {r.meta}
                </p>
                <div className="mt-6 h-px w-24 bg-gradient-to-r from-[hsl(var(--lav-purple))] via-[hsl(var(--lav-magenta))] to-[hsl(var(--lav-pink))]" />
              </div>
            </aside>

            {/* Content */}
            <div className="col-span-12 md:col-span-8">
              <Reveal>
                <h2
                  className="font-display mb-10 font-extrabold uppercase leading-[1.0] tracking-[-0.03em] text-foreground"
                  style={{ fontSize: "clamp(28px, 4vw, 56px)" }}
                >
                  {r.headline}
                </h2>
              </Reveal>
              <ServiceAccordion items={r.items} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
