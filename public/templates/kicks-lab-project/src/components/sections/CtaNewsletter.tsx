import { useRef } from "react";
import { gsap, registerGsap, useIsoLayoutEffect } from "@/hooks/useGsap";

export function CtaNewsletter() {
  const root = useRef<HTMLDivElement>(null);

  useIsoLayoutEffect(() => {
    registerGsap();
    const ctx = gsap.context(() => {
      gsap.from(".cta-big", {
        scale: 0.9,
        opacity: 0,
        duration: 1,
        ease: "expo.out",
        scrollTrigger: { trigger: root.current, start: "top 70%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="cta" ref={root} className="bg-volt border-b-2 border-ink py-24 md:py-40 px-4 md:px-8 relative overflow-hidden">
      <div className="max-w-5xl mx-auto text-center">
        <div className="font-display text-xs mb-8 flex items-center justify-center gap-3">
          <span className="bg-ink text-paper px-2 py-1">08</span>
          <span>SIGUE EL DROP</span>
        </div>
        <h2 className="cta-big text-7xl md:text-[12vw] leading-[0.85]">
          NO TE <br />
          QUEDES <br />
          <span className="text-pop italic">FUERA.</span>
        </h2>
        <p className="font-body text-lg md:text-xl mt-8 max-w-xl mx-auto">
          Stock limitado. 500 pares por modelo. Apúntate y entérate antes que nadie cuándo cae el próximo drop.
        </p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-10 flex flex-col sm:flex-row gap-3 max-w-xl mx-auto"
        >
          <input
            type="email"
            placeholder="tu@email.com"
            className="flex-1 border-2 border-ink bg-paper px-5 py-4 font-display text-base placeholder:text-ink/40 outline-none focus:bg-volt"
            required
          />
          <button
            type="submit"
            className="border-2 border-ink bg-ink text-paper px-8 py-4 font-display shadow-brutal hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
          >
            APÚNTAME →
          </button>
        </form>
        <p className="font-body text-xs mt-4 text-ink/60">
          Sin spam. Solo drops y lookbooks.
        </p>
      </div>
    </section>
  );
}
