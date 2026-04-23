import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type LenisCtx = {
  lenis: Lenis | null;
  velocity: number;
};

const Ctx = createContext<LenisCtx>({ lenis: null, velocity: 0 });

export function useLenis() {
  return useContext(Ctx);
}

export function LenisProvider({ children }: { children: ReactNode }) {
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const velRef = useRef(0);
  const [, force] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const l = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    l.on("scroll", ScrollTrigger.update);
    l.on("scroll", ({ velocity }: { velocity: number }) => {
      velRef.current = velocity;
    });

    const raf = (time: number) => {
      l.raf(time);
      requestAnimationFrame(raf);
    };
    const id = requestAnimationFrame(raf);

    gsap.ticker.lagSmoothing(0);
    setLenis(l);

    // Tick a re-render slowly so velocity consumers can subscribe
    const interval = window.setInterval(() => force((n) => (n + 1) % 1000000), 80);

    return () => {
      cancelAnimationFrame(id);
      window.clearInterval(interval);
      l.destroy();
      ScrollTrigger.getAll().forEach((s) => s.kill());
    };
  }, []);

  return <Ctx.Provider value={{ lenis, velocity: velRef.current }}>{children}</Ctx.Provider>;
}
