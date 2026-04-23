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
    <section id="problem" className="px-6 py-32 lg:px-12 lg:py-48">
      <div className="mx-auto max-w-[1100px]">
        <Reveal>
          <p className="mb-4 text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
            The Real Problem
          </p>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="mx-auto mb-6 max-w-3xl text-center font-display font-extrabold leading-[1.05] tracking-[-0.03em] text-foreground"
              style={{ fontSize: "clamp(36px, 6vw, 68px)" }}>
            You don't need more tools.
            <br />
            You need <em className="not-italic text-primary">one system.</em>
          </h2>
        </Reveal>
        <Reveal delay={2}>
          <p className="mx-auto mb-20 max-w-2xl text-center text-[15px] leading-relaxed text-moondust">
            Most businesses are running five vendors, five workflows, and zero alignment. Nobody owns the full picture.
          </p>
        </Reveal>

        <div className="grid items-start gap-8 md:grid-cols-2 md:gap-12">
          <Reveal delay={2}>
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/40">
              What you have now
            </p>
            <ul className="space-y-px">
              {before.map((b) => (
                <li
                  key={b}
                  className="flex items-center justify-between border-b border-foreground/[0.06] py-4 text-[14px] text-foreground/55"
                >
                  <span>{b}</span>
                  <span className="text-foreground/25">×</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[13px] leading-relaxed text-foreground/45">
              Five invoices. Five briefing loops. And still no clear results.
            </p>
          </Reveal>

          <Reveal delay={3}>
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">
              Now imagine this instead
            </p>
            <div className="glass-card rounded-2xl p-8">
              <h3 className="mb-4 font-display text-2xl font-extrabold text-foreground">AgenzI</h3>
              <p className="mb-6 text-[14px] leading-relaxed text-foreground/60">
                One system running your creative, marketing, and automation. One point of contact who sees the full picture. No chasing. No coordination. No disconnected tools.
              </p>
              <p className="mb-6 text-[14px] font-semibold leading-relaxed text-foreground">
                Just consistent output — without the overhead.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Creative", "Marketing", "AI + Automation", "One system"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-peri/20 px-3 py-1 text-[11px] font-medium text-foreground/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <p className="mt-6 text-[13px] leading-relaxed text-foreground/45">
              That's what AgenzI builds. One system. 70% lower cost. Results that compound every month.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
