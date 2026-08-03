import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import showroom from "@/assets/showroom.jpg";

export function Showroom() {
  const ref = useScrollReveal<HTMLElement>("[data-reveal]");
  const [sending, setSending] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Solicitud recibida", {
        description: "Te contactaremos en menos de 24h para agendar tu visita.",
      });
    }, 600);
  };

  return (
    <section ref={ref} id="contacto" className="px-6 py-32 md:px-20 md:py-48">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 md:grid-cols-12 md:gap-24">
        <div className="space-y-10 md:col-span-5">
          <span
            data-reveal
            className="block text-[10px] uppercase tracking-[0.35em] text-accent"
          >
            · Showroom
          </span>
          <h2
            data-reveal
            className="font-serif text-5xl leading-none tracking-tight md:text-7xl"
          >
            Visita el <br />
            <em className="italic">estudio.</em>
          </h2>
          <p
            data-reveal
            className="max-w-md text-base leading-relaxed text-muted-foreground"
          >
            Experimenta la comodidad en persona. Nuestro showroom es un espacio
            de calma abierto con cita previa — un lugar para tocar, sentir y
            decidir sin prisa.
          </p>

          <dl data-reveal className="space-y-6 border-t border-ink/10 pt-8 text-sm">
            <div className="flex justify-between">
              <dt className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                Dirección
              </dt>
              <dd className="text-right">Calle Claudio Coello 42<br />28001 Madrid</dd>
            </div>
            <div className="flex justify-between border-t border-ink/5 pt-6">
              <dt className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                Horario
              </dt>
              <dd className="text-right">Lun — Sáb<br />10:00 — 20:00</dd>
            </div>
            <div className="flex justify-between border-t border-ink/5 pt-6">
              <dt className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                Contacto
              </dt>
              <dd className="text-right">
                hola@modulo.studio<br />+34 910 000 000
              </dd>
            </div>
          </dl>
        </div>

        <div data-reveal className="md:col-span-7">
          <div className="mb-10 aspect-[4/3] w-full overflow-hidden bg-muted">
            <img
              src={showroom}
              alt="Interior del showroom de MÓDULO en Madrid"
              width={1400}
              height={1600}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <form onSubmit={onSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  Nombre
                </span>
                <input
                  required
                  name="name"
                  type="text"
                  className="w-full border-b border-ink/20 bg-transparent py-3 text-sm outline-none transition-colors focus:border-ink"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  Email
                </span>
                <input
                  required
                  name="email"
                  type="email"
                  className="w-full border-b border-ink/20 bg-transparent py-3 text-sm outline-none transition-colors focus:border-ink"
                />
              </label>
            </div>
            <label className="block">
              <span className="mb-2 block text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                Mensaje
              </span>
              <textarea
                name="message"
                rows={3}
                className="w-full resize-none border-b border-ink/20 bg-transparent py-3 text-sm outline-none transition-colors focus:border-ink"
                placeholder="Cuéntanos qué buscas…"
              />
            </label>
            <button
              type="submit"
              disabled={sending}
              className="mt-4 w-full bg-ink py-5 text-[11px] uppercase tracking-[0.25em] text-bone transition-colors hover:bg-accent hover:text-ink disabled:opacity-50 md:w-auto md:px-16"
            >
              {sending ? "Enviando…" : "Reservar cita"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
