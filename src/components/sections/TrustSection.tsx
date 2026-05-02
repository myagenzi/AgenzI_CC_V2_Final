import { FadeIn } from "@/components/ui/FadeIn";
import { LazyBgVideo } from "@/components/ui/LazyBgVideo";

const PARTNERS = [
  "SME Partners",
  "Tech Startups",
  "Professional Services",
  "D2C Brands",
  "Growth-stage Startups",
  "SaaS Founders",
];

export function TrustSection() {
  return (
    <section
      style={{
        background: "#080808",
        padding: "64px 0",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <LazyBgVideo src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_115655_b4d9cd77-feed-43cd-a198-af78ebdf1f7a.mp4" />
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.55)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />
      <div style={{ position: "relative", zIndex: 2 }}>
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "0 24px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 24,
          }}
        >
          <FadeIn delay={0}>
            <p
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
                color: "rgba(240,238,232,0.5)",
                textAlign: "center",
                maxWidth: 600,
                lineHeight: 1.65,
              }}
            >
              "Helping founders reclaim{" "}
              <span style={{ fontWeight: 600, color: "#F0EEE8" }}>20+ hours a week</span>{" "}
              while increasing lead conversion by{" "}
              <span style={{ fontWeight: 600, color: "var(--ring-2)" }}>40%."</span>
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "clamp(24px, 5vw, 64px)",
                flexWrap: "wrap",
              }}
            >
              {PARTNERS.map((name) => (
                <PartnerLabel key={name} name={name} />
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function PartnerLabel({ name }: { name: string }) {
  return (
    <span
      data-cursor="hover"
      style={{
        fontFamily: "'Space Grotesk', sans-serif",
        fontWeight: 600,
        fontSize: "clamp(0.8rem, 1.5vw, 1rem)",
        color: "rgba(240,238,232,0.2)",
        textTransform: "uppercase",
        letterSpacing: "0.1em",
        filter: "grayscale(1) opacity(0.3)",
        transition: "filter 300ms, color 300ms",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.filter = "none";
        el.style.color = "rgba(240,238,232,0.7)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.filter = "grayscale(1) opacity(0.3)";
        el.style.color = "rgba(240,238,232,0.2)";
      }}
    >
      {name}
    </span>
  );
}
