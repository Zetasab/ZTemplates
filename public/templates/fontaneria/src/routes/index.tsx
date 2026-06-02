import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  Phone,
  MessageCircle,
  Droplets,
  Wrench,
  Flame,
  Bath,
  ShowerHead,
  Clock,
  ShieldCheck,
  BadgeCheck,
  Star,
  MapPin,
  ChevronDown,
  PhoneCall,
  Menu,
  X,
} from "lucide-react";
import heroTools from "@/assets/hero-tools.jpg";
import { useReveal } from "@/hooks/use-reveal";

// === DATOS PLACEHOLDER — busca "PRUEBAA_" en el proyecto y reemplaza ===
const NEGOCIO = {
  nombre: "PRUEBAA_NOMBRE",
  zona: "PRUEBAA_ZONA",
  telefono: "PRUEBAA_TELEFONO",
  telefonoTel: "+34PRUEBAA_TELEFONO", // para href tel:
  whatsapp: "PRUEBAA_WHATSAPP", // sin + ni espacios
  correo: "PRUEBAA_CORREO",
  direccion: "PRUEBAA_DIRECCION",
  horario: "Lun–Dom · 24h urgencias",
  anios: "PRUEBAA_ANIOS",
  pueblos: [
    "PRUEBAA_PUEBLO_1",
    "PRUEBAA_PUEBLO_2",
    "PRUEBAA_PUEBLO_3",
    "PRUEBAA_PUEBLO_4",
    "PRUEBAA_PUEBLO_5",
    "PRUEBAA_PUEBLO_6",
  ],
};

const TELEFONO_HREF = `tel:${NEGOCIO.telefonoTel}`;
const WHATSAPP_HREF = `https://wa.me/${NEGOCIO.whatsapp}?text=${encodeURIComponent(
  "Hola, necesito un fontanero",
)}`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${NEGOCIO.nombre} — Fontanero en ${NEGOCIO.zona} · Urgencias 24h` },
      {
        name: "description",
        content: `Fontanero de confianza en ${NEGOCIO.zona} e inmediaciones. Urgencias 24h, presupuesto sin compromiso. Desatascos, instalaciones, calefacción y reformas de baño.`,
      },
      { property: "og:title", content: `${NEGOCIO.nombre} — Fontanero en ${NEGOCIO.zona}` },
      {
        property: "og:description",
        content: `Fontanería profesional en ${NEGOCIO.zona}. Urgencias 24h, atención en menos de 60 min.`,
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Plumber",
          name: `${NEGOCIO.nombre} Fontanería`,
          description: `Fontanero en ${NEGOCIO.zona} e inmediaciones. Urgencias 24h.`,
          telephone: NEGOCIO.telefonoTel,
          email: NEGOCIO.correo,
          address: {
            "@type": "PostalAddress",
            streetAddress: NEGOCIO.direccion,
            addressLocality: NEGOCIO.zona,
            addressCountry: "ES",
          },
          areaServed: NEGOCIO.pueblos.map((p) => ({ "@type": "City", name: p })),
          openingHours: "Mo-Su 00:00-23:59",
          priceRange: "€€",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: LandingPage,
});

const SERVICIOS = [
  {
    icon: Droplets,
    title: "Desatascos",
    desc: "Tuberías, fregaderos, inodoros y arquetas. Equipos profesionales sin romper.",
  },
  {
    icon: Wrench,
    title: "Instalaciones",
    desc: "Renovación de tuberías, grifería, sanitarios y detección de fugas con tecnología.",
  },
  {
    icon: Flame,
    title: "Calefacción",
    desc: "Calderas, radiadores, suelo radiante. Mantenimiento y reparación urgente.",
  },
  {
    icon: Bath,
    title: "Reformas de baño",
    desc: "Reforma integral llave en mano: diseño, fontanería, alicatado y sanitarios.",
  },
];

const PROCESO = [
  { n: "01", title: "Llamada o WhatsApp", desc: "Cuéntanos qué pasa. Te respondemos al momento." },
  { n: "02", title: "Diagnóstico claro", desc: "Vamos, valoramos y te damos un presupuesto sin sorpresas." },
  { n: "03", title: "Reparación garantizada", desc: "Solucionamos en el día. Trabajos con garantía por escrito." },
];

const TESTIMONIOS = [
  {
    nombre: "PRUEBAA_CLIENTE_1",
    pueblo: "PRUEBAA_PUEBLO_1",
    texto: "Llegaron en media hora con una fuga importante. Profesionales y limpios. Repetiré sin duda.",
  },
  {
    nombre: "PRUEBAA_CLIENTE_2",
    pueblo: "PRUEBAA_PUEBLO_2",
    texto: "Me reformaron el baño en una semana, presupuesto cerrado y cumplieron al día. Top.",
  },
  {
    nombre: "PRUEBAA_CLIENTE_3",
    pueblo: "PRUEBAA_PUEBLO_3",
    texto: "Avería de caldera un domingo y vinieron igual. Honestos con el precio. Muy recomendable.",
  },
];

const FAQS = [
  { q: "¿Atendéis urgencias 24h?", a: `Sí, atendemos urgencias de fontanería 24/7 en ${NEGOCIO.zona} y pueblos cercanos, también festivos.` },
  { q: "¿El presupuesto tiene coste?", a: "No. Hacemos presupuesto sin compromiso y sin coste de desplazamiento dentro de nuestra zona." },
  { q: "¿En qué zona trabajáis?", a: `Trabajamos en ${NEGOCIO.zona} e inmediaciones, incluyendo ${NEGOCIO.pueblos.slice(0, 4).join(", ")} y más.` },
  { q: "¿Ofrecéis garantía?", a: "Sí, todos nuestros trabajos llevan garantía por escrito y factura." },
  { q: "¿Qué formas de pago aceptáis?", a: "Efectivo, tarjeta y Bizum. Te entregamos factura siempre." },
];

function LandingPage() {
  useReveal();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <Services />
        <Process />
        <Testimonials />
        <Coverage />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <MobileStickyCta />
    </div>
  );
}

/* -------------------- HEADER -------------------- */
function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border shadow-card"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
        <a href="#top" className="flex items-center gap-2 font-display font-bold text-lg">
          <span className="grid h-9 w-9 place-items-center rounded-lg gradient-cta text-primary-foreground shadow-elegant">
            <Droplets className="h-5 w-5" />
          </span>
          <span>{NEGOCIO.nombre}</span>
        </a>

        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-ink">
          <a href="#servicios" className="hover:text-primary transition-colors">Servicios</a>
          <a href="#proceso" className="hover:text-primary transition-colors">Cómo trabajamos</a>
          <a href="#zona" className="hover:text-primary transition-colors">Zona</a>
          <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <a
            href={TELEFONO_HREF}
            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-semibold hover:border-primary hover:text-primary transition"
          >
            <Phone className="h-4 w-4" />
            {NEGOCIO.telefono}
          </a>
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-4 py-2 text-sm font-semibold hover:opacity-90 animate-pulse-cta"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
        </div>

        <button
          aria-label="Abrir menú"
          className="md:hidden grid h-10 w-10 place-items-center rounded-lg border border-border"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background animate-fade-in">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3 text-sm font-medium">
            <a href="#servicios" onClick={() => setOpen(false)} className="py-2">Servicios</a>
            <a href="#proceso" onClick={() => setOpen(false)} className="py-2">Cómo trabajamos</a>
            <a href="#zona" onClick={() => setOpen(false)} className="py-2">Zona</a>
            <a href="#faq" onClick={() => setOpen(false)} className="py-2">FAQ</a>
          </nav>
        </div>
      )}
    </header>
  );
}

/* -------------------- HERO -------------------- */
function Hero() {
  return (
    <section id="top" className="relative overflow-hidden gradient-hero pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" aria-hidden />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-accent/10 blur-3xl" aria-hidden />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2 md:gap-14">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-semibold text-primary backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            Urgencias 24h · Atención en menos de 60 min
          </span>
          <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] text-foreground md:text-6xl">
            {NEGOCIO.nombre}
            <span className="block text-primary">Fontanero en {NEGOCIO.zona}</span>
            <span className="block text-slate-ink text-2xl md:text-3xl font-semibold mt-2">
              e inmediaciones
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-base md:text-lg text-muted-foreground">
            Reparaciones rápidas, presupuesto sin compromiso y trabajo garantizado por escrito.
            Más de {NEGOCIO.anios} años solucionando fugas, atascos y reformas en tu zona.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href={TELEFONO_HREF}
              className="group inline-flex items-center gap-2 rounded-full gradient-cta text-primary-foreground px-6 py-3 text-base font-semibold shadow-elegant transition-transform hover:scale-[1.02]"
            >
              <PhoneCall className="h-5 w-5" />
              Llamar ahora
            </a>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-6 py-3 text-base font-semibold animate-pulse-cta hover:opacity-95"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp directo
            </a>
          </div>

          <div className="mt-7 flex items-center gap-5 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-accent text-accent" />
              ))}
              <span className="ml-1 font-semibold text-foreground">4.9/5</span>
            </div>
            <span className="hidden sm:inline">· Más de 500 trabajos realizados</span>
          </div>
        </div>

        <div className="relative animate-fade-up [animation-delay:120ms]">
          <div className="relative overflow-hidden rounded-3xl shadow-elegant">
            <img
              src={heroTools}
              alt={`Herramientas de fontanería del servicio de ${NEGOCIO.nombre} en ${NEGOCIO.zona}`}
              width={1920}
              height={1080}
              className="h-full w-full object-cover"
            />
          </div>
          {/* badge flotante */}
          <div className="absolute -bottom-6 -left-4 md:-left-8 max-w-[260px] rounded-2xl bg-background border border-border p-4 shadow-card animate-float">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold">Llegamos en &lt; 60 min</p>
                <p className="text-xs text-muted-foreground">Urgencias en {NEGOCIO.zona}</p>
              </div>
            </div>
          </div>
          <div className="absolute -top-5 -right-4 md:-right-6 rounded-2xl bg-background border border-border p-3 shadow-card animate-float [animation-delay:-3s]">
            <div className="flex items-center gap-2 text-xs font-semibold">
              <ShieldCheck className="h-4 w-4 text-primary" />
              Garantía por escrito
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- TRUST STRIP -------------------- */
function TrustStrip() {
  const items = [
    { icon: Clock, title: "24/7", desc: "Urgencias todos los días" },
    { icon: BadgeCheck, title: "Presupuesto gratis", desc: "Sin compromiso" },
    { icon: ShowerHead, title: `+${NEGOCIO.anios} años`, desc: "Experiencia local" },
    { icon: ShieldCheck, title: "Garantía", desc: "Trabajos certificados" },
  ];
  return (
    <section className="border-y border-border bg-secondary/40">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-8 md:grid-cols-4">
        {items.map((it, i) => (
          <div key={i} className="reveal flex items-center gap-3" style={{ transitionDelay: `${i * 80}ms` }}>
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-background border border-border text-primary">
              <it.icon className="h-5 w-5" strokeWidth={1.6} />
            </div>
            <div>
              <p className="text-sm font-semibold">{it.title}</p>
              <p className="text-xs text-muted-foreground">{it.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* -------------------- SERVICIOS -------------------- */
function Services() {
  return (
    <section id="servicios" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="reveal max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Servicios</p>
          <h2 className="mt-2 font-display text-3xl md:text-5xl font-bold">
            Todo lo que tu fontanería necesita
          </h2>
          <p className="mt-3 text-muted-foreground">
            Profesionales con herramienta propia y recambios. Sin sorpresas, sin esperas.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICIOS.map((s, i) => (
            <article
              key={s.title}
              className="reveal group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant hover:border-primary/40"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                <s.icon className="h-6 w-6" strokeWidth={1.5} />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- PROCESO -------------------- */
function Process() {
  return (
    <section id="proceso" className="bg-secondary/40 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="reveal text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Cómo trabajamos</p>
          <h2 className="mt-2 font-display text-3xl md:text-5xl font-bold">Rápido, claro y garantizado</h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {PROCESO.map((p, i) => (
            <div
              key={p.n}
              className="reveal relative rounded-2xl border border-border bg-background p-7 shadow-card"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <span className="font-display text-5xl font-extrabold text-primary/15">{p.n}</span>
              <h3 className="mt-3 font-display text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- TESTIMONIOS -------------------- */
function Testimonials() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="reveal max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Lo que dicen</p>
          <h2 className="mt-2 font-display text-3xl md:text-5xl font-bold">Vecinos que ya nos llamaron</h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {TESTIMONIOS.map((t, i) => (
            <figure
              key={i}
              className="reveal rounded-2xl border border-border bg-card p-6 shadow-card"
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <blockquote className="mt-4 text-sm leading-relaxed text-foreground">
                "{t.texto}"
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-primary/10 font-display font-bold text-primary">
                  {t.nombre.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold">{t.nombre}</p>
                  <p className="text-xs text-muted-foreground">{t.pueblo}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- ZONA -------------------- */
function Coverage() {
  return (
    <section id="zona" className="bg-secondary/40 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2 md:items-center">
        <div className="reveal">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Zona de cobertura</p>
          <h2 className="mt-2 font-display text-3xl md:text-5xl font-bold">
            Cerca de ti, en {NEGOCIO.zona}
          </h2>
          <p className="mt-3 text-muted-foreground">
            Trabajamos en {NEGOCIO.zona} y todos los pueblos de alrededor. Si tu pueblo no aparece,
            llámanos: probablemente también vamos.
          </p>
          <ul className="mt-6 grid grid-cols-2 gap-2">
            {NEGOCIO.pueblos.map((p) => (
              <li key={p} className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4 text-primary" />
                {p}
              </li>
            ))}
          </ul>
        </div>
        <div className="reveal">
          <div className="relative aspect-square overflow-hidden rounded-3xl border border-border bg-background shadow-card">
            {/* TODO: sustituye este placeholder por el embed real de tu ficha de Google Business Profile */}
            <div className="absolute inset-0 grid place-items-center bg-gradient-to-br from-primary/5 via-background to-accent/5">
              <div className="text-center px-6">
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl gradient-cta text-primary-foreground shadow-elegant">
                  <MapPin className="h-7 w-7" />
                </div>
                <p className="mt-4 font-display text-lg font-semibold">Mapa de cobertura</p>
                <p className="mt-1 text-xs text-muted-foreground max-w-xs mx-auto">
                  Sustituye este bloque por el embed de Google Maps de tu ficha de Google Business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- FAQ -------------------- */
function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4">
        <div className="reveal text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Preguntas frecuentes</p>
          <h2 className="mt-2 font-display text-3xl md:text-5xl font-bold">Lo que más nos preguntan</h2>
        </div>
        <div className="mt-10 divide-y divide-border rounded-2xl border border-border bg-card">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <button
                type="button"
                key={f.q}
                onClick={() => setOpen(isOpen ? null : i)}
                className="block w-full text-left"
                aria-expanded={isOpen}
              >
                <div className="flex items-center justify-between gap-4 px-5 py-5">
                  <span className="font-semibold text-foreground">{f.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-primary transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </div>
                <div
                  className={`grid overflow-hidden px-5 transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="min-h-0 text-sm text-muted-foreground">{f.a}</div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* -------------------- CTA FINAL -------------------- */
function FinalCta() {
  return (
    <section className="relative overflow-hidden">
      <div className="gradient-cta">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24 text-primary-foreground">
          <div className="reveal grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="font-display text-3xl md:text-5xl font-extrabold">
                ¿Tienes una fuga ahora mismo?
              </h2>
              <p className="mt-3 text-primary-foreground/85 max-w-md">
                Llámanos y vamos al momento. Sin esperas, sin sorpresas en el presupuesto.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 md:justify-end">
              <a
                href={TELEFONO_HREF}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-background text-primary px-6 py-4 text-lg font-bold shadow-elegant hover:scale-[1.02] transition-transform"
              >
                <PhoneCall className="h-5 w-5" />
                {NEGOCIO.telefono}
              </a>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent text-accent-foreground px-6 py-4 text-lg font-bold animate-pulse-cta"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- FOOTER -------------------- */
function Footer() {
  return (
    <footer className="border-t border-border bg-background pb-24 md:pb-12 pt-14">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 font-display font-bold text-lg">
            <span className="grid h-9 w-9 place-items-center rounded-lg gradient-cta text-primary-foreground">
              <Droplets className="h-5 w-5" />
            </span>
            {NEGOCIO.nombre} Fontanería
          </div>
          <p className="mt-3 text-sm text-muted-foreground max-w-xs">
            Fontanero de confianza en {NEGOCIO.zona} e inmediaciones. Urgencias 24h.
          </p>
        </div>
        <div className="text-sm">
          <p className="font-semibold mb-3">Contacto</p>
          <ul className="space-y-2 text-muted-foreground">
            <li><a className="hover:text-primary" href={TELEFONO_HREF}>{NEGOCIO.telefono}</a></li>
            <li><a className="hover:text-primary" href={`mailto:${NEGOCIO.correo}`}>{NEGOCIO.correo}</a></li>
            <li>{NEGOCIO.direccion}</li>
            <li>{NEGOCIO.horario}</li>
          </ul>
        </div>
        <div className="text-sm">
          <p className="font-semibold mb-3">Zona</p>
          <p className="text-muted-foreground">
            {NEGOCIO.pueblos.join(" · ")}
          </p>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-6xl flex-col gap-2 border-t border-border px-4 pt-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} {NEGOCIO.nombre} Fontanería. Todos los derechos reservados.</p>
        <p>Aviso legal · Política de privacidad</p>
      </div>
    </footer>
  );
}

/* -------------------- MOBILE STICKY CTA -------------------- */
function MobileStickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 md:hidden border-t border-border bg-background/95 backdrop-blur px-3 py-2 shadow-[0_-8px_24px_-12px_rgba(0,0,0,0.15)]">
      <div className="grid grid-cols-2 gap-2">
        <a
          href={TELEFONO_HREF}
          className="inline-flex items-center justify-center gap-2 rounded-full gradient-cta text-primary-foreground px-4 py-3 text-sm font-semibold"
        >
          <PhoneCall className="h-4 w-4" /> Llamar
        </a>
        <a
          href={WHATSAPP_HREF}
          target="_blank"
          rel="noopener"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-accent text-accent-foreground px-4 py-3 text-sm font-semibold animate-pulse-cta"
        >
          <MessageCircle className="h-4 w-4" /> WhatsApp
        </a>
      </div>
    </div>
  );
}
