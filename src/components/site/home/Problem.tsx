import { Reveal } from "@/components/site/Reveal";

const before = [
  "A social media agency",
  "A content or video team",
  "A performance marketing agency",
  "AI tools you barely use",
  "Automations that don't connect",
];

export function Problem() {
  return (
    <section id="problem" className="px-6 py-24 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1100px]">
        <Reveal>
          <p className="mb-3 text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
            The Problem
          </p>
        </Reveal>
        <Reveal delay={1}>
          <h2
            className="mx-auto mb-5 max-w-3xl text-center font-display font-extrabold leading-[1.05] tracking-[-0.03em] text-foreground"
            style={{ fontSize: "clamp(32px, 5.4vw, 60px)" }}
          >
            You don't have a marketing problem.
            <br />
            You have a <span className="text-primary">system problem.</span>
          </h2>
        </Reveal>
        <Reveal delay={2}>
          <p className="mx-auto mb-16 max-w-2xl text-center text-[15px] leading-relaxed text-muted-foreground">
            Most businesses are running five vendors, five workflows, and zero alignment. Nobody owns the full picture.
          </p>
        </Reveal>

        <div className="grid items-start gap-6 md:grid-cols-2">
          <Reveal delay={2}>
            <div className="glass-lavender h-full rounded-3xl p-8">
              <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                What you have now
              </p>
              <ul className="space-y-px">
                {before.map((b) => (
                  <li
                    key={b}
                    className="flex items-center justify-between border-b border-border py-4 text-[14px] text-foreground/70 last:border-b-0"
                  >
                    <span>{b}</span>
                    <span className="text-foreground/30">×</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-[13px] leading-relaxed text-muted-foreground">
                Five invoices. Five briefing loops. And still no clear results.
              </p>
            </div>
          </Reveal>

          <div className="lg:sticky lg:top-24">
            <Reveal delay={3}>
              <div className="glass-dark-panel relative rounded-3xl p-8">
                <div className="relative z-10">
                  <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[hsl(var(--lav-lilac))]">
                    Now imagine this instead
                  </p>
                  <h3 className="mb-4 font-display text-2xl font-extrabold text-white">AgenzI</h3>
                  <p className="mb-5 text-[14px] leading-relaxed text-white/70">
                    One system running your creative, marketing, and automation. One point of contact who sees the full picture. No chasing. No coordination. No disconnected tools.
                  </p>
                  <p className="mb-6 text-[14px] font-semibold leading-relaxed text-white">
                    Just consistent output — without the overhead.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Creative", "Marketing", "AI + Automation", "One system"].map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 text-[11px] font-medium text-white/85"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="mt-6 text-[13px] leading-relaxed text-muted-foreground">
                That's what AgenzI builds. One system. 70% lower cost. Results that compound every month.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
