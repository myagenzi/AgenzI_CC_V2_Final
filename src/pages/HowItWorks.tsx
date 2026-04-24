import { LenisProvider } from "@/lib/lenis";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { HowHero } from "@/components/site/how/HowHero";
import { HowSteps } from "@/components/site/how/HowSteps";
import { HowGuarantee } from "@/components/site/how/HowGuarantee";
import { HowFeatureGrid } from "@/components/site/how/HowFeatureGrid";
import { HowCta } from "@/components/site/how/HowCta";

export default function HowItWorks() {
  return (
    <LenisProvider>
      <div className="surface-lavender min-h-screen">
        <Header />
        <main>
          <HowHero />
          <HowSteps />
          <HowGuarantee />
          <HowFeatureGrid />
          <HowCta />
        </main>
        <Footer />
      </div>
    </LenisProvider>
  );
}
