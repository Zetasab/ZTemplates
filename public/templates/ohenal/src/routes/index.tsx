import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/ohenal/Hero";
import { Manifesto } from "@/components/ohenal/Manifesto";
import { Bottle } from "@/components/ohenal/Bottle";
import { Notes } from "@/components/ohenal/Notes";
import { Origin } from "@/components/ohenal/Origin";
import { Gallery } from "@/components/ohenal/Gallery";
import { Ritual } from "@/components/ohenal/Ritual";
import { Press } from "@/components/ohenal/Press";
import { Newsletter } from "@/components/ohenal/Newsletter";
import { Footer } from "@/components/ohenal/Footer";
import { SideIndex } from "@/components/ohenal/SideIndex";
import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "O'Henal · Eau de Parfum — Une vague contenue" },
      { name: "description", content: "O'Henal, colonia masculina de lujo. Una composición acuática de sal marina, almizcle blanco y ámbar gris, compuesta en Grasse." },
      { property: "og:title", content: "O'Henal · Eau de Parfum" },
      { property: "og:description", content: "La frescura del mar, esculpida en cristal. Edición limitada compuesta en Grasse." },
      { property: "og:image", content: heroImg },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-abyss text-bone">
      <SideIndex />
      <Hero />
      <Manifesto />
      <Bottle />
      <Notes />
      <Origin />
      <Gallery />
      <Ritual />
      <Press />
      <Newsletter />
      <Footer />
    </main>
  );
}
