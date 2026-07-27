const features = [
  {
    n: "01",
    tag: "VISION",
    title: "4K ULTRA HDR",
    body: "Transmisión de máxima fidelidad con soporte Dolby Vision, HDR10+ y Atmos en todos tus dispositivos compatibles.",
  },
  {
    n: "02",
    tag: "OFFLINE",
    title: "SIN CONEXIÓN",
    body: "Descarga cualquier título y disfrútalo donde estés con la misma calidad cinematográfica del streaming.",
  },
  {
    n: "03",
    tag: "EXCLUSIVE",
    title: "ORIGINALES",
    body: "Producciones independientes galardonadas que sólo encontrarás dentro del ecosistema NEONIC.",
  },
  {
    n: "04",
    tag: "CURATED",
    title: "SIN ANUNCIOS",
    body: "Una experiencia pura. Sin interrupciones, sin publicidad, sólo tú y la gran pantalla.",
  },
];

export function Features() {
  return (
    <section className="px-6 md:px-10 py-24 md:py-32 border-t border-border">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex justify-between items-end mb-16">
          <h2 className="font-display text-4xl md:text-6xl tracking-tight">
            LO QUE NOS DEFINE
          </h2>
          <span className="hidden md:block text-[10px] font-mono-tight uppercase tracking-[0.3em] text-muted-foreground">
            04 principios rectores
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 -mx-px">
          {features.map((f) => (
            <div
              key={f.n}
              className="group p-10 border border-border -ml-px -mt-px hover:bg-primary/5 transition-colors relative"
            >
              <span className="text-primary text-xs font-mono-tight mb-6 block">
                {f.n} / {f.tag}
              </span>
              <h3 className="font-display text-3xl md:text-4xl mb-6 tracking-tight">
                {f.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-[30ch]">
                {f.body}
              </p>
              <span className="absolute bottom-6 right-6 text-primary opacity-0 group-hover:opacity-100 transition-opacity text-lg">
                →
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}