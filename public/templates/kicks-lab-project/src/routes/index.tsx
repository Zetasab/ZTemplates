import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Manifesto } from "@/components/sections/Manifesto";
import { BentoModels } from "@/components/sections/BentoModels";
import { ModelsDetail } from "@/components/sections/ModelDetail";
import { MarqueeGallery } from "@/components/sections/Marquee";
import { Anatomy } from "@/components/sections/Anatomy";
import { Palette } from "@/components/sections/Palette";
import { Press } from "@/components/sections/Press";
import { Lookbook } from "@/components/sections/Lookbook";
import { CtaNewsletter } from "@/components/sections/CtaNewsletter";
import { Footer } from "@/components/sections/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "KICKS//LAB — Drop 05 / Zapatillas sin reglas" },
      {
        name: "description",
        content:
          "Cinco siluetas, cero compromisos. Descubre el drop completo de KICKS//LAB: zapatillas brutalist hechas para los que escriben sus propias reglas.",
      },
      { property: "og:title", content: "KICKS//LAB — Drop 05" },
      {
        property: "og:description",
        content: "Cinco siluetas modernas hechas para la calle. Stock limitado.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Archivo+Black&family=Hind:wght@300;400;500;600;700&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-paper text-ink">
      <Navbar />
      <Hero />
      <Manifesto />
      <BentoModels />
      <ModelsDetail />
      <MarqueeGallery />
      <Anatomy />
      <Palette />
      <Press />
      <Lookbook />
      <CtaNewsletter />
      <Footer />
    </main>
  );
}
