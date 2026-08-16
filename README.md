# Coria Dev — sitio web

Rework de la landing de Coria Dev. React + TypeScript + Vite + Tailwind CSS.

## Stack y versiones

Todo el proyecto usa las últimas versiones estables disponibles al momento de generarlo:

- React 19
- Vite 8
- Tailwind CSS 4 (CSS-first config, sin `tailwind.config.js`)
- TypeScript 6
- lucide-react 1.x

> Nota sobre TypeScript: se usa la rama 6.x en vez de la 7.x porque `typescript-eslint`
> todavía no soporta TS 7 (recién salió). Cuando lo actualicen, se puede subir sin drama.

## Cómo correrlo local

```bash
npm install
npm run dev
```

Abrí http://localhost:5173

## Build de producción

```bash
npm run build
npm run preview
```

El resultado queda en `dist/`, listo para desplegar (Vercel, Netlify, GitHub Pages, etc).

## Qué tenés que reemplazar con info real

### 1. Proyectos — `src/data/projects.ts`
Cada proyecto tiene: `title`, `description`, `tags`, `image`, `demoUrl`, `githubUrl`.
Editá los 3 proyectos existentes con la descripción completa y los links reales.

### 2. Imágenes de proyectos — `src/assets/projects/`
Hoy son placeholders en SVG (`estudio-juridico.svg`, `constructora.svg`, `gestion-pedidos.svg`).
Reemplazalos por capturas reales (`.png` / `.jpg`, idealmente 1200×750px o proporción 16:10).
Si usás el mismo nombre de archivo (cambiando solo la extensión), actualizá el `import`
correspondiente arriba del array en `src/data/projects.ts`, por ejemplo:

```ts
import estudioJuridicoImg from '../assets/projects/estudio-juridico.jpg'
```

Importante: las imágenes se referencian con `import`, no como string de ruta (`"/src/..."`).
Así Vite las procesa y quedan incluidas correctamente en el build de producción.

### 3. Nuevos proyectos — mismo archivo
Al final del array de `projects` en `src/data/projects.ts`, agregá un nuevo objeto por
cada proyecto que quieras sumar. El grid de la sección "Proyectos" automáticamente
va a mostrar los 4 espacios vacíos restantes menos uno por cada proyecto que agregues.
Si en algún momento tenés más de 3 proyectos y ya no querés espacios vacíos, bajá o
poné en `0` la constante `emptySlots` en el mismo archivo.

### 4. Contacto — `src/components/Contact.tsx`
Cambiá el email (`EMAIL`) y los links de `socials` (GitHub, LinkedIn, Instagram) por
las cuentas reales de Coria Dev.

### 5. Colores, tipografías y otros tokens de diseño — `src/index.css`
Con Tailwind v4 ya no hay `tailwind.config.js`: todos los tokens (colores, fuentes,
animaciones) están definidos directamente en el bloque `@theme` de `src/index.css`.
Si querés cambiar el color de acento, por ejemplo, editá `--color-accent` ahí.

### 6. Favicon — `public/favicon.svg`
Podés reemplazarlo por tu isotipo si tenés uno.

## Estructura

```
src/
  components/
    Navbar.tsx        → header con navegación
    Hero.tsx           → sección principal con la terminal animada
    Projects.tsx        → sección de proyectos (grid 3 columnas)
    ProjectCard.tsx      → card individual de proyecto
    EmptyProjectCard.tsx → card de espacio disponible
    Contact.tsx          → sección de contacto
    Footer.tsx            → pie de página
  data/
    projects.ts        → contenido de los proyectos (editar acá)
  assets/projects/      → imágenes/placeholders de cada proyecto
```
