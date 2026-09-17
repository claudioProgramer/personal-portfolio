# Certificados — Estructura preparada

Esta carpeta está preparada para almacenar las imágenes reales de los certificados
que se muestran en la sección **Formación y Certificaciones** (`#certificaciones`).

⚠️ Todavía **no se incluyen imágenes**: los archivos deben agregarse manualmente.

## Archivos esperados

| Archivo | Certificado | Institución | Año |
|---------|-------------|-------------|-----|
| `cs50.png` | CS50: Introduction to Computer Science | Harvard University / edX | 2026 |
| `cs50w.png` | CS50's Web Programming with Python and JavaScript | Harvard University / edX | 2026 |
| `ccna1.png` | CCNA1 — Fundamentos de Networking | Cisco | 2024 |

## Códigos QR

Carpeta: `qr/`

| Archivo | Certificado |
|---------|-------------|
| `qr/cs50.png` | CS50: Introduction to Computer Science |
| `qr/cs50w.png` | CS50's Web Programming with Python and JavaScript |
| `qr/ccna1.png` | CCNA1 — Fundamentos de Networking |

Los códigos QR deben ser los oficiales de verificación de cada certificado.
No usar códigos QR de ejemplo, generados o de demostración.

## Cómo activar cada elemento

En `index.html`, dentro de la sección `#certificaciones`, cada card tiene bloques
comentados con la ruta exacta esperada:

1. **Imagen del certificado** → dentro de `.certificate-image`, descomentar el `<img>`
   y eliminar el placeholder (`<i>` + `<span>`).
2. **Código QR** → descomentar el `<span class="certificate-qr">` que contiene el `<img>`.
3. **Enlace "Ver certificado"** → reemplazar el `<span class="certificate-link is-placeholder">`
   por el `<a class="certificate-link">` comentado, colocando la URL oficial de verificación.

## Recomendaciones

- Imágenes en PNG o JPG, ancho recomendado de 1000 a 1200 px.
- QR en PNG cuadrado (por ejemplo 400×400 px) con fondo claro.
- Nombres de archivo en minúsculas y sin espacios.
