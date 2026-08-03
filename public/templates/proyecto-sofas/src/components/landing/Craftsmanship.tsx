import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import stitch from "@/assets/craft-stitch.jpg";
import oak from "@/assets/craft-oak.jpg";
import textiles from "@/assets/craft-textiles.jpg";

const cards = [
  { img: stitch, label: "Costuras a mano", detail: "Punto silla en cuero grano completo" },
  { img: oak, label: "Roble macizo", detail: "Estructuras que sobreviven generaciones" },
  { img: textiles, label: "Textiles éticos", detail: "Telares europeos de origen certificado" },
  { img: stitch, label: "Pluma y viscoelástica", detail: "Confort firme, calidez envolvente" },
  { img: oak, label: "Ensamblaje sin tornillos", detail: "Espigas y colas de milano artesanales" },
];

export function Craftsmanship() {
  const ref = useScrollReveal<HTMLElement>("[data-reveal]");

  return (
    <section
      ref={ref}
      id="artesania"
      className="overflow-hidden bg-ink py-32 text-bone md:py-48"
    >
      <div className="mb-20 px-6 md:px-20">
        <span
          data-reveal
          className="mb-6 block text-[10px] uppercase tracking-[0.35em] text-accent"
        >
          · Artesanía
        </span>
        <h2
          data-reveal
          className="max-w-4xl font-serif text-5xl leading-none tracking-tight md:text-8xl"
        >
          Maestría <em className="italic">táctil.</em>
        </h2>
      </div>

      <div className="relative w-full">
        <div className="flex w-max animate-marquee gap-6 px-6 md:gap-8 md:px-20">
          {[...cards, ...cards].map((c, i) => (
            <div key={i} className="w-[280px] shrink-0 md:w-[420px]">
              <div className="mb-6 aspect-[3/4] w-full overflow-hidden bg-bone/5">
                <img
                  src={c.img}
                  alt={c.label}
                  width={900}
                  height={1200}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex items-baseline justify-between gap-4">
                <p className="text-[10px] uppercase tracking-[0.25em] text-bone/80">
                  {c.label}
                </p>
                <p className="text-[10px] text-bone/40">{String(i + 1).padStart(2, "0")}</p>
              </div>
              <p className="mt-2 text-xs text-bone/50">{c.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
