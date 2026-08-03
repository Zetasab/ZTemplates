import { useState } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import configuratorImg from "@/assets/configurator.jpg";

const fabrics = [
  { name: "Lino Belga · Crudo", hex: "#e8e2d5" },
  { name: "Bouclé · Piedra", hex: "#b7ac9b" },
  { name: "Terciopelo · Musgo", hex: "#4a5d4e" },
  { name: "Cuero · Cognac", hex: "#8b5e3c" },
  { name: "Lana · Grafito", hex: "#3a3a3a" },
];

const sizes = [
  { label: "2 Plazas", w: "210 cm" },
  { label: "3 Plazas", w: "260 cm" },
  { label: "Modular L", w: "Variable" },
];

export function Configurator() {
  const ref = useScrollReveal<HTMLElement>("[data-reveal]");
  const [fabric, setFabric] = useState(0);
  const [size, setSize] = useState(1);

  return (
    <section ref={ref} className="px-6 py-32 md:px-20 md:py-48">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <span
            data-reveal
            className="mb-6 block text-[10px] uppercase tracking-[0.35em] text-accent"
          >
            · Personalización
          </span>
          <h2
            data-reveal
            className="font-serif text-5xl leading-tight tracking-tight md:text-7xl"
          >
            Tu visión, <em className="italic">nuestra técnica.</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-12">
          <div data-reveal className="md:col-span-7">
            <div className="aspect-[3/2] w-full overflow-hidden bg-muted">
              <img
                src={configuratorImg}
                alt="Detalle de sofá con muestras de tejidos premium"
                width={1400}
                height={1000}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div data-reveal className="space-y-12 md:col-span-5">
            <div>
              <p className="mb-6 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Selección de tejido
              </p>
              <div className="flex flex-wrap gap-3">
                {fabrics.map((f, i) => (
                  <button
                    key={f.name}
                    type="button"
                    onClick={() => setFabric(i)}
                    aria-label={f.name}
                    className={`size-9 rounded-full transition-all ${
                      fabric === i
                        ? "ring-1 ring-ink ring-offset-4 ring-offset-background"
                        : "ring-1 ring-ink/10"
                    }`}
                    style={{ background: f.hex }}
                  />
                ))}
              </div>
              <p className="mt-4 text-xs text-muted-foreground">
                {fabrics[fabric].name}
              </p>
            </div>

            <div>
              <p className="mb-6 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Configuración
              </p>
              <ul className="space-y-3">
                {sizes.map((s, i) => (
                  <li key={s.label}>
                    <button
                      type="button"
                      onClick={() => setSize(i)}
                      className={`flex w-full items-baseline justify-between border-b py-3 text-sm uppercase tracking-widest transition-all ${
                        size === i
                          ? "border-ink text-ink"
                          : "border-ink/10 text-muted-foreground hover:text-ink"
                      }`}
                    >
                      <span>{s.label}</span>
                      <span className="text-xs">{s.w}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="#contacto"
              className="block w-full bg-ink py-5 text-center text-[11px] uppercase tracking-[0.25em] text-bone transition-colors hover:bg-accent hover:text-ink"
            >
              Solicitar muestra
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
