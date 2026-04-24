import { useEffect, useRef, useState } from "react";

const SIGNAL_SELECTOR =
  'a, button, [role="button"], input, textarea, select, label, [data-magnify], .chip-purple, nav a, footer a, .pill, .eyebrow, .cursor-hover';
const READING_SELECTOR =
  "p, li, blockquote, small, td, span.lead, span.sd, .lead, .sd";

type Mode = "idle" | "signal" | "reading";

const LENS_RADIUS = 42; // px on screen — matches .cursor-reading 84px
const SCALE = 1.55;

export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const lensRef = useRef<HTMLDivElement | null>(null);
  const cloneRef = useRef<HTMLElement | null>(null);
  const sourceRef = useRef<HTMLElement | null>(null);
  const sourceRect = useRef<DOMRect | null>(null);

  const target = useRef({ x: -100, y: -100 });
  const ring = useRef({ x: -100, y: -100 });
  const vel = useRef({ x: 0, y: 0 });
  const activeEl = useRef<HTMLElement | null>(null);
  const modeRef = useRef<Mode>("idle");
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

    // Create persistent lens portal
    const lens = document.createElement("div");
    lens.className = "lens-clone";
    lens.setAttribute("aria-hidden", "true");
    document.body.appendChild(lens);
    lensRef.current = lens;

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

    const teardownClone = () => {
      if (!lensRef.current) return;
      lensRef.current.classList.remove("is-active");
      lensRef.current.replaceChildren();
      lensRef.current.style.backgroundColor = "";
      if (sourceRef.current) {
        sourceRef.current.removeAttribute("data-mag-source");
      }
      cloneRef.current = null;
      sourceRef.current = null;
      sourceRect.current = null;
    };

    const findOpaqueBg = (el: HTMLElement): string => {
      let node: HTMLElement | null = el;
      while (node && node !== document.documentElement) {
        const cs = window.getComputedStyle(node);
        const bg = cs.backgroundColor;
        // Match rgba(r,g,b,a) — accept if alpha is missing (rgb) or > 0.5
        const m = bg.match(/rgba?\(([^)]+)\)/);
        if (m) {
          const parts = m[1].split(",").map((s) => parseFloat(s.trim()));
          const a = parts.length === 4 ? parts[3] : 1;
          if (a > 0.5) return bg;
        }
        node = node.parentElement;
      }
      return window.getComputedStyle(document.body).backgroundColor || "#ffffff";
    };

    const setupClone = (sourceEl: HTMLElement) => {
      if (!lensRef.current) return;
      if (sourceRef.current === sourceEl) return;
      // Skip cloning inside form controls
      if (sourceEl.closest("input, textarea, select, [contenteditable]")) {
        teardownClone();
        return;
      }
      const rect = sourceEl.getBoundingClientRect();
      // Skip oversized blocks (entire columns / hero text)
      if (rect.width > 1200 || rect.height > 600 || rect.width < 8 || rect.height < 8) {
        teardownClone();
        return;
      }
      // Tear down previous source first (restore its text)
      if (sourceRef.current && sourceRef.current !== sourceEl) {
        sourceRef.current.removeAttribute("data-mag-source");
      }
      sourceRef.current = sourceEl;
      sourceRect.current = rect;

      const clone = sourceEl.cloneNode(true) as HTMLElement;
      clone.removeAttribute("id");
      clone.removeAttribute("data-mag-source");
      clone.querySelectorAll("[id]").forEach((n) => n.removeAttribute("id"));
      clone.querySelectorAll("[data-mag-source]").forEach((n) =>
        n.removeAttribute("data-mag-source"),
      );

      const cs = window.getComputedStyle(sourceEl);
      clone.style.position = "absolute";
      clone.style.left = `${rect.left}px`;
      clone.style.top = `${rect.top}px`;
      clone.style.width = `${rect.width}px`;
      clone.style.height = `${rect.height}px`;
      clone.style.margin = "0";
      clone.style.overflow = "hidden";
      clone.style.fontFamily = cs.fontFamily;
      clone.style.fontSize = cs.fontSize;
      clone.style.fontWeight = cs.fontWeight;
      clone.style.lineHeight = cs.lineHeight;
      clone.style.letterSpacing = cs.letterSpacing;
      clone.style.color = cs.color;
      clone.style.textAlign = cs.textAlign;
      clone.style.padding = cs.padding;
      clone.style.boxSizing = cs.boxSizing;

      // Opaque background so original text under the lens doesn't show through
      lensRef.current.style.backgroundColor = findOpaqueBg(sourceEl);
      lensRef.current.replaceChildren(clone);
      cloneRef.current = clone;
      lensRef.current.classList.add("is-active");

      // Hide original text while lens is over it (layout preserved)
      sourceEl.setAttribute("data-mag-source", "");
    };

    const updateLens = (cx: number, cy: number) => {
      if (!lensRef.current || !cloneRef.current || !sourceRect.current) return;
      const rect = sourceRect.current;
      // Local coordinates inside the source element
      const localX = cx - rect.left;
      const localY = cy - rect.top;
      cloneRef.current.style.transformOrigin = `${localX}px ${localY}px`;
      cloneRef.current.style.transform = `scale(${SCALE})`;
      lensRef.current.style.clipPath = `circle(${LENS_RADIUS}px at ${cx}px ${cy}px)`;
      (lensRef.current.style as any).webkitClipPath = `circle(${LENS_RADIUS}px at ${cx}px ${cy}px)`;
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
        if (modeRef.current !== "signal") {
          modeRef.current = "signal";
          setMode("signal");
        }
        setActive(signal);
        teardownClone();
        return;
      }
      const reading = el?.closest(READING_SELECTOR) as HTMLElement | null;
      if (reading && !reducedRef.current && reading.textContent?.trim()) {
        if (modeRef.current !== "reading") {
          modeRef.current = "reading";
          setMode("reading");
        }
        setActive(null);
        setupClone(reading);
        updateLens(e.clientX, e.clientY);
        return;
      }
      if (modeRef.current !== "idle") {
        modeRef.current = "idle";
        setMode("idle");
      }
      setActive(null);
      teardownClone();
    };

    const onScrollOrResize = () => {
      if (sourceRef.current && cloneRef.current) {
        const rect = sourceRef.current.getBoundingClientRect();
        sourceRect.current = rect;
        cloneRef.current.style.left = `${rect.left}px`;
        cloneRef.current.style.top = `${rect.top}px`;
        updateLens(target.current.x, target.current.y);
      }
    };

    const onLeave = () => {
      modeRef.current = "idle";
      setMode("idle");
      setActive(null);
      teardownClone();
    };

    let raf = 0;
    const stiffness = 0.18;
    const damping = 0.72;
    const tick = () => {
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
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseout", onLeave);
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      setActive(null);
      teardownClone();
      lensRef.current?.remove();
      lensRef.current = null;
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
