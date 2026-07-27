import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/neonic/Nav";
import { Hero } from "@/components/neonic/Hero";
import { Manifesto } from "@/components/neonic/Manifesto";
import { Features } from "@/components/neonic/Features";
import { Editorial } from "@/components/neonic/Editorial";
import { NewReleases } from "@/components/neonic/NewReleases";
import { Originals } from "@/components/neonic/Originals";
import { Devices } from "@/components/neonic/Devices";
import { Stats } from "@/components/neonic/Stats";
import { Testimonials } from "@/components/neonic/Testimonials";
import { Pricing } from "@/components/neonic/Pricing";
import { Faq } from "@/components/neonic/Faq";
import { FinalCta } from "@/components/neonic/FinalCta";
import { Footer } from "@/components/neonic/Footer";
import { FilmGrain } from "@/components/neonic/FilmGrain";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <FilmGrain />
      <Nav />
      <main>
        <Hero />
        <Manifesto />
        <Features />
        <Editorial />
        <NewReleases />
        <Originals />
        <Devices />
        <Stats />
        <Testimonials />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
