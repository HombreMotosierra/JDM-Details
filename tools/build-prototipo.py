#!/usr/bin/env python3
"""
Genera `prototipo.html`: el sitio completo empaquetado en un solo archivo.

Por qué existe
--------------
El sitio de producción vive repartido en varios archivos, que es lo correcto
para un dominio propio (se cachean por separado y se editan sin tocar el resto).
Pero para *enseñárselo al cliente* estorba: si le mandamos la carpeta por
WhatsApp llega descuadrada, y GitHub Pages sirve los repos de proyecto en un
subdirectorio donde es fácil romper rutas.

`prototipo.html` resuelve las dos cosas: CSS, JavaScript, tipografías e imágenes
quedan incrustados en el propio archivo. No pide nada a ningún servidor, así que
funciona desde GitHub Pages, desde un adjunto de WhatsApp o desde un USB sin
internet.

Uso
---
    python3 tools/build-prototipo.py

Hay que volver a correrlo cada vez que cambie index.html, styles.css o main.js.
"""

import base64
import pathlib
import re
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
SALIDA = ROOT / 'prototipo.html'

# Solo el subconjunto latino: cubre inglés y español (incluidas ñ, á, ü) y
# ahorra ~130 KB frente a incluir también latin-ext.
FUENTES = ('cinzel-latin.woff2', 'inter-latin.woff2')

CSP = (
    "default-src 'none'; img-src data:; font-src data:; "
    "style-src 'unsafe-inline'; script-src 'unsafe-inline'; "
    "base-uri 'none'; form-action 'none'; frame-ancestors 'none'"
)

AVISO = """<!--
  ============================================================================
  JDM Details — PROTOTIPO EN UN SOLO ARCHIVO

  Generado automáticamente por tools/build-prototipo.py. No editar a mano:
  los cambios se hacen en index.html, assets/css/styles.css y assets/js/main.js,
  y después se vuelve a correr el script.

  Todo va incrustado (estilos, scripts, tipografías e imágenes), así que este
  archivo no hace ni una sola petición a internet.
  ============================================================================
-->
"""


def b64(ruta: pathlib.Path) -> str:
    return base64.b64encode(ruta.read_bytes()).decode()


def datauri(ruta: pathlib.Path, mime: str) -> str:
    return f'data:{mime};base64,{b64(ruta)}'


def incrustar_css() -> str:
    css = (ROOT / 'assets/css/styles.css').read_text()

    # Fuera los bloques @font-face de los subconjuntos que no incrustamos.
    css = re.sub(
        r'@font-face\s*\{[^}]*?latin-ext\.woff2[^}]*?\}\s*',
        '',
        css,
        flags=re.DOTALL,
    )

    for nombre in FUENTES:
        archivo = ROOT / 'assets/fonts' / nombre
        if not archivo.exists():
            sys.exit(f'falta la tipografía {archivo}')
        css = css.replace(
            f"url('../fonts/{nombre}')",
            f"url({datauri(archivo, 'font/woff2')})",
        )

    if '../fonts/' in css:
        sys.exit('quedaron referencias a tipografías sin incrustar')
    return css


def incrustar_imagenes(html: str) -> str:
    """Aplana cada <picture> a un solo <img> con la versión WebP incrustada."""
    patron = re.compile(
        r'<picture>\s*<source\s+srcset="([^"]+)"[^>]*>\s*(<img\b[^>]*>)\s*</picture>',
        re.DOTALL,
    )

    def reemplazo(m: re.Match) -> str:
        webp = ROOT / m.group(1)
        img = m.group(2)
        if not webp.exists():
            sys.exit(f'falta la imagen {webp}')
        uri = datauri(webp, 'image/webp')
        return re.sub(r'src="[^"]*"', f'src="{uri}"', img, count=1)

    html, n = patron.subn(reemplazo, html)
    print(f'  · {n} imágenes incrustadas')
    return html


def main() -> None:
    html = (ROOT / 'index.html').read_text()

    # 1. Cabecera: CSP adaptada + no indexar mientras sea borrador.
    html = re.sub(
        r'<meta http-equiv="Content-Security-Policy"[^>]*>',
        f'<meta http-equiv="Content-Security-Policy" content="{CSP}">\n'
        '<meta name="robots" content="noindex, nofollow">',
        html,
        count=1,
    )

    # 2. Icono de pestaña incrustado; el manifiesto no aplica a un archivo suelto.
    favicon = datauri(ROOT / 'assets/img/favicon-32.png', 'image/png')
    html = re.sub(
        r'<link rel="icon"[^>]*>\s*<link rel="icon"[^>]*>\s*'
        r'<link rel="apple-touch-icon"[^>]*>\s*<link rel="manifest"[^>]*>',
        f'<link rel="icon" href="{favicon}" type="image/png">',
        html,
        count=1,
    )

    # 3. Sin archivos externos no hace falta precargar nada.
    html = re.sub(r'\s*<link rel="preload"[^>]*>', '', html)

    # 4. Hoja de estilos -> <style> en línea.
    html = re.sub(
        r'<link rel="stylesheet" href="assets/css/styles\.css">',
        '<style>\n' + incrustar_css() + '\n</style>',
        html,
        count=1,
    )

    # 5. Script -> <script> en línea, al final del body para no bloquear el pintado.
    js = (ROOT / 'assets/js/main.js').read_text()
    html = re.sub(r'\s*<script src="assets/js/main\.js" defer></script>', '', html, count=1)
    html = html.replace('</body>', '<script>\n' + js + '\n</script>\n</body>', 1)

    # 6. Imágenes.
    html = incrustar_imagenes(html)

    # 7. Aviso de archivo generado.
    html = html.replace('<!DOCTYPE html>', '<!DOCTYPE html>\n' + AVISO, 1)

    sobras = re.findall(r'(?:href|src|srcset)="(assets/[^"]+)"', html)
    if sobras:
        sys.exit(f'quedaron referencias externas: {sorted(set(sobras))}')

    SALIDA.write_text(html, encoding='utf-8')
    print(f'  · {SALIDA.name} — {SALIDA.stat().st_size / 1024:.0f} KB')


if __name__ == '__main__':
    print('Empaquetando el prototipo…')
    main()
    print('Listo.')
