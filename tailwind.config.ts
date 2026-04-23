import type { Config } from "tailwindcss";

export default {
  // No client-side dark toggle — brand is dark by default.
  // A `.surface-cream`/`.surface-white` scope inverts tokens for light sections.
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1200px" },
    },
    extend: {
      fontFamily: {
        display: ['"Bricolage Grotesque"', "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ['"Space Grotesk"', "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          bright: "hsl(var(--gold-bright))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // AgenzI brand tokens (use sparingly — prefer semantic ones above)
        cosmic: "hsl(var(--cosmic))",
        navy: "hsl(var(--navy))",
        nebula: "hsl(var(--nebula))",
        peri: "hsl(var(--peri))",
        royal: "hsl(var(--royal))",
        gold: "hsl(var(--gold))",
        starlight: "hsl(var(--starlight))",
        moondust: "hsl(var(--moondust))",
        off: "hsl(var(--off))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 4px)",
        sm: "calc(var(--radius) - 8px)",
      },
      backgroundImage: {
        "gradient-hero": "var(--gradient-hero)",
        "gradient-engine": "var(--gradient-engine)",
        "gradient-num": "var(--gradient-num)",
        "gradient-ai-card": "var(--gradient-ai-card)",
        "gradient-cta-glow": "var(--gradient-cta-glow)",
      },
      boxShadow: {
        gold: "var(--shadow-gold)",
        cta: "var(--shadow-cta)",
        card: "var(--shadow-card)",
      },
      keyframes: {
        "accordion-down": { from: { height: "0" }, to: { height: "var(--radix-accordion-content-height)" } },
        "accordion-up":   { from: { height: "var(--radix-accordion-content-height)" }, to: { height: "0" } },
        ticker: { from: { transform: "translateX(0)" }, to: { transform: "translateX(-50%)" } },
        "word-in": { from: { opacity: "0", transform: "translateY(14px)" }, to: { opacity: "1", transform: "none" } },
        "green-pulse": {
          "0%,100%": { boxShadow: "0 0 0 0 hsl(142 71% 58% / 0.4)" },
          "70%":     { boxShadow: "0 0 0 8px hsl(142 71% 58% / 0)" },
        },
        "halo-pulse": {
          "0%,100%": { transform: "scale(1)", opacity: "0.7" },
          "50%":     { transform: "scale(1.04)", opacity: "1" },
        },
        spin: { to: { transform: "rotate(360deg)" } },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up":   "accordion-up 0.2s ease-out",
        ticker: "ticker 38s linear infinite",
        "word-in": "word-in 0.9s cubic-bezier(0.16, 1, 0.3, 1) both",
        "green-pulse": "green-pulse 2.2s infinite",
        "halo-pulse": "halo-pulse 3.6s ease-in-out infinite",
        "spin-slow": "spin 24s linear infinite",
        "spin-slower": "spin 48s linear infinite reverse",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
