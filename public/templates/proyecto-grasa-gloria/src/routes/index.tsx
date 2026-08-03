import { createFileRoute } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";

import heroBurger from "@/assets/hero-burger.jpg";
import burgerNeonBird from "@/assets/burger-neon-bird.jpg";
import burgerOgSmash from "@/assets/burger-og-smash.jpg";
import burgerMidnightHeat from "@/assets/burger-midnight-heat.jpg";
import burgerHotHoney from "@/assets/burger-hot-honey.jpg";
import burgerTruffle from "@/assets/burger-truffle.jpg";
import burgerKorean from "@/assets/burger-korean.jpg";
import processChef from "@/assets/process-chef.jpg";
import vibeStreet from "@/assets/vibe-street.jpg";
import vibeHands from "@/assets/vibe-hands.jpg";
import ingredientsFlatlay from "@/assets/ingredients-flatlay.jpg";
import mapImg from "@/assets/map.jpg";

export const Route = createFileRoute("/")({
  component: Landing,
});

type Burger = {
  name: string;
  desc: string;
  price: string;
  img: string;
  badge?: string;
  tag: string;
};

const BURGERS: Burger[] = [
  {
    name: "The Neon Bird",
    desc: "Pollo frito en suero de leche, alioli de sriracha, col morada encurtida y brioche artesano.",
    price: "12,50",
    img: burgerNeonBird,
    badge: "Best Seller",
    tag: "Pollo",
  },
  {
    name: "The OG Smash",
    desc: "Doble ternera gallega 180g, cheddar ahumado, cebolla caramelizada y salsa Grasa.",
    price: "13,90",
    img: burgerOgSmash,
    tag: "Carne",
  },
  {
    name: "Midnight Heat",
    desc: "Doble smash, jalapeño jam, pepper jack y mayonesa picante fermentada.",
    price: "14,50",
    img: burgerMidnightHeat,
    badge: "Picante",
    tag: "Carne",
  },
  {
    name: "Hot Honey",
    desc: "Pollo crujiente bañado en miel picante, pepinillos y brioche tostado en mantequilla.",
    price: "12,90",
    img: burgerHotHoney,
    tag: "Pollo",
  },
  {
    name: "Trufa del Ghetto",
    desc: "Ternera madurada, mayo de trufa negra, rúcula, cheddar añejo y pan brioche dorado.",
    price: "16,50",
    img: burgerTruffle,
    badge: "Edición",
    tag: "Carne",
  },
  {
    name: "Seoul Block",
    desc: "Pollo estilo coreano, gochujang, kimchi slaw y sésamo tostado.",
    price: "13,50",
    img: burgerKorean,
    badge: "Nuevo",
    tag: "Pollo",
  },
];

function Landing() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className="bg-base text-zinc-100 font-sans selection:bg-brand selection:text-base"
    >
      <Nav />
      <Hero />
      <Menu />
      <Process />
      <Ingredients />
      <Barrio />
      <Testimonials />
      <Marquee />
      <Location />
      <FinalCTA />
      <Footer />
    </div>
  );
}

/* ---------------------------------------------------------------- Nav */
function Nav() {
  return (
    <nav className="fixed top-0 z-50 w-full px-6 py-6 md:px-12 mix-blend-difference">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        <a href="#top" className="font-display text-xl font-semibold tracking-tight">
          Grasa <span className="text-brand">&</span> Gloria
        </a>
        <div className="hidden md:flex items-center gap-10 text-sm font-medium">
          <a href="#carta" className="hover:text-brand transition-colors">La Carta</a>
          <a href="#proceso" className="hover:text-brand transition-colors">Proceso</a>
          <a href="#barrio" className="hover:text-brand transition-colors">Barrio</a>
          <a href="#local" className="hover:text-brand transition-colors">Local</a>
        </div>
        <a
          href="#carta"
          className="bg-brand text-base font-medium text-xs md:text-sm px-5 py-2.5 rounded-full ring-1 ring-brand hover:scale-[1.03] active:scale-95 transition-transform"
        >
          Pedir ahora
        </a>
      </div>
    </nav>
  );
}

/* --------------------------------------------------------------- Hero */
function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen overflow-hidden flex flex-col justify-end pb-24 px-6 md:px-12"
    >
      <div className="absolute inset-0 z-0">
        <img
          data-hero-zoom
          src={heroBurger}
          alt="Doble smash burger con queso fundido bajo luces de neón"
          width={1920}
          height={1280}
          className="w-full h-full object-cover opacity-70 will-change-transform"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-base via-base/60 to-transparent" />
      </div>

      <div className="relative z-10 max-w-screen-xl mx-auto w-full">
        <div className="max-w-[32ch]">
          <span
            data-reveal
            className="text-brand uppercase tracking-[0.25em] text-xs md:text-sm font-medium mb-6 block"
          >
            Establecido en el bloque · Since 2022
          </span>
          <h1
            data-reveal
            data-reveal-delay="0.1"
            className="text-6xl md:text-8xl lg:text-9xl font-semibold font-display leading-[0.85] tracking-tighter text-balance mb-8"
          >
            GRASA <br />
            <span className="text-brand">& GLORIA</span>
          </h1>
          <p
            data-reveal
            data-reveal-delay="0.2"
            className="text-lg md:text-xl text-zinc-300 max-w-[46ch] mb-10 text-pretty"
          >
            Smash burgers de carne y pollo con toques únicos. Nacidas en la esquina,
            hechas para los chavales del barrio. Sin franquicias, sin atajos.
          </p>
        </div>
        <div
          data-reveal
          data-reveal-delay="0.3"
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#carta"
            className="bg-brand text-base font-medium text-sm px-8 py-4 rounded-full ring-1 ring-brand hover:scale-[1.03] active:scale-95 transition-transform text-center"
          >
            Ver la carta
          </a>
          <a
            href="#proceso"
            className="border border-zinc-700 hover:border-brand hover:text-brand text-zinc-100 font-medium text-sm px-8 py-4 rounded-full transition-colors text-center"
          >
            Nuestra historia
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 z-10 hidden md:flex items-center gap-3 text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-500">
        <span className="w-8 h-px bg-zinc-700" />
        Scroll
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- Menu */
function Menu() {
  return (
    <section id="carta" className="py-32 md:py-40 px-6 md:px-12 bg-base">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <div className="max-w-[45ch]">
            <span
              data-reveal
              className="text-brand uppercase tracking-widest text-xs font-medium mb-4 block"
            >
              La Carta
            </span>
            <h2
              data-reveal
              data-reveal-delay="0.05"
              className="text-4xl md:text-6xl font-semibold font-display leading-[0.95] text-balance mb-6"
            >
              Nuestros pesos pesados.
            </h2>
            <p data-reveal data-reveal-delay="0.1" className="text-zinc-400 text-pretty text-lg">
              Inspiradas en las calles, perfeccionadas en la plancha. Carne de pasto,
              pollo crujiente y salsas secretas que no verás en ningún otro sitio.
            </p>
          </div>
          <div
            data-reveal
            className="flex items-center gap-3 text-brand text-sm font-medium"
          >
            <span>6 clásicos</span>
            <div className="w-16 h-px bg-brand/40" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
          {BURGERS.map((b, i) => (
            <article
              key={b.name}
              data-reveal
              data-reveal-delay={(i % 3) * 0.08}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl mb-6 bg-surface aspect-[4/5]">
                <img
                  src={b.img}
                  alt={b.name}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                />
                {b.badge && (
                  <div className="absolute top-4 right-4 bg-brand text-base text-[10px] font-semibold px-3 py-1 rounded-full uppercase tracking-widest">
                    {b.badge}
                  </div>
                )}
                <div className="absolute top-4 left-4 border border-zinc-100/20 bg-black/30 backdrop-blur-sm text-zinc-100 text-[10px] font-medium px-3 py-1 rounded-full uppercase tracking-widest">
                  {b.tag}
                </div>
              </div>
              <div className="flex justify-between items-start gap-6">
                <div>
                  <h3 className="text-2xl font-semibold font-display mb-2">
                    {b.name}
                  </h3>
                  <p className="text-sm text-zinc-400 text-pretty max-w-[36ch]">
                    {b.desc}
                  </p>
                </div>
                <span className="text-xl font-display text-brand shrink-0">
                  {b.price}€
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ Process */
function Process() {
  const steps = [
    {
      n: "01",
      title: "Materia prima",
      copy: "Carne picada a diario en el local. Sin congelados, sin conservantes. Directo del mercado al grill.",
    },
    {
      n: "02",
      title: "El secreto",
      copy: "Nuestra salsa fermenta durante 48 horas para ese toque umami que te hace volver siempre.",
    },
    {
      n: "03",
      title: "La comunidad",
      copy: "Trabajamos con la panadería de la esquina. El brioche llega caliente cada mañana.",
    },
  ];

  return (
    <section
      id="proceso"
      className="relative py-32 md:py-48 bg-zinc-950 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 blur-[120px] bg-brand/20 rounded-full" />
        <div className="absolute bottom-20 right-10 w-96 h-96 blur-[140px] bg-brand/10 rounded-full" />
      </div>

      <div className="max-w-screen-xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5">
            <span
              data-reveal
              className="text-brand uppercase tracking-widest text-xs font-medium mb-4 block"
            >
              El Proceso
            </span>
            <h2
              data-reveal
              data-reveal-delay="0.05"
              className="text-4xl md:text-6xl font-semibold font-display leading-[0.95] mb-12 max-w-[16ch]"
            >
              Sin trucos. Solo barrio.
            </h2>
            <div className="space-y-10">
              {steps.map((s, i) => (
                <div
                  key={s.n}
                  data-reveal
                  data-reveal-delay={i * 0.08}
                  className={`border-l pl-8 ${
                    i === 0 ? "border-brand/60" : "border-zinc-800"
                  }`}
                >
                  <div className="flex items-baseline gap-4 mb-2">
                    <span className="text-xs font-mono text-brand tracking-widest">
                      {s.n}
                    </span>
                    <h4 className="text-xl font-medium font-display">{s.title}</h4>
                  </div>
                  <p className="text-sm text-zinc-400 max-w-[38ch] leading-relaxed">
                    {s.copy}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 relative">
            <div
              data-reveal
              className="relative rounded-2xl overflow-hidden ring-1 ring-white/5"
            >
              <img
                src={processChef}
                alt="Chef aplastando una hamburguesa en la plancha caliente"
                loading="lazy"
                width={1600}
                height={1100}
                className="w-full aspect-video object-cover"
              />
            </div>
            <div
              data-reveal
              data-reveal-delay="0.15"
              className="absolute -bottom-10 -left-6 md:-left-12 hidden md:block w-56 bg-brand text-base rounded-2xl p-6 shadow-2xl shadow-brand/10"
            >
              <p className="text-base font-semibold leading-tight font-display italic">
                "La mejor burger que he probado en mi vida."
              </p>
              <p className="text-[10px] mt-4 opacity-70 uppercase tracking-widest font-medium">
                Leyenda local · Vallecas
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------- Ingredients */
function Ingredients() {
  const items = [
    "Ternera gallega",
    "Pollo suero de leche",
    "Brioche artesano",
    "Salsa fermentada 48h",
    "Verduras del mercado",
    "Queso ahumado",
  ];
  return (
    <section className="relative py-32 md:py-40 overflow-hidden bg-base">
      <div className="absolute inset-0 z-0 opacity-30">
        <img
          data-parallax
          data-parallax-speed="0.25"
          src={ingredientsFlatlay}
          alt=""
          aria-hidden="true"
          loading="lazy"
          width={1600}
          height={1000}
          className="w-full h-[130%] object-cover will-change-transform"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-base via-base/70 to-base" />
      </div>

      <div className="relative z-10 max-w-screen-xl mx-auto px-6 md:px-12">
        <div className="max-w-[45ch] mb-16">
          <span
            data-reveal
            className="text-brand uppercase tracking-widest text-xs font-medium mb-4 block"
          >
            Ingredientes
          </span>
          <h2
            data-reveal
            data-reveal-delay="0.05"
            className="text-4xl md:text-6xl font-semibold font-display leading-[0.95] text-balance"
          >
            Producto real, sin postureo.
          </h2>
        </div>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-px bg-zinc-800/60 border border-zinc-800/60 rounded-2xl overflow-hidden">
          {items.map((item, i) => (
            <li
              key={item}
              data-reveal
              data-reveal-delay={(i % 3) * 0.06}
              className="bg-base/90 backdrop-blur-sm p-8 md:p-10 flex items-baseline gap-4"
            >
              <span className="text-xs font-mono text-brand tracking-widest">
                0{i + 1}
              </span>
              <span className="text-lg md:text-xl font-display font-medium">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- Barrio */
function Barrio() {
  return (
    <section id="barrio" className="py-32 md:py-40 bg-zinc-100 text-zinc-950">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
            <img
              data-reveal
              src={vibeStreet}
              alt="Amigos delante del local por la noche"
              loading="lazy"
              width={900}
              height={1200}
              className="w-full aspect-[3/4] object-cover rounded-2xl"
            />
            <img
              data-reveal
              data-reveal-delay="0.1"
              src={vibeHands}
              alt="Manos sujetando una hamburguesa envuelta en papel de la marca"
              loading="lazy"
              width={900}
              height={1200}
              className="w-full aspect-[3/4] object-cover rounded-2xl mt-12"
            />
          </div>
          <div className="order-1 lg:order-2">
            <span
              data-reveal
              className="text-zinc-500 uppercase tracking-widest text-xs font-medium mb-4 block"
            >
              El Barrio
            </span>
            <h2
              data-reveal
              data-reveal-delay="0.05"
              className="text-4xl md:text-6xl font-semibold font-display leading-[0.95] mb-8 text-balance"
            >
              Más que comida, es el barrio.
            </h2>
            <p
              data-reveal
              data-reveal-delay="0.1"
              className="text-lg text-zinc-600 mb-12 max-w-[42ch] text-pretty"
            >
              Nacimos en la esquina y seguimos en la esquina. No somos una franquicia,
              somos tu punto de encuentro después del insti, del curro o del skate.
            </p>
            <div
              data-reveal
              data-reveal-delay="0.15"
              className="grid grid-cols-3 gap-8"
            >
              <div>
                <p className="text-3xl md:text-4xl font-display font-semibold">
                  12k+
                </p>
                <p className="text-xs text-zinc-500 uppercase font-medium tracking-wider mt-1">
                  Smash servidas
                </p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-display font-semibold">
                  4.9
                </p>
                <p className="text-xs text-zinc-500 uppercase font-medium tracking-wider mt-1">
                  Rating local
                </p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-display font-semibold">
                  3
                </p>
                <p className="text-xs text-zinc-500 uppercase font-medium tracking-wider mt-1">
                  Años en el bloque
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------- Testimonials */
function Testimonials() {
  const quotes = [
    {
      q: "Vengo desde que abrieron. La Neon Bird es adictiva, en serio.",
      who: "Marta, 22 · Lavapiés",
    },
    {
      q: "La única smash que vale la cola. Y hay cola siempre.",
      who: "Dani, 19 · Vallekas",
    },
    {
      q: "Sitio de barrio, comida de tres estrellas. Sin pretenderlo.",
      who: "Chino, 27 · Malasaña",
    },
  ];
  return (
    <section className="py-32 md:py-40 px-6 md:px-12 bg-base border-t border-zinc-900">
      <div className="max-w-screen-xl mx-auto">
        <span
          data-reveal
          className="text-brand uppercase tracking-widest text-xs font-medium mb-4 block"
        >
          La voz del barrio
        </span>
        <h2
          data-reveal
          data-reveal-delay="0.05"
          className="text-4xl md:text-6xl font-semibold font-display leading-[0.95] mb-16 max-w-[20ch] text-balance"
        >
          Lo que dicen los que saben.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {quotes.map((t, i) => (
            <blockquote
              key={t.who}
              data-reveal
              data-reveal-delay={i * 0.08}
              className="border-t border-zinc-800 pt-8"
            >
              <p className="text-2xl md:text-3xl font-display font-medium leading-tight mb-8 text-balance">
                "{t.q}"
              </p>
              <footer className="text-xs uppercase tracking-widest text-zinc-500">
                {t.who}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ Marquee */
function Marquee() {
  const line = "Barrio · Smash · Cultura · Sin franquicia · Solo producto · ";
  return (
    <section
      aria-hidden="true"
      className="py-16 overflow-hidden bg-base border-y border-zinc-900"
    >
      <div className="flex whitespace-nowrap animate-[gg-marquee_30s_linear_infinite]">
        {Array.from({ length: 4 }).map((_, i) => (
          <span
            key={i}
            className="text-6xl md:text-8xl font-display font-semibold text-brand/20 mx-8 tracking-tighter"
          >
            {line.repeat(1)}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes gg-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}

/* ----------------------------------------------------------- Location */
function Location() {
  return (
    <section id="local" className="py-24 md:py-32 px-6 md:px-12 bg-base">
      <div className="max-w-screen-xl mx-auto border-t border-zinc-900 pt-16 md:pt-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="md:col-span-2">
            <span
              data-reveal
              className="text-brand uppercase tracking-widest text-xs font-medium mb-4 block"
            >
              El Local
            </span>
            <h2
              data-reveal
              data-reveal-delay="0.05"
              className="text-4xl md:text-5xl font-semibold font-display leading-[0.95] mb-12"
            >
              Dónde estamos.
            </h2>
            <div
              data-reveal
              data-reveal-delay="0.1"
              className="relative aspect-video w-full rounded-2xl overflow-hidden ring-1 ring-zinc-800"
            >
              <img
                src={mapImg}
                alt="Mapa del barrio con la ubicación de Grasa & Gloria"
                loading="lazy"
                width={1400}
                height={900}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col justify-end">
            <div className="space-y-8" data-reveal data-reveal-delay="0.1">
              <div>
                <h4 className="text-brand uppercase text-[10px] tracking-widest font-semibold mb-3">
                  Localización
                </h4>
                <p className="text-lg font-medium leading-snug">
                  Calle de la Grasa, 42<br />
                  Madrid, ES 28012
                </p>
              </div>
              <div>
                <h4 className="text-brand uppercase text-[10px] tracking-widest font-semibold mb-3">
                  Horario
                </h4>
                <p className="text-sm text-zinc-400">Lun — Jue · 13:00 - 23:00</p>
                <p className="text-sm text-zinc-400">Vie — Dom · 13:00 - 01:00</p>
              </div>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm font-medium hover:text-brand transition-colors"
              >
                <svg
                  className="size-4 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Cómo llegar
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------- Final CTA */
function FinalCTA() {
  return (
    <section className="py-32 md:py-48 px-6 md:px-12 bg-base text-center">
      <div className="max-w-screen-xl mx-auto">
        <h2
          data-reveal
          className="font-display font-semibold uppercase tracking-tighter leading-[0.85] text-[16vw] md:text-[13vw] text-balance"
        >
          Ven al <span className="text-brand italic">barrio.</span>
        </h2>
        <div
          data-reveal
          data-reveal-delay="0.1"
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#carta"
            className="bg-brand text-base font-medium text-sm px-10 py-4 rounded-full ring-1 ring-brand hover:scale-[1.03] active:scale-95 transition-transform"
          >
            Pedir online
          </a>
          <a
            href="#local"
            className="border border-zinc-700 hover:border-brand hover:text-brand text-zinc-100 font-medium text-sm px-10 py-4 rounded-full transition-colors"
          >
            Ver localización
          </a>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- Footer */
function Footer() {
  return (
    <footer className="py-16 px-6 md:px-12 bg-base border-t border-zinc-900">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
        <div>
          <p className="font-display text-3xl font-semibold mb-3 tracking-tighter">
            Grasa <span className="text-brand">&</span> Gloria
          </p>
          <p className="text-zinc-500 text-sm max-w-[40ch]">
            Hamburguesas de verdad para gente de verdad. Hechas con amor, plancha caliente
            y un poco de mala leche.
          </p>
        </div>
        <div className="flex gap-8">
          <a href="#" className="text-sm font-medium hover:text-brand transition-colors">
            Instagram
          </a>
          <a href="#" className="text-sm font-medium hover:text-brand transition-colors">
            TikTok
          </a>
          <a href="#" className="text-sm font-medium hover:text-brand transition-colors">
            Twitter
          </a>
        </div>
        <div className="text-right">
          <p className="text-[10px] text-zinc-600 uppercase tracking-widest">
            © 2026 Grasa & Gloria
          </p>
        </div>
      </div>
    </footer>
  );
}
