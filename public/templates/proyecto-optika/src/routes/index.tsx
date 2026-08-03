import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import heroLens from "@/assets/hero-lens.jpg";
import cameraM1 from "@/assets/camera-m1.jpg";
import cameraXpro from "@/assets/camera-xpro.jpg";
import cameraV16 from "@/assets/camera-v16.jpg";
import beyondMain from "@/assets/beyond-main.jpg";
import beyondDetail from "@/assets/beyond-detail.jpg";
import parallaxLandscape from "@/assets/parallax-landscape.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const models = [
  {
    id: "M1",
    name: "OPTIKA M1",
    tag: "M-SERIES / CALLE",
    price: "€ 4.200",
    image: cameraM1,
    blurb:
      "La compañera perfecta del flâneur global. Obturador silencioso, diales táctiles y una respuesta cromática nacida para la calle.",
    specs: [
      ["Sensor", "Full Frame CMOS"],
      ["Peso", "480 g"],
      ["ISO", "100 – 51.200"],
      ["Montura", "L-Kern"],
    ],
  },
  {
    id: "XPRO",
    name: "OPTIKA XPRO",
    tag: "X-SERIES / ESTUDIO",
    price: "€ 8.900",
    image: cameraXpro,
    blurb:
      "Formato medio sin concesiones. Detalle quirúrgico para el retrato y el trabajo comercial más exigente.",
    specs: [
      ["Sensor", "100MP Medio Formato"],
      ["Dinámico", "15 pasos"],
      ["ISO", "50 – 25.600"],
      ["Color", "16-bit RAW"],
    ],
  },
  {
    id: "V16",
    name: "OPTIKA V16",
    tag: "V-SERIES / CINE",
    price: "€ 12.500",
    image: cameraV16,
    blurb:
      "8K RAW interno. El futuro de la cinematografía independiente concentrado en un cuerpo modular.",
    specs: [
      ["Vídeo", "8K / 120 fps"],
      ["Rango", "16+ pasos"],
      ["Montura", "L-Pro Native"],
      ["Códec", "ProRes RAW"],
    ],
  },
];

const compareRows: [string, string, string, string][] = [
  ["Ideal para", "Calle & viaje", "Estudio & retrato", "Cine & documental"],
  ["Sensor", "Full Frame", "Medio formato 100MP", "Super 35 8K"],
  ["Ráfaga", "12 fps", "8 fps", "60 fps"],
  ["Estabilización", "5 ejes", "5 ejes híbrido", "Gyro + IBIS"],
  ["Peso", "480 g", "1,3 kg", "1,8 kg (cage)"],
  ["Autonomía", "580 disparos", "410 disparos", "95 min 8K"],
];

const gallery = [
  { src: gallery1, caption: "Retrato en ocre", shot: "OPTIKA XPRO · 85mm f/1.4", aspect: "aspect-[4/5]" },
  { src: gallery2, caption: "Shibuya, lluvia", shot: "OPTIKA M1 · 35mm f/2", aspect: "aspect-[3/4]" },
  { src: gallery3, caption: "Lobo del norte", shot: "OPTIKA XPRO · 400mm f/2.8", aspect: "aspect-[4/3]" },
  { src: gallery4, caption: "Geometría en cal", shot: "OPTIKA M1 · 28mm f/2", aspect: "aspect-square" },
];

const testimonials = [
  {
    quote:
      "La XPRO reproduce la piel como ninguna cámara digital que haya usado. Es lo más cerca que he estado del formato medio analógico.",
    author: "Ines Vallcorba",
    role: "Fotógrafa editorial, Vogue",
  },
  {
    quote:
      "Rodamos un largometraje entero con dos V16 y un puñado de ópticas. La consistencia de color en post ha sido milimétrica.",
    author: "Julian Vane",
    role: "Director de fotografía",
  },
  {
    quote:
      "La M1 desaparece en la mano. Es la primera cámara profesional que no me cansa después de doce horas de calle.",
    author: "Nao Tokushige",
    role: "Street & documental",
  },
];

function useReveal() {
  useEffect(() => {
    let mounted = true;
    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      if (!mounted) return;
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        // Reveal on scroll
        gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
          gsap.fromTo(
            el,
            { y: 60, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1.1,
              ease: "expo.out",
              scrollTrigger: { trigger: el, start: "top 85%" },
            },
          );
        });

        // Parallax translate on Y
        gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
          const speed = parseFloat(el.dataset.parallax || "0.2");
          gsap.fromTo(
            el,
            { yPercent: -speed * 30 },
            {
              yPercent: speed * 30,
              ease: "none",
              scrollTrigger: {
                trigger: el.parentElement,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            },
          );
        });

        // Slow zoom
        gsap.utils.toArray<HTMLElement>("[data-zoom]").forEach((el) => {
          gsap.fromTo(
            el,
            { scale: 1.15 },
            {
              scale: 1,
              ease: "none",
              scrollTrigger: {
                trigger: el,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            },
          );
        });

        // Word-by-word reveal for hero heading
        const heroWords = gsap.utils.toArray<HTMLElement>("[data-hero-word]");
        if (heroWords.length) {
          gsap.fromTo(
            heroWords,
            { y: "100%", opacity: 0 },
            {
              y: "0%",
              opacity: 1,
              duration: 1.1,
              ease: "expo.out",
              stagger: 0.08,
              delay: 0.15,
            },
          );
        }
      });

      return () => ctx.revert();
    })();
    return () => {
      mounted = false;
    };
  }, []);
}

function Index() {
  useReveal();
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={scrollRef}
      className="min-h-screen bg-obsidian text-platinum font-body antialiased selection:bg-precision selection:text-white overflow-x-hidden"
    >
      <Nav />
      <Hero />
      <Manifesto />
      <ModelsGrid />
      <Compare />
      <BeyondResolution />
      <ParallaxQuote />
      <Gallery />
      <SpecsTable />
      <Testimonials />
      <FooterCta />
    </div>
  );
}

function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 mix-blend-difference px-6 md:px-12 py-6 flex justify-between items-center">
      <span className="font-display text-2xl tracking-[0.2em] text-white">OPTIKA</span>
      <div className="hidden md:flex gap-10 text-[10px] uppercase tracking-[0.25em] font-mono text-white">
        <a href="#systems" className="hover:text-precision transition-colors">Sistemas</a>
        <a href="#optics" className="hover:text-precision transition-colors">Óptica</a>
        <a href="#gallery" className="hover:text-precision transition-colors">Galería</a>
        <a href="#specs" className="hover:text-precision transition-colors">Specs</a>
      </div>
      <button className="text-[10px] uppercase tracking-[0.25em] font-mono text-white border border-white/20 px-4 py-2 hover:bg-white hover:text-obsidian transition-colors">
        Reservar
      </button>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative h-screen min-h-[720px] flex flex-col justify-end p-6 md:p-12 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0" data-parallax="0.3">
          <img
            src={heroLens}
            alt="Óptica OPTIKA"
            width={1920}
            height={1200}
            className="w-full h-[115%] object-cover opacity-70"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-obsidian/70" />
      </div>

      <div className="relative z-10 max-w-6xl">
        <div className="flex items-center gap-3 mb-8 font-mono text-[10px] tracking-[0.3em] uppercase text-platinum/60">
          <span className="inline-block w-8 h-px bg-precision" />
          Colección 2026 · Precision Series
        </div>
        <h1 className="font-display text-[clamp(3.5rem,13vw,11rem)] leading-[0.85] tracking-tight text-balance mb-10 overflow-hidden">
          <span className="block overflow-hidden">
            <span data-hero-word className="inline-block">LA</span>{" "}
            <span data-hero-word className="inline-block">ARQUITECTURA</span>
          </span>
          <span className="block overflow-hidden">
            <span data-hero-word className="inline-block">DE</span>{" "}
            <span data-hero-word className="inline-block text-precision">LA LUZ</span>
          </span>
        </h1>
        <div className="flex flex-col md:flex-row md:items-end gap-8 md:gap-16">
          <a
            href="#systems"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-precision text-white font-mono text-xs uppercase tracking-[0.25em] hover:bg-white hover:text-obsidian transition-colors w-fit"
          >
            Explorar la serie
            <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
          </a>
          <p className="max-w-sm text-sm text-platinum/60 leading-relaxed">
            Cuerpos forjados en magnesio en frío, sensores calibrados a mano y ópticas que capturan lo invisible.
            Construidas para el instante decisivo.
          </p>
        </div>
      </div>

      <div className="relative z-10 mt-16 flex justify-between items-end text-[10px] font-mono uppercase tracking-[0.3em] text-platinum/40">
        <span>Wetzlar · Munich · Tokyo</span>
        <span className="hidden md:flex items-center gap-3">
          Desliza
          <span className="inline-block w-16 h-px bg-platinum/40" />
        </span>
      </div>
    </section>
  );
}

function Manifesto() {
  return (
    <section className="py-32 md:py-48 px-6 md:px-12 border-b border-hairline">
      <div className="grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4" data-reveal>
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-precision">
            01 / Manifiesto
          </span>
          <div className="mt-8 text-xs font-mono text-platinum/40 leading-relaxed max-w-[26ch]">
            Fundada en 1984. Ingeniería óptica y mecánica de precisión bajo un mismo techo, desde entonces.
          </div>
        </div>
        <div className="lg:col-span-8" data-reveal>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance leading-[1.05]">
            No fabricamos gadgets. Fabricamos extensiones del ojo humano, capaces de
            <span className="text-precision"> traducir la luz en memoria</span>.
          </h2>
          <div className="mt-16 h-px w-full bg-hairline relative overflow-hidden">
            <div className="absolute inset-y-0 left-0 bg-precision w-1/3 animate-[reveal-w_2.4s_ease-in-out_infinite_alternate]" />
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-10 text-sm text-platinum/60 leading-relaxed">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-platinum mb-3">Alma mecánica</div>
              Cada dial está mecanizado con una tolerancia de 0,01 mm. El clic no se simula: es acero al carbono.
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-platinum mb-3">Verdad óptica</div>
              Cristales pulidos a mano en la Selva Negra. Fidelidad absoluta desde el sensor hasta el negativo digital.
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-platinum mb-3">Servicio vitalicio</div>
              Reparamos cualquier OPTIKA fabricada desde 1984. Piezas garantizadas de por vida.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ModelsGrid() {
  return (
    <section id="systems" className="py-32 md:py-48 px-6 md:px-12">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20" data-reveal>
        <div>
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-precision">
            02 / La colección
          </span>
          <h2 className="mt-6 font-display text-6xl md:text-8xl leading-[0.9] tracking-tight">
            TRES CUERPOS. <br />
            <span className="text-platinum/40">UNA OBSESIÓN.</span>
          </h2>
        </div>
        <p className="max-w-sm text-sm text-platinum/60 leading-relaxed">
          Cada modelo responde a una disciplina. Ninguno es un compromiso.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-px bg-hairline border border-hairline">
        {models.map((m) => (
          <article key={m.id} className="bg-obsidian p-8 flex flex-col group" data-reveal>
            <div className="mb-10 overflow-hidden aspect-[4/5] bg-neutral-950">
              <img
                src={m.image}
                alt={m.name}
                loading="lazy"
                width={1000}
                height={1250}
                className="w-full h-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
              />
            </div>
            <div className="mt-auto">
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-platinum/40 mb-3">
                {m.tag}
              </div>
              <div className="flex justify-between items-baseline mb-5">
                <h3 className="font-display text-4xl tracking-wide">{m.name}</h3>
                <span className="font-mono text-xs text-precision">{m.price}</span>
              </div>
              <p className="text-sm text-platinum/60 leading-relaxed mb-8 min-h-[4.5rem]">{m.blurb}</p>
              <dl className="grid grid-cols-2 gap-x-6 gap-y-4 pt-6 border-t border-hairline">
                {m.specs.map(([k, v]) => (
                  <div key={k}>
                    <dt className="font-mono text-[9px] text-platinum/40 uppercase tracking-[0.2em]">{k}</dt>
                    <dd className="text-xs mt-1">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Compare() {
  return (
    <section className="py-32 md:py-40 px-6 md:px-12 border-y border-hairline bg-neutral-950/60">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16" data-reveal>
        <div>
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-precision">
            03 / Comparativa
          </span>
          <h2 className="mt-6 font-display text-5xl md:text-7xl leading-[0.9]">CUERPO A CUERPO</h2>
        </div>
        <p className="max-w-sm text-sm text-platinum/60 leading-relaxed">
          Elige por disciplina, no por precio. Los tres cuerpos comparten óptica y firmware.
        </p>
      </div>

      <div className="overflow-x-auto" data-reveal>
        <table className="w-full min-w-[720px] border-collapse">
          <thead>
            <tr className="border-b border-hairline">
              <th className="text-left py-6 pr-4 font-mono text-[10px] uppercase tracking-[0.25em] text-platinum/40 w-1/4">
                Métrica
              </th>
              {models.map((m) => (
                <th key={m.id} className="text-left py-6 pr-4 font-display text-2xl">
                  {m.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {compareRows.map((row) => (
              <tr key={row[0]} className="border-b border-hairline">
                <td className="py-6 pr-4 font-mono text-[10px] uppercase tracking-[0.25em] text-platinum/50">
                  {row[0]}
                </td>
                {row.slice(1).map((cell, i) => (
                  <td key={i} className="py-6 pr-4 text-sm text-platinum/80">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function BeyondResolution() {
  return (
    <section id="optics" className="relative py-32 md:py-48 bg-platinum text-obsidian overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div className="relative">
          <div className="overflow-hidden aspect-[3/4] bg-neutral-200">
            <img
              src={beyondMain}
              alt="Óptica arquitectónica"
              loading="lazy"
              width={1200}
              height={1600}
              className="w-full h-full object-cover"
              data-zoom
            />
          </div>
          <div className="absolute -bottom-10 -right-6 md:-right-16 w-40 md:w-64 aspect-[3/4] border-[10px] md:border-[16px] border-platinum shadow-2xl overflow-hidden hidden sm:block">
            <img
              src={beyondDetail}
              alt="Detalle óptico"
              loading="lazy"
              width={800}
              height={1000}
              className="w-full h-full object-cover"
              data-zoom
            />
          </div>
        </div>

        <div className="space-y-8" data-reveal>
          <span className="inline-block font-mono text-[10px] uppercase tracking-[0.3em] bg-obsidian text-platinum px-3 py-2">
            04 / Óptica
          </span>
          <h2 className="font-display text-6xl md:text-8xl leading-[0.9]">
            MÁS ALLÁ DE <br />
            <span className="text-precision">LA RESOLUCIÓN</span>
          </h2>
          <p className="text-lg leading-relaxed max-w-[52ch] text-obsidian/70">
            La resolución es un número. La claridad es una emoción. Nuestras lentes se ensamblan a mano en Wetzlar,
            con tierras raras y nano-recubrimientos propietarios que eliminan la aberración cromática sin sacrificar el alma.
          </p>
          <div className="grid grid-cols-3 gap-6 pt-8">
            {[
              ["01", "Nano-coating", "18 capas"],
              ["02", "Cristal ED", "Tierras raras"],
              ["03", "Ensamblaje", "A mano"],
            ].map(([n, t, s]) => (
              <div key={n} className="border-t border-obsidian/20 pt-4">
                <div className="font-mono text-[10px] tracking-[0.25em] text-obsidian/40">{n}</div>
                <div className="mt-2 font-display text-2xl">{t}</div>
                <div className="text-xs text-obsidian/60 mt-1">{s}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ParallaxQuote() {
  return (
    <section className="relative h-[90vh] min-h-[600px] overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0" data-parallax="0.5">
        <img
          src={parallaxLandscape}
          alt="Paisaje capturado con OPTIKA"
          loading="lazy"
          width={1920}
          height={1200}
          className="w-full h-[125%] object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-obsidian/50" />
      <div className="relative z-10 max-w-4xl px-6 text-center" data-reveal>
        <span className="inline-block font-mono text-[10px] uppercase tracking-[0.3em] text-precision mb-8">
          05 / En el campo
        </span>
        <blockquote className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.05] tracking-wide text-balance">
          "El instrumento no debería dictar el arte. Debería desaparecer, dejando solo el instante."
        </blockquote>
        <div className="mt-10 font-mono text-[10px] uppercase tracking-[0.3em] text-platinum/70">
          — Julian Vane · Director de fotografía
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="gallery" className="py-32 md:py-48 px-6 md:px-12">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20" data-reveal>
        <div>
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-precision">
            06 / Galería
          </span>
          <h2 className="mt-6 font-display text-6xl md:text-8xl leading-[0.9]">ARTEFACTOS</h2>
        </div>
        <p className="max-w-sm text-sm text-platinum/60 leading-relaxed">
          Trabajos disparados con la colección. Cada archivo, sin retoque cromático.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 md:gap-12">
        {gallery.map((g, i) => (
          <figure
            key={g.caption}
            className={`group ${i % 2 === 1 ? "md:mt-24" : ""}`}
            data-reveal
          >
            <div className={`overflow-hidden ${g.aspect} bg-neutral-950`}>
              <img
                src={g.src}
                alt={g.caption}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-[1600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                data-zoom
              />
            </div>
            <figcaption className="mt-5 flex justify-between items-baseline text-xs">
              <span className="italic text-platinum/80">{g.caption}</span>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-platinum/40">
                {g.shot}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function SpecsTable() {
  const rows: [string, string, string, string][] = [
    ["Sensor", "Full Frame 61MP", "Medio formato 100MP", "Super 35 CMOS"],
    ["ISO nativo", "100 – 51.200", "50 – 25.600", "800 / 5.000 dual"],
    ["Obturador", "Silencioso 1/16000", "Central + focal", "Global rolling"],
    ["Vídeo", "6K 60fps 10-bit", "4K 30fps ProRes", "8K 120fps RAW"],
    ["Visor", "OLED 5,76M", "OLED 9,44M", "EVF 4,4M + monitor"],
    ["Sellado", "IP53", "IP54", "IP52 cage-ready"],
    ["Peso", "480 g", "1.300 g", "1.800 g"],
    ["Precio", "€ 4.200", "€ 8.900", "€ 12.500"],
  ];
  return (
    <section id="specs" className="py-32 md:py-40 px-6 md:px-12 border-t border-hairline">
      <div className="mb-16" data-reveal>
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-precision">
          07 / Ficha técnica
        </span>
        <h2 className="mt-6 font-display text-5xl md:text-7xl leading-[0.9]">TODO EN NÚMEROS</h2>
      </div>

      <div className="overflow-x-auto" data-reveal>
        <table className="w-full min-w-[720px] border-collapse font-mono text-xs">
          <thead>
            <tr className="border-b border-hairline">
              <th className="text-left py-5 pr-4 text-[10px] uppercase tracking-[0.25em] text-platinum/40 w-1/4">
                Spec
              </th>
              <th className="text-left py-5 pr-4 text-[10px] uppercase tracking-[0.25em]">M1</th>
              <th className="text-left py-5 pr-4 text-[10px] uppercase tracking-[0.25em]">XPRO</th>
              <th className="text-left py-5 pr-4 text-[10px] uppercase tracking-[0.25em]">V16</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r[0]} className="border-b border-hairline hover:bg-white/[0.02] transition-colors">
                <td className="py-5 pr-4 text-[10px] uppercase tracking-[0.25em] text-platinum/50">{r[0]}</td>
                <td className="py-5 pr-4 text-platinum/85">{r[1]}</td>
                <td className="py-5 pr-4 text-platinum/85">{r[2]}</td>
                <td className="py-5 pr-4 text-platinum/85">{r[3]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="py-32 md:py-48 px-6 md:px-12 border-t border-hairline bg-neutral-950/60">
      <div className="mb-20" data-reveal>
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-precision">
          08 / En manos de
        </span>
        <h2 className="mt-6 font-display text-5xl md:text-7xl leading-[0.9]">LAS QUE MIRAN</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-px bg-hairline border border-hairline">
        {testimonials.map((t) => (
          <blockquote key={t.author} className="bg-obsidian p-10 flex flex-col justify-between min-h-[340px]" data-reveal>
            <p className="text-lg leading-relaxed text-platinum/85 text-balance">"{t.quote}"</p>
            <footer className="mt-10 pt-6 border-t border-hairline">
              <div className="font-display text-2xl tracking-wide">{t.author}</div>
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-platinum/40 mt-1">
                {t.role}
              </div>
            </footer>
          </blockquote>
        ))}
      </div>

      <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-px bg-hairline border border-hairline" data-reveal>
        {["TIPA Awards", "Red Dot 2025", "iF Design Gold", "EISA Camera"].map((a) => (
          <div key={a} className="bg-obsidian p-8 text-center font-mono text-[10px] uppercase tracking-[0.25em] text-platinum/60">
            {a}
          </div>
        ))}
      </div>
    </section>
  );
}

function FooterCta() {
  return (
    <footer className="relative pt-32 md:pt-48 pb-12 px-6 md:px-12 bg-neutral-950 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center relative z-10" data-reveal>
        <h2 className="font-display text-[clamp(5rem,18vw,15rem)] leading-[0.85] tracking-tight text-platinum/10 select-none pointer-events-none">
          PRECISION
        </h2>
        <div className="-mt-8 md:-mt-24 relative z-10 space-y-10">
          <p className="text-xl md:text-2xl max-w-xl mx-auto text-platinum/80">
            Únete a la sociedad de los obsesionados. Deep-dives técnicos y acceso anticipado a nuevos cuerpos.
          </p>
          <form className="w-full max-w-md mx-auto flex border-b border-platinum/20 pb-3">
            <input
              type="email"
              placeholder="tu@correo.com"
              className="bg-transparent flex-grow outline-none font-mono text-sm tracking-wider placeholder:text-platinum/30"
            />
            <button className="text-precision font-mono text-xs uppercase tracking-[0.25em] hover:text-white transition-colors">
              Suscribir →
            </button>
          </form>
        </div>
      </div>

      <div className="mt-32 pt-8 border-t border-hairline flex flex-col md:flex-row justify-between items-center gap-6">
        <span className="font-display text-xl tracking-[0.2em]">OPTIKA</span>
        <span className="font-mono text-[10px] text-platinum/30 tracking-[0.25em] uppercase">
          © 2026 OPTIKA Photography Systems · Munich
        </span>
        <div className="flex gap-8 font-mono text-[10px] text-platinum/30 tracking-[0.25em] uppercase">
          <a href="#" className="hover:text-white">Legal</a>
          <a href="#" className="hover:text-white">Privacidad</a>
          <a href="#" className="hover:text-white">Soporte</a>
        </div>
      </div>
    </footer>
  );
}
