# 🎨 ESTRUCTURA VISUAL DEL PORTAFOLIO

## Flujo de Navegación

```
┌─────────────────────────────────────────────┐
│           HEADER (NAVEGACIÓN FIJA)          │
│  [FM] Inicio | Acerca | Exp | Proyectos... │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│                  HERO SECTION               │
│  ┌──────────────────┬──────────────────┐   │
│  │   TEXTO + CTA    │                  │   │
│  │ Felipe Moena     │   [TU FOTO]      │   │
│  │ Constructor Civil│   +Gradiente     │   │
│  │                  │                  │   │
│  │ 10+ años | 420MW │                  │   │
│  │ 50+ proyectos    │                  │   │
│  └──────────────────┴──────────────────┘   │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│              ACERCA DE SECCIÓN              │
│  ┌────────┬────────┬────────┬────────┐    │
│  │Energía │Gestión │Calidad │Liderazgo│   │
│  │ Solar  │Proyectos│  ISO   │ Equipos │   │
│  └────────┴────────┴────────┴────────┘    │
│                                             │
│      [Resumen Profesional - Gradiente]     │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│          EXPERIENCIA (TIMELINE)            │
│  ┌──────────────┬───────────────────────┐  │
│  │ [1] Hosp.BP  │ Detalles Completos    │  │
│  │ [2] Fotovolt │ Descripción           │  │
│  │ [3] Edificio │ Responsabilidades     │  │
│  │ [4] Metro    │ Logros Cuantitativos  │  │
│  │ [5] Telecom  │                       │  │
│  │ [6] ISA      │ [Filtros arriba]      │  │
│  └──────────────┴───────────────────────┘  │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│            PROYECTOS (GRID MASONRY)        │
│  ┌────────┬────────┬─────────────────┐    │
│  │Hospital│Fotovolt│  Métricas       │    │
│  │ Buin   │ 420MW  │  y Tecnologías  │    │
│  │ Paine  │ (2x2)  │                 │    │
│  ├────────┴────────┼─────────────────┤    │
│  │  Edificio 22p   │    Metro        │    │
│  │                 │  Santiago       │    │
│  ├─────────────────┴─────────────────┤    │
│  │      Telecom Minería              │    │
│  └─────────────────────────────────────┘    │
│                                             │
│  [Stats: 420MW | 22 pisos | 30m | 100%]   │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│          COMPETENCIAS (6 CATEGORÍAS)       │
│  ┌────────┬────────┬────────┐              │
│  │Software│Gestión │Calidad │              │
│  │ Tools  │Proyects│ ISO    │              │
│  ├────────┼────────┼────────┤              │
│  │Especial│Soft    │  Obras │              │
│  │idades  │Skills  │Civiles │              │
│  └────────┴────────┴────────┘              │
│                                             │
│  [Certificaciones - Sección Gradiente]     │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│            EDUCACIÓN (TIMELINE)            │
│  ┌────────────────────────────────────┐   │
│  │ Constructor Civil (USACH, 2021)    │   │
│  └────────────────────────────────────┘   │
│  ┌────────────────────────────────────┐   │
│  │ Tecnólogo (USACH, 2008)            │   │
│  └────────────────────────────────────┘   │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│          CONTACTO (FORMULARIO)             │
│  ┌────────────────────────────────────┐   │
│  │ Teléfono │ Email │ LinkedIn │ Mapa│   │
│  └────────────────────────────────────┘   │
│                                             │
│  [Nombre] [Email]                         │
│  [Asunto]                                 │
│  [Mensaje - Área Grande]                  │
│  [Botón Enviar]                           │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│                   FOOTER                   │
│  Brand | Links | Social | Copyright       │
└─────────────────────────────────────────────┘

         [Botón ↑ Flotante (aparece al scroll)]
```

## Componentes Interactivos

### Header Navigation
```
Desktop:  [FM] | Inicio | Acerca | Exp | Proyectos | Skills | Contacto
Mobile:   [FM] | [☰ Menu]
```

### Experience Filter
```
Botones: [Todas] [Gestión] [Calidad] [Terreno]
         ↓ Seleccionar hace hover-highlight
```

### Projects Grid
```
Desktop (5 cols):   [1] [2] [3] [4] [5]
Tablet (2 cols):    [1    2   ]
                    [3    4   ]
                    [5         ]

El proyecto #2 (Fotovoltaica 420MW) es más grande (2x2)
```

### Skills Sections
```
Cada categoría:
  ✓ Icon + Título
  ✓ Lista de 4-6 items con dot bullets
  ✓ Hover effect (shadow)
```

## Color Scheme

```
┌─────────────────────────────────┐
│   PRIMARY BLUE                  │
│   #1e40af (Botones, Links)      │
│   Used in: Headers, CTA, Links  │
└─────────────────────────────────┘

┌─────────────────────────────────┐
│   SECONDARY ORANGE              │
│   #f59e0b (Energía Solar)       │
│   Used in: Accents, Bullets     │
└─────────────────────────────────┘

┌─────────────────────────────────┐
│   SUCCESS GREEN                 │
│   #10b981 (Logros)              │
│   Used in: Achievements, Stats  │
└─────────────────────────────────┘

┌─────────────────────────────────┐
│   BACKGROUND                    │
│   White / Light Gray (#f9fafb)  │
│   Used in: Cards, Sections      │
└─────────────────────────────────┘

┌─────────────────────────────────┐
│   TEXT                          │
│   Dark Gray (#1f2937)           │
│   Used in: Body, Titles         │
└─────────────────────────────────┘
```

## Animaciones

```
On Scroll:
  - Fade in + slide up (opacity, transform)
  - Delay staggered por índice
  - Duration: 0.4-0.6s

Hover Effects:
  - Shadow elevación
  - Color change (botones)
  - Scale slight (cards)
  - Border highlight

Loading:
  - Entrada suave desde arriba/lateral
  - Stagger 0.05-0.1s entre items

Scroll Button:
  - Bounce animation when visible
  - Fade out cuando llegas al top
```

## Responsive Breakpoints

```
Mobile (< 640px)        Tablet (640px-1024px)    Desktop (> 1024px)
├─ 1 columna            ├─ 2 columnas            ├─ 3-4 columnas
├─ Menú hamburguesa     ├─ Header normal         ├─ Header normal
├─ Texto: 18-24px       ├─ Texto: 16-20px        ├─ Texto: 16-18px
├─ Padding reducido     ├─ Padding normal        ├─ Padding normal
├─ Imágenes responsive  ├─ Imágenes medianas     ├─ Imágenes grandes
└─ Grid: 1 col          └─ Grid: 2-3 cols        └─ Grid: 3-5 cols

Projects Grid Layout:
Mobile:    [1]
           [2]
           [3]
           
Tablet:    [1  2 ]
           [3  4 ]
           [5     ]
           
Desktop:   [1] [2 (2x2)] [3] [4] [5]
```

## Estructura de Datos

```javascript
Experience: 6 items
├─ ID, Título, Empresa, Período
├─ Array de descripción con bullets
└─ Categoría: management | quality | field

Projects: 5 items
├─ ID, Título, Descripción
├─ Array de métricas
├─ Array de tecnologías
└─ Imagen (opcional)

Skills: 6 categorías
├─ Nombre de categoría
├─ Array de 4-6 items
└─ Asociado a icon

Education: 2 items
├─ ID, Grado, Institución, Año
└─ Descripción opcional
```

## Performance Metrics

```
Loading:      < 2 segundos (Vite optimizado)
Animations:   60 FPS (Framer Motion GPU)
Bundle Size:  ~150KB (sin optimizar)
              ~50KB (minificado + gzipped)

Lighthouse Scores (Target):
├─ Performance: 90+
├─ Accessibility: 95+
├─ Best Practices: 90+
└─ SEO: 100
```

## Funcionalidades Especiales

```
✨ Smooth Scroll Navigation
   Todos los links interiores (#about, #experience, etc.)
   
✨ Mobile Menu Toggle
   Hamburguesa → Menú lateral en móvil
   
✨ Float Button (Scroll Back)
   Aparece después de scrollear 300px
   Desaparece al llegar al top
   
✨ Form Validation (Ready)
   Estructura lista para FormSubmit o backend
   
✨ Dark Mode (Ready)
   Estructura preparada para agregar toggle
   
✨ Copy-Paste Componentes
   Todos los componentes son reutilizables
```

---

**Nota**: Este diagrama es una representación visual. El diseño real es más fluido 
y moderno gracias a las animaciones y estilos de Tailwind CSS.
