import { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import heroCar from "@/assets/hero-car.jpg";
import modelGt from "@/assets/model-gt.jpg";
import modelSpyder from "@/assets/model-spyder.jpg";
import modelQuantum from "@/assets/model-quantum.jpg";
import detailHeadlight from "@/assets/detail-headlight.jpg";
import detailWheel from "@/assets/detail-wheel.jpg";
import detailInterior from "@/assets/detail-interior.jpg";
import detailSteering from "@/assets/detail-wheel-steering.jpg";
import detailRear from "@/assets/detail-rear.jpg";

const MODELS = [
  {
    code: "01",
    name: "AURUM GT",
    tagline: "Gran turismo. Sin compromiso.",
    desc: "Una berlina de altas prestaciones diseñada para devorar continentes. Motor V8 biturbo de 4.0L, cabina insonorizada y suspensión adaptativa para una conducción suave a cualquier velocidad.",
    img: modelGt,
    specs: { hp: 620, zero: "3.2s", top: "330", price: "289.000" },
  },
  {
    code: "02",
    name: "AURUM SPYDER",
    tagline: "Cielo abierto. Pura emoción.",
    desc: "Convertible artesanal de techo blando eléctrico. Bastidor de aluminio aligerado, sonido escape titanio y materiales nobles cosidos a mano por nuestros maestros artesanos en Módena.",
    img: modelSpyder,
    specs: { hp: 580, zero: "3.4s", top: "315", price: "324.000" },
  },
  {
    code: "03",
    name: "AURUM QUANTUM",
    tagline: "El futuro, electrificado.",
    desc: "Hyperdeportivo 100% eléctrico con tracción total inteligente. 1.020 CV instantáneos, 720 km de autonomía y carga ultrarrápida del 10 al 80% en 18 minutos. El lujo eléctrico definitivo.",
    img: modelQuantum,
    specs: { hp: 1020, zero: "2.1s", top: "350", price: "412.000" },
  },
];

const MARQUEE_WORDS = [
  "PERFORMANCE",
  "CRAFTSMANSHIP",
  "FUTURE",
  "POWER",
  "HERITAGE",
  "PRECISION",
  "EMOTION",
  "AURUM",
];

export function LuxuryCarLanding() {
  useSmoothScroll();

  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Manifesto />
      <Marquee />
      <Models />
      <Gallery />
      <Specs />
      <Craftsmanship />
      <Pricing />
      <Reserve />
      <Footer />
    </main>
  );
}

/* ---------------- NAV ---------------- */
function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 mix-blend-difference">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-6 md:px-10">
        <a href="#top" className="font-display text-2xl tracking-[0.25em] text-ivory">
          AURUM
        </a>
        <div className="hidden gap-10 text-[11px] uppercase tracking-[0.3em] text-ivory md:flex">
          <a href="#models" className="hover:text-gold transition-colors">Modelos</a>
          <a href="#craft" className="hover:text-gold transition-colors">Artesanía</a>
          <a href="#specs" className="hover:text-gold transition-colors">Specs</a>
          <a href="#reserve" className="hover:text-gold transition-colors">Reservar</a>
        </div>
        <a
          href="#reserve"
          className="hidden text-[11px] uppercase tracking-[0.3em] text-ivory hover:text-gold md:block"
        >
          Contacto →
        </a>
      </div>
    </nav>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;
    const ctx = gsap.context(() => {
      // Title reveal
      const lines = titleRef.current?.querySelectorAll<HTMLElement>(".line span");
      if (lines) {
        gsap.fromTo(
          lines,
          { yPercent: 110 },
          { yPercent: 0, duration: 1.4, ease: "expo.out", stagger: 0.12, delay: 0.2 },
        );
      }
      // Fade hero meta
      gsap.fromTo(
        ".hero-meta",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1.2, delay: 1, stagger: 0.15, ease: "power3.out" },
      );
      // Parallax image
      gsap.to(imgRef.current, {
        yPercent: 18,
        scale: 1.08,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="top"
      ref={heroRef}
      className="relative h-[100svh] w-full overflow-hidden bg-background"
    >
      <div className="absolute inset-0">
        <img
          ref={imgRef}
          src={heroCar}
          alt="AURUM coche de lujo - vista frontal"
          className="h-full w-full object-cover"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/30" />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-end px-6 pb-16 md:px-10 md:pb-24">
        <div className="hero-meta mb-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.4em] text-gold opacity-0">
          <span className="h-px w-12 bg-gold" />
          <span>Colección 2026 — Edición Limitada</span>
        </div>
        <h1
          ref={titleRef}
          className="font-display text-[clamp(3.5rem,12vw,11rem)] leading-[0.95] tracking-tighter text-ivory"
        >
          <span className="line block overflow-hidden">
            <span className="block">El arte de</span>
          </span>
          <span className="line block overflow-hidden italic">
            <span className="block gold-gradient">conducir el</span>
          </span>
          <span className="line block overflow-hidden">
            <span className="block">futuro.</span>
          </span>
        </h1>
        <div className="hero-meta mt-10 flex flex-col items-start justify-between gap-6 opacity-0 md:flex-row md:items-end">
          <p className="max-w-md text-sm text-muted-foreground md:text-base">
            Tres modelos. Una visión. Hechos a mano para quienes entienden
            que el verdadero lujo no se compra: se merece.
          </p>
          <a
            href="#models"
            className="group inline-flex items-center gap-3 border border-gold/40 bg-background/40 px-6 py-3 text-[11px] uppercase tracking-[0.3em] text-ivory backdrop-blur-md transition-all hover:border-gold hover:bg-gold hover:text-background"
          >
            Explorar la colección
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-ivory/60">
        Scroll
      </div>
    </section>
  );
}

/* ---------------- MANIFESTO ---------------- */
function Manifesto() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      const words = ref.current!.querySelectorAll<HTMLElement>(".manifesto-word");
      gsap.fromTo(
        words,
        { opacity: 0.15 },
        {
          opacity: 1,
          stagger: 0.04,
          ease: "none",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 70%",
            end: "bottom 60%",
            scrub: true,
          },
        },
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  const text =
    "Cada AURUM es la culminación de cuatro mil horas de trabajo manual. Cada costura, cada curva, cada milímetro de fibra de carbono está pensado para quien no se conforma. No fabricamos coches. Esculpimos objetos de deseo.";

  return (
    <section ref={ref} className="relative py-32 md:py-48">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="mb-12 flex items-center gap-3 text-[11px] uppercase tracking-[0.4em] text-gold">
          <span className="h-px w-12 bg-gold" />
          <span>Manifiesto</span>
        </div>
        <p className="font-display max-w-5xl text-balance text-[clamp(1.75rem,4.5vw,4rem)] leading-[1.15] text-ivory">
          {text.split(" ").map((w, i) => (
            <span key={i} className="manifesto-word inline-block mr-[0.3em]">
              {w}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}

/* ---------------- MARQUEE ---------------- */
function Marquee() {
  const items = [...MARQUEE_WORDS, ...MARQUEE_WORDS];
  return (
    <section className="relative overflow-hidden border-y border-border/40 bg-surface py-10">
      <div className="flex w-max animate-marquee items-center gap-16 whitespace-nowrap">
        {items.map((w, i) => (
          <div key={i} className="flex items-center gap-16">
            <span className="font-display text-5xl italic text-ivory/80 md:text-7xl">{w}</span>
            <span className="text-gold text-3xl">◆</span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- MODELS (sticky pinned) ---------------- */
function Models() {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!wrapRef.current) return;
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray<HTMLElement>(".model-panel");
      panels.forEach((panel) => {
        const img = panel.querySelector(".model-img");
        const content = panel.querySelectorAll<HTMLElement>(".model-anim");
        gsap.fromTo(
          img,
          { scale: 1.15, opacity: 0.4 },
          {
            scale: 1,
            opacity: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: panel,
              start: "top 70%",
              end: "top 20%",
              scrub: true,
            },
          },
        );
        gsap.fromTo(
          content,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: panel,
              start: "top 65%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });
    }, wrapRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="models" ref={wrapRef} className="relative py-24 md:py-32">
      <div className="mx-auto mb-20 max-w-[1400px] px-6 md:px-10">
        <div className="mb-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.4em] text-gold">
          <span className="h-px w-12 bg-gold" />
          <span>La Colección</span>
        </div>
        <h2 className="font-display text-balance text-[clamp(2.5rem,7vw,6rem)] leading-[0.95] tracking-tighter text-ivory">
          Tres maneras de
          <br />
          <span className="italic gold-gradient">redefinir el lujo.</span>
        </h2>
      </div>

      <div className="flex flex-col">
        {MODELS.map((m, i) => (
          <div
            key={m.code}
            className="model-panel relative grid min-h-screen items-center gap-12 border-t border-border/30 px-6 py-24 md:grid-cols-12 md:gap-16 md:px-10"
          >
            <div
              className={`relative md:col-span-7 ${
                i % 2 === 1 ? "md:order-2 md:col-start-6" : ""
              }`}
            >
              <div className="overflow-hidden">
                <img
                  src={m.img}
                  alt={`${m.name} - ${m.tagline}`}
                  loading="lazy"
                  width={1600}
                  height={1200}
                  className="model-img h-[55vh] w-full object-cover md:h-[80vh]"
                />
              </div>
              <div className="model-anim absolute -top-4 left-0 font-display text-[8rem] italic leading-none text-gold/30 md:text-[14rem]">
                {m.code}
              </div>
            </div>

            <div
              className={`relative flex flex-col gap-8 md:col-span-5 ${
                i % 2 === 1 ? "md:order-1 md:col-start-1 md:row-start-1" : ""
              }`}
            >
              <div className="model-anim text-[11px] uppercase tracking-[0.4em] text-gold">
                Modelo {m.code}
              </div>
              <h3 className="model-anim font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-tighter text-ivory">
                {m.name}
              </h3>
              <p className="model-anim font-display text-2xl italic text-gold-soft md:text-3xl">
                {m.tagline}
              </p>
              <p className="model-anim max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
                {m.desc}
              </p>
              <div className="model-anim mt-4 grid grid-cols-3 gap-6 border-t border-border/50 pt-8">
                <Stat label="Potencia" value={m.specs.hp} unit="CV" />
                <Stat label="0 → 100" value={m.specs.zero} />
                <Stat label="Vmax" value={m.specs.top} unit="km/h" />
              </div>
              <div className="model-anim mt-2 flex items-center justify-between border-t border-border/50 pt-6">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                    Desde
                  </div>
                  <div className="font-display text-3xl text-ivory">
                    € {m.specs.price}
                  </div>
                </div>
                <a
                  href="#reserve"
                  className="group inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-ivory hover:text-gold"
                >
                  Configurar
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Stat({ label, value, unit }: { label: string; value: string | number; unit?: string }) {
  return (
    <div>
      <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{label}</div>
      <div className="mt-2 font-display text-3xl text-ivory">
        {value}
        {unit && <span className="ml-1 text-sm text-muted-foreground">{unit}</span>}
      </div>
    </div>
  );
}

/* ---------------- GALLERY (parallax grid) ---------------- */
function Gallery() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(".parallax-item");
      items.forEach((el) => {
        const speed = parseFloat(el.dataset.speed || "0.3");
        gsap.to(el.querySelector("img"), {
          yPercent: -speed * 30,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="relative bg-surface py-32 md:py-48">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="mb-20 grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <div className="mb-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.4em] text-gold">
              <span className="h-px w-12 bg-gold" />
              <span>Detalles</span>
            </div>
            <h2 className="font-display text-balance text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-tighter text-ivory">
              El diablo está en
              <br />
              <span className="italic gold-gradient">cada milímetro.</span>
            </h2>
          </div>
          <p className="text-sm text-muted-foreground md:col-span-4 md:col-start-9 md:text-base">
            Faros de matriz LED tallados a mano, llantas forjadas con
            calipers de oro y cabinas que parecen relojería suiza.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-4 md:gap-6">
          <ParallaxImg src={detailHeadlight} alt="Faros LED de matriz" className="col-span-7 row-span-2 aspect-[3/4]" speed={0.4} />
          <ParallaxImg src={detailWheel} alt="Llanta forjada con caliper dorado" className="col-span-5 aspect-square" speed={0.6} />
          <ParallaxImg src={detailSteering} alt="Volante de cuero con paddles de carbono" className="col-span-5 aspect-[4/5]" speed={0.3} />
          <ParallaxImg src={detailRear} alt="Vista trasera al atardecer" className="col-span-12 aspect-[21/9]" speed={0.5} />
        </div>
      </div>
    </section>
  );
}

function ParallaxImg({
  src,
  alt,
  className,
  speed,
}: {
  src: string;
  alt: string;
  className: string;
  speed: number;
}) {
  return (
    <div
      className={`parallax-item relative overflow-hidden ${className}`}
      data-speed={speed}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="absolute inset-0 h-[120%] w-full object-cover"
      />
    </div>
  );
}

/* ---------------- SPECS (with counters) ---------------- */
function Specs() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      const nums = ref.current!.querySelectorAll<HTMLElement>(".count-up");
      nums.forEach((el) => {
        const target = parseFloat(el.dataset.target || "0");
        const decimals = parseInt(el.dataset.decimals || "0");
        const obj = { v: 0 };
        gsap.to(obj, {
          v: target,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          onUpdate: () => {
            el.textContent = obj.v.toLocaleString("es-ES", {
              minimumFractionDigits: decimals,
              maximumFractionDigits: decimals,
            });
          },
        });
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="specs" ref={ref} className="relative py-32 md:py-48">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="mb-20">
          <div className="mb-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.4em] text-gold">
            <span className="h-px w-12 bg-gold" />
            <span>Datos técnicos</span>
          </div>
          <h2 className="font-display text-balance text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-tighter text-ivory">
            Números que
            <br />
            <span className="italic gold-gradient">no mienten.</span>
          </h2>
        </div>

        <div className="grid gap-12 md:grid-cols-4 md:gap-6">
          <BigStat target={1020} suffix="CV" label="Potencia máxima" />
          <BigStat target={2.1} suffix="s" label="0 → 100 km/h" decimals={1} />
          <BigStat target={350} suffix="km/h" label="Velocidad punta" />
          <BigStat target={720} suffix="km" label="Autonomía WLTP" />
        </div>

        <div className="hairline mt-24" />

        {/* Comparison table */}
        <div className="mt-24 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-border text-left">
                <th className="py-6 text-[11px] uppercase tracking-[0.3em] text-muted-foreground font-normal"></th>
                {MODELS.map((m) => (
                  <th key={m.code} className="py-6 font-display text-2xl text-ivory">
                    {m.name.replace("AURUM ", "")}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-ivory">
              <Row label="Motor" values={["V8 Biturbo", "V8 Atmosférico", "Eléctrico"]} />
              <Row label="Potencia" values={["620 CV", "580 CV", "1.020 CV"]} />
              <Row label="0 → 100 km/h" values={["3.2 s", "3.4 s", "2.1 s"]} />
              <Row label="Vmax" values={["330 km/h", "315 km/h", "350 km/h"]} />
              <Row label="Plazas" values={["2+2", "2", "2"]} />
              <Row label="Desde" values={["€ 289.000", "€ 324.000", "€ 412.000"]} />
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function Row({ label, values }: { label: string; values: string[] }) {
  return (
    <tr className="border-b border-border/40">
      <td className="py-5 text-[11px] uppercase tracking-[0.3em] text-muted-foreground">{label}</td>
      {values.map((v, i) => (
        <td key={i} className="py-5 font-sans text-base">{v}</td>
      ))}
    </tr>
  );
}

function BigStat({
  target,
  suffix,
  label,
  decimals = 0,
}: {
  target: number;
  suffix: string;
  label: string;
  decimals?: number;
}) {
  return (
    <div className="border-t border-border pt-6">
      <div className="font-display text-[clamp(3rem,6vw,5rem)] leading-none text-ivory">
        <span className="count-up" data-target={target} data-decimals={decimals}>
          0
        </span>
        <span className="ml-2 text-2xl text-gold">{suffix}</span>
      </div>
      <div className="mt-4 text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
        {label}
      </div>
    </div>
  );
}

/* ---------------- CRAFTSMANSHIP ---------------- */
function Craftsmanship() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.to(".craft-img img", {
        yPercent: -15,
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
      gsap.fromTo(
        ".craft-text > *",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 60%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="craft" ref={ref} className="relative overflow-hidden bg-background py-32 md:py-48">
      <div className="mx-auto grid max-w-[1400px] gap-16 px-6 md:grid-cols-12 md:px-10">
        <div className="craft-img relative overflow-hidden md:col-span-7 md:h-[90vh]">
          <img
            src={detailInterior}
            alt="Interior artesanal de AURUM con cuero italiano y fibra de carbono"
            loading="lazy"
            className="absolute inset-0 h-[120%] w-full object-cover"
          />
        </div>
        <div className="craft-text flex flex-col justify-center gap-8 md:col-span-5">
          <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.4em] text-gold">
            <span className="h-px w-12 bg-gold" />
            <span>Artesanía</span>
          </div>
          <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.95] tracking-tighter text-ivory">
            Cosido. Tallado.
            <br />
            <span className="italic gold-gradient">Perfecto.</span>
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Cuero italiano de Piamonte curtido al vegetal. Maderas nobles
            seleccionadas pieza a pieza. Fibra de carbono tejida en seco a
            doce capas. Cada cabina nace en nuestro atelier de Módena bajo
            las manos de un único artesano que firma su obra.
          </p>
          <ul className="flex flex-col gap-4 border-t border-border/50 pt-8">
            {[
              ["240 h", "de tapicería a mano"],
              ["12 capas", "de fibra de carbono"],
              ["1 artesano", "por cabina, firmada"],
              ["48 colores", "personalizables"],
            ].map(([k, v]) => (
              <li key={k} className="flex items-baseline justify-between gap-6 border-b border-border/30 pb-4">
                <span className="font-display text-2xl text-gold">{k}</span>
                <span className="text-right text-sm text-muted-foreground">{v}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------------- PRICING JUSTIFICATION ---------------- */
function Pricing() {
  return (
    <section className="relative bg-surface py-32 md:py-48">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 flex items-center justify-center gap-3 text-[11px] uppercase tracking-[0.4em] text-gold">
            <span className="h-px w-12 bg-gold" />
            <span>Por qué AURUM</span>
            <span className="h-px w-12 bg-gold" />
          </div>
          <h2 className="font-display text-balance text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-tighter text-ivory">
            No es caro.
            <br />
            <span className="italic gold-gradient">Es lo que vale.</span>
          </h2>
          <p className="mx-auto mt-10 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Un AURUM no compite con coches. Compite con obras de arte,
            con relojes de alta complicación, con yates de autor. Su precio
            refleja cuatro mil horas de manos expertas, materiales de
            origen único y una serie estrictamente limitada a 199 unidades por modelo y año.
          </p>
        </div>

        <div className="mt-24 grid gap-px bg-border/50 md:grid-cols-3">
          {[
            {
              n: "I",
              t: "Series limitadas",
              d: "Solo 199 unidades de cada modelo al año. Cada chasis numerado y registrado.",
            },
            {
              n: "II",
              t: "Garantía vitalicia",
              d: "Diez años de mantenimiento incluido y atención personalizada de por vida.",
            },
            {
              n: "III",
              t: "Valor residual",
              d: "Un activo. Nuestros modelos retienen más del 92% de su valor a los cinco años.",
            },
          ].map((p) => (
            <div key={p.n} className="bg-background p-10 md:p-14">
              <div className="font-display text-5xl italic text-gold">{p.n}</div>
              <h3 className="mt-8 font-display text-3xl text-ivory">{p.t}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- RESERVE / CTA ---------------- */
function Reserve() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".reserve-anim",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="reserve"
      ref={ref}
      className="relative overflow-hidden bg-background py-32 md:py-48"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(circle at 50% 30%, oklch(0.78 0.13 85 / 0.18), transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-3xl px-6 text-center md:px-10">
        <div className="reserve-anim mb-8 flex items-center justify-center gap-3 text-[11px] uppercase tracking-[0.4em] text-gold">
          <span className="h-px w-12 bg-gold" />
          <span>Reserva</span>
          <span className="h-px w-12 bg-gold" />
        </div>
        <h2 className="reserve-anim font-display text-balance text-[clamp(2.5rem,7vw,6rem)] leading-[0.95] tracking-tighter text-ivory">
          Reserva tu unidad.
        </h2>
        <p className="reserve-anim mx-auto mt-8 max-w-xl text-base text-muted-foreground md:text-lg">
          Solicita una entrevista privada en nuestro atelier de Módena.
          Un especialista de marca se pondrá en contacto en menos de 48 horas.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Gracias. Te contactaremos en menos de 48 horas.");
          }}
          className="reserve-anim mx-auto mt-14 flex max-w-xl flex-col gap-4"
        >
          <input
            type="text"
            required
            placeholder="Nombre completo"
            className="border-b border-border bg-transparent px-2 py-4 text-base text-ivory placeholder:text-muted-foreground/60 focus:border-gold focus:outline-none"
          />
          <input
            type="email"
            required
            placeholder="Email"
            className="border-b border-border bg-transparent px-2 py-4 text-base text-ivory placeholder:text-muted-foreground/60 focus:border-gold focus:outline-none"
          />
          <select
            className="border-b border-border bg-transparent px-2 py-4 text-base text-ivory focus:border-gold focus:outline-none"
            defaultValue=""
          >
            <option value="" disabled className="bg-background">
              Modelo de interés
            </option>
            <option className="bg-background">AURUM GT</option>
            <option className="bg-background">AURUM Spyder</option>
            <option className="bg-background">AURUM Quantum</option>
          </select>
          <button
            type="submit"
            className="mt-8 inline-flex items-center justify-center gap-3 border border-gold bg-gold px-8 py-4 text-[11px] uppercase tracking-[0.3em] text-background transition-all hover:bg-transparent hover:text-gold"
          >
            Solicitar entrevista privada
            <span>→</span>
          </button>
        </form>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="relative border-t border-border bg-background py-16">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-6 md:grid-cols-4 md:px-10">
        <div className="md:col-span-2">
          <div className="font-display text-3xl tracking-[0.25em] text-ivory">AURUM</div>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Atelier de automóviles de autor. Módena, Italia. Desde 2024.
          </p>
        </div>
        <div>
          <div className="text-[10px] uppercase tracking-[0.3em] text-gold">Marca</div>
          <ul className="mt-4 flex flex-col gap-2 text-sm text-muted-foreground">
            <li><a href="#models" className="hover:text-ivory">Modelos</a></li>
            <li><a href="#craft" className="hover:text-ivory">Artesanía</a></li>
            <li><a href="#specs" className="hover:text-ivory">Specs</a></li>
          </ul>
        </div>
        <div>
          <div className="text-[10px] uppercase tracking-[0.3em] text-gold">Contacto</div>
          <ul className="mt-4 flex flex-col gap-2 text-sm text-muted-foreground">
            <li>atelier@aurum.auto</li>
            <li>+39 059 000 0000</li>
            <li>Via dell'Arte 12, Módena</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-16 flex max-w-[1400px] items-center justify-between border-t border-border/40 px-6 pt-6 text-[10px] uppercase tracking-[0.3em] text-muted-foreground md:px-10">
        <span>© 2026 AURUM Atelier</span>
        <span>Hecho a mano en Italia</span>
      </div>
    </footer>
  );
}
