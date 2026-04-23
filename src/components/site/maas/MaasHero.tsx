import { useRef } from "react";
import { cn } from "@/lib/utils";
import { MediaPlaceholder } from "@/components/site/MediaPlaceholder";
import { useScrollSetup, gsap, ScrollTrigger } from "@/lib/scroll";

const lines: { text: string; accent?: boolean }[] = [
  { text: "Marketing that doesn't" },
  { text: "bring in customers" },
  { text: "isn't marketing.", accent: true },
  { text: "It's decoration.", accent: true },
];

export function MaasHero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const bgRef = useRef<HTMLDivElement | null>(null);
  const subRef = useRef<HTMLDivElement | null>(null);

  useScrollSetup(sectionRef, (el) => {
    const heads = el.querySelectorAll<HTMLElement>("[data-maas-line]");
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.fromTo(
      heads,
      { yPercent: 105, opacity: 0 },
      { yPercent: 0, opacity: 1, duration: 1.0, stagger: 0.11 },
      0,
    );
    if (subRef.current) tl.fromTo(subRef.current, { y: 22, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, 0.55);

    // Cinematic background scale 1.0 → 1.08 across pin
    if (bgRef.current) {
      gsap.fromTo(
        bgRef.current,
        { scale: 1 },
        {
          scale: 1.08,
          ease: "none",
          scrollTrigger: { trigger: el, start: "top top", end: "+=80%", scrub: true },
        },
      );
    }

    ScrollTrigger.create({
      trigger: el,
      start: "top top",
      end: "+=80%",
      pin: true,
      pinSpacing: true,
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden px-6 pb-16 pt-40 md:px-16 md:pb-24 md:pt-48"
    >
      <div ref={bgRef} className="pointer-events-none absolute inset-0 -z-0 opacity-30 will-change-transform">
        <div className="absolute inset-0">
          <MediaPlaceholder aspect="21/9" label="Hero loop" kind="video" className="h-full" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      <div className="relative z-10">
        <div className="mb-12 flex items-center gap-4">
          <span className="font-mono-tech text-[11px] uppercase tracking-[0.3em] text-foreground/50">
            02 / Engine · MaaS
          </span>
          <span className="h-px flex-1 bg-foreground/[0.08]" />
          <span className="font-mono-tech text-[11px] uppercase tracking-[0.3em] text-foreground/50">
            Marketing as a Service
          </span>
        </div>

        <h1 className="font-display font-bold uppercase leading-[0.95] tracking-[-0.035em]">
          {lines.map((l, i) => (
            <span key={i} className="block overflow-hidden">
              <span
                data-maas-line
                className={cn("inline-block", l.accent && "text-electric")}
                style={{ fontSize: "clamp(40px, 7.2vw, 124px)" }}
              >
                {l.text}
              </span>
            </span>
          ))}
        </h1>

        <div ref={subRef} className="mt-14 grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-6 md:col-start-7">
            <p className="font-mono-tech mb-3 text-[11px] uppercase tracking-[0.25em] text-foreground/50">
              ↓ Manifesto
            </p>
            <p className="text-base leading-relaxed text-foreground/75 md:text-lg">
              You paid the invoice. Asked for results. Got a deck full of impressions.
              MaaS measures one thing: revenue.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
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
