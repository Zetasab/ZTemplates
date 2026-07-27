import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

let registered = false;

export function useSmoothScrollAndGsap() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!registered) {
      gsap.registerPlugin(ScrollTrigger);
      registered = true;
    }
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const lenis = reduced ? null : new Lenis({ duration: 1.1, smoothWheel: true });
    let rafId = 0;
    function raf(time: number) {
      lenis?.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    if (lenis) {
      rafId = requestAnimationFrame(raf);
      lenis.on("scroll", ScrollTrigger.update);
    }

    const ctx = gsap.context(() => {
      if (reduced) return;

      // Hero entrance
      gsap.from("[data-anim='hero-title'] span", {
        yPercent: 110,
        opacity: 0,
        stagger: 0.08,
        duration: 1.1,
        ease: "expo.out",
        delay: 0.2,
      });
      gsap.from("[data-anim='hero-sub']", {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "expo.out",
        delay: 0.7,
      });
      gsap.from("[data-anim='hero-cta'] > *", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "expo.out",
        delay: 0.9,
      });
      gsap.from("[data-anim='hero-badge']", {
        y: -20,
        opacity: 0,
        duration: 1,
        ease: "expo.out",
      });

      // Hero parallax
      gsap.to("[data-anim='hero-image']", {
        yPercent: 25,
        scale: 1.05,
        ease: "none",
        scrollTrigger: {
          trigger: "[data-anim='hero']",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
      gsap.to("[data-anim='hero-glow']", {
        opacity: 0.3,
        scale: 1.2,
        scrollTrigger: {
          trigger: "[data-anim='hero']",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Generic reveal
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.from(el, {
          y: 60,
          opacity: 0,
          duration: 1,
          ease: "expo.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
        });
      });

      // Stagger reveal children
      gsap.utils.toArray<HTMLElement>("[data-reveal-stagger]").forEach((el) => {
        gsap.from(el.children, {
          y: 50,
          opacity: 0,
          duration: 0.9,
          stagger: 0.12,
          ease: "expo.out",
          scrollTrigger: { trigger: el, start: "top 80%" },
        });
      });

      // Parallax floats
      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
        const speed = parseFloat(el.dataset.parallax || "0.2");
        gsap.to(el, {
          yPercent: -40 * speed,
          ease: "none",
          scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
        });
      });

      // Sticky feature image scale
      gsap.utils.toArray<HTMLElement>("[data-pin-image]").forEach((el) => {
        gsap.to(el, {
          scale: 1.15,
          scrollTrigger: { trigger: el.parentElement, start: "top center", end: "bottom top", scrub: true },
        });
      });

      // Counters
      gsap.utils.toArray<HTMLElement>("[data-counter]").forEach((el) => {
        const end = parseFloat(el.dataset.counter || "0");
        const decimals = parseInt(el.dataset.decimals || "0", 10);
        const obj = { val: 0 };
        gsap.to(obj, {
          val: end,
          duration: 2,
          ease: "expo.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
          onUpdate: () => {
            el.textContent = obj.val.toLocaleString("es-ES", {
              minimumFractionDigits: decimals,
              maximumFractionDigits: decimals,
            });
          },
        });
      });
    });

    return () => {
      ctx.revert();
      cancelAnimationFrame(rafId);
      lenis?.destroy();
    };
  }, []);
}
