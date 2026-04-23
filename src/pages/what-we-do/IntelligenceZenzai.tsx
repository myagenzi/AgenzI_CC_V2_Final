import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { LeftRail } from "@/components/site/caas/LeftRail";
import { CursorPortal } from "@/components/site/caas/CursorPortal";
import { MarqueeStatement } from "@/components/site/caas/MarqueeStatement";
import { CtaStripe } from "@/components/site/caas/CtaStripe";
import { ZenzaiHero } from "@/components/site/zenzai/ZenzaiHero";
import { ZenzaiAbout } from "@/components/site/zenzai/ZenzaiAbout";
import { LayerServices } from "@/components/site/zenzai/LayerServices";
import { LenisProvider } from "@/lib/lenis";

const thumbs = {
  zenzai: {
    label: "Zenzai · Systems",
    bg: "linear-gradient(135deg, hsl(35 84% 67%), hsl(220 60% 50%))",
  },
};

export default function IntelligenceZenzai() {
  useEffect(() => {
    document.title = "Intelligence — Zenzai · AgenzI";
  }, []);

  return (
    <LenisProvider>
    <div className="min-h-screen">
      <Header />
      <LeftRail currentEngine="Intelligence — Zenzai" />

      <CursorPortal thumbs={thumbs}>
        <main className="md:pl-[88px]">
          <ZenzaiHero />

          <MarqueeStatement words={["Automate", "Integrate", "Build", "Compound"]} />

          <ZenzaiAbout />

          <LayerServices />

          <CtaStripe
            scrub
            headlineText="Your business is running on repetition AI should be doing. Let's find out how much that's actually costing you."
            headline={null}
            sub="30 minutes. We look at your operations. You leave knowing exactly where AI fits."
          />

          {/* Footer ribbon */}
          <section className="border-t border-foreground/[0.08] px-6 py-10 md:px-16">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <span className="font-mono-tech text-[11px] uppercase tracking-[0.3em] text-foreground/50">
                © 2026 AgenzI · Zenzai
              </span>
              <div className="flex flex-wrap gap-6">
                <Link
                  to="/what-we-do/creative-caas"
                  className="story-link font-mono-tech text-[11px] uppercase tracking-[0.3em] text-foreground/70 hover:text-foreground"
                >
                  CaaS →
                </Link>
                <Link
                  to="/what-we-do/marketing-maas"
                  className="story-link font-mono-tech text-[11px] uppercase tracking-[0.3em] text-foreground/70 hover:text-foreground"
                >
                  MaaS →
                </Link>
                <a
                  href="/#pricing"
                  className="story-link font-mono-tech text-[11px] uppercase tracking-[0.3em] text-foreground/70 hover:text-foreground"
                >
                  Pricing →
                </a>
              </div>
            </div>
          </section>
        </main>
      </CursorPortal>

      <div className="md:pl-[88px]">
        <Footer />
      </div>
    </div>
    </LenisProvider>
  );
}
