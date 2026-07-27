## Objetivo

Construir una landing page larga y descriptiva para tu editor de código con IA, siguiendo la dirección **Architectural Technicality** que elegiste: fondo casi negro (#09090b), acento verde esmeralda (#10b981), tipografía Inter + JetBrains Mono, mucha densidad técnica y precisión.

## Secciones (en orden de scroll)

1. **Nav fijo** — logo cuadrado + acento, links (Motor, Inteligencia, Rendimiento, Precios), botón "Descargar Beta".
2. **Hero a pantalla completa** — headline enorme "El editor que piensa antes que tú", subtítulo, dos CTAs, y debajo un **mockup del editor** flotando con syntax highlighting real y cursor parpadeando.
3. **Marquee de lenguajes** — carrusel infinito con TypeScript, Rust, Python, Go, Swift, C++, Haskell, Java, Ruby, PHP, Kotlin, Elixir.
4. **IA integrada** — bloque grande split: texto + visual de autocompletado con "ghost text".
5. **Rendimiento / Benchmarks** — barras animadas comparando Kinetic vs editores estándar + imagen técnica (mercurio líquido sobre microchip).
6. **Métricas grandes** — 4 stats animadas con contadores (8× más rápido, 42% menos memoria, 120 FPS, <1s arranque).
7. **Grid de características (6)** — capa neural contextual, terminal GPU, multi-cursor nativo, deep git lens, sync en la nube, sandbox de extensiones.
8. **Showcase visual grande** — captura del editor a ancho completo con efecto parallax.
9. **Cómo funciona (3 pasos)** — instalar → conectar tu repo → programar con IA.
10. **Testimonios de desarrolladores** — 3 tarjetas con quote + autor.
11. **Precios** — Community (gratis) y Pro ($20/mes).
12. **CTA final** — "Build at the speed of thought" + botón grande de descarga.
13. **Footer** — logo, descripción, columnas de links, build ID.

## Animaciones y motion

- **GSAP + ScrollTrigger** para parallax en imágenes del hero y showcase, reveals on-scroll de cada sección, contadores animados en métricas y barras de benchmark que se llenan al entrar en viewport.
- **Framer Motion** para micro-interacciones (hover en cards, botones).
- Hero: reveal escalonado del título/subtítulo/CTAs, mockup del editor con float suave y cursor parpadeando.
- Marquee CSS puro infinito.
- Respeta `prefers-reduced-motion`.

## Imágenes

Generadas con `imagegen`:
- Hero: se resuelve con mockup HTML del editor (sin imagen).
- Rendimiento: macro de mercurio líquido sobre microchip.
- Showcase editor: captura estilizada del editor en uso.
- IA integrada: primer plano de autocompletado con glow verde.

Guardadas en `src/assets/` y referenciadas por import.

## Detalles técnicos

- **Tokens de diseño** en `src/styles.css` (Tailwind v4 `@theme inline`): reemplazar el tema por defecto con background #09090b, foreground #fafafa, muted #71717a, accent #10b981, border rgba(255,255,255,0.08).
- **Fuentes** vía `@fontsource/inter` y `@fontsource/jetbrains-mono` (`bun add`), importadas en `src/start.ts`.
- **Ruta** — todo en `src/routes/index.tsx`, con componentes separados en `src/components/landing/` (Nav, Hero, Marquee, AISection, Performance, Metrics, FeaturesGrid, Showcase, HowItWorks, Testimonials, Pricing, FinalCTA, Footer).
- **Hook** `src/hooks/use-gsap-scroll.ts` para inicializar ScrollTrigger.
- **Dependencias nuevas**: `gsap`, `framer-motion`, `@fontsource/inter`, `@fontsource/jetbrains-mono`.
- **SEO** — actualizar `head()` de `index.tsx` con title/description/og propios de Kinetic.

## Fuera de alcance

Sin backend, sin auth, sin formulario funcional de descarga (los botones son visuales). Sin i18n — copy en español para textos descriptivos, mono/labels técnicos en inglés (más natural en producto dev).
