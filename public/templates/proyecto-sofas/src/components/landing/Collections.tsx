import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import blockSofa from "@/assets/block-sofa.jpg";
import arcSofa from "@/assets/arc-sofa.jpg";
import cloudSofa from "@/assets/cloud-sofa.jpg";

const items = [
  {
    n: "01",
    name: "The Block",
    img: blockSofa,
    alt: "Sofá modular geométrico en tejido gris carbón",
    copy: "Geometría modular para el racionalista contemporáneo. Configuraciones infinitas para cualquier arquitectura.",
    tag: "Modular · Minimal",
  },
  {
    n: "02",
    name: "The Arc",
    img: arcSofa,
    alt: "Sofá curvo en terciopelo terracota en una sala tipo galería",
    copy: "Un gesto rotundo en terracota. Curvas envolventes que invitan a la conversación y a la calidez.",
    tag: "Curvo · Escultórico",
  },
  {
    n: "03",
    name: "The Cloud",
    img: cloudSofa,
    alt: "Sofá sobredimensionado tipo nube en bouclé crema",
    copy: "Nuestro formato más generoso. Inmersión total sin renunciar a la limpieza formal.",
    tag: "Oversize · Confort",
  },
];

export function Collections() {
  const ref = useScrollReveal<HTMLElement>("[data-reveal]", {
    y: 60,
    stagger: 0.15,
  });

  return (
    <section
      ref={ref}
      id="colecciones"
      className="bg-ink px-6 py-32 text-bone md:px-20 md:py-48"
    >
      <div className="mb-20 flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <div>
          <span
            data-reveal
            className="mb-6 block text-[10px] uppercase tracking-[0.35em] text-accent"
          >
            · Colecciones
          </span>
          <h2
            data-reveal
            className="max-w-3xl font-serif text-5xl leading-none tracking-tight md:text-8xl"
          >
            Diseñado <br />
            <em className="italic">para la quietud.</em>
          </h2>
        </div>
        <p
          data-reveal
          className="max-w-sm pb-4 text-sm leading-relaxed text-bone/60"
        >
          Espumas multi-densidad, linos europeos y armazones de roble macizo se
          combinan para una experiencia sensorial sin comparación.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-px bg-bone/10 md:grid-cols-3">
        {items.map((item) => (
          <article
            key={item.name}
            data-reveal
            className="group flex flex-col gap-10 bg-ink p-8 md:p-12"
          >
            <div className="relative aspect-square w-full overflow-hidden bg-bone/5">
              <img
                src={item.img}
                alt={item.alt}
                width={1000}
                height={1000}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
              />
            </div>
            <div>
              <div className="mb-4 flex items-baseline justify-between">
                <span className="font-serif text-xs tracking-widest text-bone/40">
                  {item.n}
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-bone/40">
                  {item.tag}
                </span>
              </div>
              <h3 className="mb-4 font-serif text-3xl italic">{item.name}</h3>
              <p className="text-sm leading-relaxed text-bone/60">{item.copy}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
