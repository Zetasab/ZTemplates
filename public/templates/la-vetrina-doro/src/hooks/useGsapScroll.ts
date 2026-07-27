import { useEffect, type RefObject } from "react";

type Setup = (ctx: {
  gsap: typeof import("gsap").default;
  ScrollTrigger: typeof import("gsap/ScrollTrigger").ScrollTrigger;
}) => void | (() => void);

/**
 * Runs a GSAP + ScrollTrigger setup on mount, scoped to `scope` if provided.
 * Cleans up all triggers created inside the callback on unmount.
 */
export function useGsapScroll(
  setup: Setup,
  scope?: RefObject<HTMLElement | null>,
) {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let cleanup: (() => void) | void;
    let ctx: ReturnType<typeof import("gsap").default.context> | undefined;

    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      if (reduce) return;

      ctx = gsap.context(() => {
        cleanup = setup({ gsap, ScrollTrigger });
      }, scope?.current ?? undefined);
    })();

    return () => {
      if (cleanup) cleanup();
      ctx?.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
