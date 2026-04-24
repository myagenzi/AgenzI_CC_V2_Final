import { useEffect, useRef, useState } from "react";

const MAGNIFY_SELECTOR =
  'a, button, [role="button"], input, textarea, select, label, nav a, footer a, .chip-purple, .pill, .eyebrow, .tag, [data-magnify], .cursor-hover';

export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const target = useRef({ x: -100, y: -100 });
  const ring = useRef({ x: -100, y: -100 });
  const activeEl = useRef<HTMLElement | null>(null);
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
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
      const match = el?.closest(MAGNIFY_SELECTOR) as HTMLElement | null;
      const isHover = !!match;
      setHovering(isHover);
      setActive(match);
    };

    const onLeave = () => {
      setHovering(false);
      setActive(null);
    };

    let raf = 0;
    const tick = () => {
      ring.current.x += (target.current.x - ring.current.x) * 0.18;
      ring.current.y += (target.current.y - ring.current.y) * 0.18;
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

  return (
    <>
      <div
        ref={ringRef}
        aria-hidden
        className={`pointer-events-none fixed left-0 top-0 z-[9999] rounded-full transition-[width,height,background-color,border-color,box-shadow] duration-200 ease-out ${
          hovering ? "cursor-lens" : "h-8 w-8 border-[1.5px]"
        }`}
        style={
          hovering
            ? undefined
            : {
                borderColor: "hsl(var(--lav-purple))",
                backgroundColor: "transparent",
              }
        }
      >
        {hovering && (
          <span className="pointer-events-none absolute right-2 top-2 font-mono-tech text-[10px] font-bold text-[hsl(var(--lav-purple))]">
            +
          </span>
        )}
      </div>
      <div
        ref={dotRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-1.5 w-1.5 rounded-full transition-opacity duration-150"
        style={{
          backgroundColor: "hsl(var(--lav-purple))",
          opacity: hovering ? 0 : 1,
        }}
      />
    </>
  );
}
