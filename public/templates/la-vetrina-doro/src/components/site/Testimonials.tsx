import { useRef } from "react";
import { useGsapScroll } from "@/hooks/useGsapScroll";

const quotes = [
  {
    q: "Una experiencia que redefine lo que la alta cocina italiana puede ser en el siglo XXI.",
    src: "Guía Michelin",
  },
  {
    q: "El equilibrio entre tradición y vanguardia es sencillamente magistral.",
    src: "Gambero Rosso",
  },
  {
    q: "Cada plato es una obra de arte comestible. Un templo del sabor.",
    src: "Vogue Italia",
  },
];

export function Testimonials() {
  const scope = useRef<HTMLElement>(null);

  useGsapScroll(({ gsap }) => {
    gsap.from(".t-item", {
      y: 60, opacity: 0, duration: 1, stagger: 0.15, ease: "power3.out",
      scrollTrigger: { trigger: scope.current, start: "top 75%" },
    });
  }, scope);

  return (
    <section
      ref={scope}
      className="bg-charcoal py-32 md:py-40 px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto">
        <span className="block text-gold text-xs uppercase tracking-[0.35em] mb-16 text-center">
          La Prensa Habla
        </span>
        <div className="grid md:grid-cols-3 gap-12 md:gap-16">
          {quotes.map((q) => (
            <div key={q.src} className="t-item text-center">
              <div className="text-gold font-display text-5xl mb-4 italic leading-none">"</div>
              <p className="font-display italic text-xl md:text-2xl leading-snug text-bone mb-6">
                {q.q}
              </p>
              <div className="text-[10px] uppercase tracking-[0.35em] text-gold/80">
                — {q.src}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
