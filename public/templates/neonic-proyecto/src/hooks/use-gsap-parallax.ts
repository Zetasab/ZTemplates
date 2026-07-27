import { useEffect, useRef } from "react";

/**
 * Parallax on scroll using GSAP + ScrollTrigger.
 * Loads GSAP dynamically inside useEffect to stay SSR-safe.
 */
export function useGsapParallax(intensity: number = 100) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let cleanup: (() => void) | undefined;
    let cancelled = false;

    (async () => {
      const gsapMod = await import("gsap");
      const stMod = await import("gsap/ScrollTrigger");
      if (cancelled || !ref.current) return;
      const gsap = gsapMod.gsap ?? gsapMod.default;
      const ScrollTrigger = stMod.ScrollTrigger ?? stMod.default;
      gsap.registerPlugin(ScrollTrigger);

      const tween = gsap.fromTo(
        ref.current,
        { y: -intensity },
        {
          y: intensity,
          ease: "none",
          scrollTrigger: {
            trigger: ref.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );

      cleanup = () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    })();

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, [intensity]);

  return ref;
}

/**
 * Reveal element with a fade + translate when it enters the viewport.
 */
export function useGsapReveal<T extends HTMLElement = HTMLDivElement>(delay: number = 0) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    let cleanup: (() => void) | undefined;
    let cancelled = false;

    (async () => {
      const gsapMod = await import("gsap");
      const stMod = await import("gsap/ScrollTrigger");
      if (cancelled || !ref.current) return;
      const gsap = gsapMod.gsap ?? gsapMod.default;
      const ScrollTrigger = stMod.ScrollTrigger ?? stMod.default;
      gsap.registerPlugin(ScrollTrigger);

      const tween = gsap.fromTo(
        ref.current,
        { autoAlpha: 0, y: 60 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1.1,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 85%",
            once: true,
          },
        },
      );

      cleanup = () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    })();

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, [delay]);

  return ref;
}