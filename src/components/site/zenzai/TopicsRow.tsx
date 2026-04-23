import { Reveal } from "@/components/site/Reveal";
import { MediaPlaceholder } from "@/components/site/MediaPlaceholder";

const topics = [
  {
    category: "Build Log",
    title: "Why most AI pilots quietly die in 90 days.",
    date: "Field note · TBD",
    media: "Field note cover",
  },
  {
    category: "Method",
    title: "The 3-layer model: why we never lead with custom AI.",
    date: "Method · TBD",
    media: "Method illustration",
  },
  {
    category: "Case Note",
    title: "What changed when WhatsApp started talking to the CRM.",
    date: "Case note · TBD",
    media: "Case note cover",
  },
];

export function TopicsRow() {
  return (
    <section className="border-t border-foreground/[0.08] px-6 py-20 md:px-16 md:py-28">
      <Reveal>
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <p className="font-mono-tech mb-4 text-[11px] uppercase tracking-[0.3em] text-foreground/50">
              ▸ Field Notes
            </p>
            <h2
              className="font-display font-bold uppercase leading-[0.95] tracking-[-0.03em]"
              style={{ fontSize: "clamp(32px, 5vw, 72px)" }}
            >
              How we think about AI in the wild.
            </h2>
          </div>
          <span className="font-mono-tech hidden text-[11px] uppercase tracking-[0.25em] text-foreground/50 md:inline">
            03 entries
          </span>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {topics.map((t, i) => (
          <Reveal key={t.title} delay={(i + 1) as 1 | 2 | 3}>
            <article className="topic-card group flex h-full flex-col">
              <div className="topic-media overflow-hidden">
                <MediaPlaceholder
                  aspect="16/9"
                  kind="image"
                  label={t.media}
                  className="mb-5 transition-transform duration-500 group-hover:scale-[1.015]"
                />
              </div>
              <p className="font-mono-tech mb-2 text-[10px] uppercase tracking-[0.3em] text-electric">
                <span className="topic-cat-underline">{t.category}</span>
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
