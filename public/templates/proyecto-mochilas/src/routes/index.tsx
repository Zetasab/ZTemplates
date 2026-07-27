import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useScrollFx } from "@/hooks/use-scroll-fx";
import heroImg from "@/assets/hero.jpg";
import onyxImg from "@/assets/color-onyx.jpg";
import oliveImg from "@/assets/color-olive.jpg";
import cognacImg from "@/assets/color-cognac.jpg";
import boneImg from "@/assets/color-bone.jpg";
import materialImg from "@/assets/material.jpg";
import urbanImg from "@/assets/lifestyle-urban.jpg";
import alpineImg from "@/assets/lifestyle-alpine.jpg";
import buckleImg from "@/assets/detail-buckle.jpg";
import handleImg from "@/assets/detail-handle.jpg";
import interiorImg from "@/assets/detail-interior.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VANGUARD — Mochilas de lujo, hechas para la vida" },
      {
        name: "description",
        content:
          "Mochilas de lujo ultra-resistentes, fabricadas con Cordura 1000D y cuero italiano. Cuatro tonos atemporales. Edición limitada.",
      },
      { property: "og:title", content: "VANGUARD — Mochilas de lujo" },
      {
        property: "og:description",
        content: "Mochilas editoriales de alta resistencia. Edición 01 / Blackout.",
      },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: Index,
});

const colors = [
  { id: "onyx", name: "Obsidiana", hex: "#1A1A1A", img: onyxImg, note: "Negro mate con herrajes de carbón." },
  { id: "olive", name: "Olivar", hex: "#2D332D", img: oliveImg, note: "Verde profundo, base reforzada." },
  { id: "cognac", name: "Coñac", hex: "#4A3728", img: cognacImg, note: "Cuero italiano de grano completo." },
  { id: "bone", name: "Hueso", hex: "#E5E1D8", img: boneImg, note: "Tono arena tratado contra UV." },
] as const;

function Index() {
  useScrollFx();

  return (
    <div className="bg-canvas text-ink font-sans selection:bg-leather selection:text-canvas overflow-x-clip">
      <Nav />
      <Hero />
      <Manifesto />
      <ColorShowcase />
      <MaterialStory />
      <ParallaxBand
        image={urbanImg}
        label="Estudio de campo 01"
        title="Tránsito Urbano"
        copy="De la oficina al andén, del café al taxi nocturno. Equipo para quienes no detienen su día."
      />
      <FeaturesGrid />
      <ParallaxBand
        image={alpineImg}
        label="Estudio de campo 02"
        title="Altitud Alpina"
        copy="A 2.400 metros, la costura aguanta lo mismo que en la calle. La diferencia es solo el aire."
        flip
      />
      <DetailsGallery />
      <Testimonial />
      <FinalCTA />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 mix-blend-difference text-white px-6 md:px-10 py-7 flex justify-between items-center">
      <span className="font-display text-2xl tracking-tighter uppercase">Vanguard</span>
      <div className="hidden md:flex gap-12 text-[10px] font-mono uppercase tracking-[0.2em]">
        <a href="#colores" className="hover:text-leather transition-colors">La Colección</a>
        <a href="#material" className="hover:text-leather transition-colors">Artesanía</a>
        <a href="#contacto" className="hover:text-leather transition-colors">Distribuidores</a>
      </div>
      <span className="font-mono text-[10px] uppercase tracking-[0.2em]">ES / 2026</span>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative h-screen min-h-[680px] overflow-hidden flex items-end pb-16 md:pb-24 px-6 md:px-10">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={heroImg}
          alt="Mochila Vanguard en entorno brutalista"
          width={1920}
          height={1280}
          className="w-full h-[115%] object-cover -translate-y-[7%] will-change-transform animate-[heroScale_1.8s_var(--ease-out-expo)_both]"
          data-parallax="0.4"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/60" />
      </div>

      <div className="relative z-10 w-full">
        <h1
          data-stagger
          className="font-display text-[clamp(4rem,15vw,12rem)] leading-[0.85] uppercase tracking-tighter text-white"
        >
          <span className="block overflow-hidden">
            <span data-stagger-child className="block">Precisión</span>
          </span>
          <span className="block overflow-hidden">
            <span data-stagger-child className="block">Tangible</span>
          </span>
        </h1>
        <div className="mt-8 flex flex-col md:flex-row justify-between md:items-end gap-4 border-t border-white/25 pt-6">
          <p data-reveal className="max-w-[34ch] text-white/85 text-sm leading-relaxed">
            Fabricadas con Cordura 1000D y cuero italiano de grano completo. Construidas para el cruce entre la calle y la cumbre.
          </p>
          <span data-reveal className="font-mono text-[10px] text-white/70 uppercase tracking-widest">
            Edición 01 — Blackout
          </span>
        </div>
      </div>

      <style>{`@keyframes heroScale { 0% { transform: translateY(-7%) scale(1.1); opacity: 0; } 100% { transform: translateY(-7%) scale(1); opacity: 1; } }`}</style>
    </section>
  );
}

function Manifesto() {
  return (
    <section className="py-32 md:py-48 px-6 md:px-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 items-end">
        <span data-reveal className="md:col-span-3 font-mono text-[10px] uppercase tracking-[0.3em] text-leather">
          / Manifiesto
        </span>
        <h2
          data-reveal
          className="md:col-span-9 font-display text-4xl md:text-6xl leading-[0.95] uppercase tracking-tight text-balance"
        >
          Una mochila no debería pedir disculpas por durar una década.
        </h2>
        <div className="md:col-start-4 md:col-span-7 md:mt-8">
          <p data-reveal className="text-ink-soft text-lg leading-relaxed">
            Cada Vanguard se ensambla a mano en talleres seleccionados de Europa. Doble pespunte en cada punto de tensión, herrajes de aluminio aeronáutico, cremalleras YKK selladas. Pensada para quienes se mueven, sin pedir permiso al clima.
          </p>
        </div>
      </div>
    </section>
  );
}

function ColorShowcase() {
  const [active, setActive] = useState(0);
  const current = colors[active];

  return (
    <section id="colores" className="py-24 md:py-32 px-6 md:px-10">
      <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">
        <div className="md:sticky md:top-32 w-full md:w-1/3 space-y-8">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-leather">/ La Paleta</span>
          <h2 data-reveal className="font-display text-5xl md:text-7xl uppercase tracking-tighter leading-[0.9]">
            Cuatro tonos.<br />Una promesa.
          </h2>
          <p data-reveal className="text-ink-soft max-w-sm">
            Cada tinte se prueba a mano contra exposición UV durante doce meses. La paleta envejece con dignidad, no se desvanece.
          </p>
          <div className="flex gap-4">
            {colors.map((c, i) => (
              <button
                key={c.id}
                onClick={() => setActive(i)}
                aria-label={c.name}
                className={`size-12 rounded-full transition-all duration-300 ${
                  active === i
                    ? "ring-1 ring-offset-4 ring-ink ring-offset-canvas scale-105"
                    : "ring-1 ring-hairline hover:scale-105"
                }`}
                style={{ backgroundColor: c.hex }}
              />
            ))}
          </div>
          <div className="pt-6 border-t border-hairline">
            <div className="flex items-baseline justify-between">
              <span className="font-display text-3xl uppercase">{current.name}</span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-ink-soft">
                0{active + 1} / 04
              </span>
            </div>
            <p className="text-ink-soft text-sm mt-2">{current.note}</p>
          </div>
        </div>

        <div className="w-full md:w-2/3 grid grid-cols-1 gap-4">
          <div className="relative w-full aspect-[3/4] overflow-hidden bg-stone-200">
            <img
              key={current.id}
              src={current.img}
              alt={`Mochila Vanguard color ${current.name}`}
              width={1200}
              height={1600}
              loading="lazy"
              className="w-full h-full object-cover animate-[fadeUp_0.8s_var(--ease-out-expo)_both]"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            {colors
              .filter((_, i) => i !== active)
              .slice(0, 2)
              .map((c) => (
                <div key={c.id} className="aspect-[3/4] overflow-hidden bg-stone-200">
                  <img
                    src={c.img}
                    alt={`Mochila color ${c.name}`}
                    width={1200}
                    height={1600}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
      <style>{`@keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }`}</style>
    </section>
  );
}

function MaterialStory() {
  return (
    <section id="material" className="bg-ink text-canvas py-32 md:py-48 px-6 md:px-10 overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
        <div className="md:col-span-7 relative overflow-hidden aspect-square">
          <img
            src={materialImg}
            alt="Macro de costura y herraje"
            width={1200}
            height={1200}
            loading="lazy"
            className="w-full h-[115%] object-cover"
            data-parallax="0.3"
          />
        </div>
        <div className="md:col-span-5 space-y-12">
          <div className="space-y-4">
            <span data-reveal className="font-mono text-[10px] text-leather uppercase tracking-[0.3em]">
              / Materialidad
            </span>
            <h3 data-reveal className="font-display text-5xl md:text-6xl uppercase leading-[0.95]">
              ADN Balístico
            </h3>
            <p data-reveal className="text-canvas/60 leading-relaxed">
              Nuestro tejido propietario combina la tensión de las cuerdas de escalada alpina con el tacto sedoso de la marroquinería de lujo. Doble pespunte en cada punto de carga.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-10 border-t border-white/10 pt-8">
            <Stat value="0.0" unit="%" label="Filtración" decimals={1} />
            <Stat value="1000" unit="D" label="Densidad nylon" />
            <Stat value="10" unit="AÑOS" label="Garantía" />
            <Stat value="0.9" unit="KG" label="Peso vacío" decimals={1} />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, unit, label, decimals = 0 }: { value: string; unit: string; label: string; decimals?: number }) {
  return (
    <div>
      <div className="flex items-baseline gap-1">
        <span data-counter={value} data-decimals={decimals} className="font-display text-4xl md:text-5xl">
          0
        </span>
        <span className="font-mono text-xs text-canvas/50">{unit}</span>
      </div>
      <div className="font-mono text-[9px] uppercase tracking-wider text-canvas/40 mt-2">{label}</div>
    </div>
  );
}

function ParallaxBand({
  image,
  label,
  title,
  copy,
  flip = false,
}: {
  image: string;
  label: string;
  title: string;
  copy: string;
  flip?: boolean;
}) {
  return (
    <section className="py-12 md:py-24">
      <div className="relative h-[80vh] min-h-[520px] overflow-hidden">
        <img
          src={image}
          alt={title}
          width={1920}
          height={1280}
          loading="lazy"
          className="absolute inset-0 w-full h-[130%] object-cover -top-[15%]"
          data-parallax="0.5"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div
          className={`absolute inset-0 flex flex-col justify-end p-6 md:p-16 ${
            flip ? "items-end text-right" : "items-start text-left"
          }`}
        >
          <div className={`max-w-xl ${flip ? "items-end" : "items-start"} flex flex-col gap-4`}>
            <span data-reveal className="font-mono text-[10px] uppercase tracking-[0.5em] text-white/70">
              {label}
            </span>
            <h4
              data-reveal
              className="font-display text-5xl md:text-7xl uppercase tracking-tighter text-white leading-[0.9]"
            >
              {title}
            </h4>
            <p data-reveal className="text-white/80 text-sm md:text-base max-w-md">
              {copy}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturesGrid() {
  const features = [
    { n: "01", t: "Impermeable IPX6", d: "Exterior tratado para resistir tormentas y travesías." },
    { n: "02", t: "Ergonomía dual", d: "Panel dorsal con espuma de doble densidad y ventilación." },
    { n: "03", t: "Modular", d: "Compartimentos para portátil 16\", documentos y cámara." },
    { n: "04", t: "Herraje aeronáutico", d: "Hebillas de aluminio mecanizado, cremalleras YKK selladas." },
  ];
  return (
    <section className="py-32 md:py-48 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-12 gap-8 mb-16 items-end">
          <span className="md:col-span-3 font-mono text-[10px] uppercase tracking-[0.3em] text-leather">
            / Especificaciones
          </span>
          <h3 data-reveal className="md:col-span-9 font-display text-4xl md:text-6xl uppercase tracking-tight leading-[0.95]">
            Diseñada por ingenieros. Acabada por artesanos.
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-hairline border border-hairline">
          {features.map((f) => (
            <div key={f.n} data-reveal className="bg-canvas p-8 md:p-10 min-h-[220px] flex flex-col justify-between">
              <span className="font-mono text-[10px] uppercase tracking-widest text-ink-soft">{f.n}</span>
              <div>
                <h4 className="font-display text-2xl uppercase mb-3">{f.t}</h4>
                <p className="text-ink-soft text-sm">{f.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DetailsGallery() {
  const items = [
    { src: buckleImg, label: "Hebilla aluminio" },
    { src: handleImg, label: "Asa de cuero" },
    { src: interiorImg, label: "Forro interior" },
  ];
  return (
    <section className="py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <h3 data-reveal className="font-display text-3xl md:text-5xl uppercase tracking-tight mb-12">
          Cada detalle, una decisión.
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {items.map((it) => (
            <figure key={it.label} data-reveal className="group">
              <div className="aspect-square overflow-hidden bg-stone-100">
                <img
                  src={it.src}
                  alt={it.label}
                  width={800}
                  height={800}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                />
              </div>
              <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-widest text-ink-soft">
                {it.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonial() {
  return (
    <section className="py-32 md:py-48 px-6 md:px-10 bg-white">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <div className="flex justify-center gap-1.5">
          <div className="size-1 bg-leather" />
          <div className="size-1 bg-leather" />
          <div className="size-1 bg-leather" />
        </div>
        <blockquote
          data-reveal
          className="font-display text-3xl md:text-5xl uppercase leading-[1.1] italic text-balance"
        >
          “La única mochila que sobrevive al trayecto diario tan bien como sobrevive a la escalada.”
        </blockquote>
        <cite data-reveal className="font-mono text-[10px] uppercase tracking-widest text-ink-soft block not-italic">
          Monocle Magazine — Reseña 2026
        </cite>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="contacto" className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-32">
      <span data-reveal className="font-mono text-[10px] uppercase tracking-[0.4em] mb-8 text-ink-soft">
        Producción Limitada — 240 unidades
      </span>
      <h2
        data-reveal
        className="font-display text-[14vw] md:text-[10vw] uppercase leading-[0.85] mb-12"
      >
        Adquiere<br />la tuya
      </h2>
      <a
        href="#"
        className="group relative inline-block px-12 py-6 border border-ink overflow-hidden"
      >
        <div className="absolute inset-0 bg-ink translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.7,0,0.3,1)]" />
        <span className="relative z-10 font-mono text-xs uppercase tracking-widest group-hover:text-canvas transition-colors">
          Ver catálogo — desde 495 €
        </span>
      </a>
    </section>
  );
}

function Footer() {
  return (
    <footer className="px-6 md:px-10 py-10 border-t border-hairline flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
      <div className="font-display text-4xl uppercase tracking-tighter">Vanguard</div>
      <div className="flex flex-wrap gap-x-10 gap-y-3 text-[10px] font-mono uppercase tracking-widest text-ink-soft">
        <a href="#">Términos</a>
        <a href="#">Sostenibilidad</a>
        <a href="#">Garantía</a>
        <a href="#">Instagram</a>
        <span>© 2026 VNGD LTD</span>
      </div>
    </footer>
  );
}
