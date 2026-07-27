import { Reveal } from "@/components/Reveal";
import {
  Lock,
  BellRing,
  Zap,
  Users,
  Globe2,
  Cloud,
} from "lucide-react";

const benefits = [
  {
    icon: Lock,
    title: "Cifrado de extremo a extremo",
    text: "Solo tú y la persona con quien hablas podéis leer los mensajes.",
  },
  {
    icon: BellRing,
    title: "Notificaciones inteligentes",
    text: "Avisos precisos que priorizan lo importante y silencian el ruido.",
  },
  {
    icon: Zap,
    title: "Velocidad real",
    text: "Mensajes que llegan al instante, incluso con conexiones débiles.",
  },
  {
    icon: Users,
    title: "Salas sin límite",
    text: "Desde un chat 1 a 1 hasta comunidades de miles de personas.",
  },
  {
    icon: Globe2,
    title: "Multiplataforma",
    text: "La misma experiencia en móvil, escritorio y web, siempre sincronizada.",
  },
  {
    icon: Cloud,
    title: "Historial protegido",
    text: "Tus conversaciones a salvo, accesibles cuando las necesites.",
  },
];

export function Benefits() {
  return (
    <section id="beneficios" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-signal">
            Todo en uno
          </p>
          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            Funciones que marcan{" "}
            <span className="text-gradient-brand">la diferencia</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => (
            <Reveal index={i % 3} key={b.title}>
              <article className="glass-panel group h-full rounded-2xl p-7 transition-colors hover:border-signal/40">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-secondary text-signal transition-transform group-hover:scale-110">
                  <b.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {b.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}