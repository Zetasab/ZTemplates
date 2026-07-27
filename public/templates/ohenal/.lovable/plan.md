# O'Henal — Landing de marca

Web one-page descriptiva, sin tienda, con estética de perfume masculino de lujo acuático (referencias: Byredo, Dior Sauvage, Aesop). Animaciones cinematográficas y parallax con GSAP + ScrollTrigger.

## Dirección visual

- **Paleta**: azul profundo abisal `#0A1620`, azul acero `#1F3A4D`, plata líquida `#C9D4DC`, blanco roto `#F2EFE9`, negro tinta `#050B10`. Sin dorados, sin morados.
- **Tipografía**: display serif editorial (Cormorant Garamond, oversized e itálica para el nombre) + sans neutra (Inter Tight o similar) para body y micro-labels en mayúsculas con tracking amplio.
- **Tono**: contemplativo, mineral, oceánico. Mucho espacio negativo, fotografía macro cinematográfica del frasco con reflejos de agua.

## Secciones (orden)

1. **Hero a pantalla completa** — nombre "O'Henal" en display serif oversized cortando la imagen, frasco con efecto de gotas/ola sutil, scroll indicator, ruido sutil en background.
2. **Manifiesto** — frase corta editorial centrada con reveal letra a letra.
3. **El frasco** — imagen macro full-bleed con parallax + texto pequeño lateral describiendo el diseño/materialidad.
4. **Notas olfativas** — tres bloques (salida / corazón / fondo): sal marina + bergamota helada / almizcle blanco + iris acuático / ámbar gris + maderas húmedas. Cada bloque con icono mineral y reveal escalonado.
5. **Origen / Craft** — historia del perfumero, imagen lateral con parallax vertical, texto editorial a dos columnas.
6. **Galería** — grid asimétrico de 4–5 shots (macro frasco, textura agua, atmósfera, detalle tapón), con hover y parallax sutil.
7. **Ritual de uso** — 3 pasos numerados (I, II, III) con micro-animación on-scroll.
8. **Prensa / testimonios** — citas cortas en carrusel horizontal con scroll horizontal pinned.
9. **Newsletter + Footer** — input minimalista, links legales, redes.

Índice lateral fijo con numeración romana que resalta la sección activa al hacer scroll.

## Animaciones

- GSAP + ScrollTrigger para todos los efectos on-scroll.
- Parallax vertical en imágenes full-bleed (hero, frasco, origen).
- Split-text reveal (letra/palabra) en titulares display.
- Fade + translateY suave en bloques de texto al entrar en viewport.
- Scroll horizontal pinned en sección de prensa.
- Cursor custom sutil (un punto que crece sobre elementos interactivos).
- Loader inicial breve con el monograma "OH".

## Estructura técnica

- Ruta única `/` en `src/routes/index.tsx` reemplazando el placeholder. Metadata SEO (title, description, og:title, og:description, og:image con la imagen hero).
- Componentes en `src/components/ohenal/`: `Hero`, `Manifesto`, `Bottle`, `Notes`, `Origin`, `Gallery`, `Ritual`, `Press`, `Newsletter`, `Footer`, `SideIndex`, `Cursor`.
- Tokens de color y fuentes en `src/styles.css` con `@theme inline` (paleta acuática + radios + sombras "líquidas"). Sin clases hardcoded de color.
- Fuentes vía `@fontsource/cormorant-garamond` y `@fontsource/inter-tight` importadas en el root.
- GSAP + ScrollTrigger instalados con `bun add gsap`. Registro de plugin en un hook `useGsap` cliente.
- Imágenes generadas con `imagegen` (premium para shots de producto), guardadas en `src/assets/` y subidas como assets CDN (`lovable-assets`) por su peso: hero, macro frasco, textura agua/ola, atmósfera oceánica, detalle tapón.

## Detalles técnicos

- GSAP es client-only: registrar plugins dentro de `useEffect` para evitar romper SSR.
- `ScrollTrigger.refresh()` al montar y en resize.
- Respetar `prefers-reduced-motion`: desactivar parallax y split-text si el usuario lo solicita.
- Lazy-loading de imágenes no-hero, `loading="eager"` solo en la hero.
- Una sola H1 (nombre del producto en el hero), resto H2/H3.

## Fuera de alcance

- Tienda, carrito, precios, pasarela de pago.
- Backend / Lovable Cloud / formularios persistidos (el newsletter será un input visual sin envío real, o un `mailto:` simple).
- Multi-idioma.
