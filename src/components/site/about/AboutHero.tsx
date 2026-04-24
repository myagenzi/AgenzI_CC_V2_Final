import { Reveal } from "@/components/site/Reveal";
import { MediaPlaceholder } from "@/components/site/MediaPlaceholder";

export function AboutHero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 lg:pt-40 lg:pb-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(60% 50% at 20% 20%, hsl(var(--lav-purple)/.18), transparent 60%), radial-gradient(50% 40% at 90% 10%, hsl(var(--lav-pink)/.14), transparent 60%)",
        }}
      />



      <div className="relative mx-auto grid max-w-[1200px] grid-cols-1 gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-12">
        {/* Left: copy */}
        <div className="flex flex-col justify-center">
          <Reveal>
            <span data-magnify className="chip-purple inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em]">
              <span className="h-1.5 w-1.5 rounded-full bg-[hsl(var(--lav-purple))]" />
              About · AgenzI
            </span>
          </Reveal>

          <Reveal delay={1}>
            <h1
              className="mt-6 font-display font-bold leading-[0.95] tracking-[-0.03em] text-foreground"
              style={{ fontSize: "clamp(44px, 6vw, 78px)" }}
            >
              We're not building<br />an agency.
              <br />
              <em
                className="not-italic"
                style={{ color: "hsl(var(--gold))", fontStyle: "italic" }}
              >
                We're building the<br />operating system<br />for business growth.
              </em>
            </h1>
          </Reveal>

          <Reveal delay={2}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="/book-audit"
                data-magnify
                className="cta-purple rounded-full px-6 py-3 text-[13px] font-semibold"
              >
                Book Free Audit →
              </a>
              <a
                href="/#pricing"
                data-magnify
                className="rounded-full border border-foreground/15 px-6 py-3 text-[13px] font-semibold text-foreground/80 transition hover:border-foreground/30 hover:text-foreground"
              >
                See pricing
              </a>
            </div>
          </Reveal>
        </div>

        {/* Right: media tile */}
        <div className="relative">
          <Reveal delay={1}>
            <div className="glass-lavender relative overflow-hidden rounded-[28px] p-2">
              <MediaPlaceholder
                aspect="4/5"
                kind="image"
                label="Founder Portrait"
                className="rounded-[22px]"
              />
              {/* floating mini-card */}
              <div
                data-magnify
                className="glass-lavender absolute bottom-6 left-6 max-w-[200px] rounded-2xl p-4"
                style={{ backdropFilter: "blur(12px)" }}
              >
                <div className="font-mono-tech text-[10px] uppercase tracking-[0.25em] text-foreground/55">
                  ◴ Hub
                </div>
                <div className="mt-1 font-display text-[15px] font-semibold leading-tight text-foreground">
                  Designed to explore →
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="relative mx-auto mt-16 max-w-[1200px] border-t border-foreground/10 px-6 pt-6 lg:px-12">
        <div className="font-mono-tech flex flex-wrap items-center justify-between gap-4 text-[11px] uppercase tracking-[0.25em] text-foreground/55">
          <span>5+ Yrs Building Systems</span>
          <span>Based in Hyderabad, India</span>
          <span className="inline-flex items-center gap-2">
            Scroll Down <span aria-hidden>↓</span>
          </span>
        </div>
      </div>
    </section>
  );
}
