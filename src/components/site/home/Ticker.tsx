import { useEffect, useRef } from "react";
import { useLenis } from "@/lib/lenis";

const items = [
  "Most agencies give you output",
  "We give you a system that keeps producing it",
  "Human strategy + AI execution",
  "One system, built for your business",
  "Creative · Marketing · Automation — all running as one",
];

export function Ticker() {
  const loop = [...items, ...items];
  const trackRef = useRef<HTMLDivElement | null>(null);
  const { lenis } = useLenis();

  useEffect(() => {
    if (!lenis) return;
    const track = trackRef.current;
    if (!track) return;
    const onScroll = ({ velocity }: { velocity: number }) => {
      const v = Math.min(4, Math.abs(velocity) * 0.06);
      const speed = 1 + v;
      track.style.animationDuration = `${Math.max(8, 55 / speed)}s`;
    };
    lenis.on("scroll", onScroll);
    return () => {
      (lenis as unknown as { off?: (e: string, cb: unknown) => void }).off?.("scroll", onScroll);
    };
  }, [lenis]);

  return (
    <div className="overflow-hidden border-y border-foreground/[0.06] py-3">
      <div ref={trackRef} className="flex w-max animate-ticker" style={{ animationDuration: "55s" }}>
        {loop.map((text, i) => (
          <span
            key={i}
            className="flex shrink-0 items-center gap-7 whitespace-nowrap px-8 text-[10px] font-medium uppercase tracking-[0.22em] text-foreground/30"
          >
            {text}
            <span className="text-[5px] text-primary/60">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
