import { useEffect, useRef } from "react";
import { gsap } from "@/hooks/useGsap";

const principles = [
  {
    num: "01",
    title: "Pigmentación pura",
    body: "Extractos botánicos y minerales bio-tecnológicos calibrados pigmento a pigmento.",
  },
  {
    num: "02",
    title: "Vidrio y latón",
    body: "Envases reutilizables de vidrio reciclado y latón pulido, hechos para durar generaciones.",
  },
  {
    num: "03",
    title: "Cruelty-free certificado",
    body: "Cada fórmula es vegana y nunca se prueba en animales. Aprobado por Leaping Bunny.",
  },
  {
    num: "04",
    title: "Neutro en carbono",
    body: "Producción, envío y devolución compensados al 100%. Operamos desde 2020 sin huella neta.",
  },
];

export function Philosophy() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "expo.out",
            scrollTrigger: { trigger: el, start: "top 85%" },
          },
        );
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      id="filosofia"
      className="bg-brand-accent/40 py-24 md:py-40 px-6 md:px-8"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 md:gap-20">
        <div className="md:col-span-5">
          <span
            data-reveal
            className="text-brand-gold text-xs uppercase tracking-[0.4em] font-bold italic block mb-6"
          >
            Manifiesto
          </span>
          <h2
            data-reveal
            className="font-display text-4xl md:text-6xl italic leading-[1.05] text-balance"
          >
            Belleza con conciencia, lujo con propósito.
          </h2>
          <p
            data-reveal
            className="mt-8 text-brand-dark/60 leading-relaxed max-w-md"
          >
            Cada decisión —desde el origen del pigmento hasta el cierre del
            envase— responde a un código que escribimos cuando fundamos la
            marca. No negociamos.
          </p>
        </div>

        <div className="md:col-span-7 md:col-start-6 space-y-px">
          {principles.map((p) => (
            <div
              key={p.num}
              data-reveal
              className="group grid grid-cols-[auto_1fr_auto] gap-6 md:gap-10 items-start py-8 border-t border-brand-dark/15 last:border-b"
            >
              <span className="text-brand-gold text-xs font-bold tracking-widest">
                {p.num}
              </span>
              <div>
                <h3 className="font-display text-2xl md:text-3xl italic mb-3">
                  {p.title}
                </h3>
                <p className="text-sm text-brand-dark/65 leading-relaxed">
                  {p.body}
                </p>
              </div>
              <span className="text-brand-dark/30 group-hover:text-brand-gold transition-colors text-2xl">
                +
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
