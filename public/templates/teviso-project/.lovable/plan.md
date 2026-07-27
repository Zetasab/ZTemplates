
# Teviso — Sitio web premium de televisores

Landing cinematográfica de una sola página con secciones full-width apiladas, animaciones GSAP + ScrollTrigger, parallax y efectos glass aurora. Tipografía editorial de lujo (Instrument Serif + Work Sans) sobre paleta oscura con gradientes verde/violeta.

## Dirección visual

- **Paleta**: base `#0b0b16` → `#1a1a2e` → `#16213e`, acentos aurora `#4ade80` y `#a78bfa`, más gradientes verde→violeta para halos y textos destacados.
- **Tipografía**: `Instrument Serif` para hero y titulares (grandes, itálica ocasional), `Work Sans` para cuerpo y UI. Cargadas vía `<link>` en `__root.tsx`.
- **Textura**: fondo oscuro con orbes aurora difuminados, grano sutil, tarjetas glass (`backdrop-blur-xl`, borde `white/10`), sombras suaves.
- **Motion**: GSAP + ScrollTrigger para parallax (capas del hero, imágenes que se revelan al scroll), Lenis para smooth scroll, y pequeños fade/slide con clases utilitarias.

## Estructura de secciones (todo en `/`, full-width apilado)

1. **Nav flotante glass** — logo Teviso + enlaces ancla + CTA.
2. **Hero cinematográfico** — TV central con reflejos aurora, capas parallax (fondo, halo, TV, texto), titular editorial "Ver es creer. Otra vez.", subcopy y dos CTAs. Marca de scroll animada.
3. **Manifesto/Intro** — frase editorial gigante que se revela palabra a palabra al scroll.
4. **Showcase de resolución** — imagen 8K a ancho completo con parallax y overlay de specs (resolución, contraste, HDR).
5. **Panel de color aurora** — bento glass con muestras de gamut, Dolby Vision, 1.07B colores.
6. **Hercios / gaming** — visual con motion blur/estela, contador animado 24→60→120→240Hz, badges de VRR / HDMI 2.1.
7. **Gama de tamaños** — carrusel horizontal (scroll pinneado con GSAP) mostrando 43"→98" con siluetas y precios/nombres de modelo.
8. **Diseño & sonido** — split visual del perfil ultradelgado + sección Dolby Atmos con ondas animadas.
9. **Smart OS / conectividad** — mock UI de la interfaz con apps, tarjetas glass de features (AirPlay, Chromecast, asistentes).
10. **Especificaciones técnicas** — tabla comparativa entre 3 modelos destacados.
11. **Testimonios / prensa** — quotes editoriales sobre fondo aurora.
12. **CTA final** — titular grande "Lleva el cine a casa" + botón + fondo con orbes en movimiento.
13. **Footer** — links, newsletter, copyright.

## Detalles técnicos

- **Stack**: TanStack Start ya montado. Ruta única `src/routes/index.tsx` reemplazando el placeholder; head con título, descripción, og y twitter para "Teviso — Televisores premium".
- **Dependencias**: `bun add gsap @studio-freight/lenis`. GSAP incluye ScrollTrigger.
- **Tokens en `src/styles.css`**: añadir `--font-serif`, `--font-sans`, colores `--aurora-green`, `--aurora-violet`, gradientes `--gradient-aurora`, `--gradient-hero`, y sombras glass. Fondo base oscuro global.
- **Fuentes**: `<link>` a Google Fonts (Instrument Serif + Work Sans) en `__root.tsx` con preconnect. Nada de `@import` remoto en CSS.
- **Componentes** en `src/components/teviso/`: `Nav`, `Hero`, `Manifesto`, `Resolution`, `ColorPanel`, `Hertz`, `SizeRange`, `DesignSound`, `SmartOS`, `Specs`, `Press`, `FinalCTA`, `Footer`. Hook `useGsapScroll` para inicializar Lenis + ScrollTrigger una sola vez (cliente only, guard `typeof window`).
- **Imágenes**: generar con `imagegen` (tier standard) y guardar en `src/assets/`:
  - `hero-tv.jpg` — TV moderna flotando con reflejos aurora sobre fondo oscuro.
  - `resolution-8k.jpg` — paisaje nocturno ultra detallado tipo aurora boreal.
  - `color-gamut.jpg` — abstracto de partículas verde/violeta.
  - `hertz-motion.jpg` — coche o atleta con motion blur cinematográfico.
  - `size-range.jpg` — lineup de TVs de distintos tamaños en showroom oscuro.
  - `design-profile.jpg` — perfil ultradelgado de TV, luz rasante.
  - `smart-ui.jpg` — mock de UI de smart TV con tiles.
- **Accesibilidad/perf**: respetar `prefers-reduced-motion` para desactivar parallax; imágenes con `alt` descriptivos; lazy en las que estén bajo el fold.
- **Responsive**: hero y secciones colapsan a columna única en móvil; tipografía fluida con `clamp()`; grid patterns siguiendo la regla de `min-w-0` + `shrink-0`.

## Fuera de alcance

- Sin backend, sin auth, sin carrito (solo landing informativa).
- Sin páginas adicionales por modelo (los specs viven en secciones de la home).
