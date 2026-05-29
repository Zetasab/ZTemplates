import lifestyle from "@/assets/lifestyle.jpg";
import { useGsap, gsap } from "@/hooks/use-gsap";

export function Lifestyle() {
  const ref = useGsap((_ctx, scope) => {
    gsap.to(scope.querySelector("[data-bg]"), {
      yPercent: 15,
      ease: "none",
      scrollTrigger: {
        trigger: scope,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
    gsap.from(scope.querySelectorAll("[data-reveal]"), {
      y: 50,
      opacity: 0,
      duration: 1.1,
      ease: "expo.out",
      stagger: 0.12,
      scrollTrigger: { trigger: scope, start: "top 70%" },
    });
  });

  return (
    <section ref={ref} className="h-[90vh] relative overflow-hidden">
      <div data-bg className="absolute inset-0 -top-[10%] h-[120%]">
        <img
          src={lifestyle}
          alt="Interior arquitectónico moderno con botella AURA"
          width={1920}
          height={1280}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-obsidian/55 grid place-items-center text-center px-6">
        <div className="max-w-2xl">
          <h2
            data-reveal
            className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight text-platinum"
          >
            Tu ritual diario, <span className="text-gold-muted italic">elevado</span>.
          </h2>
          <p data-reveal className="text-platinum/80 mb-10 text-base md:text-lg">
            La intersección entre ingeniería de alto rendimiento y estética haute couture. Una
            pieza pensada para acompañarte donde la vida te lleve.
          </p>
          <button
            data-reveal
            className="group flex items-center gap-4 mx-auto text-platinum cursor-pointer"
          >
            <span className="w-12 h-12 rounded-full border border-platinum/30 grid place-items-center group-hover:bg-platinum group-hover:text-obsidian transition-all">
              →
            </span>
            <span className="text-xs uppercase tracking-widest font-bold">
              Descubre la colección
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
