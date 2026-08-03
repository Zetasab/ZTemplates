import { useEffect, useRef } from "react";
import { gsap } from "@/hooks/useGsap";

const quotes = [
  {
    text: "La textura del labial Velvet Carmín es sencillamente incomparable. Es el primer producto que realmente se siente como una segunda piel.",
    author: "Elena Valente",
    role: "Editora de Moda, Vogue España",
  },
  {
    text: "Aether reescribe el código del lujo: menos artificio, más arquitectura. Cada producto es una declaración silenciosa.",
    author: "Marcus Idehen",
    role: "Maquillador de cabecera",
  },
];

export function Testimonials() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1.3,
            ease: "expo.out",
            scrollTrigger: { trigger: el, start: "top 85%" },
          },
        );
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      className="py-24 md:py-40 px-6 md:px-8 bg-brand-bone border-t border-brand-dark/5"
    >
      <div className="max-w-7xl mx-auto">
        <span
          data-reveal
          className="block text-brand-gold text-xs uppercase tracking-[0.4em] font-bold italic mb-12 md:mb-16"
        >
          La voz de la prensa
        </span>
        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          {quotes.map((q) => (
            <figure key={q.author} data-reveal>
              <span
                aria-hidden
                className="block font-display italic text-7xl text-brand-gold leading-none mb-6"
              >
                “
              </span>
              <blockquote className="font-display italic text-2xl md:text-3xl leading-snug text-balance">
                {q.text}
              </blockquote>
              <figcaption className="mt-10 flex items-center gap-4">
                <span className="h-px w-12 bg-brand-dark/30" />
                <div>
                  <div className="text-xs uppercase tracking-widest font-bold">
                    {q.author}
                  </div>
                  <div className="text-[10px] uppercase tracking-widest text-brand-dark/50 mt-1">
                    {q.role}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
