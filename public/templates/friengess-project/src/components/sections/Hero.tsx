import { useRef } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Sparkles, ArrowDown } from "lucide-react";
import { useParallax } from "@/hooks/use-parallax";
import heroMockup from "@/assets/hero-mockup.png";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  useParallax(ref);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16"
    >
      {/* Ambient glows */}
      <div
        data-parallax
        data-speed="0.3"
        className="pointer-events-none absolute -top-40 left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--signal)_22%,transparent),transparent_65%)] blur-2xl"
      />
      <div
        data-parallax
        data-speed="0.18"
        className="pointer-events-none absolute bottom-0 right-[-6rem] h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--violet-accent)_22%,transparent),transparent_65%)] blur-2xl"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 px-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass-panel inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-muted-foreground"
          >
            <Sparkles className="h-3.5 w-3.5 text-signal" />
            Mensajería segura de nueva generación
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-5xl font-bold leading-[1.04] sm:text-6xl lg:text-7xl"
          >
            Conversaciones
            <br />
            <span className="text-gradient-brand">sin fricción,</span>
            <br />
            con total confianza
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22 }}
            className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground"
          >
            Friengess reúne chats privados, notificaciones potentes y una fluidez
            impecable en una sola plataforma. Para equipos y comunidades que no se
            conforman con menos.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.34 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#descubre"
              className="rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-brand-foreground transition-transform hover:scale-105"
            >
              Descubrir Friengess
            </a>
            <a
              href="#seguridad"
              className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              <ShieldCheck className="h-4 w-4 text-signal" />
              Cómo protegemos tus chats
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="animate-float-slow">
            <img
              src={heroMockup}
              alt="Interfaz de la app de mensajería Friengess flotando con paneles de chat"
              width={1280}
              height={1024}
              className="mx-auto w-full max-w-lg drop-shadow-2xl"
            />
          </div>
        </motion.div>
      </div>

      <a
        href="#seguridad"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-muted-foreground"
        aria-label="Desplazarse hacia abajo"
      >
        <ArrowDown className="h-6 w-6 animate-bounce" />
      </a>
    </section>
  );
}