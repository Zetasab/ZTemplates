import { useEffect } from "react";

/**
 * Lightweight scroll parallax using GSAP ScrollTrigger.
 */
export function useParallax<T extends HTMLElement>(
  ref: React.RefObject<T | null>,
) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let ctx: { revert: () => void } | undefined;
    let cancelled = false;

    (async () => {
      const gsapMod = await import("gsap");
      const stMod = await import("gsap/ScrollTrigger");
      if (cancelled) return;
      const gsap = gsapMod.default ?? gsapMod;
      const ScrollTrigger = stMod.ScrollTrigger ?? stMod.default;
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        const items = el.querySelectorAll<HTMLElement>("[data-parallax]");
        items.forEach((item) => {
          const speed = parseFloat(item.dataset.speed ?? "0.2");
          gsap.to(item, {
            yPercent: -speed * 100,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          });
        });
      }, el);
    })();

    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, [ref]);
}