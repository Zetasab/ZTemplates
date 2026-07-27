
## Objetivo

Construir una landing en español para tu marca de sillas de cocina, siguiendo la dirección **Editorial Minimalist** (fondo crema, acento terracota, tipografía Inter + JetBrains Mono, layout editorial con gran tipografía de fondo, animaciones cinematográficas y parallax on-scroll).

## Stack de animación

- **GSAP + ScrollTrigger** para parallax, reveals on-scroll, pin del hero, capas con velocidades distintas y animación de la palabra "FORMA" gigante de fondo.
- **Motion (framer-motion)** para micro-interacciones (hover en swatches, botones).
- Fuentes vía `@fontsource/inter` y `@fontsource/jetbrains-mono`.
- Imágenes generadas con `imagegen` (sillas, lookbook, macros).

## Diseño y tokens

En `src/styles.css`:
- `--background: hsl(38 25% 96%)` (crema)
- `--foreground: hsl(36 10% 12%)` (tinta)
- `--primary: hsl(18 75% 52%)` (terracota)
- `--muted`, `--border` según la dirección
- Fuentes `Inter` (sans) y `JetBrains Mono` (mono, para labels editoriales)

## Estructura de secciones (todas en `src/routes/index.tsx`, con componentes en `src/components/forma/`)

1. **Nav sticky** — logo mono, links (Colección, Filosofía, Espacios, Contacto), botón Consultar.
2. **Hero cinematográfico** — palabra "FORMA" gigante de fondo con clip-reveal, silla protagonista flotante en el centro, tagline y microcopy. Parallax: la silla se mueve más lento que el texto al scroll, "FORMA" se escala levemente.
3. **Intro/Manifesto** — tipografía grande de párrafo con reveal por líneas al entrar en viewport.
4. **Cromática (01)** — 8 swatches de color; al hover cambia la imagen protagonista de silla (5–8 imágenes de sillas por color).
5. **Tamaños (02)** — tres tamaños (Petite, Standard, Grand) con siluetas escaladas y datos técnicos, animación stagger.
6. **Comer + Decorar (03)** — sección oscura full-bleed con tipografía masiva "COMER & OBSERVAR" y imagen vertical parallax.
7. **Materiales y confort (04)** — grid 2×2 de macros (madera, tapizado, patas, unión), con reveal secuencial.
8. **Lookbook (05)** — 4–5 imágenes ambientadas (cocina moderna, comedor lujo, rincón minimal, terraza), layout editorial asimétrico con parallax por capa.
9. **Ficha técnica (06)** — tabla mono de especificaciones con divisiones.
10. **Testimonios (07)** — 3 citas editoriales con nombre y contexto (interioristas ficticios).
11. **Lujo asequible (08)** — bloque de valor: "Diseño de galería, precio de mercado" con 3 pilares (materiales, garantía, envío).
12. **CTA final** — titular grande, botón terracota, línea inferior con badges (envío gratis, garantía 10 años, hecho en España).
13. **Footer** — logo, columnas de links, copyright.

## Implementación técnica

- `bun add gsap @fontsource/inter @fontsource/jetbrains-mono` (motion ya suele estar disponible; instalar si falta).
- `src/lib/useGsap.ts` — hook para registrar ScrollTrigger en cliente (guardado tras `useEffect` para SSR-safe).
- Componentes: `Nav`, `Hero`, `Manifesto`, `Chromatics`, `Sizes`, `EatAndObserve`, `Materials`, `Lookbook`, `Specs`, `Testimonials`, `Value`, `FinalCTA`, `Footer`.
- Generar ~10 imágenes con `imagegen` (silla terracota hero, spectrum de colores, ambientes lookbook, macros de material).
- Actualizar `head()` de `src/routes/index.tsx` con título/descripción/OG específicos ("FORMA — Sillas de cocina esculturales") y og:image apuntando al hero.

## Notas

- Todo el copy en español.
- Sin backend, sin carrito — landing descriptiva.
- Sin precios concretos inventados.
- Prefiero rendimiento: parallax con `transform` y `will-change`, sin librerías pesadas extra.

¿Aprobamos y construyo?
