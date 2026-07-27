import counter from "@/assets/ambience-counter.jpg";
import room from "@/assets/ambience-room.jpg";
import sake from "@/assets/ambience-sake.jpg";
import hands from "@/assets/ambience-hands.jpg";

export function Ambience() {
  return (
    <section id="ambiente" className="py-32 md:py-40 px-6 lg:px-16 bg-kuro-bg text-kuro-fg">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16" data-reveal>
          <div>
            <p className="font-[family-name:var(--font-mono-kuro)] text-[10px] uppercase tracking-[0.4em] text-kuro-primary mb-4">
              03 — El Espacio
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-5xl md:text-6xl italic">Sala &amp; Atmósfera</h2>
          </div>
          <p className="hidden md:block max-w-xs text-sm text-kuro-muted leading-relaxed">
            Veintidós asientos en barra, cuatro mesas privadas. Una caja oscura diseñada para que el plato sea la única
            fuente de luz.
          </p>
        </div>

        <div className="grid grid-cols-12 grid-rows-6 gap-4 md:gap-6 min-h-[680px]" data-reveal-group>
          <div data-reveal-item className="col-span-12 md:col-span-8 row-span-4 overflow-hidden">
            <img src={counter} alt="Barra principal del restaurante Kuro" loading="lazy" width={1400} height={1000}
              className="w-full h-full object-cover transition-transform duration-[1200ms] hover:scale-105" />
          </div>
          <div data-reveal-item className="col-span-6 md:col-span-4 row-span-3 overflow-hidden">
            <img src={room} alt="Sala privada con farolillo" loading="lazy" width={900} height={1200}
              className="w-full h-full object-cover transition-transform duration-[1200ms] hover:scale-105" />
          </div>
          <div data-reveal-item className="col-span-6 md:col-span-4 row-span-3 overflow-hidden">
            <img src={sake} alt="Sake artesanal a la luz de las velas" loading="lazy" width={900} height={900}
              className="w-full h-full object-cover transition-transform duration-[1200ms] hover:scale-105" />
          </div>
          <div data-reveal-item className="col-span-12 md:col-span-8 row-span-2 overflow-hidden">
            <img src={hands} alt="Manos del chef dando forma al arroz" loading="lazy" width={900} height={1100}
              className="w-full h-full object-cover transition-transform duration-[1200ms] hover:scale-105" />
          </div>
        </div>
      </div>
    </section>
  );
}