import { useEffect, useRef } from "react";
import { gsap, useGsapReady } from "@/hooks/use-gsap";

const steps = [
  { n: "I", title: "Pulso", body: "Una pulsación en cada muñeca, a quince centímetros. Nunca frote — el calor de la piel debe abrirlo, no romperlo." },
  { n: "II", title: "Cuello", body: "Una nube ligera sobre la base del cuello, justo donde late la carótida. El aroma asciende con la respiración." },
  { n: "III", title: "Tela", body: "Una bruma sobre el reverso de la solapa. La fibra retiene la composición durante días, liberándola en cada gesto." },
];

export function Ritual() {
  useGsapReady();
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".ritual-head > *", {
        y: 24, opacity: 0, duration: 0.9, stagger: 0.1, ease: "power3.out",
        scrollTrigger: { trigger: ".ritual-head", start: "top 80%" },
      });
      gsap.utils.toArray<HTMLElement>(".ritual-step").forEach((el) => {
        gsap.from(el, {
          x: -40, opacity: 0, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
        });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="ritual" ref={root} className="relative bg-ink py-32 md:py-48 px-6 md:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="ritual-head mb-24 max-w-2xl">
          <div className="flex items-center gap-6 mb-10">
            <span className="hairline max-w-20" />
            <span className="text-eyebrow text-silver/70">VI · Ritual</span>
          </div>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.95] text-bone tracking-tight">
            La forma de <em className="italic">aplicarlo.</em>
          </h2>
        </div>

        <ol className="space-y-0">
          {steps.map((s) => (
            <li key={s.n} className="ritual-step grid grid-cols-12 gap-6 py-10 border-t border-silver/15">
              <div className="col-span-2 md:col-span-1">
                <span className="font-display italic text-3xl md:text-5xl text-silver/60">{s.n}</span>
              </div>
              <div className="col-span-10 md:col-span-4">
                <h3 className="font-display text-3xl md:text-4xl text-bone">{s.title}</h3>
              </div>
              <p className="col-span-12 md:col-span-7 text-bone/65 leading-relaxed md:text-lg">
                {s.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
