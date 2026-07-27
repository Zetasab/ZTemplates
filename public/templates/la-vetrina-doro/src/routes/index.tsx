import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Philosophy } from "@/components/site/Philosophy";
import { Signature } from "@/components/site/Signature";
import { Ingredients } from "@/components/site/Ingredients";
import { Gallery } from "@/components/site/Gallery";
import { Testimonials } from "@/components/site/Testimonials";
import { Reservation } from "@/components/site/Reservation";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="bg-midnight text-bone">
      <Nav />
      <Hero />
      <Philosophy />
      <Signature />
      <Ingredients />
      <Gallery />
      <Testimonials />
      <Reservation />
      <Footer />
    </main>
  );
}
