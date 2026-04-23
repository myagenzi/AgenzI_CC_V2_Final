import { Reveal } from "@/components/site/Reveal";
import { MediaPlaceholder } from "@/components/site/MediaPlaceholder";

const projects = [
  { title: "WhatsApp AI for D2C brand", year: "2025", tag: "Automation", media: "Project hero", span: true },
  { title: "Unified CRM + Ops dashboard", year: "2025", tag: "Integration", media: "Dashboard reel" },
  { title: "OCR pipeline for invoices", year: "2024", tag: "Custom AI", media: "OCR demo" },
  { title: "Booking system for clinics", year: "2024", tag: "Automation", media: "Booking flow" },
  { title: "Custom mobile app — logistics", year: "2024", tag: "Tech", media: "App walkthrough" },
];

export function ProjectsRail() {
  return (
    <section className="border-t border-foreground/[0.08] px-6 py-20 md:px-16 md:py-28">
      <Reveal>
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <p className="font-mono-tech mb-4 text-[11px] uppercase tracking-[0.3em] text-foreground/50">
              ▸ Projects
            </p>
            <h2
              className="font-display font-bold uppercase leading-[0.95] tracking-[-0.03em]"
              style={{ fontSize: "clamp(32px, 5vw, 72px)" }}
            >
              Systems we've built.
            </h2>
          </div>
          <span className="font-mono-tech hidden text-[11px] uppercase tracking-[0.25em] text-foreground/50 md:inline">
            05 case studies
          </span>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={((i % 3) + 1) as 1 | 2 | 3}>
            <article
              className={`project-tile group flex h-full flex-col ${
                p.span ? "md:col-span-2" : ""
              }`}
            >
              <MediaPlaceholder
                aspect="16/9"
                kind="image"
                label={p.media}
                className="mb-4 transition-transform duration-500 group-hover:scale-[1.01]"
              />
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-display text-base font-bold uppercase tracking-[-0.015em] md:text-lg">
                  {p.title}
                </h3>
                <span className="font-mono-tech shrink-0 text-[10px] uppercase tracking-[0.25em] text-foreground/50">
                  {p.year}
                </span>
              </div>
              <p className="font-mono-tech mt-1 text-[10px] uppercase tracking-[0.25em] text-electric">
                {p.tag}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
