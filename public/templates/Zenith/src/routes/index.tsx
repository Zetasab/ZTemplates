import { createFileRoute } from "@tanstack/react-router";
import { useSiteAnimations } from "@/hooks/useSiteAnimations";
import heroImg from "@/assets/hero.jpg";
import chassisImg from "@/assets/chassis.jpg";
import exteriorImg from "@/assets/exterior.jpg";
import interiorImg from "@/assets/interior.jpg";
import galleryRearImg from "@/assets/gallery-rear.jpg";
import galleryWheelImg from "@/assets/gallery-wheel.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const HERO_TITLE_LINE_1 = ["El", "silencio", "es", "la"];
const HERO_TITLE_LINE_2 = ["forma", "final", "del", "poder."];

function Index() {
  useSiteAnimations();

  return (
    <div className="bg-background text-foreground font-sans antialiased overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 mix-blend-difference">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#top" className="text-sm font-semibold tracking-[0.3em] uppercase">
            Æther
          </a>
          <div className="flex gap-8 items-center">
            <a
              href="#configurar"
              className="hidden sm:inline text-sm font-medium tracking-tight hover:text-[color:var(--color-accent)] transition-colors"
            >
              Configurar
            </a>
            <a
              href="#configurar"
              className="bg-foreground text-background text-sm font-medium py-2 pr-4 pl-3 flex items-center gap-2 ring-1 ring-foreground transition-transform hover:-translate-y-px"
            >
              <span className="size-4 flex items-center justify-center">
                <span className="size-1 bg-background rounded-full" />
              </span>
              Reservar Ahora
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="top"
        className="relative h-screen min-h-[720px] flex flex-col justify-end pb-24 overflow-hidden"
      >
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={heroImg}
            alt="Æther GT — hipercoche híbrido en estudio brutalista"
            width={1920}
            height={1088}
            data-parallax="0.15"
            className="w-full h-[120%] object-cover object-center opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <span className="block text-[color:var(--color-accent)] text-sm font-semibold tracking-[0.25em] uppercase mb-6 reveal-fade">
            Ingeniería de Precisión
          </span>
          <h1
            data-hero-title
            className="text-6xl md:text-8xl font-medium leading-[0.95] text-balance max-w-4xl tracking-tighter mb-12"
          >
            <span className="block overflow-hidden">
              {HERO_TITLE_LINE_1.map((w, i) => (
                <span
                  key={i}
                  data-word
                  className="inline-block mr-[0.25em] will-change-transform"
                >
                  {w}
                </span>
              ))}
            </span>
            <span className="block overflow-hidden">
              {HERO_TITLE_LINE_2.map((w, i) => (
                <span
                  key={i}
                  data-word
                  className="inline-block mr-[0.25em] will-change-transform"
                >
                  {w}
                </span>
              ))}
            </span>
          </h1>
          <div className="flex items-center gap-4 text-xs uppercase tracking-widest text-[color:var(--color-ink-muted)] reveal-fade">
            <span className="w-10 h-px bg-[color:var(--color-ink-muted)]" />
            Descubre el nuevo Æther GT
          </div>
        </div>
      </section>

      {/* Specs Strip */}
      <section className="py-16 border-y border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            <Spec value={2.1} decimals={1} unit="s" label="0-100 km/h" />
            <Spec value={1050} unit="cv" label="Potencia Combinada" />
            <Spec value={820} unit="km" label="Autonomía WLTP" />
            <Spec value={800} unit="v" label="Carga Ultra-rápida" />
          </div>
        </div>
      </section>

      {/* Hybrid Technology */}
      <section className="py-32 bg-[color:var(--color-surface)]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5 reveal-up">
            <span className="block text-[color:var(--color-accent)] text-xs font-semibold tracking-[0.25em] uppercase mb-6">
              01 — Tecnología Híbrida
            </span>
            <h2 className="text-3xl md:text-4xl font-medium leading-tight text-balance mb-8 tracking-tight">
              Sincronía perfecta entre lo visceral y lo eléctrico.
            </h2>
            <p className="text-[color:var(--color-ink-muted)] text-pretty max-w-[42ch] leading-relaxed">
              Nuestro sistema híbrido no es una alternativa, es una evolución. Un
              motor V8 biturbo de combustión, asistido por tres motores
              eléctricos de flujo axial que eliminan el retraso y proporcionan
              una respuesta inmediata y lineal en cualquier marcha.
            </p>
            <dl className="mt-10 grid grid-cols-2 gap-8 max-w-md">
              <div>
                <dt className="text-xs uppercase tracking-widest text-[color:var(--color-ink-dim)] mb-2">
                  Motor térmico
                </dt>
                <dd className="text-lg font-medium">V8 4.0L Biturbo</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-widest text-[color:var(--color-ink-dim)] mb-2">
                  Motores eléctricos
                </dt>
                <dd className="text-lg font-medium">3 × Flujo Axial</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-widest text-[color:var(--color-ink-dim)] mb-2">
                  Batería
                </dt>
                <dd className="text-lg font-medium">112 kWh · 800V</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-widest text-[color:var(--color-ink-dim)] mb-2">
                  Tracción
                </dt>
                <dd className="text-lg font-medium">AWD Vectorial</dd>
              </div>
            </dl>
          </div>
          <div className="lg:col-span-7 reveal-up">
            <img
              src={chassisImg}
              alt="Chasis híbrido del Æther GT con integración de batería y motor"
              width={1216}
              height={800}
              loading="lazy"
              className="w-full aspect-[4/3] object-cover rounded-sm outline outline-1 -outline-offset-1 outline-white/5"
            />
          </div>
        </div>
      </section>

      {/* Exterior parallax band */}
      <section className="relative py-32">
        <div className="max-w-7xl mx-auto px-6 mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <h2 className="text-4xl md:text-6xl font-medium tracking-tighter leading-[0.95] max-w-3xl reveal-up">
            Diseño esculpido por el aire.
          </h2>
          <p className="text-[color:var(--color-ink-muted)] max-w-sm text-pretty reveal-up">
            Cada línea nace en un túnel de viento y termina en un taller de
            joyería. La aerodinámica activa ajusta alerones y difusores en
            tiempo real.
          </p>
        </div>
        <div className="px-6">
          <div className="relative w-full h-[70vh] overflow-hidden rounded-sm">
            <img
              src={exteriorImg}
              alt="Detalle del faro y fibra de carbono del Æther GT"
              width={1920}
              height={896}
              loading="lazy"
              data-parallax="0.25"
              className="absolute inset-0 w-full h-[130%] object-cover"
            />
            <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 text-xs uppercase tracking-[0.25em] text-white/80 bg-black/40 backdrop-blur px-4 py-2">
              Faro Matrix LED · Carrocería Monocasco Fibra de Carbono
            </div>
          </div>
        </div>
      </section>

      {/* Interior Craftsmanship */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="reveal-up order-2 lg:order-1">
            <img
              src={interiorImg}
              alt="Interior de lujo del Æther GT con salpicadero minimalista"
              width={1024}
              height={1216}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover rounded-sm outline outline-1 -outline-offset-1 outline-white/5"
            />
          </div>
          <div className="flex flex-col order-1 lg:order-2 reveal-up">
            <span className="text-[color:var(--color-accent)] text-xs font-semibold tracking-[0.25em] uppercase mb-4">
              02 — El Habitáculo
            </span>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-8 leading-[1.05]">
              Artesanía mecanizada en cada detalle.
            </h2>
            <p className="text-[color:var(--color-ink-muted)] text-pretty max-w-[44ch] leading-relaxed mb-10">
              Cada mando ha sido tallado en un bloque sólido de aluminio. El
              interior es un refugio de calma, donde el lujo se manifiesta a
              través de la materialidad honesta y no de la ornamentación
              excesiva.
            </p>
            <div className="flex flex-col divide-y divide-border">
              <Row k="Materiales" v="Carbono, Alcántara y aluminio fresado" />
              <Row k="Audio" v="Sistema espacial de 24 canales" />
              <Row k="Displays" v="OLED curvo de 12,3″ + HUD láser" />
              <Row k="Climatización" v="4 zonas · filtración HEPA activa" />
            </div>
          </div>
        </div>
      </section>

      {/* Performance Modes */}
      <section className="py-32 bg-[color:var(--color-surface-2)] text-[color:oklch(0.14_0_0)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
            <h2 className="text-4xl md:text-6xl font-medium tracking-tighter leading-[0.95] max-w-2xl reveal-up">
              Dualidad sin concesiones.
            </h2>
            <div className="max-w-[38ch] reveal-up">
              <p className="text-[color:oklch(0.48_0.005_240)] text-pretty">
                Desde el silencio absoluto del modo eléctrico hasta la furia
                controlada del motor térmico. Tres modos, un mismo carácter.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1 reveal-up">
            <Mode
              index="01. Pure"
              title="Conducción Silenciosa"
              body="Hasta 120 km de autonomía exclusivamente eléctrica para trayectos urbanos impecables, con dirección suavizada y suspensión confort."
            />
            <Mode
              index="02. Velocity"
              inverted
              title="Máximo Rendimiento"
              body="Aerodinámica activa desplegada, entrega instantánea de par y respuesta térmica optimizada para pista. Launch control integrado."
            />
            <Mode
              index="03. Adaptive"
              title="Inteligencia Híbrida"
              body="El sistema gestiona la energía en tiempo real leyendo tu ruta, tráfico y estilo de conducción para maximizar la eficiencia."
            />
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12 reveal-up">
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
              Galería.
            </h2>
            <span className="text-xs uppercase tracking-widest text-[color:var(--color-ink-dim)]">
              Æther GT · 2026
            </span>
          </div>
          <div className="grid grid-cols-12 gap-4 md:gap-6">
            <div className="col-span-12 md:col-span-8 overflow-hidden rounded-sm reveal-up group">
              <img
                src={galleryRearImg}
                alt="Luz trasera Æther GT en la oscuridad"
                width={1216}
                height={800}
                loading="lazy"
                className="w-full aspect-[16/10] object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
              />
            </div>
            <div className="col-span-12 md:col-span-4 overflow-hidden rounded-sm reveal-up group">
              <img
                src={galleryWheelImg}
                alt="Detalle del volante del Æther GT"
                width={800}
                height={1216}
                loading="lazy"
                className="w-full h-full aspect-[2/3] md:aspect-auto md:min-h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <footer id="configurar" className="pt-40 pb-16 bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="block text-[color:var(--color-accent)] text-xs font-semibold tracking-[0.25em] uppercase mb-8 reveal-fade">
            Tu viaje comienza aquí
          </span>
          <h2 className="text-5xl md:text-7xl font-medium tracking-tighter mb-14 leading-[0.95] reveal-up">
            Empieza tu configuración.
          </h2>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center reveal-fade">
            <button className="bg-[color:var(--color-accent)] text-[color:var(--color-accent-foreground)] text-sm font-medium py-3 pr-5 pl-4 flex items-center gap-3 ring-1 ring-[color:var(--color-accent)] transition-transform hover:-translate-y-px">
              <span className="size-4 flex items-center justify-center">
                <span className="size-1 bg-white rounded-full" />
              </span>
              Diseñar mi Æther
            </button>
            <button className="border border-white/20 text-foreground text-sm font-medium py-3 pr-5 pl-4 flex items-center gap-3 hover:border-white/50 transition-colors">
              Contactar con un especialista
            </button>
          </div>
        </div>

        <div className="mt-40 pt-10 border-t border-border max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between text-[10px] uppercase tracking-[0.25em] text-[color:var(--color-ink-dim)] gap-6">
          <div className="flex flex-wrap gap-8">
            <a href="#" className="hover:text-foreground transition-colors">
              Especificaciones
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Propiedad
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Ubicaciones
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Prensa
            </a>
          </div>
          <span>© 2026 Æther Automotive. Todos los derechos reservados.</span>
        </div>
      </footer>
    </div>
  );
}

function Spec({
  value,
  decimals = 0,
  unit,
  label,
}: {
  value: number;
  decimals?: number;
  unit: string;
  label: string;
}) {
  return (
    <div className="flex flex-col reveal-up">
      <span className="text-4xl md:text-5xl font-medium tracking-tighter leading-none flex items-baseline">
        <span data-counter={value} data-decimals={decimals}>
          0
        </span>
        <span className="text-2xl md:text-3xl ml-1 text-[color:var(--color-accent)]">
          {unit}
        </span>
      </span>
      <span className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-ink-dim)] mt-3">
        {label}
      </span>
    </div>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="py-5 flex justify-between gap-8">
      <span className="text-sm text-[color:var(--color-ink-dim)]">{k}</span>
      <span className="text-sm font-medium text-right">{v}</span>
    </div>
  );
}

function Mode({
  index,
  title,
  body,
  inverted,
}: {
  index: string;
  title: string;
  body: string;
  inverted?: boolean;
}) {
  return (
    <div
      className={
        "p-10 md:p-12 border border-black/5 flex flex-col h-full min-h-[280px] " +
        (inverted
          ? "bg-[color:oklch(0.05_0_0)] text-[color:oklch(0.985_0_0)]"
          : "bg-white")
      }
    >
      <span
        className={
          "text-xs font-semibold uppercase tracking-[0.25em] mb-12 " +
          (inverted
            ? "text-[color:var(--color-accent)]"
            : "text-[color:oklch(0.63_0.005_240)]")
        }
      >
        {index}
      </span>
      <h3 className="text-2xl font-medium mb-4 tracking-tight">{title}</h3>
      <p
        className={
          "text-sm leading-relaxed " +
          (inverted
            ? "text-[color:oklch(0.72_0.005_240)]"
            : "text-[color:oklch(0.48_0.005_240)]")
        }
      >
        {body}
      </p>
    </div>
  );
}
