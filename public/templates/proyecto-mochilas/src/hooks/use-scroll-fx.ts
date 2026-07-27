import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

let registered = false;

export function useScrollFx() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!registered) {
      gsap.registerPlugin(ScrollTrigger);
      registered = true;
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    lenis.on("scroll", ScrollTrigger.update);
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    let rafId = requestAnimationFrame(raf);

    const ctx = gsap.context(() => {
      // Reveal on scroll
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.from(el, {
          y: 60,
          opacity: 0,
          duration: 1.2,
          ease: "expo.out",
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
        });
      });

      // Word stagger
      gsap.utils.toArray<HTMLElement>("[data-stagger]").forEach((el) => {
        const children = el.querySelectorAll<HTMLElement>("[data-stagger-child]");
        gsap.from(children, {
          yPercent: 110,
          opacity: 0,
          duration: 1.1,
          ease: "expo.out",
          stagger: 0.08,
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
        });
      });

      // Parallax images
      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
        const speed = parseFloat(el.dataset.parallax || "0.2");
        gsap.fromTo(
          el,
          { yPercent: -speed * 50 },
          {
            yPercent: speed * 50,
            ease: "none",
            scrollTrigger: {
              trigger: el.parentElement,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        );
      });

      // Animated counters
      gsap.utils.toArray<HTMLElement>("[data-counter]").forEach((el) => {
        const target = parseFloat(el.dataset.counter || "0");
        const decimals = parseInt(el.dataset.decimals || "0", 10);
        const obj = { v: 0 };
        gsap.to(obj, {
          v: target,
          duration: 2,
          ease: "expo.out",
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
          onUpdate: () => {
            el.textContent = obj.v.toFixed(decimals);
          },
        });
      });
    });

    return () => {
      ctx.revert();
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);
}