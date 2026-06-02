import { useGsap, gsap, ScrollTrigger } from "@/hooks/use-gsap";

export function Manifesto() {
  const scope = useGsap((ctx) => {
    gsap.utils.toArray<HTMLElement>(".manifesto-line").forEach((line) => {
      gsap.from(line, {
        yPercent: 100,
        opacity: 0,
        duration: 1,
        ease: "expo.out",
        scrollTrigger: {
          trigger: line,
          start: "top 85%",
        },
      });
    });
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  });

  return (
    <section ref={scope} className="bg-obsidian py-32 md:py-48 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <span className="font-display text-[10px] font-bold uppercase tracking-[0.3em] text-acid mb-8 block">
          // Manifesto
        </span>
        <h2 className="font-display font-bold uppercase tracking-tighter text-white text-[clamp(2.5rem,7vw,7rem)] leading-[0.9]">
          <span className="block overflow-hidden">
            <span className="manifesto-line inline-block">Five mandos.</span>
          </span>
          <span className="block overflow-hidden">
            <span className="manifesto-line inline-block">Five <span className="italic text-acid">universes.</span></span>
          </span>
          <span className="block overflow-hidden">
            <span className="manifesto-line inline-block">One obsession:</span>
          </span>
          <span className="block overflow-hidden">
            <span className="manifesto-line inline-block text-zinc-500">elite craft.</span>
          </span>
        </h2>
        <p className="mt-12 max-w-xl text-zinc-400 leading-relaxed">
          Cada mando es desmontado, repintado y reensamblado a mano en sesiones de 14 a 20 horas. No producimos lotes. Producimos artefactos numerados.
        </p>
      </div>
    </section>
  );
}
