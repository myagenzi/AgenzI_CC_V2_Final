import { Link } from "react-router-dom";
import logo from "@/assets/logo-horizontal.png";

const NAV_GROUPS = [
  {
    heading: "Services",
    links: [
      { label: "Creative Systems", href: "/what-we-do/creative-caas" },
      { label: "Marketing Engine", href: "/what-we-do/marketing-maas" },
      { label: "AI Automation", href: "/what-we-do/intelligence-zenzai" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "The Process", href: "/how-it-works" },
      { label: "Pricing", href: "/pricing" },
      { label: "Case Studies", href: "/about" },
    ],
  },
  {
    heading: "Get Started",
    links: [{ label: "Get a Free System Audit →", href: "/book-audit" }],
  },
];

const linkStyle: React.CSSProperties = {
  fontFamily: "'Space Grotesk', sans-serif",
  fontSize: 14,
  color: "rgba(240,238,232,0.6)",
  textDecoration: "none",
  display: "block",
  transition: "color 200ms",
};

export function Footer() {
  return (
    <footer
      style={{
        background: "#080808",
        borderTop: "1px solid var(--border)",
      }}
    >
      {/* Top row */}
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "64px 24px",
          display: "grid",
          gap: 48,
        }}
        className="grid-cols-1 md:grid-cols-4 md:px-10"
      >
        {/* Col 1 — logo + tagline */}
        <div>
          <Link to="/" aria-label="AgenzI home">
            <img
              src={logo}
              alt="AgenzI"
              style={{
                height: 28,
                width: "auto",
                filter: "brightness(0) invert(1)",
                opacity: 0.85,
              }}
            />
          </Link>
          <p
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 13,
              color: "var(--text-muted)",
              maxWidth: 200,
              lineHeight: 1.6,
              marginTop: 16,
            }}
          >
            Transforming Operators into Architects since 2024.
          </p>
        </div>

        {/* Cols 2–4 — nav groups */}
        {NAV_GROUPS.map((group) => (
          <div key={group.heading}>
            <p
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 600,
                fontSize: 12,
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                color: "var(--text-muted)",
                marginBottom: 16,
              }}
            >
              {group.heading}
            </p>
            <nav style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {group.links.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  data-cursor="hover"
                  style={linkStyle}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "var(--ring-2)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "rgba(240,238,232,0.6)";
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        ))}
      </div>

      {/* Bottom row */}
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "24px 24px",
          borderTop: "1px solid var(--border)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 12,
        }}
        className="md:px-10"
      >
        <span
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 12,
            color: "var(--text-muted)",
          }}
        >
          © 2024 AgenzI. All rights reserved.
        </span>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#4ade80",
              display: "inline-block",
              animation: "scalePulse 2s ease-in-out infinite",
            }}
          />
          <span
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 12,
              color: "rgba(240,238,232,0.4)",
            }}
          >
            Systems Active
          </span>
        </div>

        <span
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 12,
            color: "var(--text-muted)",
          }}
        >
          AgenzI | Hyderabad &amp; Global
        </span>
      </div>
    </footer>
  );
}
