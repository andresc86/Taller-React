# Taller - Board (Tablero Kanban)

Proyecto de aula: "Board" — tablero tipo Kanban desarrollado con React + Vite (JavaScript). Este repositorio incluye además evidencias de aplicación del Marco Ágil (SCRUM) para seguimiento académico.

## Tecnologías
- React (Vite)
- JavaScript
- CSS

## Estructura
- /src - código fuente (componentes, estilos)
- /public - recursos estáticos
- /scrum - documentación SCRUM (roles, ceremonias, backlog, contribuciones, manual de instalación)
- README.md - este archivo

## Instalación (desarrollo)
1. Clonar el repositorio
   git clone https://github.com/andresc86/Taller-React.git
2. Cambiar a la rama de trabajo (ej. PRUEBA)
   git checkout PRUEBA
3. Instalar dependencias
   npm install
4. Ejecutar en modo desarrollo
   npm run dev

## Build
- npm run build
- El directorio de salida por defecto para Vite es `dist`.

## Despliegue
Se recomienda usar Netlify para despliegue automático desde la rama `main`.
- Build command: `npm run build`
- Publish directory: `dist`

## Flujo de trabajo (git)
- Ramas por miembro: wilmer-dev, andres-dev, sebastian-dev, PRUEBA, main
- Crear rama: `git checkout -b <mi-rama>`
- Hacer cambios, commitear y push: `git add . && git commit -m "Descripción" && git push -u origin <mi-rama>`
- Abrir Pull Request hacia `main` cuando esté listo para revisión.

## Enlaces
- Producción: (añadir enlace Netlify después del primer despliegue)

## Contribuciones
Registrar contribuciones individuales en `/scrum/contribuciones.md`.
