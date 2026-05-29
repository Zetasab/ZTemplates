

# Animations3D - Proyecto de prueba

Por si quieres ver el [live demo](https://animation3d.cesarsobrino.es/)

![Preview del proyecto](./Video-Project-1.gif)

## Descripción

Este repositorio es un **proyecto de prueba** orientado a construir una experiencia web inmersiva con una moto 3D, animaciones por scroll y una narrativa visual tipo landing page.

Su objetivo principal es validar ideas de interacción, performance y presentación de contenido en una sola página.

## Metodologías y enfoque usado

- **Desarrollo iterativo**: construcción por bloques (escena 3D, navegación, secciones de contenido, pricing, cierre).
- **Arquitectura SPA simple**: una sola vista en `index.html` con lógica central en `main.js` y estilos en `style.css`.
- **Animación dirigida por scroll**: uso de scroll suave para sincronizar recorrido visual y contenido.
- **Composición 3D procedural**: renderizado en tiempo real con Three.js para escena, cámara, luces y elementos 3D.
- **Diseño responsive**: estructura pensada para escritorio y móvil.

## Tecnologías

- **Vite** (entorno de desarrollo y build)
- **Three.js** (renderizado 3D en WebGL)
- **GSAP** (animaciones)
- **Lenis** (smooth scroll)
- **HTML5 + CSS3 + JavaScript (ES Modules)**

## Secciones de la landing

La página incluye estas secciones principales:

1. **Splash screen** de carga inicial.
2. **Hero** de presentación.
3. **Motor** (`#section-cockpit`).
4. **Chasis** (`#section-chassis`).
5. **Tech** (`#section-tech`).
6. **About** (`#section-about`).
7. **Pricing** (`#section-pricing`).
8. **Beyond The Ride** (`#section-beyond`).
9. **Footer** con navegación rápida.

## Estructura base del proyecto

- `index.html`: estructura principal de la landing.
- `main.js`: escena 3D, comportamiento y animaciones.
- `style.css`: estilos globales y secciones visuales.
- `portada.png`: imagen de portada usada en este README.
- `public/`: recursos estáticos públicos.

## Ejecución local

```bash
npm install
npm run dev
```

## Build de producción

```bash
npm run build
npm run preview
```
