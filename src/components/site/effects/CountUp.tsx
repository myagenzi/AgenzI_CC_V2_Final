import { useEffect, useRef } from "react";
import { useScrollSetup, gsap } from "@/lib/scroll";

type Props = {
  value: string; // e.g. "70%", "48h", "90D", "3"
  duration?: number;
  className?: string;
};

/**
 * Counts the numeric portion of `value` up from 0 → target as it enters viewport.
 * Preserves any non-numeric prefix/suffix (e.g. %, h, D).
 */
export function CountUp({ value, duration = 1.6, className }: Props) {
  const ref = useRef<HTMLSpanElement | null>(null);

  // Parse "70%" → { num: 70, prefix: "", suffix: "%" }
  const match = value.match(/^([^\d-]*)(-?\d*\.?\d+)(.*)$/);
  const prefix = match?.[1] ?? "";
  const target = match ? parseFloat(match[2]) : 0;
  const suffix = match?.[3] ?? "";
  const isInt = !match || !match[2].includes(".");

  useScrollSetup(ref as React.RefObject<HTMLSpanElement>, (el) => {
    const obj = { v: 0 };
    gsap.to(obj, {
      v: target,
      duration,
      ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top 85%", once: true },
      onUpdate: () => {
        const n = isInt ? Math.round(obj.v) : obj.v.toFixed(1);
        el.textContent = `${prefix}${n}${suffix}`;
      },
    });
  }, []);

  // SSR-safe initial render shows full value (so reduced-motion / no-JS users see it)
  return (
    <span ref={ref} className={className}>
      {value}
    </span>
  );
}
