import { useEffect, useRef, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function useGsap<T extends HTMLElement = HTMLDivElement>(
  setup: (ctx: { root: T; gsap: typeof gsap; ScrollTrigger: typeof ScrollTrigger }) => void | (() => void),
  deps: unknown[] = [],
): RefObject<T | null> {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!ref.current) return;
    const root = ref.current;
    let cleanup: void | (() => void);

    const ctx = gsap.context(() => {
      cleanup = setup({ root, gsap, ScrollTrigger });
    }, root);

    return () => {
      if (typeof cleanup === "function") cleanup();
      ctx.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return ref;
}

export { gsap, ScrollTrigger };
