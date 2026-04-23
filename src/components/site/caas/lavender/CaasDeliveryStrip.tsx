import { useState } from "react";
import { Reveal } from "@/components/site/Reveal";
import { MediaPlaceholder } from "@/components/site/MediaPlaceholder";
import { cn } from "@/lib/utils";

const modes = [
  {
    id: "capture",
    label: "Capture — Human-led",
    title: "When you need to be in the room.",
    body:
      "Shoots. Events. On-site production. Human operator on the ground — AI does the heavy lifting in post. Photos in 24 hours. Event reels before guests leave.",
  },
  {
    id: "augmented",
    label: "AI-Augmented",
    title: "The engine room. Where most work lives.",
    body:
      "You brief once. Human creative direction sets the standard. AI executes at scale — video, voice, repurposing, design. Human QC before anything reaches you.",
  },
  {
    id: "automated",
    label: "Automated",
    title: "Set it. It runs.",
    body:
      "For content that happens every week without you managing it. Once the system knows your brand — it produces on schedule. You review. You approve. Done.",
  },
] as const;

const tiles = [
  { label: "Studio shoot",   h: "h-44 md:h-56" },
  { label: "Event capture",  h: "h-56 md:h-72" },
  { label: "Product reel",   h: "h-40 md:h-48" },
  { label: "Founder set",    h: "h-52 md:h-64" },
  { label: "Catalogue grid", h: "h-44 md:h-56" },
];

export function CaasDeliveryStrip() {
  const [active, setActive] = useState<typeof modes[number]["id"]>("capture");
  const current = modes.find((m) => m.id === active)!;

  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto mb-12 max-w-[1200px] px-6 lg:px-12">
        <Reveal>
          <span className="chip-purple inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em]">
            Delivery Modes
          </span>
        </Reveal>
        <Reveal delay={1}>
          <h2
            className="font-display mt-5 font-extrabold uppercase leading-[1.02] tracking-[-0.03em] text-foreground"
            style={{ fontSize: "clamp(32px, 5vw, 64px)" }}
          >
            Not every job needs a film crew.
            <br />
            Not every job can skip one.
          </h2>
        </Reveal>

        {/* Tab control */}
        <div className="mt-10 flex flex-wrap gap-2">
          {modes.map((m) => (
            <button
              key={m.id}
              onClick={() => setActive(m.id)}
              className={cn(
                "font-mono-tech rounded-full border px-5 py-2.5 text-[11px] uppercase tracking-[0.22em] transition-all",
                active === m.id
                  ? "border-transparent bg-gradient-to-r from-[hsl(var(--lav-purple))] to-[hsl(var(--lav-magenta))] text-white shadow-glow-lav"
                  : "border-border bg-white/70 text-foreground hover:bg-white",
              )}
            >
              {m.label}
            </button>
          ))}
        </div>
      </div>

      {/* Edge-to-edge image strip */}
      <div className="overflow-hidden">
        <div className="flex items-end gap-4 px-6 lg:px-12">
          {tiles.map((t, i) => (
            <div
              key={t.label}
              className={cn(
                "shrink-0 grow basis-0 overflow-hidden rounded-2xl border border-border transition-all duration-500",
                t.h,
                i === 1 && active === "capture" && "ring-2 ring-[hsl(var(--lav-purple))]",
                i === 2 && active === "augmented" && "ring-2 ring-[hsl(var(--lav-magenta))]",
                i === 3 && active === "automated" && "ring-2 ring-[hsl(var(--lav-pink))]",
              )}
              style={{ minWidth: "160px" }}
            >
              <MediaPlaceholder
                aspect="4/5"
                kind="image"
                label={t.label}
                className="h-full !aspect-auto"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Active panel */}
      <div className="mx-auto mt-10 max-w-[1200px] px-6 lg:px-12">
        <div key={active} className="grid animate-fade-in grid-cols-1 gap-6 md:grid-cols-12">
          <h3
            className="font-display col-span-12 font-bold leading-[1.05] tracking-[-0.025em] text-foreground md:col-span-6"
            style={{ fontSize: "clamp(24px, 3vw, 40px)" }}
          >
            {current.title}
          </h3>
          <p className="col-span-12 text-base leading-relaxed text-muted-foreground md:col-span-6 md:text-lg">
            {current.body}
          </p>
        </div>
      </div>
    </section>
  );
}
