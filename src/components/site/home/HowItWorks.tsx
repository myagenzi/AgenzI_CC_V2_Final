import { Reveal } from "@/components/site/Reveal";

const steps = [
  {
    num: 1,
    badge: "Step 01 — Audit",
    title: "See What's Broken",
    sub: "In 30 minutes, you'll see exactly what's broken — and what to fix first.",
    body: "We map how your business is actually running today. Where time is being wasted. Where money is leaking. Where things are disconnected. No jargon. No overwhelm. Just clarity.",
    pts: ["What's slowing you down", "What can be automated immediately", "What's costing you growth"],
    foot: "Roadmap is yours to keep — regardless of what you decide next.",
  },
  {
    num: 2,
    badge: "Step 02 — Build Your System",
    title: "This Is Where Everything Changes",
    sub: "We don't give you a plan. We build the system for you.",
    body: "One system. Designed around your business. One integrated engine running Creative, Marketing, and Automation. Powered by two things working as one:",
    cards: true,
  },
  {
    num: 3,
    badge: "Step 03 — Let It Run",
    title: "Your Business Starts Moving",
    sub: "Without constant effort, coordination, or chasing.",
    body: "You don't manage anything. No chasing. No coordinating. No stitching tools together. You just see the output.",
    pts: ["Content goes live — consistently", "Leads come in — without chasing", "Tasks get handled — automatically"],
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="surface-white py-24 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
        <Reveal>
          <p className="eyebrow center mb-5 justify-center">How AgenzI Works</p>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="mx-auto mb-5 max-w-2xl text-center font-display text-[clamp(28px,4.5vw,54px)] font-extrabold leading-[1.06] tracking-[-0.03em]">
            We don't add more tools.
            <br />
            We replace the chaos with <span className="text-primary">one system.</span>
          </h2>
        </Reveal>

        <Reveal delay={1}>
          <div className="relative mb-12 overflow-hidden rounded-2xl border border-border bg-muted px-8 py-6">
            <span
              className="absolute bottom-0 left-0 top-0 w-[3px] bg-gradient-to-b from-primary to-peri"
              aria-hidden
            />
            <p className="text-[15px] leading-relaxed">
              Most agencies give you advice.{" "}
              <strong className="text-nebula">We install a system that runs your business.</strong> Not separate
              services. Not disconnected tools. One integrated engine running Creative, Marketing, and
              Automation — powered by Human Strategy and AI Execution working as one.
            </p>
          </div>
        </Reveal>

        <ol className="flex flex-col">
          {steps.map((s, i) => (
            <Reveal key={s.num} delay={Math.min(i + 1, 4) as 1 | 2 | 3 | 4} as="li" className="block">
              <div className="relative grid grid-cols-[64px_1fr] gap-6 border-b border-border py-10 last:border-b-0 sm:grid-cols-[88px_1fr] sm:gap-9">
                {i !== steps.length - 1 && (
                  <span
                    className="absolute left-[31px] top-[88px] bottom-0 w-px sm:left-[43px]"
                    style={{ background: "linear-gradient(180deg, hsl(var(--nebula)) 0%, hsl(var(--nebula) / 0.06) 100%)" }}
                    aria-hidden
                  />
                )}
                <div
                  className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gradient-num font-display text-xl font-extrabold text-white sm:h-[88px] sm:w-[88px] sm:text-2xl"
                  style={{ boxShadow: "0 0 0 8px hsl(var(--nebula) / 0.07)" }}
                >
                  {s.num}
                </div>
                <div>
                  <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-peri">{s.badge}</p>
                  <h3 className="mb-2 font-display text-[clamp(22px,3vw,32px)] font-extrabold tracking-[-0.02em]">
                    {s.title}
                  </h3>
                  <p className="mb-4 text-base font-medium text-muted-foreground">{s.sub}</p>
                  <p className="mb-5 max-w-xl text-[15px] leading-relaxed text-muted-foreground">{s.body}</p>

                  {s.pts && (
                    <ul className="mb-4 space-y-2">
                      {s.pts.map((p) => (
                        <li key={p} className="flex items-start gap-2.5 text-sm text-foreground/50">
                          <span className="font-bold text-primary">→</span>
                          {p}
                        </li>
                      ))}
                    </ul>
                  )}

                  {s.foot && <p className="text-xs italic text-muted-foreground/70">{s.foot}</p>}

                  {s.cards && <HumanAiCards />}
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

function HumanAiCards() {
  return (
    <>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <article className="rounded-2xl border border-border bg-card p-8 transition hover:-translate-y-1">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-peri">🧠 Human Strategy</p>
          <h4 className="mb-2 font-display text-xl font-extrabold">Your Strategic Lead</h4>
          <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
            A dedicated operator who understands your business — and sees the full picture.
          </p>
          <ul className="space-y-2 text-[13px] text-foreground/55">
            <li className="flex gap-2"><span className="text-peri">→</span>One point of contact for everything</li>
            <li className="flex gap-2"><span className="text-peri">→</span>One strategy across creative, marketing, and growth</li>
            <li className="flex gap-2"><span className="text-peri">→</span>Decisions based on outcomes, not tasks</li>
          </ul>
        </article>

        <article className="relative overflow-hidden rounded-2xl border border-border bg-gradient-ai-card p-8 transition hover:-translate-y-1">
          <span
            className="absolute right-6 top-6 inline-block h-2 w-2 animate-green-pulse rounded-full bg-[hsl(142_71%_58%)]"
            aria-hidden
          />
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-primary">⚡ AI Execution</p>
          <h4 className="mb-2 font-display text-xl font-extrabold text-starlight">Always-On System</h4>
          <p className="mb-4 text-sm leading-relaxed text-moondust">
            A custom-built system that handles the heavy lifting — continuously.
          </p>
          <ul className="space-y-2 text-[13px] text-starlight/40">
            <li className="flex gap-2"><span className="text-primary">→</span>Content creation and deployment</li>
            <li className="flex gap-2"><span className="text-primary">→</span>Lead capture and qualification</li>
            <li className="flex gap-2"><span className="text-primary">→</span>Workflow automation and optimization</li>
          </ul>
        </article>
      </div>
      <div className="mt-5 rounded-xl border border-border bg-muted px-7 py-5 text-center text-[15px] leading-relaxed">
        Together, they replace what used to take multiple people, tools, and vendors.
        <br />
        <strong className="text-nebula">This isn't another service layer. It's the system your business runs on.</strong>
      </div>
    </>
  );
}
