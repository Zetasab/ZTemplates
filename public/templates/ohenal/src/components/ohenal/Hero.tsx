import { useEffect, useRef } from "react";
import { gsap, useGsapReady } from "@/hooks/use-gsap";
import hero from "@/assets/hero.jpg";

export function Hero() {
  useGsapReady();
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-eyebrow", { y: 14, opacity: 0, duration: 0.8, delay: 0.2 })
        .from(".hero-title .char", {
          yPercent: 110,
          opacity: 0,
          duration: 1.2,
          stagger: 0.04,
        }, "-=0.4")
        .from(".hero-meta > *", { y: 16, opacity: 0, duration: 0.7, stagger: 0.08 }, "-=0.6")
        .from(".hero-img", { scale: 1.08, opacity: 0, duration: 1.6, ease: "power2.out" }, 0)
        .from(".hero-scroll", { opacity: 0, y: 10, duration: 0.6 }, "-=0.2");

      // Parallax on hero image
      gsap.to(".hero-img", {
        yPercent: 12,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
      gsap.to(".hero-title", {
        yPercent: -25,
        opacity: 0.2,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  const title = "O'Henal";
  return (
    <section ref={root} className="relative h-screen w-full overflow-hidden grain">
      <div className="absolute inset-0">
        <img
          src={hero}
          alt="Frasco de la colonia O'Henal sobre roca volcánica entre niebla marina"
          className="hero-img h-full w-full object-cover"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/20 to-ink/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/60 via-transparent to-ink/40" />
      </div>

      <header className="relative z-20 flex items-center justify-between px-6 pt-8 md:px-12">
        <span className="text-eyebrow text-bone/80">O'Henal · MMXXVI</span>
        <nav className="hidden gap-10 text-eyebrow text-bone/70 md:flex">
          <a href="#manifiesto" className="hover:text-bone">Manifiesto</a>
          <a href="#notas" className="hover:text-bone">Notas</a>
          <a href="#origen" className="hover:text-bone">Origen</a>
          <a href="#ritual" className="hover:text-bone">Ritual</a>
        </nav>
        <span className="text-eyebrow text-bone/60">Eau de Parfum · 100 ml</span>
      </header>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <p className="hero-eyebrow text-eyebrow text-silver/80 mb-8">
          ·  Une Vague Contenue  ·
        </p>
        <h1 className="hero-title font-display text-[18vw] md:text-[15vw] leading-[0.85] tracking-tight text-bone">
          {title.split("").map((c, i) => (
            <span key={i} className="inline-block overflow-hidden align-bottom">
              <span className="char inline-block">{c === " " ? "\u00A0" : c}</span>
            </span>
          ))}
        </h1>
        <div className="hero-meta mt-10 flex flex-col items-center gap-3">
          <p className="font-display italic text-xl md:text-2xl text-bone/80 max-w-lg">
            La frescura del mar, esculpida en cristal.
          </p>
          <p className="text-eyebrow text-silver/60">Aquatic · Mineral · Musk</p>
        </div>
      </div>

      <div className="hero-scroll absolute bottom-8 left-1/2 z-20 -translate-x-1/2 text-center">
        <span className="text-eyebrow text-bone/60 block mb-3">Descender</span>
        <div className="mx-auto h-12 w-px bg-bone/40" />
      </div>
    </section>
  );
}
