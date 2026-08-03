import { useState } from "react";

export function Custom() {
  const [sent, setSent] = useState(false);
  return (
    <section id="custom" className="relative py-32 overflow-hidden border-y border-border">
      <h2
        aria-hidden
        className="absolute inset-0 flex items-center justify-center font-display text-[22vw] leading-none text-white/[0.03] select-none pointer-events-none tracking-tighter"
      >
        CUSTOM
      </h2>

      <div className="relative z-10 max-w-4xl mx-auto px-6 grid gap-12 md:grid-cols-2 items-start">
        <div>
          <span className="font-mono text-[10px] text-primary uppercase tracking-widest">Encargo a medida</span>
          <h3 className="text-5xl md:text-6xl font-display mt-4 mb-6 leading-tight">Cuéntanos tu idea.</h3>
          <p className="text-muted-foreground mb-6">
            ¿Tu personaje favorito, un paisaje que te marcó, el logo de tu clan? Producimos ediciones de una sola pieza a partir de un briefing y una referencia visual.
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>· Perfiles Cherry, OEM y SA compatibles</li>
            <li>· Producción en 3-5 semanas</li>
            <li>· Máximo 25 unidades por encargo</li>
          </ul>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="space-y-4 bg-neutral-950/60 backdrop-blur p-8 rounded-2xl border border-border"
        >
          <input
            type="text"
            placeholder="Tu nombre"
            required
            className="w-full bg-transparent border border-border rounded-md px-4 py-3 text-sm focus:border-primary outline-none transition-colors"
          />
          <input
            type="email"
            placeholder="Email de contacto"
            required
            className="w-full bg-transparent border border-border rounded-md px-4 py-3 text-sm focus:border-primary outline-none transition-colors"
          />
          <textarea
            rows={4}
            placeholder="Describe tu idea, referencias, cantidad…"
            required
            className="w-full bg-transparent border border-border rounded-md px-4 py-3 text-sm focus:border-primary outline-none transition-colors resize-none"
          />
          <button
            type="submit"
            disabled={sent}
            className="w-full py-3 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest rounded-full hover:opacity-90 transition-opacity disabled:opacity-60"
          >
            {sent ? "Recibido ✓ te escribimos en 48h" : "Enviar briefing"}
          </button>
        </form>
      </div>
    </section>
  );
}
