import { useRef } from "react";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import { useGsapScroll } from "@/hooks/useGsapScroll";

export function Gallery() {
  const scope = useRef<HTMLElement>(null);

  useGsapScroll(({ gsap }) => {
    gsap.to(".gcol-1", {
      yPercent: -18, ease: "none",
      scrollTrigger: { trigger: scope.current, start: "top bottom", end: "bottom top", scrub: true },
    });
    gsap.to(".gcol-2", {
      yPercent: 12, ease: "none",
      scrollTrigger: { trigger: scope.current, start: "top bottom", end: "bottom top", scrub: true },
    });
    gsap.to(".gcol-3", {
      yPercent: -28, ease: "none",
      scrollTrigger: { trigger: scope.current, start: "top bottom", end: "bottom top", scrub: true },
    });
    gsap.from(".gtitle", {
      y: 50, opacity: 0, duration: 1, ease: "power3.out",
      scrollTrigger: { trigger: scope.current, start: "top 75%" },
    });
  }, scope);

  const cols = [
    { cls: "gcol-1", src: g1, alt: "Salón principal a la luz de las velas", h: "h-[420px] md:h-[560px]" },
    { cls: "gcol-2", src: g2, alt: "Copa de vino tinto italiano premium", h: "h-[520px] md:h-[680px]" },
    { cls: "gcol-3", src: g3, alt: "Trufa blanca laminada sobre plato", h: "h-[380px] md:h-[520px]" },
  ];

  return (
    <section
      ref={scope}
      id="galeria"
      className="relative bg-midnight py-32 md:py-40 overflow-hidden"
    >
      <div className="px-6 md:px-12 max-w-7xl mx-auto mb-20 gtitle">
        <span className="block text-gold text-xs uppercase tracking-[0.35em] mb-6">
          L'Atmosfera
        </span>
        <h2 className="font-display text-4xl md:text-7xl leading-[1.05] max-w-3xl">
          Un banquete <br /> para los <span className="italic text-gold">sentidos.</span>
        </h2>
      </div>

      <div className="px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-3 gap-3 md:gap-8">
        {cols.map((c, i) => (
          <div key={i} className={`relative overflow-hidden ${i === 1 ? "mt-16 md:mt-32" : ""}`}>
            <img
              src={c.src}
              alt={c.alt}
              loading="lazy"
              className={`${c.cls} ${c.h} w-full object-cover will-change-transform`}
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-bone/5" />
          </div>
        ))}
      </div>
    </section>
  );
}
