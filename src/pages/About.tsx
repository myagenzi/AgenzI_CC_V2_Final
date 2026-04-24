import { LenisProvider } from "@/lib/lenis";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { AboutHero } from "@/components/site/about/AboutHero";
import { AboutWeCreate } from "@/components/site/about/AboutWeCreate";
import { AboutVision } from "@/components/site/about/AboutVision";
import { AboutRoadmap } from "@/components/site/about/AboutRoadmap";
import { AboutPrinciples } from "@/components/site/about/AboutPrinciples";
import { AboutCta } from "@/components/site/about/AboutCta";

export default function About() {
  return (
    <LenisProvider>
      <div className="surface-lavender min-h-screen">
        <Header />
        <main>
          <AboutHero />
          <AboutWeCreate />
          <AboutVision />
          <AboutRoadmap />
          <AboutPrinciples />
          <AboutCta />
        </main>
        <Footer />
      </div>
    </LenisProvider>
  );
}
