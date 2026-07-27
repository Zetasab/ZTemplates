import { useRef } from "react";
import { Reveal } from "@/components/Reveal";
import { useParallax } from "@/hooks/use-parallax";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";

export function Gallery() {
  const ref = useRef<HTMLElement>(null);
  useParallax(ref);

  return (
    <section id="galeria" ref={ref} className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-signal">
            La interfaz
          </p>
          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            Diseñada para que{" "}
            <span className="text-gradient-brand">disfrutes hablar</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Cada pantalla está pensada al detalle: oscura, elegante y clara.
          </p>
        </Reveal>

        <div className="mt-14 grid auto-rows-[220px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <Reveal className="sm:col-span-2 sm:row-span-2">
            <figure className="glass-panel h-full overflow-hidden rounded-3xl">
              <img
                src={g3}
                alt="Pantalla completa de chat móvil de Friengess con mensajes y multimedia"
                loading="lazy"
                width={1024}
                height={1280}
                data-parallax
                data-speed="0.06"
                className="h-full w-full object-cover"
              />
            </figure>
          </Reveal>
          <Reveal index={1}>
            <figure className="glass-panel h-full overflow-hidden rounded-3xl">
              <img
                src={g1}
                alt="Detalle de canal de voz y llamadas con forma de onda"
                loading="lazy"
                width={1024}
                height={1024}
                className="h-full w-full object-cover"
              />
            </figure>
          </Reveal>
          <Reveal index={2}>
            <figure className="glass-panel h-full overflow-hidden rounded-3xl">
              <img
                src={g2}
                alt="Lista de servidores y barra lateral de canales"
                loading="lazy"
                width={1024}
                height={1024}
                className="h-full w-full object-cover"
              />
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}