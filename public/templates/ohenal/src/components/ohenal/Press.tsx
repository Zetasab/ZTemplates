import { useEffect, useRef } from "react";
import { gsap, useGsapReady } from "@/hooks/use-gsap";

const quotes = [
  { q: "Una colonia que no aspira a ser notada, sino recordada. El mejor lanzamiento masculino del año.", s: "Monocle Magazine" },
  { q: "Henri Allard ha logrado lo imposible: un acuático que respira lujo en cada nota.", s: "Vogue Hombres" },
  { q: "Discreción mineral. Una de las mejores composiciones contemporáneas.", s: "Nez · Le Mouchoir" },
  { q: "El silencio embotellado. Indispensable para el hombre moderno.", s: "GQ España" },
];

export function Press() {
  useGsapReady();
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const track = root.current?.querySelector<HTMLElement>(".press-track");
      if (!track) return;
      const distance = track.scrollWidth - window.innerWidth + 64;
      gsap.to(track, {
        x: -distance,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: () => `+=${distance + 200}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative bg-abyss overflow-hidden">
      <div className="py-32 md:py-40 px-6 md:px-16">
        <div className="max-w-7xl mx-auto mb-16">
          <div className="flex items-center gap-6 mb-8">
            <span className="hairline max-w-20" />
            <span className="text-eyebrow text-silver/70">VII · Prensa</span>
          </div>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.95] text-bone tracking-tight">
            Lo que <em className="italic">escriben.</em>
          </h2>
        </div>

        <div className="press-track flex gap-8 md:gap-16 px-6 md:px-16 will-change-transform">
          {quotes.map((q, i) => (
            <figure key={i} className="shrink-0 w-[80vw] md:w-[55vw] lg:w-[42vw] border-l border-silver/30 pl-8 md:pl-12 py-8">
              <blockquote className="font-display text-3xl md:text-4xl lg:text-5xl leading-[1.15] text-bone">
                «{q.q}»
              </blockquote>
              <figcaption className="text-eyebrow text-silver/60 mt-8">— {q.s}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
