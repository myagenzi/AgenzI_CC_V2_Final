import { useEffect } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CaasHero } from "@/components/site/caas/CaasHero";
import { CursorPortal } from "@/components/site/caas/CursorPortal";
import { MarqueeStatement } from "@/components/site/caas/MarqueeStatement";
import { WhyGrid } from "@/components/site/caas/WhyGrid";
import { DeliveryTabs } from "@/components/site/caas/DeliveryTabs";
import { ServiceAccordion, type ServiceItem } from "@/components/site/caas/ServiceAccordion";
import { CtaStripe } from "@/components/site/caas/CtaStripe";
import { Link } from "react-router-dom";
import { LenisProvider } from "@/lib/lenis";

const phase1: ServiceItem[] = [
  {
    n: "01",
    title: "Social Media Content Pack",
    sub: "Your brand showing up every week — without briefing anyone",
    desc: "Brand kit + brief once. We generate the calendar, write scripts, create visuals. Human review before you see anything. 8–20 pieces/month.",
    bullets: [
      "Stops the weekly agency briefing loop",
      "Approve content in ten minutes",
      "Consistent brand voice across every post",
    ],
    tags: [
      { kind: "price", text: "₹2,999–₹8,999/month" },
      { kind: "market", text: "Market: ₹15–40k/month" },
      { kind: "audience", text: "SMBs · Creators · Coaches · D2C" },
    ],
  },
  {
    n: "02",
    title: "Repurposing Engine",
    sub: "One recording. Forty assets. 48 hours.",
    desc: "You record one thing. We turn it into reels, clips, quote cards, blog post, email, vertical videos for every platform. 24–48 hours. Nothing else required.",
    tags: [
      { kind: "price", text: "₹2,499–₹4,999/session" },
      { kind: "market", text: "Delivery: 24–48 hrs" },
      { kind: "audience", text: "Founders · Coaches · Podcasters" },
    ],
  },
  {
    n: "03",
    title: "Photography + AI Edit Sprint",
    sub: "Professional shoot. 200 edited photos. Tomorrow.",
    desc: "Traditional photographers: 5–7 days. Us: 24 hours. AI culls, retouches, colour-grades. Human QC before you see a frame.",
    tags: [
      { kind: "price", text: "₹3,999–₹9,999/shoot" },
      { kind: "market", text: "Delivery: 24 hrs" },
    ],
  },
  {
    n: "04",
    title: "Commercial Ad Production",
    sub: "10 ad variants. Every format. 48-hour delivery.",
    desc: "Brief + existing assets → 10 ad variants (image + video), hooks, CTAs, A/B sets. Ready for Meta and Google. All sizes. Three weeks → two days.",
    tags: [
      { kind: "price", text: "₹4,999–₹12,000/campaign" },
      { kind: "market", text: "Delivery: 48 hrs" },
      { kind: "audience", text: "D2C · Startups · Performance" },
    ],
  },
  {
    n: "05",
    title: "Event Reel + Same-Day Delivery",
    sub: "Your event on social before the last guest leaves.",
    desc: "We show up with a capture kit. AI editing starts in real time. 3–5 reels ready before your event ends. Full film in 48 hours.",
    tags: [
      { kind: "price", text: "₹6,000–₹18,000/event" },
      { kind: "market", text: "Reels: same day" },
    ],
  },
  {
    n: "06",
    title: "Founder Content Engine",
    sub: "One conversation a month. A full month of content.",
    desc: "30–60 min recorded conversation — that's your only input. LinkedIn posts, threads, video clips, newsletter, two long-form articles. All in your voice.",
    tags: [
      { kind: "price", text: "₹8,999–₹18,000/month" },
      { kind: "market", text: "Market: ₹30–80k/month" },
    ],
  },
  {
    n: "07",
    title: "Product Photography + Catalogue Video",
    sub: "Ecommerce-ready content from one session.",
    desc: "Studio-quality photos, background removal, AI retouching + short product video for Meta, Amazon, and your website. All in 48 hours.",
    tags: [
      { kind: "price", text: "₹2,999–₹6,999/set" },
      { kind: "market", text: "Delivery: 48 hrs" },
    ],
  },
  {
    n: "08",
    title: "Corporate Event Branding + Content",
    sub: "Full brand experience — before, during, and after.",
    desc: "Before: brand kit, stage assets, signage. During: live social, speaker clips. After: highlight reel, gallery, after-movie. One team. One brief.",
    tags: [
      { kind: "price", text: "₹25,000–₹75,000/event" },
      { kind: "market", text: "Market: ₹80k–3L" },
    ],
  },
];

const phase2: ServiceItem[] = [
  {
    n: "09",
    title: "AI Avatar Spokesperson",
    sub: "Video without a camera. Any language. 24–48 hrs.",
    desc: "Photorealistic AI spokesperson delivers your script in any language, any setting. No crew needed.",
    tags: [{ kind: "price", text: "₹4,999 setup + ₹1,499/video" }],
  },
  {
    n: "10",
    title: "Multilingual Dubbing",
    sub: "One video. Ten languages. AI lip-sync.",
    desc: "AI clones voice → dubbed in Hindi, Tamil, Telugu, Bengali, Kannada, Marathi + 130 global languages with accurate lip-sync.",
    tags: [{ kind: "price", text: "₹2,999/video/language" }],
  },
  {
    n: "11",
    title: "Podcast Production Suite",
    sub: "Record once. Edit + 10 clips + blog. 12–24 hrs.",
    desc: "Raw recording → full edit, 10 clips, show notes, SEO blog, audiograms. Branded intro/outro included.",
    tags: [{ kind: "price", text: "₹1,499–₹2,999/episode" }],
  },
  {
    n: "12",
    title: "UGC Simulation Pack",
    sub: "20 authentic user-style videos. No creators needed.",
    desc: "20 AI-generated UGC-style videos with diverse personas, settings, hooks. A/B optimised. Ready for Meta, TikTok, YouTube.",
    tags: [{ kind: "price", text: "₹12,000–₹18,000/20 videos" }],
  },
];

const thumbs = {
  caas: { label: "CaaS · Live", bg: "linear-gradient(135deg, #1E40FF, #0a0a3a)" },
};

export default function CreativeCaaS() {
  useEffect(() => {
    document.title = "Creative — CaaS · AgenzI";
  }, []);

  return (
    <LenisProvider>
      <div className="min-h-screen">
        <Header />

        <CursorPortal thumbs={thumbs}>
          <main>
            <CaasHero />

            <MarqueeStatement
              words={["Speed", "Cost", "Consistency", "48-Hour Turnaround", "Human-Directed"]}
            />

            <WhyGrid />

            <div className="border-t border-white/10">
              <DeliveryTabs />
            </div>

            {/* Services with sticky vertical phase labels (monopo signature) */}
            <section
              id="caas-svcs"
              className="border-t border-white/10 px-6 py-20 md:px-16 md:py-28"
            >
              <div className="mb-12">
                <p className="font-mono-tech mb-4 text-[11px] uppercase tracking-[0.3em] text-foreground/50">
                  04 / What We Build
                </p>
                <h2
                  className="font-display font-bold uppercase leading-[0.95] tracking-[-0.03em]"
                  style={{ fontSize: "clamp(40px, 7vw, 110px)" }}
                >
                  Eight services live now.
                  <br />
                  <span className="text-electric">Eight more this year.</span>
                </h2>
              </div>

              {/* Phase 1 — sticky vertical label */}
              <div className="grid grid-cols-12 gap-6">
                <aside className="col-span-12 md:col-span-2">
                  <div className="md:sticky md:top-32">
                    <p
                      className="font-mono-tech text-[11px] uppercase tracking-[0.3em] text-foreground/65 md:[writing-mode:vertical-rl] md:rotate-180"
                    >
                      Phase 1 · Live Now
                    </p>
                  </div>
                </aside>
                <div className="col-span-12 md:col-span-10">
                  <ServiceAccordion items={phase1} />
                </div>
              </div>

              {/* Phase 2 — sticky vertical label */}
              <div className="mt-24 grid grid-cols-12 gap-6">
                <aside className="col-span-12 md:col-span-2">
                  <div className="md:sticky md:top-32">
                    <p
                      className="font-mono-tech text-[11px] uppercase tracking-[0.3em] text-foreground/40 md:[writing-mode:vertical-rl] md:rotate-180"
                    >
                      Phase 2 · Arriving This Year
                    </p>
                  </div>
                </aside>
                <div className="col-span-12 md:col-span-10">
                  <ServiceAccordion items={phase2} dimmed />
                </div>
              </div>
            </section>

            <CtaStripe
              scrub
              headlineText="Traditional agency: ₹20k–1.5L/month. CaaS starts at ₹2,999/month. Same output. Faster. No chaos."
              headline={
                <>
                  Traditional agency: ₹20k–1.5L/month.
                  <br />
                  CaaS starts at ₹2,999/month.
                  <br />
                  <span className="text-electric">Same output. Faster. No chaos.</span>
                </>
              }
              sub="Not a discount. A different cost structure entirely."
              secondaryLabel="Full pricing →"
            />

            <section className="border-t border-white/10 px-6 py-10 md:px-16">
              <div className="flex flex-wrap items-center justify-between gap-6">
                <span className="font-mono-tech text-[11px] uppercase tracking-[0.3em] text-foreground/50">
                  © 2026 AgenzI · CaaS
                </span>
                <div className="flex flex-wrap gap-6">
                  <Link
                    to="/what-we-do/marketing-maas"
                    className="story-link font-mono-tech text-[11px] uppercase tracking-[0.3em] text-foreground/70 hover:text-foreground"
                  >
                    MaaS →
                  </Link>
                  <Link
                    to="/what-we-do/intelligence-zenzai"
                    className="story-link font-mono-tech text-[11px] uppercase tracking-[0.3em] text-foreground/70 hover:text-foreground"
                  >
                    Zenzai →
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

        <Footer />
      </div>
    </LenisProvider>
  );
}
