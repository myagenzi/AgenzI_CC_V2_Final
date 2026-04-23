import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { LeftRail } from "@/components/site/caas/LeftRail";
import { CursorPortal } from "@/components/site/caas/CursorPortal";
import { MarqueeStatement } from "@/components/site/caas/MarqueeStatement";
import { CtaStripe } from "@/components/site/caas/CtaStripe";
import { MaasHero } from "@/components/site/maas/MaasHero";
import { SystemsManifesto } from "@/components/site/maas/SystemsManifesto";
import { SystemBlock } from "@/components/site/maas/SystemBlock";
import { ClientWall } from "@/components/site/maas/ClientWall";
import type { ServiceItem } from "@/components/site/caas/ServiceAccordion";
import { LenisProvider } from "@/lib/lenis";

const performance: ServiceItem[] = [
  {
    n: "01",
    title: "Paid Search — Google Ads",
    sub: "High-intent traffic from people already searching for you.",
    desc: "Keyword strategy, ad copy, landing page alignment, bid optimisation. You pay for clicks that convert — not vanity traffic.",
    tags: [{ kind: "price", text: "₹8,000–₹20,000/month + ad spend" }],
  },
  {
    n: "02",
    title: "Paid Social — Meta / LinkedIn",
    sub: "Targeting built on behaviour. AI finds who converts.",
    desc: "Creative testing at scale — AI identifies winning variants fast. Retargeting the 97% who visited but didn't convert. Bidding optimised 24/7.",
    tags: [{ kind: "price", text: "₹8,000–₹20,000/month + ad spend" }],
  },
  {
    n: "03",
    title: "Revenue Attribution Setup",
    sub: "Fix attribution before running a single rupee in ads.",
    desc: "UTM architecture, conversion tracking, CRM integration. Full visibility from first click to closed deal.",
    tags: [{ kind: "price", text: "₹15,000–₹35,000 one-time" }],
  },
  {
    n: "04",
    title: "Retargeting + Journey Recovery",
    sub: "Re-engage people who showed intent — just not enough.",
    desc: "Multi-channel retargeting across Google, Meta, and email. Each abandoned journey gets a tailored recovery sequence.",
    tags: [{ kind: "price", text: "Included in paid social management" }],
  },
];

const growth: ServiceItem[] = [
  {
    n: "05",
    title: "SEO + Organic Search",
    sub: "Leads that cost nothing per click — once the system is built.",
    desc: "Technical SEO, content strategy, authority building. Rankings that compound. Honest timeline: 3–6 months to meaningful results.",
    tags: [{ kind: "price", text: "₹15,000–₹40,000/month" }],
  },
  {
    n: "06",
    title: "Email Marketing + Nurture",
    sub: "Your list is the one marketing asset you fully own.",
    desc: "Segmented, personalised, automated sequences that convert subscribers into customers. Mailchimp, Klaviyo, ActiveCampaign, HubSpot.",
    tags: [{ kind: "price", text: "₹10,000–₹25,000/month" }],
  },
  {
    n: "07",
    title: "Conversion Rate Optimisation",
    sub: "More revenue from the traffic you already have.",
    desc: "Landing page audits, A/B testing, form optimisation, user flow analysis. We find where revenue is leaking and fix it.",
    tags: [{ kind: "price", text: "₹20,000–₹50,000 audit + implementation" }],
  },
  {
    n: "08",
    title: "Referral + Loyalty Systems",
    sub: "Your happiest customers are your most underused growth channel.",
    desc: "Referral programmes and loyalty systems that turn satisfaction into advocacy.",
    tags: [{ kind: "price", text: "₹15,000–₹35,000 setup" }],
  },
];

const perception: ServiceItem[] = [
  {
    n: "09",
    title: "Brand Strategy + Positioning",
    sub: "What you stand for. Who for. Why you over everyone else.",
    desc: "Positioning, messaging hierarchy, brand narrative. The foundation that makes every other channel more efficient.",
    tags: [{ kind: "price", text: "₹40,000–₹1,00,000 one-time" }],
  },
  {
    n: "10",
    title: "Founder + Executive Personal Brand",
    sub: "People buy from people before they buy from companies.",
    desc: "LinkedIn strategy, thought leadership, public presence. You become the known name in your category.",
    tags: [{ kind: "price", text: "Included in Founder Content Engine" }],
  },
  {
    n: "11",
    title: "PR + Media Outreach",
    sub: "Coverage that builds credibility ads can't buy.",
    desc: "Press releases, journalist relationships, story pitching, podcast placements, industry authority building.",
    tags: [{ kind: "price", text: "₹20,000–₹50,000/month" }],
  },
  {
    n: "12",
    title: "Online Reputation Management",
    sub: "Control what shows up when someone searches your name.",
    desc: "Monitor, respond, build review profiles across Google, Justdial, G2, Glassdoor. Active review acquisition strategy.",
    tags: [{ kind: "price", text: "₹8,000–₹20,000/month" }],
  },
];

const thumbs = {
  maas: { label: "MaaS · Revenue", bg: "linear-gradient(135deg, hsl(35 84% 67%), hsl(283 27% 47%))" },
};

export default function MarketingMaaS() {
  useEffect(() => {
    document.title = "Marketing — MaaS · AgenzI";
  }, []);

  return (
    <LenisProvider>
      <div className="min-h-screen">
        <Header />
        <LeftRail currentEngine="Marketing — MaaS" />

        <CursorPortal thumbs={thumbs}>
          <main className="md:pl-[88px]" id="maas-svcs">
            <MaasHero />

            <MarqueeStatement
              words={["Revenue", "Pipeline", "Performance", "Perception", "Attribution"]}
            />

            <SystemsManifesto />

            <SystemBlock
              first
              eyebrow="System 01 · Performance"
              systemNumber="01"
              mediaLabel="Performance reel"
              metaLine="Performance · Attribution · Paid Media · 04 services"
              headline={
                <>
                  Stop paying for eyeballs.
                  <br />
                  Start paying for <span className="text-electric">customers.</span>
                </>
              }
              items={performance}
            />

            <SystemBlock
              eyebrow="System 02 · Growth"
              systemNumber="02"
              mediaLabel="Growth pipeline"
              metaLine="SEO · Email · CRO · Referral · 04 services"
              headline={
                <>
                  A lead list is not a pipeline.
                  <br />
                  A pipeline is a <span className="text-electric">system.</span>
                </>
              }
              items={growth}
            />

            <SystemBlock
              eyebrow="System 03 · Perception"
              systemNumber="03"
              mediaLabel="Perception case study"
              metaLine="Brand · PR · Personal Brand · Reputation · 04 services"
              headline={
                <>
                  Your market already has
                  <br />
                  an opinion about you.
                  <br />
                  <span className="text-electric">We control it.</span>
                </>
              }
              items={perception}
            />

            <ClientWall />

            <CtaStripe
              scrub
              headlineText="Your marketing budget is either building your pipeline or leaking."
              headline={
                <>
                  Your marketing budget is either
                  <br />
                  building your pipeline
                  <br />
                  <span className="text-electric">or leaking.</span>
                </>
              }
              sub="30 minutes. We look at your current setup. You leave knowing exactly where the gaps are."
            />

            <section className="border-t border-foreground/[0.08] px-6 py-10 md:px-16">
              <div className="flex flex-wrap items-center justify-between gap-6">
                <span className="font-mono-tech text-[11px] uppercase tracking-[0.3em] text-foreground/50">
                  © 2026 AgenzI · MaaS
                </span>
                <div className="flex flex-wrap gap-6">
                  <Link
                    to="/what-we-do/creative-caas"
                    className="story-link font-mono-tech text-[11px] uppercase tracking-[0.3em] text-foreground/70 hover:text-foreground"
                  >
                    CaaS →
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

        <div className="md:pl-[88px]">
          <Footer />
        </div>
      </div>
    </LenisProvider>
  );
}
