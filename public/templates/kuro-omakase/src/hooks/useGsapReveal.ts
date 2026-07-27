import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;

export function useGsapReveal() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!registered) {
      gsap.registerPlugin(ScrollTrigger);
      registered = true;
    }
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = gsap.context(() => {
      // Generic fade-up reveals
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.from(el, {
          y: reduce ? 0 : 40,
          opacity: 0,
          duration: reduce ? 0.01 : 1.1,
          ease: "expo.out",
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
        });
      });
      // Stagger groups
      gsap.utils.toArray<HTMLElement>("[data-reveal-group]").forEach((group) => {
        const items = group.querySelectorAll<HTMLElement>("[data-reveal-item]");
        gsap.from(items, {
          y: reduce ? 0 : 50,
          opacity: 0,
          duration: reduce ? 0.01 : 1,
          ease: "expo.out",
          stagger: 0.12,
          scrollTrigger: { trigger: group, start: "top 80%", once: true },
        });
      });
      // Mask reveals for images
      gsap.utils.toArray<HTMLElement>("[data-mask]").forEach((el) => {
        gsap.fromTo(
          el,
          { clipPath: "inset(0 100% 0 0)" },
          {
            clipPath: "inset(0 0% 0 0)",
            duration: reduce ? 0.01 : 1.6,
            ease: "expo.out",
            scrollTrigger: { trigger: el, start: "top 80%", once: true },
          }
        );
      });
      if (!reduce) {
        // Parallax y-shift
        gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
          const speed = parseFloat(el.dataset.parallax || "0.3");
          gsap.to(el, {
            yPercent: -speed * 30,
            ease: "none",
            scrollTrigger: {
              trigger: el.parentElement || el,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          });
        });
      }
    });
    return () => ctx.revert();
  }, []);
}