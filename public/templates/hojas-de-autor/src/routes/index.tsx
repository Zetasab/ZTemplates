import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";

import heroFiddle from "@/assets/hero-fiddle.jpg";
import manifestoLeaf from "@/assets/manifesto-leaf.jpg";
import colSmall from "@/assets/col-small.jpg";
import colMedium from "@/assets/col-medium.jpg";
import colLarge from "@/assets/col-large.jpg";
import parallax1 from "@/assets/parallax-1.jpg";
import parallax2 from "@/assets/parallax-2.jpg";
import testimonialImg from "@/assets/testimonial.jpg";
import varietyVariegated from "@/assets/variety-variegated.jpg";
import varietyPurple from "@/assets/variety-purple.jpg";
import varietySilver from "@/assets/variety-silver.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hojas de Autor — Plantas decorativas de lujo para el hogar" },
      {
        name: "description",
        content:
          "Curaduría editorial de plantas decorativas para el hogar. Especímenes de todos los tamaños y colores, aclimatados en nuestro invernadero antes de llegar a ti.",
      },
      { property: "og:title", content: "Hojas de Autor — Esculturas que respiran" },
      {
        property: "og:description",
        content:
          "Plantas decorativas curadas con estética editorial. Pequeñas, medianas y grandes; verdes profundos, variegadas, púrpuras y plateadas.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: heroFiddle },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroFiddle },
    ],
  }),
  component: Index,
});

function Index() {
  useGsapAnimations();
  return (
    <main className="bg-canvas text-ink">
      <Nav />
      <Hero />
      <Manifesto />
      <Collection />
      <ParallaxGallery />
      <ColorVariants />
      <HorizontalShowcase />
      <Care />
      <Testimonial />
      <Footer />
    </main>
  );
}

function useGsapAnimations() {
  useEffect(() => {
    let ctx: { revert: () => void } | undefined;
    let cancelled = false;
    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        // Hero parallax on background
        gsap.to("[data-hero-bg]", {
          yPercent: 18,
          ease: "none",
          scrollTrigger: {
            trigger: "[data-hero]",
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });

        // Generic reveal-up batches
        gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
          gsap.fromTo(
            el,
            { y: 60, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1.2,
              ease: "expo.out",
              scrollTrigger: {
                trigger: el,
                start: "top 85%",
              },
            },
          );
        });

        // Parallax images
        gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
          gsap.fromTo(
            el,
            { yPercent: -8 },
            {
              yPercent: 12,
              ease: "none",
              scrollTrigger: {
                trigger: el.parentElement!,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            },
          );
        });

        // Horizontal showcase pin
        const track = document.querySelector<HTMLElement>("[data-horizontal-track]");
        const section = document.querySelector<HTMLElement>("[data-horizontal]");
        if (track && section) {
          const distance = () => track.scrollWidth - window.innerWidth;
          gsap.to(track, {
            x: () => -distance(),
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: () => `+=${distance()}`,
              scrub: 1,
              pin: true,
              invalidateOnRefresh: true,
            },
          });
        }

        // Marquee for color variants caption
        gsap.to("[data-marquee]", {
          xPercent: -50,
          repeat: -1,
          duration: 40,
          ease: "linear",
        });
      });
    })();
    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, []);
}

/* ---------- Sections ---------- */

function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-6 flex justify-between items-end mix-blend-difference text-canvas pointer-events-none">
      <span className="font-display italic text-2xl tracking-tight pointer-events-auto">
        Hojas de Autor
      </span>
      <div className="hidden md:flex gap-10 text-[10px] font-mono uppercase tracking-[0.25em] pointer-events-auto">
        <a href="#coleccion" className="hover:text-clay transition-colors">Colecciones</a>
        <a href="#variedades" className="hover:text-clay transition-colors">Variedades</a>
        <a href="#cuidados" className="hover:text-clay transition-colors">Cuidados</a>
        <a href="#contacto" className="hover:text-clay transition-colors">Contacto</a>
      </div>
      <span className="font-mono text-[10px] uppercase tracking-[0.25em] pointer-events-auto md:hidden">
        Menú
      </span>
    </nav>
  );
}

function Hero() {
  return (
    <section
      data-hero
      className="relative h-screen w-full overflow-hidden flex items-end justify-center pb-24"
    >
      <div data-hero-bg className="absolute inset-0 -top-16 -bottom-16 z-0 animate-scale">
        <img
          src={heroFiddle}
          alt="Ficus Lyrata en maceta de hormigón bañado por luz natural"
          width={1920}
          height={1280}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40" />
      </div>

      <div className="relative z-10 text-center max-w-5xl px-6">
        <p className="font-mono text-[10px] uppercase tracking-[0.4em] mb-8 text-canvas/90 animate-reveal [animation-delay:200ms]">
          Estética Viva · Edición MMXXVI
        </p>
        <h1 className="font-display italic text-6xl sm:text-7xl md:text-8xl lg:text-[9.5rem] text-canvas text-balance leading-[0.85] animate-reveal [animation-delay:400ms]">
          Esculturas
          <br />
          que Respiran
        </h1>
        <p className="mx-auto max-w-xl mt-10 text-canvas/85 text-base md:text-lg leading-relaxed animate-reveal [animation-delay:700ms]">
          Plantas decorativas curadas para el hogar moderno. De ejemplares de
          escritorio a piezas de salón en todos los verdes, púrpuras, plateados
          y variegados.
        </p>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-canvas/80 z-10">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Desplaza</span>
        <div className="h-12 w-px bg-canvas/40" />
      </div>
    </section>
  );
}

function Manifesto() {
  return (
    <section className="py-32 md:py-44 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-center">
      <div className="md:col-start-2 md:col-span-4" data-reveal>
        <div className="overflow-hidden">
          <img
            src={manifestoLeaf}
            alt="Macro de una hoja de Monstera con venas marcadas"
            width={960}
            height={1440}
            loading="lazy"
            className="w-full aspect-[2/3] object-cover"
          />
        </div>
      </div>
      <div className="md:col-start-7 md:col-span-5 flex flex-col gap-8" data-reveal>
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-clay">
          [ Manifiesto · 01 ]
        </span>
        <h2 className="font-display text-4xl md:text-6xl leading-[1.05]">
          No vendemos plantas, <br />
          <span className="italic">curamos compañía.</span>
        </h2>
        <p className="text-muted-foreground max-w-[48ch] leading-relaxed text-base md:text-lg">
          Entendemos el hogar como una galería en constante evolución. Cada
          espécimen es seleccionado por su arquitectura natural, su carácter y
          su capacidad para transformar el silencio en atmósfera. Plantas que
          no decoran un espacio: lo habitan.
        </p>
        <p className="text-muted-foreground max-w-[48ch] leading-relaxed">
          Trabajamos con productores especializados en Canarias, Países Bajos y
          Costa Rica. Cada ejemplar es aclimatado durante doce semanas en
          nuestro invernadero antes de cruzar la puerta de tu casa.
        </p>
        <div className="h-px w-24 bg-forest/30" />
      </div>
    </section>
  );
}

function Collection() {
  const items = [
    {
      img: colSmall,
      tag: "Escritorio · S",
      name: "Espécimen Petite",
      desc: "Suculentas y rarezas pequeñas para mesas, repisas y ventanas.",
      price: "85€",
    },
    {
      img: colMedium,
      tag: "Living · M",
      name: "Carácter Sereno",
      desc: "Esculturas de tamaño medio con presencia arquitectónica.",
      price: "180€",
    },
    {
      img: colLarge,
      tag: "Statement · XL",
      name: "Pieza Monumental",
      desc: "Ejemplares de gran porte para entradas, lofts y áticos.",
      price: "420€",
    },
  ];

  return (
    <section
      id="coleccion"
      className="bg-forest text-canvas py-32 md:py-44 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-20 gap-8" data-reveal>
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-clay block mb-6">
              [ La Colección ]
            </span>
            <h3 className="font-display text-5xl md:text-7xl italic leading-none">
              Tres escalas, <br />
              una sola intención.
            </h3>
          </div>
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] opacity-60 max-w-xs">
            Desliza para explorar
            <br />
            [ 01 — 03 ]
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {items.map((item, i) => (
            <article
              key={item.name}
              className={`group cursor-pointer ${i === 1 ? "md:mt-20" : ""}`}
              data-reveal
            >
              <div className="overflow-hidden mb-6 aspect-[3/4]">
                <img
                  src={item.img}
                  alt={item.name}
                  width={800}
                  height={1067}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
                />
              </div>
              <div className="flex justify-between items-start mb-3">
                <div>
                  <p className="font-mono text-[10px] uppercase text-clay mb-2 tracking-[0.2em]">
                    {item.tag}
                  </p>
                  <h4 className="font-display text-2xl italic">{item.name}</h4>
                </div>
                <span className="text-xs font-mono mt-1">{item.price}</span>
              </div>
              <p className="text-sm opacity-70 max-w-[32ch] leading-relaxed">
                {item.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ParallaxGallery() {
  return (
    <section className="bg-canvas">
      {/* Frame 1: huge image with text overlay */}
      <div className="relative h-[90vh] overflow-hidden">
        <img
          data-parallax
          src={parallax1}
          alt="Sunroom con plantas exóticas y luz dorada"
          width={1920}
          height={1280}
          loading="lazy"
          className="absolute inset-0 -top-20 -bottom-20 w-full h-[120%] object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 h-full flex items-end p-8 md:p-20">
          <div className="max-w-2xl text-canvas" data-reveal>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-clay block mb-6">
              [ Atmósfera 02 ]
            </span>
            <h3 className="font-display italic text-5xl md:text-7xl leading-none mb-6">
              Una habitación que respira distinto.
            </h3>
            <p className="text-canvas/80 max-w-md leading-relaxed">
              Plantas dispuestas como una conversación. Volúmenes,
              transparencias, sombras: composición antes que cantidad.
            </p>
          </div>
        </div>
      </div>

      {/* Frame 2: split editorial */}
      <div className="grid grid-cols-1 md:grid-cols-12 py-32 md:py-44 px-6 max-w-7xl mx-auto gap-12 md:gap-16 items-center">
        <div className="md:col-span-5 flex flex-col gap-8" data-reveal>
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-clay">
            [ Oficio · 03 ]
          </span>
          <h3 className="font-display text-4xl md:text-6xl leading-tight italic">
            Trasplantadas <br /> a mano, una a una.
          </h3>
          <p className="text-muted-foreground leading-relaxed text-base md:text-lg max-w-[44ch]">
            Cada planta llega lista para vivir contigo. Sustrato formulado por
            especie, maceta artesanal incluida y guía de cuidados firmada por
            nuestro equipo botánico.
          </p>
        </div>
        <div className="md:col-span-7 relative h-[60vh] md:h-[75vh] overflow-hidden">
          <img
            data-parallax
            src={parallax2}
            alt="Manos trasplantando una planta sobre macetas de terracota"
            width={1600}
            height={1067}
            loading="lazy"
            className="absolute inset-0 -top-12 -bottom-12 w-full h-[120%] object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function ColorVariants() {
  const variants = [
    {
      img: varietyVariegated,
      label: "Variegadas",
      detail: "Blanco · Crema · Verde claro",
      swatch: "#e8e2d2",
    },
    {
      img: varietyPurple,
      label: "Púrpuras",
      detail: "Vino · Magenta · Ciruela",
      swatch: "#5b2447",
    },
    {
      img: varietySilver,
      label: "Plateadas",
      detail: "Azul cielo · Plata fría",
      swatch: "#b6c6cd",
    },
  ];

  return (
    <section id="variedades" className="bg-sand py-32 md:py-44 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 max-w-3xl" data-reveal>
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-clay block mb-6">
            [ Paleta Viva · 04 ]
          </span>
          <h3 className="font-display text-5xl md:text-7xl italic leading-[0.95]">
            Verde no es <br /> el único color del jardín.
          </h3>
          <p className="text-muted-foreground mt-8 max-w-[55ch] leading-relaxed text-base md:text-lg">
            Curamos también ejemplares en variegados, púrpuras profundos,
            plateados fríos y bronces metálicos. Plantas que dialogan con tu
            paleta cromática como una pieza textil más.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-1">
          {variants.map((v) => (
            <div key={v.label} className="group bg-canvas overflow-hidden" data-reveal>
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={v.img}
                  alt={`Planta de variedad ${v.label}`}
                  width={800}
                  height={1000}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                />
              </div>
              <div className="p-8 flex items-center gap-5 border-t border-ink/10">
                <span
                  className="h-10 w-10 rounded-full shrink-0"
                  style={{ background: v.swatch }}
                  aria-hidden
                />
                <div className="flex-1">
                  <h4 className="font-display text-2xl italic">{v.label}</h4>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-1">
                    {v.detail}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Marquee */}
        <div className="mt-24 overflow-hidden border-y border-ink/10 py-8">
          <div data-marquee className="flex gap-16 whitespace-nowrap font-display italic text-4xl md:text-6xl">
            {Array.from({ length: 2 }).map((_, i) => (
              <span key={i} className="flex gap-16 shrink-0">
                <span>Monstera Albo</span>
                <span className="text-clay">·</span>
                <span>Calathea Orbifolia</span>
                <span className="text-clay">·</span>
                <span>Philodendron Pink Princess</span>
                <span className="text-clay">·</span>
                <span>Echeveria Lilacina</span>
                <span className="text-clay">·</span>
                <span>Ficus Audrey</span>
                <span className="text-clay">·</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function HorizontalShowcase() {
  const cards = [
    { n: "01", name: "Monstera Deliciosa", origin: "Centroamérica", img: manifestoLeaf },
    { n: "02", name: "Strelitzia Nicolai", origin: "Sudáfrica", img: colLarge },
    { n: "03", name: "Sansevieria Trifasciata", origin: "Nigeria", img: colMedium },
    { n: "04", name: "Haworthia Cooperi", origin: "Sudáfrica", img: colSmall },
    { n: "05", name: "Calathea Orbifolia", origin: "Bolivia", img: varietyVariegated },
  ];

  return (
    <section
      data-horizontal
      className="bg-ink text-canvas h-screen overflow-hidden relative"
    >
      <div className="absolute top-10 left-6 md:left-10 z-10 flex flex-col gap-3">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-clay">
          [ Archivo Botánico · 05 ]
        </span>
        <h3 className="font-display italic text-3xl md:text-5xl max-w-md leading-tight">
          Especímenes destacados de la temporada.
        </h3>
      </div>

      <div
        data-horizontal-track
        className="h-full flex items-center gap-8 pl-6 md:pl-[40vw] pr-[20vw] will-change-transform"
      >
        {cards.map((c) => (
          <article
            key={c.n}
            className="shrink-0 w-[70vw] sm:w-[55vw] md:w-[38vw] lg:w-[30vw] h-[70vh] relative overflow-hidden group"
          >
            <img
              src={c.img}
              alt={c.name}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
            <div className="relative z-10 h-full flex flex-col justify-between p-8">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-canvas/70">
                / {c.n}
              </span>
              <div>
                <h4 className="font-display italic text-3xl md:text-4xl mb-2">{c.name}</h4>
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-clay">
                  Origen · {c.origin}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Care() {
  const rituals = [
    {
      n: "01",
      title: "Luz Tamizada",
      desc: "Busca el equilibrio entre el sol directo y la sombra absoluta. La luz es alimento.",
    },
    {
      n: "02",
      title: "Hidratación Consciente",
      desc: "Toca la tierra antes de regar. El exceso es más letal que la ausencia.",
    },
    {
      n: "03",
      title: "Sustrato Vivo",
      desc: "Renueva la capa superior cada estación. El suelo respira como las hojas.",
    },
    {
      n: "04",
      title: "Purificación Orgánica",
      desc: "Limpia sus hojas con un paño húmedo. Una planta sin polvo respira en libertad.",
    },
  ];

  return (
    <section id="cuidados" className="py-32 md:py-44 px-6 bg-sand">
      <div className="max-w-5xl mx-auto">
        <div className="mb-20 text-center" data-reveal>
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] block mb-6 text-clay">
            [ El arte del cuidado · 06 ]
          </span>
          <h3 className="font-display text-5xl md:text-7xl italic leading-none">
            Rituales Diarios
          </h3>
        </div>

        <div className="divide-y divide-ink/15">
          {rituals.map((r) => (
            <div
              key={r.n}
              data-reveal
              className="py-10 md:py-14 group grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline hover:px-4 transition-all duration-500"
            >
              <span className="font-mono text-sm opacity-40 md:col-span-1">{r.n}</span>
              <h4 className="text-3xl md:text-5xl font-display italic md:col-span-6">
                {r.title}
              </h4>
              <p className="text-sm md:text-base text-muted-foreground md:col-span-5 md:text-right leading-relaxed">
                {r.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonial() {
  return (
    <section className="py-32 md:py-44 px-6 overflow-hidden bg-canvas">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-center">
          <div className="w-full md:w-1/2" data-reveal>
            <img
              src={testimonialImg}
              alt="Salón con butaca y una gran planta junto a la ventana"
              width={1200}
              height={1200}
              loading="lazy"
              className="w-full aspect-square object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center" data-reveal>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-clay mb-10">
              [ Testimonio · 07 ]
            </span>
            <p className="font-display text-3xl md:text-5xl leading-[1.15] mb-10 italic">
              “Hojas de Autor transformó mi estudio en un refugio de calma. La
              calidad de sus macetas artesanales y la salud de los ejemplares
              es, sencillamente, insuperable.”
            </p>
            <div className="flex items-center gap-4">
              <div className="h-px w-10 bg-clay" />
              <span className="font-mono text-xs uppercase tracking-[0.25em]">
                Elena Vázquez · Interiorista, Madrid
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer
      id="contacto"
      className="pt-32 md:pt-48 pb-12 px-6 bg-forest text-canvas"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display text-[18vw] md:text-[14vw] leading-[0.85] mb-20 md:mb-32 italic text-center">
          Botánica <br /> Superior
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 pt-12 border-t border-canvas/15">
          <div className="flex flex-col gap-4">
            <span className="font-mono text-[10px] uppercase opacity-50 tracking-[0.25em]">
              Estudio
            </span>
            <p className="text-sm leading-relaxed">
              Calle de la Flora, 12
              <br />
              28004 Madrid, España
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <span className="font-mono text-[10px] uppercase opacity-50 tracking-[0.25em]">
              Contacto
            </span>
            <p className="text-sm leading-relaxed">
              hola@hojasdeautor.com
              <br />
              +34 912 345 678
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <span className="font-mono text-[10px] uppercase opacity-50 tracking-[0.25em]">
              Horario
            </span>
            <p className="text-sm leading-relaxed">
              Mar — Sáb
              <br />
              11.00 — 20.00 h
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <span className="font-mono text-[10px] uppercase opacity-50 tracking-[0.25em]">
              Social
            </span>
            <div className="flex flex-col text-sm gap-1">
              <a href="#" className="hover:text-clay transition-colors">
                Instagram
              </a>
              <a href="#" className="hover:text-clay transition-colors">
                Pinterest
              </a>
              <a href="#" className="hover:text-clay transition-colors">
                Journal
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-canvas/10 flex flex-col md:flex-row justify-between gap-4">
          <p className="text-[10px] font-mono uppercase opacity-40 tracking-[0.25em]">
            © MMXXVI Hojas de Autor — Todos los derechos reservados
          </p>
          <p className="text-[10px] font-mono uppercase opacity-40 tracking-[0.25em]">
            Diseñado con luz natural
          </p>
        </div>
      </div>
    </footer>
  );
}
