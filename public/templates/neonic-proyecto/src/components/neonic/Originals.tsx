import { useEffect, useRef } from "react";
import o1 from "@/assets/original-neon-alley.jpg";
import o2 from "@/assets/original-abyss.jpg";
import o3 from "@/assets/original-nebula.jpg";

const originals = [
  { img: o1, tag: "DRAMA", title: "Shadow Protocol", meta: "Serie · 6 episodios" },
  { img: o2, tag: "DOCUSERIES", title: "The Last Abyss", meta: "Documental · 2h 14m" },
  { img: o3, tag: "SCI-FI", title: "Nebula Core", meta: "Película · 2h 38m" },
];

export function Originals() {
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    let cancelled = false;
    const kills: Array<() => void> = [];
    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);
      cardRefs.current.forEach((el, i) => {
        if (!el) return;
        const img = el.querySelector("img");
        if (!img) return;
        const t = gsap.to(img, {
          yPercent: 15,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
        kills.push(() => {
          t.scrollTrigger?.kill();
          t.kill();
        });
        void i;
      });
    })();
    return () => {
      cancelled = true;
      kills.forEach((k) => k());
    };
  }, []);

  return (
    <section id="originales" className="py-32 md:py-40 px-6 md:px-10 border-t border-border">
      <div className="max-w-[1600px] mx-auto">
        <div className="mb-20 grid md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8">
            <span className="text-[10px] font-mono-tight uppercase tracking-[0.3em] text-primary mb-6 block">
              Producciones NEONIC
            </span>
            <h2 className="font-display text-5xl md:text-8xl tracking-tighter leading-[0.9]">
              HISTORIAS <br />
              <span className="italic font-editorial font-normal">que merecen</span>{" "}
              <span className="text-primary">verse en grande.</span>
            </h2>
          </div>
          <p className="md:col-span-4 text-muted-foreground text-base leading-relaxed max-w-md">
            Nuestras producciones originales son filmadas exclusivamente para
            NEONIC. Directores premiados, historias que otros no se atreven a
            contar, técnica sin concesiones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {originals.map((o, i) => (
            <div
              key={o.title}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              className="group relative aspect-[4/5] overflow-hidden bg-secondary border border-border"
            >
              <img
                src={o.img}
                alt={o.title}
                loading="lazy"
                width={960}
                height={1200}
                className="w-full h-[120%] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-8 md:p-10">
                <span className="text-primary font-mono-tight text-[10px] tracking-[0.3em] mb-3 block">
                  {o.tag}
                </span>
                <h3 className="font-display text-3xl md:text-4xl tracking-tight mb-2">
                  {o.title}
                </h3>
                <p className="text-xs text-muted-foreground font-editorial italic">
                  {o.meta}
                </p>
                <div className="mt-6 h-px w-0 group-hover:w-full bg-primary transition-all duration-700" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}