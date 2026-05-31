# Plan: Sitio showcase de zapatillas — Brutalist Pop

Sitio React (TanStack Start) de una sola página, denso en secciones, con estética **neo-brutalista juvenil**: blanco/negro + acentos naranja `#ff5722` y amarillo `#ffeb3b`, tipografía **Archivo Black** (titulares) + **Hind** (cuerpo). Layout **bento grid** con bandas grandes y animaciones GSAP + parallax al scroll.

## Sistema visual

- Tokens en `src/styles.css` (oklch): background blanco, foreground negro puro, primary naranja, accent amarillo, bordes negros gruesos (2-4px), radios 0, sombras duras desplazadas (estilo brutalist `8px 8px 0 #000`).
- Tipografía: importar Archivo Black + Hind via Google Fonts en `__root.tsx`.
- Componentes con bordes negros gruesos, etiquetas tipo sticker, números grandes, mucho contraste.

## Secciones (largas, una tras otra)

1. **Hero fullscreen** — Titular masivo ("KICKS / NO RULES"), zapatilla protagonista flotando con parallax, CTA brutalist, ticker horizontal animado de marca en la base.
2. **Manifiesto / Intro** — Texto editorial grande con scroll-reveal palabra por palabra (GSAP SplitText simulado).
3. **Bento grid de los 5 modelos** — Grid asimétrico (1 grande + 2 medianas + 2 pequeñas), cada celda con imagen IA, nombre, color, swatch, hover con desplazamiento brutalist.
4. **Detalle por modelo (5 bloques full-width zigzag)** — Cada zapatilla con imagen sticky lateral parallax, specs (peso, materiales, drop), descripción, paleta, CTA. Imagen rota suavemente al scroll.
5. **Galería marquee** — Dos filas de imágenes lifestyle moviéndose en direcciones opuestas (loop infinito GSAP).
6. **Anatomía / Tech specs** — Imagen explotada de zapatilla con líneas y etiquetas numeradas que aparecen al scroll.
7. **Paleta de colores disponibles** — Bento de swatches grandes con nombres tipo Pantone.
8. **Testimonios / Press quotes** — Cards brutalist con citas grandes, rotación ligera, hover lift.
9. **Drop / Lookbook** — Banda full-bleed con imagen editorial lifestyle, texto superpuesto pin-scroll.
10. **CTA final + Newsletter** — Bloque amarillo masivo, input brutalist, botón negro.
11. **Footer** — Grid de links, logo gigante recortado en la base, créditos.

## Animaciones

- **GSAP + ScrollTrigger** (`gsap`): fade/slide-in por sección, pin de imagen en detalle de modelo, marquee infinito, parallax en hero y bandas, reveal de specs numerados, contador animado.
- **Lenis** para smooth scroll (opcional, mejora la sensación parallax).
- Hover micro-interactions: desplazamiento de sombra brutalist, escala sutil.
- Respeta `prefers-reduced-motion`.

## Imágenes

11 imágenes generadas con `imagegen` (premium para hero, standard para el resto), guardadas en `src/assets/`:
- 1 hero zapatilla protagonista (fondo neutro, dramática)
- 5 zapatillas individuales (una por modelo, distintos colores/formas, fondo limpio)
- 1 explosión/anatomía
- 2 lifestyle editoriales (jóvenes urbanos con las zapatillas)
- 2 detalle texturas/materiales

Cada imagen importada como ES6 module.

## Arquitectura técnica

- Una sola ruta: `src/routes/index.tsx` reemplaza el placeholder actual.
- Componentes en `src/components/sections/`: `Hero.tsx`, `Manifesto.tsx`, `BentoModels.tsx`, `ModelDetail.tsx`, `Marquee.tsx`, `Anatomy.tsx`, `Palette.tsx`, `Press.tsx`, `Lookbook.tsx`, `CtaNewsletter.tsx`, `Footer.tsx`, más `Navbar.tsx`.
- Datos de las 5 zapatillas (placeholders creativos: nombres tipo "VOLT-01", "EMBER", "STATIC", "RIOT", "HALO") en `src/data/sneakers.ts`.
- Hook `useGsapScroll.ts` para registrar ScrollTrigger una vez (cliente-only con `useEffect`).
- SEO: `head()` con title, description, og:image apuntando al hero.
- Sin backend, sin formulario funcional (newsletter es visual).

## Dependencias a instalar

- `gsap` (incluye ScrollTrigger)
- `@studio-freight/lenis` (smooth scroll opcional)

## Entregable

Sitio largo, denso, visualmente impactante, totalmente responsive, con scroll animado de principio a fin y placeholders creativos listos para reemplazar por tu contenido real.
