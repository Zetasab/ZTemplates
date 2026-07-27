import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { Story } from "@/components/sections/Story";
import { Anatomy } from "@/components/sections/Anatomy";
import { Switches } from "@/components/sections/Switches";
import { Customization } from "@/components/sections/Customization";
import { RGB } from "@/components/sections/RGB";
import { Specs } from "@/components/sections/Specs";
import { Gallery } from "@/components/sections/Gallery";
import { Testimonials } from "@/components/sections/Testimonials";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Axon // Custom mechanical gaming keyboards" },
      {
        name: "description",
        content:
          "Hand-built custom mechanical gaming keyboards. CNC aluminum, hot-swap switches, 8000 Hz polling, magnetic Hall-effect. Limited editions assembled in Barcelona.",
      },
      { property: "og:title", content: "Axon // Custom mechanical gaming keyboards" },
      {
        property: "og:description",
        content: "Hand-built custom mechanical keyboards. CNC aluminum, magnetic switches, 8000 Hz, limited 250 units.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground">
      <Hero />
      <Marquee />
      <Story />
      <Anatomy />
      <Switches />
      <Customization />
      <RGB />
      <Specs />
      <Gallery />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
