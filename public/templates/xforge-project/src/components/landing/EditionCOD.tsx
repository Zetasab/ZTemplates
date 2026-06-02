import { useGsap, gsap, ScrollTrigger } from "@/hooks/use-gsap";
import img from "@/assets/controller-cod.jpg";

export function EditionCOD() {
  const scope = useGsap(() => {
    gsap.to(".cod-img", {
      yPercent: -10,
      ease: "none",
      scrollTrigger: { trigger: ".cod-section", start: "top bottom", end: "bottom top", scrub: true },
    });
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  });

  return (
    <section ref={scope} className="cod-section relative py-32 md:py-48 bg-zinc-custom border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
        <div className="relative overflow-hidden aspect-[4/5] w-full">
          <img
            src={img}
            alt="Mando Xbox personalizado Call of Duty con acabado militar olive drab"
            width={1024}
            height={1280}
            loading="lazy"
            className="cod-img absolute inset-0 w-full h-[115%] object-cover -top-[7%]"
          />
        </div>
        <div>
          <span className="text-orange-500 font-bold tracking-[0.3em] uppercase text-xs mb-6 block">
            Edition 03 / 05
          </span>
          <h2 className="font-display text-5xl md:text-7xl font-bold uppercase mb-8 text-white leading-[0.9]">
            Ghost<br />Protocol
          </h2>
          <div className="space-y-6 text-zinc-400 leading-relaxed">
            <p>
              Inspirado en Call of Duty. Para el perfeccionista táctico: agarres de diamante de grado militar rubberizados y hair triggers de recorrido corto para el tiempo de respuesta más rápido del mercado.
            </p>
            <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-8">
              <div>
                <p className="text-white font-bold">Shell</p>
                <p className="text-xs">Matte Kevlar Coating</p>
              </div>
              <div>
                <p className="text-white font-bold">Buttons</p>
                <p className="text-xs">Custom Machined Steel</p>
              </div>
              <div>
                <p className="text-white font-bold">Triggers</p>
                <p className="text-xs">Hair-Trigger Locks</p>
              </div>
              <div>
                <p className="text-white font-bold">Sticks</p>
                <p className="text-xs">Hall Effect Magnetic</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
