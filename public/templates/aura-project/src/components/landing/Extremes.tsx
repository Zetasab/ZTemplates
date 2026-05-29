import bottleHero from "@/assets/bottle-hero.jpg";
import { useGsap, gsap } from "@/hooks/use-gsap";

export function Extremes() {
  const ref = useGsap((_ctx, scope) => {
    gsap.from(scope.querySelectorAll("[data-reveal]"), {
      y: 60,
      opacity: 0,
      duration: 1,
      ease: "expo.out",
      stagger: 0.15,
      scrollTrigger: {
        trigger: scope,
        start: "top 75%",
      },
    });
    gsap.to(scope.querySelector("[data-parallax-img]"), {
      yPercent: -12,
      ease: "none",
      scrollTrigger: {
        trigger: scope,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  });

  return (
    <section ref={ref} id="vessel" className="py-32 md:py-48 px-6 md:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-12 gap-8 items-center">
        <div className="col-span-12 lg:col-span-5 mb-12 lg:mb-0">
          <span data-reveal className="text-xs text-gold-muted uppercase tracking-[0.3em] block mb-6">
            01 / La Vasija
          </span>
          <h2
            data-reveal
            className="font-display text-4xl md:text-5xl font-medium mb-8 leading-tight"
          >
            Diseñada para <br />
            <span className="italic">los extremos</span>
          </h2>
          <p data-reveal className="text-platinum/60 text-base md:text-lg leading-relaxed mb-10">
            Forjada en acero inoxidable de grado quirúrgico y aislamiento de doble pared al vacío,
            AURA mantiene tus líquidos a temperaturas bajo cero durante 48 horas. Una silueta que
            se siente natural en tu mano y sorprende sobre tu escritorio.
          </p>
          <div data-reveal className="flex gap-4">
            <button className="px-8 py-4 bg-platinum text-obsidian text-xs font-bold uppercase tracking-widest hover:bg-gold-muted transition-colors cursor-pointer">
              Explorar tecnología
            </button>
          </div>
        </div>

        <div data-reveal className="col-span-12 lg:col-span-7 relative">
          <div className="aspect-[4/5] relative overflow-hidden">
            <img
              data-parallax-img
              src={bottleHero}
              alt="Botella AURA sobre pedestal de mármol"
              width={1024}
              height={1280}
              loading="lazy"
              className="w-full h-[115%] object-cover -mt-[7%]"
            />
            <div className="absolute -bottom-10 -left-4 md:-left-10 p-6 md:p-8 bg-slate-950/90 backdrop-blur-xl border border-platinum/10 max-w-xs">
              <p className="text-[10px] text-gold-muted uppercase tracking-widest mb-2">
                Rendimiento en frío
              </p>
              <h3 className="text-2xl font-display font-medium mb-2 text-platinum">48 Horas</h3>
              <p className="text-xs text-platinum/40">
                Tecnología avanzada de sellado al vacío que desafía el entorno exterior.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
