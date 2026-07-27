import { createFileRoute } from "@tanstack/react-router";
import { DachshundLanding } from "@/components/DachshundLanding";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Salchichas — La elegancia del perro salchicha" },
      { name: "description", content: "Variantes, tamaños, colores, historia y carácter del dachshund. Una guía visual para los amantes del perro salchicha." },
      { property: "og:title", content: "Salchichas — La elegancia del perro salchicha" },
      { property: "og:description", content: "Una oda visual al dachshund: variantes, colores, historia y carácter." },
    ],
  }),
  component: Index,
});

function Index() {
  return <DachshundLanding />;
}
