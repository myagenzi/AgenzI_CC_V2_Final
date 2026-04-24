import { LenisProvider } from "@/lib/lenis";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PricingHero } from "@/components/site/pricing/PricingHero";
import { PricingPackages } from "@/components/site/pricing/PricingPackages";
import { PricingGuarantee } from "@/components/site/pricing/PricingGuarantee";
import { PricingTables } from "@/components/site/pricing/PricingTables";
import { PricingComparison } from "@/components/site/pricing/PricingComparison";
import { PricingCta } from "@/components/site/pricing/PricingCta";

export default function Pricing() {
  return (
    <LenisProvider>
      <div className="surface-lavender min-h-screen">
        <Header />
        <main>
          <PricingHero />
          <PricingPackages />
          <PricingGuarantee />
          <PricingTables />
          <PricingComparison />
          <PricingCta />
        </main>
        <Footer />
      </div>
    </LenisProvider>
  );
}
