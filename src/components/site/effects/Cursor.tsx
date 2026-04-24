import { useEffect, useRef, useState } from "react";

const SIGNAL_SELECTOR =
  'a, button, [role="button"], input, textarea, select, label, [data-magnify], .chip-purple, nav a, footer a, .pill, .eyebrow, .cursor-hover';
const READING_SELECTOR = "p, li, blockquote, small, td, .lead, .sd";

type Mode = "idle" | "signal" | "reading";

export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const target = useRef({ x: -100, y: -100 });
  const ring = useRef({ x: -100, y: -100 });
  const vel = useRef({ x: 0, y: 0 });
  const activeEl = useRef<HTMLElement | null>(null);
  const [enabled, setEnabled] = useState(false);
  const [mode, setMode] = useState<Mode>("idle");
  const reducedRef = useRef(false);

  useEffect(() => {
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    reducedRef.current = reduced;
    if (!canHover) return;
    setEnabled(true);
    document.body.classList.add("cursor-none");

    const setActive = (el: HTMLElement | null) => {
      if (activeEl.current === el) return;
      if (activeEl.current && !reducedRef.current) {
        activeEl.current.removeAttribute("data-mag-active");
      }
      activeEl.current = el;
      if (el && !reducedRef.current) {
        el.setAttribute("data-mag-active", "");
      }
    };

    const onMove = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }
      const el = e.target as HTMLElement | null;
      const signal = el?.closest(SIGNAL_SELECTOR) as HTMLElement | null;
      if (signal) {
        setMode("signal");
        setActive(signal);
        return;
      }
      const reading = el?.closest(READING_SELECTOR) as HTMLElement | null;
      if (reading) {
        setMode("reading");
        setActive(null);
        return;
      }
      setMode("idle");
      setActive(null);
    };

    const onLeave = () => {
      setMode("idle");
      setActive(null);
    };

    let raf = 0;
    const stiffness = 0.18;
    const damping = 0.72;
    const tick = () => {
      // critically-damped spring
      vel.current.x += (target.current.x - ring.current.x) * stiffness;
      vel.current.y += (target.current.y - ring.current.y) * stiffness;
      vel.current.x *= damping;
      vel.current.y *= damping;
      ring.current.x += vel.current.x;
      ring.current.y += vel.current.y;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.current.x}px, ${ring.current.y}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseout", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseout", onLeave);
      setActive(null);
      document.body.classList.remove("cursor-none");
    };
  }, []);

  if (!enabled) return null;

  const ringClass =
    mode === "reading"
      ? "cursor-reading"
      : mode === "signal"
      ? "cursor-signal"
      : "cursor-idle";

  return (
    <>
      <div
        ref={ringRef}
        aria-hidden
        className={`pointer-events-none fixed left-0 top-0 z-[9999] rounded-full ${ringClass}`}
      >
        {mode === "signal" && (
          <>
            <span className="cursor-pulse-ring" style={{ animationDelay: "0s" }} />
            <span className="cursor-pulse-ring" style={{ animationDelay: "0.5s" }} />
            <span className="cursor-pulse-ring" style={{ animationDelay: "1s" }} />
          </>
        )}
      </div>
      <div
        ref={dotRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-1.5 w-1.5 rounded-full transition-opacity duration-150"
        style={{
          backgroundColor: "hsl(var(--lav-purple))",
          opacity: mode === "reading" ? 0 : 1,
          boxShadow: "0 0 0 2px hsl(var(--background) / 0.5)",
        }}
      />
    </>
  );
}
