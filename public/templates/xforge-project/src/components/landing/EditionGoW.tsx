import { useGsap, gsap, ScrollTrigger } from "@/hooks/use-gsap";
import img from "@/assets/controller-gow.jpg";

export function EditionGoW() {
  const scope = useGsap(() => {
    gsap.to(".gow-img", {
      yPercent: -15,
      ease: "none",
      scrollTrigger: {
        trigger: ".gow-section",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  });

  return (
    <section ref={scope} className="gow-section relative bg-zinc-custom overflow-hidden">
      <div className="flex flex-col md:flex-row items-stretch min-h-screen">
        <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-24 py-20">
          <span className="text-acid font-bold tracking-[0.3em] uppercase text-xs mb-6 underline decoration-2 underline-offset-8">
            Edition 01 / 05
          </span>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold uppercase mb-6 text-white leading-[0.9]">
            Ghost of<br />Sparta
          </h2>
          <p className="text-zinc-400 max-w-sm mb-8 leading-relaxed">
            Inspirado en God of War. Runas nórdicas grabadas a láser, agarres de cuero rojo cosidos a mano y acabado en hierro envejecido. Pensado para empuñarlo como el Leviathan.
          </p>
          <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-6 mb-8 max-w-sm">
            <div>
              <p className="text-white font-bold text-sm">Shell</p>
              <p className="text-xs text-zinc-500">Iron Patina Cerakote</p>
            </div>
            <div>
              <p className="text-white font-bold text-sm">Grip</p>
              <p className="text-xs text-zinc-500">Hand-stitched Leather</p>
            </div>
          </div>
          <a
            href="#reserve"
            className="w-fit px-8 py-4 bg-acid text-black font-bold uppercase text-xs tracking-widest hover:scale-105 transition-transform"
          >
            Explore Build
          </a>
        </div>
        <div className="w-full md:w-1/2 relative min-h-[60vh] md:min-h-screen overflow-hidden">
          <img
            src={img}
            alt="Mando Xbox personalizado God of War con runas nórdicas grabadas y cuero rojo"
            width={1024}
            height={1024}
            className="gow-img absolute inset-0 w-full h-[115%] object-cover -top-[7%]"
          />
        </div>
      </div>
    </section>
  );
}
