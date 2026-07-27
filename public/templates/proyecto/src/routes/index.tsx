import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { Marquee } from "@/components/landing/Marquee";
import { AISection } from "@/components/landing/AISection";
import { Performance } from "@/components/landing/Performance";
import { Metrics } from "@/components/landing/Metrics";
import { FeaturesGrid } from "@/components/landing/FeaturesGrid";
import { Showcase } from "@/components/landing/Showcase";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Testimonials } from "@/components/landing/Testimonials";
import { Pricing } from "@/components/landing/Pricing";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kinetic — El editor de código con IA que piensa antes que tú" },
      {
        name: "description",
        content:
          "Kinetic es un editor de código minimalista, ultra rápido y con IA integrada. Autocompletado predictivo, latencia sub-10ms y soporte nativo para 80+ lenguajes.",
      },
      { property: "og:title", content: "Kinetic — El editor con IA que piensa antes que tú" },
      {
        property: "og:description",
        content:
          "Editor minimalista con IA integrada, motor nativo en C++ y rendimiento a 120 FPS. Programa a la velocidad del pensamiento.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <AISection />
        <Performance />
        <Metrics />
        <FeaturesGrid />
        <Showcase />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
