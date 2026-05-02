import type { ElementType } from "react";
import { motion } from "framer-motion";
import { AlertTriangle, TrendingDown, Zap } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { GhostButton } from "@/components/ui/GhostButton";
import { LazyBgVideo } from "@/components/ui/LazyBgVideo";

const PAIN_POINTS = [
  {
    Icon: AlertTriangle,
    title: "The Manual Grind",
    desc: "Every new client means more emails, more meetings, and more burnout. You're trading time for money with no escape ramp in sight.",
  },
  {
    Icon: TrendingDown,
    title: "The Revenue Ceiling",
    desc: "You can't grow because you are the engine. When you stop, the money stops. Your business needs you to survive — and that's a liability.",
  },
  {
    Icon: Zap,
    title: "The Paradigm Shift",
    desc: "Top 1% founders are moving from 'Hustle' to Agentic Logic. They're not working harder. They've built AI systems that work for them — 24/7, without burnout, at a fraction of the cost.",
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

const HEADING_WORDS_1 = ["You", "don't", "have", "a", "scaling", "problem."];
const HEADING_WORDS_2 = ["You", "have", "a"];
const HEADING_ACCENT = ["Systems", "problem."];

export function ProblemSection() {
  return (
    <section
      id="problem"
      style={{
        background: "#080808",
        padding: "96px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background video */}
      <LazyBgVideo src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260322_013248_a74099a8-be2b-4164-a823-eddd5e149fa1.mp4" />
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

      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 24px",
          position: "relative",
          zIndex: 2,
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
              marginBottom: 24,
            }}
          >
            // THE PROBLEM
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
            maxWidth: 800,
            margin: "0 0 20px",
          }}
        >
          <span style={{ display: "block" }}>
            {HEADING_WORDS_1.map((w, i) => (
              <BlurWord key={i} word={w} delay={0.1 + i * 0.07} />
            ))}
          </span>
          <span style={{ display: "block" }}>
            {HEADING_WORDS_2.map((w, i) => (
              <BlurWord key={i} word={w} delay={0.5 + i * 0.07} />
            ))}
            {HEADING_ACCENT.map((w, i) => (
              <motion.span
                key={i}
                className="accent-heading"
                initial={{ opacity: 0, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.71 + i * 0.09, ease: [0.25, 0.1, 0.25, 1] }}
                style={{ display: "inline-block" }}
              >
                {w}&nbsp;
              </motion.span>
            ))}
          </span>
        </h2>

        {/* Subtext */}
        <FadeIn delay={0.2}>
          <p
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(1rem, 2vw, 1.25rem)",
              color: "var(--text-secondary)",
              maxWidth: 600,
              marginBottom: 48,
              lineHeight: 1.6,
            }}
          >
            Most businesses fail to scale because they rely on Human Speed. You're stuck in the
            "Hustle" trap — working harder while the ceiling gets lower.
          </p>
        </FadeIn>

        {/* Pain points grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: 20,
          }}
        >
          {PAIN_POINTS.map((pt, i) => (
            <FadeIn key={pt.title} delay={0.3 + i * 0.1}>
              <PainCard {...pt} />
            </FadeIn>
          ))}
        </div>

        {/* Shift callout */}
        <FadeIn delay={0.5}>
          <div
            style={{
              marginTop: 32,
              background:
                "linear-gradient(135deg, rgba(43,58,134,0.08) 0%, rgba(104,112,189,0.05) 100%)",
              border: "1px solid rgba(43,58,134,0.2)",
              borderRadius: 16,
              padding: "24px 32px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 16,
            }}
          >
            <p
              style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(1rem, 2vw, 1.25rem)",
                color: "#F0EEE8",
                margin: 0,
              }}
            >
              Are you building a job — or building an architecture?
            </p>
            <GhostButton label="See How We Fix This" href="#services" size="sm" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function PainCard({
  Icon,
  title,
  desc,
}: {
  Icon: ElementType;
  title: string;
  desc: string;
}) {
  return (
    <div
      data-cursor="hover"
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border)",
        borderRadius: 24,
        padding: "28px 24px",
        transition: "border-color 300ms, transform 300ms, box-shadow 300ms",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = "rgba(43,58,134,0.3)";
        el.style.transform = "translateY(-2px)";
        el.style.boxShadow = "0 8px 32px rgba(43,58,134,0.08)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = "var(--border)";
        el.style.transform = "translateY(0)";
        el.style.boxShadow = "none";
      }}
    >
      <div
        style={{
          width: 40,
          height: 40,
          background: "rgba(43,58,134,0.1)",
          borderRadius: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Icon style={{ width: 20, height: 20, color: "var(--ring-2)" }} />
      </div>
      <h3
        style={{
          fontFamily: "'Bricolage Grotesque', sans-serif",
          fontWeight: 700,
          fontSize: "1.1rem",
          color: "#F0EEE8",
          marginTop: 16,
          marginBottom: 8,
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "0.875rem",
          color: "var(--text-secondary)",
          lineHeight: 1.65,
          margin: 0,
        }}
      >
        {desc}
      </p>
    </div>
  );
}
