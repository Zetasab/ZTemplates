import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { Collections } from "@/components/site/Collections";
import { Craft } from "@/components/site/Craft";
import { Process } from "@/components/site/Process";
import { AnimeGallery } from "@/components/site/AnimeGallery";
import { DualShowcase } from "@/components/site/DualShowcase";
import { Endgame } from "@/components/site/Endgame";
import { Custom } from "@/components/site/Custom";
import { Testimonials } from "@/components/site/Testimonials";
import { Faq } from "@/components/site/Faq";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main id="top" className="bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <Collections />
      <Craft />
      <Process />
      <AnimeGallery />
      <DualShowcase />
      <Endgame />
      <Custom />
      <Testimonials />
      <Faq />
      <Footer />
    </main>
  );
}
