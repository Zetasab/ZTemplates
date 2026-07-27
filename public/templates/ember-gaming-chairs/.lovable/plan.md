
# Web de Sillas Gaming Premium

Una landing inmersiva tipo Awwwards, oscura y cinematográfica (Charcoal & Ember + Sora/Manrope), con hero a pantalla completa, parallax onscroll, animaciones GSAP y secciones grandes con imágenes de lujo generadas con IA.

## Diseño

- **Paleta**: fondo `#1a1a1a`, superficies `#2d2d2d`, bordes `#4a4a4a`, acento ember `#e85d3a` (glow naranja en CTAs y detalles).
- **Tipografía**: Sora (display, pesos 600–800, tracking ajustado) + Manrope (cuerpo).
- **Lenguaje visual**: oscuro, alto contraste, grano sutil, glows naranja, bordes finos, imágenes a sangre, mucho aire vertical.

## Secciones (en orden)

1. **Hero fullscreen** — Imagen hero de silla flotando con iluminación cinematográfica. Título grande con animación de entrada por palabras (GSAP SplitText-style), subtítulo, dos CTAs (Explorar / Ver modelos), badge superior "Nueva colección 2026", scroll indicator animado. Parallax sutil sobre la silla al hacer scroll.
2. **Marquee de marca** — Banda horizontal con texto "PRO GAMING · ERGONOMÍA · DISEÑO" en loop infinito.
3. **Modelos destacados** — Grid de 3 cards grandes (modelo Apex, Nova, Strike) con imagen, nombre, precio y hover scale + reveal del CTA.
4. **Características técnicas** — Layout split: imagen lateral sticky + lista de features (reclinado 180°, lumbar 4D, espuma memory, ruedas silenciosas, base aluminio). Reveals onscroll escalonados.
5. **Para ellos / Para ellas** — Sección dual a pantalla partida con dos imágenes grandes (línea masculina dark/ember vs línea femenina con acento rosa coral compatible). Hover expande cada lado.
6. **Galería inmersiva** — Grid masonry de 6–8 imágenes lifestyle con efecto parallax individual al scroll y zoom on hover.
7. **Stats / Números** — Banda oscura con 4 contadores animados (+50k clientes, 4.9★, 5 años garantía, 30 países).
8. **Testimonios** — Carrusel horizontal con cards de usuarios (avatar IA, quote, modelo).
9. **FAQ** — Acordeón con 6 preguntas (envío, garantía, montaje, tallas, materiales, devoluciones).
10. **CTA final** — Sección a pantalla completa con imagen de fondo y texto gigante "Eleva tu setup" + botón ember.
11. **Footer** — Logo, links, redes sociales, copyright.

## Detalles técnicos

- **Stack**: TanStack Start (ya configurado), Tailwind v4, tokens en `src/styles.css`.
- **Animaciones**: `gsap` + `@gsap/react` + `ScrollTrigger` para parallax, pin del split-screen, reveals, contadores y marquee. `Lenis` para smooth scroll suave.
- **Imágenes**: generadas con `imagegen--generate_image` tier `standard` (hero) y `fast` (resto), guardadas en `src/assets/` e importadas como ES6. ~10 imágenes: hero, 3 modelos, lifestyle galería (6), split chicos/chicas (2), CTA final (1).
- **Tokens nuevos** en `src/styles.css`: `--ember`, `--ember-glow`, gradiente `--gradient-ember`, sombra `--shadow-ember`.
- **Componentes**: `Hero.tsx`, `Marquee.tsx`, `Models.tsx`, `Features.tsx`, `ForEveryone.tsx`, `Gallery.tsx`, `Stats.tsx`, `Testimonials.tsx`, `Faq.tsx`, `FinalCta.tsx`, `Footer.tsx` + hook `useGsap.ts`.
- **Ruta**: reemplazar `src/routes/index.tsx` con landing completa + meta SEO en español.
- **Accesibilidad**: respetar `prefers-reduced-motion` desactivando GSAP triggers pesados.

## Fuera de alcance

- Sin backend, sin carrito, sin auth (es una landing descriptiva).
- Sin páginas internas: todo en single page con anchors suaves.
