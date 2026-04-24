import { useEffect } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { MarqueeStatement } from "@/components/site/caas/MarqueeStatement";
import { ZenLavenderHero } from "@/components/site/zenzai/lavender/ZenLavenderHero";
import { ZenPillars } from "@/components/site/zenzai/lavender/ZenPillars";
import { ZenIntroBlock } from "@/components/site/zenzai/lavender/ZenIntroBlock";
import { ZenLayerServices } from "@/components/site/zenzai/lavender/ZenLayerServices";
import { ZenContactBand } from "@/components/site/zenzai/lavender/ZenContactBand";
import { LenisProvider } from "@/lib/lenis";

export default function IntelligenceZenzai() {
  useEffect(() => {
    document.title = "Intelligence — Zenzai · AgenzI";
  }, []);

  return (
    <LenisProvider>
      <div className="surface-lavender min-h-screen">
        <Header />
        <main>
          <ZenLavenderHero />
          <MarqueeStatement words={["Automate", "Integrate", "Build", "Compound"]} />
          <ZenPillars />
          <ZenIntroBlock />
          <ZenLayerServices />
          <ZenContactBand />
        </main>
        <Footer />
      </div>
    </LenisProvider>
  );
}
