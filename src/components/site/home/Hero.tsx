export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pb-32 pt-40 text-center lg:px-12 lg:pt-48"
    >
      {/* Single soft background bloom */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 95%, hsl(var(--royal) / 0.18) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 50% 110%, hsl(var(--gold) / 0.16) 0%, transparent 65%)",
        }}
      />

      {/* Eyebrow pill — glassmorphic */}
      <div className="glass mb-10 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[12px] text-foreground/75">
        <span className="text-primary">✦</span>
        Human + AI · One System
      </div>

      {/* Headline with gradient wash */}
      <h1 className="mx-auto max-w-5xl font-display font-extrabold leading-[0.98] tracking-[-0.04em] text-gradient-light"
          style={{ fontSize: "clamp(48px, 9vw, 120px)" }}>
        Your competitors aren't
        <br />
        working harder. <em className="not-italic text-primary">They have</em>
        <br />
        <em className="not-italic text-primary">better systems.</em>
      </h1>

      {/* Sub */}
      <p className="mx-auto mt-8 max-w-xl text-[clamp(15px,1.6vw,18px)] leading-relaxed text-moondust">
        AgenzI replaces agencies, tools, and manual work with one intelligent system built for your business.
      </p>

      {/* CTAs */}
      <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
        <a
          href="#contact"
          className="cta-glow inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground"
        >
          Book Your Free AI Audit →
        </a>
        <a
          href="#how-it-works"
          className="glass inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-foreground/80 transition hover:text-foreground"
        >
          See how it works <span aria-hidden>↓</span>
        </a>
      </div>

      {/* Hero focal halo */}
      <div className="relative mt-24 flex h-[340px] w-full max-w-[640px] items-center justify-center sm:h-[420px]">
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 60%, hsl(var(--gold) / 0.22) 0%, hsl(var(--royal) / 0.14) 35%, transparent 70%)",
            filter: "blur(8px)",
          }}
        />
        <div
          className="relative h-44 w-44 rounded-full sm:h-56 sm:w-56"
          style={{
            background:
              "radial-gradient(circle at 38% 35%, #ffffff 0%, hsl(var(--gold)) 30%, hsl(var(--royal)) 65%, hsl(var(--cosmic)) 100%)",
            boxShadow: "0 0 120px hsl(var(--gold) / 0.4), 0 0 60px hsl(var(--royal) / 0.45)",
            animation: "haloPulse 5s ease-in-out infinite",
          }}
        />
      </div>
    </section>
  );
}
