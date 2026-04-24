import { Reveal } from "@/components/site/Reveal";

export function AboutWeCreate() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
        <Reveal>
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-5">
            <span
              data-magnify
              className="rounded-full border border-foreground/15 bg-background px-7 py-4 font-display font-bold text-foreground/85"
              style={{ fontSize: "clamp(28px, 4vw, 56px)" }}
            >
              We
            </span>
            <span
              data-magnify
              className="cta-purple rounded-full px-8 py-4 font-display font-bold text-primary-foreground"
              style={{ fontSize: "clamp(28px, 4vw, 56px)" }}
            >
              Build
            </span>
            <span
              data-magnify
              aria-hidden
              className="inline-flex h-[64px] w-[64px] items-center justify-center rounded-full bg-foreground font-display text-2xl text-background md:h-[88px] md:w-[88px] md:text-4xl"
            >
              →
            </span>
            <span
              data-magnify
              className="rounded-full border border-foreground/15 bg-background px-7 py-4 font-display font-bold text-foreground/85"
              style={{ fontSize: "clamp(28px, 4vw, 56px)" }}
            >
              Systems
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
