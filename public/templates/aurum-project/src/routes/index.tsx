import { createFileRoute } from "@tanstack/react-router";
import { LuxuryCarLanding } from "@/components/LuxuryCarLanding";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AURUM — El arte de conducir el futuro" },
      {
        name: "description",
        content:
          "AURUM. Tres modelos de lujo hechos a mano en Módena: GT, Spyder y Quantum. Series limitadas, artesanía italiana, prestaciones extremas.",
      },
      { property: "og:title", content: "AURUM — El arte de conducir el futuro" },
      {
        property: "og:description",
        content:
          "Coches de autor hechos a mano. Tres modelos. Series estrictamente limitadas.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return <LuxuryCarLanding />;
}
