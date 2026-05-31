import { useRef } from "react";
import lifestyle from "@/assets/lifestyle-2.jpg";
import { gsap, registerGsap, useIsoLayoutEffect } from "@/hooks/useGsap";

export function Lookbook() {
  const root = useRef<HTMLDivElement>(null);

  useIsoLayoutEffect(() => {
    registerGsap();
    const ctx = gsap.context(() => {
      gsap.to(".look-img", {
        yPercent: -20,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top bottom", end: "bottom top", scrub: true },
      });
      gsap.from(".look-title", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "expo.out",
        scrollTrigger: { trigger: root.current, start: "top 70%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="drop" ref={root} className="relative border-b-2 border-ink overflow-hidden">
      <div className="relative h-[80vh] md:h-screen w-full">
        <div className="look-img absolute inset-0 scale-110">
          <img
            src={lifestyle}
            alt="Lookbook editorial"
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-ink/30" />
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-16">
          <div className="look-title">
            <div className="inline-block bg-volt border-2 border-ink px-3 py-1 font-display text-xs mb-6">
              LOOKBOOK SS26
            </div>
            <h2 className="text-paper text-6xl md:text-9xl lg:text-[12vw] leading-[0.85]">
              Made for <br />
              <span className="text-volt">the streets.</span>
            </h2>
            <p className="font-body text-paper/90 text-lg md:text-xl mt-6 max-w-xl">
              Cada modelo cuenta una historia. Cada par escribe la tuya. Atrévete a salir con ellas puestas — el resto se escribe solo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
