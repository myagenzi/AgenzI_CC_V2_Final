import { useEffect, type RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type Builder = (el: HTMLElement) => gsap.core.Timeline | gsap.core.Tween | (() => void) | void;

/**
 * Run a GSAP/ScrollTrigger setup tied to a ref's element. Cleans up on unmount.
 */
export function useScrollSetup<T extends HTMLElement>(
  ref: RefObject<T>,
  build: Builder,
  deps: unknown[] = [],
) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const ctx = gsap.context(() => {
      build(el);
    }, el);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

export { gsap, ScrollTrigger };
