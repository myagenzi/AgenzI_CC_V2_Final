import { Reveal } from "@/components/site/Reveal";

export function Statement() {
  return (
    <section className="px-6 py-32 text-center lg:px-12 lg:py-48">
      <Reveal>
        <p className="mx-auto max-w-4xl font-display font-extrabold leading-[1.15] tracking-[-0.02em] text-foreground/35"
           style={{ fontSize: "clamp(28px, 5vw, 64px)" }}>
          Most agencies give you <span className="text-foreground">output.</span>
          <br />
          We give you a <em className="not-italic text-primary">system that keeps producing it.</em>
        </p>
      </Reveal>
    </section>
  );
}
