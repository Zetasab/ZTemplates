import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { useGsapReveal } from "@/hooks/useGsapReveal";
import { Nav } from "@/components/kuro/Nav";
import { Hero } from "@/components/kuro/Hero";
import { Concept } from "@/components/kuro/Concept";
import { ParallaxBand } from "@/components/kuro/ParallaxBand";
import { Signature } from "@/components/kuro/Signature";
import { Marquee } from "@/components/kuro/Marquee";
import { Menu } from "@/components/kuro/Menu";
import { Chef } from "@/components/kuro/Chef";
import { Ambience } from "@/components/kuro/Ambience";
import { Testimonials } from "@/components/kuro/Testimonials";
import { Pricing } from "@/components/kuro/Pricing";
import { Reservation } from "@/components/kuro/Reservation";
import { Footer } from "@/components/kuro/Footer";
import heroOg from "@/assets/hero-tuna.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kuro Omakase · Buffet de Sushi de Autor en Madrid" },
      { name: "description", content: "Buffet de sushi ilimitado preparado al momento por itamae. Técnica japonesa impecable en pleno barrio de Salamanca, Madrid. Reserva tu experiencia." },
      { property: "og:title", content: "Kuro Omakase · Buffet de Sushi de Autor" },
      { property: "og:description", content: "El arte del buffet reimaginado como un ritual de medianoche. Técnica japonesa impecable, servida sin límites." },
      { property: "og:image", content: heroOg },
      { name: "twitter:image", content: heroOg },
      { name: "twitter:title", content: "Kuro Omakase · Buffet de Sushi de Autor" },
      { name: "twitter:description", content: "Buffet de sushi ilimitado preparado al momento en Madrid." },
    ],
  }),
  component: Index,
});

function Index() {
  useGsapReveal();
  return (
    <main className="bg-kuro-bg text-kuro-fg font-[family-name:var(--font-sans-kuro)] selection:bg-kuro-primary selection:text-kuro-fg overflow-x-clip">
      <Nav />
      <Hero />
      <Concept />
      <Marquee text="無限 · 美 · 味 · 静寂" />
      <ParallaxBand />
      <Signature />
      <Menu />
      <Chef />
      <Ambience />
      <Marquee text="刀 · 火 · 米 · 魂" />
      <Testimonials />
      <Pricing />
      <Reservation />
      <Footer />
      <Toaster theme="dark" position="bottom-center" />
    </main>
  );
}
