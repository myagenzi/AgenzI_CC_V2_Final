import { Reveal } from "@/components/site/Reveal";

const partnerTypes = [
  "SME Partners",
  "Tech Startups",
  "Professional Services",
  "D2C Brands",
  "Growth-stage Startups",
  "SaaS Founders",
  "SME Partners",
  "Tech Startups",
  "Professional Services",
  "D2C Brands",
  "Growth-stage Startups",
  "SaaS Founders",
];

export function Stats() {
  return (
    <section className="overflow-hidden border-y border-foreground/[0.06] py-14">
      <Reveal>
        <p className="mx-auto mb-8 max-w-2xl px-6 text-center text-[13px] font-medium leading-relaxed text-foreground/60">
          "Helping founders reclaim{" "}
          <span className="font-semibold text-foreground">20+ hours a week</span>{" "}
          while increasing lead conversion by{" "}
          <span className="font-semibold text-primary">40%."</span>
        </p>
      </Reveal>

      {/* Partner type marquee */}
      <div className="relative overflow-hidden" aria-hidden>
        <div className="animate-marquee flex gap-10 whitespace-nowrap">
          {partnerTypes.map((p, i) => (
            <span
              key={`${p}-${i}`}
              className="font-display text-[clamp(16px,2.2vw,26px)] font-extrabold tracking-[-0.02em] text-foreground/12"
            >
              {p}
              <span className="ml-4 text-primary">·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
