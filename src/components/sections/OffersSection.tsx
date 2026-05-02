import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { LazyBgVideo } from "@/components/ui/LazyBgVideo";

const SERVICES = [
  {
    num: "01",
    name: "Automated Sales Agents",
    desc: "24/7 lead qualification and appointment setting that speaks your brand voice. Never miss a lead — even when you're asleep.",
    tags: ["24/7 Active", "Brand Voice", "CRM Native"],
  },
  {
    num: "02",
    name: "Operations Logic",
    desc: "Custom n8n workflows that connect your stack (CRM, Email, Slack) so data moves without you. Eliminate the copy-paste loop forever.",
    tags: ["n8n", "Slack", "Email"],
  },
  {
    num: "03",
    name: "Content Engines",
    desc: "Systems that turn one hour of your creativity into a month of multi-platform authority. Your content pipeline runs while you do real work.",
    tags: ["Multi-platform", "Auto-publish", "AI Voice"],
  },
  {
    num: "04",
    name: "Client Concierge",
    desc: "AI-driven support that handles 80% of queries instantly. Your clients get answers — you get your time back.",
    tags: ["80% Auto-resolved", "Instant Responses", "24/7 Support"],
  },
];

export function OffersSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section
      id="services"
      style={{
        background: "#0D0D0D",
        padding: "96px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <LazyBgVideo src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260324_024928_1efd0b0d-6c02-45a8-8847-1030900c4f63.mp4" />
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
            // THE SYSTEM
          </p>
        </FadeIn>

        {/* Heading */}
        <FadeIn delay={0.08}>
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
            Concrete Systems.{" "}
            <span className="accent-heading">Tangible Results.</span>
          </h2>
        </FadeIn>

        {/* Subtext */}
        <FadeIn delay={0.16}>
          <p
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(1rem, 2vw, 1.25rem)",
              color: "var(--text-secondary)",
              maxWidth: 600,
              marginBottom: 56,
              lineHeight: 1.6,
            }}
          >
            We don't just "give advice." We deploy functional infrastructure that runs your business
            while you focus on what only you can do.
          </p>
        </FadeIn>

        {/* Accordion list */}
        <div>
          {SERVICES.map((svc, i) => (
            <FadeIn key={svc.num} delay={i * 0.08}>
              <AccordionItem
                svc={svc}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function AccordionItem({
  svc,
  isOpen,
  onToggle,
}: {
  svc: (typeof SERVICES)[number];
  isOpen: boolean;
  onToggle: () => void;
}) {
  const numFontSize = "clamp(2rem, 5vw, 4rem)";
  const nameFontSize = "clamp(1.1rem, 2.5vw, 2rem)";
  const bodyPaddingLeft = "calc(clamp(2rem, 5vw, 4rem) + 24px)";

  return (
    <div
      style={{
        borderBottom: "1px solid var(--border)",
        padding: "24px 0",
        cursor: "pointer",
      }}
      data-cursor="hover"
      onClick={onToggle}
    >
      {/* Header row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <span
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontWeight: 800,
              fontSize: numFontSize,
              color: isOpen ? "var(--ring-2)" : "rgba(240,238,232,0.12)",
              lineHeight: 1,
              transition: "color 300ms",
              flexShrink: 0,
            }}
          >
            {svc.num}
          </span>
          <span
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontWeight: 700,
              fontSize: nameFontSize,
              color: "#F0EEE8",
            }}
          >
            {svc.name}
          </span>
        </div>

        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
          style={{
            color: isOpen ? "var(--ring-2)" : "rgba(240,238,232,0.35)",
            flexShrink: 0,
          }}
        >
          <Plus style={{ width: 24, height: 24 }} />
        </motion.div>
      </div>

      {/* Expandable body */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ overflow: "hidden" }}
          >
            <div style={{ paddingLeft: bodyPaddingLeft, paddingTop: 16, paddingBottom: 16 }}>
              <p
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "clamp(0.875rem, 1.5vw, 1rem)",
                  color: "var(--text-secondary)",
                  maxWidth: 600,
                  lineHeight: 1.7,
                  margin: "0 0 16px",
                }}
              >
                {svc.desc}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {svc.tags.map((tag) => (
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
