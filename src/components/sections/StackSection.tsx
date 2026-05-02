import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { GhostButton } from "@/components/ui/GhostButton";

const CARDS = [
  {
    num: "01",
    name: "Automated Sales Agents",
    desc: "24/7 lead qualification and appointment setting that speaks your brand voice. Never miss a lead — even when you're asleep.",
    tags: ["24/7 Active", "Lead Qual", "CRM Native"],
    bg1: "linear-gradient(135deg, #1a1a2e, #2d1b69)",
    bg2: "linear-gradient(135deg, #1e1a2e, #1b1d5e)",
    bg3: "linear-gradient(135deg, #2d1b69, #1a1a2e)",
  },
  {
    num: "02",
    name: "Operations Logic",
    desc: "Custom n8n workflows that connect your stack (CRM, Email, Slack) so data moves without you. Eliminate the copy-paste loop forever.",
    tags: ["n8n", "Slack", "Email"],
    bg1: "linear-gradient(135deg, #1a2e1a, #1b692d)",
    bg2: "linear-gradient(135deg, #1a2e20, #1b5c2d)",
    bg3: "linear-gradient(135deg, #1b692d, #1a2e1a)",
  },
  {
    num: "03",
    name: "Content Engines",
    desc: "Systems that turn one hour of your creativity into a month of multi-platform authority. Your content pipeline runs while you do real work.",
    tags: ["Multi-platform", "Auto-publish", "AI Voice"],
    bg1: "linear-gradient(135deg, #2e1a1a, #69211b)",
    bg2: "linear-gradient(135deg, #2e1e1a, #5e1b1d)",
    bg3: "linear-gradient(135deg, #69211b, #2e1a1a)",
  },
];

const N = CARDS.length;

const SECTION_HEADER = (
  <div style={{ maxWidth: 1100, margin: "0 auto", padding: "96px 24px 64px" }}>
    <FadeIn delay={0}>
      <p
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 12,
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          color: "var(--ring-2)",
          marginBottom: 24,
        }}
      >
        // CAPABILITIES
      </p>
    </FadeIn>
    <FadeIn delay={0.08}>
      <h2
        style={{
          fontFamily: "'Bricolage Grotesque', sans-serif",
          fontWeight: 800,
          fontSize: "clamp(2.5rem, 6vw, 5rem)",
          color: "#F0EEE8",
          lineHeight: 1.05,
          letterSpacing: "-0.02em",
          margin: 0,
        }}
      >
        What We Actually{" "}
        <span className="accent-heading">Deploy.</span>
      </h2>
    </FadeIn>
    <FadeIn delay={0.18}>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 10,
          marginTop: 28,
        }}
      >
        {CARDS.map((card) => (
          <span
            key={card.num}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "7px 16px",
              borderRadius: 9999,
              background: "rgba(240,238,232,0.04)",
              border: "1px solid rgba(240,238,232,0.1)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.07em",
              color: "rgba(240,238,232,0.55)",
            }}
          >
            <span
              style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontWeight: 800,
                fontSize: 11,
                letterSpacing: "0.05em",
                color: "var(--ring-2)",
              }}
            >
              {card.num}
            </span>
            {card.name}
          </span>
        ))}
      </div>
    </FadeIn>
  </div>
);

// Mobile: flat stacked cards, no sticky/scale
export function StackSection() {
  return (
    <>
      {/* Desktop: sticky stacking effect */}
      <section
        aria-label="Capabilities"
        className="hidden md:block"
        style={{
          background: "#0D0D0D",
          borderRadius: "50px 50px 0 0",
          marginTop: -1,
          position: "relative",
          zIndex: 10,
          /* overflow: clip (not hidden) — clips visually but does NOT create a scroll container,
             which means position:sticky on children still anchors to the viewport */
          overflow: "clip",
        }}
      >
        {SECTION_HEADER}
        <StickyStack />
        <div style={{ height: 96 }} />
      </section>

      {/* Mobile: flat cards, no sticky */}
      <section
        aria-label="Capabilities"
        className="block md:hidden"
        style={{
          background: "#0D0D0D",
          borderRadius: "40px 40px 0 0",
          marginTop: -1,
          position: "relative",
          zIndex: 10,
        }}
      >
        {SECTION_HEADER}
        <div style={{ display: "flex", flexDirection: "column", gap: 16, padding: "0 16px 80px" }}>
          {CARDS.map((card) => (
            <FadeIn key={card.num}>
              <CardContent card={card} />
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
}

function StickyStack() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div
      ref={containerRef}
      style={{ height: `${N * 100}vh`, position: "relative" }}
    >
      {CARDS.map((card, i) => (
        <StackCard key={card.num} card={card} i={i} scrollYProgress={scrollYProgress} />
      ))}
    </div>
  );
}

function StackCard({
  card,
  i,
  scrollYProgress,
}: {
  card: (typeof CARDS)[number];
  i: number;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  // Scale the card down as the next card slides over it — increased contrast so the effect is visible
  const scale = useTransform(scrollYProgress, [i / N, 1], [1, 1 - (N - 1 - i) * 0.05]);

  return (
    <motion.div
      style={{
        scale,
        position: "sticky",
        top: `${96 + i * 28}px`,
        zIndex: i + 1,
        height: "85vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: "0 24px",
        boxSizing: "border-box",
      }}
    >
      <CardContent card={card} />
    </motion.div>
  );
}

function CardContent({ card }: { card: (typeof CARDS)[number] }) {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: 1000,
        borderRadius: 40,
        border: "1px solid var(--border)",
        background: "#111111",
        padding: "32px",
        boxSizing: "border-box",
      }}
      className="md:p-10"
    >
      {/* Top row */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 24,
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        <div style={{ display: "flex", alignItems: "baseline", gap: 16 }}>
          <span
            className="hero-heading"
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 6vw, 5rem)",
              lineHeight: 1,
              display: "inline-block",
            }}
          >
            {card.num}
          </span>
          <span
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.2rem, 2.5vw, 2rem)",
              color: "#F0EEE8",
              lineHeight: 1.1,
            }}
          >
            {card.name}
          </span>
        </div>
        <GhostButton label="Learn More" href="/what-we-do/intelligence-zenzai" size="sm" />
      </div>

      {/* Tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 24 }}>
        {card.tags.map((tag) => (
          <span
            key={tag}
            className="liquid-glass"
            style={{
              borderRadius: 9999,
              padding: "4px 12px",
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 11,
              color: "rgba(240,238,232,0.7)",
              border: "1px solid rgba(240,238,232,0.08)",
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Image grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 3fr",
          gap: 12,
        }}
      >
        {/* Left: two stacked blocks */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div
            style={{
              borderRadius: 24,
              background: card.bg1,
              minHeight: "clamp(80px, 14vw, 200px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 11,
                color: "rgba(240,238,232,0.3)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              {card.num} · A
            </span>
          </div>
          <div
            style={{
              borderRadius: 24,
              background: card.bg2,
              minHeight: "clamp(100px, 18vw, 280px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(0.75rem, 1.2vw, 0.9rem)",
                color: "rgba(240,238,232,0.5)",
                textAlign: "center",
                maxWidth: 160,
                lineHeight: 1.5,
                padding: "0 16px",
              }}
            >
              {card.desc}
            </p>
          </div>
        </div>

        {/* Right: tall single block */}
        <div
          style={{
            borderRadius: 24,
            background: card.bg3,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "clamp(180px, 30vw, 480px)",
          }}
        >
          <span
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(3rem, 7vw, 7rem)",
              color: "rgba(240,238,232,0.05)",
              lineHeight: 1,
            }}
          >
            {card.num}
          </span>
        </div>
      </div>
    </div>
  );
}
