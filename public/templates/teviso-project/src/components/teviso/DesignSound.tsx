import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import profile from "@/assets/design-profile.jpg";

export function DesignSound() {
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.from(".ds-item", {
        y: 40,
        opacity: 0,
        stagger: 0.15,
        scrollTrigger: { trigger: el, start: "top 70%" },
      });
      gsap.to(".ds-img", {
        yPercent: -10,
        scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative px-6 py-32 sm:py-48">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
        <div className="ds-item glass-strong relative overflow-hidden rounded-3xl">
          <img
            src={profile}
            alt="Perfil ultradelgado del televisor Teviso"
            width={1600}
            height={1000}
            loading="lazy"
            className="ds-img h-[520px] w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8">
            <p className="text-xs uppercase tracking-[0.3em] text-[#4ade80]">Diseño</p>
            <h3 className="mt-3 font-serif text-4xl sm:text-5xl">3.9 mm de perfil</h3>
            <p className="mt-3 max-w-sm text-sm text-white/70">
              Fabricado en aluminio anodizado con biseles infinitos. Un objeto
              esculpido para desaparecer en la pared.
            </p>
          </div>
        </div>

        <div className="ds-item glass-strong relative flex flex-col justify-between overflow-hidden rounded-3xl p-8">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#a78bfa]">Sonido</p>
            <h3 className="mt-3 font-serif text-4xl sm:text-5xl">
              Dolby Atmos, <br />
              <span className="italic text-aurora">a tu alrededor</span>
            </h3>
            <p className="mt-4 max-w-md text-sm text-white/70">
              Sistema 4.2.2 canales con altavoces up-firing integrados. El
              sonido se proyecta desde el techo hasta tu asiento.
            </p>
          </div>

          <div className="mt-10 flex h-40 items-end justify-center gap-2">
            {Array.from({ length: 32 }).map((_, i) => (
              <span
                key={i}
                className="w-2 rounded-full bg-gradient-to-t from-[#4ade80] to-[#a78bfa] animate-pulse-glow"
                style={{
                  height: `${20 + Math.abs(Math.sin(i * 0.7)) * 100}%`,
                  animationDelay: `${i * 0.08}s`,
                }}
              />
            ))}
          </div>

          <div className="mt-8 grid grid-cols-3 gap-3 text-center">
            {[
              { k: "80W", v: "Potencia" },
              { k: "4.2.2", v: "Canales" },
              { k: "DTS:X", v: "Compatible" },
            ].map((s) => (
              <div key={s.k} className="glass rounded-2xl p-3">
                <div className="font-serif text-2xl text-aurora">{s.k}</div>
                <div className="text-[10px] uppercase tracking-widest text-white/60">
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
