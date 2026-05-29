## Resumen

Construir una landing page de lujo en español para tus botellas térmicas metálicas, siguiendo la dirección **Monolith Tech Luxe** (negro obsidiana + acentos dorados, tipografías Space Grotesk + Inter). Imágenes reales generadas con IA, animaciones GSAP + ScrollTrigger y parallax cinematográfico.

## Secciones (largas, con imágenes grandes y copy descriptivo)

1. **Nav fija** con `mix-blend-difference` (AURA · La Botella · Tecnología · Colores · Tienda)
2. **Hero pantalla completa** — titular gigante "Pura / Hidratación", imagen macro de textura metálica al fondo, indicador de scroll animado
3. **Diseñada para los extremos** — split 5/7 con tarjeta flotante "48 horas frío"
4. **Tecnología de vacío** — sección oscura con 3 columnas explicando doble pared, acero 18/8 y revestimiento mate
5. **La Paleta** — grid de 6 colores (Cobalto, Cobre, Pino Alpino, Obsidiana, Arena, Borgoña) con hover scale e imágenes propias por color
6. **Anatomía del producto** — botella central grande con etiquetas (tapón hermético, doble pared, base de silicona, acabado mate) reveladas en scroll
7. **Ritual diario elevado** — full-bleed lifestyle 80vh con overlay y CTA
8. **Especificaciones técnicas** — tabla minimalista (capacidad, peso, material, certificación, conservación frío/calor)
9. **Testimonios** — 3 citas editoriales sobre fondo oscuro
10. **CTA final + Footer** — "Posee tu AURA", links sociales, copyright

## Detalles técnicos

- **Tokens en `src/styles.css`**: añadir `--obsidian #050505`, `--slate-950 #0a0a0c`, `--platinum #f5f5f7`, `--gold-muted #c5a059` mapeados en `@theme inline`. Cargar Space Grotesk + Inter desde Google Fonts en `__root.tsx` head links.
- **Animaciones**: instalar `gsap` con `bun add gsap`. Hook `useGsap` con ScrollTrigger para: parallax del hero, fade/translate en reveals de sección, pin de la sección "Anatomía", escala en imagen de paleta. Animaciones registradas dentro de `useEffect` con cleanup.
- **Imágenes**: generar ~10 imágenes con `imagegen` (hero macro, botella en pedestal, 6 colorways, lifestyle interior, anatomía) en `src/assets/` e importar como ES6.
- **Estructura de componentes** en `src/components/landing/`: `Nav.tsx`, `Hero.tsx`, `Extremes.tsx`, `Technology.tsx`, `Palette.tsx`, `Anatomy.tsx`, `Lifestyle.tsx`, `Specs.tsx`, `Testimonials.tsx`, `CtaFooter.tsx`. Compuestos en `src/routes/index.tsx` reemplazando el placeholder. Hook `src/hooks/use-gsap.ts`.
- **SEO**: `head()` de la ruta `/` con title/description en español sobre las botellas, og:image apuntando a la imagen hero.
- Todo el copy en **español**.

## Fuera de alcance

- Sin backend, sin carrito real, sin pasarela de pago (los CTAs son visuales).
- Sin multi-idioma.

¿Lo construyo así o ajustamos algo (nombre de marca, idioma, número de colores)?