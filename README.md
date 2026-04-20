# Portfolio de Felipe Moena Céspedes

Portfolio profesional de Felipe Moena Céspedes, Constructor Civil especializado en gestión de proyectos, energía solar fotovoltaica y telecomunicaciones.

## Características

✨ **Diseño Moderno**
- Interfaz responsive y moderna
- Animaciones suaves con Framer Motion
- Paleta de colores profesional

📱 **Mobile First**
- Totalmente responsivo en todos los dispositivos
- Navegación optimizada para móvil

🎨 **Componentes Reutilizables**
- Arquitectura limpia con React + TypeScript
- Componentes modulares y escalables

⚡ **Rendimiento Optimizado**
- Construido con Vite para máximo rendimiento
- Tailwind CSS para estilos eficientes

## Tecnologías Utilizadas

- **React 18** - Librería UI
- **TypeScript** - Tipado estático
- **Vite** - Build tool moderno
- **Tailwind CSS** - Utilidades de CSS
- **Framer Motion** - Animaciones
- **Lucide React** - Iconos

## Instalación

### Requisitos
- Node.js (v16 o superior)
- npm o yarn

### Pasos

1. Clonar o descargar el repositorio
```bash
cd portfolio
```

2. Instalar dependencias
```bash
npm install
```

3. Iniciar servidor de desarrollo
```bash
npm run dev
```

El portfolio se abrirá automáticamente en `http://localhost:3000`

## Uso

### Estructura de Carpetas

```
src/
├── components/          # Componentes React
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   ├── Education.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── data/               # Datos estáticos
│   ├── experience.ts
│   ├── projects.ts
│   ├── skills.ts
│   └── education.ts
├── App.tsx            # Componente principal
├── App.css            # Estilos globales
└── main.tsx           # Punto de entrada
public/
└── images/
    └── profile.jpg    # Foto de perfil
```

### Agregar la Foto de Perfil

1. Guarda tu foto profesional como `profile.jpg` en `public/images/`
2. La foto se mostrará automáticamente en la sección Hero

### Editar Contenido

Todo el contenido se gestiona en archivos TypeScript en `src/data/`:

- **experience.ts** - Experiencia laboral
- **projects.ts** - Proyectos destacados
- **skills.ts** - Competencias y habilidades
- **education.ts** - Formación académica

### Personalizar Estilos

Los colores se definen en `tailwind.config.js`:

```javascript
colors: {
  primary: "#1e40af",      // Azul
  secondary: "#f59e0b",    // Naranja/Dorado
  success: "#10b981",      // Verde
  dark: "#1f2937",         // Gris oscuro
  light: "#f9fafb",        // Gris claro
}
```

## Comandos Disponibles

```bash
# Desarrollo
npm run dev          # Inicia servidor de desarrollo

# Producción
npm run build        # Construye para producción
npm run preview      # Previsualiza build de producción
```

## Deploy

### Netlify

1. Conecta tu repositorio a Netlify
2. Configura el comando de build: `npm run build`
3. Directorio de publicación: `dist`

### Vercel

1. Conecta tu repositorio a Vercel
2. Selecciona "Vite" como framework
3. Vercel detectará automáticamente la configuración

### GitHub Pages

1. Agrega a `vite.config.ts`:
```javascript
export default defineConfig({
  base: '/portfolio/',
  // ... resto de config
})
```

2. Ejecuta: `npm run build`
3. Sube la carpeta `dist` a GitHub Pages

## Secciones del Portafolio

### Hero
Presentación principal con foto, descripción y estadísticas clave

### Acerca de
Resumen profesional y áreas de especialidad

### Experiencia
Timeline interactivo con filtros por tipo de experiencia

### Proyectos
Galería de proyectos destacados con métricas

### Competencias
Grid de habilidades organizadas por categoría

### Educación
Formación académica

### Contacto
Formulario de contacto e información de contacto

## Personalización Avanzada

### Cambiar Colores

Edita `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: "#tu-color",
      secondary: "#tu-color",
      // ...
    },
  },
},
```

### Agregar Nuevas Secciones

1. Crea un nuevo componente en `src/components/`
2. Importalo en `App.tsx`
3. Agrégalo en el orden deseado

### Optimizar Imágenes

Usa herramientas como:
- TinyPNG
- ImageOptim
- Squoosh

## Licencia

Este proyecto es de uso personal.

## Contacto

- **Email**: f.moena.c@gmail.com
- **Teléfono**: +56 9 7218 1349
- **LinkedIn**: linkedin.com/in/felipe-moena
- **Ubicación**: Ñuñoa, Santiago, Chile

---

Desarrollado con ❤️ por Felipe Moena Céspedes
