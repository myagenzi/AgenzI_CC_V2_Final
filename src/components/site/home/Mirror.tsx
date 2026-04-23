import { Reveal } from "@/components/site/Reveal";

const mirrors = [
  "Chase agencies for last week's content",
  "Manage tools that were supposed to save you time",
  "Coordinate people instead of building your business",
  "Fix broken workflows that should just run",
];

export function Mirror() {
  return (
    <section className="px-6 py-24 lg:px-12 lg:py-32">
      <div className="mx-auto grid max-w-[1100px] gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-24">
            <Reveal>
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
                The Mirror
              </p>
            </Reveal>
            <Reveal delay={1}>
              <h2
                className="font-display font-extrabold leading-[1.05] tracking-[-0.03em] text-foreground"
                style={{ fontSize: "clamp(28px, 4.6vw, 54px)" }}
              >
                You didn't start your business{" "}
                <span className="text-primary">to do this.</span>
              </h2>
            </Reveal>
          </div>
        </div>

        <div className="lg:col-span-7">
          <ul className="glass-lavender rounded-3xl p-6 md:p-8">
            {mirrors.map((m, i) => (
              <Reveal key={m} delay={(Math.min(i + 1, 4)) as 1 | 2 | 3 | 4}>
                <li
                  className={`flex items-start gap-4 py-5 text-[15px] leading-relaxed text-foreground/80 ${
                    i !== mirrors.length - 1 ? "border-b border-border" : ""
                  }`}
                >
                  <span className="mt-1 text-primary">▸</span>
                  <span>{m}</span>
                </li>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={3}>
            <p className="mt-10 font-display text-[clamp(20px,2.4vw,28px)] font-bold leading-snug text-foreground">
              You're not lacking effort. You're stuck in a system that doesn't scale.
            </p>
          </Reveal>
          <Reveal delay={4}>
            <div className="mt-8">
              <a
                href="#contact"
                className="cta-purple inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold"
              >
                Book Your Free AI Audit →
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
