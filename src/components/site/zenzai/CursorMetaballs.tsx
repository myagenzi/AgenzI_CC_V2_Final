import { useEffect, useRef } from "react";

type Blob = {
  ax: number; ay: number;   // anchor (relative 0..1)
  x: number; y: number;     // current position
  vx: number; vy: number;   // velocity
  r: number;                // radius
};

const FILTER_ID = "zenzai-goo";

/**
 * Cursor-reactive metaballs. Pure SVG + RAF.
 * Three blobs softly attracted to cursor; gooey filter merges overlaps.
 * Falls back to static halo on prefers-reduced-motion or below md.
 */
export function CursorMetaballs() {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const blobsRef = useRef<Blob[] | null>(null);
  const circlesRef = useRef<(SVGCircleElement | null)[]>([]);
  const sizeRef = useRef({ w: 0, h: 0 });
  const cursorRef = useRef<{ x: number; y: number; active: boolean }>({
    x: 0, y: 0, active: false,
  });
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const small =
      typeof window !== "undefined" &&
      window.matchMedia("(max-width: 767px)").matches;

    // Initialise blobs (anchor positions roughly forming a triangle)
    blobsRef.current = [
      { ax: 0.42, ay: 0.5, x: 0, y: 0, vx: 0, vy: 0, r: 150 },
      { ax: 0.55, ay: 0.42, x: 0, y: 0, vx: 0, vy: 0, r: 110 },
      { ax: 0.5,  ay: 0.6,  x: 0, y: 0, vx: 0, vy: 0, r: 90  },
    ];

    const onResize = () => {
      const rect = svg.getBoundingClientRect();
      sizeRef.current = { w: rect.width, h: rect.height };
      // Snap blob positions to anchors on resize
      blobsRef.current?.forEach((b) => {
        b.x = b.ax * rect.width;
        b.y = b.ay * rect.height;
      });
    };
    onResize();

    const onMove = (e: MouseEvent) => {
      const rect = svg.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      cursorRef.current.x = x;
      cursorRef.current.y = y;
      cursorRef.current.active =
        x >= 0 && x <= rect.width && y >= 0 && y <= rect.height;
    };
    const onLeave = () => { cursorRef.current.active = false; };

    if (reduced || small) {
      // Render anchors in place — no animation
      blobsRef.current?.forEach((b, i) => {
        const c = circlesRef.current[i];
        if (c) {
          c.setAttribute("cx", String(b.x));
          c.setAttribute("cy", String(b.y));
        }
      });
    } else {
      window.addEventListener("mousemove", onMove);
      window.addEventListener("mouseleave", onLeave);
      window.addEventListener("resize", onResize);

      const tick = () => {
        const { w, h } = sizeRef.current;
        const blobs = blobsRef.current!;
        const cur = cursorRef.current;

        for (let i = 0; i < blobs.length; i++) {
          const b = blobs[i];
          const anchorX = b.ax * w;
          const anchorY = b.ay * h;

          // Spring back to anchor
          const kAnchor = 0.012;
          b.vx += (anchorX - b.x) * kAnchor;
          b.vy += (anchorY - b.y) * kAnchor;

          // Cursor attraction (capped)
          if (cur.active) {
            const dx = cur.x - b.x;
            const dy = cur.y - b.y;
            const dist = Math.sqrt(dx * dx + dy * dy) + 0.001;
            const range = 360 + i * 40;
            if (dist < range) {
              const force = ((range - dist) / range) * (0.55 + i * 0.18);
              b.vx += (dx / dist) * force;
              b.vy += (dy / dist) * force;
            }
          }

          // Damping
          b.vx *= 0.86;
          b.vy *= 0.86;

          b.x += b.vx;
          b.y += b.vy;

          const c = circlesRef.current[i];
          if (c) {
            c.setAttribute("cx", String(b.x));
            c.setAttribute("cy", String(b.y));
          }
        }

        rafRef.current = requestAnimationFrame(tick);
      };
      rafRef.current = requestAnimationFrame(tick);
    }

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      className="metaball-svg absolute inset-0 h-full w-full"
      aria-hidden
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <filter id={FILTER_ID}>
          <feGaussianBlur in="SourceGraphic" stdDeviation="22" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 26 -12"
            result="goo"
          />
          <feBlend in="SourceGraphic" in2="goo" />
        </filter>
        <radialGradient id="zenzai-grad-a" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor="hsl(var(--gold))" stopOpacity="0.95" />
          <stop offset="60%" stopColor="hsl(var(--gold) / 0.55)" />
          <stop offset="100%" stopColor="hsl(var(--gold) / 0)" />
        </radialGradient>
        <radialGradient id="zenzai-grad-b" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="hsl(var(--royal, var(--primary)))" stopOpacity="0.85" />
          <stop offset="100%" stopColor="hsl(var(--gold) / 0)" />
        </radialGradient>
      </defs>

      <g filter={`url(#${FILTER_ID})`}>
        <circle
          ref={(el) => (circlesRef.current[0] = el)}
          r="150"
          fill="url(#zenzai-grad-a)"
        />
        <circle
          ref={(el) => (circlesRef.current[1] = el)}
          r="110"
          fill="url(#zenzai-grad-b)"
        />
        <circle
          ref={(el) => (circlesRef.current[2] = el)}
          r="90"
          fill="url(#zenzai-grad-a)"
        />
      </g>
    </svg>
  );
}
