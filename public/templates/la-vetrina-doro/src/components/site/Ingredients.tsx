import { useRef } from "react";
import ingredients from "@/assets/ingredients.jpg";
import { useGsapScroll } from "@/hooks/useGsapScroll";

const items = [
  { name: "San Marzano DOP", origin: "Campania" },
  { name: "Farina Tipo 00", origin: "Umbria" },
  { name: "Tartufo Nero di Norcia", origin: "Perugia" },
  { name: "Mozzarella di Bufala", origin: "Aversa" },
  { name: "Olio Extravergine", origin: "Toscana" },
  { name: "Basilico Genovese", origin: "Liguria" },
];

export function Ingredients() {
  const scope = useRef<HTMLElement>(null);

  useGsapScroll(({ gsap }) => {
    gsap.to(".ing-image", {
      yPercent: -20,
      ease: "none",
      scrollTrigger: { trigger: scope.current, start: "top bottom", end: "bottom top", scrub: true },
    });
    gsap.from(".ing-item", {
      y: 40, opacity: 0, duration: 0.9, stagger: 0.08, ease: "power3.out",
      scrollTrigger: { trigger: ".ing-grid", start: "top 80%" },
    });
  }, scope);

  return (
    <section ref={scope} className="relative overflow-hidden">
      <div className="relative h-[70vh] overflow-hidden">
        <img
          src={ingredients}
          alt="Bodegón de ingredientes italianos premium"
          loading="lazy"
          width={1600}
          height={900}
          className="ing-image absolute inset-0 w-full h-[130%] -top-[15%] object-cover"
        />
        <div className="absolute inset-0 bg-midnight/50" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <span className="text-gold text-xs uppercase tracking-[0.35em] mb-6">La Dispensa</span>
          <h2 className="font-display text-4xl md:text-7xl italic max-w-4xl leading-[1.05]">
            Cada ingrediente <br />
            <span className="text-gold">cuenta una historia.</span>
          </h2>
        </div>
      </div>

      <div className="bg-midnight py-24 px-6 md:px-12">
        <div className="ing-grid max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-8">
          {items.map((it) => (
            <div key={it.name} className="ing-item border-t border-bone/10 pt-5">
              <div className="font-display text-2xl md:text-3xl italic text-bone mb-1.5">
                {it.name}
              </div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-gold/80">
                {it.origin}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
