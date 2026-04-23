import { Reveal } from "@/components/site/Reveal";

const mirrors = [
  "Chase agencies for last week's content",
  "Manage tools that were supposed to save you time",
  "Coordinate people instead of building your business",
  "Fix broken workflows that should just run",
];

export function Mirror() {
  return (
    <section className="surface-cream py-24 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
        <Reveal>
          <p className="eyebrow mb-5">The Mirror</p>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="mb-8 max-w-2xl font-display text-[clamp(28px,4.5vw,54px)] font-extrabold leading-[1.06] tracking-[-0.03em]">
            Take a second.
            <br />
            You didn't start your
            <br />
            business to do this.
          </h2>
        </Reveal>

        <Reveal delay={2}>
          <ul className="max-w-2xl">
            {mirrors.map((m, i) => (
              <li
                key={m}
                className={`flex items-start gap-3.5 py-4 transition-[padding] hover:pl-1.5 ${i !== mirrors.length - 1 ? "border-b border-border" : ""}`}
              >
                <span className="mt-0.5 text-primary">▸</span>
                <span className="text-base leading-relaxed text-foreground">{m}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={3}>
          <p className="mt-7 font-display text-[clamp(18px,2.2vw,24px)] font-bold text-foreground">
            So why does it feel like that's your job now?
          </p>
        </Reveal>
        <Reveal delay={4}>
          <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-muted-foreground">
            That's not a people problem. It's a system problem.
            <br />
            <br />
            <strong className="text-foreground">
              You're not lacking effort. You're stuck in a system that doesn't scale.
            </strong>
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-bold text-primary-foreground transition hover:-translate-y-0.5 hover:bg-primary-bright hover:shadow-gold"
          >
            Book Your Free AI Audit →
          </a>
        </Reveal>
      </div>
    </section>
  );
}
