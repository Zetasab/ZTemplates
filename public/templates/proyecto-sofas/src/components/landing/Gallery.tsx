import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import heroSofa from "@/assets/hero-sofa.jpg";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function Gallery() {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!rootRef.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-parallax-img]").forEach((img) => {
        gsap.to(img, {
          yPercent: -12,
          ease: "none",
          scrollTrigger: {
            trigger: img.parentElement,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });
      gsap.from("[data-gallery-item]", {
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: "expo.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 75%",
        },
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      id="espacio"
      className="px-6 py-32 md:px-20 md:py-48"
    >
      <div className="mb-20 flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <div>
          <span className="mb-6 block text-[10px] uppercase tracking-[0.35em] text-accent">
            · Espacio
          </span>
          <h2 className="max-w-3xl font-serif text-5xl leading-none tracking-tight md:text-7xl">
            En su <em className="italic">hábitat</em>.
          </h2>
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
          Interiores donde nuestras piezas encuentran su lugar. Cada composición
          es un ensayo sobre la luz, la sombra y la presencia.
        </p>
      </div>

      <div className="grid grid-cols-12 gap-4 md:gap-6">
        <div data-gallery-item className="col-span-12 md:col-span-8">
          <div className="aspect-[16/10] w-full overflow-hidden bg-muted">
            <img
              data-parallax-img
              src={g1}
              alt="Interior editorial con sofá escultórico crema"
              width={1200}
              height={1500}
              loading="lazy"
              className="h-[115%] w-full object-cover"
            />
          </div>
        </div>
        <div data-gallery-item className="col-span-6 md:col-span-4 md:mt-24">
          <div className="aspect-[3/4] w-full overflow-hidden bg-muted">
            <img
              data-parallax-img
              src={g2}
              alt="Detalle de sofá con jarrón cerámico"
              width={900}
              height={1200}
              loading="lazy"
              className="h-[115%] w-full object-cover"
            />
          </div>
        </div>
        <div data-gallery-item className="col-span-6 md:col-span-5">
          <div className="aspect-[4/5] w-full overflow-hidden bg-muted">
            <img
              data-parallax-img
              src={heroSofa}
              alt="Sofá bouclé en salón arquitectónico"
              width={1200}
              height={1500}
              loading="lazy"
              className="h-[115%] w-full object-cover"
            />
          </div>
        </div>
        <div data-gallery-item className="col-span-12 md:col-span-7">
          <div className="aspect-[16/10] w-full overflow-hidden bg-muted">
            <img
              data-parallax-img
              src={g3}
              alt="Salón mediterráneo con sofá curvo"
              width={1200}
              height={900}
              loading="lazy"
              className="h-[115%] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
