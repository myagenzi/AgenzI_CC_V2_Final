import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

export type ServiceItem = {
  n: string;
  title: string;
  sub: string;
  desc: string;
  bullets?: string[];
  tags: { kind: "price" | "market" | "audience"; text: string }[];
};

type Props = { items: ServiceItem[]; dimmed?: boolean };

export function ServiceAccordion({ items, dimmed = false }: Props) {
  return (
    <Accordion
      type="single"
      collapsible
      className={cn("w-full border-t border-white/10", dimmed && "opacity-70")}
    >
      {items.map((it) => (
        <AccordionItem
          key={it.n}
          value={it.n}
          className="acc-row border-b border-white/10"
        >
          <AccordionTrigger className="group flex w-full items-start gap-6 py-7 text-left hover:no-underline md:py-9 [&>svg]:hidden">
            <div className="font-mono-tech w-12 shrink-0 pt-1 text-[11px] uppercase tracking-[0.3em] text-foreground/40">
              {it.n}
            </div>
            <div className="flex-1">
              <div
                className="font-display font-bold uppercase leading-[1.02] tracking-[-0.025em]"
                style={{ fontSize: "clamp(22px, 2.6vw, 38px)" }}
              >
                {it.title}
              </div>
              <div className="mt-2 text-sm text-foreground/55 md:text-base">
                {it.sub}
              </div>
            </div>
            <div className="font-display ml-4 shrink-0 pt-1 text-2xl text-foreground/55 transition-transform duration-300 group-data-[state=open]:rotate-180 md:text-3xl">
              ↓
            </div>
          </AccordionTrigger>
          <AccordionContent className="pb-10">
            <div className="grid grid-cols-12 gap-6 pl-0 md:pl-[72px]">
              <div className="col-span-12 md:col-span-7">
                <p className="text-base leading-relaxed text-foreground/75 md:text-lg">
                  {it.desc}
                </p>
                {it.bullets && (
                  <ul className="mt-5 space-y-2">
                    {it.bullets.map((b, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-sm text-foreground/65"
                      >
                        <span className="text-electric">→</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="col-span-12 flex flex-wrap content-start gap-2 md:col-span-5">
                {it.tags.map((t, i) => (
                  <span
                    key={i}
                    className={cn(
                      "font-mono-tech inline-flex items-center rounded-full border px-3 py-1.5 text-[10px] uppercase tracking-[0.18em]",
                      t.kind === "price" &&
                        "tag-price border-electric/60 text-electric",
                      t.kind === "market" &&
                        "tag-market border-foreground/40 text-foreground/75",
                      t.kind === "audience" &&
                        "tag-audience border-foreground/20 text-foreground/55",
                    )}
                  >
                    {t.text}
                  </span>
                ))}
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
