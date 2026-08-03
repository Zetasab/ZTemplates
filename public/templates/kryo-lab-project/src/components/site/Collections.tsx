import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { img } from "@/lib/site-images";

const items = [
  { title: "Ronin v.2", tag: "Cyber / Gaming", src: img.cyber, alt: "Keycap cyberpunk violeta y rosa", offset: "md:translate-y-0" },
  { title: "Summit Essence", tag: "Paisajes / Zen", src: img.summit, alt: "Keycap con montaña nevada en su interior", offset: "md:translate-y-16" },
  { title: "Mecha Core", tag: "Anime / Mecha", src: img.mecha, alt: "Keycap anime mecha rojo", offset: "md:translate-y-6" },
];

export function Collections() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".col-card").forEach((el) => {
        gsap.from(el, {
          y: 60,
          opacity: 0,
          duration: 1,
          ease: "expo.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
        });
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="colecciones" ref={ref} className="py-32 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
        <div>
          <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">Archivo 2026</span>
          <h3 className="text-5xl md:text-6xl font-display tracking-tight mt-2">Colecciones Destacadas</h3>
        </div>
        <p className="text-muted-foreground max-w-xs text-sm">
          Cada pieza es moldeada, coloreada y pulida a mano en nuestro estudio de Madrid.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((it) => (
          <div key={it.title} className={`col-card group cursor-pointer ${it.offset}`}>
            <div className="w-full aspect-[3/4] bg-neutral-900 rounded-lg overflow-hidden border border-border group-hover:border-primary/50 transition-colors mb-4">
              <img
                src={it.src}
                alt={it.alt}
                loading="lazy"
                width={768}
                height={1024}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <h4 className="text-2xl font-display tracking-wide">{it.title}</h4>
            <p className="text-xs text-muted-foreground uppercase font-mono tracking-widest mt-1">{it.tag}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
