# María Laura Gumucio Rios · Portafolio de arquitectura

Sitio personal en español, con Next.js App Router, React, TypeScript y Tailwind CSS 4. Sin base de datos ni servicios de pago. No ha sido publicado.

## 1. Instalar y ejecutar

Instalar una versión LTS de Node.js 20.9 o superior (recomendado Node.js 24 LTS), con npm. Desde esta carpeta:

```bash
npm install
npm run dev
```

Abrir http://localhost:3000. Antes de publicar:

```bash
npm run typecheck
npm run build
npm start
```

Las dependencias usan rangos de versiones estables compatibles (Next.js 16, React 19, Tailwind 4 y TypeScript 5). La primera instalación genera `package-lock.json`: revisarlo y subirlo a Git para fijar las versiones resueltas. En adelante, usar `npm ci`. No mezclar gestores de paquetes.

**Estado de verificación de esta entrega:** el entorno de creación bloquea la conexión al registro de paquetes. No fue posible instalar dependencias, ejecutar TypeScript ni completar `next build`. La política del navegador también impidió abrir la vista previa local; la revisión visual de escritorio y móvil sigue pendiente. Se comprobó la sintaxis ejecutable de los datos y del generador de vista previa y se generaron las nueve páginas sin errores. No se incluye un lockfile inventado. La vista previa sin dependencias sirve para revisar composición y navegación; no sustituye las comprobaciones anteriores. Completar estos comandos con acceso a internet antes de publicar.

## 2. Organización

```text
src/app/                  Páginas y estilos globales
src/app/proyectos/[slug]/  Plantilla única para cada proyecto
src/components/           Cabecera, pie, retícula, marcadores y galería
src/data/projects.ts      Todos los proyectos, textos e imágenes
src/data/profile.ts       Contacto, herramientas, retrato y CV
public/images/            Recursos originales organizados por proyecto
public/cv/                PDF definitivo
tools/                    Vista previa local sin dependencias
```

## 3. Cambiar textos e imágenes

Editar `src/data/projects.ts`. Cada proyecto tiene nombre, descripción, año opcional, tipología, portada, secciones y recorrido virtual opcional. Los textos generales están en las páginas correspondientes; los datos personales, en `src/data/profile.ts`.

Copiar las imágenes originales a `public/images/CREFET`, `Hospital`, `Lumna` o `Noble-Crest`. Reemplazar un marcador en los datos:

```ts
cover: {
  src: '/images/CREFET/exterior.jpg',
  alt: 'Descripción objetiva del render original de CREFET',
  caption: 'Vista exterior',
  width: 2400,
  height: 1600,
  fit: 'contain',
},
```

Usar las dimensiones reales. Las galerías conservan la proporción original y permiten ampliar imágenes con un visor modal. En las portadas de la retícula se usa `cover` por defecto; configurar `contain` para evitar recortes. La portada de la página individual conserva la imagen completa al ampliar. Mantener `src` ausente para mostrar un marcador claramente rotulado. Agregar tantas imágenes como se necesite a cada sección. Las imágenes pueden tener proporciones distintas. Usar JPG/WebP para renders y PNG/WebP de buena resolución para planos; conservar los originales fuera del repositorio si son muy pesados.

El lightbox está preparado para imágenes reales: clic para ampliar; Tab para recorrer controles; Escape para cerrar; flechas izquierda/derecha para cambiar. Los marcadores no se abren porque no representan documentación real.

No se han inventado edificios, planos, fechas o experiencia. El año de Hospital está pendiente de confirmar. Las descripciones técnicas adicionales pueden añadirse en `sections[].text` y `concept`. Para un recorrido virtual, incorporar `virtualTour: 'https://...'`.

## 4. Agregar un proyecto

Duplicar un objeto de `projects`, asignar un `slug` único y completar los campos del tipo `Project`. Crear su carpeta en `public/images`. La retícula, la ruta `/proyectos/slug` y la navegación anterior/siguiente se generan desde el mismo archivo. Volver a compilar para generar la nueva ruta.

## 5. CV y fotografía

Copiar el PDF definitivo a `public/cv/Maria-Laura-Gumucio-Rios-CV.pdf` y cambiar `cvPath` en `src/data/profile.ts` de `null` a `'/cv/Maria-Laura-Gumucio-Rios-CV.pdf'`. El enlace activa la descarga. Mientras no exista, el botón indica que el documento está pendiente. No se creó un CV ficticio.

Para el retrato, copiar la imagen a `public/images/perfil` y configurar `portrait`. También se puede quitar el bloque de fotografía en `src/app/sobre-mi/page.tsx`.

## 6. Adaptar la dirección visual

Los colores, márgenes y familias tipográficas están centralizados en `:root` de `src/app/globals.css`. Las secciones de ese archivo agrupan cabecera, retícula, marcadores, páginas y ajustes responsive. Las serif y sans serif utilizan familias locales, sin solicitudes externas ni coste. Pueden reemplazarse por fuentes propias con licencia utilizando `next/font/local`.

Los marcadores son composiciones abstractas con retícula y numeración, no imágenes de proyectos. Al incorporar renders, desaparecen automáticamente. Se respetan las preferencias de movimiento reducido y se utiliza el componente Image de Next.js para optimización de imágenes reales. El favicon editable está en `src/app/icon.svg`.

## 7. Subir a GitHub

Crear un repositorio vacío en GitHub, preferiblemente privado durante la preparación. Desde esta carpeta, después de verificar los comandos:

```bash
git init
git add .
git commit -m "Portafolio de arquitectura: primera versión"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/TU-REPOSITORIO.git
git push -u origin main
```

No incluir contraseñas ni archivos de entorno. El sitio usa solo contenido público. Antes de hacer público el repositorio, revisar permisos de publicación de imágenes y planos.

## 8. Conectar a Vercel — únicamente con autorización

Una vez autorizada la publicación: entrar a Vercel, elegir **Add New → Project**, importar el repositorio y seleccionar el preset **Next.js**. La carpeta raíz debe ser esta carpeta del proyecto (o `portfolio-maria-laura` si se sube como subcarpeta). Usar `npm run build`; no especificar una carpeta de salida estática. No hacen falta variables de entorno. Revisar las condiciones del plan gratuito antes de confirmar y no activar funciones de pago ni comprar dominios.

La entrega no crea repositorios remotos, despliegues, dominios ni servicios de pago. No se define un dominio canónico ficticio; configurar `metadataBase`, canonical, sitemap y robots cuando exista la URL autorizada definitiva. El título, la descripción, el idioma y Open Graph básicos ya están incluidos.

## 9. Actualizar después de publicar

Modificar los datos o imágenes, ejecutar `npm run typecheck` y `npm run build`, revisar la vista previa de Vercel y subir un commit. Vercel desplegará automáticamente los cambios de la rama de producción: tener esto en cuenta antes de hacer `push`. Para revisar sin afectar producción, trabajar en una rama y revisar el Preview Deployment antes de fusionar.

## 10. Vista previa sin instalación

Para verla inmediatamente, abrir **`vista-previa/inicio.html`** con un navegador desde el equipo. La carpeta incluye las nueve páginas navegables y vistas de revisión a 390, 768 y 1440 píxeles. Es una copia de revisión del diseño, no la aplicación Next.js compilada. Si se modifican datos o estilos, regenerarla con:

```bash
node tools/preview.mjs --export
```

Si no es posible descargar dependencias, con Node.js 24:

```bash
node tools/preview.mjs
```

Abrir http://localhost:4173. Esta es una representación estática de revisión, generada a partir de los mismos datos y estilos. No ejecuta Next.js, no optimiza imágenes y no verifica TypeScript. El código de producción está en `src`. Detener con Ctrl+C.

## Revisión previa a publicación

Revisar en 390 px, 768 px y 1440 px; comprobar navegación y ausencia de desplazamiento horizontal; incorporar un render original y verificar el lightbox con clic, Tab, flechas y Escape; probar descarga con el PDF definitivo; verificar correo y LinkedIn; confirmar textos y completar el año de Hospital si corresponde. Las imágenes originales y el CV siguen pendientes.
