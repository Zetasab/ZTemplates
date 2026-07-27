import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import motionImg from "@/assets/hertz-motion.jpg";

export function Hertz() {
  const root = useRef<HTMLDivElement>(null);
  const counter = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = root.current;
    const c = counter.current;
    if (!el || !c) return;
    const ctx = gsap.context(() => {
      const obj = { v: 24 };
      gsap.to(obj, {
        v: 240,
        ease: "power2.out",
        duration: 2,
        scrollTrigger: { trigger: el, start: "top 60%" },
        onUpdate: () => {
          c.textContent = Math.round(obj.v).toString();
        },
      });
      gsap.from(".hz-img", {
        xPercent: 8,
        scale: 1.1,
        scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
      });
      gsap.from(".hz-badge", {
        y: 30,
        opacity: 0,
        stagger: 0.1,
        scrollTrigger: { trigger: el, start: "top 60%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="hercios" ref={root} className="relative overflow-hidden px-6 py-32 sm:py-48">
      <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">
        <div className="relative order-2 aspect-[4/3] overflow-hidden rounded-3xl md:order-1">
          <img
            src={motionImg}
            alt="Movimiento fluido en 240Hz"
            width={1600}
            height={1000}
            loading="lazy"
            className="hz-img absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
        </div>

        <div className="order-1 md:order-2">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#4ade80]">Movimiento</p>
          <h2 className="font-serif text-5xl leading-[1] sm:text-7xl">
            <span ref={counter}>24</span>
            <span className="text-aurora">Hz</span>
          </h2>
          <p className="mt-6 max-w-md text-white/70">
            De la cadencia del cine al frenesí del gaming competitivo. Panel
            nativo 240Hz con MotionFlow y VRR: cada fotograma llega a tiempo,
            sin arrastre ni desgarros.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {["HDMI 2.1", "VRR 48–240Hz", "ALLM", "G-SYNC", "AMD FreeSync"].map((b) => (
              <span
                key={b}
                className="hz-badge glass rounded-full px-4 py-2 text-xs uppercase tracking-widest text-white/80"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
