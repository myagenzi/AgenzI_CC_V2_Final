import { Reveal } from "@/components/site/Reveal";
import { MediaPlaceholder } from "@/components/site/MediaPlaceholder";

const topics = [
  {
    category: "Field notes",
    title: "Why most AI pilots quietly die in 90 days.",
    date: "Mar 2026",
    media: "Article cover",
  },
  {
    category: "Playbook",
    title: "Automate the 40-message WhatsApp cycle first.",
    date: "Feb 2026",
    media: "Article cover",
  },
  {
    category: "Case study",
    title: "How one OCR pipeline saved 200 hours a month.",
    date: "Jan 2026",
    media: "Article cover",
  },
];

export function TopicsRow() {
  return (
    <section className="border-t border-foreground/[0.08] px-6 py-20 md:px-16 md:py-28">
      <Reveal>
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <p className="font-mono-tech mb-4 text-[11px] uppercase tracking-[0.3em] text-foreground/50">
              ▸ Topics
            </p>
            <h2
              className="font-display font-bold uppercase leading-[0.95] tracking-[-0.03em]"
              style={{ fontSize: "clamp(32px, 5vw, 72px)" }}
            >
              From the build log.
            </h2>
          </div>
          <span className="font-mono-tech hidden text-[11px] uppercase tracking-[0.25em] text-foreground/50 md:inline">
            03 articles
          </span>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {topics.map((t, i) => (
          <Reveal key={t.title} delay={(i + 1) as 1 | 2 | 3}>
            <article className="topic-card group flex h-full flex-col">
              <MediaPlaceholder
                aspect="16/9"
                kind="image"
                label={t.media}
                className="mb-5"
              />
              <p className="font-mono-tech mb-2 text-[10px] uppercase tracking-[0.3em] text-electric">
                {t.category}
              </p>
              <h3 className="font-display text-lg font-bold uppercase leading-tight tracking-[-0.015em] md:text-xl">
                {t.title}
              </h3>
              <p className="font-mono-tech mt-3 text-[10px] uppercase tracking-[0.25em] text-foreground/50">
                {t.date}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
