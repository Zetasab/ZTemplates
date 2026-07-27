import conceptImg from "@/assets/concept-nigiri.jpg";

export function Concept() {
  return (
    <section id="concepto" className="py-32 md:py-48 px-6 lg:px-24 bg-kuro-bg grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
      <div className="lg:col-span-5 space-y-8" data-reveal>
        <p className="font-[family-name:var(--font-mono-kuro)] text-[10px] uppercase tracking-[0.4em] text-kuro-primary">
          01 — El Concepto
        </p>
        <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-kuro-fg leading-tight text-balance">
          La precisión es nuestro <span className="italic">único</span> lenguaje.
        </h2>
        <p className="text-kuro-muted leading-relaxed">
          En Kuro, el concepto de "todo lo que puedas comer" se eleva a la categoría de arte. No servimos cantidad; servimos
          momentos de perfección técnica bajo demanda, pieza por pieza.
        </p>
        <p className="text-kuro-muted leading-relaxed">
          Pescado de lonja nacional y de los mercados de Toyosu, procesado con cuchillos de acero azul y una paciencia que
          roza lo obsesivo. Cada nigiri se prepara cuando lo pides, jamás antes.
        </p>
        <div className="w-24 h-px bg-kuro-primary" />
      </div>
      <div className="lg:col-span-7 relative">
        <img
          data-mask
          src={conceptImg}
          alt="Tres piezas de nigiri sobre un plato negro largo"
          loading="lazy"
          width={1600}
          height={1200}
          className="w-full aspect-[4/3] object-cover rounded-sm"
        />
      </div>
    </section>
  );
}