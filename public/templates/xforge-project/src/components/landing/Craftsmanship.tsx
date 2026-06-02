import { useGsap, gsap, ScrollTrigger } from "@/hooks/use-gsap";
import craft from "@/assets/craftsmanship.jpg";

const steps = [
  { n: "01", title: "Teardown", text: "Desmontaje completo del mando original. Cada tornillo, cada cable, catalogado." },
  { n: "02", title: "Painting", text: "7 capas de pintura automotriz y barniz curado entre capa y capa por 12 horas." },
  { n: "03", title: "Assembly", text: "Reensamblaje a mano por un solo artesano, con calibración y testing final." },
];

export function Craftsmanship() {
  const scope = useGsap(() => {
    gsap.to(".craft-img", {
      yPercent: -20,
      ease: "none",
      scrollTrigger: { trigger: ".craft-section", start: "top bottom", end: "bottom top", scrub: true },
    });

    gsap.utils.toArray<HTMLElement>(".craft-step").forEach((step) => {
      gsap.from(step, {
        opacity: 0,
        y: 60,
        duration: 1,
        ease: "expo.out",
        scrollTrigger: { trigger: step, start: "top 80%" },
      });
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  });

  return (
    <section id="craft" ref={scope} className="craft-section relative bg-obsidian py-32 md:py-48 px-6 md:px-12 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
        <div className="lg:col-span-5 relative h-[60vh] lg:h-[80vh] overflow-hidden">
          <img
            src={craft}
            alt="Artesano pintando un mando Xbox a mano con aerógrafo"
            width={1024}
            height={1280}
            loading="lazy"
            className="craft-img absolute inset-0 w-full h-[125%] object-cover -top-[12%]"
          />
        </div>
        <div className="lg:col-span-7 flex flex-col justify-center">
          <span className="font-display text-[10px] font-bold uppercase tracking-[0.3em] text-acid mb-6">
            // Craftsmanship
          </span>
          <h2 className="font-display text-5xl md:text-7xl font-bold uppercase mb-12 text-white leading-[0.9]">
            14 horas.<br />Una sola <span className="text-acid italic">mano.</span>
          </h2>
          <div className="space-y-12">
            {steps.map((s) => (
              <div key={s.n} className="craft-step grid grid-cols-[auto_1fr] gap-8 items-start border-t border-white/10 pt-8">
                <span className="font-display text-5xl md:text-6xl font-bold text-acid leading-none">{s.n}</span>
                <div>
                  <h3 className="font-display text-2xl font-bold uppercase text-white mb-2">{s.title}</h3>
                  <p className="text-zinc-400 leading-relaxed max-w-md">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
