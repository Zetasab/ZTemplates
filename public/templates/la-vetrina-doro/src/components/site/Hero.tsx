import { useRef } from "react";
import heroPizza from "@/assets/hero-pizza.jpg";
import { useGsapScroll } from "@/hooks/useGsapScroll";

export function Hero() {
  const scope = useRef<HTMLElement>(null);

  useGsapScroll(({ gsap }) => {
    gsap.from(".hero-eyebrow", { y: 20, opacity: 0, duration: 1, ease: "power3.out" });
    gsap.from(".hero-word", {
      y: 80,
      opacity: 0,
      duration: 1.2,
      stagger: 0.15,
      ease: "power4.out",
      delay: 0.15,
    });
    gsap.from(".hero-copy", { y: 30, opacity: 0, duration: 1, ease: "power3.out", delay: 0.6 });
    gsap.from(".hero-cta", { y: 20, opacity: 0, duration: 1, stagger: 0.1, ease: "power3.out", delay: 0.9 });
    gsap.from(".hero-scroll", { opacity: 0, duration: 1, delay: 1.4 });

    gsap.to(".hero-image", {
      yPercent: 20,
      ease: "none",
      scrollTrigger: {
        trigger: scope.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
    gsap.to(".hero-content", {
      yPercent: -30,
      opacity: 0.2,
      ease: "none",
      scrollTrigger: {
        trigger: scope.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, scope);

  return (
    <section
      ref={scope}
      id="top"
      className="relative h-screen w-full overflow-hidden flex items-center justify-center"
    >
      <div className="hero-image absolute inset-0 z-0 will-change-transform">
        <img
          src={heroPizza}
          alt="Pizza artesanal a la leña con búfala y trufa"
          width={1920}
          height={1080}
          className="w-full h-full object-cover opacity-70"
        />
      </div>
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-midnight/50 via-midnight/40 to-midnight" />

      <div className="hero-content relative z-20 text-center px-6 max-w-6xl">
        <span className="hero-eyebrow inline-block text-gold font-medium tracking-[0.4em] uppercase text-[11px] mb-8">
          Est. 1984 · Roma
        </span>
        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl mb-10 leading-[0.95] tracking-tight text-bone">
          <span className="hero-word inline-block italic">L'Arte</span>{" "}
          <span className="hero-word inline-block italic">della</span>{" "}
          <span className="hero-word inline-block text-gold">Perfezione</span>
        </h1>
        <p className="hero-copy text-lg md:text-xl text-bone/75 max-w-2xl mx-auto font-light leading-relaxed">
          La cumbre de la tradición culinaria italiana. Donde la trufa rara se
          encuentra con la masa artesanal en una sinfonía de alta cocina.
        </p>
        <div className="mt-14 flex flex-col md:flex-row gap-4 justify-center">
          <a
            href="#menu"
            className="hero-cta px-10 py-4 bg-gold text-midnight font-semibold uppercase tracking-[0.25em] text-xs hover:bg-bone transition-colors"
          >
            Explora la Carta
          </a>
          <a
            href="#reserva"
            className="hero-cta px-10 py-4 border border-bone/25 hover:border-gold hover:text-gold text-bone font-semibold uppercase tracking-[0.25em] text-xs transition-colors"
          >
            Reservar Mesa
          </a>
        </div>
      </div>

      <div className="hero-scroll absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3">
        <span className="text-[10px] uppercase tracking-[0.35em] text-gold/80">Descubrir</span>
        <div className="w-px h-14 bg-gradient-to-b from-gold/80 to-transparent" />
      </div>
    </section>
  );
}
