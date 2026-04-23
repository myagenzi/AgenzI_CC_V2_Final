import { Reveal } from "@/components/site/Reveal";
import { MediaPlaceholder } from "@/components/site/MediaPlaceholder";

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
          <Reveal delay={1}>
            <h2
              className="font-display font-extrabold leading-[1.05] tracking-[-0.03em] text-foreground md:col-span-5"
              style={{ fontSize: "clamp(28px, 3.6vw, 48px)" }}
            >
              Your revenue system{" "}
              <span className="text-primary">starts here.</span>
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="text-[clamp(15px,1.4vw,18px)] leading-relaxed text-muted-foreground md:col-span-7">
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
          >
            <MediaPlaceholder
              aspect="21/9"
              kind="image"
              label="MaaS systems overview"
              className="rounded-[24px]"
            />
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <span
                className="font-display font-extrabold uppercase tracking-[-0.03em] text-foreground/80 transition group-hover:text-foreground"
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
