import { Reveal } from "@/components/site/Reveal";
import { MediaPlaceholder } from "@/components/site/MediaPlaceholder";

const layers = [
  {
    glyph: "⚡",
    title: "Layer 01 — Automations",
    desc: "Fastest wins. Live in 48 hours to 2 weeks. Tasks eating your team's time — identified, automated, done.",
    media: "Automations reel",
  },
  {
    glyph: "⟳",
    title: "Layer 02 — Integrations",
    desc: "Your 12–15 tools connected. CRM, WhatsApp, email, invoicing, e-commerce — one data flow. No more copy-pasting.",
    media: "Integrations diagram",
  },
  {
    glyph: "◈",
    title: "Layer 03 — Custom AI + Tech",
    desc: "Custom AI models, mobile apps, document processing. The infrastructure that makes your business defensible.",
    media: "Custom AI case study",
  },
];

export function ZenzaiAbout() {
  return (
    <section className="border-t border-foreground/[0.08] px-6 py-20 md:px-16 md:py-28">
      <Reveal>
        <p className="font-mono-tech mb-6 text-[11px] uppercase tracking-[0.3em] text-foreground/50">
          Three Layers
        </p>
        <h2
          className="font-display mb-16 max-w-5xl font-bold uppercase leading-[0.95] tracking-[-0.03em]"
          style={{ fontSize: "clamp(34px, 5.5vw, 84px)" }}
        >
          Start with automations.
          <br />
          Add integrations.
          <br />
          <span className="text-electric">Build what doesn't exist yet.</span>
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6">
        {layers.map((l, i) => (
          <Reveal key={l.title} delay={(i + 1) as 1 | 2 | 3}>
            <article className="layer-card group flex h-full flex-col">
              <MediaPlaceholder
                aspect="4/5"
                kind="image"
                label={l.media}
                className="mb-6"
              />
              <div className="font-display mb-3 text-3xl text-electric">
                {l.glyph}
              </div>
              <h3 className="font-display mb-3 text-xl font-bold uppercase tracking-[-0.02em] md:text-2xl">
                {l.title}
              </h3>
              <p className="text-sm leading-relaxed text-foreground/70 md:text-base">
                {l.desc}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
