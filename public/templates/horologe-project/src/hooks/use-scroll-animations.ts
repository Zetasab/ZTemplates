import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function useScrollAnimations() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax on images marked [data-parallax]
      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
        const speed = Number(el.dataset.parallax ?? "0.2");
        gsap.fromTo(
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

      // Reveal-up for elements marked [data-reveal]
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.1,
            ease: "expo.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
            },
          },
        );
      });

      // Word-by-word reveal for [data-split]
      gsap.utils.toArray<HTMLElement>("[data-split]").forEach((el) => {
        const words = (el.textContent ?? "").split(" ");
        el.innerHTML = words
          .map(
            (w) =>
              `<span class="inline-block overflow-hidden"><span class="inline-block translate-y-full opacity-0" data-word>${w}</span></span>`,
          )
          .join(" ");
        gsap.to(el.querySelectorAll("[data-word]"), {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "expo.out",
          stagger: 0.05,
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
          },
        });
      });

      // Animated counters [data-counter]
      gsap.utils.toArray<HTMLElement>("[data-counter]").forEach((el) => {
        const target = Number(el.dataset.counter ?? "0");
        const obj = { val: 0 };
        gsap.to(obj, {
          val: target,
          duration: 2,
          ease: "expo.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
          onUpdate: () => {
            el.textContent = Math.round(obj.val).toString();
          },
        });
      });

      // Horizontal pinned showcase
      const horizontal = document.querySelector<HTMLElement>("[data-horizontal]");
      if (horizontal) {
        const track = horizontal.querySelector<HTMLElement>("[data-horizontal-track]");
        if (track) {
          gsap.to(track, {
            x: () => -(track.scrollWidth - window.innerWidth),
            ease: "none",
            scrollTrigger: {
              trigger: horizontal,
              start: "top top",
              end: () => `+=${track.scrollWidth - window.innerWidth}`,
              pin: true,
              scrub: 1,
              invalidateOnRefresh: true,
            },
          });
        }
      }
    });

    return () => ctx.revert();
  }, []);
}
