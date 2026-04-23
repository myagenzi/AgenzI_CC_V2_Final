import { Reveal } from "@/components/site/Reveal";

export function Statement() {
  return (
    <section className="bg-navy px-6 py-20 text-center lg:px-12">
      <Reveal>
        <p className="mx-auto max-w-4xl font-display text-[clamp(22px,4vw,52px)] font-extrabold leading-[1.4] tracking-[-0.02em] text-foreground/30">
          Most agencies give you <strong className="text-foreground">output.</strong>
          <br />
          We give you a <em className="not-italic text-primary">system that keeps producing it.</em>
        </p>
      </Reveal>
    </section>
  );
}
