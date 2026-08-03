import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;
function ensureRegistered() {
  if (!registered && typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
    registered = true;
  }
}

/**
 * Reveal child elements with [data-reveal] inside a container on scroll.
 */
export function useReveal(selector: string = "[data-reveal]") {
  useEffect(() => {
    ensureRegistered();
    const elements = gsap.utils.toArray<HTMLElement>(selector);
    const tweens = elements.map((el) =>
      gsap.fromTo(
        el,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "expo.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      ),
    );
    return () => {
      tweens.forEach((t) => {
        t.scrollTrigger?.kill();
        t.kill();
      });
    };
  }, [selector]);
}

/**
 * Parallax translateY for elements with [data-parallax] (value = speed, e.g. "0.3").
 */
export function useParallax(selector: string = "[data-parallax]") {
  useEffect(() => {
    ensureRegistered();
    const elements = gsap.utils.toArray<HTMLElement>(selector);
    const tweens = elements.map((el) => {
      const speed = parseFloat(el.dataset.parallax || "0.3");
      return gsap.fromTo(
        el,
        { yPercent: -speed * 50 },
        {
          yPercent: speed * 50,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );
    });
    return () => {
      tweens.forEach((t) => {
        t.scrollTrigger?.kill();
        t.kill();
      });
    };
  }, [selector]);
}

export { gsap, ScrollTrigger };
