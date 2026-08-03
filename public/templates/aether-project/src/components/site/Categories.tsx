import { useEffect, useRef } from "react";
import lips from "@/assets/cat-lips.jpg";
import eyes from "@/assets/cat-eyes.jpg";
import face from "@/assets/cat-face.jpg";
import fragrance from "@/assets/cat-fragrance.jpg";
import { gsap } from "@/hooks/useGsap";

const categories = [
  { num: "01", title: "Labios", count: "12 Variedades", img: lips },
  { num: "02", title: "Mirada", count: "08 Paletas", img: eyes },
  { num: "03", title: "Rostro", count: "15 Tonos", img: face },
  { num: "04", title: "Fragancias", count: "04 Esencias", img: fragrance },
];

export function Categories() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".cat-title",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "expo.out",
          scrollTrigger: { trigger: ref.current, start: "top 80%" },
        },
      );
      gsap.fromTo(
        ".cat-card",
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "expo.out",
          stagger: 0.12,
          scrollTrigger: { trigger: ".cat-grid", start: "top 80%" },
        },
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      id="colecciones"
      className="py-24 md:py-40 px-6 md:px-8 max-w-7xl mx-auto"
    >
      <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-16 md:mb-20">
        <div className="cat-title">
          <span className="text-brand-gold text-xs uppercase tracking-[0.4em] font-bold italic">
            El universo Aether
          </span>
          <h2 className="font-display text-4xl md:text-6xl italic mt-4 text-balance">
            Cuatro mundos, un solo gesto.
          </h2>
        </div>
        <a
          href="#esenciales"
          className="cat-title text-[10px] uppercase tracking-[0.25em] border-b border-brand-dark/20 pb-1 hover:border-brand-dark transition-colors self-start"
        >
          Ver el catálogo completo
        </a>
      </div>

      <div className="cat-grid grid grid-cols-1 md:grid-cols-4 gap-4">
        {categories.map((c, i) => (
          <a
            key={c.num}
            href="#esenciales"
            className={`cat-card group cursor-pointer ${i % 2 === 1 ? "md:mt-16" : ""}`}
          >
            <div className="aspect-[3/4] overflow-hidden bg-brand-accent mb-4">
              <img
                src={c.img}
                alt={c.title}
                width={800}
                height={1066}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
              />
            </div>
            <div className="flex justify-between items-end">
              <div>
                <span className="text-[10px] font-bold text-brand-gold tracking-widest">
                  {c.num} /
                </span>
                <h3 className="font-display text-2xl mt-1">{c.title}</h3>
              </div>
              <p className="text-[10px] text-brand-dark/50 uppercase tracking-wider">
                {c.count}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
