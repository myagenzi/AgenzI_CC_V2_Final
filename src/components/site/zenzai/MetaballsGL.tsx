import { useEffect, useRef, useState } from "react";
import { Renderer, Program, Mesh, Triangle } from "ogl";
import { CursorMetaballs2D } from "./CursorMetaballs2D";

const VERT = /* glsl */ `
attribute vec2 position;
void main() { gl_Position = vec4(position, 0.0, 1.0); }
`;

const FRAG = /* glsl */ `
precision highp float;
uniform vec2 uRes;
uniform float uTime;
uniform float uScroll;
uniform vec2 uCursor;       // 0..1 normalized
uniform float uCursorActive;
uniform vec3 uGold;         // rgb 0..1
uniform vec3 uRoyal;
uniform vec3 uBg;

// Smooth min (polynomial)
float smin(float a, float b, float k) {
  float h = clamp(0.5 + 0.5*(b-a)/k, 0.0, 1.0);
  return mix(b, a, h) - k*h*(1.0-h);
}

float metaball(vec2 p, vec2 c, float r) {
  float d = length(p - c);
  return r / max(d, 0.0001);
}

void main() {
  vec2 uv = gl_FragCoord.xy / uRes.xy;
  float aspect = uRes.x / uRes.y;
  vec2 p = vec2(uv.x * aspect, uv.y);

  float t = uTime * 0.18 + uScroll * 1.2;

  // 6 anchored metaballs that breathe with time + scroll
  vec2 c0 = vec2(0.45*aspect + sin(t*0.9)*0.08,        0.55 + cos(t*0.7)*0.06);
  vec2 c1 = vec2(0.62*aspect + sin(t*1.1+1.7)*0.10,    0.40 + cos(t*0.8+0.4)*0.07);
  vec2 c2 = vec2(0.38*aspect + sin(t*0.6+3.1)*0.07,    0.42 + cos(t*1.0+1.2)*0.05);
  vec2 c3 = vec2(0.55*aspect + sin(t*0.8+2.2)*0.06,    0.62 + cos(t*0.6+2.0)*0.06);
  vec2 c4 = vec2(0.50*aspect + sin(t*1.3+0.6)*0.05,    0.50 + cos(t*1.4+1.9)*0.04);
  vec2 c5 = vec2(0.48*aspect + sin(t*0.5+4.0)*0.04,    0.48 + cos(t*0.9+3.3)*0.03);

  // Cursor as additional charge
  vec2 cur = vec2(uCursor.x * aspect, uCursor.y);

  float field = 0.0;
  field += metaball(p, c0, 0.085);
  field += metaball(p, c1, 0.075);
  field += metaball(p, c2, 0.065);
  field += metaball(p, c3, 0.060);
  field += metaball(p, c4, 0.050);
  field += metaball(p, c5, 0.045);
  field += metaball(p, cur, 0.090 * uCursorActive);

  // Iso threshold + soft edge (smoothstep gives liquid feel)
  float iso = 1.0;
  float edge = smoothstep(iso - 0.35, iso + 0.55, field);

  // Inner highlight
  float core = smoothstep(iso + 0.6, iso + 1.6, field);

  // Color ramp: royal -> gold along the surface
  vec3 col = mix(uRoyal, uGold, edge);
  col = mix(col, vec3(1.0), core * 0.35);

  // Composite over background with field-driven alpha
  vec3 outCol = mix(uBg, col, edge);

  gl_FragColor = vec4(outCol, edge);
}
`;

function hslVarToRgb(prop: string, fallback: [number, number, number]): [number, number, number] {
  const v = getComputedStyle(document.documentElement).getPropertyValue(prop).trim();
  if (!v) return fallback;
  const m = v.match(/(-?\d*\.?\d+)\s+(-?\d*\.?\d+)%\s+(-?\d*\.?\d+)%/);
  if (!m) return fallback;
  const h = parseFloat(m[1]) / 360;
  const s = parseFloat(m[2]) / 100;
  const l = parseFloat(m[3]) / 100;
  // HSL -> RGB
  const k = (n: number) => (n + h * 12) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = (n: number) => l - a * Math.max(-1, Math.min(Math.min(k(n) - 3, 9 - k(n)), 1));
  return [f(0), f(8), f(4)];
}

export function MetaballsGL() {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const cursorRef = useRef({ x: 0.5, y: 0.5, tx: 0.5, ty: 0.5, active: 0 });
  const [glFailed, setGlFailed] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [debug, setDebug] = useState({ cx: 0.5, cy: 0.5, scroll: 0, blobs: 6, merge: 0.35 });

  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mql.matches);
    const on = () => setReduced(mql.matches);
    mql.addEventListener?.("change", on);
    return () => mql.removeEventListener?.("change", on);
  }, []);

  useEffect(() => {
    if (reduced) return;
    const wrap = wrapRef.current;
    if (!wrap) return;

    let renderer: Renderer;
    try {
      renderer = new Renderer({ dpr: Math.min(window.devicePixelRatio, 2), alpha: true, antialias: true });
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
    gl.canvas.className = "metaball-gl absolute inset-0 h-full w-full";

    const gold = hslVarToRgb("--gold", [0.95, 0.74, 0.33]);
    const royal = hslVarToRgb("--royal", [0.32, 0.4, 0.85]);

    const geometry = new Triangle(gl);
    const program = new Program(gl, {
      vertex: VERT,
      fragment: FRAG,
      uniforms: {
        uRes: { value: [1, 1] },
        uTime: { value: 0 },
        uScroll: { value: 0 },
        uCursor: { value: [0.5, 0.5] },
        uCursorActive: { value: 0 },
        uGold: { value: gold },
        uRoyal: { value: royal },
        uBg: { value: [0, 0, 0] },
      },
      transparent: true,
    });
    const mesh = new Mesh(gl, { geometry, program });

    const resize = () => {
      const rect = wrap.getBoundingClientRect();
      renderer.setSize(rect.width, rect.height);
      program.uniforms.uRes.value = [gl.drawingBufferWidth, gl.drawingBufferHeight];
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(wrap);

    const onMove = (e: MouseEvent) => {
      const rect = wrap.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = 1 - (e.clientY - rect.top) / rect.height;
      cursorRef.current.tx = Math.max(0, Math.min(1, x));
      cursorRef.current.ty = Math.max(0, Math.min(1, y));
      cursorRef.current.active = 1;
    };
    const onLeave = () => { cursorRef.current.active = 0; };
    window.addEventListener("mousemove", onMove);
    wrap.addEventListener("mouseleave", onLeave);

    const start = performance.now();
    let raf = 0;
    let lastDbg = 0;

    const tick = (now: number) => {
      // Lerp cursor
      cursorRef.current.x += (cursorRef.current.tx - cursorRef.current.x) * 0.08;
      cursorRef.current.y += (cursorRef.current.ty - cursorRef.current.y) * 0.08;

      const scroll = Math.min(1, window.scrollY / Math.max(1, window.innerHeight * 1.2));
      program.uniforms.uTime.value = (now - start) / 1000;
      program.uniforms.uScroll.value = scroll;
      program.uniforms.uCursor.value = [cursorRef.current.x, cursorRef.current.y];
      program.uniforms.uCursorActive.value = cursorRef.current.active;

      renderer.render({ scene: mesh });

      if (now - lastDbg > 100) {
        setDebug({
          cx: cursorRef.current.x,
          cy: cursorRef.current.y,
          scroll,
          blobs: 6,
          merge: 0.35,
        });
        lastDbg = now;
      }
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

  if (reduced) {
    return (
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          aria-hidden
          className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(var(--gold) / 0.55) 0%, hsl(var(--royal) / 0.35) 45%, transparent 70%)",
            filter: "blur(24px)",
          }}
        />
      </div>
    );
  }

  if (glFailed) return <CursorMetaballs2D />;

  return (
    <div ref={wrapRef} className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="debug-panel pointer-events-none absolute bottom-5 left-5 z-20 hidden md:block">
        <div className="font-mono-tech text-[10px] uppercase tracking-[0.25em] text-foreground/55">
          <div className="mb-1 text-foreground/70">METABALL · GL</div>
          <div className="grid grid-cols-[auto_auto] gap-x-4">
            <span>cursor x</span><span className="text-electric">{debug.cx.toFixed(2)}</span>
            <span>cursor y</span><span className="text-electric">{debug.cy.toFixed(2)}</span>
            <span>scroll t</span><span className="text-electric">{debug.scroll.toFixed(2)}</span>
            <span>charges</span><span className="text-electric">{debug.blobs}</span>
            <span>merge k</span><span className="text-electric">{debug.merge.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
