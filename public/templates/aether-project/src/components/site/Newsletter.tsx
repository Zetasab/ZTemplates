import { useEffect, useRef, useState } from "react";
import { gsap } from "@/hooks/useGsap";

export function Newsletter() {
  const ref = useRef<HTMLElement>(null);
  const [submitted, setSubmitted] = useState(false);

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
            duration: 1.3,
            ease: "expo.out",
            scrollTrigger: { trigger: el, start: "top 90%" },
          },
        );
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      className="bg-brand-dark text-brand-bone py-24 md:py-40 px-6 md:px-8"
    >
      <div className="max-w-3xl mx-auto text-center">
        <span
          data-reveal
          className="block text-brand-gold text-xs uppercase tracking-[0.4em] font-bold italic mb-8"
        >
          Únete al círculo
        </span>
        <h2
          data-reveal
          className="font-display text-4xl md:text-6xl italic leading-[1.05] text-balance mb-8"
        >
          Recibe nuestras exploraciones antes que nadie.
        </h2>
        <p data-reveal className="text-brand-bone/60 mb-12 max-w-xl mx-auto">
          Invitaciones a lanzamientos privados, ediciones limitadas y consejos
          de nuestros maquilladores expertos. Sin ruido.
        </p>
        <form
          data-reveal
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto"
        >
          <input
            type="email"
            required
            placeholder="Correo electrónico"
            className="flex-1 bg-transparent border-b border-brand-bone/20 py-3 px-1 text-sm outline-none focus:border-brand-gold transition-colors placeholder:text-brand-bone/40"
          />
          <button
            type="submit"
            className="px-8 py-3 bg-brand-gold text-brand-dark text-[10px] font-bold uppercase tracking-[0.25em] hover:bg-brand-bone transition-colors"
          >
            {submitted ? "Gracias" : "Suscribirse"}
          </button>
        </form>
      </div>
    </section>
  );
}
