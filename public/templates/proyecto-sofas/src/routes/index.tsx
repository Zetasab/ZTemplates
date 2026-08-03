import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { useLenis } from "@/hooks/use-lenis";
import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { Manifesto } from "@/components/landing/Manifesto";
import { LiquidSilhouette } from "@/components/landing/LiquidSilhouette";
import { Collections } from "@/components/landing/Collections";
import { Configurator } from "@/components/landing/Configurator";
import { Craftsmanship } from "@/components/landing/Craftsmanship";
import { ParallaxTextile } from "@/components/landing/ParallaxTextile";
import { Gallery } from "@/components/landing/Gallery";
import { Testimonial } from "@/components/landing/Testimonial";
import { Showroom } from "@/components/landing/Showroom";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MÓDULO — Sofás escultóricos de autor" },
      {
        name: "description",
        content:
          "Sofás modernos, minimalistas y esculturales hechos a mano en España. Colecciones a medida, tejidos premium y arquitectura para el descanso.",
      },
      { property: "og:title", content: "MÓDULO — Sofás escultóricos de autor" },
      {
        property: "og:description",
        content:
          "Arquitectura para el descanso. Sofás minimalistas y esculturales, hechos a mano.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  useLenis();
  return (
    <main className="bg-bone text-ink">
      <Nav />
      <Hero />
      <Manifesto />
      <LiquidSilhouette />
      <Collections />
      <Configurator />
      <Craftsmanship />
      <ParallaxTextile />
      <Gallery />
      <Testimonial />
      <Showroom />
      <Footer />
      <Toaster position="bottom-center" theme="light" />
    </main>
  );
}
