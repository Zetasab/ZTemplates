import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/maurie/Nav";
import { Hero } from "@/components/maurie/Hero";
import { Marquee } from "@/components/maurie/Marquee";
import { Categories } from "@/components/maurie/Categories";
import { Manifesto } from "@/components/maurie/Manifesto";
import { Lookbook } from "@/components/maurie/Lookbook";
import { Materials } from "@/components/maurie/Materials";
import { Process } from "@/components/maurie/Process";
import { Newsletter } from "@/components/maurie/Newsletter";
import { Footer } from "@/components/maurie/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Maurié — Atelier de Moda Femenina · Colección Invierno 24" },
      {
        name: "description",
        content:
          "Maurié es un atelier de moda femenina con sede en Madrid. Tops, camisetas, faldas, vestidos y calzado en seda, lino y cachemira, confeccionados a mano por artesanos locales.",
      },
      { property: "og:title", content: "Maurié — Atelier de Moda Femenina" },
      {
        property: "og:description",
        content:
          "Prendas concebidas como arquitectura textil. Colección Invierno 24 ya disponible.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-foreground/5">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Categories />
        <Manifesto />
        <Lookbook />
        <Materials />
        <Process />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
