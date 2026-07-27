import { useReveal } from "@/hooks/use-reveal";
import tops from "@/assets/cat-tops.jpg";
import tshirts from "@/assets/cat-tshirts.jpg";
import skirts from "@/assets/cat-skirts.jpg";
import dresses from "@/assets/cat-dresses.jpg";
import shoes from "@/assets/cat-shoes.jpg";

type Item = {
  code: string;
  name: string;
  category: string;
  price: string;
  image: string;
  description: string;
  offset?: boolean;
};

const items: Item[] = [
  {
    code: "TOPS_01",
    category: "Tops",
    name: "Cuerpo Estructurado",
    price: "240€",
    image: tops,
    description:
      "Blusa de seda salvaje con hombro reforzado y caída sobre el torso. Talle limpio, sin botones visibles.",
  },
  {
    code: "CALZADO_02",
    category: "Calzado",
    name: "Mocasín Escultórico",
    price: "480€",
    image: shoes,
    description:
      "Cuero italiano vegetal montado sobre horma propia. Suela de cuero, tacón apenas insinuado.",
    offset: true,
  },
  {
    code: "FALDAS_03",
    category: "Faldas",
    name: "Falda Columnar",
    price: "350€",
    image: skirts,
    description:
      "Lana virgen pesada, talle alto, vuelo controlado. Pensada para ocupar espacio sin pedir permiso.",
  },
  {
    code: "VESTIDOS_04",
    category: "Vestidos",
    name: "Túnica Fluida",
    price: "520€",
    image: dresses,
    description:
      "Vestido camisero en seda lavada al peso, cuello en V profundo, costuras francesas.",
    offset: true,
  },
  {
    code: "CAMISETA_05",
    category: "Camisetas",
    name: "Camiseta Esencial",
    price: "120€",
    image: tshirts,
    description:
      "Algodón pima peinado de 220 g/m². Costuras planas, cuello compactado a mano.",
  },
];

function Card({ item, index }: { item: Item; index: number }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`reveal group space-y-6 ${item.offset ? "md:translate-y-32" : ""}`}
      style={{ transitionDelay: `${(index % 2) * 120}ms` }}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-muted outline outline-1 -outline-offset-1 outline-black/5">
        <img
          src={item.image}
          alt={`${item.category} — ${item.name}`}
          width={800}
          height={1100}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.04]"
        />
        <span className="absolute left-4 top-4 font-mono text-[9px] uppercase tracking-[0.3em] text-white mix-blend-difference">
          {item.code}
        </span>
      </div>
      <div className="space-y-3">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="font-display text-2xl italic">{item.name}</h3>
          <span className="font-mono text-[10px] tracking-widest text-muted-foreground">
            {item.price}
          </span>
        </div>
        <p className="max-w-[42ch] text-sm leading-relaxed text-muted-foreground">
          {item.description}
        </p>
        <a
          href="#"
          className="inline-block border-b border-foreground pb-0.5 font-mono text-[9px] uppercase tracking-[0.3em]"
        >
          Ver pieza
        </a>
      </div>
    </div>
  );
}

export function Categories() {
  return (
    <section id="coleccion" className="relative flex flex-col md:flex-row">
      <aside className="border-r border-border py-8 md:sticky md:top-0 md:h-screen md:w-24 md:py-0">
        <div className="flex h-full items-center justify-center">
          <span className="whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.5em] md:-rotate-90">
            Categorías / 2024
          </span>
        </div>
      </aside>

      <div className="flex-1 px-6 py-24 md:px-16 md:py-40 lg:px-24">
        <header className="mb-24 max-w-2xl">
          <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
            Esenciales de la temporada
          </p>
          <h2 className="text-balance font-display text-4xl italic leading-tight md:text-6xl">
            Cinco piezas para construir un guardarropa que dure una década.
          </h2>
        </header>

        <div className="grid grid-cols-1 gap-x-16 gap-y-24 md:grid-cols-2 md:gap-x-24 md:gap-y-32">
          {items.map((item, i) => (
            <Card key={item.code} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
