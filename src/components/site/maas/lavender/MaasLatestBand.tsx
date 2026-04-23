import { MediaPlaceholder } from "@/components/site/MediaPlaceholder";
import { Reveal } from "@/components/site/Reveal";

const articles = [
  {
    date: "Apr 2026",
    title: "Why most marketing dashboards measure decoration, not revenue.",
    excerpt: "If your weekly report leads with impressions, you're already losing.",
  },
  {
    date: "Mar 2026",
    title: "The 97% problem: where your paid traffic actually leaks.",
    excerpt: "Three retargeting plays that turn lukewarm intent into closed pipeline.",
  },
  {
    date: "Feb 2026",
    title: "Founders' brand engine: one conversation, one month of content.",
    excerpt: "How thirty minutes of recording becomes the engine for your category authority.",
  },
];

export function MaasLatestBand() {
  return (
    <section className="relative overflow-hidden px-6 py-20 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1200px]">
        {/* Oversized headline + ghost echo */}
        <div className="relative mb-16">
          <span
            className="lav-ghost-text pointer-events-none absolute -left-2 top-6 z-0 select-none"
            style={{ fontSize: "clamp(80px, 13vw, 220px)", opacity: 0.35 }}
            aria-hidden
          >
            Insights
          </span>
          <Reveal>
            <div className="relative z-10 flex flex-wrap items-baseline gap-x-6 gap-y-2">
              <h2
                className="font-display font-extrabold leading-none tracking-[-0.04em] text-foreground"
                style={{ fontSize: "clamp(60px, 11vw, 180px)" }}
              >
                Latest
              </h2>
              <h2
                className="font-display font-extrabold leading-none tracking-[-0.04em] text-primary"
                style={{ fontSize: "clamp(60px, 11vw, 180px)" }}
              >
                Reads
              </h2>
            </div>
          </Reveal>

          {/* Decorative floating tile — positioned out of headline flow */}
          <div
            className="float-tile pointer-events-none absolute -top-4 right-2 hidden w-32 md:block lg:w-40"
            style={{ ["--rot" as string]: "8deg" }}
            aria-hidden
          >
            <div style={{ transform: "rotate(8deg)" }}>
              <MediaPlaceholder
                aspect="1/1"
                kind="image"
                label="Editorial tile"
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {articles.map((a, i) => (
            <Reveal key={a.title} delay={(i % 4) as 0 | 1 | 2 | 3}>
              <article className="glass-lavender flex h-full flex-col overflow-hidden rounded-[20px]">
                <MediaPlaceholder aspect="4/5" kind="image" label={a.title} className="rounded-none" />
                <div className="flex flex-1 flex-col p-6">
                  <span className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-primary">
                    {a.date}
                  </span>
                  <h3
                    className="font-display mt-3 font-bold uppercase leading-tight tracking-[-0.02em] text-foreground"
                    style={{ fontSize: "clamp(16px, 1.5vw, 20px)" }}
                  >
                    {a.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground">{a.excerpt}</p>
                  <a
                    href="#"
                    className="story-link mt-5 inline-block text-[12px] font-semibold uppercase tracking-[0.2em] text-primary"
                  >
                    Read →
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
