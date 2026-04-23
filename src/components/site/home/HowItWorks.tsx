import { Reveal } from "@/components/site/Reveal";
import { HorizontalSteps } from "@/components/site/effects/HorizontalSteps";

const steps = [
  {
    num: "01",
    badge: "Audit",
    title: "See What's Broken",
    sub: "In 30 minutes, you'll see exactly what's broken — and what to fix first.",
    body: "We map how your business is actually running today. Where time is being wasted. Where money is leaking. Where things are disconnected. No jargon. No overwhelm. Just clarity.",
    pts: ["What's slowing you down", "What can be automated immediately", "What's costing you growth"],
    foot: "Roadmap is yours to keep — regardless of what you decide next.",
  },
  {
    num: "02",
    badge: "Build Your System",
    title: "This Is Where Everything Changes",
    sub: "We don't give you a plan. We build the system for you.",
    body: "One system. Designed around your business. One integrated engine running Creative, Marketing, and Automation. Powered by Human Strategy and AI Execution working as one.",
    pts: ["One point of contact for everything", "One strategy across creative, marketing, and growth", "Decisions based on outcomes, not tasks"],
  },
  {
    num: "03",
    badge: "Let It Run",
    title: "Your Business Starts Moving",
    sub: "Without constant effort, coordination, or chasing.",
    body: "You don't manage anything. No chasing. No coordinating. No stitching tools together. You just see the output.",
    pts: ["Content goes live — consistently", "Leads come in — without chasing", "Tasks get handled — automatically"],
  },
];

function Step({ s }: { s: typeof steps[number] }) {
  return (
    <div className="grid h-full grid-cols-[auto_1fr] gap-8 sm:gap-12">
      <div className="font-display text-6xl font-extrabold leading-none tracking-[-0.04em] text-primary sm:text-8xl">
        {s.num}
      </div>
      <div>
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/40">
          Step {s.num} — {s.badge}
        </p>
        <h3 className="mb-3 font-display text-[clamp(28px,3.6vw,44px)] font-extrabold tracking-[-0.02em] text-foreground">
          {s.title}
        </h3>
        <p className="mb-4 text-[15px] font-medium text-foreground/70">{s.sub}</p>
        <p className="mb-6 max-w-xl text-[14px] leading-relaxed text-foreground/55">{s.body}</p>
        {s.pts && (
          <ul className="mb-4 space-y-2">
            {s.pts.map((p) => (
              <li key={p} className="flex items-start gap-2.5 text-[13px] text-foreground/55">
                <span className="text-primary">→</span>
                {p}
              </li>
            ))}
          </ul>
        )}
        {s.foot && <p className="text-[12px] italic text-foreground/40">{s.foot}</p>}
      </div>
    </div>
  );
}

export function HowItWorks() {
  return (
    <section id="how-it-works" className="px-6 pt-32 lg:px-12 lg:pt-48">
      <div className="mx-auto max-w-[1100px]">
        <Reveal>
          <p className="mb-4 text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
            How AgenzI Works
          </p>
        </Reveal>
        <Reveal delay={1}>
          <h2
            className="mx-auto mb-6 max-w-3xl text-center font-display font-extrabold leading-[1.05] tracking-[-0.03em] text-foreground"
            style={{ fontSize: "clamp(36px, 6vw, 68px)" }}
          >
            We don't add more tools. We replace
            <br />
            the chaos with <em className="not-italic text-primary">one system.</em>
          </h2>
        </Reveal>
        <Reveal delay={2}>
          <p className="mx-auto mb-16 max-w-2xl text-center text-[15px] leading-relaxed text-moondust">
            Most agencies give you advice. We install a system that runs your business — Creative, Marketing, and Automation, powered by Human Strategy and AI Execution working as one.
          </p>
        </Reveal>
      </div>

      {/* Pinned horizontal scroll over steps */}
      <HorizontalSteps>
        {steps.map((s) => (
          <Step key={s.num} s={s} />
        ))}
      </HorizontalSteps>
    </section>
  );
}
