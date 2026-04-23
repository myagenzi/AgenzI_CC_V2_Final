import { Reveal } from "@/components/site/Reveal";

export function Statement() {
  return (
    <section className="px-6 py-24 text-center lg:px-12 lg:py-32">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <p
            className="font-display font-extrabold leading-[1.15] tracking-[-0.02em] text-foreground"
            style={{ fontSize: "clamp(26px, 4.6vw, 56px)" }}
          >
            Most agencies give you output.{" "}
            <span className="text-primary">We give you a system that keeps producing it.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
