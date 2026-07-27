import { useRef } from "react";
import { useGsapScroll } from "@/hooks/useGsapScroll";

export function Reservation() {
  const scope = useRef<HTMLElement>(null);

  useGsapScroll(({ gsap }) => {
    gsap.from(".res-el", {
      y: 40, opacity: 0, duration: 1, stagger: 0.12, ease: "power3.out",
      scrollTrigger: { trigger: scope.current, start: "top 75%" },
    });
  }, scope);

  return (
    <section
      ref={scope}
      id="reserva"
      className="relative py-32 md:py-40 px-6 md:px-12 bg-midnight text-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,color-mix(in_oklab,var(--gold)_10%,transparent)_0%,transparent_60%)]" />
      <div className="relative max-w-3xl mx-auto">
        <span className="res-el block text-gold text-xs uppercase tracking-[0.35em] mb-8">
          La Experiencia
        </span>
        <h2 className="res-el font-display text-4xl md:text-7xl mb-10 text-bone leading-[1.05]">
          Reserve su mesa en el <br />
          <span className="italic text-gold">epicentro del sabor.</span>
        </h2>
        <p className="res-el text-bone/65 mb-12 text-lg font-light max-w-xl mx-auto leading-relaxed">
          Reservas exclusivas disponibles para nuestro salón privado. Una
          experiencia más allá del plato.
        </p>
        <div className="res-el grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto mb-10 text-left">
          <div className="border border-bone/15 px-5 py-4">
            <div className="text-[10px] uppercase tracking-[0.3em] text-bone/50 mb-1">Fecha</div>
            <div className="font-display text-lg text-bone">24 · 05</div>
          </div>
          <div className="border border-bone/15 px-5 py-4">
            <div className="text-[10px] uppercase tracking-[0.3em] text-bone/50 mb-1">Hora</div>
            <div className="font-display text-lg text-bone">21:00</div>
          </div>
          <div className="border border-bone/15 px-5 py-4">
            <div className="text-[10px] uppercase tracking-[0.3em] text-bone/50 mb-1">Comensales</div>
            <div className="font-display text-lg text-bone">02</div>
          </div>
        </div>
        <a
          href="mailto:concierge@lavetrinadoro.com"
          className="res-el inline-block px-12 py-5 bg-gold text-midnight font-semibold uppercase tracking-[0.3em] text-xs hover:bg-bone transition-colors"
        >
          Solicitar Reserva
        </a>
        <div className="res-el mt-10">
          <a
            href="mailto:concierge@lavetrinadoro.com"
            className="text-gold text-[11px] uppercase tracking-[0.35em] border-b border-gold/40 pb-1 hover:border-gold transition-colors"
          >
            Contactar al Concierge
          </a>
        </div>
      </div>
    </section>
  );
}
