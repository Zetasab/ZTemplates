
Voy a construir la landing descriptiva de **NEONIC** (marca inventada para plataforma de streaming de películas y series) siguiendo la dirección *Cinematic editorial noir*: negro profundo, acento rojo carmesí (#E11D48), tipografía Bebas Neue + Playfair Display + Lora.

## Stack visual
- Fuentes: `@fontsource/bebas-neue`, `@fontsource/playfair-display`, `@fontsource/lora`.
- Tokens en `src/styles.css`: `--background #0A0A0B`, `--foreground #F4F4F5`, `--primary #E11D48`, `--muted #71717A`, `--border #27272A`.
- Animaciones: **GSAP + ScrollTrigger** para parallax e reveals cinemáticos, más `Motion for React` para micro-interacciones de hover en posters.
- Grano de film sutil en overlay para reforzar textura noir.

## Logo
SVG inline: cuadrado rojo sólido + wordmark "NEONIC" en Bebas Neue, con una barra fina roja debajo. Componente `<BrandMark />` reutilizable.

## Estructura de la página (una sola ruta `/`)

1. **Nav fija** — logo NEONIC, links (Catálogo, Originales, Planes), CTA "Comenzar".
2. **Hero fullscreen** — imagen cinematográfica de ciudad neón bajo lluvia con parallax en scroll; título gigante en dos líneas ("CINEFILIA" en rojo + "SIN LÍMITES"), reveal por palabras con GSAP SplitText-like (stagger manual), scroll indicator animado.
3. **Manifiesto** — bloque tipográfico grande sobre negro con frase editorial, parallax de texto que se desliza en horizontal contra el scroll.
4. **Grid de features (4)** — 4K Ultra HDR, Sin conexión, Originales exclusivos, Sin anuncios. Bordes finos, numeración monoespaciada, hover fill sutil.
5. **Editorial destacado "El Silencio del Neón"** — split screen sticky con imagen vertical a la izquierda y contenido a la derecha (título mixto Bebas + Playfair itálico).
6. **Carrusel "Recién agregados"** — 6 posters con scroll horizontal, hover scale y overlay de metadatos.
7. **Sección Originales NEONIC** — banda full-bleed con 3 producciones grandes (imágenes 4:5), parallax individual en cada imagen al hacer scroll.
8. **Dispositivos soportados** — mosaico con TV, móvil, tablet, laptop, consolas; imagen mockup grande central con parallax y tarjetas de dispositivos alrededor.
9. **Cifras / métricas** — banda oscura con 4 números grandes (títulos, países, horas, premios), contador animado on-scroll.
10. **Testimonios de la crítica** — 3 citas editoriales grandes en itálica (Playfair) con nombre de medio ficticio.
11. **Planes de precios** — 3 tiers (Básico 9,99€ / Premium 15,99€ destacado en rojo / Cineasta 19,99€).
12. **FAQ** — acordeón con 6 preguntas (shadcn Accordion estilizado noir).
13. **CTA final** — banda con imagen cinematográfica de fondo y titular masivo "El cine te está esperando" + botón rojo.
14. **Footer completo** — marca, newsletter, columnas (Contenido, Soporte, Legal, Social), línea inferior con copyright.

## Imágenes
Generaré ~10 imágenes cinematográficas premium con `imagegen` (guardadas en `src/assets/`) para hero, editorial destacado, 6 posters de películas ficticias, banner de originales y CTA final. Cada una con prompt específico (noir, neón, grano, luz dramática).

## Archivos técnicos
- `src/styles.css` — reemplazar tokens por paleta noir + keyframes reveal/scale/marquee + utilidades `.animate-reveal`, `.font-display`, `.font-editorial`, `.font-body`.
- `src/routes/__root.tsx` — actualizar `head()` con título "NEONIC — Cinefilia sin límites", descripción, og:title/description/type, twitter:card.
- `src/main.tsx` (o entry) — imports de `@fontsource/*`.
- `src/routes/index.tsx` — componer la landing con las secciones.
- `src/components/neonic/` — un archivo por sección: `Nav.tsx`, `Hero.tsx`, `Manifesto.tsx`, `Features.tsx`, `Editorial.tsx`, `NewReleases.tsx`, `Originals.tsx`, `Devices.tsx`, `Stats.tsx`, `Testimonials.tsx`, `Pricing.tsx`, `Faq.tsx`, `FinalCta.tsx`, `Footer.tsx`, `BrandMark.tsx`, `FilmGrain.tsx`.
- `src/hooks/use-gsap-parallax.ts` — hook para registrar ScrollTrigger y aplicar parallax `y` a un ref.
- Instalar: `gsap`, `motion`, `@fontsource/bebas-neue`, `@fontsource/playfair-display`, `@fontsource/lora`.

## Contenido
Todo en español, tono editorial cinéfilo. Nombres de películas ficticias coherentes (El Silencio del Neón, Ecos Silenciosos, Void & Echo, El Último Fotograma, Protocolo Glitch, Sombras de Ámbar).

## Nota técnica
GSAP ScrollTrigger se registrará dinámicamente dentro de `useEffect` para evitar problemas de SSR en TanStack Start. Las animaciones se degradan a estado final si JS está deshabilitado.
