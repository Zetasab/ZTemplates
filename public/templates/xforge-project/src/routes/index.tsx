import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { Manifesto } from "@/components/landing/Manifesto";
import { EditionGoW } from "@/components/landing/EditionGoW";
import { EditionFortnite } from "@/components/landing/EditionFortnite";
import { EditionCOD } from "@/components/landing/EditionCOD";
import { DualShowcase } from "@/components/landing/DualShowcase";
import { Craftsmanship } from "@/components/landing/Craftsmanship";
import { SpecsMarquee } from "@/components/landing/SpecsMarquee";
import { Testimonials } from "@/components/landing/Testimonials";
import { Faq } from "@/components/landing/Faq";
import { CtaFinal } from "@/components/landing/CtaFinal";
import { Footer } from "@/components/landing/Footer";
import ogImage from "@/assets/controller-gow.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "X-Forge — Mandos Xbox personalizados de edición limitada" },
      {
        name: "description",
        content:
          "Mandos Xbox personalizados con temática de God of War, Fortnite, Call of Duty, Minecraft y League of Legends. Edición limitada hecha a mano.",
      },
      { property: "og:title", content: "X-Forge — Mandos Xbox personalizados de edición limitada" },
      {
        property: "og:description",
        content:
          "5 mandos Xbox de coleccionista, pintados y ensamblados a mano. Temáticas: God of War, Fortnite, COD, Minecraft, LoL.",
      },
      { property: "og:image", content: ogImage },
      { name: "twitter:image", content: ogImage },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-obsidian text-white font-sans selection:bg-acid selection:text-black">
      <Nav />
      <main>
        <Hero />
        <Manifesto />
        <EditionGoW />
        <EditionFortnite />
        <EditionCOD />
        <DualShowcase />
        <Craftsmanship />
        <SpecsMarquee />
        <Testimonials />
        <Faq />
        <CtaFinal />
      </main>
      <Footer />
    </div>
  );
}
