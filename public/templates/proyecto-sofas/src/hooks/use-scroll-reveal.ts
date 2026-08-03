import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function useScrollReveal<T extends HTMLElement>(
  selector = "[data-reveal]",
  options: { y?: number; stagger?: number; duration?: number } = {}
) {
  const ref = useRef<T | null>(null);
  const { y = 40, stagger = 0.08, duration = 1.1 } = options;

  useEffect(() => {
    if (!ref.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(selector);
      items.forEach((el) => {
        gsap.from(el, {
          y,
          opacity: 0,
          duration,
          ease: "expo.out",
          stagger,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        });
      });
    }, ref);

    return () => ctx.revert();
  }, [selector, y, stagger, duration]);

  return ref;
}

export function useParallax<T extends HTMLElement>(strength = 100) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const el = ref.current;
    const anim = gsap.to(el, {
      yPercent: strength / 10,
      ease: "none",
      scrollTrigger: {
        trigger: el.parentElement ?? el,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    return () => {
      anim.scrollTrigger?.kill();
      anim.kill();
    };
  }, [strength]);

  return ref;
}
