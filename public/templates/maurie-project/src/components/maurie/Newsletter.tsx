import { useReveal } from "@/hooks/use-reveal";

export function Newsletter() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section
      id="contacto"
      className="border-t border-border px-6 py-32 md:px-16 md:py-40"
    >
      <div
        ref={ref}
        className="reveal mx-auto grid max-w-7xl grid-cols-1 gap-16 md:grid-cols-2 md:gap-24"
      >
        <div>
          <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
            La bitácora
          </p>
          <h2 className="text-balance font-display text-4xl italic leading-tight md:text-5xl">
            Cartas desde el atelier, una vez al mes.
          </h2>
        </div>
        <div className="flex flex-col justify-end">
          <p className="mb-8 max-w-md text-sm leading-relaxed text-muted-foreground">
            Lanzamientos privados, archivos fotográficos y reflexiones sobre el
            oficio. Sin promociones, sin ruido.
          </p>
          <form
            className="flex border-b border-foreground/40 pb-3 focus-within:border-foreground"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              required
              placeholder="correo@ejemplo.com"
              className="flex-grow bg-transparent font-mono text-sm tracking-wide placeholder:text-muted-foreground focus:outline-none"
              aria-label="Correo electrónico"
            />
            <button
              type="submit"
              className="font-mono text-[10px] uppercase tracking-[0.3em]"
            >
              Suscribirse →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
