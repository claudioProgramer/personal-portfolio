# Estructura JavaScript - Portfolio Personal

## Organización de Archivos

```
assets/js/
├── main.js              # Archivo principal que importa todos los módulos
├── navbar.js            # Lógica del navbar scroll effect
├── reveal.js            # Sistema de reveal on scroll
├── typing.js            # Efecto de typing animado
├── particles.js         # Generación de partículas flotantes (caracteres 0/1)
└── cursor-glow.js       # Efecto de glow que sigue el cursor
```

## Cómo Usarlo

1. **main.js es el punto de entrada**: Es el único archivo que se importa en `index.html`
   ```html
   <script type="module" src="assets/js/main.js"></script>
   ```

2. **Agregar un nuevo módulo**:
   - Crea el archivo: `assets/js/nombre-feature.js`
   - Agrega el import en `main.js`:
     ```javascript
     import './nombre-feature.js';
     ```

3. **Ejemplo - Nueva funcionalidad**:
   ```
   # Crear archivo
   assets/js/smooth-scroll.js
   
   # Agregar a main.js
   import './smooth-scroll.js';
   ```

## Estructura de Cada Módulo

Cada archivo JavaScript sigue este patrón:

```javascript
/* ========================= */
/* NOMBRE DE LA FUNCIONALIDAD */
/* ========================= */

// Seleccionar elementos
const elemento = document.querySelector(".selector");

// Definir lógica
function miLogica() {
    // código aquí
}

// Agregar event listeners
window.addEventListener("evento", miLogica);
```

## Módulos Disponibles

### navbar.js
- **Función**: Controla el efecto de navbar flotante al hacer scroll
- **Variables**: `navbar`, `body`
- **Eventos**: `scroll`
- **Clases**: `.navbar-scroll`, `.navbar-active`

### reveal.js
- **Función**: Anima elementos cuando entran en viewport
- **Variables**: `reveals`
- **Selector**: `.reveal`
- **Clases**: `.reveal.active`
- **Se ejecuta**: En scroll y al cargar página

### typing.js
- **Función**: Efecto de escritura animada en el hero
- **Variables**: `typingText`, `words`
- **Selector**: `#typing-text`
- **Array**: 5 palabras diferentes que se rotan

### particles.js
- **Función**: Genera partículas flotantes en el background, cada una con un carácter binario (`0` o `1`)
- **Variables**: `particlesContainer`, `GLYPH_SCALE`
- **Selector**: `.particles`
- **Elemento generado**: `div.particle` (con `textContent` `0` o `1`)
- **Tamaño**: `size = Math.random() * 8 + 2` → se usa para el `font-size` del carácter (variación pequeño / mediano / grande)
- **Intervalo**: Crea una partícula cada 300ms

### cursor-glow.js
- **Función**: Efecto de glow que sigue al cursor
- **Variables**: `glow`
- **Selector**: `.cursor-glow`
- **Eventos**: `mousemove`

## Dependencias

```
main.js
├── navbar.js (independiente)
├── reveal.js (independiente)
├── typing.js (depende de #typing-text en HTML)
├── particles.js (depende de .particles en HTML)
└── cursor-glow.js (depende de .cursor-glow en HTML)
```

## Ventajas de Esta Estructura

✅ **Modular**: Cada funcionalidad en su propio archivo
✅ **Fácil de debuggear**: Si algo falla, sabes dónde buscar
✅ **Reutilizable**: Módulos pueden copiarse a otros proyectos
✅ **Mantenible**: Cambios en un módulo no afectan otros
✅ **Escalable**: Agregar features nuevas es simple
✅ **Limpio**: Separación clara de responsabilidades

## Desactivar Funcionalidades

Si quieres desactivar un efecto temporalmente, comenta el import en `main.js`:

```javascript
// import './particles.js';  // Desactivado temporalmente
```

## Debugging Tips

1. Abre la consola de desarrollador (F12)
2. Busca errores en la pestaña "Console"
3. Verifica que los selectores existan en el HTML
4. Usa `console.log()` para verificar que los módulos se ejecutan
