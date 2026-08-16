# JDM Details — Premium Auto Care

Sitio web informativo (one-page) para el negocio de detailing automotriz **JDM Details**.
Responsive, bilingüe EN/ES, sin backend y sin dependencias de terceros.

**Estado:** prototipo v0.1 — pendiente de aprobación del cliente.
**Plan de trabajo:** ver [`docs/CRONOGRAMA.md`](docs/CRONOGRAMA.md).

---

## 0. Enseñárselo al cliente

Hay dos formas, y sirven para cosas distintas:

| | `index.html` (el sitio) | `prototipo.html` (archivo único) |
|---|---|---|
| Qué es | El sitio real, repartido en varios archivos | Todo el sitio empaquetado en **un solo archivo** |
| Peso | ~350 KB | ~300 KB |
| Sirve para | Publicar en el dominio propio | Mandarlo por WhatsApp o correo |
| Funciona sin internet | No | **Sí**, con doble clic |
| Se indexa en Google | Sí | No (lleva `noindex`) |

`prototipo.html` se genera solo; **no se edita a mano**. Cada vez que cambies
`index.html`, `styles.css` o `main.js`, vuelve a correr:

```bash
python3 tools/build-prototipo.py
```

### Publicarlo en GitHub Pages

En el repositorio → **Settings → Pages → Source: `Deploy from a branch`** →
rama `main`, carpeta `/ (root)` → **Save**. En un par de minutos queda en:

- `https://hombremotosierra.github.io/JDM-Details/` — el sitio completo
- `https://hombremotosierra.github.io/JDM-Details/prototipo.html` — el archivo único

> Todas las rutas del proyecto son **relativas**, justamente para que GitHub Pages
> funcione: los repos de proyecto se sirven en un subdirectorio, y con rutas
> absolutas (`/assets/…`) el sitio daría 404 en todos los recursos.

> ⚠️ Pages es **solo para revisión**. `prototipo.html` lleva `noindex`, pero la raíz
> no, así que Google podría llegar a indexar la copia de `github.io` y competir
> después con el dominio real. Ver el TODO 10: apagar Pages el día del lanzamiento.

---

## 1. Tecnologías (y por qué)

La página es **informativa**: no tiene usuarios, ni carrito, ni base de datos. Meter
React, Next.js o WordPress aquí sería pagar complejidad sin recibir nada a cambio.
Por eso el stack es deliberadamente mínimo:

| Capa | Elección | Por qué |
|---|---|---|
| Marcado | HTML5 semántico | Indexable por Google sin depender de JavaScript. |
| Estilos | CSS moderno (grid, custom properties, `clamp()`) | Cero framework, cero CSS muerto. El archivo pesa ~20 KB. |
| Interacción | JavaScript ES5/ES6 sin librerías | Menú móvil, cambio de idioma y animaciones de entrada. La página funciona aunque el JS falle. |
| Tipografías | Cinzel + Inter **auto-alojadas** (WOFF2) | Ninguna petición a Google Fonts: más rápido, mejor privacidad y compatible con una CSP estricta. |
| Build | **Ninguno** | No hay `npm install`, ni `node_modules`, ni cadena de suministro que comprometer. Lo que está en el repo es exactamente lo que se publica. |
| Hosting | Cualquier servidor de archivos estáticos | Netlify, Cloudflare Pages, Vercel, GitHub Pages o un hosting compartido con FTP. |

**Consecuencia práctica:** el sitio se despliega arrastrando una carpeta, carga en
menos de un segundo y el costo de infraestructura puede ser **US$0/mes**.

### Lo que NO usamos, a propósito

- **Sin cookies, sin Google Analytics, sin píxeles de Facebook.** No hay banner de
  cookies porque no hay nada que consentir.
- **Sin CDNs externos.** Todo (fuentes, imágenes, iconos) se sirve desde el mismo
  dominio. Un tercero comprometido no puede inyectar código en el sitio.
- **Sin formularios.** El contacto es por WhatsApp y teléfono, así que el sitio no
  recibe, procesa ni almacena datos personales. Esto elimina de un plumazo el
  spam, la inyección, el envío de correo y la mayor parte de las obligaciones de
  protección de datos.

---

## 2. Estructura

```
.
├── index.html                  Página completa (una sola)
├── 404.html                    Página de error
├── favicon.ico
├── robots.txt · sitemap.xml · site.webmanifest
├── .well-known/security.txt    Canal de reporte de vulnerabilidades (RFC 9116)
├── _headers                    Cabeceras para Netlify / Cloudflare Pages
├── netlify.toml · vercel.json  Config por plataforma
├── deploy/
│   ├── .htaccess               Para hosting compartido Apache (cPanel, Hostinger)
│   └── nginx.conf              Para VPS propio
├── prototipo.html              Sitio empaquetado en un solo archivo (generado)
├── .nojekyll                   Evita que GitHub Pages procese el sitio con Jekyll
├── tools/build-prototipo.py    Genera prototipo.html
├── docs/
│   ├── CRONOGRAMA.md           Plan Scrum y fechas hacia producción
│   └── cronograma-cliente.html Versión del cronograma para presentar al cliente
└── assets/
    ├── css/styles.css
    ├── js/main.js
    ├── fonts/*.woff2 + LICENSE.txt
    └── img/                    Logo, favicons e imagen para redes sociales
```

---

## 3. Ver el sitio en local

No requiere instalar nada. Desde la raíz del proyecto:

```bash
python3 -m http.server 8899
# abrir http://127.0.0.1:8899
```

> Las rutas son relativas, así que `index.html` también abre con doble clic desde
> el disco. Aun así conviene usar el servidor: con `file://` el navegador aplica
> restricciones de origen que no reflejan cómo se va a comportar en producción.

---

## 4. Qué falta por definir (TODOs antes de publicar)

Cada punto está marcado en el código con un comentario `TODO` o con una nota
`⚑ Prototipo` visible en la propia página.

| # | Pendiente | Dónde se cambia |
|---|---|---|
| 1 | **Dominio real** (hoy es `jdmdetails.com` de ejemplo) | `index.html` (canonical, OG, JSON-LD), `robots.txt`, `sitemap.xml`, `deploy/nginx.conf`, `.well-known/security.txt` |
| 2 | **Precios de los tres paquetes** | `index.html` → `pkg.askPrice` / `assets/js/main.js` → clave `'pkg.askPrice'` |
| 3 | **Fotos antes/después** (6 espacios) | Sección `#gallery` en `index.html` |
| 4 | **Reseñas reales** de clientes | Sección `#reviews`. *No se publican testimonios inventados.* |
| 5 | **Redes sociales** (Instagram, Facebook, TikTok) | `assets/js/main.js` → objeto `CONFIG.social`. Si el valor queda vacío, el icono no se muestra. |
| 6 | **Lista de ciudades** de cobertura | Sección `#area` en `index.html` |
| 7 | **Horario real** de atención | Pie de página + `JSON-LD` (`openingHoursSpecification`) |
| 8 | **Correo de contacto** de seguridad | `.well-known/security.txt` |
| 9 | Dirección física, si el cliente quiere aparecer en Google Maps | `JSON-LD` → añadir `address` |
| 10 | **Apagar GitHub Pages el día del lanzamiento** para que la copia de `github.io` no compita en Google con el dominio real | Settings → Pages → Source: `None` |

### Cómo editar textos

La página **se escribe en inglés directamente en el HTML**. El español vive en el
diccionario `ES` de `assets/js/main.js`, indexado por la clave `data-i18n` de cada
elemento.

Para cambiar una frase hay que tocar los dos lados:

```html
<!-- index.html -->
<h3 data-i18n="svc.1.t">Hand wash &amp; dry</h3>
```
```js
// assets/js/main.js
'svc.1.t': 'Lavado y secado a mano',
```

Verificar que no falte ninguna traducción:

```bash
node -e "
const fs=require('fs');
const html=fs.readFileSync('index.html','utf8');
const js=fs.readFileSync('assets/js/main.js','utf8');
const keys=[...new Set([...html.matchAll(/data-i18n=\"([^\"]+)\"/g)].map(m=>m[1]))];
const es=js.slice(js.indexOf('var ES = {'), js.indexOf('/* Prefilled WhatsApp'));
const have=new Set([...es.matchAll(/^\s{4}'([^']+)':/gm)].map(m=>m[1]));
const missing=keys.filter(k=>!have.has(k));
console.log(missing.length ? 'FALTAN: '+missing.join(', ') : 'OK — '+keys.length+' claves traducidas');
"
```

---

## 5. Publicar

### Opción A — Cloudflare Pages o Netlify (recomendada)

Gratis, HTTPS automático, CDN global y despliegue en cada `git push`.

1. Conectar el repositorio `HombreMotosierra/JDM-Details`.
2. Build command: *(vacío)* · Output directory: `/`
3. Añadir el dominio propio y apuntar los DNS donde indique el panel.
4. El archivo `_headers` aplica solo; no hay que configurar nada más.

### Opción B — Hosting compartido (Hostinger, cPanel, GoDaddy)

1. Subir por FTP **el contenido** de esta carpeta a `public_html/`.
2. Copiar `deploy/.htaccess` a `public_html/.htaccess` (con el punto).
3. Activar el certificado SSL gratuito (Let's Encrypt) desde el panel.
4. No subir `docs/`, `deploy/`, `README.md`, `netlify.toml` ni `vercel.json`.

### Opción C — VPS propio

Copiar el sitio a `/var/www/jdmdetails`, usar `deploy/nginx.conf` como bloque de
servidor y emitir el certificado con `certbot --nginx -d dominio.com`.

### Costo estimado

| Concepto | Costo aproximado |
|---|---|
| Dominio `.com` (anual) | US$10 – 18 |
| Cloudflare Pages / Netlify | US$0 |
| Certificado SSL | US$0 (incluido) |
| Hosting compartido *(alternativa a lo anterior)* | US$3 – 5 / mes |
| Correo `@dominio.com` | US$0 con reenvío de Cloudflare · ~US$7/mes con Google Workspace |

> Cifras de referencia de agosto de 2026; conviene confirmarlas al momento de comprar.

---

## 6. Seguridad

| Medida | Implementación |
|---|---|
| Content Security Policy estricta | `<meta http-equiv>` en el HTML **y** cabecera real en `_headers` / `.htaccess` / `nginx.conf`. Sin `unsafe-inline`: no hay estilos ni scripts en línea en todo el proyecto. |
| HSTS | `max-age=31536000; includeSubDomains; preload` |
| Clickjacking | `frame-ancestors 'none'` + `X-Frame-Options: DENY` |
| MIME sniffing | `X-Content-Type-Options: nosniff` |
| Fuga de referer | `Referrer-Policy: strict-origin-when-cross-origin` |
| Permisos del navegador | `Permissions-Policy` niega cámara, micrófono, geolocalización, pagos, USB… |
| Tabnabbing | Todos los enlaces externos llevan `rel="noopener noreferrer"` |
| Aislamiento de origen | `Cross-Origin-Opener-Policy` y `Cross-Origin-Resource-Policy: same-origin` |
| Superficie de ataque | Sin backend, sin formularios, sin dependencias, sin build. |
| Enlaces sociales | `main.js` rechaza cualquier URL que no empiece por `https://` |
| Reporte de fallos | `.well-known/security.txt` |

Comprobar las cabeceras una vez publicado:

```bash
curl -sI https://TU-DOMINIO.com | grep -iE 'content-security|strict-transport|x-frame|x-content|referrer|permissions'
```

También conviene pasar el sitio por [securityheaders.com](https://securityheaders.com)
y por [Mozilla Observatory](https://developer.mozilla.org/observatory).

---

## 7. Accesibilidad y rendimiento

- HTML semántico con `<header>`, `<main>`, `<nav>`, `<section>` y encabezados en orden.
- Enlace *«Ir al contenido»* para navegación por teclado.
- Menú móvil con `aria-expanded`, cierre con `Esc` y foco devuelto al botón.
- Acordeón de preguntas con `<details>`/`<summary>` nativo (funciona sin JS).
- Contraste verificado sobre fondo oscuro; foco visible en todos los interactivos.
- `prefers-reduced-motion` desactiva todas las animaciones.
- La tabla comparativa hace scroll horizontal propio: el `<body>` nunca se desborda.
- Imágenes con `width`/`height` para evitar saltos de maquetación (CLS).
- Peso total de la página: **< 350 KB** incluyendo logo y tipografías.

---

## 8. Créditos

- Logo y tarjeta original: propiedad de JDM Details.
- Tipografías Cinzel e Inter bajo SIL Open Font License 1.1 — ver
  `assets/fonts/LICENSE.txt`.
