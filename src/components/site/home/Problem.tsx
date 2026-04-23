import { Reveal } from "@/components/site/Reveal";

const before = [
  { ic: "🎨", t: "A social media agency" },
  { ic: "📷", t: "A content or video team" },
  { ic: "📊", t: "A performance marketing agency" },
  { ic: "🤖", t: "AI tools you barely use" },
  { ic: "⚙️", t: "Automations that don't connect" },
];

export function Problem() {
  return (
    <section id="problem" className="surface-white py-24 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
        <Reveal>
          <p className="eyebrow center mb-5 justify-center">The Real Problem</p>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="mx-auto mb-5 max-w-3xl text-center font-display text-[clamp(28px,4.5vw,54px)] font-extrabold leading-[1.06] tracking-[-0.03em]">
            You don't need more tools.
            <br />
            You need <span className="text-primary">one system.</span>
          </h2>
        </Reveal>
        <Reveal delay={1}>
          <p className="mx-auto mb-14 max-w-2xl text-center text-base leading-relaxed text-muted-foreground">
            Most businesses are running five vendors, five workflows, and zero alignment. Nobody owns the
            full picture.
          </p>
        </Reveal>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Before */}
          <Reveal delay={2}>
            <p className="mb-3.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground/70">
              What you have now
            </p>
            <ul className="flex flex-col gap-1">
              {before.map((b) => (
                <li
                  key={b.t}
                  className="relative flex items-center gap-3 rounded-xl border border-border bg-muted px-4 py-3.5 pr-10"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[hsl(0_70%_55%/0.07)] text-base">
                    {b.ic}
                  </span>
                  <span className="text-sm text-muted-foreground">{b.t}</span>
                  <span className="absolute right-4 text-sm font-extrabold text-[hsl(0_70%_55%)]">×</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 rounded-xl border border-[hsl(0_70%_85%)] bg-[hsl(0_100%_98%)] px-5 py-4 text-sm leading-relaxed text-[hsl(0_60%_42%)]">
              <strong>Five invoices. Five briefing loops. And still no clear results.</strong>
              <br />
              You're repeating the same brief over and over. Waiting days for things that should take hours.
            </div>
          </Reveal>

          {/* After */}
          <Reveal delay={3}>
            <p className="mb-3.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground/70">
              Now imagine this instead
            </p>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-engine p-9 text-starlight">
              <div
                className="absolute inset-0"
                style={{ background: "radial-gradient(circle at 80% 20%, hsl(0 0% 100% / 0.07) 0%, transparent 55%)" }}
                aria-hidden
              />
              <div className="relative">
                <h3 className="mb-3.5 font-display text-2xl font-extrabold text-white">AgenzI</h3>
                <p className="mb-5 text-sm leading-relaxed text-white/65">
                  One system running your creative, marketing, and automation. One point of contact who sees
                  the full picture. No chasing. No coordination. No disconnected tools.
                  <br />
                  <br />
                  <strong className="text-white">Just consistent output — without the overhead.</strong>
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Creative", "Marketing", "AI + Automation", "One system"].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/12 px-3.5 py-1.5 text-[11px] font-semibold tracking-wide text-white/85"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-3 rounded-xl border border-peri/20 bg-peri/[0.07] px-4 py-3 text-sm text-nebula">
              That's what AgenzI builds. One system. 70% lower cost. Results that compound every month.
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
