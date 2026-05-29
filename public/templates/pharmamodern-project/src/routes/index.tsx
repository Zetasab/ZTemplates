import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Brands } from "@/components/site/Brands";
import { Services } from "@/components/site/Services";
import { Bento } from "@/components/site/Bento";
import { About } from "@/components/site/About";
import { Testimonials } from "@/components/site/Testimonials";
import { Faq } from "@/components/site/Faq";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PharmaModern · La salud del futuro, hoy" },
      { name: "description", content: "Farmacia premium con consulta online, entrega en 2h y productos curados para tu bienestar diario." },
      { property: "og:title", content: "PharmaModern · La salud del futuro, hoy" },
      { property: "og:description", content: "Farmacia premium con consulta online y entrega ultra-rápida." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap" },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Brands />
        <Services />
        <Bento />
        <About />
        <Testimonials />
        <Faq />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
