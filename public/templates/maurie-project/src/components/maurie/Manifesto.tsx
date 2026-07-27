import { useReveal } from "@/hooks/use-reveal";

export function Manifesto() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section
      id="manifiesto"
      className="bg-foreground px-6 py-32 text-background md:px-16 md:py-48"
    >
      <div ref={ref} className="reveal mx-auto max-w-4xl space-y-12 text-center">
        <p className="font-mono text-[10px] uppercase tracking-[0.45em] opacity-50">
          El Manifiesto
        </p>
        <h2 className="text-balance font-display text-3xl italic leading-tight md:text-5xl lg:text-6xl">
          Creemos en prendas que no piden permiso para existir,
          <span className="opacity-60"> sino que redefinen el espacio que ocupan.</span>
        </h2>
        <div className="mx-auto h-px w-24 bg-background/20" />
        <p className="mx-auto max-w-xl text-pretty text-base leading-relaxed opacity-70 md:text-lg">
          Cada pieza es concebida en nuestro estudio de Madrid, trabajando mano a
          mano con artesanos que entienden la caída de la seda y la resistencia
          del lino como un lenguaje sagrado. No diseñamos para una temporada.
          Diseñamos para una vida.
        </p>

        <dl className="mx-auto grid max-w-2xl grid-cols-3 gap-8 pt-12 text-left">
          {[
            { k: "12", v: "Artesanos locales" },
            { k: "04", v: "Colecciones al año" },
            { k: "100%", v: "Fibras naturales" },
          ].map((s) => (
            <div key={s.v} className="space-y-2">
              <dt className="font-display text-4xl italic md:text-5xl">{s.k}</dt>
              <dd className="font-mono text-[9px] uppercase tracking-[0.3em] opacity-50">
                {s.v}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
