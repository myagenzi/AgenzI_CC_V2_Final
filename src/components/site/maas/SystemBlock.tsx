import { Reveal } from "@/components/site/Reveal";
import { ServiceAccordion, type ServiceItem } from "@/components/site/caas/ServiceAccordion";

type Props = {
  eyebrow: string;
  headline: React.ReactNode;
  items: ServiceItem[];
  thumbId?: string;
  first?: boolean;
};

export function SystemBlock({ eyebrow, headline, items, first = false }: Props) {
  return (
    <section
      className={
        "px-6 py-20 md:px-16 md:py-24 " +
        (first ? "border-t border-foreground/[0.08]" : "border-t border-foreground/[0.08]")
      }
    >
      <Reveal>
        <p className="font-mono-tech mb-4 text-[11px] uppercase tracking-[0.3em] text-foreground/50">
          {eyebrow}
        </p>
        <h2
          className="font-display mb-12 font-bold uppercase leading-[0.95] tracking-[-0.03em]"
          style={{ fontSize: "clamp(34px, 5.5vw, 84px)" }}
        >
          {headline}
        </h2>
      </Reveal>
      <Reveal delay={1}>
        <ServiceAccordion items={items} />
      </Reveal>
    </section>
  );
}
