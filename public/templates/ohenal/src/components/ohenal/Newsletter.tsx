import { useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <section className="relative bg-ink py-32 md:py-48 px-6 md:px-16 border-t border-silver/10">
      <div className="mx-auto max-w-4xl text-center">
        <div className="flex items-center justify-center gap-6 mb-10">
          <span className="hairline max-w-12" />
          <span className="text-eyebrow text-silver/70">VIII · Correspondencia</span>
          <span className="hairline max-w-12" />
        </div>
        <h2 className="font-display text-5xl md:text-7xl leading-[0.95] text-bone tracking-tight mb-8">
          Recibe la próxima <em className="italic">edición.</em>
        </h2>
        <p className="text-bone/60 max-w-xl mx-auto mb-14 leading-relaxed">
          Ediciones limitadas, lanzamientos privados y notas del taller.
          Sin frecuencia fija. Sin ruido.
        </p>
        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="flex flex-col md:flex-row gap-0 md:gap-px max-w-xl mx-auto border-b border-silver/40"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tu@correo.com"
            className="flex-1 bg-transparent py-4 px-2 text-bone placeholder:text-bone/30 outline-none text-lg"
          />
          <button
            type="submit"
            className="text-eyebrow text-bone hover:text-silver transition py-4 px-6"
          >
            {sent ? "Recibido ·" : "Suscribir →"}
          </button>
        </form>
      </div>
    </section>
  );
}
