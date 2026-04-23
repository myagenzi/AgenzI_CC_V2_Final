import { Reveal } from "@/components/site/Reveal";
import { MediaPlaceholder } from "@/components/site/MediaPlaceholder";

type Tile = {
  span: string;
  aspect: "21/9" | "16/9" | "4/5" | "1/1" | "2/1";
  label: string;
  title: string;
  meta: string;
};

const tiles: Tile[] = [
  {
    span: "md:col-span-7 md:row-span-2",
    aspect: "16/9",
    label: "Hero case",
    title: "WhatsApp AI · D2C beauty brand",
    meta: "2025 · Automation",
  },
  {
    span: "md:col-span-5",
    aspect: "16/9",
    label: "Integration map",
    title: "CRM ↔ WhatsApp ↔ Tally",
    meta: "2025 · Integration",
  },
  {
    span: "md:col-span-5",
    aspect: "16/9",
    label: "OCR pipeline",
    title: "OCR pipeline for invoice processing",
    meta: "2025 · Custom AI",
  },
  {
    span: "md:col-span-4",
    aspect: "1/1",
    label: "Booking flow",
    title: "Booking + reminders · clinic chain",
    meta: "2024 · Automation",
  },
  {
    span: "md:col-span-8",
    aspect: "21/9",
    label: "Forecasting model",
    title: "Custom forecasting model · D2C",
    meta: "2024 · Custom AI",
  },
];

export function ProjectsRail() {
  return (
    <section className="border-t border-foreground/[0.08] px-6 py-20 md:px-16 md:py-28">
      <Reveal>
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <p className="font-mono-tech mb-4 text-[11px] uppercase tracking-[0.3em] text-foreground/50">
              ▸ Build Log
            </p>
            <h2
              className="font-display font-bold uppercase leading-[0.95] tracking-[-0.03em]"
              style={{ fontSize: "clamp(32px, 5vw, 72px)" }}
            >
              Systems we've shipped.
            </h2>
            <p className="mt-4 max-w-xl text-sm text-foreground/60 md:text-base">
              Selected automations, integrations, and custom builds. Real projects, redacted client names.
            </p>
          </div>
          <span className="font-mono-tech hidden text-[11px] uppercase tracking-[0.25em] text-foreground/50 md:inline">
            05 case studies
          </span>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 gap-6 md:auto-rows-[minmax(180px,auto)] md:grid-cols-12">
        {tiles.map((t, i) => (
          <Reveal key={t.title} delay={((i % 3) + 1) as 1 | 2 | 3}>
            <article className={`project-tile group flex h-full flex-col ${t.span}`}>
              <div className="overflow-hidden">
                <MediaPlaceholder
                  aspect={t.aspect}
                  kind="image"
                  label={t.label}
                  className="transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <div className="mt-4 flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-display text-base font-bold uppercase tracking-[-0.015em] md:text-lg">
                    <span className="project-underline">{t.title}</span>
                  </h3>
                  <p className="font-mono-tech mt-1 text-[10px] uppercase tracking-[0.25em] text-electric">
                    {t.meta}
                  </p>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
