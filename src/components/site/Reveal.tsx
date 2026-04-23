import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealProps = {
  className?: string;
  delay?: 0 | 1 | 2 | 3 | 4;
  children: ReactNode;
};

/**
 * Fades + slides in once when scrolled into view. Honors reduced motion.
 * Always renders a <div> wrapper to guarantee a stable DOM ref target.
 */
export function Reveal({ className, delay = 0, children }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setVisible(true);
      return;
    }
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setVisible(true);
            obs.disconnect();
            break;
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  const delayCls = delay ? `reveal-d${delay}` : "";
  return (
    <div ref={ref} className={cn("reveal", delayCls, visible && "is-visible", className)}>
      {children}
    </div>
  );
}
