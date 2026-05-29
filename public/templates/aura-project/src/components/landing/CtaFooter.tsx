import { useGsap, gsap } from "@/hooks/use-gsap";

export function CtaFooter() {
  const ref = useGsap((_ctx, scope) => {
    gsap.from(scope.querySelectorAll("[data-cta]"), {
      y: 60,
      opacity: 0,
      duration: 1.1,
      ease: "expo.out",
      stagger: 0.12,
      scrollTrigger: { trigger: scope, start: "top 75%" },
    });
  });

  return (
    <div ref={ref}>
      <section
        id="shop"
        className="py-40 md:py-56 px-6 text-center bg-obsidian border-t border-platinum/5"
      >
        <span data-cta className="text-xs text-gold-muted uppercase tracking-[0.3em] block mb-6">
          07 / Posee tu AURA
        </span>
        <h2
          data-cta
          className="font-display text-5xl md:text-7xl font-bold tracking-tighter uppercase leading-[0.9] mb-10 max-w-3xl mx-auto"
        >
          Una pieza. <br /> Para toda la vida.
        </h2>
        <p data-cta className="text-platinum/60 max-w-md mx-auto mb-12">
          Producción limitada. Envío global cortesía de la casa.
        </p>
        <div data-cta className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="px-10 py-4 bg-platinum text-obsidian text-xs font-bold uppercase tracking-widest hover:bg-gold-muted transition-colors cursor-pointer">
            Comprar ahora — 78 €
          </button>
          <button className="px-10 py-4 border border-platinum/20 text-platinum text-xs font-bold uppercase tracking-widest hover:border-platinum/60 transition-colors cursor-pointer">
            Ver colores
          </button>
        </div>
      </section>

      <footer className="py-20 px-8 border-t border-platinum/10 bg-obsidian">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="flex flex-col gap-6">
            <span className="font-display font-bold text-3xl text-platinum">AURA.</span>
            <p className="text-platinum/40 max-w-xs text-sm italic">
              Un compromiso con el lujo sostenible y la búsqueda de la temperatura perfecta.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-12 md:gap-20">
            <div className="flex flex-col gap-4">
              <span className="text-[10px] uppercase tracking-widest text-gold-muted">Info</span>
              <a href="#" className="text-xs text-platinum hover:text-gold-muted transition-colors">
                Fabricación
              </a>
              <a href="#" className="text-xs text-platinum hover:text-gold-muted transition-colors">
                Envíos
              </a>
              <a href="#" className="text-xs text-platinum hover:text-gold-muted transition-colors">
                Guía de cuidado
              </a>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-[10px] uppercase tracking-widest text-gold-muted">Social</span>
              <a href="#" className="text-xs text-platinum hover:text-gold-muted transition-colors">
                Instagram
              </a>
              <a href="#" className="text-xs text-platinum hover:text-gold-muted transition-colors">
                Pinterest
              </a>
              <a href="#" className="text-xs text-platinum hover:text-gold-muted transition-colors">
                Twitter
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-platinum/5 flex flex-col md:flex-row justify-between gap-4 text-[10px] uppercase tracking-widest text-platinum/30">
          <span>© 2026 AURA Vessels Corp.</span>
          <span>Diseñado en Barcelona</span>
        </div>
      </footer>
    </div>
  );
}
