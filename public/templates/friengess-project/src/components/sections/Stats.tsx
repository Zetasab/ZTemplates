import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";

const stats = [
  { to: 99.9, decimals: 1, suffix: "%", label: "Disponibilidad del servicio" },
  { to: 256, suffix: "-bit", label: "Cifrado de tus conversaciones" },
  { to: 50, suffix: "ms", label: "Latencia media en mensajes" },
  { to: 100, suffix: "%", label: "Tus datos, siempre tuyos" },
];

export function Stats() {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="glass-panel grid gap-8 rounded-3xl px-8 py-12 text-center sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal index={i} key={s.label}>
              <div>
                <p className="text-4xl font-bold text-gradient-brand sm:text-5xl">
                  <CountUp to={s.to} suffix={s.suffix} decimals={s.decimals ?? 0} />
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}