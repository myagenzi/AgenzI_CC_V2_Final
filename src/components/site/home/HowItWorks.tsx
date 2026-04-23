import { Reveal } from "@/components/site/Reveal";

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
    body: "One system. Designed around your business. One integrated engine running Creative, Marketing, and Automation. Powered by two things working as one — Human Strategy (your dedicated operator who sees the full picture) and AI Execution (an always-on system handling the heavy lifting).",
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

export function HowItWorks() {
  return (
    <section id="how-it-works" className="px-6 py-24 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1180px]">
        <Reveal>
          <p className="mb-3 text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
            How AgenzI Works
          </p>
        </Reveal>
        <Reveal delay={1}>
          <h2
            className="mx-auto mb-5 max-w-3xl text-center font-display font-extrabold leading-[1.05] tracking-[-0.03em] text-foreground"
            style={{ fontSize: "clamp(32px, 5.4vw, 60px)" }}
          >
            We don't add more tools. We replace the chaos with{" "}
            <span className="text-primary">one system.</span>
          </h2>
        </Reveal>
        <Reveal delay={2}>
          <p className="mx-auto mb-14 max-w-2xl text-center text-[15px] leading-relaxed text-muted-foreground">
            Most agencies give you advice. We install a system that runs your business — Creative, Marketing, and Automation, powered by Human Strategy and AI Execution working as one.
          </p>
        </Reveal>

        <div className="grid items-stretch gap-5 md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.num} delay={(i + 1) as 1 | 2 | 3}>
              <article className="glass-lavender flex h-full flex-col rounded-3xl p-7">
                <div className="mb-4 flex items-baseline justify-between">
                  <div className="font-display text-5xl font-extrabold leading-none tracking-[-0.04em] text-primary">
                    {s.num}
                  </div>
                  <span className="chip-purple rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider">
                    {s.badge}
                  </span>
                </div>
                <h3 className="mb-3 font-display text-2xl font-extrabold tracking-[-0.02em] text-foreground">
                  {s.title}
                </h3>
                <p className="mb-3 text-[14px] font-medium text-foreground/85">{s.sub}</p>
                <p className="mb-5 text-[13px] leading-relaxed text-muted-foreground">{s.body}</p>
                <ul className="mb-4 space-y-2">
                  {s.pts.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-[13px] text-muted-foreground">
                      <span className="text-primary">→</span>
                      {p}
                    </li>
                  ))}
                </ul>
                {s.foot && <p className="mt-auto text-[12px] italic text-muted-foreground">{s.foot}</p>}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
