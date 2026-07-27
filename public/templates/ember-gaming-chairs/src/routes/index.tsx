import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useSmoothScrollAndGsap } from "@/hooks/useSmoothScrollAndGsap";
import heroChair from "@/assets/hero-chair.jpg";
import modelApex from "@/assets/model-apex.jpg";
import modelNova from "@/assets/model-nova.jpg";
import modelStrike from "@/assets/model-strike.jpg";
import featureDetail from "@/assets/feature-detail.jpg";
import forHim from "@/assets/for-him.jpg";
import forHer from "@/assets/for-her.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import ctaBg from "@/assets/cta-bg.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EMBER — Sillas Gaming de Lujo Premium" },
      {
        name: "description",
        content:
          "Sillas gaming ergonómicas de diseño premium. Modelos para chicos y chicas, materiales de alta gama y confort que dura horas. Eleva tu setup.",
      },
      { property: "og:title", content: "EMBER — Sillas Gaming de Lujo" },
      {
        property: "og:description",
        content: "Diseño, ergonomía y carácter. Descubre la nueva colección 2026.",
      },
      { property: "og:image", content: heroChair },
      { property: "og:type", content: "website" },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  useSmoothScrollAndGsap();
  return (
    <div className="bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <Models />
      <Features />
      <ForEveryone />
      <Gallery />
      <Stats />
      <Testimonials />
      <Faq />
      <FinalCta />
      <Footer />
    </div>
  );
}

/* ---------------- NAV ---------------- */
function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 backdrop-blur-md">
        <a href="#" className="flex items-center gap-2 font-display text-lg font-bold tracking-tight">
          <span className="inline-block size-2 rounded-full bg-ember shadow-[0_0_12px_var(--ember)]" />
          EMBER
        </a>
        <nav className="hidden gap-8 text-sm text-muted-foreground md:flex">
          {[
            ["Modelos", "#modelos"],
            ["Diseño", "#diseno"],
            ["Galería", "#galeria"],
            ["FAQ", "#faq"],
          ].map(([l, h]) => (
            <a key={h} href={h} className="transition-colors hover:text-foreground">
              {l}
            </a>
          ))}
        </nav>
        <a
          href="#cta"
          className="hidden rounded-full border border-border bg-surface/60 px-5 py-2 text-sm font-medium transition hover:border-ember hover:text-ember md:inline-block"
        >
          Comprar
        </a>
      </div>
    </header>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  const title = "Siéntate como un pro.".split(" ");
  return (
    <section
      data-anim="hero"
      className="relative isolate flex min-h-screen items-center overflow-hidden grain"
    >
      <div
        data-anim="hero-glow"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 size-[80vmin] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-50 blur-3xl"
        style={{ background: "radial-gradient(circle, oklch(0.7 0.19 40 / 0.5), transparent 70%)" }}
      />
      <img
        data-anim="hero-image"
        src={heroChair}
        alt="Silla gaming EMBER edición 2026"
        width={1920}
        height={1280}
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover object-center opacity-90"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/40 via-background/20 to-background" />

      <div className="mx-auto w-full max-w-7xl px-6">
        <div
          data-anim="hero-badge"
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-border/60 bg-surface/40 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground backdrop-blur"
        >
          <span className="size-1.5 rounded-full bg-ember shadow-[0_0_8px_var(--ember)]" />
          Nueva colección 2026
        </div>
        <h1
          data-anim="hero-title"
          className="max-w-4xl text-balance text-5xl font-bold leading-[0.95] tracking-tight md:text-7xl lg:text-8xl"
        >
          {title.map((w, i) => (
            <span key={i} className="mr-3 inline-block overflow-hidden align-bottom">
              <span className="inline-block">
                {i === title.length - 1 ? <span className="ember-gradient-text">{w}</span> : w}
              </span>
            </span>
          ))}
        </h1>
        <p
          data-anim="hero-sub"
          className="mt-6 max-w-xl text-balance text-base text-muted-foreground md:text-lg"
        >
          Sillas gaming diseñadas para sesiones largas. Ergonomía de alto rendimiento, materiales
          premium y un carácter que se ve. Para chicos, para chicas, para ganar.
        </p>
        <div data-anim="hero-cta" className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#modelos"
            className="group relative inline-flex items-center gap-2 rounded-full bg-ember px-7 py-3.5 text-sm font-semibold text-[#0d0d0d] ember-glow transition hover:scale-[1.02]"
          >
            Explorar modelos
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#diseno"
            className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-medium text-foreground transition hover:border-foreground"
          >
            Ver tecnología
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
        <div className="animate-scroll-hint flex flex-col items-center gap-2">
          <span>Desplázate</span>
          <span className="h-10 w-px bg-gradient-to-b from-muted-foreground to-transparent" />
        </div>
      </div>
    </section>
  );
}

/* ---------------- MARQUEE ---------------- */
function Marquee() {
  const items = ["PRO GAMING", "ERGONOMÍA 4D", "DISEÑO PREMIUM", "MEMORY FOAM", "RECLINADO 180°", "5 AÑOS DE GARANTÍA"];
  const row = [...items, ...items];
  return (
    <section className="border-y border-border/50 bg-surface/40 py-8 overflow-hidden">
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {row.map((t, i) => (
          <span key={i} className="mx-8 inline-flex items-center gap-8 font-display text-2xl font-semibold uppercase tracking-tight text-muted-foreground md:text-4xl">
            {t}
            <span className="size-2 rounded-full bg-ember" />
          </span>
        ))}
      </div>
    </section>
  );
}

/* ---------------- MODELS ---------------- */
function Models() {
  const models = [
    { name: "Apex", tag: "Pro Esports", price: "549€", img: modelApex, desc: "Reclinado 180°, lumbar 4D y memory foam. La elección de los pros." },
    { name: "Nova", tag: "Edición Coral", price: "529€", img: modelNova, desc: "Líneas elegantes, acentos coral y máxima suavidad. Diseñada para destacar." },
    { name: "Strike", tag: "Racing", price: "599€", img: modelStrike, desc: "Inspiración racing, carbono y ember. Velocidad pura, también sentada." },
  ];
  return (
    <section id="modelos" className="relative py-32 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p data-reveal className="mb-3 text-xs uppercase tracking-[0.3em] text-ember">/ Modelos</p>
            <h2 data-reveal className="max-w-2xl text-balance text-4xl font-bold leading-tight md:text-6xl">
              Tres sillas. Una obsesión por el detalle.
            </h2>
          </div>
          <p data-reveal className="max-w-sm text-muted-foreground">
            Cada modelo está pensado para un estilo. Mismo ADN ergonómico, distintas personalidades.
          </p>
        </div>

        <div data-reveal-stagger className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {models.map((m) => (
            <article
              key={m.name}
              className="group relative overflow-hidden rounded-2xl border border-border bg-surface transition-all hover:border-ember/60"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-surface-2">
                <img
                  src={m.img}
                  alt={`Silla gaming ${m.name}`}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
                <div className="absolute left-5 top-5 rounded-full border border-border/60 bg-background/60 px-3 py-1 text-[10px] uppercase tracking-widest text-muted-foreground backdrop-blur">
                  {m.tag}
                </div>
              </div>
              <div className="relative -mt-20 p-6">
                <div className="flex items-end justify-between">
                  <h3 className="text-3xl font-bold">{m.name}</h3>
                  <span className="font-display text-xl text-ember">{m.price}</span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{m.desc}</p>
                <div className="mt-6 flex items-center gap-2 text-sm font-medium text-foreground opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-1">
                  Descubrir <span>→</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FEATURES ---------------- */
function Features() {
  const features = [
    { n: "01", t: "Reclinado 180°", d: "Inclínate hasta la horizontal sin mover un músculo. Pausa, descansa, vuelve." },
    { n: "02", t: "Lumbar 4D dinámico", d: "Soporte que se adapta a tu espalda en tiempo real. Sin botones, sin pensar." },
    { n: "03", t: "Espuma memory premium", d: "Densidad alta, recuperación rápida. Las primeras 12 horas son las mejores." },
    { n: "04", t: "Base de aluminio mecanizado", d: "Estabilidad de competición. Soporta hasta 150 kg con sobra." },
    { n: "05", t: "Ruedas silenciosas", d: "Goma blanda con cojinetes de precisión. Sin marcas en el suelo, sin ruido." },
  ];
  return (
    <section id="diseno" className="relative bg-surface/30 py-32 md:py-40">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 md:grid-cols-2 md:gap-20">
        <div className="md:sticky md:top-32 md:h-fit">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-surface-2">
            <img
              data-pin-image
              src={featureDetail}
              alt="Detalle de mecanismo y cuero premium"
              loading="lazy"
              width={1200}
              height={1500}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="mt-6 flex items-center justify-between text-xs uppercase tracking-[0.25em] text-muted-foreground">
            <span>/ Ingeniería</span>
            <span>Hecho a mano</span>
          </div>
        </div>

        <div>
          <p data-reveal className="mb-3 text-xs uppercase tracking-[0.3em] text-ember">/ Diseño</p>
          <h2 data-reveal className="text-balance text-4xl font-bold leading-tight md:text-6xl">
            Cada milímetro pensado para horas que no pesen.
          </h2>
          <p data-reveal className="mt-6 max-w-md text-muted-foreground">
            Más de 18 meses de iteración con jugadores profesionales y ergónomos. El resultado: una
            silla que desaparece. Tú juegas, ella se adapta.
          </p>

          <ul data-reveal-stagger className="mt-14 space-y-10">
            {features.map((f) => (
              <li key={f.n} className="grid grid-cols-[auto_1fr] items-start gap-6 border-t border-border/60 pt-6">
                <span className="font-display text-sm font-medium text-ember">{f.n}</span>
                <div>
                  <h3 className="text-2xl font-semibold">{f.t}</h3>
                  <p className="mt-2 text-muted-foreground">{f.d}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FOR EVERYONE ---------------- */
function ForEveryone() {
  return (
    <section className="relative py-32 md:py-40">
      <div className="mx-auto mb-16 max-w-7xl px-6">
        <p data-reveal className="mb-3 text-xs uppercase tracking-[0.3em] text-ember">/ Colección</p>
        <h2 data-reveal className="max-w-3xl text-balance text-4xl font-bold leading-tight md:text-6xl">
          Hay una EMBER pensada para ti.
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-0 md:grid-cols-2">
        {[
          { t: "Para ellos", sub: "Línea Ember", desc: "Negro mate, acentos ember, racing puro.", img: forHim, accent: "var(--ember)" },
          { t: "Para ellas", sub: "Línea Coral", desc: "Detalles coral, líneas elegantes, mismo confort.", img: forHer, accent: "var(--coral)" },
        ].map((s) => (
          <div key={s.t} className="group relative h-[80vh] overflow-hidden md:h-[90vh]">
            <img
              src={s.img}
              alt={s.t}
              loading="lazy"
              width={1200}
              height={1500}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            <div className="relative z-10 flex h-full flex-col justify-end p-8 md:p-14">
              <p className="text-xs uppercase tracking-[0.3em]" style={{ color: s.accent }}>
                {s.sub}
              </p>
              <h3 className="mt-3 font-display text-4xl font-bold md:text-6xl">{s.t}</h3>
              <p className="mt-3 max-w-sm text-muted-foreground">{s.desc}</p>
              <a
                href="#modelos"
                className="mt-6 inline-flex w-fit items-center gap-2 border-b border-foreground/40 pb-1 text-sm font-medium transition hover:border-foreground"
              >
                Ver colección <span>→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- GALLERY ---------------- */
function Gallery() {
  const imgs = [
    { src: gallery1, w: 1200, h: 900, span: "md:col-span-2", speed: "0.15" },
    { src: gallery2, w: 1000, h: 1300, span: "", speed: "0.3" },
    { src: gallery3, w: 1200, h: 800, span: "md:col-span-2 md:row-span-1", speed: "0.2" },
    { src: gallery4, w: 1000, h: 1300, span: "", speed: "0.25" },
    { src: gallery5, w: 1300, h: 900, span: "md:col-span-2", speed: "0.15" },
    { src: gallery6, w: 1000, h: 1000, span: "", speed: "0.3" },
  ];
  return (
    <section id="galeria" className="relative bg-surface/30 py-32 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p data-reveal className="mb-3 text-xs uppercase tracking-[0.3em] text-ember">/ Galería</p>
            <h2 data-reveal className="max-w-2xl text-balance text-4xl font-bold leading-tight md:text-6xl">
              Imágenes que hablan por sí solas.
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {imgs.map((g, i) => (
            <figure
              key={i}
              className={`group relative overflow-hidden rounded-xl border border-border bg-surface-2 ${g.span}`}
            >
              <img
                src={g.src}
                alt={`Gallery ${i + 1}`}
                loading="lazy"
                width={g.w}
                height={g.h}
                data-parallax={g.speed}
                className="h-full w-full object-cover transition-transform duration-[1500ms] group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- STATS ---------------- */
function Stats() {
  const stats = [
    { n: "50000", suffix: "+", label: "Clientes felices" },
    { n: "4.9", suffix: "★", label: "Valoración media", decimals: "1" },
    { n: "5", suffix: " años", label: "De garantía" },
    { n: "30", suffix: "", label: "Países servidos" },
  ];
  return (
    <section className="relative border-y border-border bg-background py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-12 gap-x-8 px-6 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} data-reveal className="flex flex-col">
            <div className="flex items-baseline gap-1 font-display text-5xl font-bold md:text-7xl">
              <span data-counter={s.n} data-decimals={s.decimals || "0"}>0</span>
              <span className="text-ember">{s.suffix}</span>
            </div>
            <p className="mt-3 text-sm uppercase tracking-[0.2em] text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- TESTIMONIALS ---------------- */
function Testimonials() {
  const ts = [
    { q: "Después de 10 horas seguidas, mi espalda sigue intacta. Es brutal.", a: "Álex M.", role: "Streamer · Modelo Apex" },
    { q: "El diseño Nova encaja con mi setup mejor que cualquier otra silla del mercado.", a: "Lucía R.", role: "Content Creator · Modelo Nova" },
    { q: "La Strike es como sentarse en un coche de carreras. Pero cómoda.", a: "Dani P.", role: "Pro Player · Modelo Strike" },
    { q: "Calidad de materiales premium. Se nota desde que la desembalas.", a: "Marta G.", role: "Diseñadora · Modelo Nova" },
  ];
  return (
    <section className="py-32 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <p data-reveal className="mb-3 text-xs uppercase tracking-[0.3em] text-ember">/ Testimonios</p>
        <h2 data-reveal className="mb-16 max-w-3xl text-balance text-4xl font-bold leading-tight md:text-6xl">
          Lo que dicen quienes ya la tienen.
        </h2>
        <div data-reveal-stagger className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {ts.map((t) => (
            <blockquote key={t.a} className="rounded-2xl border border-border bg-surface p-8 transition hover:border-ember/40">
              <p className="font-display text-xl leading-snug md:text-2xl">"{t.q}"</p>
              <footer className="mt-6 flex items-center gap-4">
                <div className="grid size-11 place-items-center rounded-full bg-ember/15 font-display text-sm font-semibold text-ember">
                  {t.a[0]}
                </div>
                <div>
                  <div className="text-sm font-semibold">{t.a}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
function Faq() {
  const items = [
    ["¿Cuánto tarda el envío?", "Envío gratuito en 48–72 horas a península. 5–7 días al resto de la UE."],
    ["¿Qué incluye la garantía?", "5 años en estructura y mecanismos, 2 años en tapizado y espumas."],
    ["¿Es difícil montarla?", "Menos de 20 minutos con una persona. Incluye herramientas y manual ilustrado."],
    ["¿Para qué alturas está pensada?", "Cómoda entre 1,55 m y 1,95 m, soporta hasta 150 kg de peso."],
    ["¿Qué materiales usáis?", "Cuero sintético premium PU de alta densidad, espuma memory, base de aluminio."],
    ["¿Puedo devolverla si no me convence?", "Sí, 30 días de prueba sin compromiso. Recogida gratuita en casa."],
  ];
  return (
    <section id="faq" className="bg-surface/30 py-32 md:py-40">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 md:grid-cols-[1fr_1.5fr]">
        <div>
          <p data-reveal className="mb-3 text-xs uppercase tracking-[0.3em] text-ember">/ FAQ</p>
          <h2 data-reveal className="text-balance text-4xl font-bold leading-tight md:text-5xl">
            Preguntas que te haces antes de comprar.
          </h2>
        </div>
        <div data-reveal-stagger>
          {items.map(([q, a], i) => (
            <FaqItem key={i} q={q} a={a} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-6 py-6 text-left transition hover:text-ember"
      >
        <span className="font-display text-lg font-medium md:text-xl">{q}</span>
        <span className={`grid size-9 place-items-center rounded-full border border-border transition-transform ${open ? "rotate-45 border-ember text-ember" : ""}`}>
          +
        </span>
      </button>
      <div
        className="grid overflow-hidden text-muted-foreground transition-[grid-template-rows] duration-500"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="min-h-0">
          <p className="pb-6 pr-12">{a}</p>
        </div>
      </div>
    </div>
  );
}

/* ---------------- FINAL CTA ---------------- */
function FinalCta() {
  return (
    <section id="cta" className="relative isolate flex min-h-[90vh] items-center overflow-hidden grain">
      <img
        src={ctaBg}
        alt=""
        loading="lazy"
        width={1920}
        height={1200}
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-60"
        data-parallax="0.3"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-background/30 to-background" />
      <div className="mx-auto max-w-5xl px-6 text-center">
        <p data-reveal className="mb-6 text-xs uppercase tracking-[0.3em] text-ember">/ Tu turno</p>
        <h2 data-reveal className="text-balance font-display text-6xl font-bold leading-[0.95] md:text-8xl lg:text-9xl">
          Eleva tu <span className="ember-gradient-text">setup</span>.
        </h2>
        <p data-reveal className="mx-auto mt-8 max-w-xl text-balance text-muted-foreground md:text-lg">
          Pruébala 30 días en casa. Si no es la silla más cómoda que has tenido, te devolvemos el dinero.
        </p>
        <div data-reveal className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#modelos"
            className="rounded-full bg-ember px-8 py-4 text-sm font-semibold text-[#0d0d0d] ember-glow transition hover:scale-105"
          >
            Configurar la mía
          </a>
          <a
            href="#faq"
            className="rounded-full border border-border px-8 py-4 text-sm font-medium transition hover:border-foreground"
          >
            Hablar con ventas
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="border-t border-border bg-background py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-6 md:grid-cols-4">
        <div className="col-span-2">
          <div className="flex items-center gap-2 font-display text-2xl font-bold">
            <span className="size-2 rounded-full bg-ember shadow-[0_0_12px_var(--ember)]" />
            EMBER
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Sillas gaming de lujo, ergonómicas y diseñadas para horas. Hechas con obsesión por el detalle.
          </p>
        </div>
        <div>
          <h4 className="mb-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">Tienda</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#modelos" className="hover:text-ember">Apex</a></li>
            <li><a href="#modelos" className="hover:text-ember">Nova</a></li>
            <li><a href="#modelos" className="hover:text-ember">Strike</a></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">Soporte</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#faq" className="hover:text-ember">FAQ</a></li>
            <li><a href="#" className="hover:text-ember">Contacto</a></li>
            <li><a href="#" className="hover:text-ember">Garantía</a></li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl flex-col items-start justify-between gap-4 border-t border-border px-6 pt-8 text-xs text-muted-foreground md:flex-row md:items-center">
        <p>© {new Date().getFullYear()} EMBER. Todos los derechos reservados.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-foreground">Instagram</a>
          <a href="#" className="hover:text-foreground">YouTube</a>
          <a href="#" className="hover:text-foreground">TikTok</a>
        </div>
      </div>
    </footer>
  );
}
