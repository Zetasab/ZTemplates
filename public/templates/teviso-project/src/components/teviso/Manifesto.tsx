import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const TEXT =
  "Cada píxel, un aliento. Cada fotograma, una promesa. Teviso convierte tu salón en un teatro privado donde la luz obedece y el color respira.";

export function Manifesto() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      const words = el.querySelectorAll(".word");
      gsap.fromTo(
        words,
        { opacity: 0.1, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.04,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 70%", end: "bottom 40%", scrub: 0.6 },
        },
      );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative px-6 py-40 sm:py-56">
      <div className="mx-auto max-w-5xl">
        <p className="mb-8 text-center text-xs uppercase tracking-[0.3em] text-white/50">
          Manifiesto
        </p>
        <h2 className="font-serif text-3xl leading-[1.15] tracking-tight sm:text-5xl md:text-6xl">
          {TEXT.split(" ").map((w, i) => (
            <span key={i} className="word mr-[0.25em] inline-block">
              {w}
            </span>
          ))}
        </h2>
      </div>
    </section>
  );
}
