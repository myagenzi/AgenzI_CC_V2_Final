import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { LazyBgVideo } from "@/components/ui/LazyBgVideo";

const GIFS = [
  "https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif",
  "https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif",
  "https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif",
  "https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif",
  "https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif",
  "https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif",
  "https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif",
  "https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif",
];

interface TrailItem {
  id: number;
  src: string;
  x: number;
  y: number;
  rotation: number;
}

function BlurWord({ word, delay }: { word: string; delay: number }) {
  return (
    <motion.span
      initial={{ opacity: 0, filter: "blur(12px)" }}
      whileInView={{ opacity: 1, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] }}
      style={{ display: "inline-block" }}
    >
      {word}&nbsp;
    </motion.span>
  );
}

const HEADING_WORDS = ["Ready", "to", "see", "your", "business", "run", "itself?"];

export function CTASection() {
  const sectionRef = useRef<HTMLElement>(null);
  const lastSpawnRef = useRef(0);
  const [trail, setTrail] = useState<TrailItem[]>([]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const now = Date.now();
    if (now - lastSpawnRef.current < 80) return;
    lastSpawnRef.current = now;

    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotation = (Math.random() - 0.5) * 20;
    const src = GIFS[Math.floor(Math.random() * GIFS.length)];
    const id = now + Math.random();

    setTrail((prev) => [...prev.slice(-11), { id, src, x, y, rotation }]);

    setTimeout(() => {
      setTrail((prev) => prev.filter((item) => item.id !== id));
    }, 1050);
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => setTrail([]);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      onMouseMove={handleMouseMove}
      style={{
        background: "#080808",
        padding: "96px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background video */}
      <LazyBgVideo src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260411_104032_69319010-2458-492b-b04d-b40a5dfa4482.mp4" />
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.6)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* Mouse trail images */}
      <AnimatePresence>
        {trail.map((item) => (
          <motion.img
            key={item.id}
            src={item.src}
            alt=""
            initial={{ opacity: 1, scale: 1, rotate: item.rotation }}
            animate={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{
              position: "absolute",
              left: item.x - 40,
              top: item.y - 27.5,
              width: 80,
              height: 55,
              borderRadius: 8,
              objectFit: "cover",
              pointerEvents: "none",
              zIndex: 2,
            }}
          />
        ))}
      </AnimatePresence>

      {/* Content */}
      <div
        style={{
          maxWidth: 800,
          margin: "0 auto",
          padding: "0 24px",
          textAlign: "center",
          position: "relative",
          zIndex: 3,
        }}
      >
        {/* Eyebrow */}
        <FadeIn delay={0}>
          <p
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 12,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "var(--ring-2)",
              marginBottom: 32,
            }}
          >
            // THE MOMENT OF LEVERAGE
          </p>
        </FadeIn>

        {/* Heading */}
        <h2
          style={{
            fontFamily: "'Bricolage Grotesque', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            color: "#F0EEE8",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            margin: "0 0 24px",
          }}
        >
          {HEADING_WORDS.map((w, i) => (
            <BlurWord key={i} word={w} delay={i * 0.08} />
          ))}
        </h2>

        {/* Subtext */}
        <FadeIn delay={0.2}>
          <p
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(1rem, 2vw, 1.25rem)",
              color: "var(--text-secondary)",
              lineHeight: 1.65,
              margin: "0 0 40px",
            }}
          >
            The global market is moving toward Compute-heavy businesses. Don't get left behind with a
            manual model.
          </p>
        </FadeIn>

        {/* CTA */}
        <FadeIn delay={0.3}>
          <div data-cursor="hover">
            <PrimaryButton
              label="Book Your 15-Minute System Audit →"
              href="/book-audit"
              size="lg"
            />
          </div>
        </FadeIn>

        {/* Footnote */}
        <FadeIn delay={0.4}>
          <p
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 13,
              color: "var(--text-muted)",
              marginTop: 16,
            }}
          >
            No pitch. Just a map of what you can automate in the next 30 days.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
