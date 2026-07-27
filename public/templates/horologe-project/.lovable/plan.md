# Plan: Web de relojes de lujo — Dirección "Precision Editorial"

Sitio React/TanStack Start de una sola página (home) construido sobre la dirección elegida: paleta crema/negro/dorado champán, tipografía Playfair Display + Inter + JetBrains Mono, composición editorial con secciones grandes, fotografía cinematográfica y motion driven by scroll.

## Secciones (en orden de scroll)

1. **Nav fija** con `mix-blend-difference` (logo Horologe, "Est. 1894", links).
2. **Hero cinematográfico** — fondo full-bleed con imagen macro de tourbillon, parallax suave, headline serif gigante ("Aurelius III"), eyebrow mono dorado, CTA "Explore Engineering". Animación de entrada en cascada (track-out + reveal-up).
3. **Manifiesto / intro** — frase editorial grande con texto que se revela palabra por palabra al scroll (GSAP SplitText-style).
4. **Heritage Collection (analógico)** — layout asimétrico 50/50, headline + imagen vertical de reloj con correa de cuero, parallax en la imagen.
5. **Showcase horizontal de modelos analógicos** — pinned scroll horizontal con 4–5 modelos (Aurelius, Sport Diver, Chronograph, Dress, Skeleton).
6. **Línea Nexus Digital (sección oscura)** — fondo negro, imagen de reloj digital titanio, specs en grid (Case / Power / Display / Sensors).
7. **Craftsmanship triptych** — 3 imágenes B/N que pasan a color en hover/scroll (Movement / Finishing / Assembly), copy mono.
8. **Materials & Calibers** — bloque de datos editorial con tipografía grande, números animados al entrar en viewport.
9. **Featured model deep-dive** — split macro shot + lista de detalles con líneas que se dibujan al scroll.
10. **Testimonios / prensa** — citas grandes serif italic con rotación suave.
11. **Boutiques / contacto** — mapa estilizado o lista de ciudades + formulario mínimo.
12. **Footer** — idéntico al prototipo (Horologe, Europe, Contact, Legal).

## Stack técnico

- **Framework**: TanStack Start (ya configurado). Todo en `src/routes/index.tsx` + componentes en `src/components/sections/`.
- **Animaciones**: instalar `gsap` (con ScrollTrigger) y `lenis` para smooth scroll. Parallax y reveals scroll-driven con GSAP. Animaciones de entrada hero con CSS keyframes (ya en la dirección).
- **Tipografías**: cargar Playfair Display + Inter + JetBrains Mono vía `<link>` en `__root.tsx` head (no `@import` en CSS).
- **Design tokens**: portar verbatim el bloque `@theme` del prototipo a `src/styles.css` (background crema, accent dorado #c5a059, foreground casi-negro, ease-out-expo).
- **Imágenes**: generar 10–12 imágenes reales con `imagegen` siguiendo cada `data-prompt` del prototipo + las nuevas secciones (tourbillon hero, reloj cuero, digital titanio, macros craftsmanship, modelos colección, boutique). Guardar en `src/assets/` e importar como ES6.
- **SEO**: `head()` en la ruta index con title/description/og en español sobre la marca de relojes.

## Componentes a crear

```
src/components/sections/
  Nav.tsx
  Hero.tsx
  Manifesto.tsx
  HeritageCollection.tsx
  ModelsShowcase.tsx        (scroll horizontal pinneado)
  NexusDigital.tsx
  Craftsmanship.tsx
  MaterialsData.tsx
  FeaturedModel.tsx
  Testimonials.tsx
  Boutiques.tsx
  Footer.tsx
src/hooks/
  useGsapScroll.ts          (init Lenis + ScrollTrigger)
```

## Notas de fidelidad al prototipo

- Composición, jerarquía, tokens y tipografías se copian tal cual.
- Se mantienen exactamente las secciones del prototipo y se añaden las nuevas (manifiesto, showcase horizontal, materials, featured, testimonios, boutiques) en el mismo lenguaje visual.
- Sin CTAs duplicados, sin "Trusted by", sin iconografía Lucide genérica — respetando la restricción editorial de la dirección.
- Copy en inglés editorial (como el prototipo) para conservar el tono de maison; se puede traducir al español después si lo prefieres.

¿Confirmas para implementar?
