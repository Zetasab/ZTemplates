import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { useGsapReady } from "@/lib/useGsap";

import heroChair from "@/assets/hero-chair.jpg";
import spectrum from "@/assets/spectrum.jpg";
import insitu from "@/assets/insitu.jpg";
import look1 from "@/assets/lookbook-1.jpg";
import look2 from "@/assets/lookbook-2.jpg";
import look3 from "@/assets/lookbook-3.jpg";
import macro1 from "@/assets/macro-1.jpg";
import macro2 from "@/assets/macro-2.jpg";
import macro3 from "@/assets/macro-3.jpg";
import macro4 from "@/assets/macro-4.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FORMA — Sillas de cocina esculturales" },
      {
        name: "description",
        content:
          "FORMA diseña sillas de cocina esculturales en múltiples colores y tamaños. Comodidad para comer, presencia para decorar. Lujo asequible, hecho para durar.",
      },
      { property: "og:title", content: "FORMA — Sillas de cocina esculturales" },
      {
        property: "og:description",
        content:
          "Sillas de cocina en múltiples colores y tamaños. Comodidad para comer, presencia para decorar.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground overflow-x-clip">
      <Nav />
      <Hero />
      <Manifesto />
      <Chromatics />
      <Sizes />
      <EatObserve />
      <Materials />
      <Lookbook />
      <Specs />
      <Testimonials />
      <Value />
      <FinalCTA />
      <Footer />
    </div>
  );
}

/* ---------------- Nav ---------------- */
function Nav() {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 md:px-10 py-4 bg-background/70 backdrop-blur-md border-b border-border">
      <a href="#top" className="font-mono text-[11px] tracking-[0.25em] uppercase">
        Forma / Estudio
      </a>
      <div className="hidden md:flex gap-10 text-[11px] uppercase tracking-[0.2em]">
        <a href="#coleccion" className="hover:text-primary transition-colors">Colección</a>
        <a href="#filosofia" className="hover:text-primary transition-colors">Filosofía</a>
        <a href="#espacios" className="hover:text-primary transition-colors">Espacios</a>
        <a href="#contacto" className="hover:text-primary transition-colors">Contacto</a>
      </div>
      <a
        href="#contacto"
        className="px-4 py-1.5 border border-foreground rounded-full text-[10px] uppercase tracking-[0.2em] hover:bg-foreground hover:text-background transition-all"
      >
        Consultar
      </a>
    </nav>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const wordRef = useRef<HTMLHeadingElement>(null);
  const chairRef = useRef<HTMLDivElement>(null);
  const captionRef = useRef<HTMLDivElement>(null);

  useGsapReady((g) => {
    if (!sectionRef.current) return;
    const ctx = g.context(() => {
      // entrance
      g.from(wordRef.current, {
        clipPath: "inset(100% 0 0 0)",
        duration: 1.4,
        ease: "expo.out",
      });
      g.from(chairRef.current, {
        y: 60,
        opacity: 0,
        duration: 1.6,
        ease: "expo.out",
        delay: 0.2,
      });
      g.from(".hero-reveal", {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "expo.out",
        stagger: 0.15,
        delay: 0.6,
      });

      // parallax on scroll
      g.to(chairRef.current, {
        yPercent: 25,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
      g.to(wordRef.current, {
        yPercent: -20,
        scale: 1.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
      g.to(captionRef.current, {
        yPercent: -80,
        opacity: 0,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-24 pb-16"
    >
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h1
          ref={wordRef}
          className="text-[26vw] leading-none font-black tracking-tighter text-foreground/[0.05] select-none"
        >
          FORMA
        </h1>
      </div>

      <div ref={chairRef} className="relative z-10 w-full max-w-md md:max-w-lg">
        <img
          src={heroChair}
          alt="Silla Mono en terracota mate"
          width={1024}
          height={1280}
          className="w-full h-auto rounded-2xl shadow-2xl ring-1 ring-black/5 object-cover"
        />
      </div>

      <div
        ref={captionRef}
        className="absolute bottom-10 left-6 right-6 md:left-10 md:right-10 flex flex-col md:flex-row justify-between items-end gap-6"
      >
        <div className="hero-reveal max-w-xs">
          <p className="text-lg md:text-xl tracking-tight leading-tight text-balance font-medium">
            Presencia escultórica que se sienta contigo. Diseñada para el ritual
            de la mesa.
          </p>
        </div>
        <div className="hero-reveal font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
          Modelo 01 // 8 acabados disponibles
        </div>
      </div>
    </section>
  );
}

/* ---------------- Manifesto ---------------- */
function Manifesto() {
  const ref = useRef<HTMLDivElement>(null);
  useGsapReady((g) => {
    if (!ref.current) return;
    const ctx = g.context(() => {
      g.from(".manifesto-line", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "expo.out",
        stagger: 0.12,
        scrollTrigger: { trigger: ref.current, start: "top 75%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);
  return (
    <section id="filosofia" ref={ref} className="py-32 md:py-40 px-6 md:px-10 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <span className="manifesto-line inline-block font-mono text-[10px] uppercase tracking-[0.3em] text-primary mb-10">
          — Manifiesto
        </span>
        <h2 className="text-3xl md:text-6xl leading-[1.05] tracking-tight font-medium text-balance">
          <span className="manifesto-line block">Creemos que una silla no es un mueble.</span>
          <span className="manifesto-line block">Es la pausa entre un plato y una conversación.</span>
          <span className="manifesto-line block text-muted-foreground">
            Un objeto que decora cuando nadie mira, y sostiene cuando todos se sientan.
          </span>
        </h2>
      </div>
    </section>
  );
}

/* ---------------- Chromatics ---------------- */
const COLORS = [
  { name: "Sienna", hex: "#B35C44" },
  { name: "Cobalto", hex: "#1E3A8A" },
  { name: "Bosque", hex: "#166534" },
  { name: "Onyx", hex: "#111111" },
  { name: "Hueso", hex: "#EDE7DA" },
  { name: "Mostaza", hex: "#D4A017" },
  { name: "Arcilla", hex: "#8B5A3C" },
  { name: "Niebla", hex: "#8A8F87" },
];

function Chromatics() {
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useGsapReady((g) => {
    if (!ref.current) return;
    const ctx = g.context(() => {
      g.from(".chroma-fade", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "expo.out",
        stagger: 0.1,
        scrollTrigger: { trigger: ref.current, start: "top 70%" },
      });
      g.to(".chroma-image", {
        yPercent: -12,
        scrollTrigger: {
          trigger: ref.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, ref);
    return () => ctx.revert();
  }, []);
  return (
    <section id="coleccion" ref={ref} className="py-32 md:py-40 px-6 md:px-10 border-t border-border">
      <div className="grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
        <div className="space-y-8">
          <span className="chroma-fade block font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
            01 / Cromática
          </span>
          <h2 className="chroma-fade text-4xl md:text-6xl font-semibold tracking-tight text-balance leading-[0.95]">
            Ocho tonos con intención.
          </h2>
          <p className="chroma-fade max-w-md text-muted-foreground text-pretty text-lg">
            De la calidez terrosa del Sienna al silencio del Onyx, una paleta
            escogida para anclar cualquier habitación sin gritar.
          </p>
          <div className="chroma-fade flex flex-wrap gap-4 pt-4">
            {COLORS.map((c, i) => (
              <button
                key={c.name}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                aria-label={c.name}
                className={`size-10 rounded-full ring-offset-2 ring-offset-background transition-all ${
                  active === i ? "ring-2 ring-foreground" : "ring-1 ring-foreground/10"
                }`}
                style={{ backgroundColor: c.hex }}
              />
            ))}
          </div>
          <div className="chroma-fade font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
            → {COLORS[active].name} — {COLORS[active].hex}
          </div>
        </div>
        <div className="chroma-fade relative overflow-hidden rounded-xl">
          <img
            src={spectrum}
            alt="Espectro de sillas FORMA en distintos colores"
            width={1600}
            height={1024}
            loading="lazy"
            className="chroma-image w-full h-full object-cover scale-110"
          />
        </div>
      </div>
    </section>
  );
}

/* ---------------- Sizes ---------------- */
const SIZES = [
  { name: "Petite", width: "420mm", height: "780mm", note: "Ligera. Perfecta para rincones." },
  { name: "Standard", width: "485mm", height: "830mm", note: "Nuestro modelo emblemático." },
  { name: "Grand", width: "545mm", height: "880mm", note: "Presencia de comedor formal." },
];

function Sizes() {
  const ref = useRef<HTMLDivElement>(null);
  useGsapReady((g) => {
    if (!ref.current) return;
    const ctx = g.context(() => {
      g.from(".size-card", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "expo.out",
        stagger: 0.15,
        scrollTrigger: { trigger: ref.current, start: "top 75%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);
  return (
    <section ref={ref} className="py-32 md:py-40 px-6 md:px-10 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
          <div>
            <span className="block font-mono text-[10px] uppercase tracking-[0.3em] text-primary mb-6">
              02 / Escala
            </span>
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[0.95]">
              Tres tamaños. <br />
              Un mismo lenguaje.
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground text-pretty">
            Cada silla se fabrica en tres escalas para acomodarse a mesas de
            desayuno, comedores diarios y estancias más solemnes.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {SIZES.map((s, i) => (
            <div
              key={s.name}
              className="size-card border-t border-foreground pt-8 flex flex-col gap-6"
            >
              <div className="flex items-end justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  {s.width} × {s.height}
                </span>
              </div>
              <div className="flex items-end justify-center h-56">
                <div
                  className="w-3 bg-foreground rounded-t-sm"
                  style={{ height: `${40 + i * 30}%` }}
                />
                <div
                  className="w-24 bg-primary rounded-t-2xl -ml-1"
                  style={{ height: `${55 + i * 20}%` }}
                />
                <div
                  className="w-3 bg-foreground rounded-t-sm -ml-1"
                  style={{ height: `${40 + i * 30}%` }}
                />
              </div>
              <div>
                <h3 className="text-2xl font-semibold tracking-tight">{s.name}</h3>
                <p className="text-sm text-muted-foreground mt-2">{s.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Eat + Observe ---------------- */
function EatObserve() {
  const ref = useRef<HTMLDivElement>(null);
  useGsapReady((g) => {
    if (!ref.current) return;
    const ctx = g.context(() => {
      g.to(".eat-image", {
        yPercent: -18,
        scrollTrigger: {
          trigger: ref.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
      g.from(".eat-title span", {
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: "expo.out",
        stagger: 0.15,
        scrollTrigger: { trigger: ref.current, start: "top 70%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);
  return (
    <section ref={ref} className="bg-foreground text-background py-32 md:py-48 px-6 md:px-10 overflow-hidden">
      <div className="grid md:grid-cols-3 gap-10 md:gap-16 max-w-7xl mx-auto">
        <div className="md:col-span-2 space-y-10 self-center">
          <span className="block font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
            03 / Dualidad
          </span>
          <h2 className="eat-title text-6xl md:text-[9rem] font-black tracking-tighter leading-[0.85]">
            <span className="block overflow-hidden"><span className="block">COMER</span></span>
            <span className="block overflow-hidden"><span className="block text-primary italic font-serif">&</span></span>
            <span className="block overflow-hidden"><span className="block">OBSERVAR</span></span>
          </h2>
          <p className="max-w-md text-sm md:text-base opacity-70 font-light leading-relaxed">
            Una silla que trabaja doble. Cómoda para una sobremesa de tres
            horas, escultórica para ser el punto focal de un rincón vacío.
          </p>
        </div>
        <div className="relative overflow-hidden rounded-sm min-h-[500px]">
          <img
            src={insitu}
            alt="Silla FORMA en un rincón mínimo con luz cinemática"
            width={1024}
            height={1536}
            loading="lazy"
            className="eat-image absolute inset-0 w-full h-[130%] object-cover"
          />
        </div>
      </div>
    </section>
  );
}

/* ---------------- Materials ---------------- */
const MACROS = [
  { src: macro1, alt: "Detalle de unión terracota", label: "Uniones fresadas" },
  { src: macro2, alt: "Textura mate hueso", label: "Acabado mate" },
  { src: macro3, alt: "Curva del respaldo cobalto", label: "Curva ergonómica" },
  { src: macro4, alt: "Perfil lateral verde bosque", label: "Silueta lateral" },
];

function Materials() {
  const ref = useRef<HTMLDivElement>(null);
  useGsapReady((g) => {
    if (!ref.current) return;
    const ctx = g.context(() => {
      g.from(".macro-item", {
        y: 60,
        opacity: 0,
        duration: 0.9,
        ease: "expo.out",
        stagger: 0.1,
        scrollTrigger: { trigger: ref.current, start: "top 75%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);
  return (
    <section ref={ref} className="py-32 md:py-40 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
          <div>
            <span className="block font-mono text-[10px] uppercase tracking-[0.3em] text-primary mb-6">
              04 / Materia
            </span>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight max-w-xl text-balance">
              Cada milímetro, obsesionado.
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground text-pretty">
            Estructura de acero microtratado, carcasa en polipropileno reforzado
            teñido en masa. Sin recubrimientos que se saltan con el uso.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {MACROS.map((m) => (
            <figure key={m.label} className="macro-item space-y-3">
              <div className="aspect-square overflow-hidden rounded-lg bg-muted">
                <img
                  src={m.src}
                  alt={m.alt}
                  width={768}
                  height={768}
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <figcaption className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                {m.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Lookbook ---------------- */
function Lookbook() {
  const ref = useRef<HTMLDivElement>(null);
  useGsapReady((g) => {
    if (!ref.current) return;
    const ctx = g.context(() => {
      const items = g.utils.toArray<HTMLElement>(".lookbook-parallax");
      items.forEach((el, i) => {
        g.to(el, {
          yPercent: i % 2 === 0 ? -15 : -25,
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });
      g.from(".lookbook-fade", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "expo.out",
        stagger: 0.15,
        scrollTrigger: { trigger: ref.current, start: "top 70%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);
  return (
    <section
      id="espacios"
      ref={ref}
      className="py-32 md:py-40 px-6 md:px-10 border-t border-border"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <span className="block font-mono text-[10px] uppercase tracking-[0.3em] text-primary mb-6">
              05 / Espacios
            </span>
            <h2 className="lookbook-fade text-4xl md:text-6xl font-semibold tracking-tight leading-[0.95]">
              Lookbook FORMA.
            </h2>
          </div>
          <p className="lookbook-fade max-w-sm text-muted-foreground text-pretty">
            Curaduría de interiores donde nuestras sillas viven. Cocina, comedor,
            galería — el mismo objeto, tres papeles.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-4 md:gap-8">
          <figure className="col-span-12 md:col-span-8 overflow-hidden rounded-xl h-[420px] md:h-[560px] relative">
            <img
              src={look1}
              alt="Cocina moderna con sillas FORMA"
              width={1600}
              height={1024}
              loading="lazy"
              className="lookbook-parallax absolute inset-0 w-full h-[130%] object-cover"
            />
          </figure>
          <figure className="col-span-12 md:col-span-4 overflow-hidden rounded-xl h-[420px] md:h-[560px] relative">
            <img
              src={look2}
              alt="Silla FORMA junto a lienzo abstracto"
              width={1024}
              height={1280}
              loading="lazy"
              className="lookbook-parallax absolute inset-0 w-full h-[130%] object-cover"
            />
          </figure>
          <figcaption className="col-span-12 md:col-span-8 flex justify-between items-start font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            <span>Residencia loft — Berlin</span>
            <span>2025</span>
          </figcaption>
          <figcaption className="col-span-12 md:col-span-4 flex justify-between items-start font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            <span>Galería privada — Milano</span>
            <span>2024</span>
          </figcaption>

          <figure className="col-span-12 overflow-hidden rounded-xl h-[440px] md:h-[600px] relative mt-8">
            <img
              src={look3}
              alt="Comedor de lujo con sillas negras FORMA"
              width={1600}
              height={1024}
              loading="lazy"
              className="lookbook-parallax absolute inset-0 w-full h-[130%] object-cover"
            />
          </figure>
          <figcaption className="col-span-12 flex justify-between items-start font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            <span>Cena privada — Madrid</span>
            <span>2025</span>
          </figcaption>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Specs ---------------- */
const SPECS = [
  ["Ancho", "485 mm"],
  ["Fondo", "520 mm"],
  ["Altura total", "830 mm"],
  ["Altura de asiento", "450 mm"],
  ["Carcasa", "Polipropileno reforzado"],
  ["Estructura", "Acero termolacado"],
  ["Peso", "5.2 kg"],
  ["Apilable", "Sí, hasta 4 uds"],
];

function Specs() {
  const ref = useRef<HTMLDivElement>(null);
  useGsapReady((g) => {
    if (!ref.current) return;
    const ctx = g.context(() => {
      g.from(".spec-row", {
        opacity: 0,
        x: -20,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.06,
        scrollTrigger: { trigger: ref.current, start: "top 70%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);
  return (
    <section ref={ref} className="py-32 md:py-40 px-6 md:px-10 border-t border-border">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
        <div>
          <span className="block font-mono text-[10px] uppercase tracking-[0.3em] text-primary mb-6">
            06 / Ficha técnica
          </span>
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[0.95] text-balance">
            Precisión de estudio, hecha en serie.
          </h2>
          <p className="mt-8 max-w-md text-muted-foreground text-pretty">
            Fabricamos en talleres pequeños del norte de Italia. Cada pieza pasa
            un control manual antes de salir.
          </p>
        </div>
        <dl className="font-mono text-xs md:text-sm">
          {SPECS.map(([k, v]) => (
            <div
              key={k}
              className="spec-row flex justify-between py-4 border-b border-border first:border-t"
            >
              <dt className="uppercase tracking-[0.2em] text-muted-foreground">{k}</dt>
              <dd className="text-foreground">{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

/* ---------------- Testimonials ---------------- */
const QUOTES = [
  {
    text: "La única silla que pedí específicamente para tres proyectos seguidos. Aguanta niños, cenas y fotografías.",
    author: "Clara Beltrán",
    role: "Interiorista, Barcelona",
  },
  {
    text: "Nos convenció el peso. Se siente firme, casi arquitectónica, sin ser pesada al moverla.",
    author: "Alberto Ríos",
    role: "Arquitecto, Madrid",
  },
  {
    text: "El terracota mate se ha vuelto la firma de nuestro comedor. La gente pregunta por la silla antes que por la mesa.",
    author: "Nora & Sam",
    role: "Clientes, Valencia",
  },
];

function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  useGsapReady((g) => {
    if (!ref.current) return;
    const ctx = g.context(() => {
      g.from(".quote-card", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "expo.out",
        stagger: 0.15,
        scrollTrigger: { trigger: ref.current, start: "top 75%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);
  return (
    <section ref={ref} className="py-32 md:py-40 px-6 md:px-10 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <span className="block font-mono text-[10px] uppercase tracking-[0.3em] text-primary mb-12">
          07 / Voces
        </span>
        <div className="grid md:grid-cols-3 gap-10">
          {QUOTES.map((q) => (
            <blockquote key={q.author} className="quote-card space-y-6">
              <p className="text-xl md:text-2xl leading-snug tracking-tight font-medium text-balance">
                “{q.text}”
              </p>
              <footer className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                — {q.author} · {q.role}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Value ---------------- */
function Value() {
  const ref = useRef<HTMLDivElement>(null);
  useGsapReady((g) => {
    if (!ref.current) return;
    const ctx = g.context(() => {
      g.from(".value-pillar", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: "expo.out",
        stagger: 0.15,
        scrollTrigger: { trigger: ref.current, start: "top 75%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);
  const pillars = [
    { n: "01", t: "Precio directo", d: "Vendemos desde el taller. Sin intermediarios ni márgenes de showroom." },
    { n: "02", t: "Garantía 10 años", d: "Reparaciones y repuestos incluidos durante una década." },
    { n: "03", t: "Envío incluido", d: "Entrega en península en 5 días laborables, sin coste añadido." },
  ];
  return (
    <section ref={ref} className="py-32 md:py-40 px-6 md:px-10 border-t border-border bg-secondary/40">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-20">
          <span className="block font-mono text-[10px] uppercase tracking-[0.3em] text-primary mb-6">
            08 / Valor
          </span>
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[0.95] text-balance">
            Diseño de galería, <br />
            precio de mercado.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          {pillars.map((p) => (
            <div key={p.n} className="value-pillar space-y-4 border-t border-foreground pt-8">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                {p.n}
              </span>
              <h3 className="text-2xl font-semibold tracking-tight">{p.t}</h3>
              <p className="text-muted-foreground text-pretty">{p.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Final CTA ---------------- */
function FinalCTA() {
  const ref = useRef<HTMLDivElement>(null);
  useGsapReady((g) => {
    if (!ref.current) return;
    const ctx = g.context(() => {
      g.from(".cta-el", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "expo.out",
        stagger: 0.12,
        scrollTrigger: { trigger: ref.current, start: "top 75%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);
  return (
    <section
      id="contacto"
      ref={ref}
      className="py-32 md:py-48 px-6 md:px-10 text-center"
    >
      <div className="max-w-3xl mx-auto space-y-10">
        <span className="cta-el block font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
          — Consultar
        </span>
        <h2 className="cta-el text-5xl md:text-7xl font-semibold tracking-tight text-balance leading-[0.95]">
          La pieza que le falta a tu cocina.
        </h2>
        <p className="cta-el text-lg text-muted-foreground text-pretty">
          Pide una muestra de color, agenda una visita a nuestro taller o
          descarga el catálogo completo en PDF.
        </p>
        <div className="cta-el flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <a
            href="mailto:hola@forma.studio"
            className="px-10 py-4 bg-primary text-primary-foreground rounded-full font-medium uppercase tracking-[0.2em] text-xs hover:shadow-xl hover:-translate-y-0.5 transition-all"
          >
            Pedir muestra
          </a>
          <a
            href="#coleccion"
            className="px-10 py-4 border border-foreground rounded-full font-medium uppercase tracking-[0.2em] text-xs hover:bg-foreground hover:text-background transition-all"
          >
            Ver colección
          </a>
        </div>
        <div className="cta-el pt-16 flex flex-wrap justify-center gap-x-12 gap-y-4 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          <span>Envío gratis</span>
          <span>Garantía 10 años</span>
          <span>Hecho en Europa</span>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  return (
    <footer className="border-t border-border px-6 md:px-10 py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
        <span>© 2025 Forma Studio</span>
        <div className="flex gap-8">
          <a href="#" className="hover:text-foreground">Instagram</a>
          <a href="#" className="hover:text-foreground">Pinterest</a>
          <a href="mailto:hola@forma.studio" className="hover:text-foreground">hola@forma.studio</a>
        </div>
      </div>
    </footer>
  );
}