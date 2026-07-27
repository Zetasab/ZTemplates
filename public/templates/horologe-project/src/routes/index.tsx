import { createFileRoute } from "@tanstack/react-router";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";
import { useScrollAnimations } from "@/hooks/use-scroll-animations";

import heroImg from "@/assets/hero-tourbillon.jpg";
import heritageImg from "@/assets/heritage-watch.jpg";
import nexusImg from "@/assets/nexus-digital.jpg";
import craftMovement from "@/assets/craft-movement.jpg";
import craftFinishing from "@/assets/craft-finishing.jpg";
import craftAssembly from "@/assets/craft-assembly.jpg";
import modelDiver from "@/assets/model-diver.jpg";
import modelChrono from "@/assets/model-chrono.jpg";
import modelSkeleton from "@/assets/model-skeleton.jpg";
import modelDress from "@/assets/model-dress.jpg";
import featuredMacro from "@/assets/featured-macro.jpg";
import boutiqueImg from "@/assets/boutique.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Horologe — Relojes de Lujo Analógicos y Digitales" },
      {
        name: "description",
        content:
          "Horologe diseña y ensambla a mano relojes de lujo analógicos y digitales. Una manufactura independiente entre el oficio centenario y la ingeniería contemporánea.",
      },
      { property: "og:title", content: "Horologe — Relojes de Lujo" },
      {
        property: "og:description",
        content:
          "Una maison de relojería independiente. Colecciones Heritage analógica y Nexus digital, hechas a mano en titanio, oro y zafiro.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  useSmoothScroll();
  useScrollAnimations();

  return (
    <div className="bg-background text-foreground font-sans selection:bg-accent/30 overflow-x-hidden">
      <Nav />
      <Hero />
      <Manifesto />
      <Heritage />
      <ModelsShowcase />
      <Nexus />
      <Craftsmanship />
      <MaterialsData />
      <Featured />
      <Testimonials />
      <Boutiques />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <nav className="fixed top-0 w-full z-50 px-6 md:px-10 py-6 flex justify-between items-center mix-blend-difference text-white">
      <span className="font-mono text-[10px] tracking-[0.3em] uppercase">Est. 1894</span>
      <div className="font-serif text-2xl italic tracking-tight">Horologe</div>
      <div className="hidden md:flex gap-8 font-mono text-[10px] tracking-widest uppercase">
        <a href="#heritage" className="hover:text-accent transition-colors">Heritage</a>
        <a href="#nexus" className="hover:text-accent transition-colors">Nexus</a>
        <a href="#atelier" className="hover:text-accent transition-colors">Atelier</a>
        <a href="#boutiques" className="hover:text-accent transition-colors">Boutiques</a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-onyx">
      <div className="absolute inset-0 opacity-60">
        <img
          src={heroImg}
          alt="Movimiento tourbillon de un reloj de lujo Horologe"
          width={1920}
          height={1280}
          className="w-full h-full object-cover animate-scale"
          data-parallax="0.3"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-onyx/40 via-transparent to-onyx" />
      <div className="relative z-10 text-center px-6">
        <p className="font-mono text-accent text-[11px] tracking-[0.4em] uppercase mb-6 animate-track">
          The Masterpiece Series
        </p>
        <h1 className="font-serif text-6xl sm:text-7xl md:text-9xl text-white italic leading-[0.95] animate-reveal [animation-delay:400ms]">
          Aurelius <span className="not-italic font-light opacity-50">III</span>
        </h1>
        <p className="mt-8 max-w-md mx-auto text-white/60 text-sm leading-relaxed animate-reveal [animation-delay:600ms]">
          Un tourbillon volante de 72 horas. Caja de oro champán 18k. Una sola edición por mes.
        </p>
        <div className="mt-12 animate-reveal [animation-delay:800ms]">
          <a
            href="#heritage"
            className="inline-block px-10 py-4 border border-white/20 text-white font-mono text-[10px] tracking-widest uppercase hover:bg-white hover:text-onyx transition-all duration-500"
          >
            Explore Engineering
          </a>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 font-mono text-[10px] text-white/40 tracking-[0.3em] uppercase animate-reveal [animation-delay:1200ms]">
        Scroll
      </div>
    </section>
  );
}

function Manifesto() {
  return (
    <section className="py-40 px-6 md:px-12 max-w-6xl mx-auto">
      <span className="font-mono text-[10px] text-accent tracking-widest uppercase mb-10 block" data-reveal>
        — Manifiesto
      </span>
      <h2
        className="font-serif text-3xl md:text-5xl lg:text-6xl leading-tight text-pretty"
        data-split
      >
        El tiempo no se mide. Se construye, grano a grano, sobre un banco de madera en una manufactura del Jura, por manos que han aprendido a escuchar el latido de un volante.
      </h2>
    </section>
  );
}

function Heritage() {
  return (
    <section id="heritage" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-16 md:gap-20 items-end">
        <div className="md:w-1/2" data-reveal>
          <span className="font-mono text-[10px] text-accent tracking-widest uppercase mb-4 block">
            Heritage Collection
          </span>
          <h2 className="font-serif text-4xl md:text-6xl text-pretty mb-8 leading-[1.05]">
            The silent rhythm of mechanical perfection.
          </h2>
          <p className="max-w-md text-muted leading-relaxed mb-10">
            Nuestra línea Heritage celebra la precisión pausada de los movimientos de cuerda manual, encerrados en oro champán de 18k y cristal de zafiro abovedado. Cada caja recibe seis meses de calibración antes de abandonar el atelier.
          </p>
          <dl className="grid grid-cols-2 gap-6 border-t border-foreground/10 pt-8 max-w-md">
            <div>
              <dt className="font-mono text-[10px] text-muted uppercase tracking-widest mb-2">Caliber</dt>
              <dd className="text-sm">4131 — Cuerda manual</dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] text-muted uppercase tracking-widest mb-2">Reserve</dt>
              <dd className="text-sm">72 horas</dd>
            </div>
          </dl>
        </div>
        <div className="md:w-1/2 w-full overflow-hidden">
          <img
            src={heritageImg}
            alt="Reloj analógico Horologe Heritage con correa de cuero"
            width={1024}
            height={1280}
            loading="lazy"
            className="w-full aspect-[4/5] object-cover"
            data-parallax="0.15"
          />
        </div>
      </div>
    </section>
  );
}

const models = [
  { name: "Aurelius III", category: "Masterpiece — Oro champán", img: modelDress },
  { name: "Odyssey Diver", category: "Sport — Acero / Cerámica", img: modelDiver },
  { name: "Chronos Panda", category: "Chronograph — Acero", img: modelChrono },
  { name: "Aether Skeleton", category: "Skeleton — Oro rosa", img: modelSkeleton },
];

function ModelsShowcase() {
  return (
    <section className="bg-onyx text-white">
      <div className="px-6 md:px-12 pt-32 pb-16 max-w-7xl mx-auto">
        <span className="font-mono text-[10px] text-accent tracking-widest uppercase mb-4 block" data-reveal>
          — La Colección
        </span>
        <h2 className="font-serif text-4xl md:text-6xl italic leading-tight max-w-3xl" data-reveal>
          Cuatro siluetas. Un mismo obsesivo estándar.
        </h2>
      </div>

      <div data-horizontal className="relative h-screen overflow-hidden">
        <div
          data-horizontal-track
          className="absolute top-0 left-0 h-full flex items-center gap-8 px-6 md:px-12 will-change-transform"
        >
          {models.map((m, i) => (
            <article
              key={m.name}
              className="relative shrink-0 w-[80vw] md:w-[50vw] lg:w-[38vw] h-[78vh]"
            >
              <div className="relative w-full h-full overflow-hidden">
                <img
                  src={m.img}
                  alt={`${m.name} — ${m.category}`}
                  width={900}
                  height={1200}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-onyx/70 via-transparent to-transparent" />
              </div>
              <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between">
                <div>
                  <span className="font-mono text-[10px] text-accent tracking-widest uppercase block mb-2">
                    {String(i + 1).padStart(2, "0")} / {String(models.length).padStart(2, "0")}
                  </span>
                  <h3 className="font-serif text-3xl md:text-4xl italic">{m.name}</h3>
                  <p className="font-mono text-[10px] text-white/50 tracking-widest uppercase mt-2">
                    {m.category}
                  </p>
                </div>
              </div>
            </article>
          ))}
          <div className="shrink-0 w-12" />
        </div>
      </div>
    </section>
  );
}

function Nexus() {
  return (
    <section id="nexus" className="bg-onyx-soft text-white py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="overflow-hidden" data-reveal>
          <img
            src={nexusImg}
            alt="Nexus Digital — reloj de titanio con OLED"
            width={1200}
            height={1200}
            loading="lazy"
            className="w-full aspect-square object-cover"
            data-parallax="0.1"
          />
        </div>
        <div className="flex flex-col justify-center" data-reveal>
          <span className="font-mono text-accent text-[10px] tracking-widest uppercase mb-4">
            The Nexus Line
          </span>
          <h2 className="font-serif text-4xl md:text-6xl mb-8 italic leading-[1.05]">
            The Intelligence of Light
          </h2>
          <p className="text-white/60 leading-relaxed mb-10 max-w-md">
            La herencia encuentra la innovación. Un chasis de titanio grado 5 que alberga un núcleo digital propietario, diseñado para el navegante moderno que exige precisión sin renunciar a la elegancia.
          </p>
          <div className="grid grid-cols-2 gap-x-8 gap-y-8 border-t border-white/10 pt-10">
            {[
              ["Case", "Titanio Grado 5"],
              ["Power", "72 Hour Reserve"],
              ["Display", "OLED Always-On"],
              ["Sensors", "Bio-Metric Sync"],
            ].map(([k, v]) => (
              <div key={k}>
                <span className="block font-mono text-[10px] text-white/40 uppercase mb-2 tracking-widest">{k}</span>
                <span className="text-sm tracking-wide">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const crafts = [
  { n: "01", title: "Mechanical", img: craftMovement, desc: "Movement" },
  { n: "02", title: "Hand-Polished", img: craftFinishing, desc: "Finishing" },
  { n: "03", title: "Master Built", img: craftAssembly, desc: "Assembly" },
];

function Craftsmanship() {
  return (
    <section id="atelier" className="py-32 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20" data-reveal>
          <h2 className="font-serif text-3xl md:text-5xl mb-4 italic">Built for the Centuries</h2>
          <div className="w-12 h-px bg-accent mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          {crafts.map((c) => (
            <div key={c.n} className="group relative overflow-hidden" data-reveal>
              <img
                src={c.img}
                alt={c.title}
                width={800}
                height={1024}
                loading="lazy"
                className="w-full aspect-[3/4] object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1200ms] ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-onyx/70 via-onyx/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-8 left-8 right-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="font-mono text-[10px] uppercase tracking-widest text-accent">
                  {c.n}. {c.title}
                </p>
                <p className="font-serif italic text-2xl mt-1">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MaterialsData() {
  const stats: Array<[string, number, string]> = [
    ["Componentes por reloj", 384, "ensamblados a mano"],
    ["Horas de calibración", 720, "por cada caja"],
    ["Países", 14, "donde habitan nuestras boutiques"],
    ["Años desde 1894", 131, "de oficio ininterrumpido"],
  ];
  return (
    <section className="bg-foreground text-background py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <span className="font-mono text-[10px] text-accent tracking-widest uppercase mb-12 block" data-reveal>
          — En cifras
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {stats.map(([label, value, sub]) => (
            <div key={label} data-reveal>
              <div className="flex items-baseline">
                <span
                  className="font-serif text-6xl md:text-7xl italic text-accent tabular-nums"
                  data-counter={value}
                >
                  0
                </span>
              </div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-background/60 mt-4 mb-1">
                {label}
              </p>
              <p className="text-sm text-background/50">{sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Featured() {
  const details: Array<[string, string]> = [
    ["Caja", "Acero pulido y satinado, 40mm"],
    ["Esfera", "Negro lacado, índices de oro"],
    ["Movimiento", "Caliber HRG-9 automático"],
    ["Cristal", "Zafiro doble curvatura"],
    ["Hermeticidad", "100 metros"],
    ["Edición", "Limitada a 250 piezas"],
  ];
  return (
    <section className="py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="overflow-hidden order-2 lg:order-1" data-reveal>
          <img
            src={featuredMacro}
            alt="Detalle de corona de un reloj Horologe"
            width={1400}
            height={1600}
            loading="lazy"
            className="w-full aspect-[7/8] object-cover"
            data-parallax="0.2"
          />
        </div>
        <div className="order-1 lg:order-2" data-reveal>
          <span className="font-mono text-[10px] text-accent tracking-widest uppercase mb-4 block">
            Featured Piece
          </span>
          <h2 className="font-serif text-4xl md:text-5xl italic leading-tight mb-8">
            Aurelius III — <br />una sola pieza por mes.
          </h2>
          <p className="text-muted leading-relaxed mb-12 max-w-md">
            Cada Aurelius requiere doce semanas de ensamblaje. Una sola persona lo arma de principio a fin, firmando el certificado con la fecha exacta del último torque.
          </p>
          <dl className="divide-y divide-foreground/10 border-t border-foreground/10">
            {details.map(([k, v]) => (
              <div key={k} className="flex justify-between py-4">
                <dt className="font-mono text-[10px] text-muted uppercase tracking-widest">{k}</dt>
                <dd className="text-sm text-right">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

const quotes = [
  {
    text: "Un objeto que parece pertenecer a otro siglo y, al mismo tiempo, al próximo.",
    author: "Hodinkee",
  },
  {
    text: "El silencio mecánico mejor calibrado que hemos tenido en las manos.",
    author: "Revolution Magazine",
  },
  {
    text: "La línea Nexus redefine lo que un reloj digital puede aspirar a ser.",
    author: "Monocle",
  },
];

function Testimonials() {
  return (
    <section className="bg-background py-40 px-6 md:px-12">
      <div className="max-w-5xl mx-auto space-y-32">
        {quotes.map((q) => (
          <figure key={q.author} className="text-center" data-reveal>
            <blockquote className="font-serif italic text-3xl md:text-5xl leading-tight text-balance">
              “{q.text}”
            </blockquote>
            <figcaption className="font-mono text-[10px] tracking-[0.3em] uppercase text-accent mt-8">
              — {q.author}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function Boutiques() {
  const cities = [
    ["Ginebra", "Rue du Rhône 12"],
    ["París", "Place Vendôme 8"],
    ["Tokio", "Ginza 4-Chōme"],
    ["Nueva York", "Madison Avenue 745"],
    ["Madrid", "Calle Serrano 32"],
    ["Singapur", "Marina Bay 2"],
  ];
  return (
    <section id="boutiques" className="bg-onyx text-white py-32 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <div data-reveal>
          <span className="font-mono text-[10px] text-accent tracking-widest uppercase mb-4 block">
            Boutiques
          </span>
          <h2 className="font-serif text-4xl md:text-5xl italic mb-12 leading-tight">
            Recibimos por cita. <br />En seis continentes.
          </h2>
          <ul className="divide-y divide-white/10 border-t border-white/10">
            {cities.map(([city, addr]) => (
              <li key={city} className="flex justify-between py-4 group cursor-default">
                <span className="font-serif text-xl group-hover:text-accent transition-colors">
                  {city}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-white/40 self-center">
                  {addr}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="overflow-hidden" data-reveal>
          <img
            src={boutiqueImg}
            alt="Interior de la boutique Horologe en Ginebra"
            width={1600}
            height={1000}
            loading="lazy"
            className="w-full aspect-[4/5] object-cover"
            data-parallax="0.15"
          />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-background border-t border-foreground/10 py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="mb-4 md:mb-0">
          <h3 className="font-serif text-3xl italic mb-6">Horologe</h3>
          <p className="text-muted max-w-xs text-sm leading-relaxed">
            The pursuit of time is the pursuit of truth. Visite nuestras boutiques alrededor del mundo.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-16">
          <div className="space-y-4">
            <span className="font-mono text-[10px] tracking-widest uppercase text-accent block">Europa</span>
            <p className="text-xs text-muted leading-relaxed">
              Rue du Rhône 12,
              <br />
              Ginebra, Suiza
            </p>
          </div>
          <div className="space-y-4">
            <span className="font-mono text-[10px] tracking-widest uppercase text-accent block">Contacto</span>
            <p className="text-xs text-muted leading-relaxed">
              atelier@horologe.com
              <br />
              +41 22 555 0192
            </p>
          </div>
          <div className="space-y-4 col-span-2 md:col-span-1">
            <span className="font-mono text-[10px] tracking-widest uppercase text-accent block">Legal</span>
            <p className="text-xs text-muted leading-relaxed uppercase tracking-tighter">
              Privacy • Terms • Authenticity
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-foreground/10 flex justify-between items-center">
        <span className="font-mono text-[10px] text-muted uppercase tracking-widest">© 2026 Horologe SA</span>
        <div className="flex gap-3">
          <div className="w-2 h-2 rounded-full bg-accent" />
          <div className="w-2 h-2 rounded-full bg-foreground/10" />
        </div>
      </div>
    </footer>
  );
}
