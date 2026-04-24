import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/site/Reveal";
import { useScrollSetup, gsap } from "@/lib/scroll";

type Item = {
  n: string;
  title: string;
  sub: string;
  desc: string;
  tags: string[];
};

const layer1: Item[] = [
  {
    n: "01",
    title: "WhatsApp Business Automation",
    sub: "Your most-used channel — finally on autopilot.",
    desc: "Your team answers the same WhatsApp messages 40 times a day. We build a WhatsApp AI in your language, your tone, 24/7. Qualifies leads while you sleep.",
    tags: ["₹8k–₹15k setup + ₹3k–₹6k/mo", "Live in 5–7 days"],
  },
  {
    n: "02",
    title: "Lead Capture + CRM Automation",
    sub: "Stop losing leads because nobody followed up in time.",
    desc: "Lead fills form → instant acknowledgement → auto-qualification → CRM entry → follow-up sequence. All before a human needs to touch it.",
    tags: ["₹10k–₹20k setup + ₹4k–₹8k/mo"],
  },
  {
    n: "03",
    title: "Invoice + Payment Follow-Up",
    sub: "Get paid without the awkward chasing.",
    desc: "Automated WhatsApp, email, and SMS follow-up that escalates automatically until resolved. No more three-week payment delays.",
    tags: ["₹6k–₹12k setup", "Live in 3–5 days"],
  },
  {
    n: "04",
    title: "Appointment Booking + Reminders",
    sub: "No-shows down. Revenue up.",
    desc: "Automated booking, confirmations, 24-hour reminders, rescheduling. Integrated with your calendar. No human in the loop.",
    tags: ["₹6k–₹10k setup", "Live in 3–5 days"],
  },
  {
    n: "05",
    title: "Customer Support AI",
    sub: "Resolve 70% of queries without your team touching them.",
    desc: "AI trained on your products, policies, FAQs. Resolves standard 70%. Escalates the 30% that genuinely needs a human. 24/7 support at the cost of none.",
    tags: ["₹12k–₹25k setup + ₹5k–₹10k/mo"],
  },
  {
    n: "06",
    title: "Reporting + Dashboard Automation",
    sub: "The report writes itself. Every Monday morning.",
    desc: "Data collected, calculated, delivered automatically. Your team gets a clean report before they open their laptop.",
    tags: ["₹8k–₹18k setup"],
  },
];

const layer2: Item[] = [
  {
    n: "01",
    title: "CRM + Marketing Stack Integration",
    sub: "Every touchpoint informs every other touchpoint.",
    desc: "CRM and marketing tools unified — leads tracked from first click to closed deal. HubSpot, Zoho, Salesforce, Mailchimp, ActiveCampaign.",
    tags: ["₹20k–₹60k"],
  },
  {
    n: "02",
    title: "WhatsApp + Business Systems",
    sub: "WhatsApp is where your customers live. Connect it to everything.",
    desc: "WhatsApp conversations trigger CRM updates, support tickets, booking confirmations, order alerts automatically.",
    tags: ["₹15k–₹35k"],
  },
  {
    n: "03",
    title: "E-commerce + Operations Integration",
    sub: "Sales → Inventory → Finance → Fulfilment → Customer. All connected.",
    desc: "Shopify, WooCommerce, Unicommerce, Tally, custom builds. One dashboard for everything.",
    tags: ["₹30k–₹80k"],
  },
];

const layer3: Item[] = [
  {
    n: "01",
    title: "Custom AI Model Development",
    sub: "Your data. Your domain. Intelligence competitors can't access.",
    desc: "Custom ML, deep learning, computer vision, NLP trained on your business data. LLM integrations (RAG). Predictive analytics.",
    tags: ["Scoped on consultation"],
  },
  {
    n: "02",
    title: "Intelligent Document Processing (OCR)",
    sub: "Turn paper into data. Automatically.",
    desc: "AI pipelines reading, extracting, validating, routing documents. Invoices, ID documents, forms, medical records. Multi-language.",
    tags: ["Scoped per project"],
  },
  {
    n: "03",
    title: "Custom Software + Mobile App Development",
    sub: "When off-the-shelf stops working, we build what doesn't exist yet.",
    desc: "iOS, Android, web platforms tailored to how your business actually works. AI-native from day one — not bolted on after.",
    tags: ["Scoped on consultation"],
  },
];

function LayerBlock({
  eyebrow,
  headline,
  accent,
  items,
}: {
  eyebrow: string;
  headline: string;
  accent: string;
  items: Item[];
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  useScrollSetup(ref as React.RefObject<HTMLElement>, (el) => {
    el.querySelectorAll<HTMLElement>("[data-acc-row]").forEach((row) => {
      gsap.fromTo(
        row,
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: { trigger: row, start: "top 90%", once: true },
        },
      );
    });
  }, []);

  return (
    <div ref={ref} className="mb-20">
      <Reveal>
        <span className="font-mono-tech text-[11px] uppercase tracking-[0.3em] text-[hsl(var(--lav-purple))]">
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={1}>
        <h2
          className="font-display mt-4 font-extrabold leading-[1.05] tracking-[-0.03em] text-foreground"
          style={{ fontSize: "clamp(28px, 3.6vw, 46px)" }}
        >
          {headline}{" "}
          <span
            style={{
              background:
                "linear-gradient(135deg, hsl(var(--lav-purple)), hsl(var(--lav-magenta)) 55%, hsl(var(--lav-pink)))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {accent}
          </span>
        </h2>
      </Reveal>

      <Accordion
        type="single"
        collapsible
        className="mt-8 w-full border-t border-foreground/[0.08]"
      >
        {items.map((it) => (
          <AccordionItem
            key={it.n}
            value={it.n}
            data-acc-row
            data-magnify
            className="border-b border-foreground/[0.08]"
          >
            <AccordionTrigger className="group flex w-full items-start gap-6 py-7 text-left hover:no-underline md:py-8 [&>svg]:hidden">
              <div className="font-mono-tech w-12 shrink-0 pt-1 text-[11px] uppercase tracking-[0.3em] text-[hsl(var(--lav-purple))]">
                {it.n}
              </div>
              <div className="flex-1">
                <div
                  className="font-display font-bold leading-[1.05] tracking-[-0.02em] text-foreground"
                  style={{ fontSize: "clamp(20px, 2.2vw, 30px)" }}
                >
                  {it.title}
                </div>
                <div className="mt-2 text-sm text-muted-foreground md:text-base">{it.sub}</div>
              </div>
              <div className="font-display ml-4 shrink-0 pt-1 text-2xl text-foreground/55 transition-transform duration-300 group-data-[state=open]:rotate-180">
                ↓
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-8">
              <div className="grid grid-cols-12 gap-6 pl-0 md:pl-[72px]">
                <div className="col-span-12 md:col-span-7">
                  <p className="text-base leading-relaxed text-foreground/75 md:text-lg">
                    {it.desc}
                  </p>
                </div>
                <div className="col-span-12 flex flex-wrap content-start gap-2 md:col-span-5">
                  {it.tags.map((t, i) => (
                    <span
                      key={i}
                      className="font-mono-tech inline-flex items-center rounded-full border border-[hsl(var(--lav-purple)/0.4)] bg-[hsl(var(--lav-purple)/0.08)] px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-[hsl(var(--lav-purple))]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export function ZenLayerServices() {
  return (
    <section className="px-6 py-20 lg:px-12">
      <div className="mx-auto max-w-[1200px]">
        <LayerBlock
          eyebrow="Layer 01 · Automations · Live in Days"
          headline="The fastest way to see AI working in"
          accent="your business."
          items={layer1}
        />
        <LayerBlock
          eyebrow="Layer 02 · Integrations"
          headline="Your tools work fine. The problem: they don't"
          accent="talk to each other."
          items={layer2}
        />
        <LayerBlock
          eyebrow="Layer 03 · Custom AI + Tech"
          headline="When off-the-shelf stops working, we build what"
          accent="doesn't exist yet."
          items={layer3}
        />
      </div>
    </section>
  );
}
