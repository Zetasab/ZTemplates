import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import heroFloat from "../assets/hero-float.jpg";
import catFlotadores from "../assets/cat-flotadores.jpg";
import catTextiles from "../assets/cat-textiles.jpg";
import gogglesDetail from "../assets/goggles-detail.jpg";
import prodAnillo from "../assets/prod-anillo.jpg";
import prodToalla from "../assets/prod-toalla.jpg";
import prodGafas from "../assets/prod-gafas.jpg";
import prodLounge from "../assets/prod-lounge.jpg";
import lifestylePool from "../assets/lifestyle-pool.jpg";
import ritualElegir from "../assets/ritual-elegir.jpg";
import ritualSumergir from "../assets/ritual-sumergir.jpg";
import ritualReposar from "../assets/ritual-reposar.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const products = [
  { name: "Anillo 'Sienna'", desc: "Flotador de PVC reforzado", price: "85,00 €", img: prodAnillo },
  { name: "Toalla 'Riviera'", desc: "Algodón egipcio 600 GSM", price: "120,00 €", img: prodToalla },
  { name: "Gafas 'Émeraude'", desc: "Óptica de precisión UV400", price: "65,00 €", img: prodGafas },
  { name: "Lounge 'Nuage'", desc: "Chaise inflable premium", price: "195,00 €", img: prodLounge },
];

const ritual = [
  { step: "01", title: "Elegir", body: "Selecciona la pieza que acompañará tu ritual — una toalla, un flotador, una mirada nueva bajo el agua.", img: ritualElegir },
  { step: "02", title: "Sumergir", body: "Rompe la superficie. El cloro se convierte en luz, el calor en memoria líquida.", img: ritualSumergir },
  { step: "03", title: "Reposar", body: "Extiende la toalla, cierra los ojos. El verano se mide en horas que no vuelven.", img: ritualReposar },
];

const testimonials = [
  "«La toalla más honesta que he tocado.» — VOGUE ESPAÑA",
  "«AZUL. redefine el objeto de piscina.» — ARCHITECTURAL DIGEST",
  "«Diseño que se moja sin perder la calma.» — KINFOLK",
  "«El verano tiene por fin una marca.» — MONOCLE",
  "«Piezas que sobreviven al sol y a las modas.» — WALLPAPER*",
];

function Index() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Parallax en imágenes marcadas
      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
        const speed = Number(el.dataset.parallax ?? "-15");
        gsap.to(el, {
          yPercent: speed,
          ease: "none",
          scrollTrigger: {
            trigger: el.parentElement,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      // Reveal on scroll
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el, i) => {
        gsap.from(el, {
          opacity: 0,
          y: 60,
          duration: 1.1,
          ease: "expo.out",
          delay: (i % 4) * 0.05,
          scrollTrigger: { trigger: el, start: "top 85%" },
        });
      });

      // Pin en sección oscura
      const pinned = document.querySelector("[data-pin]");
      if (pinned) {
        ScrollTrigger.create({
          trigger: pinned,
          start: "top top",
          end: "+=80%",
          pin: true,
          pinSpacing: true,
        });
        gsap.from("[data-pin] [data-pin-item]", {
          opacity: 0,
          y: 40,
          stagger: 0.15,
          duration: 1,
          ease: "expo.out",
          scrollTrigger: { trigger: pinned, start: "top 60%" },
        });
      }

      // Marquee
      const marquee = document.querySelector<HTMLElement>("[data-marquee-inner]");
      if (marquee) {
        gsap.to(marquee, {
          xPercent: -50,
          duration: 40,
          repeat: -1,
          ease: "linear",
        });
      }

      // Hero mousemove parallax on blobs
      const hero = document.querySelector<HTMLElement>("[data-hero]");
      if (hero) {
        const onMove = (e: MouseEvent) => {
          const x = (e.clientX / window.innerWidth - 0.5) * 30;
          const y = (e.clientY / window.innerHeight - 0.5) * 30;
          gsap.to("[data-hero-blob]", { x, y, duration: 1.2, ease: "power3.out" });
          gsap.to("[data-hero-float]", { x: -x * 0.6, y: -y * 0.6, duration: 1.4, ease: "power3.out" });
        };
        hero.addEventListener("mousemove", onMove);
        return () => hero.removeEventListener("mousemove", onMove);
      }
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className="bg-sand text-ink font-serif selection:bg-water/20 overflow-x-hidden">
      {/* NAV */}
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-6 py-6 md:px-12 backdrop-blur-md bg-sand/40 border-b border-ink/5">
        <span className="font-display text-3xl tracking-tighter text-water">AZUL.</span>
        <div className="hidden md:flex gap-12 text-[10px] uppercase tracking-[0.25em] font-medium">
          <a href="#colecciones" className="hover:text-sun transition-colors">Colecciones</a>
          <a href="#ritual" className="hover:text-sun transition-colors">El Ritual</a>
          <a href="#editorial" className="hover:text-sun transition-colors">Editorial</a>
          <a href="#boletin" className="hover:text-sun transition-colors">Contacto</a>
        </div>
        <div className="text-[10px] uppercase tracking-[0.25em] border-b border-ink/20 pb-1 cursor-pointer hover:border-ink transition-all">
          Carrito (0)
        </div>
      </nav>

      {/* HERO */}
      <section data-hero className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-24">
        <div className="absolute inset-0 z-0 opacity-40">
          <div data-hero-blob className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-water rounded-full blur-[140px] animate-pulse" />
          <div data-hero-blob className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-sun/50 rounded-full blur-[160px]" />
        </div>

        <div className="relative z-10 text-center px-6">
          <span className="text-[10px] uppercase tracking-[0.4em] text-water animate-reveal block mb-6">Colección Verano 2026</span>
          <h1 className="font-display text-[clamp(5rem,18vw,15rem)] leading-[0.85] tracking-tighter text-ink mb-8 animate-ripple">
            EL VERANO<br />
            <span className="text-water italic">INFINITO</span>
          </h1>
          <p className="max-w-lg mx-auto text-lg md:text-xl text-balance opacity-80 animate-reveal [animation-delay:400ms]">
            Objetos de deseo para la orilla, diseñados bajo el sol del Mediterráneo. Flotadores, toallas y gafas que elevan el ritual del baño.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-4 animate-reveal [animation-delay:600ms]">
            <a href="#colecciones" className="px-10 py-4 bg-ink text-sand text-[10px] uppercase tracking-[0.3em] hover:bg-water transition-colors duration-500">
              Sumergir
            </a>
            <a href="#ritual" className="px-10 py-4 border border-ink/20 text-ink text-[10px] uppercase tracking-[0.3em] hover:border-ink transition-colors duration-500">
              El Ritual
            </a>
          </div>
        </div>

        {/* Floating hero image */}
        <div data-hero-float className="absolute bottom-[-8%] right-[3%] w-[38%] max-w-[420px] rotate-6 animate-float hidden lg:block">
          <div className="bg-white ring-1 ring-black/5 p-4 shadow-2xl">
            <img
              src={heroFloat}
              alt="Flotador escultural blanco sobre agua turquesa"
              width={1024}
              height={1280}
              className="w-full h-auto aspect-[4/5] object-cover"
            />
            <div className="pt-3 flex justify-between text-[9px] uppercase tracking-[0.25em] text-ink/60">
              <span>Colección N° 01</span>
              <span>AZUL.</span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-reveal [animation-delay:900ms]">
          <span className="text-[9px] uppercase tracking-[0.4em] text-ink/50">Deslizar</span>
          <div className="w-[1px] h-16 bg-ink/20 relative overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-1/2 bg-ink animate-bounce" />
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section id="colecciones" className="px-6 py-32 md:px-24">
        <div className="max-w-7xl mx-auto mb-16 flex flex-wrap items-end justify-between gap-6" data-reveal>
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-water">Capítulo I</span>
            <h2 className="font-display text-6xl md:text-8xl mt-3 leading-none">Las Colecciones</h2>
          </div>
          <p className="max-w-sm text-ink/60 text-lg">
            Tres familias, un mismo horizonte: piezas para flotar, secarse y mirar el cielo bajo el agua.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">
          <a href="#colecciones" className="md:col-span-8 group cursor-pointer relative h-[500px] overflow-hidden" data-reveal>
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={catFlotadores}
                alt="Superficie de agua turquesa con cáusticos de sol"
                width={1600}
                height={1000}
                loading="lazy"
                data-parallax="-15"
                className="w-full h-[130%] object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/20 to-transparent group-hover:from-ink/40 transition-all duration-700" />
            <div className="absolute bottom-8 left-8 text-sand">
              <span className="text-[10px] uppercase tracking-[0.3em] opacity-80">01 — Flotar</span>
              <h3 className="font-display text-6xl md:text-7xl uppercase mt-2">Flotadores</h3>
              <span className="text-xs tracking-[0.3em] uppercase mt-4 inline-block border-b border-sand/50 pb-1">Ver la serie</span>
            </div>
          </a>

          <div className="md:col-span-4 flex flex-col gap-6">
            <a href="#colecciones" className="group cursor-pointer relative flex-1 min-h-[240px] overflow-hidden" data-reveal>
              <img
                src={catTextiles}
                alt="Pila de toallas de piscina en tonos tierra"
                width={900}
                height={1200}
                loading="lazy"
                data-parallax="-10"
                className="absolute inset-0 w-full h-[120%] object-cover"
              />
              <div className="absolute inset-0 bg-ink/20 group-hover:bg-ink/5 transition-all duration-700" />
              <div className="absolute bottom-6 left-6 text-sand">
                <span className="text-[10px] uppercase tracking-[0.3em] opacity-80">02 — Secarse</span>
                <h3 className="font-display text-4xl uppercase mt-2">Textiles</h3>
              </div>
            </a>
            <a href="#colecciones" className="group cursor-pointer relative flex-1 min-h-[240px] overflow-hidden bg-ink" data-reveal>
              <img
                src={gogglesDetail}
                alt="Gafas de natación con acabados dorados"
                width={1000}
                height={1250}
                loading="lazy"
                data-parallax="-10"
                className="absolute inset-0 w-full h-[120%] object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-ink/30 group-hover:bg-ink/10 transition-all duration-700" />
              <div className="absolute bottom-6 left-6 text-sand">
                <span className="text-[10px] uppercase tracking-[0.3em] opacity-80">03 — Mirar</span>
                <h3 className="font-display text-4xl uppercase mt-2">Óptica</h3>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* PINNED DARK */}
      <section data-pin id="editorial" className="bg-ink text-sand py-32 md:py-40 overflow-hidden min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center w-full">
          <div className="relative">
            <div className="absolute -top-24 -left-10 font-display text-[10rem] md:text-[15rem] leading-none text-sand/[0.06] pointer-events-none select-none">
              AZUL
            </div>
            <div className="relative aspect-[4/5] overflow-hidden ring-1 ring-white/10">
              <img
                src={gogglesDetail}
                alt="Gafas de natación en mármol mojado"
                width={1000}
                height={1250}
                loading="lazy"
                data-parallax="-8"
                className="w-full h-[115%] object-cover"
              />
            </div>
          </div>
          <div className="space-y-8">
            <span data-pin-item className="text-[10px] uppercase tracking-[0.4em] text-sun block">Capítulo II — Visión Solar</span>
            <h2 data-pin-item className="font-display text-6xl md:text-8xl leading-[0.9] text-sun">
              LA CLARIDAD<br />DE LAS AGUAS
            </h2>
            <p data-pin-item className="text-xl opacity-70 leading-relaxed max-w-lg">
              Nuestra óptica de precisión no solo protege; transforma la luz del mediodía en una experiencia cinematográfica bajo la superficie. Cada par se moldea a mano con silicona de grado médico y lentes anti-niebla de doble capa.
            </p>
            <ul className="space-y-3 text-[10px] uppercase tracking-[0.25em] opacity-60">
              <li data-pin-item>— Protección UV400 certificada</li>
              <li data-pin-item>— Anti-niebla de larga duración</li>
              <li data-pin-item>— Silicona de grado quirúrgico</li>
              <li data-pin-item>— Cinco tonos, un mismo horizonte</li>
            </ul>
            <div data-pin-item>
              <a href="#productos" className="inline-block border-b border-sun pb-2 text-sun text-[10px] uppercase tracking-[0.3em] hover:text-sand hover:border-sand transition-all">
                Explorar Gafas
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT GRID */}
      <section id="productos" className="py-32 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-between items-end mb-16 gap-6" data-reveal>
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-water">Capítulo III</span>
              <h2 className="font-display text-5xl md:text-7xl mt-3 leading-none">Esenciales de Temporada</h2>
            </div>
            <a href="#" className="text-[10px] uppercase tracking-[0.3em] border-b border-ink/20 pb-1 hover:border-ink transition-all">
              Todos los productos →
            </a>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
            {products.map((p) => (
              <div key={p.name} className="group cursor-pointer" data-reveal>
                <div className="aspect-square bg-sand mb-5 overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.name}
                    width={800}
                    height={800}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  />
                </div>
                <h4 className="text-xs uppercase tracking-[0.2em] font-medium">{p.name}</h4>
                <p className="text-xs opacity-50 mt-1 italic">{p.desc}</p>
                <p className="text-sm mt-2 font-medium">{p.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIFESTYLE PARALLAX */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={lifestylePool}
            alt="Piscina vista desde arriba con nadador"
            width={1920}
            height={1200}
            loading="lazy"
            data-parallax="-25"
            className="w-full h-[130%] object-cover"
          />
          <div className="absolute inset-0 bg-ink/40" />
        </div>
        <div className="relative z-10 w-full text-center px-6" data-reveal>
          <span className="text-sand text-[10px] uppercase tracking-[0.5em] mb-6 block opacity-80">La Vida Azul</span>
          <h2 className="font-display text-sand text-6xl md:text-9xl leading-[0.9] mb-8">
            EL ARTE DE<br />NO HACER NADA
          </h2>
          <p className="text-sand/80 max-w-xl mx-auto mb-10 text-lg italic">
            El verano no se conquista; se recibe. Con la piel abierta y el agua a favor.
          </p>
          <a href="#boletin" className="inline-block px-10 py-4 bg-sand text-ink text-[10px] uppercase tracking-[0.3em] hover:bg-sun hover:text-sand transition-all">
            Leer historia
          </a>
        </div>
      </section>

      {/* RITUAL ZIGZAG */}
      <section id="ritual" className="py-32 px-6 md:px-12 bg-sand">
        <div className="max-w-7xl mx-auto mb-24 text-center" data-reveal>
          <span className="text-[10px] uppercase tracking-[0.4em] text-water">Capítulo IV</span>
          <h2 className="font-display text-6xl md:text-8xl mt-4 leading-[0.9]">El Ritual del Agua</h2>
          <p className="max-w-xl mx-auto mt-6 text-ink/60 text-lg">
            Tres gestos que separan el día común del día perfecto.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-32">
          {ritual.map((r, i) => (
            <div key={r.step} className={`grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center ${i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""}`}>
              <div className="relative overflow-hidden aspect-[4/5]" data-reveal>
                <img
                  src={r.img}
                  alt={r.title}
                  width={1000}
                  height={1250}
                  loading="lazy"
                  data-parallax="-10"
                  className="w-full h-[115%] object-cover"
                />
              </div>
              <div className="space-y-6" data-reveal>
                <span className="font-display text-water text-7xl md:text-8xl block leading-none">{r.step}</span>
                <h3 className="font-display text-5xl md:text-6xl uppercase leading-none">{r.title}</h3>
                <p className="text-lg text-ink/70 max-w-md leading-relaxed">{r.body}</p>
                <div className="pt-2">
                  <span className="text-[10px] uppercase tracking-[0.3em] border-b border-ink/20 pb-1">
                    Descubrir esta pieza →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MARQUEE / PRESS */}
      <section className="bg-ink text-sand py-16 overflow-hidden border-y border-sand/10">
        <div className="relative w-full overflow-hidden">
          <div data-marquee-inner className="flex gap-16 whitespace-nowrap font-display text-3xl md:text-5xl uppercase tracking-tight">
            {[...testimonials, ...testimonials].map((t, i) => (
              <span key={i} className="flex items-center gap-16">
                {t}
                <span className="text-sun">✦</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section id="boletin" className="py-32 px-6 md:px-12 bg-sand">
        <div className="max-w-4xl mx-auto text-center" data-reveal>
          <span className="text-[10px] uppercase tracking-[0.4em] text-water">Boletín de Sol</span>
          <h2 className="font-display text-6xl md:text-8xl mt-4 leading-[0.9]">
            Recibe el verano <br /><span className="italic text-water">en tu bandeja</span>
          </h2>
          <p className="max-w-lg mx-auto mt-6 text-ink/60 text-lg italic">
            Notas sobre nuevas colecciones, destinos secretos y objetos que aún no existen. Sin ruido, solo sol.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="max-w-md mx-auto mt-12 flex border-b-2 border-ink pb-3"
          >
            <input
              type="email"
              required
              placeholder="tu@email.com"
              className="bg-transparent flex-1 text-sm focus:outline-none placeholder:text-ink/40"
            />
            <button
              type="submit"
              className="text-[10px] uppercase tracking-[0.3em] font-bold hover:text-water transition-colors"
            >
              Unirse →
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-sand pt-24 pb-10 px-6 md:px-12 border-t border-ink/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-2">
            <h3 className="font-display text-5xl mb-4 text-water">AZUL.</h3>
            <p className="text-sm opacity-60 max-w-sm italic">
              Celebrando el estilo de vida acuático desde la costa mediterránea. Diseño hecho para el cloro, la sal y el paso del tiempo.
            </p>
          </div>
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.25em] font-bold mb-6">Navegación</h4>
            <ul className="space-y-3 text-sm opacity-70">
              <li><a href="#colecciones" className="hover:text-water transition-colors">Colecciones</a></li>
              <li><a href="#ritual" className="hover:text-water transition-colors">El Ritual</a></li>
              <li><a href="#editorial" className="hover:text-water transition-colors">Editorial</a></li>
              <li><a href="#boletin" className="hover:text-water transition-colors">Contacto</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.25em] font-bold mb-6">Social</h4>
            <ul className="space-y-3 text-sm opacity-70">
              <li><a href="#" className="hover:text-water transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-water transition-colors">Pinterest</a></li>
              <li><a href="#" className="hover:text-water transition-colors">TikTok</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center border-t border-ink/10 pt-8 gap-4 text-[9px] uppercase tracking-[0.3em] opacity-40">
          <span>© 2026 AZUL de Verano S.L.</span>
          <span>Hecho bajo el sol del Mediterráneo</span>
        </div>
      </footer>
    </div>
  );
}
