import { useEffect } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { LeftRail } from "@/components/site/caas/LeftRail";
import { CaasHero } from "@/components/site/caas/CaasHero";
import { ServiceGroup } from "@/components/site/caas/ServiceGroup";
import { CursorPortal } from "@/components/site/caas/CursorPortal";
import { MarqueeStatement } from "@/components/site/caas/MarqueeStatement";
import { Reveal } from "@/components/site/Reveal";

const services = [
  {
    id: "branding",
    number: "01.",
    title: "Branding",
    blurb:
      "Identities engineered to be felt. Strategy, naming, and visual systems built to scale across every surface a brand will ever live on.",
    capabilities: [
      "Brand Strategy",
      "Identity Systems",
      "Naming",
      "Verbal Identity",
      "Guidelines",
      "Brand Architecture",
    ],
  },
  {
    id: "digital",
    number: "02.",
    title: "Digital",
    blurb:
      "Sites, products, and prototypes that turn first impressions into kept promises. Designed and engineered in-house, shipped fast.",
    capabilities: [
      "UI / UX",
      "Web Design",
      "Web Development",
      "Motion Design",
      "Prototyping",
      "Design Systems",
    ],
  },
  {
    id: "communications",
    number: "03.",
    title: "Communications",
    blurb:
      "Campaigns and content that earn attention. Art direction and production tuned to the platforms your audience actually lives on.",
    capabilities: [
      "Campaign",
      "Art Direction",
      "Content Production",
      "Social",
      "Editorial",
      "Photography",
    ],
  },
];

const thumbs = {
  branding: { label: "01 / Branding", bg: "linear-gradient(135deg, #1a1a1a, #0a0a0a)" },
  digital: { label: "02 / Digital", bg: "linear-gradient(135deg, #1E40FF, #0a0a3a)" },
  communications: { label: "03 / Communications", bg: "linear-gradient(135deg, #f4f4f4, #888)" },
};

export default function CreativeCaaS() {
  useEffect(() => {
    document.title = "Creative — CaaS · AgenzI";
  }, []);

  return (
    <div className="surface-mono min-h-screen">
      <Header />
      <LeftRail />

      <CursorPortal thumbs={thumbs}>
        <main className="md:pl-[88px]">
          <CaasHero />

          <MarqueeStatement words={["Expressive", "Confident", "Crafted", "In-house"]} />

          {/* Service groups */}
          <section className="px-6 py-16 md:px-16 md:py-24">
            <div className="mb-14 flex items-end justify-between gap-6">
              <div>
                <p className="font-mono-tech mb-3 text-[11px] uppercase tracking-[0.3em] text-foreground/50">
                  02 / Disciplines
                </p>
                <h2
                  className="font-display font-bold uppercase leading-[0.95] tracking-[-0.03em]"
                  style={{ fontSize: "clamp(40px, 7vw, 120px)" }}
                >
                  What we make.
                </h2>
              </div>
              <p className="hidden max-w-xs text-sm text-foreground/55 md:block">
                Three disciplines, one team. Hover to preview.
              </p>
            </div>

            <div>
              {services.map((s) => (
                <ServiceGroup key={s.id} service={s} />
              ))}
            </div>
          </section>

          {/* Process */}
          <section className="px-6 py-20 md:px-16 md:py-32">
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12 md:col-span-4">
                <p className="font-mono-tech mb-3 text-[11px] uppercase tracking-[0.3em] text-foreground/50">
                  03 / Process
                </p>
                <h2
                  className="font-display font-bold uppercase leading-[0.95] tracking-[-0.03em]"
                  style={{ fontSize: "clamp(36px, 5vw, 80px)" }}
                >
                  How we work.
                </h2>
              </div>

              <ol className="col-span-12 md:col-span-8">
                {[
                  { n: "01", t: "Listen", d: "We start with the business, not the brief. Goals, friction, signals." },
                  { n: "02", t: "Frame", d: "A point of view, written down. The single sentence the work has to earn." },
                  { n: "03", t: "Make", d: "Small studio, full stack — strategy, design, motion, code under one roof." },
                  { n: "04", t: "Ship", d: "Subscriptions over sprints. Always-on creative on a calendar, not a quote." },
                ].map((step, i) => (
                  <Reveal key={step.n} as="li" delay={(i % 4) as 0 | 1 | 2 | 3} className="grid grid-cols-12 gap-6 border-t border-white/8 py-8">
                    <span className="font-mono-tech col-span-2 text-[11px] uppercase tracking-[0.3em] text-foreground/50">
                      {step.n}
                    </span>
                    <h3 className="col-span-3 font-display text-2xl font-bold uppercase tracking-tight md:text-3xl">
                      {step.t}
                    </h3>
                    <p className="col-span-12 text-base text-foreground/65 md:col-span-7">{step.d}</p>
                  </Reveal>
                ))}
              </ol>
            </div>
          </section>

          {/* Final CTA */}
          <section className="px-6 py-24 md:px-16 md:py-40">
            <Reveal>
              <div className="border-t border-white/10 pt-16">
                <p className="font-mono-tech mb-6 text-[11px] uppercase tracking-[0.3em] text-foreground/50">
                  ↓ Start a project
                </p>
                <h2
                  className="font-display font-bold uppercase leading-[0.92] tracking-[-0.04em]"
                  style={{ fontSize: "clamp(48px, 10vw, 180px)" }}
                >
                  Let&apos;s make
                  <br />
                  <span className="text-electric">something real.</span>
                </h2>

                <div className="mt-12 flex flex-wrap items-center gap-6">
                  <a
                    href="/#contact"
                    className="cta-glow inline-flex items-center gap-3 rounded-full bg-foreground px-8 py-4 text-sm font-semibold text-background transition hover:bg-electric hover:text-foreground"
                  >
                    Book a Free Audit
                    <span aria-hidden>→</span>
                  </a>
                  <a
                    href="mailto:hello@agenzi.io"
                    className="story-link font-mono-tech text-sm uppercase tracking-[0.25em] text-foreground/70 hover:text-foreground"
                  >
                    hello@agenzi.io
                  </a>
                </div>
              </div>
            </Reveal>
          </section>
        </main>
      </CursorPortal>

      <div className="md:pl-[88px]">
        <Footer />
      </div>
    </div>
  );
}
