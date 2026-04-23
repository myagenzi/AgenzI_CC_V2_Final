export function MaasGetInTouch() {
  const items = Array.from({ length: 6 }, () => "get in touch");

  return (
    <section id="contact" className="relative overflow-hidden px-6 pb-24 pt-12 lg:px-12">
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap pb-12" aria-hidden>
        {[...items, ...items].map((w, i) => (
          <span
            key={i}
            className="lav-ghost-text"
            style={{ fontSize: "clamp(56px, 10vw, 140px)", lineHeight: 1 }}
          >
            {w} _
          </span>
        ))}
      </div>

      <div className="mx-auto max-w-[1100px]">
        <div className="glass-dark-panel relative overflow-hidden rounded-[28px] p-10 md:p-16">
          <div className="orb-gold absolute -top-20 right-[-40px] h-[260px] w-[260px]" aria-hidden />
          <div className="orb-gold absolute -bottom-24 left-[-40px] h-[200px] w-[200px] opacity-60" aria-hidden />

          <div className="relative grid gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <p className="font-mono-tech mb-4 text-[11px] uppercase tracking-[0.3em] text-[hsl(var(--lav-pink))]">
                Free 30-min audit · No deck · No pitch
              </p>
              <h2
                className="font-display font-extrabold uppercase leading-[1.0] tracking-[-0.03em] text-white"
                style={{ fontSize: "clamp(28px, 4.6vw, 64px)" }}
              >
                Your marketing budget is either{" "}
                <span className="italic text-[hsl(var(--lav-lilac))]">building pipeline</span>{" "}
                or <span className="italic text-[hsl(var(--lav-pink))]">leaking.</span>
              </h2>
              <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/70">
                30 minutes. We look at your current setup. You leave knowing exactly where the gaps are.
              </p>
            </div>

            <div className="md:col-span-4 md:text-right">
              <a
                href="mailto:hello@agenzi.in"
                className="cta-purple inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold"
              >
                Book Free Audit →
              </a>
              <p className="font-mono-tech mt-4 text-[11px] uppercase tracking-[0.25em] text-white/60">
                hello@agenzi.in
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
