# Portfolio Personal - Estructura del Proyecto

## 📁 Árbol de Archivos

```
personal-portfolio/
│
├── index.html                 # Archivo principal HTML
│
├── assets/
│   ├── img/                   # Imágenes del proyecto
│   │   ├── perfil.png
│   │   └── refrigeracion.png
│   │
│   ├── css/                   # Estilos organizados por componentes
│   │   ├── main.css           # ← Importa todos los demás archivos
│   │   ├── variables.css      # Variables globales (colores, fuentes)
│   │   ├── reset.css          # Reset y estilos base
│   │   ├── navbar.css         # Navbar y scroll effect
│   │   ├── hero.css           # Sección hero principal
│   │   ├── skills.css         # Grid de skills
│   │   ├── projects.css       # Cards de proyectos
│   │   ├── about.css          # Sección about y timeline
│   │   ├── contact.css        # Cards de contacto
│   │   ├── footer.css         # Footer
│   │   ├── responsive.css     # Media queries
│   │   ├── README.md          # Documentación CSS
│   │   │
│   │   └── animations/        # Animaciones separadas por tipo
│   │       ├── keyframes.css  # Keyframes compartidos
│   │       ├── reveal.css     # Reveal on scroll
│   │       ├── typing.css     # Typing effect
│   │       ├── particles.css  # Partículas flotantes
│   │       └── cursor-glow.css # Cursor glow effect
│   │
│   └── js/                    # JavaScript modular
│       ├── main.js            # ← Punto de entrada (importa todos)
│       ├── navbar.js          # Navbar scroll effect
│       ├── reveal.js          # Reveal on scroll logic
│       ├── typing.js          # Typing animation
│       ├── particles.js       # Particles generator
│       ├── cursor-glow.js     # Cursor glow
│       └── README.md          # Documentación JavaScript
│
├── .gitignore                 # Archivos y rutas ignoradas por Git
├── STRUCTURE.md               # Este archivo
└── README.md                  # Documentación principal del proyecto


```

## 🎯 Guía de Uso

### Para Modificar Estilos
1. Identifica qué sección: `navbar`, `hero`, `skills`, etc.
2. Abre el archivo correspondiente en `assets/css/`
3. Haz los cambios
4. Los cambios se aplican automáticamente

### Para Modificar Animaciones
1. Las animaciones están en `assets/css/animations/`
2. Elige el archivo según el tipo:
   - `reveal.css` → Fade-in on scroll
   - `typing.css` → Efecto de escritura
   - `particles.css` → Partículas flotantes
   - `cursor-glow.css` → Glow del cursor
3. Modifica o elimina la animación que necesites

### Para Modificar JavaScript
1. Los módulos están en `assets/js/`
2. Cada archivo es responsable de una funcionalidad
3. Para desactivar algo, comenta el import en `main.js`

### Para Agregar Nuevas Funcionalidades

**Nuevo componente CSS:**
```
1. Crea assets/css/nuevo-componente.css
2. Agrega la clase en HTML
3. Importa en main.css: @import url('./nuevo-componente.css');
```

**Nueva animación CSS:**
```
1. Crea assets/css/animations/nueva-animacion.css
2. Usa la clase en HTML
3. Importa en main.css: @import url('./animations/nueva-animacion.css');
```

**Nueva funcionalidad JavaScript:**
```
1. Crea assets/js/nueva-funcionalidad.js
2. Escribe la lógica
3. Importa en main.js: import './nueva-funcionalidad.js';
```

## 🚀 Ventajas de Esta Estructura

| Aspecto | Beneficio |
|--------|----------|
| **Organización** | Cada cosa en su lugar, fácil de encontrar |
| **Mantenimiento** | Modificar algo no afecta el resto |
| **Escalabilidad** | Agregar features es simple |
| **Debugging** | Errores son fáciles de localizar |
| **Reutilización** | Código puede usarse en otros proyectos |
| **Colaboración** | Otros developers entienden la estructura |
| **Performance** | Puedes desactivar lo que no necesites |

## 📝 Notas Importantes

- ✅ `main.css` siempre debe estar en `index.html`
- ✅ `main.js` siempre debe estar con `type="module"`
- ⚠️ Ya no existen `style.css` ni `script.js`: edita siempre `assets/css/` y `assets/js/`
- 🎨 Las variables globales están en `variables.css`
- 📱 Los media queries están en `responsive.css`
- ✨ Las animaciones están agrupadas en `animations/`

## 🔗 Referencias de Documentación

- [CSS Docs](./assets/css/README.md) - Detalles de cada archivo CSS
- [JS Docs](./assets/js/README.md) - Detalles de cada módulo JavaScript

---

**Última actualización**: Mayo 8, 2026
**Versión**: 2.0 (Refactorizado)
