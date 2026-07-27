import { useRef } from "react";
import type { LucideIcon } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { useParallax } from "@/hooks/use-parallax";

type Bullet = { icon: LucideIcon; title: string; text: string };

type FeatureBandProps = {
  id: string;
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
  image: string;
  imageAlt: string;
  bullets: Bullet[];
  reverse?: boolean;
  glow?: "signal" | "violet";
};

export function FeatureBand({
  id,
  eyebrow,
  title,
  highlight,
  description,
  image,
  imageAlt,
  bullets,
  reverse = false,
  glow = "signal",
}: FeatureBandProps) {
  const ref = useRef<HTMLElement>(null);
  useParallax(ref);

  const glowVar = glow === "signal" ? "var(--signal)" : "var(--violet-accent)";

  return (
    <section
      id={id}
      ref={ref}
      className="relative overflow-hidden py-24 sm:py-32"
    >
      <div
        className={`mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2 ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div className="relative">
          <div
            data-parallax
            data-speed="0.12"
            className="pointer-events-none absolute -inset-10 rounded-[2.5rem] blur-2xl"
            style={{
              background: `radial-gradient(circle at 50% 40%, color-mix(in oklab, ${glowVar} 28%, transparent), transparent 70%)`,
            }}
          />
          <Reveal className="relative">
            <div className="glass-panel glow-ring overflow-hidden rounded-3xl p-2">
              <img
                src={image}
                alt={imageAlt}
                loading="lazy"
                width={1280}
                height={1024}
                className="w-full rounded-2xl object-cover"
              />
            </div>
          </Reveal>
        </div>

        <div>
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-signal">
              {eyebrow}
            </p>
          </Reveal>
          <Reveal index={1}>
            <h2 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
              {title} <span className="text-gradient-brand">{highlight}</span>
            </h2>
          </Reveal>
          <Reveal index={2}>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-muted-foreground">
              {description}
            </p>
          </Reveal>

          <ul className="mt-9 space-y-5">
            {bullets.map((b, i) => (
              <Reveal as="li" index={i + 3} key={b.title}>
                <div className="flex gap-4">
                  <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-secondary text-signal">
                    <b.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-semibold">
                      {b.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {b.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}