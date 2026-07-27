# Friengess — Landing premium animada

Web informativa de una sola página (multi-sección) en español para presentar **Friengess**, tu software de mensajería segura. Estética dark-mode de lujo, tipo Linear/Arc/Discord, con hero inmersivo, parallax onscroll y reveals animados.

## Dirección visual

- **Tema:** Dark mode premium. Fondo casi-negro azulado con profundidad por capas (glows suaves, gradientes sutiles, ruido fino).
- **Color:** Base grafito/azul noche + acento vibrante (verde-cian eléctrico "señal/seguro") y un secundario violeta-azul para gradientes de marca. Acentos por tokens semánticos en `src/styles.css`, nunca colores hardcodeados.
- **Tipografía:** Display distintiva para titulares (Space Grotesk / Sora) + cuerpo legible (Inter Tight / DM Sans), vía `@fontsource`.
- **Mockups:** Imágenes generadas de interfaz de chat moderna (mockups flotantes), iconografía limpia, tarjetas con bordes glow y glassmorphism sutil.

## Animaciones

- **GSAP + ScrollTrigger** para parallax onscroll y pins; **Framer Motion** para reveals escalonados y microinteracciones en hover.
- Hero: capas con parallax (mockup flotante, blobs de luz, partículas suaves), texto con entrada escalonada.
- Secciones: fade/slide-in al entrar en viewport, números/stats con contador, flotación continua de mockups.

## Estructura de secciones

```text
[ Header/Nav ]  logo Friengess + enlaces ancla (sin login)
[ HERO ]        nombre + eslogan + mockup chat flotante + parallax + glows
[ MARQUEE ]     cinta de palabras clave (Seguro · Fluido · Confiable...)
[ SEGURIDAD ]   conversaciones seguras / cifrado / confianza (imagen + texto)
[ NOTIFICACIONES ] notificaciones potentes (banda alterna imagen/texto)
[ FLUIDEZ ]     conversaciones fluidas y en tiempo real
[ CASOS DE USO ] Empresas/Equipos + Comunidades (dos mundos)
[ GALERÍA BENTO ] mosaico de capturas/mockups de la interfaz
[ BENEFICIOS ]  grid de features con iconos (parallax suave)
[ STATS ]       métricas destacadas con contadores animados
[ CIERRE/CTA ]  sección final grande (informativa, sin formulario)
[ FOOTER ]      marca + enlaces ancla + nota
```

## Detalles técnicos

- **Stack:** TanStack Start (rutas en `src/routes/`). Todo en `src/routes/index.tsx` componiendo secciones desde `src/components/sections/`.
- **Dependencias:** `gsap`, `framer-motion`, y fuentes `@fontsource/*`.
- **Diseño:** tokens semánticos en `src/styles.css` (`@theme`), sin colores hardcodeados; responsive completo.
- **Imágenes:** generadas (mockups de interfaz de chat, escenas de seguridad, ambientes empresa/comunidad, texturas de fondo) y guardadas en `src/assets/`, importadas como ES modules.
- **SEO:** `head()` de la ruta con title (<60), meta description (<160), Open Graph/Twitter con imagen del hero, H1 único, alt en imágenes, JSON-LD de SoftwareApplication.
- **Componentes:** cada sección como componente enfocado y reutilizable; hook util para ScrollTrigger.

## Contenido (texto descriptivo, en español)

Redactaré copy descriptivo para cada sección girando en torno a tus tres pilares: **conversaciones seguras**, **notificaciones potentes**, **conversaciones fluidas y de confianza**, dirigido por igual a empresas/equipos y comunidades.

Si quieres ajustar paleta, nombre del eslogan o quitar/añadir alguna sección, dímelo; si te encaja, dale a Implementar y lo construyo.