import { useEffect, useRef } from "react";
import { gsap, useGsapReady } from "@/hooks/use-gsap";
import water from "@/assets/water-texture.jpg";
import cap from "@/assets/cap-detail.jpg";
import atmosphere from "@/assets/atmosphere.jpg";
import figure from "@/assets/figure.jpg";

export function Gallery() {
  useGsapReady();
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".g-item").forEach((el, i) => {
        gsap.from(el, {
          y: 60,
          opacity: 0,
          duration: 1,
          delay: i * 0.05,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%" },
        });
        const img = el.querySelector<HTMLImageElement>("img");
        if (img) {
          gsap.to(img, {
            yPercent: -10,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          });
        }
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative bg-abyss py-32 md:py-48 px-6 md:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-end justify-between mb-20 flex-wrap gap-6">
          <div>
            <div className="flex items-center gap-6 mb-8">
              <span className="hairline max-w-20" />
              <span className="text-eyebrow text-silver/70">V · Imágenes</span>
            </div>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.95] text-bone tracking-tight">
              Fragmentos<br />
              <em className="italic text-silver/90">de un instante.</em>
            </h2>
          </div>
          <p className="text-bone/60 max-w-sm text-sm leading-relaxed">
            Fotografía editorial de la campaña inaugural,
            dirigida por Lucien Marais.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-4 md:gap-6">
          <figure className="g-item col-span-12 md:col-span-7 aspect-[4/3] overflow-hidden">
            <img src={atmosphere} alt="Costa rocosa en la niebla" loading="lazy"
              className="h-[110%] w-full object-cover" width={1400} height={1800} />
          </figure>
          <figure className="g-item col-span-12 md:col-span-5 aspect-[3/4] overflow-hidden">
            <img src={figure} alt="Silueta masculina frente al mar" loading="lazy"
              className="h-[110%] w-full object-cover" width={1400} height={1800} />
          </figure>
          <figure className="g-item col-span-6 md:col-span-4 aspect-square overflow-hidden">
            <img src={cap} alt="Detalle del tapón de latón cepillado" loading="lazy"
              className="h-[110%] w-full object-cover" width={1200} height={1500} />
          </figure>
          <figure className="g-item col-span-6 md:col-span-8 aspect-[16/9] overflow-hidden">
            <img src={water} alt="Superficie del mar al amanecer" loading="lazy"
              className="h-[110%] w-full object-cover" width={1920} height={1080} />
          </figure>
        </div>
      </div>
    </section>
  );
}
