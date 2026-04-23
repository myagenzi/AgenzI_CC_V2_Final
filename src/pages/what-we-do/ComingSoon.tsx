import { Link } from "react-router-dom";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

type Props = { title: string; eyebrow: string };

export default function ComingSoon({ title, eyebrow }: Props) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex min-h-[80vh] items-center justify-center px-6 pt-40">
        <div className="max-w-2xl text-center">
          <p className="font-mono-tech mb-6 text-[11px] uppercase tracking-[0.3em] text-foreground/50">
            {eyebrow}
          </p>
          <h1 className="text-gradient-light font-display text-5xl font-bold leading-[1.05] md:text-7xl">
            {title}
          </h1>
          <p className="mt-6 text-base text-foreground/60">
            This service page is being crafted with the same care as our Creative — CaaS page. Check back soon.
          </p>
          <Link
            to="/what-we-do/creative-caas"
            className="cta-glow mt-10 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
          >
            Explore Creative — CaaS →
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
