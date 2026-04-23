import { useRef } from "react";
import { cn } from "@/lib/utils";
import { useScrollSetup, gsap, ScrollTrigger } from "@/lib/scroll";

const lines: { text: string; accent?: boolean }[] = [
  { text: "You know what your brand" },
  { text: "needs to say." },
  { text: "You just can't say it", accent: true },
  { text: "fast enough.", accent: true },
];

export function CaasHero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const ruleRef = useRef<HTMLSpanElement | null>(null);
  const subRef = useRef<HTMLDivElement | null>(null);

  useScrollSetup(sectionRef, (el) => {
    const heads = el.querySelectorAll<HTMLElement>("[data-caas-line]");
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.fromTo(
      heads,
      { yPercent: 105, opacity: 0 },
      { yPercent: 0, opacity: 1, duration: 1.0, stagger: 0.11 },
      0,
    );
    if (subRef.current) tl.fromTo(subRef.current, { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, 0.55);
    if (ruleRef.current) {
      gsap.fromTo(
        ruleRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          transformOrigin: "left center",
          ease: "none",
          scrollTrigger: { trigger: el, start: "top top", end: "+=60%", scrub: true },
        },
      );
    }
    ScrollTrigger.create({
      trigger: el,
      start: "top top",
      end: "+=70%",
      pin: true,
      pinSpacing: true,
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative px-6 pb-16 pt-40 md:px-16 md:pb-24 md:pt-48"
    >
      <div className="mb-12 flex items-center gap-4">
        <span className="font-mono-tech text-[11px] uppercase tracking-[0.3em] text-foreground/50">
          01 / Engine · CaaS
        </span>
        <span ref={ruleRef} className="h-px flex-1 origin-left bg-white/10" />
        <span className="font-mono-tech text-[11px] uppercase tracking-[0.3em] text-foreground/50">
          Creative as a Service
        </span>
      </div>

      <h1 className="font-display font-bold uppercase leading-[0.95] tracking-[-0.035em]">
        {lines.map((l, i) => (
          <span key={i} className="block overflow-hidden">
            <span
              data-caas-line
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
            Your competitor posted four times this week. You're still in the approval loop for last
            month's reel. CaaS is the creative system that fixes that.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="/#contact"
              className="cta-glow inline-flex items-center gap-3 rounded-full bg-foreground px-7 py-3.5 text-sm font-semibold text-background transition hover:bg-electric hover:text-foreground"
            >
              Book Free Audit <span aria-hidden>→</span>
            </a>
            <a
              href="#caas-svcs"
              className="story-link font-mono-tech text-xs uppercase tracking-[0.25em] text-foreground/70 hover:text-foreground"
            >
              See services ↓
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
