import { useReveal } from "@/hooks/use-reveal";
import atelier1 from "@/assets/atelier-1.jpg";
import atelier2 from "@/assets/atelier-2.jpg";
import atelier3 from "@/assets/atelier-3.jpg";

const materials = [
  {
    n: "01",
    name: "Seda salvaje",
    origin: "Como, Italia",
    description:
      "Tejida en pequeños telares familiares cerca del lago. Su peso —entre 22 y 28 mommes— le da una caída sólida, casi escultórica.",
    image: atelier1,
  },
  {
    n: "02",
    name: "Lino belga",
    origin: "Kortrijk, Bélgica",
    description:
      "Fibra larga cultivada sin riego artificial. Se ablanda con el uso, conserva la forma, envejece como el papel hecho a mano.",
    image: atelier2,
  },
  {
    n: "03",
    name: "Cachemira",
    origin: "Mongolia Interior",
    description:
      "Hilada en dos cabos finos, no en cuatro. Más ligera, menos voluminosa, con un tacto que reconocerás veinte años después.",
    image: atelier3,
  },
];

function MaterialCard({ m, i }: { m: (typeof materials)[number]; i: number }) {
  const ref = useReveal<HTMLElement>();
  return (
    <article
      ref={ref}
      className="reveal space-y-6"
      style={{ transitionDelay: `${i * 140}ms` }}
    >
      <div className="aspect-[4/5] overflow-hidden bg-muted">
        <img
          src={m.image}
          alt={m.name}
          width={800}
          height={1000}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1800ms] hover:scale-105"
        />
      </div>
      <div className="flex items-baseline justify-between border-b border-border pb-3">
        <h3 className="font-display text-2xl italic">{m.name}</h3>
        <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground">
          {m.n}
        </span>
      </div>
      <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground">
        {m.origin}
      </p>
      <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
        {m.description}
      </p>
    </article>
  );
}

export function Materials() {
  return (
    <section id="materiales" className="px-6 py-32 md:px-16 md:py-48">
      <header className="mx-auto mb-24 max-w-5xl">
        <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
          Materiales / Procedencia
        </p>
        <h2 className="text-balance font-display text-4xl italic leading-tight md:text-6xl">
          Las prendas comienzan donde nace la fibra.
        </h2>
      </header>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-12 gap-y-20 md:grid-cols-3">
        {materials.map((m, i) => (
          <MaterialCard key={m.n} m={m} i={i} />
        ))}
      </div>
    </section>
  );
}
