import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { img } from "@/lib/site-images";

const pieces = [
  { src: img.anime1, alt: "Keycap sakura rosa", name: "Sakura Bloom", tag: "Slice of Life" },
  { src: img.anime2, alt: "Keycap con rayo eléctrico", name: "Raiden Strike", tag: "Shonen" },
  { src: img.anime3, alt: "Keycap con espíritu del bosque", name: "Kodama", tag: "Ghibli" },
  { src: img.anime4, alt: "Keycap con kanji rojo", name: "Kanji 004", tag: "Editorial" },
];

export function AnimeGallery() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".anime-tile").forEach((el, i) => {
        gsap.from(el, {
          y: 80,
          opacity: 0,
          duration: 1.1,
          delay: i * 0.05,
          ease: "expo.out",
          scrollTrigger: { trigger: el, start: "top 90%" },
        });
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="py-32 px-6 max-w-7xl mx-auto">
      <div className="mb-16 grid md:grid-cols-2 gap-8 items-end">
        <div>
          <span className="font-mono text-[10px] text-primary uppercase tracking-widest">Universo Anime</span>
          <h2 className="text-5xl md:text-6xl font-display mt-4 leading-tight">
            Homenajes en resina<br />a los mundos que amamos.
          </h2>
        </div>
        <p className="text-muted-foreground max-w-md text-sm">
          Series abiertas y colaboraciones limitadas. Desde el shonen más energético hasta el silencio contemplativo de un espíritu del bosque.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {pieces.map((p, i) => (
          <figure key={p.name} className={`anime-tile relative group ${i % 2 === 0 ? "md:translate-y-8" : ""}`}>
            <div className="aspect-[4/5] overflow-hidden rounded-lg border border-border">
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                width={800}
                height={1000}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[900ms]"
              />
            </div>
            <figcaption className="mt-3 flex justify-between items-baseline">
              <span className="font-display text-lg tracking-wide">{p.name}</span>
              <span className="font-mono text-[10px] uppercase text-muted-foreground">{p.tag}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
