import { useEffect, useRef } from "react";

/**
 * Attaches GSAP + ScrollTrigger reveal animations to elements matching
 * `[data-reveal]` inside the returned ref. Safe for SSR (dynamic import,
 * only runs in the browser). Respects prefers-reduced-motion.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) return;

    let cleanup = () => {};
    let cancelled = false;

    (async () => {
      const gsapMod = await import("gsap");
      const stMod = await import("gsap/ScrollTrigger");
      if (cancelled) return;
      const gsap = gsapMod.default;
      const ScrollTrigger = stMod.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        const targets = el.querySelectorAll<HTMLElement>("[data-reveal]");
        targets.forEach((node) => {
          const delay = Number(node.dataset.revealDelay ?? 0);
          gsap.fromTo(
            node,
            { y: 40, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1,
              ease: "expo.out",
              delay,
              scrollTrigger: {
                trigger: node,
                start: "top 85%",
                once: true,
              },
            },
          );
        });

        // Parallax on [data-parallax] with optional data-parallax-speed
        const parallax = el.querySelectorAll<HTMLElement>("[data-parallax]");
        parallax.forEach((node) => {
          const speed = Number(node.dataset.parallaxSpeed ?? 0.3);
          gsap.to(node, {
            yPercent: -speed * 100,
            ease: "none",
            scrollTrigger: {
              trigger: node.parentElement ?? node,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          });
        });

        // Hero zoom-in on scroll
        const heroZoom = el.querySelector<HTMLElement>("[data-hero-zoom]");
        if (heroZoom) {
          gsap.to(heroZoom, {
            scale: 1.15,
            ease: "none",
            scrollTrigger: {
              trigger: heroZoom.parentElement ?? heroZoom,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          });
        }
      }, el);

      cleanup = () => ctx.revert();
    })();

    return () => {
      cancelled = true;
      cleanup();
    };
  }, []);

  return ref;
}
