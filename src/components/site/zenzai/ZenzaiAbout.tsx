import { useRef } from "react";
import { MediaPlaceholder } from "@/components/site/MediaPlaceholder";
import { useScrollSetup, gsap } from "@/lib/scroll";

const layers = [
  {
    glyph: "⚡",
    title: "Layer 01 — Automations",
    desc: "Fastest wins. Live in 48 hours to 2 weeks. Tasks eating your team's time — identified, automated, done.",
    media: "Layer 01 visual",
    grid: "md:col-span-5 md:row-start-1",
    parallax: -60,
    rot: 35,
  },
  {
    glyph: "⟳",
    title: "Layer 02 — Integrations",
    desc: "Your 12–15 tools connected. CRM, WhatsApp, email, invoicing, e-commerce — one data flow. No more copy-pasting.",
    media: "Layer 02 visual",
    grid: "md:col-span-4 md:col-start-9 md:row-start-1 md:mt-32",
    parallax: 40,
    rot: -45,
  },
  {
    glyph: "◈",
    title: "Layer 03 — Custom AI + Tech",
    desc: "Custom AI models, mobile apps, document processing. The infrastructure that makes your business defensible.",
    media: "Layer 03 visual",
    grid: "md:col-span-6 md:col-start-4 md:row-start-2 md:-mt-16",
    parallax: -30,
    rot: 60,
  },
];

export function ZenzaiAbout() {
  const ref = useRef<HTMLElement | null>(null);

  useScrollSetup(ref, (el) => {
    // Headline reveal
    const head = el.querySelector<HTMLElement>("[data-about-head]");
    if (head) {
      gsap.fromTo(
        head,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 75%" },
        },
      );
    }

    // Per-card scrubbed parallax + glyph rotation
    el.querySelectorAll<HTMLElement>("[data-card]").forEach((card) => {
      const media = card.querySelector<HTMLElement>("[data-media]");
      const glyph = card.querySelector<HTMLElement>("[data-glyph]");
      const py = parseFloat(card.dataset.parallax || "0");
      const rot = parseFloat(card.dataset.rot || "0");

      if (media) {
        gsap.fromTo(
          media,
          { y: -py },
          {
            y: py,
            ease: "none",
            scrollTrigger: { trigger: card, start: "top bottom", end: "bottom top", scrub: 1 },
          },
        );
      }
      if (glyph) {
        gsap.fromTo(
          glyph,
          { rotate: -rot },
          {
            rotate: rot,
            ease: "none",
            scrollTrigger: { trigger: card, start: "top bottom", end: "bottom top", scrub: 1 },
          },
        );
      }
      // Card initial reveal
      gsap.fromTo(
        card,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: card, start: "top 85%" },
        },
      );
    });
  }, []);

  return (
    <section
      ref={ref}
      className="border-t border-foreground/[0.08] px-6 py-20 md:px-16 md:py-28"
    >
      <div data-about-head>
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
      </div>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-6">
        {layers.map((l) => (
          <article
            key={l.title}
            data-card
            data-parallax={l.parallax}
            data-rot={l.rot}
            className={`layer-card group relative flex h-full flex-col ${l.grid}`}
          >
            <div data-media className="will-change-transform">
              <MediaPlaceholder
                aspect="4/5"
                kind="image"
                label={l.media}
                className="mb-6"
              />
            </div>
            <div
              data-glyph
              className="font-display mb-3 text-5xl text-electric will-change-transform"
              aria-hidden
            >
              {l.glyph}
            </div>
            <h3 className="font-display mb-3 text-xl font-bold uppercase tracking-[-0.02em] md:text-2xl">
              {l.title}
            </h3>
            <p className="text-sm leading-relaxed text-foreground/70 md:text-base">
              {l.desc}
            </p>
            <span className="layer-hairline mt-6 block h-px w-0 bg-electric transition-[width] duration-700 group-hover:w-full" />
          </article>
        ))}
      </div>
    </section>
  );
}
