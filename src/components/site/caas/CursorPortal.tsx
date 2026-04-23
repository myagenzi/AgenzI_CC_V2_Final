import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";

type Ctx = {
  setActive: (id: string | null) => void;
  active: string | null;
};

const CursorCtx = createContext<Ctx>({ setActive: () => {}, active: null });

export function useCursorPortal() {
  return useContext(CursorCtx);
}

type Props = {
  children: ReactNode;
  /** map of id -> CSS color/gradient string used as the floating chip background */
  thumbs: Record<string, { label: string; bg: string }>;
};

/**
 * Mounts a single floating element that follows the cursor.
 * Children call `setActive(id)` on hover to display the matching thumb.
 */
export function CursorPortal({ children, thumbs }: Props) {
  const [active, setActive] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement | null>(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const raf = useRef<number | null>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
      if (raf.current == null) {
        raf.current = requestAnimationFrame(loop);
      }
    };
    const loop = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.18;
      pos.current.y += (target.current.y - pos.current.y) * 0.18;
      if (ref.current) {
        ref.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%, -50%)`;
      }
      const dx = Math.abs(target.current.x - pos.current.x);
      const dy = Math.abs(target.current.y - pos.current.y);
      if (dx < 0.2 && dy < 0.2) {
        raf.current = null;
        return;
      }
      raf.current = requestAnimationFrame(loop);
    };
    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  const thumb = active ? thumbs[active] : null;

  return (
    <CursorCtx.Provider value={{ setActive, active }}>
      {children}
      <div
        ref={ref}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-40 hidden md:block"
        style={{ willChange: "transform" }}
      >
        <div
          className="flex h-[220px] w-[280px] items-end justify-start overflow-hidden rounded-sm p-5 text-[11px] uppercase tracking-[0.25em] text-white shadow-2xl transition-all duration-300"
          style={{
            background: thumb?.bg ?? "transparent",
            opacity: thumb ? 1 : 0,
            transform: thumb ? "scale(1)" : "scale(0.92)",
          }}
        >
          <span className="font-mono-tech">{thumb?.label ?? ""}</span>
        </div>
      </div>
    </CursorCtx.Provider>
  );
}
