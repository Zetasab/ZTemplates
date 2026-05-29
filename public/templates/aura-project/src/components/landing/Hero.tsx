import heroTexture from "@/assets/hero-texture.jpg";
import { useGsap, gsap } from "@/hooks/use-gsap";

export function Hero() {
  const ref = useGsap((_ctx, scope) => {
    gsap.from(scope.querySelectorAll("[data-hero-reveal]"), {
      y: 80,
      opacity: 0,
      duration: 1.2,
      ease: "expo.out",
      stagger: 0.12,
    });
    gsap.to(scope.querySelector("[data-hero-bg]"), {
      yPercent: 30,
      ease: "none",
      scrollTrigger: {
        trigger: scope,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
    gsap.to(scope.querySelector("[data-hero-content]"), {
      yPercent: -25,
      opacity: 0.2,
      ease: "none",
      scrollTrigger: {
        trigger: scope,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  });

  return (
    <section
      ref={ref}
      className="relative h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      <div data-hero-bg className="absolute inset-0 opacity-40">
        <img
          src={heroTexture}
          alt="Textura de metal cepillado"
          width={1920}
          height={1280}
          className="w-full h-full object-cover"
        />
      </div>

      <div data-hero-content className="relative z-10 text-center px-4">
        <h1
          data-hero-reveal
          className="font-display text-[14vw] md:text-[12vw] font-bold leading-[0.85] tracking-tighter uppercase mb-4"
        >
          Pura <br />
          <span
            className="text-transparent"
            style={{ WebkitTextStroke: "1px rgba(245, 245, 247, 0.4)" }}
          >
            Hidratación
          </span>
        </h1>
        <p
          data-hero-reveal
          className="text-xs md:text-sm uppercase tracking-[0.4em] font-light opacity-60"
        >
          Vasijas arquitectónicas para el humano moderno
        </p>
      </div>

      <div
        data-hero-reveal
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <div className="w-px h-16 bg-gradient-to-b from-platinum to-transparent opacity-30" />
        <span className="text-[10px] tracking-[0.2em] opacity-40 uppercase">
          Desliza para explorar
        </span>
      </div>
    </section>
  );
}
