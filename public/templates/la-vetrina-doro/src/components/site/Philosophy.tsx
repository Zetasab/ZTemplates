import { useRef } from "react";
import chefCraft from "@/assets/chef-craft.jpg";
import { useGsapScroll } from "@/hooks/useGsapScroll";

export function Philosophy() {
  const scope = useRef<HTMLElement>(null);

  useGsapScroll(({ gsap }) => {
    gsap.from(".philo-reveal", {
      y: 60,
      opacity: 0,
      duration: 1,
      stagger: 0.12,
      ease: "power3.out",
      scrollTrigger: { trigger: scope.current, start: "top 75%" },
    });
    gsap.to(".philo-num", {
      yPercent: -40,
      ease: "none",
      scrollTrigger: { trigger: scope.current, start: "top bottom", end: "bottom top", scrub: true },
    });
    gsap.to(".philo-image", {
      yPercent: -12,
      ease: "none",
      scrollTrigger: { trigger: scope.current, start: "top bottom", end: "bottom top", scrub: true },
    });
  }, scope);

  return (
    <section
      ref={scope}
      id="filosofia"
      className="relative py-32 md:py-40 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden"
    >
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div className="relative">
          <div className="philo-num absolute -top-16 -left-6 text-[200px] md:text-[280px] font-display italic text-gold/10 select-none leading-none pointer-events-none">
            01
          </div>
          <span className="philo-reveal relative block text-gold text-xs uppercase tracking-[0.35em] mb-6">
            La Filosofía
          </span>
          <h2 className="philo-reveal relative font-display text-4xl md:text-6xl mb-10 leading-[1.05]">
            Ingredientes del <br />
            <span className="italic text-gold">Cielo Italiano</span>
          </h2>
          <p className="philo-reveal text-bone/65 leading-relaxed mb-10 text-lg font-light">
            No solo cocinamos: comisariamos. Nuestra harina se muele en pueblos
            umbros centenarios, y nuestros tomates San Marzano crecen en las
            laderas volcánicas del Vesubio. Cada bocado es un testimonio de una
            calidad sin concesiones.
          </p>
          <ul className="philo-reveal space-y-6 border-l border-gold/40 pl-8">
            <li>
              <span className="block text-gold text-[11px] tracking-[0.25em] uppercase mb-1.5">
                La Trufa
              </span>
              <span className="text-bone">Trufa blanca de Alba recolectada a mano en Piamonte.</span>
            </li>
            <li>
              <span className="block text-gold text-[11px] tracking-[0.25em] uppercase mb-1.5">
                El Queso
              </span>
              <span className="text-bone">Parmigiano Reggiano de 36 meses de vaquerías artesanales.</span>
            </li>
            <li>
              <span className="block text-gold text-[11px] tracking-[0.25em] uppercase mb-1.5">
                El Aceite
              </span>
              <span className="text-bone">Aceite virgen extra prensado en frío en las colinas de la Toscana.</span>
            </li>
          </ul>
        </div>
        <div className="relative aspect-[4/5] group overflow-hidden">
          <img
            src={chefCraft}
            alt="Artesano estirando la masa en cocina de lujo"
            loading="lazy"
            width={1000}
            height={1250}
            className="philo-image absolute inset-0 w-[110%] h-[110%] -top-[5%] -left-[5%] object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 ring-1 ring-inset ring-bone/5" />
          <div className="absolute bottom-6 left-6 text-[10px] uppercase tracking-[0.3em] text-gold/80">
            El Oficio
          </div>
        </div>
      </div>
    </section>
  );
}
