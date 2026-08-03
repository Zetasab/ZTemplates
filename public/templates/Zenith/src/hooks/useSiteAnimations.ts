import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

let registered = false;

/**
 * Sets up Lenis smooth scroll + GSAP ScrollTrigger reveal, parallax, and
 * count-up animations for the landing page. Idempotent — safe to mount once.
 */
export function useSiteAnimations() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!registered) {
      gsap.registerPlugin(ScrollTrigger);
      registered = true;
    }

    // --- Lenis smooth scroll ---
    let lenis: Lenis | null = null;
    let rafId = 0;
    if (!prefersReduced) {
      lenis = new Lenis({
        duration: 1.15,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
      lenis.on("scroll", ScrollTrigger.update);
      const raf = (time: number) => {
        lenis?.raf(time);
        rafId = requestAnimationFrame(raf);
      };
      rafId = requestAnimationFrame(raf);
    }

    const ctx = gsap.context(() => {
      // Generic reveal-up
      gsap.utils.toArray<HTMLElement>(".reveal-up").forEach((el) => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 1.1,
          ease: "expo.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
        });
      });

      // Fade
      gsap.utils.toArray<HTMLElement>(".reveal-fade").forEach((el) => {
        gsap.to(el, {
          opacity: 1,
          duration: 1.4,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
        });
      });

      // Hero title stagger (words)
      const heroTitle = document.querySelector<HTMLElement>("[data-hero-title]");
      if (heroTitle) {
        const words = heroTitle.querySelectorAll<HTMLElement>("[data-word]");
        gsap.from(words, {
          y: "110%",
          opacity: 0,
          duration: 1.2,
          ease: "expo.out",
          stagger: 0.08,
          delay: 0.2,
        });
      }

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
              trigger: el.parentElement || el,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });

      // Number counters
      gsap.utils.toArray<HTMLElement>("[data-counter]").forEach((el) => {
        const target = parseFloat(el.dataset.counter || "0");
        const decimals = parseInt(el.dataset.decimals || "0", 10);
        const obj = { val: 0 };
        gsap.to(obj, {
          val: target,
          duration: 2,
          ease: "expo.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
          onUpdate: () => {
            el.textContent = obj.val.toFixed(decimals);
          },
        });
      });
    });

    // Refresh after fonts / images settle
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    const t = setTimeout(refresh, 300);

    return () => {
      window.removeEventListener("load", refresh);
      clearTimeout(t);
      cancelAnimationFrame(rafId);
      lenis?.destroy();
      ctx.revert();
    };
  }, []);
}
