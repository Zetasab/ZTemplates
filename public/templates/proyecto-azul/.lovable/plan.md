## Plan: Tienda de piscina "AZUL." — Editorial Mediterranean Luxe

Construir una landing en React (TanStack Start) en español, siguiendo fielmente la dirección elegida, con animaciones GSAP + parallax on-scroll.

### Stack de animación
- Instalar `gsap` (incluye ScrollTrigger) para parallax, reveals y pinned sections.
- Instalar `framer-motion` para micro-interacciones y hover states.

### Tokens de diseño (src/styles.css)
- Colores: `--water #0084A5`, `--sun #F2994A`, `--sand #F9F7F2`, `--ink #1A1A1A`.
- Tipografía: Bebas Neue (display) + Lora (serif body), cargadas vía `<link>` en `__root.tsx`.
- Keyframes `reveal-up` y `ripple-scale`, easing `--ease-out-expo`.

### Metadata (src/routes/__root.tsx)
- Title: "AZUL. — Objetos para el verano infinito"
- Description en español, og/twitter equivalentes.
- Añadir preconnect + link a Google Fonts.

### Página (src/routes/index.tsx)
Reemplazar placeholder por la landing completa, compuesta por componentes en `src/components/azul/`:

1. **Navbar** — Fija, translúcida al hacer scroll (backdrop blur), links: Colecciones, Editorial, Sobre Nosotros, Carrito.
2. **Hero** — Altura completa. Titular gigante "EL VERANO / INFINITO" con `ripple-scale`. Blobs de color con parallax (mousemove + scroll). Imagen flotante de producto en esquina con rotación y parallax. CTA "Sumergir". Scroll indicator animado.
3. **Categorías editoriales** — Grid 12 col: bloque grande "Flotadores" + columna "Textiles" y añadir un tercer bloque "Gafas & Accesorios" para no quedar cortos. Parallax en imágenes de fondo (GSAP ScrollTrigger `yPercent`).
4. **Sección oscura pinned "La claridad de las aguas"** — Fondo `ink`, título `sun`. GSAP pin + reveal escalonado de bullets. Texto gigante "AZUL" como marca de agua parallax.
5. **Esenciales de temporada** — Grid 4 productos con hover scale, stagger reveal on-scroll.
6. **Sección lifestyle full-bleed parallax** — Imagen de piscina overhead con `background-attachment`/GSAP parallax, título "EL ARTE DE / NO HACER NADA".
7. **Nueva sección: "El Ritual"** — Zigzag de 3 pasos (Elegir · Sumergir · Reposar) con imágenes y texto alternados, reveal on-scroll.
8. **Testimonios / prensa** — Marquee horizontal infinito con citas de estilo editorial.
9. **Newsletter "Boletín de Sol"** — Formulario minimalista.
10. **Footer** — 4 columnas: Boletín, Navegación, Social, copyright.

### Imágenes
Generar ~10 imágenes premium via `imagegen--generate_image` a `src/assets/` según los `data-prompt` del prototipo, más las nuevas secciones (ritual, testimonios background). Se importan como módulos ES6.

### Animaciones GSAP
Hook `useGsapScroll` en `src/hooks/` que registre `ScrollTrigger` una sola vez. Cada componente aplica:
- Parallax `yPercent: -15` en imágenes de fondo.
- Reveals `opacity/translateY` con `ScrollTrigger` batch.
- Pin en sección "Claridad de las aguas".
- Marquee con `gsap.to` loop infinito.

### Detalles técnicos
- Todo importado desde `@tanstack/react-router`; no tocar `routeTree.gen.ts`.
- GSAP registrado dentro de `useEffect` (evita SSR).
- Contenido 100% en español.
- Sin funcionalidad backend (solo landing descriptiva).
