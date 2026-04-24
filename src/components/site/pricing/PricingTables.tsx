import { Reveal } from "@/components/site/Reveal";

type Row = string[];
type Block = {
  title: string;
  chip: string;
  chipColor: string;
  headers: string[];
  rows: Row[];
};

const blocks: Block[] = [
  {
    title: "CaaS — Creative as a Service",
    chip: "ENGINE 01",
    chipColor: "hsl(var(--gold))",
    headers: ["Service", "Our Price", "Market Rate"],
    rows: [
      ["Social Media Content Pack", "₹2,999–₹8,999/mo", "₹15–40k/mo"],
      ["Repurposing Engine", "₹2,499–₹4,999/session", "₹12–20k equiv."],
      ["Photography + AI Edit Sprint", "₹3,999–₹9,999/shoot", "₹8–25k"],
      ["Commercial Ad Production", "₹4,999–₹12,000/campaign", "₹25–60k"],
      ["Event Reel + Same-Day Delivery", "₹6,000–₹18,000/event", "₹20–60k"],
      ["Founder Content Engine", "₹8,999–₹18,000/mo", "₹30–80k/mo"],
      ["Product Photography + Catalogue Video", "₹2,999–₹6,999/set", "₹10–30k"],
      ["Corporate Event Branding", "₹25,000–₹75,000/event", "₹80k–3L"],
    ],
  },
  {
    title: "Zenzai — Automations",
    chip: "LAYER 01",
    chipColor: "hsl(var(--lav-purple))",
    headers: ["Automation", "Setup", "Monthly"],
    rows: [
      ["WhatsApp Business Automation", "₹8,000–₹15,000", "₹3,000–₹6,000"],
      ["Lead Capture + CRM Automation", "₹10,000–₹20,000", "₹4,000–₹8,000"],
      ["Invoice + Payment Follow-Up", "₹6,000–₹12,000", "₹2,500–₹5,000"],
      ["Appointment Booking + Reminders", "₹6,000–₹10,000", "₹2,000–₹4,000"],
      ["Customer Support AI", "₹12,000–₹25,000", "₹5,000–₹10,000"],
      ["Reporting + Dashboard Automation", "₹8,000–₹18,000", "₹3,000–₹6,000"],
    ],
  },
  {
    title: "MaaS — Marketing",
    chip: "ENGINE 02",
    chipColor: "hsl(var(--lav-pink))",
    headers: ["Service", "Price"],
    rows: [
      ["Paid Search Management", "₹8,000–₹20,000/mo + ad spend"],
      ["Paid Social Management", "₹8,000–₹20,000/mo + ad spend"],
      ["Revenue Attribution Setup", "₹15,000–₹35,000 one-time"],
      ["SEO + Organic Search", "₹15,000–₹40,000/mo"],
      ["Email Marketing + Nurture", "₹10,000–₹25,000/mo"],
      ["Brand Strategy + Positioning", "₹40,000–₹1,00,000 one-time"],
    ],
  },
];

export function PricingTables() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
        <Reveal>
          <div className="text-center">
            <span className="font-mono-tech text-[11px] uppercase tracking-[0.3em] text-foreground/55">
              Per-Service Pricing
            </span>
            <h2
              className="mx-auto mt-3 max-w-[780px] font-display font-bold leading-[1.02] tracking-[-0.02em] text-foreground"
              style={{ fontSize: "clamp(30px, 4vw, 52px)" }}
            >
              Every service. Every price.{" "}
              <span style={{ color: "hsl(var(--gold))", fontStyle: "italic" }}>No mystery.</span>
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 flex flex-col gap-8 lg:mt-20 lg:gap-10">
          {blocks.map((b, i) => (
            <Reveal key={b.title} delay={((i + 1) as 1 | 2 | 3)}>
              <TableBlock block={b} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function TableBlock({ block }: { block: Block }) {
  return (
    <div className="glass-lavender overflow-hidden rounded-[24px] p-6 lg:p-8">
      <div className="mb-6 flex flex-wrap items-center gap-3">
        <h3
          className="font-display font-bold tracking-[-0.02em] text-foreground"
          style={{ fontSize: "clamp(20px, 2.2vw, 28px)" }}
        >
          {block.title}
        </h3>
        <span
          className="rounded-full px-3 py-1 font-mono-tech text-[10px] font-semibold uppercase tracking-[0.28em]"
          style={{
            background: `${block.chipColor.replace(")", "/.18)")}`,
            color: block.chipColor,
            border: `1px solid ${block.chipColor.replace(")", "/.35)")}`,
          }}
        >
          {block.chip}
        </span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[520px] border-collapse text-left">
          <thead>
            <tr>
              {block.headers.map((h, idx) => (
                <th
                  key={h}
                  className="border-b border-foreground/15 pb-3 font-mono-tech text-[10px] font-semibold uppercase tracking-[0.28em] text-foreground/55"
                  style={{ textAlign: idx === 0 ? "left" : "right" }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.rows.map((row) => (
              <tr key={row[0]} className="group transition-colors hover:bg-white/40">
                {row.map((cell, idx) => (
                  <td
                    key={idx}
                    className="border-b border-foreground/[0.07] py-4 text-[14px] text-foreground/85"
                    style={{
                      textAlign: idx === 0 ? "left" : "right",
                      fontWeight: idx === 0 ? 500 : 600,
                      color: idx === 0 ? "hsl(var(--foreground) / 0.9)" : "hsl(var(--foreground) / 0.75)",
                      fontFamily: idx === 0 ? undefined : "var(--font-mono, ui-monospace), monospace",
                    }}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
