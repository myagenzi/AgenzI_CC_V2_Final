import { useRef } from "react";
import { cn } from "@/lib/utils";
import { useScrollSetup, gsap } from "@/lib/scroll";

const lines: { text: string; accent?: boolean; italic?: boolean }[] = [
  { text: "Marketing that doesn't" },
  { text: "bring in customers" },
  { text: "isn't marketing.", accent: true, italic: true },
  { text: "It's decoration.", accent: true, italic: true },
];

export function MaasHero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const subRef = useRef<HTMLDivElement | null>(null);
  const orbRef = useRef<HTMLDivElement | null>(null);

  useScrollSetup(sectionRef, (el) => {
    const heads = el.querySelectorAll<HTMLElement>("[data-maas-line]");
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.fromTo(
      heads,
      { yPercent: 110, opacity: 0 },
      { yPercent: 0, opacity: 1, duration: 1.0, stagger: 0.11 },
      0,
    );
    if (subRef.current)
      tl.fromTo(subRef.current, { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, 0.55);

    if (orbRef.current) {
      gsap.to(orbRef.current, {
        scale: 1.15,
        ease: "none",
        scrollTrigger: { trigger: el, start: "top top", end: "bottom top", scrub: true },
      });
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden px-6 pb-24 pt-40 md:px-16 md:pb-32 md:pt-48"
    >
      {/* Cosmic backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div ref={orbRef} className="absolute inset-0 maas-hero-bg will-change-transform" />
        <div className="absolute inset-0 maas-hero-grid opacity-60" />
      </div>

      <div className="relative z-10">
        {/* Eyebrow row */}
        <div className="mb-12 flex items-center gap-4">
          <span className="font-mono-tech rounded-full border border-gold/40 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-gold"
                style={{ borderColor: "hsl(var(--gold) / 0.45)", color: "hsl(var(--gold))" }}>
            Engine 02 · MaaS
          </span>
          <span className="h-px flex-1 bg-foreground/[0.08]" />
          <span className="font-mono-tech text-[11px] uppercase tracking-[0.3em] text-foreground/55">
            Marketing as a Service
          </span>
        </div>

        <h1 className="font-display font-bold uppercase leading-[0.95] tracking-[-0.035em] text-foreground">
          {lines.map((l, i) => (
            <span key={i} className="block overflow-hidden">
              <span
                data-maas-line
                className={cn(
                  "inline-block",
                  l.accent && "text-electric",
                  l.italic && "italic",
                )}
                style={{ fontSize: "clamp(40px, 7.2vw, 124px)" }}
              >
                {l.text}
              </span>
            </span>
          ))}
        </h1>

        <div ref={subRef} className="mt-14 grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-7 md:col-start-6">
            <p className="font-mono-tech mb-3 text-[11px] uppercase tracking-[0.25em] text-gold"
               style={{ color: "hsl(var(--gold))" }}>
              ↓ Manifesto
            </p>
            <p className="text-base leading-relaxed text-foreground/80 md:text-lg">
              You paid the invoice. You asked for results. You got a deck full of impressions,
              reach, and engagement. <span className="text-foreground">MaaS measures one thing — revenue.</span>{" "}
              Every rupee traced to a customer. Every channel tied to pipeline. Every campaign
              answering one question: <em>did this make us money?</em>
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="/#contact"
                className="cta-glow inline-flex items-center gap-3 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
              >
                Book Free Audit <span aria-hidden>→</span>
              </a>
              <a
                href="#maas-svcs"
                className="story-link font-mono-tech text-xs uppercase tracking-[0.25em] text-foreground/70 hover:text-foreground"
              >
                See services ↓
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
