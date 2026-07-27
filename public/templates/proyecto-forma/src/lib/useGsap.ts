import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;

export function useGsapReady(cb: (g: typeof gsap) => void | (() => void), deps: unknown[] = []) {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!registered) {
      gsap.registerPlugin(ScrollTrigger);
      registered = true;
    }
    const cleanup = cb(gsap);
    return () => {
      if (typeof cleanup === "function") cleanup();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

export { gsap, ScrollTrigger };