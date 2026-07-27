import { useRef } from "react";
import { Reveal } from "@/components/Reveal";
import { useParallax } from "@/hooks/use-parallax";
import { MessagesSquare } from "lucide-react";
import bgAurora from "@/assets/bg-aurora.jpg";

export function Closing() {
  const ref = useRef<HTMLElement>(null);
  useParallax(ref);

  return (
    <section id="descubre" ref={ref} className="relative overflow-hidden py-28 sm:py-36">
      <img
        src={bgAurora}
        alt=""
        aria-hidden="true"
        loading="lazy"
        width={1920}
        height={1280}
        data-parallax
        data-speed="0.2"
        className="absolute inset-0 h-[120%] w-full object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-background/60" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-brand text-brand-foreground">
            <MessagesSquare className="h-8 w-8" />
          </span>
        </Reveal>
        <Reveal index={1}>
          <h2 className="mt-7 text-4xl font-bold leading-tight sm:text-6xl">
            La forma más segura
            <br />
            de <span className="text-gradient-brand">seguir en contacto</span>
          </h2>
        </Reveal>
        <Reveal index={2}>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
            Friengess es comunicación sin compromisos: chats fluidos,
            notificaciones potentes y la tranquilidad de saber que tus
            conversaciones están protegidas.
          </p>
        </Reveal>
        <Reveal index={3}>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#top"
              className="rounded-full bg-brand px-8 py-4 text-sm font-semibold text-brand-foreground transition-transform hover:scale-105"
            >
              Volver al inicio
            </a>
            <a
              href="#seguridad"
              className="rounded-full border border-border px-8 py-4 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              Conocer la seguridad
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}