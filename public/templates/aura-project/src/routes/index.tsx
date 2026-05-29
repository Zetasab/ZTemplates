import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { Extremes } from "@/components/landing/Extremes";
import { Technology } from "@/components/landing/Technology";
import { Palette } from "@/components/landing/Palette";
import { Anatomy } from "@/components/landing/Anatomy";
import { Lifestyle } from "@/components/landing/Lifestyle";
import { Specs } from "@/components/landing/Specs";
import { Testimonials } from "@/components/landing/Testimonials";
import { CtaFooter } from "@/components/landing/CtaFooter";
import heroOg from "@/assets/bottle-hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AURA — Botellas térmicas de diseño en acero" },
      {
        name: "description",
        content:
          "Botellas térmicas de metal con aislamiento al vacío en seis colores. Mantén tus líquidos fríos hasta 48 horas con un diseño escultural.",
      },
      { property: "og:title", content: "AURA — Botellas térmicas de diseño" },
      {
        property: "og:description",
        content:
          "Vasijas arquitectónicas en acero inoxidable. Frío 48h, seis acabados únicos.",
      },
      { property: "og:image", content: heroOg },
      { name: "twitter:image", content: heroOg },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-obsidian text-platinum font-sans selection:bg-gold-muted/30 overflow-x-hidden">
      <Nav />
      <Hero />
      <Extremes />
      <Technology />
      <Palette />
      <Anatomy />
      <Lifestyle />
      <Specs />
      <Testimonials />
      <CtaFooter />
    </main>
  );
}
