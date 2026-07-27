import { useState } from "react";
import { toast } from "sonner";

export function Reservation() {
  const [form, setForm] = useState({ name: "", email: "", date: "", people: "2" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Solicitud enviada", {
      description: `Gracias ${form.name || ""}. Confirmaremos tu mesa en breve.`,
    });
    setForm({ name: "", email: "", date: "", people: "2" });
  };

  return (
    <section id="reserva" className="bg-kuro-bg text-kuro-fg py-32 md:py-40 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5 space-y-10" data-reveal>
          <p className="font-[family-name:var(--font-mono-kuro)] text-[10px] uppercase tracking-[0.4em] text-kuro-primary">
            06 — Reservar
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-5xl md:text-6xl italic leading-tight text-balance">
            Una mesa <br />en el silencio.
          </h2>
          <div className="space-y-6 text-sm text-kuro-muted">
            <div>
              <p className="text-[10px] uppercase tracking-[0.4em] text-kuro-fg/60 mb-2 font-[family-name:var(--font-mono-kuro)]">Dirección</p>
              <p className="text-kuro-fg leading-relaxed">Calle de la Luna 12, Distrito Gastronómico<br />28004 Madrid, España</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.4em] text-kuro-fg/60 mb-2 font-[family-name:var(--font-mono-kuro)]">Contacto</p>
              <p className="text-kuro-fg">+34 912 345 678</p>
              <p className="text-kuro-fg">reservas@kuro-omakase.es</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.4em] text-kuro-fg/60 mb-2 font-[family-name:var(--font-mono-kuro)]">Horario</p>
              <p>Mar — Jue · 13:30 — 23:30</p>
              <p>Vie — Sáb · 13:30 — 00:30</p>
              <p>Dom · 13:30 — 17:00</p>
              <p className="text-kuro-muted/70">Lunes cerrado</p>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="lg:col-span-7 border border-kuro-border p-8 md:p-12 space-y-6 bg-kuro-surface/30" data-reveal>
          <div className="grid md:grid-cols-2 gap-6">
            <label className="block">
              <span className="text-[10px] uppercase tracking-[0.3em] text-kuro-muted font-[family-name:var(--font-mono-kuro)]">Nombre</span>
              <input
                required
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="mt-2 w-full bg-transparent border-b border-kuro-border py-3 text-kuro-fg outline-none focus:border-kuro-primary transition-colors"
              />
            </label>
            <label className="block">
              <span className="text-[10px] uppercase tracking-[0.3em] text-kuro-muted font-[family-name:var(--font-mono-kuro)]">Email</span>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="mt-2 w-full bg-transparent border-b border-kuro-border py-3 text-kuro-fg outline-none focus:border-kuro-primary transition-colors"
              />
            </label>
            <label className="block">
              <span className="text-[10px] uppercase tracking-[0.3em] text-kuro-muted font-[family-name:var(--font-mono-kuro)]">Fecha</span>
              <input
                required
                type="date"
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                className="mt-2 w-full bg-transparent border-b border-kuro-border py-3 text-kuro-fg outline-none focus:border-kuro-primary transition-colors [color-scheme:dark]"
              />
            </label>
            <label className="block">
              <span className="text-[10px] uppercase tracking-[0.3em] text-kuro-muted font-[family-name:var(--font-mono-kuro)]">Comensales</span>
              <select
                value={form.people}
                onChange={(e) => setForm({ ...form, people: e.target.value })}
                className="mt-2 w-full bg-transparent border-b border-kuro-border py-3 text-kuro-fg outline-none focus:border-kuro-primary"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                  <option key={n} value={n} className="bg-kuro-bg">{n} {n === 1 ? "persona" : "personas"}</option>
                ))}
              </select>
            </label>
          </div>
          <label className="block">
            <span className="text-[10px] uppercase tracking-[0.3em] text-kuro-muted font-[family-name:var(--font-mono-kuro)]">Notas</span>
            <textarea
              rows={3}
              placeholder="Alergias, ocasión especial, asiento preferido…"
              className="mt-2 w-full bg-transparent border-b border-kuro-border py-3 text-kuro-fg outline-none focus:border-kuro-primary transition-colors resize-none"
            />
          </label>
          <button
            type="submit"
            className="w-full mt-4 bg-kuro-primary text-kuro-fg py-4 text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-kuro-fg hover:text-kuro-bg transition-all duration-500"
          >
            Solicitar Reserva
          </button>
        </form>
      </div>
    </section>
  );
}