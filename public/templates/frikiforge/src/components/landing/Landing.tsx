import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { toast } from "sonner";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Toaster } from "@/components/ui/sonner";

import hero from "@/assets/hero.jpg";
import craftDetail from "@/assets/craft-detail.jpg";
import figSamurai from "@/assets/figure-samurai.jpg";
import figValkyrie from "@/assets/figure-valkyrie.jpg";
import figSorcerer from "@/assets/figure-sorcerer.jpg";
import figDragon from "@/assets/figure-dragon.jpg";
import pSculpt from "@/assets/process-sculpt.jpg";
import pPrint from "@/assets/process-print.jpg";
import pPaint from "@/assets/process-paint.jpg";
import pFinish from "@/assets/process-finish.jpg";
import banner from "@/assets/craftsmanship-banner.jpg";
import catAnime from "@/assets/cat-anime.jpg";
import catGames from "@/assets/cat-games.jpg";
import catFriki from "@/assets/cat-friki.jpg";

gsap.registerPlugin(ScrollTrigger);

const figures = [
  { img: figSamurai, name: "Neo Shogun", tag: "Anime / 28 cm", desc: "Armadura pintada a mano con acentos oro cíber" },
  { img: figValkyrie, name: "Valkiria Protocolo", tag: "Videojuegos / 32 cm", desc: "Alas translúcidas en resina iridiscente" },
  { img: figSorcerer, name: "Tejedor del Vacío", tag: "Fantasía / 30 cm", desc: "Efectos mágicos en resina traslúcida" },
  { img: figDragon, name: "Dragón Ascendente", tag: "Anime / 25 cm", desc: "Escamas talladas una a una a pincel fino" },
];

const process = [
  { n: "01", title: "Modelado Digital", img: pSculpt, text: "Esculpimos cada personaje en 3D con precisión micrométrica, refinando cada arruga, cada mecha, cada pliegue del tejido." },
  { n: "02", title: "Impresión en Resina", img: pPrint, text: "Impresión LCD 8K en resina premium que captura texturas imposibles de replicar con cualquier otra técnica." },
  { n: "03", title: "Pintura a Mano", img: pPaint, text: "Más de 40 horas por pieza. Aerógrafo para las bases, pincel fino para los ojos, la piel y los detalles imposibles." },
  { n: "04", title: "Acabado Premium", img: pFinish, text: "Barnices selectivos, montaje sobre peana temática y sellado de por vida. Lista para tu vitrina de coleccionista." },
];

const categories = [
  { img: catAnime, title: "Anime", n: "01", desc: "Tus personajes favoritos de shonen, seinen y clásicos de culto." },
  { img: catGames, title: "Videojuegos", n: "02", desc: "Héroes de RPG, shooters, fighting games e indies inolvidables." },
  { img: catFriki, title: "Universos Frikis", n: "03", desc: "Cómic, cine, series, tabletop y cualquier obsesión pop imaginable." },
];

const testimonials = [
  { quote: "El nivel de detalle en los ojos es una locura. Se nota que cada pieza es única.", name: "Carlos M.", piece: "Neo Shogun" },
  { quote: "Llevaba años buscando una figura así de mi personaje. Cero decepción, brutal.", name: "Lucía R.", piece: "Encargo personalizado" },
  { quote: "La comunicación durante el proceso fue perfecta. Vale cada euro.", name: "Diego S.", piece: "Valkiria Protocolo" },
];

const faqs = [
  { q: "¿Cuánto tiempo tarda un encargo?", a: "Entre 4 y 8 semanas dependiendo de la complejidad. Recibirás fotos del proceso en cada fase." },
  { q: "¿De qué material están hechas?", a: "Resina fotopolimérica de alta densidad, imprimida a 8K y pintada con acrílicos y esmaltes profesionales." },
  { q: "¿Se pueden encargar personajes propios o poco conocidos?", a: "Sí. Trabajamos con referencias visuales y bocetos. Cuanto más material aportes, mejor." },
  { q: "¿Hacéis envíos a toda España y Europa?", a: "Sí, con embalaje reforzado y seguro incluido. Trámite en 24-48h tras el pago final." },
  { q: "¿Cómo cuido la figura?", a: "Evita luz solar directa y polvo. Un pincel suave cada pocas semanas basta para mantenerla como el primer día." },
];

export function Landing() {
  const rootRef = useRef<HTMLDivElement>(null);
  const heroImgRef = useRef<HTMLImageElement>(null);
  const heroTitleRef = useRef<HTMLHeadingElement>(null);
  const bannerRef = useRef<HTMLImageElement>(null);
  const [counters, setCounters] = useState({ pieces: 0, hours: 0, years: 0 });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero title
      const chars = heroTitleRef.current?.querySelectorAll(".char");
      if (chars) {
        gsap.from(chars, {
          y: 120,
          opacity: 0,
          duration: 1.2,
          ease: "expo.out",
          stagger: 0.04,
          delay: 0.2,
        });
      }
      gsap.from(".hero-sub, .hero-cta, .hero-eyebrow", {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "expo.out",
        stagger: 0.1,
        delay: 0.8,
      });

      // Hero parallax
      if (heroImgRef.current) {
        gsap.to(heroImgRef.current, {
          yPercent: 25,
          ease: "none",
          scrollTrigger: {
            trigger: heroImgRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      // Banner parallax
      if (bannerRef.current) {
        gsap.to(bannerRef.current, {
          yPercent: 20,
          ease: "none",
          scrollTrigger: {
            trigger: bannerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      // Reveal-up
      gsap.utils.toArray<HTMLElement>(".reveal-up").forEach((el) => {
        gsap.from(el, {
          y: 60,
          opacity: 0,
          duration: 1.1,
          ease: "expo.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
        });
      });

      // Split reveals
      gsap.utils.toArray<HTMLElement>(".reveal-line").forEach((el) => {
        gsap.from(el, {
          y: 40,
          opacity: 0,
          duration: 1,
          ease: "expo.out",
          scrollTrigger: { trigger: el, start: "top 88%" },
        });
      });

      // Counters
      ScrollTrigger.create({
        trigger: "#stats",
        start: "top 75%",
        once: true,
        onEnter: () => {
          const targets = { pieces: 240, hours: 48, years: 7 };
          const obj = { pieces: 0, hours: 0, years: 0 };
          gsap.to(obj, {
            pieces: targets.pieces,
            hours: targets.hours,
            years: targets.years,
            duration: 2.2,
            ease: "expo.out",
            onUpdate: () =>
              setCounters({
                pieces: Math.round(obj.pieces),
                hours: Math.round(obj.hours),
                years: Math.round(obj.years),
              }),
          });
        },
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  const splitChars = (text: string) =>
    text.split("").map((c, i) => (
      <span key={i} className="char inline-block" style={{ whiteSpace: c === " " ? "pre" : "normal" }}>
        {c}
      </span>
    ));

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.currentTarget.reset();
    toast.success("Solicitud enviada", {
      description: "Te contactaremos en menos de 48h para dar forma a tu figura.",
    });
  };

  return (
    <div ref={rootRef} className="bg-brand-bg text-foreground font-body">
      <Toaster theme="dark" />

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 mix-blend-difference">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 py-6 flex justify-between items-center">
          <a href="#top" className="font-display font-bold text-lg tracking-tighter">
            FRIKI<span className="text-brand-accent">FORGE</span>
          </a>
          <div className="hidden md:flex gap-10 text-[10px] uppercase tracking-[0.25em] font-medium">
            <a href="#galeria" className="hover:text-brand-accent transition-colors">Galería</a>
            <a href="#proceso" className="hover:text-brand-accent transition-colors">Proceso</a>
            <a href="#categorias" className="hover:text-brand-accent transition-colors">Categorías</a>
            <a href="#encargos" className="hover:text-brand-accent transition-colors">Encargos</a>
          </div>
          <a
            href="#encargos"
            className="text-[10px] uppercase tracking-[0.25em] font-medium border border-white/30 px-4 py-2 hover:bg-white hover:text-black transition-colors"
          >
            Contacto
          </a>
        </div>
      </nav>

      {/* HERO */}
      <header id="top" className="relative h-screen min-h-[720px] w-full overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <img
            ref={heroImgRef}
            src={hero}
            alt="Figura artesanal de resina en primer plano"
            className="w-full h-[120%] object-cover opacity-55"
            width={1920}
            height={1280}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-bg/40 via-transparent to-brand-bg" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--brand-bg)_85%)]" />
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <p className="hero-eyebrow font-mono text-[11px] tracking-[0.4em] text-brand-accent uppercase mb-6">
            Artesanía de resina · Hecho a mano en España
          </p>
          <h1
            ref={heroTitleRef}
            className="font-display text-5xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] max-w-6xl"
          >
            <span className="block">{splitChars("FORJADAS")}</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-accent via-cyan-300 to-indigo-400">
              {splitChars("EN RESINA")}
            </span>
          </h1>
          <p className="hero-sub mt-8 text-base md:text-lg text-white/60 max-w-xl uppercase tracking-[0.2em]">
            Figuras coleccionables de 20 a 30 cm, pintadas pieza por pieza. Anime, videojuegos y todo lo friki.
          </p>
          <div className="hero-cta mt-12 flex flex-col sm:flex-row gap-4">
            <a
              href="#galeria"
              className="px-8 py-4 bg-brand-accent text-black font-bold uppercase tracking-[0.2em] text-xs hover:bg-white transition-colors"
            >
              Ver colección
            </a>
            <a
              href="#encargos"
              className="px-8 py-4 border border-white/25 text-foreground font-bold uppercase tracking-[0.2em] text-xs hover:bg-white/5 transition-colors"
            >
              Encargar la mía
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-white/40">
          <span>Scroll</span>
          <div className="w-[1px] h-14 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </header>

      {/* MANIFESTO + STATS */}
      <section className="relative py-32 md:py-48 px-6 md:px-10 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <span className="reveal-up block font-mono text-[10px] uppercase tracking-[0.4em] text-brand-accent mb-10">
            (01) El Manifiesto
          </span>
          <h2 className="reveal-line text-3xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.05] tracking-tighter max-w-5xl">
            No imprimimos <span className="text-brand-accent">figuras</span>. Esculpimos leyendas de la cultura pop, gramo a gramo de resina.
          </h2>
          <p className="reveal-line mt-12 max-w-2xl text-lg text-white/60 leading-relaxed ml-auto">
            Cada pieza nace de una obsesión: el detalle. Nos negamos a producir en masa. Cada figura sale del taller con un número, una historia y las horas contadas de trabajo humano detrás.
          </p>
        </div>

        <div id="stats" className="max-w-6xl mx-auto mt-24 grid grid-cols-1 md:grid-cols-3 gap-10 border-t border-white/10 pt-16">
          {[
            { n: counters.pieces, label: "Piezas forjadas", suffix: "+" },
            { n: counters.hours, label: "Horas por figura", suffix: "h" },
            { n: counters.years, label: "Años esculpiendo", suffix: "" },
          ].map((s) => (
            <div key={s.label} className="reveal-up">
              <div className="font-display font-bold text-5xl md:text-7xl text-brand-accent text-glow">
                {s.n}{s.suffix}
              </div>
              <div className="mt-3 text-xs uppercase tracking-[0.25em] text-white/50">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CRAFT DETAIL */}
      <section className="py-32 px-6 md:px-10 border-b border-white/5">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal-up relative group order-2 lg:order-1">
            <div className="absolute -inset-6 bg-brand-accent/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <img
              src={craftDetail}
              alt="Impresora de resina creando una figura"
              className="relative aspect-square w-full object-cover border border-white/10"
              loading="lazy"
              width={1200}
              height={1200}
            />
          </div>
          <div className="order-1 lg:order-2 space-y-8">
            <span className="reveal-up block font-mono text-[10px] uppercase tracking-[0.4em] text-brand-accent">
              (02) La Pieza
            </span>
            <h2 className="reveal-line font-display font-bold text-3xl md:text-5xl tracking-tighter leading-[1.05]">
              30 CM DE PURA OBSESIÓN
            </h2>
            <div className="reveal-line space-y-6 text-white/70 text-lg leading-relaxed">
              <p>
                Cada figura empieza como un modelo 3D de alta densidad, impreso en resina premium. No solo imprimimos: esculpimos el aire digital hasta que toma forma física de 20 a 30 cm de puro detalle.
              </p>
              <div className="h-[1px] w-24 bg-brand-accent" />
              <p>
                Nuestros artesanos pasan más de 40 horas en una sola pieza, usando pinceles miniatura para capturar el alma de tus iconos favoritos de anime y videojuegos. Sin producción en masa. Sin concesiones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THE VAULT */}
      <section id="galeria" className="bg-brand-muted py-32 px-6 md:px-10 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="reveal-up flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <span className="block font-mono text-[10px] uppercase tracking-[0.4em] text-brand-accent mb-4">
                (03) The Vault
              </span>
              <h2 className="font-display font-bold text-4xl md:text-6xl tracking-tighter">
                LA CÁMARA ACORAZADA
              </h2>
            </div>
            <p className="text-brand-accent uppercase tracking-[0.25em] text-xs font-bold">
              Ediciones limitadas · Actualmente disponibles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {figures.map((f, i) => (
              <div
                key={f.name}
                className={`reveal-up group relative ${i % 2 === 1 ? "lg:translate-y-12" : ""}`}
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-brand-bg border border-white/5">
                  <img
                    src={f.img}
                    alt={f.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    loading="lazy"
                    width={900}
                    height={1120}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="mt-5">
                  <p className="font-mono text-[10px] text-brand-accent uppercase tracking-[0.25em] mb-2">
                    {f.tag}
                  </p>
                  <h3 className="font-display text-lg font-bold mb-2">{f.name}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section id="categorias" className="py-32 px-6 md:px-10 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="reveal-up mb-20">
            <span className="block font-mono text-[10px] uppercase tracking-[0.4em] text-brand-accent mb-4">
              (04) Universos
            </span>
            <h2 className="font-display font-bold text-4xl md:text-6xl tracking-tighter max-w-2xl">
              TRES MUNDOS. UN ÚNICO TALLER.
            </h2>
          </div>

          <div className="space-y-6">
            {categories.map((c) => (
              <div
                key={c.title}
                className="reveal-up group relative overflow-hidden border border-white/10 h-[280px] md:h-[380px] cursor-pointer"
              >
                <img
                  src={c.img}
                  alt={c.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700"
                  loading="lazy"
                  width={1200}
                  height={800}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-bg via-brand-bg/50 to-transparent" />
                <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16">
                  <span className="font-mono text-brand-accent text-xs mb-3">{c.n} /</span>
                  <h3 className="font-display font-bold text-5xl md:text-8xl tracking-tighter mb-4 group-hover:text-brand-accent transition-colors duration-500">
                    {c.title}
                  </h3>
                  <p className="text-white/60 max-w-md">{c.desc}</p>
                </div>
                <div className="absolute top-8 right-8 text-brand-accent opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M7 17L17 7M17 7H8M17 7V16" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="proceso" className="py-32 px-6 md:px-10 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="reveal-up text-center mb-24">
            <span className="block font-mono text-[10px] uppercase tracking-[0.4em] text-brand-accent mb-4">
              (05) El Método
            </span>
            <h2 className="font-display font-bold text-4xl md:text-6xl tracking-tighter">
              LA METAMORFOSIS
            </h2>
            <p className="mt-6 text-white/60 max-w-2xl mx-auto">
              De píxel a pieza de coleccionista en cuatro actos. Cada paso importa. Ninguno se salta.
            </p>
          </div>

          <div className="space-y-32">
            {process.map((p, i) => (
              <div
                key={p.n}
                className={`reveal-up grid lg:grid-cols-2 gap-12 items-center ${
                  i % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={`relative ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="absolute -top-8 -left-4 font-display font-bold text-[10rem] md:text-[14rem] leading-none text-white/[0.04] select-none">
                    {p.n}
                  </div>
                  <img
                    src={p.img}
                    alt={p.title}
                    className="relative w-full aspect-[4/3] object-cover border border-white/10"
                    loading="lazy"
                    width={1200}
                    height={900}
                  />
                </div>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <span className="font-mono text-brand-accent text-xs tracking-[0.3em]">
                    PASO {p.n}
                  </span>
                  <h3 className="mt-4 font-display font-bold text-3xl md:text-5xl tracking-tighter mb-6">
                    {p.title}
                  </h3>
                  <p className="text-white/70 text-lg leading-relaxed max-w-md">{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CRAFTSMANSHIP BANNER */}
      <section className="relative py-40 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            ref={bannerRef}
            src={banner}
            alt="Taller"
            className="w-full h-[130%] object-cover opacity-25"
            loading="lazy"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-bg via-transparent to-brand-bg" />
        </div>
        <h2 className="pointer-events-none select-none absolute inset-x-0 top-1/2 -translate-y-1/2 text-center font-display font-bold text-6xl md:text-[14rem] leading-none text-white/[0.05] tracking-tighter">
          CRAFTSMANSHIP
        </h2>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <p className="reveal-up text-2xl md:text-4xl font-light italic text-white/90 leading-snug">
            "No va sobre la impresión. Va sobre las horas bajo la lupa, dándole alma a una carcasa de resina."
          </p>
          <p className="reveal-up mt-8 font-mono text-xs uppercase tracking-[0.3em] text-brand-accent">
            — Fundador, FrikiForge
          </p>
        </div>
      </section>

      {/* COMMISSIONS */}
      <section id="encargos" className="py-32 px-6 md:px-10 border-b border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <span className="reveal-up block font-mono text-[10px] uppercase tracking-[0.4em] text-brand-accent mb-6">
            (06) Encargos personalizados
          </span>
          <h2 className="reveal-up font-display font-bold text-4xl md:text-6xl tracking-tighter mb-6">
            TU VISIÓN, <br />
            <span className="text-brand-accent">NUESTRA RESINA.</span>
          </h2>
          <p className="reveal-up text-white/60 text-lg mb-12 max-w-xl mx-auto">
            ¿Tienes un personaje favorito que nadie ha fabricado? Aceptamos un número limitado de encargos únicos cada mes. Cuéntanoslo.
          </p>

          <form
            onSubmit={handleSubmit}
            className="reveal-up text-left grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto"
          >
            <input
              required
              name="name"
              placeholder="Tu nombre"
              className="bg-brand-muted border border-white/10 px-5 py-4 text-sm focus:border-brand-accent focus:outline-none transition-colors"
            />
            <input
              required
              name="email"
              type="email"
              placeholder="Email"
              className="bg-brand-muted border border-white/10 px-5 py-4 text-sm focus:border-brand-accent focus:outline-none transition-colors"
            />
            <input
              required
              name="character"
              placeholder="Personaje / referencia"
              className="md:col-span-2 bg-brand-muted border border-white/10 px-5 py-4 text-sm focus:border-brand-accent focus:outline-none transition-colors"
            />
            <textarea
              name="details"
              rows={4}
              placeholder="Detalles: tamaño, pose, presupuesto, plazo..."
              className="md:col-span-2 bg-brand-muted border border-white/10 px-5 py-4 text-sm focus:border-brand-accent focus:outline-none transition-colors resize-none"
            />
            <button
              type="submit"
              className="md:col-span-2 bg-brand-accent text-black font-bold uppercase tracking-[0.25em] text-xs py-5 hover:bg-white transition-colors"
            >
              Solicitar presupuesto
            </button>
          </form>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-32 px-6 md:px-10 border-b border-white/5 bg-brand-muted">
        <div className="max-w-7xl mx-auto">
          <div className="reveal-up mb-16">
            <span className="block font-mono text-[10px] uppercase tracking-[0.4em] text-brand-accent mb-4">
              (07) Voces del taller
            </span>
            <h2 className="font-display font-bold text-4xl md:text-6xl tracking-tighter">
              COLECCIONISTAS
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="reveal-up border border-white/10 p-8 bg-brand-bg">
                <div className="text-brand-accent text-5xl font-display font-bold leading-none mb-4">"</div>
                <p className="text-white/80 leading-relaxed mb-8">{t.quote}</p>
                <div className="border-t border-white/10 pt-4">
                  <p className="font-bold text-sm">{t.name}</p>
                  <p className="text-white/40 text-xs uppercase tracking-widest mt-1">{t.piece}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 px-6 md:px-10 border-b border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="reveal-up mb-16 text-center">
            <span className="block font-mono text-[10px] uppercase tracking-[0.4em] text-brand-accent mb-4">
              (08) FAQ
            </span>
            <h2 className="font-display font-bold text-4xl md:text-6xl tracking-tighter">
              PREGUNTAS FRECUENTES
            </h2>
          </div>

          <div className="reveal-up">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-white/10">
                  <AccordionTrigger className="text-left font-display font-bold text-lg hover:text-brand-accent">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-white/60 text-base leading-relaxed">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-16 px-6 md:px-10 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
            <div className="max-w-sm">
              <div className="font-display font-bold text-2xl mb-4">
                FRIKI<span className="text-brand-accent">FORGE</span>
              </div>
              <p className="text-white/40 text-sm leading-relaxed">
                Taller de figuras de autor en resina impresa 3D. Hecho a mano en España, enviado a todo el mundo.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-16">
              <div className="space-y-3">
                <p className="font-mono text-[10px] uppercase tracking-widest text-white/40 mb-4">Social</p>
                <a href="#" className="block text-sm hover:text-brand-accent transition-colors">Instagram</a>
                <a href="#" className="block text-sm hover:text-brand-accent transition-colors">ArtStation</a>
                <a href="#" className="block text-sm hover:text-brand-accent transition-colors">TikTok</a>
              </div>
              <div className="space-y-3">
                <p className="font-mono text-[10px] uppercase tracking-widest text-white/40 mb-4">Info</p>
                <a href="#proceso" className="block text-sm hover:text-brand-accent transition-colors">Proceso</a>
                <a href="#encargos" className="block text-sm hover:text-brand-accent transition-colors">Encargos</a>
                <a href="#" className="block text-sm hover:text-brand-accent transition-colors">Envíos</a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono uppercase tracking-[0.25em] text-white/30">
            <span>© 2026 FrikiForge Studio</span>
            <span>Hecho a mano en España</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
