import editorialImg from "@/assets/editorial-silencio.jpg";

export function Editorial() {
  return (
    <section className="flex flex-col md:flex-row min-h-screen bg-secondary/40 border-y border-border">
      <div className="w-full md:w-1/2 md:sticky md:top-0 md:h-screen relative overflow-hidden">
        <img
          src={editorialImg}
          alt="Retrato cinematográfico bajo luz roja"
          className="w-full h-full object-cover"
          loading="lazy"
          width={1080}
          height={1600}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/40 md:to-transparent" />
        <div className="absolute bottom-6 left-6 text-[10px] font-mono-tight uppercase tracking-[0.3em] text-foreground/70">
          NEONIC · Frame 02 · Directed by A. Vega
        </div>
      </div>
      <div className="w-full md:w-1/2 p-10 md:p-24 flex flex-col justify-center">
        <span className="text-primary tracking-[0.35em] uppercase text-[10px] font-mono-tight mb-8">
          Destacado del Mes
        </span>
        <h2 className="font-display text-5xl md:text-7xl lg:text-8xl mb-10 tracking-tighter leading-[0.9]">
          EL SILENCIO
          <br />
          <span className="italic font-editorial font-normal text-primary">del</span>{" "}
          NEÓN
        </h2>
        <div className="space-y-8 max-w-lg">
          <p className="text-xl md:text-2xl font-editorial italic leading-relaxed text-pretty text-muted-foreground">
            Una exploración visceral de la soledad urbana en la era digital.
            Ganadora del Gran Premio del Jurado en el Festival de Locarno 2025.
          </p>
          <ul className="grid grid-cols-3 gap-6 text-[10px] uppercase tracking-widest font-mono-tight text-muted-foreground border-y border-border py-4">
            <li>
              <span className="block text-foreground text-2xl font-display mb-1">
                142
              </span>
              minutos
            </li>
            <li>
              <span className="block text-foreground text-2xl font-display mb-1">
                4.9
              </span>
              críticos
            </li>
            <li>
              <span className="block text-foreground text-2xl font-display mb-1">
                12
              </span>
              premios
            </li>
          </ul>
          <div className="flex gap-3 pt-2">
            <button className="border border-foreground px-8 py-4 uppercase text-[11px] tracking-[0.2em] hover:bg-foreground hover:text-background transition-all">
              Ver tráiler
            </button>
            <button className="bg-primary text-primary-foreground px-8 py-4 uppercase text-[11px] tracking-[0.2em] hover:brightness-110 transition-all">
              Reproducir ahora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}