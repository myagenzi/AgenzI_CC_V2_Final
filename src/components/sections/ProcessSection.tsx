import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Hls from "hls.js";
import { Search, Cpu, Zap } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

const STEPS = [
  {
    num: "01",
    badge: "Analyze",
    title: "Map Your Friction Points",
    label: "Analyze:",
    desc: "We map your friction points and manual 'time-sinks.' No jargon. No overwhelm. Just a clear picture of what's slowing you down and what can be fixed immediately.",
    Icon: Search,
  },
  {
    num: "02",
    badge: "Architect",
    title: "Build Your Digital Army",
    label: "Architect:",
    desc: "We architect your 'Digital Army' — AI agents, automated workflows, and knowledge systems that work together as one integrated engine. Human strategy meets AI execution.",
    Icon: Cpu,
  },
  {
    num: "03",
    badge: "Automate",
    title: "You Become the Architect",
    label: "Automate:",
    desc: "The system goes live. You stop managing tasks and start steering the business. No chasing. No coordination. No stitching tools. You see the output.",
    Icon: Zap,
  },
];

function BlurWord({ word, delay }: { word: string; delay: number }) {
  return (
    <motion.span
      initial={{ opacity: 0, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] }}
      style={{ display: "inline-block" }}
    >
      {word}&nbsp;
    </motion.span>
  );
}

const HEADING_1 = ["The"];
const HEADING_1_ACCENT = ["Architecture"];
const HEADING_2 = ["of", "Modern", "Business."];

const HLS_SRC = "https://stream.mux.com/tLkHO1qZoaaQOUeVWo8hEBeGQfySP02EPS02BmnNFyXys.m3u8";

export function ProcessSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section) return;

    let hls: Hls | null = null;
    let started = false;

    const start = () => {
      if (started) return;
      started = true;
      if (Hls.isSupported()) {
        hls = new Hls({ autoStartLoad: true });
        hls.loadSource(HLS_SRC);
        hls.attachMedia(video);
      } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
        video.src = HLS_SRC;
        video.play().catch(() => {});
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          start();
          observer.disconnect();
        }
      },
      { rootMargin: "400px" },
    );
    observer.observe(section);

    return () => {
      observer.disconnect();
      hls?.destroy();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      style={{
        background: "#080808",
        padding: "96px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="none"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      />
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
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 2 }}>
        {/* Eyebrow */}
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
            // THE ARCHITECTURE
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
            margin: "0 0 20px",
          }}
        >
          {HEADING_1.map((w, i) => (
            <BlurWord key={i} word={w} delay={0.08 + i * 0.07} />
          ))}
          {HEADING_1_ACCENT.map((w, i) => (
            <motion.span
              key={i}
              className="accent-heading"
              initial={{ opacity: 0, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.09, ease: [0.25, 0.1, 0.25, 1] }}
              style={{ display: "inline-block" }}
            >
              {w}&nbsp;
            </motion.span>
          ))}
          {HEADING_2.map((w, i) => (
            <BlurWord key={i} word={w} delay={0.24 + i * 0.07} />
          ))}
        </h2>

        {/* Subtext */}
        <FadeIn delay={0.15}>
          <p
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(1rem, 2vw, 1.25rem)",
              color: "var(--text-secondary)",
              maxWidth: 600,
              marginBottom: 64,
              lineHeight: 1.6,
            }}
          >
            Three phases. One transformation. From bottleneck to architect in 30 days.
          </p>
        </FadeIn>

        {/* Steps — horizontal flow on md+, vertical on mobile */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: 0,
          }}
          className="flex-col md:flex-row"
        >
          {STEPS.map((step, i) => (
            <StepCard key={step.num} step={step} i={i} isLast={i === STEPS.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StepCard({
  step,
  i,
  isLast,
}: {
  step: (typeof STEPS)[number];
  i: number;
  isLast: boolean;
}) {
  return (
    <FadeIn delay={0.2 + i * 0.2}>
      <div style={{ display: "flex", alignItems: "flex-start", gap: 0, flex: 1 }}>
        {/* Card content */}
        <div
          style={{
            flex: 1,
            maxWidth: 320,
            display: "flex",
            flexDirection: "column",
            gap: 16,
            padding: "0 0 32px",
          }}
          className="md:pb-0"
        >
          {/* Icon */}
          <div
            style={{
              width: 48,
              height: 48,
              background: "rgba(43,58,134,0.08)",
              borderRadius: 12,
              border: "1px solid rgba(43,58,134,0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <step.Icon style={{ width: 22, height: 22, color: "var(--ring-2)" }} />
          </div>

          {/* Number */}
          <div
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontWeight: 800,
              fontSize: "4rem",
              color: "rgba(240,238,232,0.06)",
              lineHeight: 1,
            }}
          >
            {step.num}
          </div>

          {/* Name */}
          <h3
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontWeight: 700,
              fontSize: "1.5rem",
              color: "#F0EEE8",
              margin: 0,
            }}
          >
            {step.title}
          </h3>

          {/* Description */}
          <p
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "0.9rem",
              color: "var(--text-secondary)",
              lineHeight: 1.65,
              margin: 0,
            }}
          >
            <span style={{ color: "var(--ring-2)", fontWeight: 600 }}>{step.label}</span>{" "}
            {step.desc}
          </p>
        </div>

        {/* Connector line — hidden on last item and on mobile */}
        {!isLast && (
          <div
            className="hidden md:flex"
            style={{
              flex: 1,
              alignItems: "center",
              paddingTop: 64,
              paddingLeft: 16,
              paddingRight: 16,
            }}
          >
            <div
              style={{
                width: "100%",
                height: 1,
                background: "rgba(240,238,232,0.08)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1.2, delay: 0.4 + i * 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                style={{
                  position: "absolute",
                  inset: 0,
                  background: `linear-gradient(90deg, var(--ring-1), transparent)`,
                  transformOrigin: "left",
                }}
              />
            </div>
          </div>
        )}
      </div>
    </FadeIn>
  );
}
