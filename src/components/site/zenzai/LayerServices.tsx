import { useRef } from "react";
import { ServiceAccordion, type ServiceItem } from "@/components/site/caas/ServiceAccordion";
import { useScrollSetup, gsap } from "@/lib/scroll";

const automations: ServiceItem[] = [
  {
    n: "01",
    title: "WhatsApp Business Automation",
    sub: "Your most-used channel — finally on autopilot.",
    desc: "Your team answers the same WhatsApp messages 40 times a day. We build a WhatsApp AI in your language, your tone, 24/7. Qualifies leads while you sleep.",
    tags: [
      { kind: "price", text: "₹8,000–₹15,000 setup + ₹3,000–₹6,000/month" },
      { kind: "market", text: "Live in 5–7 days" },
    ],
  },
  {
    n: "02",
    title: "Lead Capture + CRM Automation",
    sub: "Stop losing leads because nobody followed up in time.",
    desc: "Lead fills form → instant acknowledgement → auto-qualification → CRM entry → follow-up sequence. All before a human needs to touch it.",
    tags: [{ kind: "price", text: "₹10,000–₹20,000 setup + ₹4,000–₹8,000/month" }],
  },
  {
    n: "03",
    title: "Invoice + Payment Follow-Up",
    sub: "Get paid without the awkward chasing.",
    desc: "Automated WhatsApp, email, and SMS follow-up that escalates automatically until resolved. No more three-week payment delays.",
    tags: [
      { kind: "price", text: "₹6,000–₹12,000 setup" },
      { kind: "market", text: "Live in 3–5 days" },
    ],
  },
  {
    n: "04",
    title: "Appointment Booking + Reminders",
    sub: "No-shows down. Revenue up.",
    desc: "Automated booking, confirmations, 24-hour reminders, rescheduling. Integrated with your calendar. No human in the loop.",
    tags: [
      { kind: "price", text: "₹6,000–₹10,000 setup" },
      { kind: "market", text: "Live in 3–5 days" },
    ],
  },
  {
    n: "05",
    title: "Customer Support AI",
    sub: "Resolve 70% of queries without your team touching them.",
    desc: "AI trained on your products, policies, FAQs. Resolves standard 70%. Escalates the 30% that genuinely needs a human. 24/7 support at the cost of none.",
    tags: [{ kind: "price", text: "₹12,000–₹25,000 setup + ₹5,000–₹10,000/month" }],
  },
  {
    n: "06",
    title: "Reporting + Dashboard Automation",
    sub: "The report writes itself. Every Monday morning.",
    desc: "Data collected, calculated, delivered automatically. Your team gets a clean report before they open their laptop.",
    tags: [{ kind: "price", text: "₹8,000–₹18,000 setup" }],
  },
];

const integrations: ServiceItem[] = [
  {
    n: "01",
    title: "CRM + Marketing Stack Integration",
    sub: "Every touchpoint informs every other touchpoint.",
    desc: "CRM and marketing tools unified — leads tracked from first click to closed deal. HubSpot, Zoho, Salesforce, Mailchimp, ActiveCampaign.",
    tags: [{ kind: "price", text: "₹20,000–₹60,000" }],
  },
  {
    n: "02",
    title: "WhatsApp + Business Systems",
    sub: "WhatsApp is where your customers live. Connect it to everything.",
    desc: "WhatsApp conversations trigger CRM updates, support tickets, booking confirmations, order alerts automatically.",
    tags: [{ kind: "price", text: "₹15,000–₹35,000" }],
  },
  {
    n: "03",
    title: "E-commerce + Operations Integration",
    sub: "Sales → Inventory → Finance → Fulfilment → Customer. All connected.",
    desc: "Shopify, WooCommerce, Unicommerce, Tally, custom builds. One dashboard for everything.",
    tags: [{ kind: "price", text: "₹30,000–₹80,000" }],
  },
];

const customAI: ServiceItem[] = [
  {
    n: "01",
    title: "Custom AI Model Development",
    sub: "Your data. Your domain. Intelligence competitors can't access.",
    desc: "Custom ML, deep learning, computer vision, NLP trained on your business data. LLM integrations (RAG). Predictive analytics.",
    tags: [{ kind: "price", text: "Scoped on consultation" }],
  },
  {
    n: "02",
    title: "Intelligent Document Processing (OCR)",
    sub: "Turn paper into data. Automatically.",
    desc: "AI pipelines reading, extracting, validating, routing documents. Invoices, ID documents, forms, medical records. Multi-language.",
    tags: [{ kind: "price", text: "Scoped per project" }],
  },
  {
    n: "03",
    title: "Custom Software + Mobile App Development",
    sub: "Applications built for how your business actually works.",
    desc: "Web apps, backend systems, APIs, mobile apps (Android + iOS, Flutter/React Native). Built for your workflows — not the other way around.",
    tags: [{ kind: "price", text: "Scoped per project · MVP programmes available" }],
  },
];

type LayerProps = {
  id: string;
  stickyLabel: string;
  eyebrow: string;
  headline: React.ReactNode;
  meta: string;
  keywords: string[];
  items: ServiceItem[];
};

function Layer({ id, stickyLabel, eyebrow, headline, meta, keywords, items }: LayerProps) {
  const ref = useRef<HTMLElement | null>(null);

  useScrollSetup(ref, (el) => {
    const eyebrowEl = el.querySelector<HTMLElement>("[data-eyebrow]");
    const headEl = el.querySelector<HTMLElement>("[data-head]");
    const metaEl = el.querySelector<HTMLElement>("[data-meta]");
    const chars = el.querySelectorAll<HTMLElement>("[data-kw-char]");
    const accItems = el.querySelectorAll<HTMLElement>("[data-acc] > *");
    const progress = el.querySelector<HTMLElement>("[data-progress]");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: "top 70%",
        end: "bottom 30%",
        scrub: 0.6,
      },
    });

    if (eyebrowEl) tl.fromTo(eyebrowEl, { y: 24, opacity: 0 }, { y: 0, opacity: 1 }, 0);
    if (headEl) tl.fromTo(headEl, { y: 50, opacity: 0 }, { y: 0, opacity: 1 }, 0.05);
    if (metaEl) tl.fromTo(metaEl, { y: 20, opacity: 0 }, { y: 0, opacity: 1 }, 0.15);
    if (chars.length) {
      tl.fromTo(
        chars,
        { y: 14, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.012 },
        0.2,
      );
    }
    if (accItems.length) {
      tl.fromTo(
        accItems,
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.06 },
        0.4,
      );
    }

    // Sticky-label progress bar fill
    if (progress) {
      gsap.fromTo(
        progress,
        { scaleY: 0 },
        {
          scaleY: 1,
          transformOrigin: "top center",
          ease: "none",
          scrollTrigger: { trigger: el, start: "top 80%", end: "bottom 20%", scrub: true },
        },
      );
    }
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className="relative border-t border-foreground/[0.08] px-6 py-20 md:px-16 md:py-28"
    >
      <div className="md:grid md:grid-cols-12 md:gap-10">
        {/* Sticky vertical layer label + progress */}
        <aside className="hidden md:col-span-2 md:ml-2 md:block">
          <div className="sticky top-24 flex flex-col items-start gap-4">
            <p
              className="font-mono-tech text-[10px] uppercase tracking-[0.35em] text-foreground/40"
              style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
            >
              {stickyLabel}
            </p>
            <div className="layer-progress relative h-40 w-px bg-foreground/[0.08]">
              <span data-progress className="absolute inset-0 origin-top bg-electric" />
            </div>
          </div>
        </aside>

        <div className="md:col-span-10">
          <p data-eyebrow className="font-mono-tech mb-4 text-[11px] uppercase tracking-[0.3em] text-foreground/50">
            {eyebrow}
          </p>
          <h2
            data-head
            className="font-display mb-6 font-bold uppercase leading-[0.95] tracking-[-0.03em]"
            style={{ fontSize: "clamp(32px, 5.2vw, 78px)" }}
          >
            {headline}
          </h2>
          <p data-meta className="font-mono-tech mb-8 text-[11px] uppercase tracking-[0.25em] text-foreground/55">
            {meta}
          </p>

          <div className="layer-keyword-strip mb-10 flex flex-wrap gap-x-4 gap-y-2 border-y border-foreground/[0.08] py-4">
            {keywords.map((k, i) => (
              <span key={k} className="font-mono-tech text-[10px] uppercase tracking-[0.25em] text-foreground/55">
                <span className="mr-3 text-electric">{String(i + 1).padStart(2, "0")}</span>
                {k.split("").map((ch, ci) => (
                  <span key={ci} data-kw-char className="inline-block">
                    {ch === " " ? "\u00A0" : ch}
                  </span>
                ))}
                {i < keywords.length - 1 && <span className="ml-4 text-foreground/25">·</span>}
              </span>
            ))}
          </div>

          <div data-acc>
            <ServiceAccordion items={items} />
          </div>
        </div>
      </div>
    </section>
  );
}

export function LayerServices() {
  return (
    <div id="zen-svcs">
      <Layer
        id="layer-01"
        stickyLabel="LAYER 01 / AUTOMATIONS"
        eyebrow="Layer 01 · Automations · Live in Days"
        meta="WhatsApp · CRM · Support · Booking · 06 services"
        keywords={["WhatsApp AI", "Lead Capture", "Invoice Follow-Up", "Booking", "Support AI", "Reporting"]}
        headline={
          <>
            The fastest way to see AI
            <br />
            working in your <span className="text-electric">business.</span>
          </>
        }
        items={automations}
      />
      <Layer
        id="layer-02"
        stickyLabel="LAYER 02 / INTEGRATIONS"
        eyebrow="Layer 02 · Integrations"
        meta="CRM · WhatsApp · E-commerce · 03 services"
        keywords={["CRM Stack", "WhatsApp ↔ Systems", "E-commerce Ops"]}
        headline={
          <>
            Your tools work fine.
            <br />
            The problem: they don't
            <br />
            <span className="text-electric">talk to each other.</span>
          </>
        }
        items={integrations}
      />
      <Layer
        id="layer-03"
        stickyLabel="LAYER 03 / CUSTOM AI"
        eyebrow="Layer 03 · Custom AI + Tech"
        meta="ML · OCR · Apps · 03 services"
        keywords={["Custom AI Models", "OCR / IDP", "Custom Apps"]}
        headline={
          <>
            When off-the-shelf stops working,
            <br />
            we build what <span className="text-electric">doesn't exist yet.</span>
          </>
        }
        items={customAI}
      />
    </div>
  );
}
