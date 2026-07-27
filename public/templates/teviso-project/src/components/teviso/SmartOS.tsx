import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ui from "@/assets/smart-ui.jpg";

const feats = [
  { t: "TevisOS 3", d: "Interfaz instantánea, sin publicidad, sin fricciones." },
  { t: "AirPlay 2", d: "Envía cualquier contenido desde iPhone o Mac." },
  { t: "Chromecast", d: "Comparte desde Android en un toque." },
  { t: "Alexa + Google", d: "Control por voz manos libres integrado." },
  { t: "Todas las apps", d: "Netflix, Prime, Disney+, Max, Apple TV+ y más." },
  { t: "Gaming Hub", d: "Xbox Cloud y GeForce NOW sin consola." },
];

export function SmartOS() {
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.from(".os-feat", {
        y: 30,
        opacity: 0,
        stagger: 0.08,
        scrollTrigger: { trigger: el, start: "top 75%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative px-6 py-32 sm:py-48">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#4ade80]">
            Smart OS
          </p>
          <h2 className="mx-auto max-w-3xl font-serif text-5xl leading-[1] sm:text-7xl">
            Tu cine, <span className="italic text-aurora">todo en uno</span>
          </h2>
        </div>

        <div className="glass-strong relative overflow-hidden rounded-3xl">
          <img
            src={ui}
            alt="Interfaz de TevisOS"
            width={1600}
            height={1000}
            loading="lazy"
            className="h-auto w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {feats.map((f) => (
            <div key={f.t} className="os-feat glass rounded-2xl p-6">
              <div className="font-serif text-2xl">{f.t}</div>
              <p className="mt-2 text-sm text-white/60">{f.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
