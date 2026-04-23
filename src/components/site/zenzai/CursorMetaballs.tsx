import { useEffect, useRef, useState } from "react";

type Blob = {
  anchor: { x: number; y: number };
  pos: { x: number; y: number };
  vel: { x: number; y: number };
  r: number;
  mass: number;
  rot: number;
  rotVel: number;
};

const BLOB_COUNT = 5;
const STIFFNESS = 0.018;
const LINEAR_DAMPING = 0.92;
const ANGULAR_DAMPING = 0.94;
const CURSOR_STRENGTH = 1800;
const CURSOR_MAX_FORCE = 2.4;

export function CursorMetaballs() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const cursorRef = useRef({ x: -9999, y: -9999, active: false });
  const blobsRef = useRef<Blob[]>([]);
  const rafRef = useRef<number>();
  const sizeRef = useRef({ w: 0, h: 0 });

  const [reduced, setReduced] = useState(false);
  const [debug, setDebug] = useState({
    damping: LINEAR_DAMPING,
    returnForce: STIFFNESS,
    cursorDist: 0,
    charges: BLOB_COUNT,
  });

  const initBlobs = (w: number, h: number) => {
    const cx = w / 2;
    const cy = h / 2;
    const radii = [110, 86, 72, 58, 44];
    const arr: Blob[] = [];
    for (let i = 0; i < BLOB_COUNT; i++) {
      const ang = (i / BLOB_COUNT) * Math.PI * 2;
      const dist = 70 + i * 14;
      const ax = cx + Math.cos(ang) * dist;
      const ay = cy + Math.sin(ang) * dist * 0.7;
      arr.push({
        anchor: { x: ax, y: ay },
        pos: { x: ax, y: ay },
        vel: { x: 0, y: 0 },
        r: radii[i],
        mass: radii[i] / 60,
        rot: Math.random() * Math.PI * 2,
        rotVel: (Math.random() - 0.5) * 0.02,
      });
    }
    blobsRef.current = arr;
  };

  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mql.matches);
    const onChange = () => setReduced(mql.matches);
    mql.addEventListener?.("change", onChange);
    return () => mql.removeEventListener?.("change", onChange);
  }, []);

  useEffect(() => {
    if (reduced) return;
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const rect = wrap.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      sizeRef.current = { w: rect.width, h: rect.height };
      canvas.width = Math.floor(rect.width * dpr);
      canvas.height = Math.floor(rect.height * dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initBlobs(rect.width, rect.height);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(wrap);

    const onMove = (e: MouseEvent) => {
      const rect = wrap.getBoundingClientRect();
      cursorRef.current.x = e.clientX - rect.left;
      cursorRef.current.y = e.clientY - rect.top;
      cursorRef.current.active = true;
    };
    const onLeave = () => {
      cursorRef.current.active = false;
      cursorRef.current.x = -9999;
      cursorRef.current.y = -9999;
    };
    window.addEventListener("mousemove", onMove);
    wrap.addEventListener("mouseleave", onLeave);

    let lastDebug = 0;
    const root = getComputedStyle(document.documentElement);
    const gold = root.getPropertyValue("--gold").trim() || "44 90% 60%";
    const royal = root.getPropertyValue("--royal").trim() || "230 70% 55%";

    const tick = (t: number) => {
      const { w, h } = sizeRef.current;
      const blobs = blobsRef.current;
      const cur = cursorRef.current;

      let cursorDistAvg = 0;
      for (const b of blobs) {
        const ax = (b.anchor.x - b.pos.x) * STIFFNESS;
        const ay = (b.anchor.y - b.pos.y) * STIFFNESS;
        b.vel.x += ax / b.mass;
        b.vel.y += ay / b.mass;

        if (cur.active) {
          const dx = cur.x - b.pos.x;
          const dy = cur.y - b.pos.y;
          const d2 = dx * dx + dy * dy + 400;
          const f = Math.min(CURSOR_STRENGTH / d2, CURSOR_MAX_FORCE);
          const d = Math.sqrt(d2);
          b.vel.x += (dx / d) * f;
          b.vel.y += (dy / d) * f;
          cursorDistAvg += d;
        }

        b.vel.x *= LINEAR_DAMPING;
        b.vel.y *= LINEAR_DAMPING;
        b.pos.x += b.vel.x;
        b.pos.y += b.vel.y;
        b.rotVel *= ANGULAR_DAMPING;
        b.rot += b.rotVel;
      }
      cursorDistAvg = cur.active ? cursorDistAvg / blobs.length : 0;

      ctx.clearRect(0, 0, w, h);
      ctx.globalCompositeOperation = "lighter";
      for (const b of blobs) {
        const grad = ctx.createRadialGradient(b.pos.x, b.pos.y, 0, b.pos.x, b.pos.y, b.r);
        grad.addColorStop(0, `hsla(${gold}, 1)`);
        grad.addColorStop(0.45, `hsla(${royal}, 0.7)`);
        grad.addColorStop(1, `hsla(${royal}, 0)`);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(b.pos.x, b.pos.y, b.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalCompositeOperation = "source-over";

      if (t - lastDebug > 100) {
        setDebug({
          damping: LINEAR_DAMPING,
          returnForce: STIFFNESS,
          cursorDist: Math.round(cursorDistAvg),
          charges: BLOB_COUNT,
        });
        lastDebug = t;
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      ro.disconnect();
      window.removeEventListener("mousemove", onMove);
      wrap.removeEventListener("mouseleave", onLeave);
    };
  }, [reduced]);

  return (
    <div ref={wrapRef} className="metaball-wrap pointer-events-none absolute inset-0 overflow-hidden">
      {reduced ? (
        <div
          aria-hidden
          className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(circle, hsl(var(--gold) / 0.55) 0%, hsl(var(--royal) / 0.35) 45%, transparent 70%)",
            filter: "blur(20px)",
          }}
        />
      ) : (
        <canvas ref={canvasRef} className="metaball-canvas absolute inset-0" aria-hidden />
      )}

      {!reduced && (
        <div className="debug-panel pointer-events-none absolute bottom-5 left-5 hidden md:block">
          <div className="font-mono-tech text-[10px] uppercase tracking-[0.25em] text-foreground/55">
            <div className="mb-1 text-foreground/70">METABALL · live</div>
            <div className="grid grid-cols-[auto_auto] gap-x-4">
              <span>linear damping</span><span className="text-electric">{debug.damping.toFixed(2)}</span>
              <span>return force</span><span className="text-electric">{debug.returnForce.toFixed(3)}</span>
              <span>cursor distance</span><span className="text-electric">{debug.cursorDist}px</span>
              <span>charges</span><span className="text-electric">{debug.charges}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
