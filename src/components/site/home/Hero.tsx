import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { GhostButton } from "@/components/ui/GhostButton";

const HERO_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4";
const FADE_MS = 500;
const FADE_OUT_LEAD = 0.55;

const STATS = [
  { num: 20, suffix: "+", label: "Hours reclaimed per week" },
  { num: 40, suffix: "%", label: "Lead conversion increase" },
  { num: 80, suffix: "%", label: "Support queries automated" },
  { num: 30, suffix: "D", label: "Automation map in your hands" },
];

// ── rAF-driven background video (no CSS transitions) ────────────────────────
function FadingVideo({ src }: { src: string }) {
  const vidRef = useRef<HTMLVideoElement>(null);
  const rafRef = useRef<number>(0);
  const state = useRef<{ phase: "in" | "hold" | "out"; start: number }>({
    phase: "in",
    start: 0,
  });

  useEffect(() => {
    const vid = vidRef.current;
    if (!vid) return;
    vid.style.opacity = "0";

    function tick(now: number) {
      rafRef.current = requestAnimationFrame(tick);
      if (!vid) return;
      const { phase, start } = state.current;
      const elapsed = now - start;

      if (phase === "in") {
        const t = Math.min(elapsed / FADE_MS, 1);
        vid.style.opacity = String(t);
        if (t >= 1) state.current = { phase: "hold", start: now };
      } else if (phase === "hold") {
        vid.style.opacity = "1";
        if (vid.duration && !isNaN(vid.duration) && vid.duration - vid.currentTime <= FADE_OUT_LEAD) {
          state.current = { phase: "out", start: now };
        }
      } else {
        const t = Math.min(elapsed / (FADE_OUT_LEAD * 1000), 1);
        vid.style.opacity = String(1 - t);
      }
    }

    const onPlay = () => {
      state.current = { phase: "in", start: performance.now() };
      vid.style.opacity = "0";
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(tick);
    };

    // detect loop restart (currentTime jumps back near 0)
    const onSeeked = () => {
      if (vid.currentTime < 0.5) {
        state.current = { phase: "in", start: performance.now() };
        vid.style.opacity = "0";
      }
    };

    vid.addEventListener("play", onPlay);
    vid.addEventListener("seeked", onSeeked);
    return () => {
      vid.removeEventListener("play", onPlay);
      vid.removeEventListener("seeked", onSeeked);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <video
      ref={vidRef}
      src={src}
      autoPlay
      muted
      loop
      playsInline
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        opacity: 0,
      }}
    />
  );
}

// ── Per-word blur-in for gradient text lines ─────────────────────────────────
function BlurLine({
  words,
  gradientClass,
  baseDelay = 0,
}: {
  words: string[];
  gradientClass: "hero-heading" | "accent-heading";
  baseDelay?: number;
}) {
  return (
    <>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className={gradientClass}
          initial={{ opacity: 0, filter: "blur(14px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{
            duration: 0.7,
            delay: baseDelay + i * 0.09,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          style={{ display: "inline-block" }}
        >
          {word}&nbsp;
        </motion.span>
      ))}
    </>
  );
}

// ── IntersectionObserver + rAF count-up stat ─────────────────────────────────
function CountStat({ num, suffix, label }: { num: number; suffix: string; label: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const duration = 1600;
          function tick(now: number) {
            const t = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - t, 3);
            setCount(Math.round(eased * num));
            if (t < 1) requestAnimationFrame(tick);
          }
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [num]);

  return (
    <div ref={ref}>
      <div
        style={{
          fontFamily: "'Bricolage Grotesque', sans-serif",
          fontSize: "clamp(28px, 3.2vw, 44px)",
          fontWeight: 800,
          lineHeight: 1,
          letterSpacing: "-0.03em",
          color: "#F0EEE8",
        }}
      >
        {count}
        {suffix}
      </div>
      <div
        style={{
          marginTop: 6,
          fontSize: 12,
          lineHeight: 1.35,
          color: "rgba(240,238,232,0.5)",
          fontFamily: "'Space Grotesk', sans-serif",
        }}
      >
        {label}
      </div>
    </div>
  );
}

// ── Circular video icon for HUMAN + AI row ───────────────────────────────────
function VideoIcon({ src, label }: { src: string; label: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 5 }}>
      <div
        style={{
          width: 44,
          height: 44,
          borderRadius: "50%",
          overflow: "hidden",
          border: "1.5px solid rgba(240,238,232,0.18)",
          flexShrink: 0,
        }}
      >
        <video
          src={src}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <span
        style={{
          fontSize: 9,
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 700,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "rgba(240,238,232,0.4)",
        }}
      >
        {label}
      </span>
    </div>
  );
}

// ── Hero ─────────────────────────────────────────────────────────────────────
export function Hero() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="top"
      style={{
        position: "relative",
        height: "100vh",
        minHeight: 600,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        background: "#080808",
      }}
    >
      {/* LAYER 0 — video */}
      <FadingVideo src={HERO_VIDEO} />

      {/* LAYER 1 — gradient overlay */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(8,8,8,0.30) 0%, rgba(8,8,8,0.10) 35%, rgba(8,8,8,0.55) 70%, rgba(8,8,8,0.96) 100%)",
          zIndex: 1,
        }}
      />

      {/* LAYER 2 — content (bottom-anchored, top-cleared past fixed navbar) */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          /* 64px navbar + 24px buffer = 88px clearance so content never slides behind header */
          padding: "88px 24px 72px",
          maxWidth: 1280,
          margin: "0 auto",
          width: "100%",
          boxSizing: "border-box",
        }}
        className="lg:px-10"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            marginBottom: 20,
            padding: "6px 14px",
            borderRadius: 9999,
            background: "rgba(255,255,255,0.05)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            border: "1px solid rgba(240,238,232,0.1)",
            width: "fit-content",
          }}
        >
          <span
            style={{
              display: "inline-block",
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "var(--ring-2)",
              flexShrink: 0,
            }}
          />
          <span
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "rgba(240,238,232,0.65)",
            }}
          >
            AI-Powered Business Systems · Built for Scale
          </span>
        </motion.div>

        {/* Headline */}
        <h1
          style={{
            margin: "0 0 18px",
            padding: 0,
            fontFamily: "'Bricolage Grotesque', sans-serif",
            fontSize: "clamp(1.9rem, 7.2vw, 92px)",
            fontWeight: 800,
            lineHeight: 1.0,
            letterSpacing: "-0.04em",
          }}
        >
          <span style={{ display: "block" }}>
            <BlurLine
              words={["Stop", "Being", "the", "Bottleneck."]}
              gradientClass="hero-heading"
              baseDelay={0.15}
            />
          </span>
          <span style={{ display: "block" }}>
            <BlurLine
              words={["Become", "the", "Architect."]}
              gradientClass="accent-heading"
              baseDelay={0.47}
            />
          </span>
        </h1>

        {/* HUMAN + AI row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.82, ease: [0.25, 0.1, 0.25, 1] }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginBottom: 18,
          }}
        >
          <VideoIcon src={HERO_VIDEO} label="Human" />
          <span
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 13,
              fontWeight: 500,
              color: "rgba(240,238,232,0.25)",
            }}
          >
            +
          </span>
          <VideoIcon src={HERO_VIDEO} label="AI" />
          <div
            style={{
              width: 1,
              height: 28,
              background: "rgba(240,238,232,0.1)",
              margin: "0 6px",
            }}
          />
          <span
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 11,
              color: "rgba(240,238,232,0.35)",
              letterSpacing: "0.04em",
            }}
          >
            Human Intelligence × Machine Execution
          </span>
        </motion.div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.88, ease: [0.25, 0.1, 0.25, 1] }}
          style={{
            margin: "0 0 28px",
            maxWidth: 520,
            fontSize: "clamp(15px, 1.5vw, 18px)",
            lineHeight: 1.65,
            color: "rgba(240,238,232,0.68)",
            fontFamily: "'Space Grotesk', sans-serif",
          }}
        >
          We build custom AI-powered systems that automate your operations, scale your revenue, and
          remove manual friction. Get the leverage of a 50-person team with the overhead of a
          solopreneur.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 12, marginBottom: 44 }}
        >
          <PrimaryButton label="Get My Free Strategy Call →" href="/book-audit" size="md" />
          <GhostButton label="Watch a 2-Minute Demo ↓" href="#services" size="md" />
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1, ease: [0.25, 0.1, 0.25, 1] }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "16px 24px",
            paddingTop: 24,
            borderTop: "1px solid rgba(240,238,232,0.08)",
          }}
          className="sm:grid-cols-4"
        >
          {STATS.map((s) => (
            <CountStat key={s.label} {...s} />
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        aria-label="Scroll down"
        aria-hidden="true"
        animate={{ opacity: scrolled ? 0 : 1 }}
        transition={{ duration: 0.3 }}
        style={{
          position: "absolute",
          bottom: 28,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 6,
          pointerEvents: "none",
        }}
      >
        <span
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 9,
            fontWeight: 600,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "rgba(240,238,232,0.28)",
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: 1,
            height: 36,
            overflow: "hidden",
            position: "relative",
          }}
        >
          <div
            className="animate-scroll-down"
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to bottom, rgba(240,238,232,0.35), transparent)",
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}
