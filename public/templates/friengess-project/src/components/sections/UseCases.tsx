import { Reveal } from "@/components/Reveal";
import { Building2, Gamepad2, Check } from "lucide-react";
import teamsImg from "@/assets/usecase-teams.jpg";
import communityImg from "@/assets/usecase-community.jpg";

const cases = [
  {
    icon: Building2,
    tag: "Empresas y equipos",
    title: "Trabajo coordinado y seguro",
    image: teamsImg,
    alt: "Equipo profesional colaborando con paneles de chat holográficos",
    points: [
      "Canales por proyecto y permisos granulares",
      "Llamadas y reuniones con calidad cristalina",
      "Historial cifrado y siempre disponible",
    ],
  },
  {
    icon: Gamepad2,
    tag: "Comunidades y gaming",
    title: "Tu comunidad, sin ruido",
    image: communityImg,
    alt: "Red de avatares de comunidad conectados por líneas de luz",
    points: [
      "Servidores y salas para miles de personas",
      "Roles, moderación y herramientas de comunidad",
      "Voz en tiempo real con latencia mínima",
    ],
  },
];

export function UseCases() {
  return (
    <section id="casos" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-signal">
            Para quién
          </p>
          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            Dos mundos, <span className="text-gradient-brand">una sola app</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Friengess se adapta tanto a la oficina como a tu comunidad favorita,
            sin renunciar a la seguridad ni a la fluidez.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {cases.map((c, i) => (
            <Reveal index={i} key={c.tag}>
              <article className="glass-panel group h-full overflow-hidden rounded-3xl">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={c.image}
                    alt={c.alt}
                    loading="lazy"
                    width={1280}
                    height={1024}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                </div>
                <div className="p-7">
                  <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-signal">
                    <c.icon className="h-3.5 w-3.5" />
                    {c.tag}
                  </span>
                  <h3 className="mt-4 text-2xl font-bold">{c.title}</h3>
                  <ul className="mt-5 space-y-3">
                    {c.points.map((p) => (
                      <li key={p} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-signal" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}