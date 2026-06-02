import { useGsap, gsap, ScrollTrigger } from "@/hooks/use-gsap";
import img from "@/assets/controller-fortnite.jpg";

export function EditionFortnite() {
  const scope = useGsap(() => {
    gsap.to(".fn-img", {
      yPercent: -12,
      ease: "none",
      scrollTrigger: { trigger: ".fn-section", start: "top bottom", end: "bottom top", scrub: true },
    });
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  });

  return (
    <section ref={scope} className="fn-section relative bg-obsidian border-t border-white/5 overflow-hidden">
      <div className="flex flex-col md:flex-row-reverse items-stretch min-h-screen">
        <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-24 py-20 bg-purple-950/30">
          <span className="text-purple-400 font-bold tracking-[0.3em] uppercase text-xs mb-6">
            Edition 02 / 05
          </span>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold uppercase mb-6 italic text-white leading-[0.9]">
            Storm<br />Chaser
          </h2>
          <p className="text-zinc-400 max-w-sm mb-8 leading-relaxed">
            Inspirado en Fortnite. Carcasa iridiscente púrpura y azul eléctrico con halo reactivo en los sticks. Detalles de battle bus grabados en blueprint.
          </p>
          <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-6 max-w-sm">
            <div>
              <p className="text-white font-bold text-sm">Finish</p>
              <p className="text-xs text-zinc-500">Holographic Iridescent</p>
            </div>
            <div>
              <p className="text-white font-bold text-sm">LEDs</p>
              <p className="text-xs text-zinc-500">Reactive Purple Halo</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 relative min-h-[60vh] md:min-h-screen overflow-hidden">
          <img
            src={img}
            alt="Mando Xbox personalizado Fortnite con acabado iridiscente púrpura y azul"
            width={1024}
            height={1024}
            loading="lazy"
            className="fn-img absolute inset-0 w-full h-[115%] object-cover -top-[7%]"
          />
        </div>
      </div>
    </section>
  );
}
