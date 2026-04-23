import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/site/home/Hero";
import { Ticker } from "@/components/site/home/Ticker";
import { Stats } from "@/components/site/home/Stats";
import { ThreeEngines } from "@/components/site/home/ThreeEngines";
import { Problem } from "@/components/site/home/Problem";
import { Mirror } from "@/components/site/home/Mirror";
import { HowItWorks } from "@/components/site/home/HowItWorks";
import { Statement } from "@/components/site/home/Statement";
import { ProofWebinar } from "@/components/site/home/ProofWebinar";
import { FinalCta } from "@/components/site/home/FinalCta";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Ticker />
        <Stats />
        <ThreeEngines />
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
