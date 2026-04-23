import { useState } from "react";
import { cn } from "@/lib/utils";

const cats = [
  {
    n: "01",
    label: "Performance",
    body: "Paid search, paid social, AI-optimised bidding. Every rupee traced to a customer before a single ad runs.",
  },
  {
    n: "02",
    label: "Pipeline",
    body: "SEO, email, lead gen, CRO, referral. A pipeline that fills itself — your happiest customers become your best salespeople.",
  },
  {
    n: "03",
    label: "Perception",
    body: "Brand strategy, PR, positioning, reputation. Your market forms an opinion before they ever talk to you. We shape it.",
  },
  {
    n: "04",
    label: "Attribution",
    body: "UTM architecture, conversion tracking, CRM integration. Full visibility from first click to closed deal.",
  },
  {
    n: "05",
    label: "Growth Loops",
    body: "Referral programmes, loyalty, lifecycle automation. Compounding systems that turn satisfaction into advocacy.",
  },
];

export function MaasCategoryList() {
  const [active, setActive] = useState(0);

  return (
    <section className="px-6 py-20 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1200px]">
        <div className="overflow-hidden rounded-[24px] border border-border bg-white">
          {cats.map((c, i) => {
            const open = i === active;
            return (
              <div
                key={c.n}
                className={cn(
                  "border-b border-border last:border-b-0",
                  open && "lav-row-active",
                )}
              >
                <button
                  onClick={() => setActive(i)}
                  className={cn(
                    "group flex w-full items-center justify-between gap-6 px-6 py-6 text-left transition md:px-10 md:py-8",
                    !open && "hover:bg-muted",
                  )}
                >
                  <div className="flex items-center gap-6 md:gap-10">
                    <span
                      className={cn(
                        "font-mono-tech text-[12px] tracking-[0.25em]",
                        open ? "text-white/75" : "text-muted-foreground",
                      )}
                    >
                      {c.n}
                    </span>
                    <span
                      className={cn(
                        "font-display font-extrabold uppercase leading-none tracking-[-0.03em]",
                        open ? "text-white" : "text-foreground",
                      )}
                      style={{ fontSize: "clamp(28px, 4.4vw, 56px)" }}
                    >
                      {c.label}
                    </span>
                  </div>
                  <span
                    className={cn(
                      "shrink-0 text-2xl transition-transform",
                      open ? "rotate-45 text-white" : "text-muted-foreground",
                    )}
                  >
                    +
                  </span>
                </button>
                <div
                  className={cn(
                    "grid overflow-hidden transition-[grid-template-rows] duration-500",
                    open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  )}
                >
                  <div className="overflow-hidden">
                    <p
                      className={cn(
                        "max-w-2xl px-6 pb-8 text-[15px] leading-relaxed md:px-10 md:pb-10 md:text-[17px]",
                        open ? "text-white/90" : "text-muted-foreground",
                      )}
                    >
                      {c.body}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
