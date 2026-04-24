import { Reveal } from "@/components/site/Reveal";

const principles = [
  {
    t: "We tell you what you need to hear — not what you want to.",
    d: "If something won't work, we'll say so in the audit — not after you've spent six months on it.",
    color: "hsl(var(--gold))",
  },
  {
    t: "We only win when you win.",
    d: "Retainer revenue means nothing if your business isn't growing. Our guarantee isn't marketing. It's accountability.",
    color: "hsl(var(--lav-purple))",
  },
  {
    t: "We build for compounding, not one-offs.",
    d: "Every system we build is designed to get better with time. Month three should outperform month one by default.",
    color: "hsl(var(--lav-pink))",
  },
  {
    t: "Small number of clients. Deep commitment.",
    d: "We limit intake deliberately. Every client gets a dedicated Human Agent who treats your business like their own.",
    color: "hsl(var(--lav-magenta))",
  },
];

export function AboutPrinciples() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
        <Reveal>
          <div className="font-mono-tech text-[11px] uppercase tracking-[0.3em] text-foreground/55">
            What We Stand For
          </div>
        </Reveal>
        <Reveal delay={1}>
          <h2
            className="mt-4 font-display font-bold leading-[0.95] tracking-[-0.02em] text-foreground"
            style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
          >
            Our principles don't<br />change with the{" "}
            <span style={{ color: "hsl(var(--gold))", fontStyle: "italic" }}>brief.</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
          {principles.map((p, i) => (
            <Reveal key={p.t} delay={(i % 3) as 0 | 1 | 2}>
              <div
                data-magnify
                className="glass-lavender h-full rounded-2xl p-7 transition-transform duration-300 hover:-translate-y-1"
                style={{ borderLeft: `3px solid ${p.color}` }}
              >
                <div className="font-display text-[17px] font-semibold leading-snug text-foreground">
                  {p.t}
                </div>
                <p className="mt-3 text-[14px] leading-relaxed text-foreground/65">{p.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
