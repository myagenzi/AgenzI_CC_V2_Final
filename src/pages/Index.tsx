import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/site/home/Hero";
import { MarqueeSection } from "@/components/sections/MarqueeSection";
import { TrustSection } from "@/components/sections/TrustSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { OffersSection } from "@/components/sections/OffersSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { StackSection } from "@/components/sections/StackSection";
import { CTASection } from "@/components/sections/CTASection";

const Index = () => {
  return (
    <div
      style={{
        background: "#080808",
        overflowX: "clip",
        fontFamily: "'Bricolage Grotesque', sans-serif",
        minHeight: "100vh",
      }}
    >
      <Header />
      <main>
        <Hero />
        <MarqueeSection />
        <TrustSection />
        <ProblemSection />
        <OffersSection />
        <ProcessSection />
        <StackSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
