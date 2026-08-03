import { createFileRoute } from "@tanstack/react-router";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Introduction } from "@/components/site/Introduction";
import { Categories } from "@/components/site/Categories";
import { Essentials } from "@/components/site/Essentials";
import { Editorial } from "@/components/site/Editorial";
import { Philosophy } from "@/components/site/Philosophy";
import { Testimonials } from "@/components/site/Testimonials";
import { Newsletter } from "@/components/site/Newsletter";
import { Footer } from "@/components/site/Footer";
import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aether — Cosmética editorial de lujo" },
      {
        name: "description",
        content:
          "Pigmentos universales de alta definición. Maquillaje editorial de lujo para todas las identidades, hecho con conciencia.",
      },
      {
        property: "og:title",
        content: "Aether — Cosmética editorial de lujo",
      },
      {
        property: "og:description",
        content:
          "Pigmentos universales de alta definición. Maquillaje editorial de lujo para todas las identidades.",
      },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: Home,
});

function Home() {
  useSmoothScroll();
  return (
    <main className="bg-brand-bone text-brand-dark font-sans selection:bg-brand-gold selection:text-white overflow-x-clip">
      <Nav />
      <Hero />
      <Introduction />
      <Categories />
      <Essentials />
      <Editorial />
      <Philosophy />
      <Testimonials />
      <Newsletter />
      <Footer />
    </main>
  );
}
