import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import hero from "@/assets/hero-dachshund.jpg";
import smooth from "@/assets/variant-smooth.jpg";
import longhaired from "@/assets/variant-longhaired.jpg";
import wirehaired from "@/assets/variant-wirehaired.jpg";
import parallaxRun from "@/assets/parallax-run.jpg";
import puppy from "@/assets/puppy.jpg";
import history from "@/assets/history.jpg";
import sizes from "@/assets/sizes.jpg";
import dapple from "@/assets/color-dapple.jpg";
import blacktan from "@/assets/color-blacktan.jpg";
import cream from "@/assets/color-cream.jpg";
import chocolate from "@/assets/color-chocolate.jpg";

gsap.registerPlugin(ScrollTrigger);

const variants = [
  {
    name: "Pelo Corto",
    sub: "Kurzhaar",
    img: smooth,
    desc: "El clásico. Pelaje liso, brillante y pegado al cuerpo. De temperamento valiente, curioso y profundamente leal. Es la silueta que el mundo asocia con el dachshund.",
  },
  {
    name: "Pelo Largo",
    sub: "Langhaar",
    img: longhaired,
    desc: "Elegancia sedosa. Su pelaje fluye especialmente en orejas, pecho y cola. Tienden a ser más tranquilos y afectuosos, herencia de su cruce con spaniels.",
  },
  {
    name: "Pelo Duro",
    sub: "Rauhhaar",
    img: wirehaired,
    desc: "Carácter en estado puro. Cejas pobladas y barba inconfundible. El más juguetón y travieso de los tres, con un punto rebelde heredado de los terriers.",
  },
];

const sizeData = [
  { name: "Estándar", chest: "+35 cm", weight: "hasta 9 kg" },
  { name: "Miniatura", chest: "30 – 35 cm", weight: "4 – 5 kg" },
  { name: "Kaninchen", chest: "hasta 30 cm", weight: "3 – 3.5 kg" },
];

const colors = [
  { name: "Negro y fuego", img: blacktan },
  { name: "Chocolate", img: chocolate },
  { name: "Crema inglesa", img: cream },
  { name: "Arlequín (dapple)", img: dapple },
];

const facts = [
  { n: "1888", t: "El Deutscher Teckelklub funda el primer club oficial en Alemania." },
  { n: "9", t: "Variedades reconocidas oficialmente: 3 pelajes × 3 tamaños." },
  { n: "12-16", t: "Años de esperanza de vida media. Compañeros para toda una era." },
  { n: "1972", t: "Waldi, un dachshund, fue la primera mascota olímpica oficial." },
];

export function DachshundLanding() {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroImgRef = useRef<HTMLImageElement>(null);
  const heroTitleRef = useRef<HTMLHeadingElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance
      gsap.from(heroTitleRef.current, {
        y: 80,
        opacity: 0,
        duration: 1.4,
        ease: "power4.out",
      });
      gsap.from(".hero-sub", {
        y: 40,
        opacity: 0,
        duration: 1.2,
        delay: 0.3,
        ease: "power3.out",
      });
      gsap.from(".hero-meta", {
        y: 20,
        opacity: 0,
        duration: 1,
        delay: 0.6,
        stagger: 0.1,
        ease: "power2.out",
      });

      // Hero parallax (image moves slower)
      gsap.to(heroImgRef.current, {
        yPercent: 25,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Mid parallax band
      gsap.to(".parallax-bg", {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: parallaxRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
      gsap.from(".parallax-text", {
        opacity: 0,
        y: 60,
        duration: 1.2,
        scrollTrigger: {
          trigger: parallaxRef.current,
          start: "top 70%",
        },
      });

      // Reveal sections
      gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => {
        gsap.from(el, {
          y: 60,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
        });
      });

      // Variant cards stagger
      gsap.from(".variant-card", {
        y: 80,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: { trigger: ".variants-grid", start: "top 75%" },
      });

      // Color tiles
      gsap.from(".color-tile", {
        scale: 0.9,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: { trigger: ".colors-grid", start: "top 80%" },
      });

      // Facts counter scroll
      gsap.from(".fact-item", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        scrollTrigger: { trigger: ".facts-row", start: "top 80%" },
      });
    }, sectionsRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionsRef} className="bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/40 border-b border-border/40">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <a href="#top" className="font-display text-lg tracking-wide">
            <span className="text-gradient-warm font-semibold">Teckel</span>
            <span className="text-muted-foreground">.studio</span>
          </a>
          <nav className="hidden md:flex gap-8 text-sm text-muted-foreground">
            <a href="#variantes" className="hover:text-foreground transition">Variantes</a>
            <a href="#tamanos" className="hover:text-foreground transition">Tamaños</a>
            <a href="#colores" className="hover:text-foreground transition">Colores</a>
            <a href="#historia" className="hover:text-foreground transition">Historia</a>
            <a href="#caracter" className="hover:text-foreground transition">Carácter</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="top" ref={heroRef} className="relative h-screen min-h-[700px] overflow-hidden">
        <div className="absolute inset-0 scale-110">
          <img
            ref={heroImgRef}
            src={hero}
            alt="Perro salchicha sobre mármol"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-transparent" />
        </div>

        <div className="relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-24">
          <p className="hero-meta text-xs tracking-[0.4em] uppercase text-primary mb-6">
            Una oda al dachshund · Est. 1888
          </p>
          <h1
            ref={heroTitleRef}
            className="text-6xl md:text-8xl lg:text-[9rem] leading-[0.95] max-w-5xl"
          >
            El perro <em className="text-gradient-warm not-italic">salchicha</em>,
            <br /> una pequeña leyenda.
          </h1>
          <p className="hero-sub mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed">
            Bajo. Alargado. Implacable. Detrás de su silueta inconfundible vive una
            historia de cazadores intrépidos, nobles europeos y compañeros incondicionales.
          </p>
          <div className="hero-meta mt-10 flex gap-6 text-xs tracking-widest uppercase text-muted-foreground">
            <span>3 Pelajes</span>
            <span className="text-primary">·</span>
            <span>3 Tamaños</span>
            <span className="text-primary">·</span>
            <span>Infinita personalidad</span>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground animate-fade-in">
          <span className="text-[10px] tracking-[0.3em] uppercase">Descubre</span>
          <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
        </div>
      </section>

      {/* INTRO */}
      <section className="py-32 px-6 max-w-5xl mx-auto text-center reveal">
        <p className="text-xs tracking-[0.4em] uppercase text-primary mb-6">Capítulo I</p>
        <h2 className="text-4xl md:text-6xl mb-10 leading-tight">
          “Medio perro de alto,
          <br /> dos perros de largo,
          <br /> y cinco perros de corazón.”
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          Originarios de Alemania, los Teckel —o dachshund— fueron criados para
          perseguir tejones bajo tierra. Su cuerpo es ingeniería pura: torso firme,
          patas cortas y un olfato que rivaliza con el del sabueso. Hoy son símbolo
          de elegancia europea y compañerismo sin medida.
        </p>
      </section>

      {/* VARIANTES */}
      <section id="variantes" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 reveal gap-6">
          <div>
            <p className="text-xs tracking-[0.4em] uppercase text-primary mb-4">Capítulo II</p>
            <h2 className="text-5xl md:text-7xl max-w-2xl leading-[1.05]">
              Tres pelajes,
              <br /> tres almas.
            </h2>
          </div>
          <p className="md:max-w-sm text-muted-foreground">
            Cada variedad esconde un temperamento propio. La textura del pelo cuenta,
            literalmente, de dónde viene la sangre del perro.
          </p>
        </div>

        <div className="variants-grid grid md:grid-cols-3 gap-8">
          {variants.map((v, i) => (
            <article
              key={v.name}
              className="variant-card group relative bg-card rounded-sm overflow-hidden shadow-luxe border border-border/30"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={v.img}
                  alt={v.name}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                <span className="absolute top-6 left-6 text-xs tracking-[0.3em] uppercase text-primary">
                  No. 0{i + 1}
                </span>
              </div>
              <div className="p-8 -mt-20 relative">
                <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-2">
                  {v.sub}
                </p>
                <h3 className="text-3xl mb-4">{v.name}</h3>
                <p className="text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* PARALLAX BAND */}
      <section ref={parallaxRef} className="relative h-[80vh] overflow-hidden my-24">
        <div className="parallax-bg absolute inset-0 scale-125">
          <img
            src={parallaxRun}
            alt="Salchicha corriendo al atardecer"
            loading="lazy"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/40" />
        </div>
        <div className="parallax-text relative h-full flex flex-col items-center justify-center text-center px-6">
          <p className="text-xs tracking-[0.4em] uppercase text-primary/90 mb-6">Intermezzo</p>
          <h2 className="text-5xl md:text-8xl max-w-4xl leading-[1]">
            Pequeños en estatura.
            <br />
            <em className="text-gradient-warm not-italic">Gigantes</em> en espíritu.
          </h2>
        </div>
      </section>

      {/* TAMAÑOS */}
      <section id="tamanos" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <p className="text-xs tracking-[0.4em] uppercase text-primary mb-4">Capítulo III</p>
            <h2 className="text-5xl md:text-7xl mb-8 leading-[1.05]">
              Tres tamaños,
              <br />
              <em className="text-gradient-warm not-italic">una sola</em> silueta.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              La FCI clasifica al dachshund por la circunferencia de su pecho, medida
              a los quince meses. No por capricho: marca el diámetro de la madriguera
              que podía atravesar en plena caza.
            </p>
            <div className="space-y-6">
              {sizeData.map((s, i) => (
                <div
                  key={s.name}
                  className="reveal flex items-baseline justify-between border-b border-border/40 pb-4"
                >
                  <div className="flex items-baseline gap-6">
                    <span className="text-primary text-sm tracking-widest">
                      0{i + 1}
                    </span>
                    <span className="text-2xl font-display">{s.name}</span>
                  </div>
                  <div className="text-right text-sm text-muted-foreground">
                    <div>Pecho {s.chest}</div>
                    <div className="text-xs">{s.weight}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal relative">
            <img
              src={sizes}
              alt="Comparativa de tamaños del dachshund"
              loading="lazy"
              width={1920}
              height={900}
              className="w-full rounded-sm shadow-luxe"
            />
          </div>
        </div>
      </section>

      {/* COLORES */}
      <section id="colores" className="py-32 px-6 bg-secondary/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 reveal">
            <p className="text-xs tracking-[0.4em] uppercase text-primary mb-4">Capítulo IV</p>
            <h2 className="text-5xl md:text-7xl mb-6">Una paleta heredada del bosque.</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Del rojo cobrizo más clásico al moteado arlequín casi pictórico, el
              dachshund recorre una gama cromática profundamente terrosa.
            </p>
          </div>

          <div className="colors-grid grid grid-cols-2 lg:grid-cols-4 gap-6">
            {colors.map((c) => (
              <div
                key={c.name}
                className="color-tile group relative aspect-square overflow-hidden rounded-sm bg-card"
              >
                <img
                  src={c.img}
                  alt={c.name}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                <span className="absolute bottom-6 left-6 text-xl font-display">
                  {c.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HISTORIA */}
      <section id="historia" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-16 items-center">
          <div className="lg:col-span-2 reveal">
            <img
              src={history}
              alt="Ilustración histórica del dachshund cazando tejones"
              loading="lazy"
              width={1600}
              height={1024}
              className="w-full rounded-sm shadow-luxe sepia-[0.15]"
            />
          </div>
          <div className="lg:col-span-3 reveal">
            <p className="text-xs tracking-[0.4em] uppercase text-primary mb-4">Capítulo V</p>
            <h2 className="text-5xl md:text-6xl mb-8 leading-[1.05]">
              Siglos persiguiendo
              <br /> tejones.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              <em className="text-foreground not-italic">Dachs</em> significa tejón
              en alemán; <em className="text-foreground not-italic">hund</em>, perro.
              Su nombre es, literalmente, su propósito. Selecionados durante siglos
              por los guardabosques alemanes, son perros de coraje desproporcionado
              para su tamaño.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Llegaron a las cortes europeas en el XIX —la reina Victoria fue una de
              sus mayores admiradoras— y desde entonces no han dejado de fascinar a
              artistas como Picasso, Warhol o David Hockney, todos ellos rendidos al
              encanto del Teckel.
            </p>
          </div>
        </div>
      </section>

      {/* CARACTER */}
      <section id="caracter" className="py-32 px-6 bg-secondary/40">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <p className="text-xs tracking-[0.4em] uppercase text-primary mb-4">Capítulo VI</p>
            <h2 className="text-5xl md:text-7xl mb-8 leading-[1.05]">
              Tozudo,
              <br /> divertido,
              <br />
              <em className="text-gradient-warm not-italic">inolvidable</em>.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              El dachshund tiene fama de testarudo, y la merece. Fue criado para
              tomar decisiones por su cuenta dentro de una madriguera oscura, sin
              esperar órdenes. Esa autonomía se traduce, en el salón de casa, en una
              personalidad fuerte y deliciosamente cómica.
            </p>
            <ul className="space-y-3 text-muted-foreground">
              {[
                "Profundamente apegado a su persona favorita.",
                "Inteligente, observador, con un humor casi humano.",
                "Excelente vigilante: oye antes que nadie.",
                "Necesita ejercicio moderado y mucha estimulación mental.",
              ].map((t) => (
                <li key={t} className="flex gap-4">
                  <span className="text-primary mt-1">—</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="reveal relative">
            <img
              src={puppy}
              alt="Cachorro de dachshund descansando"
              loading="lazy"
              width={1280}
              height={1280}
              className="w-full rounded-sm shadow-luxe"
            />
            <div className="absolute -bottom-6 -left-6 bg-background border border-border px-6 py-4 hidden md:block">
              <p className="text-xs tracking-[0.3em] uppercase text-primary">Dato</p>
              <p className="font-display text-xl">12-16 años</p>
              <p className="text-xs text-muted-foreground">esperanza de vida</p>
            </div>
          </div>
        </div>
      </section>

      {/* FACTS */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16 reveal">
          <p className="text-xs tracking-[0.4em] uppercase text-primary mb-4">Apéndice</p>
          <h2 className="text-5xl md:text-6xl">Cifras de un icono.</h2>
        </div>
        <div className="facts-row grid grid-cols-2 lg:grid-cols-4 gap-8">
          {facts.map((f) => (
            <div
              key={f.n}
              className="fact-item text-center p-8 border border-border/40 rounded-sm bg-card/30 backdrop-blur-sm"
            >
              <div className="text-5xl md:text-6xl text-gradient-warm font-display mb-4">
                {f.n}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.t}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CLOSING QUOTE */}
      <section className="py-40 px-6 text-center reveal relative overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs tracking-[0.4em] uppercase text-primary mb-8">Coda</p>
          <blockquote className="text-3xl md:text-5xl font-display leading-tight italic text-foreground">
            “Adquirir un dachshund es como añadir una dimensión entera a tu vida.”
          </blockquote>
          <p className="mt-8 text-sm tracking-widest uppercase text-muted-foreground">
            — E. B. White
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border/40 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-6 text-sm text-muted-foreground">
          <div>
            <span className="text-gradient-warm font-display text-lg">Teckel</span>
            <span className="text-muted-foreground">.studio</span>
            <p className="mt-2 text-xs">Una página descriptiva para amantes del perro salchicha.</p>
          </div>
          <p className="text-xs tracking-widest uppercase">Made with love · {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
}