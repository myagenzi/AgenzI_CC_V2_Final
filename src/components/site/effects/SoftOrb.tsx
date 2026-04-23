import { useEffect, useRef, useState } from "react";
import { Renderer, Program, Mesh, Triangle } from "ogl";

const VERT = /* glsl */ `
attribute vec2 position;
void main() { gl_Position = vec4(position, 0.0, 1.0); }
`;

const FRAG = /* glsl */ `
precision highp float;
uniform vec2 uRes;
uniform float uTime;
uniform vec2 uCursor;
uniform float uCursorActive;
uniform vec3 uGold;
uniform vec3 uRoyal;

void main() {
  vec2 uv = gl_FragCoord.xy / uRes.xy;
  float aspect = uRes.x / uRes.y;
  vec2 p = vec2(uv.x * aspect, uv.y);

  float t = uTime * 0.10;

  // Drifting orb center, biased to lower middle
  vec2 c = vec2(0.5 * aspect + sin(t * 0.7) * 0.04, 0.42 + cos(t * 0.6) * 0.05);

  // Cursor pulls the orb gently
  vec2 cur = vec2(uCursor.x * aspect, uCursor.y);
  c = mix(c, cur, 0.18 * uCursorActive);

  float d = length(p - c);

  // Multi-stop glow
  float core   = exp(-pow(d / 0.10, 2.0));
  float halo   = exp(-pow(d / 0.32, 2.0));
  float bloom  = exp(-pow(d / 0.55, 2.0));

  vec3 col = mix(uRoyal, uGold, core);
  col = mix(col, vec3(1.0), core * 0.4);

  float a = clamp(core * 0.95 + halo * 0.55 + bloom * 0.22, 0.0, 1.0);
  gl_FragColor = vec4(col, a);
}
`;

function hslVarToRgb(prop: string, fallback: [number, number, number]): [number, number, number] {
  if (typeof window === "undefined") return fallback;
  const v = getComputedStyle(document.documentElement).getPropertyValue(prop).trim();
  if (!v) return fallback;
  const m = v.match(/(-?\d*\.?\d+)\s+(-?\d*\.?\d+)%\s+(-?\d*\.?\d+)%/);
  if (!m) return fallback;
  const h = parseFloat(m[1]) / 360;
  const s = parseFloat(m[2]) / 100;
  const l = parseFloat(m[3]) / 100;
  const k = (n: number) => (n + h * 12) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = (n: number) => l - a * Math.max(-1, Math.min(Math.min(k(n) - 3, 9 - k(n)), 1));
  return [f(0), f(8), f(4)];
}

export function SoftOrb({ className = "" }: { className?: string }) {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const cur = useRef({ x: 0.5, y: 0.5, tx: 0.5, ty: 0.5, active: 0 });
  const [reduced, setReduced] = useState(false);
  const [glFailed, setGlFailed] = useState(false);

  useEffect(() => {
    const m = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(m.matches);
    const on = () => setReduced(m.matches);
    m.addEventListener?.("change", on);
    return () => m.removeEventListener?.("change", on);
  }, []);

  useEffect(() => {
    if (reduced) return;
    const wrap = wrapRef.current;
    if (!wrap) return;

    let renderer: Renderer;
    try {
      renderer = new Renderer({ dpr: Math.min(window.devicePixelRatio, 2), alpha: true });
    } catch {
      setGlFailed(true);
      return;
    }
    const gl = renderer.gl;
    if (!gl) {
      setGlFailed(true);
      return;
    }
    gl.clearColor(0, 0, 0, 0);
    wrap.appendChild(gl.canvas);
    gl.canvas.className = "soft-orb absolute inset-0 h-full w-full";

    const gold = hslVarToRgb("--gold", [0.95, 0.74, 0.33]);
    const royal = hslVarToRgb("--royal", [0.32, 0.4, 0.85]);

    const geom = new Triangle(gl);
    const prog = new Program(gl, {
      vertex: VERT,
      fragment: FRAG,
      uniforms: {
        uRes: { value: [1, 1] },
        uTime: { value: 0 },
        uCursor: { value: [0.5, 0.5] },
        uCursorActive: { value: 0 },
        uGold: { value: gold },
        uRoyal: { value: royal },
      },
      transparent: true,
    });
    const mesh = new Mesh(gl, { geometry: geom, program: prog });

    const resize = () => {
      const r = wrap.getBoundingClientRect();
      renderer.setSize(r.width, r.height);
      prog.uniforms.uRes.value = [gl.drawingBufferWidth, gl.drawingBufferHeight];
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(wrap);

    const onMove = (e: MouseEvent) => {
      const r = wrap.getBoundingClientRect();
      cur.current.tx = Math.max(0, Math.min(1, (e.clientX - r.left) / r.width));
      cur.current.ty = Math.max(0, Math.min(1, 1 - (e.clientY - r.top) / r.height));
      cur.current.active = 1;
    };
    const onLeave = () => { cur.current.active = 0; };
    window.addEventListener("mousemove", onMove);
    wrap.addEventListener("mouseleave", onLeave);

    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      cur.current.x += (cur.current.tx - cur.current.x) * 0.05;
      cur.current.y += (cur.current.ty - cur.current.y) * 0.05;
      prog.uniforms.uTime.value = (now - start) / 1000;
      prog.uniforms.uCursor.value = [cur.current.x, cur.current.y];
      prog.uniforms.uCursorActive.value = cur.current.active;
      renderer.render({ scene: mesh });
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("mousemove", onMove);
      wrap.removeEventListener("mouseleave", onLeave);
      try { wrap.removeChild(gl.canvas); } catch { /* noop */ }
    };
  }, [reduced]);

  if (reduced || glFailed) {
    return (
      <div className={`pointer-events-none ${className}`} aria-hidden>
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 55%, hsl(var(--gold) / 0.32) 0%, hsl(var(--royal) / 0.20) 35%, transparent 70%)",
            filter: "blur(8px)",
          }}
        />
      </div>
    );
  }

  return <div ref={wrapRef} className={`pointer-events-none relative ${className}`} aria-hidden />;
}
