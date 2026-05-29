import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export function AboutForm() {
  const [sent, setSent] = useState(false);
  return (
    <div className="relative rounded-3xl glass-card p-8 sm:p-10 shadow-float">
      <div className="text-xs uppercase tracking-wider text-primary font-bold mb-2">Únete al equipo</div>
      <h3 className="text-2xl sm:text-3xl font-black mb-2">¿Quieres trabajar con nosotros?</h3>
      <p className="text-sm text-muted-foreground mb-6">
        Buscamos farmacéuticos, técnicos y entusiastas del bienestar. Cuéntanos quién eres.
      </p>

      {sent ? (
        <div className="flex flex-col items-center justify-center py-10 text-center animate-fade-in">
          <CheckCircle2 className="w-14 h-14 text-success mb-3" />
          <div className="font-bold text-lg">¡Mensaje enviado!</div>
          <div className="text-sm text-muted-foreground">Te contestaremos en breve.</div>
        </div>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              required
              placeholder="Nombre"
              className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none transition-organic"
            />
            <input
              required
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none transition-organic"
            />
          </div>
          <select
            className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none transition-organic"
            defaultValue=""
          >
            <option value="" disabled>Área de interés</option>
            <option>Farmacia</option>
            <option>Atención al cliente</option>
            <option>Logística</option>
            <option>Producto / Tech</option>
          </select>
          <textarea
            rows={3}
            placeholder="Cuéntanos brevemente sobre ti…"
            className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none transition-organic resize-none"
          />
          <button
            type="submit"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full gradient-primary text-primary-foreground font-semibold shadow-glow hover:scale-[1.02] transition-organic"
          >
            Enviar candidatura
            <Send className="w-4 h-4 group-hover:translate-x-1 transition-organic" />
          </button>
        </form>
      )}
    </div>
  );
}
