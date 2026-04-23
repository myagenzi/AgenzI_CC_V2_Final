import { Reveal } from "@/components/site/Reveal";

export function MaasIntroBand() {
  return (
    <section className="px-6 py-20 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <span className="chip-purple inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em]">
            About MaaS
          </span>
        </Reveal>

        <div className="mt-8 grid gap-10 md:grid-cols-12">
          <Reveal delay={1} className="md:col-span-5">
            <h2
              className="font-display font-extrabold leading-[1.05] tracking-[-0.03em] text-foreground"
              style={{ fontSize: "clamp(28px, 3.6vw, 48px)" }}
            >
              Your revenue system{" "}
              <span className="text-primary">starts here.</span>
            </h2>
          </Reveal>
          <Reveal delay={2} className="md:col-span-7">
            <p className="text-[clamp(15px,1.4vw,18px)] leading-relaxed text-muted-foreground">
              MaaS is not a campaign retainer. It's a revenue operating system. Three integrated
              systems — Performance, Pipeline, and Perception — all measured against one number that
              actually matters: rupees in the bank. Every channel attributed. Every campaign answering
              one question — <em className="text-foreground">did this make us money?</em>
            </p>
          </Reveal>
        </div>

        <Reveal delay={2}>
          <a
            href="#maas-systems"
            className="group relative mt-12 block overflow-hidden rounded-[24px]"
            style={{
              aspectRatio: "21 / 9",
              background:
                "linear-gradient(135deg, hsl(var(--lav-purple)) 0%, hsl(var(--lav-magenta)) 55%, hsl(var(--lav-pink)) 100%)",
            }}
          >
            <div className="absolute inset-0 opacity-30 mix-blend-overlay [background-image:radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.6),transparent_55%),radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.4),transparent_50%)]" aria-hidden />
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-6 text-center">
              <span
                className="font-display font-extrabold uppercase tracking-[-0.03em] text-white transition group-hover:scale-[1.02]"
                style={{ fontSize: "clamp(28px, 5vw, 72px)" }}
              >
                View More About Systems →
              </span>
            </div>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
