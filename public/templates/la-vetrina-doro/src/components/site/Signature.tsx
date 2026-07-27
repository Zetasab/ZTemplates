import { useRef } from "react";
import tagliatelle from "@/assets/dish-tagliatelle.jpg";
import trufflePizza from "@/assets/dish-truffle-pizza.jpg";
import wagyuLasagna from "@/assets/dish-wagyu-lasagna.jpg";
import { useGsapScroll } from "@/hooks/useGsapScroll";

const dishes = [
  {
    img: tagliatelle,
    name: "Il Mare d'Oro",
    title: "Tagliatelle de Bogavante al Azafrán",
    desc: "Pasta cortada a mano, azafrán iraní, bogavante azul del Mediterráneo.",
    price: "€74",
  },
  {
    img: trufflePizza,
    name: "The 24K Black Diamond",
    title: "Pizza de Trufa Negra y Oro",
    desc: "Masa infusionada al carbón, crema de trufa negra, láminas de oro comestible 24k.",
    price: "€120",
  },
  {
    img: wagyuLasagna,
    name: "La Reale",
    title: "Lasaña de Wagyu A5",
    desc: "Capas de pasta delicada, ragú de wagyu A5, bechamel de parmigiano de 48 meses.",
    price: "€68",
  },
];

export function Signature() {
  const scope = useRef<HTMLElement>(null);

  useGsapScroll(({ gsap }) => {
    gsap.from(".sig-head", {
      y: 40, opacity: 0, duration: 1, ease: "power3.out",
      scrollTrigger: { trigger: scope.current, start: "top 75%" },
    });
    gsap.from(".sig-card", {
      y: 80, opacity: 0, duration: 1, stagger: 0.15, ease: "power3.out",
      scrollTrigger: { trigger: ".sig-track", start: "top 80%" },
    });
  }, scope);

  return (
    <section
      ref={scope}
      id="menu"
      className="bg-charcoal py-32 md:py-40 overflow-hidden"
    >
      <div className="px-6 md:px-12 max-w-7xl mx-auto mb-16 md:mb-20 sig-head">
        <span className="block text-gold text-xs uppercase tracking-[0.35em] mb-6 text-center">
          Il Menù d'Autore
        </span>
        <h2 className="font-display text-center text-4xl md:text-6xl mb-6">
          La Colección <span className="italic text-gold">Signature</span>
        </h2>
        <div className="w-16 h-px bg-gold mx-auto" />
      </div>

      <div className="sig-track flex flex-nowrap overflow-x-auto pb-16 px-6 md:px-12 gap-8 no-scrollbar">
        {dishes.map((d, i) => (
          <div
            key={d.name}
            className={`sig-card min-w-[320px] md:min-w-[420px] group ${i === 1 ? "md:translate-y-12" : ""}`}
          >
            <div className="relative overflow-hidden mb-6 aspect-square">
              <img
                src={d.img}
                alt={d.title}
                loading="lazy"
                width={800}
                height={800}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-bone/5" />
              <div className="absolute top-4 right-4 bg-midnight/80 backdrop-blur-sm px-4 py-2 border border-gold/25">
                <span className="text-gold text-sm font-medium tracking-wider">{d.price}</span>
              </div>
              <div className="absolute bottom-4 left-4 text-[10px] uppercase tracking-[0.3em] text-gold/80">
                {d.name}
              </div>
            </div>
            <h3 className="font-display text-2xl md:text-3xl text-bone mb-3 italic">{d.title}</h3>
            <p className="text-bone/50 text-xs leading-relaxed uppercase tracking-[0.15em]">
              {d.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="px-6 md:px-12 max-w-7xl mx-auto mt-8 flex justify-center">
        <a
          href="#reserva"
          className="text-gold text-[11px] uppercase tracking-[0.35em] border-b border-gold/40 pb-1 hover:border-gold transition-colors"
        >
          Ver la Carta Completa
        </a>
      </div>
    </section>
  );
}
