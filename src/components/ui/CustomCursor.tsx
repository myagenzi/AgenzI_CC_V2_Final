import { useEffect, useRef } from "react";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const raf = useRef<number>(0);
  const hovered = useRef(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Only re-query the DOM for hover targets when the cursor moves ≥4px.
    // elementFromPoint is cheap but still a layout query; calling it on every
    // mousemove at 60+ events/s causes measurable CPU waste.
    let lastCheckX = -999;
    let lastCheckY = -999;

    const onMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };

      const dx = e.clientX - lastCheckX;
      const dy = e.clientY - lastCheckY;
      if (dx * dx + dy * dy < 16) return; // <4px movement — skip DOM query
      lastCheckX = e.clientX;
      lastCheckY = e.clientY;

      const el = document.elementFromPoint(e.clientX, e.clientY);
      const isHover = !!el?.closest("[data-cursor='hover']");

      if (isHover !== hovered.current) {
        hovered.current = isHover;
        cursor.style.width = isHover ? "28px" : "12px";
        cursor.style.height = isHover ? "28px" : "12px";
        cursor.style.mixBlendMode = isHover ? "difference" : "normal";
        cursor.style.background = isHover ? "white" : "var(--ring-2, #6870BD)";
      }
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const tick = () => {
      pos.current.x = lerp(pos.current.x, target.current.x, 0.08);
      pos.current.y = lerp(pos.current.y, target.current.y, 0.08);
      const offset = hovered.current ? 14 : 6;
      if (cursor) {
        cursor.style.transform = `translate3d(${pos.current.x - offset}px, ${pos.current.y - offset}px, 0)`;
      }
      raf.current = requestAnimationFrame(tick);
    };

    raf.current = requestAnimationFrame(tick);
    window.addEventListener("mousemove", onMove);

    return () => {
      cancelAnimationFrame(raf.current);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: 12,
        height: 12,
        borderRadius: "50%",
        background: "var(--ring-2, #6870BD)",
        zIndex: 9999,
        pointerEvents: "none",
        transition: "width 200ms, height 200ms, background 200ms, mix-blend-mode 200ms",
      }}
    />
  );
}
