import { createFileRoute } from "@tanstack/react-router";
import { Lock, KeyRound, EyeOff, BellRing, Filter, Vibrate, Zap, Wifi, RefreshCw } from "lucide-react";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { FeatureBand } from "@/components/sections/FeatureBand";
import { UseCases } from "@/components/sections/UseCases";
import { Gallery } from "@/components/sections/Gallery";
import { Benefits } from "@/components/sections/Benefits";
import { Stats } from "@/components/sections/Stats";
import { Closing } from "@/components/sections/Closing";
import securityImg from "@/assets/feature-security.jpg";
import notificationsImg from "@/assets/feature-notifications.jpg";
import fluidityImg from "@/assets/feature-fluidity.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Friengess — Mensajería segura, fluida y confiable" },
      {
        name: "description",
        content:
          "Friengess es la app de mensajería con conversaciones seguras, notificaciones potentes y fluidez total. Para equipos y comunidades.",
      },
      { property: "og:title", content: "Friengess — Mensajería segura y fluida" },
      {
        property: "og:description",
        content:
          "Conversaciones seguras, notificaciones potentes y fluidez total. Comunicación de confianza para equipos y comunidades.",
      },
      { property: "og:type", content: "product" },
      { property: "og:url", content: "/" },
      { property: "og:image", content: "/og-image.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Friengess — Mensajería segura y fluida" },
      {
        name: "twitter:description",
        content:
          "Conversaciones seguras, notificaciones potentes y fluidez total.",
      },
      { name: "twitter:image", content: "/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Friengess",
          applicationCategory: "CommunicationApplication",
          operatingSystem: "Web, iOS, Android, Windows, macOS",
          description:
            "App de mensajería con conversaciones seguras, notificaciones potentes y fluidez total para equipos y comunidades.",
          offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <main>
        <Hero />
        <Marquee />
        <FeatureBand
          id="seguridad"
          eyebrow="Conversaciones seguras"
          title="Tus chats, protegidos"
          highlight="de principio a fin"
          description="La seguridad no es una opción, es la base de Friengess. Cada mensaje viaja cifrado para que tus conversaciones sigan siendo solo tuyas."
          image={securityImg}
          imageAlt="Escudo digital con candado luminoso que representa el cifrado"
          glow="signal"
          bullets={[
            {
              icon: Lock,
              title: "Cifrado de extremo a extremo",
              text: "Nadie más, ni siquiera nosotros, puede leer tus mensajes.",
            },
            {
              icon: KeyRound,
              title: "Control total de tus datos",
              text: "Tú decides qué se comparte, con quién y durante cuánto tiempo.",
            },
            {
              icon: EyeOff,
              title: "Privacidad por diseño",
              text: "Sin rastreo invasivo ni publicidad sobre tus conversaciones.",
            },
          ]}
        />
        <FeatureBand
          id="notificaciones"
          eyebrow="Notificaciones potentes"
          title="Entérate de lo importante,"
          highlight="ignora el ruido"
          description="Notificaciones inteligentes que se adaptan a ti. Recibe avisos claros y precisos sin que el móvil no pare de sonar."
          image={notificationsImg}
          imageAlt="Móvil mostrando una pila de notificaciones de chat luminosas"
          glow="violet"
          reverse
          bullets={[
            {
              icon: BellRing,
              title: "Avisos en tiempo real",
              text: "Llega lo que importa al instante, sin retrasos ni pérdidas.",
            },
            {
              icon: Filter,
              title: "Prioridades inteligentes",
              text: "Destaca menciones y mensajes clave, silencia el resto.",
            },
            {
              icon: Vibrate,
              title: "Personalización total",
              text: "Configura sonidos, horarios y modos para cada chat o canal.",
            },
          ]}
        />
        <FeatureBand
          id="fluidez"
          eyebrow="Conversaciones fluidas"
          title="Charla sin pausas,"
          highlight="con total confianza"
          description="Una experiencia fluida y natural. Los mensajes fluyen en tiempo real para que la conversación nunca se rompa."
          image={fluidityImg}
          imageAlt="Burbujas de mensaje fluyendo a gran velocidad por el espacio"
          glow="signal"
          bullets={[
            {
              icon: Zap,
              title: "Velocidad instantánea",
              text: "Mensajes que se envían y reciben sin esperas perceptibles.",
            },
            {
              icon: Wifi,
              title: "Funciona en cualquier red",
              text: "Optimizado para mantenerte conectado incluso con poca señal.",
            },
            {
              icon: RefreshCw,
              title: "Siempre sincronizado",
              text: "Tus chats al día en todos tus dispositivos a la vez.",
            },
          ]}
        />
        <UseCases />
        <Gallery />
        <Benefits />
        <Stats />
        <Closing />
      </main>
      <SiteFooter />
    </div>
  );
}
