import { Reveal } from "@/components/site/Reveal";
import { ServiceAccordion, type ServiceItem } from "@/components/site/caas/ServiceAccordion";
import { MediaPlaceholder } from "@/components/site/MediaPlaceholder";

type Props = {
  eyebrow: string;
  headline: React.ReactNode;
  items: ServiceItem[];
  thumbId?: string;
  first?: boolean;
  mediaLabel?: string;
  metaLine?: string;
};

export function SystemBlock({
  eyebrow,
  headline,
  items,
  mediaLabel,
  metaLine,
}: Props) {
  return (
    <section className="border-t border-foreground/[0.08] px-6 py-20 md:px-16 md:py-24">
      {mediaLabel && (
        <Reveal>
          <div className="mb-12">
            <MediaPlaceholder
              aspect="16/9"
              kind="video"
              label={mediaLabel}
              className="md:w-[78%]"
            />
          </div>
        </Reveal>
      )}

      <Reveal>
        <p className="font-mono-tech mb-4 text-[11px] uppercase tracking-[0.3em] text-foreground/50">
          {eyebrow}
        </p>
        <h2
          className="font-display mb-6 font-bold uppercase leading-[0.95] tracking-[-0.03em]"
          style={{ fontSize: "clamp(34px, 5.5vw, 84px)" }}
        >
          {headline}
        </h2>
        {metaLine && (
          <p className="font-mono-tech mb-12 text-[11px] uppercase tracking-[0.25em] text-foreground/55">
            {metaLine}
          </p>
        )}
      </Reveal>

      <Reveal delay={1}>
        <ServiceAccordion items={items} />
      </Reveal>
    </section>
  );
}
