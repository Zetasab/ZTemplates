import { createFileRoute } from "@tanstack/react-router";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { Nav } from "@/components/teviso/Nav";
import { Hero } from "@/components/teviso/Hero";
import { Manifesto } from "@/components/teviso/Manifesto";
import { Resolution } from "@/components/teviso/Resolution";
import { ColorPanel } from "@/components/teviso/ColorPanel";
import { Hertz } from "@/components/teviso/Hertz";
import { SizeRange } from "@/components/teviso/SizeRange";
import { DesignSound } from "@/components/teviso/DesignSound";
import { SmartOS } from "@/components/teviso/SmartOS";
import { Specs } from "@/components/teviso/Specs";
import { Press } from "@/components/teviso/Press";
import { FinalCTA } from "@/components/teviso/FinalCTA";
import { Footer } from "@/components/teviso/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  useSmoothScroll();
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Manifesto />
      <Resolution />
      <ColorPanel />
      <Hertz />
      <SizeRange />
      <DesignSound />
      <SmartOS />
      <Specs />
      <Press />
      <FinalCTA />
      <Footer />
    </main>
  );
}
