import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/site/home/Hero";
import { StatPanel } from "@/components/site/home/StatPanel";
import { Stats } from "@/components/site/home/Stats";
import { EnginesStack } from "@/components/site/home/EnginesStack";
import { Problem } from "@/components/site/home/Problem";
import { Mirror } from "@/components/site/home/Mirror";
import { HowItWorks } from "@/components/site/home/HowItWorks";
import { Statement } from "@/components/site/home/Statement";
import { ProofWebinar } from "@/components/site/home/ProofWebinar";
import { FinalCta } from "@/components/site/home/FinalCta";

const Index = () => {
  return (
    <div className="surface-lavender min-h-screen">
      <Header />
      <main>
        <Hero />
        <StatPanel />
        <Stats />
        <EnginesStack />
        <Problem />
        <Mirror />
        <HowItWorks />
        <Statement />
        <ProofWebinar />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
