import { useEffect, useRef } from "react";
import { useLenis } from "@/lib/lenis";

type Props = { words: string[] };

export function MarqueeStatement({ words }: Props) {
  const row = [...words, ...words, ...words, ...words];
  const trackRef = useRef<HTMLDivElement | null>(null);
  const { lenis } = useLenis();
  const speedRef = useRef(1);

  useEffect(() => {
    if (!lenis) return; // CaaS/MaaS pages without Lenis stay on pure CSS marquee
    const track = trackRef.current;
    if (!track) return;

    const onScroll = ({ velocity }: { velocity: number }) => {
      // Map velocity into a speed multiplier
      const v = Math.min(4, Math.abs(velocity) * 0.06);
      speedRef.current = 1 + v;
      track.style.animationDuration = `${Math.max(6, 30 / speedRef.current)}s`;
    };
    lenis.on("scroll", onScroll);
    return () => {
      (lenis as unknown as { off?: (e: string, cb: unknown) => void }).off?.("scroll", onScroll);
    };
  }, [lenis]);

  return (
    <div className="overflow-hidden border-y border-foreground/[0.08] py-8">
      <div
        ref={trackRef}
        className="flex w-max animate-marquee items-center gap-12 whitespace-nowrap"
      >
        {row.map((w, i) => (
          <span
            key={i}
            className="font-display text-5xl font-bold uppercase tracking-tight text-foreground/85 md:text-7xl"
          >
            {w}
            <span className="ml-12 inline-block text-electric">●</span>
          </span>
        ))}
      </div>
    </div>
  );
}
