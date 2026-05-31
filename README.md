# ZTemplates

Galería web construida con **Angular 21** que actúa como portal/portainer de templates frontend. Permite explorar, previsualizar en vivo y descargar proyectos template listos para producción.

---

## ¿Qué hace?

- Muestra una cuadrícula de cards animadas, una por cada template disponible.
- Cada card incluye nombre, descripción, tecnologías, imagen de portada y GIF animado al hacer hover.
- El botón **Ver Demo** abre el template prebuildado directamente en el navegador (nuevo tab).
- El botón **Descargar** descarga el archivo `descarga.zip` del template.
- Registra visitas y descargas a través de una API externa (`TemplateTrackingService`).

---

## Estructura del proyecto

```
ZTemplates/
├── angular.json                  # Configuración del workspace Angular
├── package.json                  # Dependencias y scripts npm
├── scripts/
│   └── generate-templates.js     # Script Node que genera public/templates.json
├── public/
│   ├── templates.json            # Generado automáticamente — lista de templates
│   └── templates/                # Cada subcarpeta es un template independiente
│       ├── mi-template/
│       │   ├── languages.json    # Metadatos del template (nombre, descripción, techs…)
│       │   ├── portada.png       # Imagen de portada (opcional)
│       │   ├── portada_gif.gif   # GIF animado para hover (opcional)
│       │   ├── descarga.zip      # Archivo descargable (opcional)
│       │   └── dist/             # Build del template (index.html + assets)
│       └── ...
└── src/
    └── app/
        ├── app.ts                # Componente raíz (lógica + animaciones)
        ├── app.html              # Template HTML de la galería
        ├── app.css               # Estilos del portal
        ├── app.config.ts         # Providers Angular (router, HTTP, PrimeNG)
        └── services/
            └── template-tracking.service.ts  # Tracking de visitas/descargas
```

---

## Templates incluidos

| Template | Framework | Tecnologías destacadas |
|---|---|---|
| **Aura Project** | React | TanStack Start, TanStack Router, shadcn/ui, GSAP, Lenis |
| **Aurum Project** | React | TanStack Start, TanStack Router, shadcn/ui, GSAP, Lenis |
| **Kicks Lab Project** | React | TanStack Start, TanStack Router, Tailwind CSS |
| **Pharmamodern Project** | React | TanStack Start, TanStack Router, Tailwind CSS |
| **Portfolio Proyecto** | React | Vite, Tailwind CSS |
| **Animations3d** | JavaScript | Vanilla JS, CSS 3D |

---

## Cómo añadir un nuevo template

1. Crea una carpeta en `public/templates/<nombre-del-template>/`.
2. Añade un `languages.json` con los metadatos:
   ```json
   {
     "name": "Mi Template",
     "description": "Descripción corta del template.",
     "language": "React",
     "technologies": ["React", "Vite", "Tailwind CSS"]
   }
   ```
3. Coloca el build del proyecto dentro (por ejemplo `dist/index.html` + assets).
4. Opcionalmente añade `portada.png`, `portada_gif.gif` y `descarga.zip`.
5. Ejecuta `npm start` — el script `generate-templates.js` reconstruye `templates.json` automáticamente.

---

## Scripts npm

| Comando | Descripción |
|---|---|
| `npm start` | Genera `templates.json` y levanta el servidor de desarrollo Angular |
| `npm run build` | Genera `templates.json` y compila la aplicación para producción |
| `npm test` | Ejecuta los tests con Vitest |

> `generate-templates.js` se ejecuta como paso `pre` antes de `start` y `build`.

---

## Tecnologías del portal

| Paquete | Versión |
|---|---|
| Angular | ^21.2 |
| PrimeNG | ^21.1 |
| @primeuix/themes (Aura) | ^2.0 |
| TypeScript | ~5.9 |
| Vitest | ^4.0 |

---

## Script `generate-templates.js`

Lee cada subcarpeta de `public/templates/`, detecta automáticamente el tipo de build y genera `public/templates.json`.

- **TanStack Start**: detecta `dist/client/assets/` y genera un `index.html` que carga el bundle correcto (el JS más grande es el entry point).
- **Vite / CRA estándar**: busca `dist/index.html` o `build/index.html` y convierte rutas absolutas (`/assets/…`) a relativas (`./assets/…`) para que funcionen servidas desde subcarpetas.
- **Sin build**: usa `index.html` en la raíz si existe.

---

## Variables de entorno

El tracking de visitas apunta a:

```typescript
// src/environments/environment.ts
export const environment = {
  production: false,
  apiUrl: 'http://localhost:5300'
};
```

Cambia `apiUrl` en `environment.prod.ts` para apuntar a tu API en producción.

---

## Prerequisitos

- Node.js ≥ 20
- npm ≥ 11
- Angular CLI 21 (`npm i -g @angular/cli`)
