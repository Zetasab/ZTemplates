# Plan: Landing premium para teclados gaming personalizados

Voy a construir una single-page experience oscura, técnica y cinematográfica — estética "luxury tech" (negro profundo + acentos neón cian/magenta, tipografía display industrial + mono), inspirada en sitios tipo Awwwards (HyperX premium, Wooting, Angry Miao).

## Stack visual

- **Tokens en `src/styles.css`**: paleta dark (#0a0a0f base, acentos cian eléctrico y magenta RGB), gradientes y shadows con glow neón, radios suaves.
- **Tipografía**: display industrial (Space Grotesk / Bebas) + mono técnica (JetBrains Mono) cargadas vía `<link>` en `__root.tsx`.
- **Animación**: GSAP + ScrollTrigger para parallax, pinning y reveals; Framer Motion para micro-interacciones de hover.
- **Imágenes**: generadas vía `imagegen` (hero key art, close-ups macro de keycaps, switches, RGB, lifestyle setup) y servidas desde `src/assets/`.

## Secciones (en orden)

1. **Hero cinematográfico** — fullscreen. Teclado flotando con parallax multicapa (fondo + glow RGB + teclado + reflejo), título masivo con split-text reveal GSAP, subtítulo mono, dos CTAs. Partículas/grid sutil de fondo.
2. **Marquee técnico** — banda horizontal infinita con specs clave (Hot-swappable · 8000Hz · Aluminio CNC · PBT Doubleshot · Magnetic Switches).
3. **Sticky storytelling "Built different"** — sección pinned con GSAP donde texto a la izquierda cambia mientras la imagen del teclado a la derecha rota/zoomea por scroll.
4. **Anatomía del teclado** — exploded view con hotspots animados (top plate, PCB, foam, switches, keycaps) que se revelan on-scroll.
5. **Switches showcase** — 3 tarjetas grandes (Linear, Tactile, Magnetic) con efecto magic-card hover, animación de switch presionándose.
6. **Customization / Configurator preview** — bento grid con keycaps, colorways, layouts (60%, TKL, Full), cable coiled, materiales.
7. **RGB & Software** — sección oscura con parallax de luces, mockup de software, slider de efectos lumínicos.
8. **Specs técnicas** — tabla/grid tipográfica densa estilo ficha técnica, contadores animados (polling rate, latencia, durabilidad MX).
9. **Galería lifestyle** — masonry de setups reales con parallax por imagen.
10. **Testimonios pro players / reviewers** — cards con quote, scroll horizontal.
11. **Pricing / Editions** — 3 ediciones (Standard, Pro, Artisan Limited) con hover lift y badge "Limited 250 units".
12. **FAQ** — accordion técnico.
13. **CTA final** — full-bleed con teclado en primer plano, "Reserve yours", contador de unidades.
14. **Footer** — minimal mono, links, social, newsletter.

## Estructura de archivos

- `src/routes/index.tsx` — composición de secciones + SEO (title, description, og).
- `src/components/sections/` — un archivo por sección (Hero, Marquee, Story, Anatomy, Switches, Customization, RGB, Specs, Gallery, Testimonials, Pricing, FAQ, FinalCTA, Footer).
- `src/components/ui/` — ya disponibles (shadcn).
- `src/hooks/useGsap.ts` — helper para registrar ScrollTrigger y cleanup.
- `src/styles.css` — tokens dark, gradientes RGB, shadow-glow, utilidades de grain/noise.
- `src/routes/__root.tsx` — `<link>` de Google Fonts.

## Dependencias a instalar

- `gsap` (incluye ScrollTrigger)
- `framer-motion` (micro-interacciones)

## Assets a generar

~10 imágenes premium vía `imagegen` (hero key art, 3 switch macros, exploded view, RGB lifestyle, 3 setups galería, keycaps colorways). Tier `standard` para hero, `fast` para el resto.

## Fuera de alcance

- Sin backend, sin checkout real (los CTAs no envían a ningún sitio).
- Sin configurador 3D interactivo (se muestra como showcase visual, no editable).
- Sin i18n — copy en inglés técnico (estética del sector).

¿Te gustaría algún ajuste — paleta distinta (p.ej. dorado/blanco en vez de neón), copy en español, o reducir/añadir alguna sección — antes de implementarlo?