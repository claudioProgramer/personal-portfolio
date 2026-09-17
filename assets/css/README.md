# Estructura CSS - Portfolio Personal

## Organización de Archivos

```
assets/css/
├── main.css                 # Archivo principal que importa todos los demás
├── variables.css            # Variables globales (colores, tamaños, etc)
├── reset.css                # Reset de estilos y configuración base
├── navbar.css               # Navbar y efectos de scroll
├── hero.css                 # Sección hero, botones y profile
├── skills.css               # Grid de skills y cards
├── projects.css             # Cards de proyectos y portfolio
├── about.css                # Sección about y timeline
├── contact.css              # Cards de contacto
├── footer.css               # Footer y redes sociales
├── certifications.css       # Sección de formación y certificaciones
├── responsive.css           # Media queries para todas las secciones
└── animations/              # Carpeta de animaciones
    ├── keyframes.css        # Keyframes compartidos (ej: floatImage)
    ├── reveal.css           # Animación reveal on scroll
    ├── typing.css           # Animación de typing effect
    ├── particles.css        # Partículas flotantes
    └── cursor-glow.css      # Efecto glow del cursor
```

## Cómo Usarlo

1. **Para agregar estilos nuevos**: Crea un archivo CSS en la carpeta correspondiente
   - Si es de un componente: `assets/css/nombre-componente.css`
   - Si es una animación: `assets/css/animations/nombre-animacion.css`

2. **Para importar el nuevo archivo**: Agrega la línea en `main.css`
   ```css
   @import url('./nombre-archivo.css');
   ```

3. **Ejemplo - Agregar nueva animación**:
   ```
   # Crear archivo
   assets/css/animations/fade-in.css
   
   # Agregar a main.css
   @import url('./animations/fade-in.css');
   ```

## Dependencias de Archivos

```
main.css
├── variables.css (depende de esto primero)
├── reset.css
├── navbar.css (usa variables)
├── hero.css (usa variables)
├── skills.css (usa variables)
├── projects.css (usa variables)
├── about.css (usa variables)
├── contact.css (usa variables)
├── footer.css (usa variables)
├── certifications.css (usa variables)
└── animations/
    ├── keyframes.css (keyframes compartidos)
    ├── reveal.css (depende de nada)
    ├── typing.css (depende de variables)
    ├── particles.css (depende de nada)
    └── cursor-glow.css (depende de variables)
└── responsive.css (al final)
```

## Ventajas de Esta Estructura

✅ **Mantenibilidad**: Cada archivo tiene una responsabilidad clara
✅ **Escalabilidad**: Fácil agregar nuevos componentes
✅ **Reutilización**: Las variables se comparten en todos lados
✅ **Debugging**: Cambios en un componente no afectan otros
✅ **Performance**: Puedes comentar imports si no los necesitas
✅ **Organización**: Las animaciones están separadas por tipo

## Notas Importantes

- Las **variables.css** siempre debe ir primero (las usan otros archivos)
- Los **media queries** están centralizados en **responsive.css**
- Las **keyframes compartidas** están en **animations/keyframes.css**
- Cada componente CSS es independiente pero usa variables globales
