# TP2 — Grupo 18 | Migración a React

> 🔗 **Deploy en Vercel:** *([Vercel](https://tp2-react-grupal.vercel.app/))*
> 📂 **Repositorio:** *([GitHub](https://github.com/hugotorrent/tp2_React_grupal.git))*

---

## 📌 Descripción

Evolución del Trabajo Práctico 1 (HTML/CSS/JS estático con estética terminal/hacker) hacia una Single Page Application (SPA) desarrollada con **React + Vite**. La aplicación implementa arquitectura de componentes, navegación con React Router v6, consumo de APIs externas, explorador de datos JSON con filtrado en tiempo real, galería interactiva con Lightbox y múltiples animaciones de entrada.

El proyecto mantiene la identidad visual "terminal" del TP1 y la amplía con un dashboard lateral fijo, perfiles individuales dinámicos y componentes interactivos avanzados.

---

## 👥 Integrantes

| Nombre completo        | GitHub                                      | Perfil en la app |
|------------------------|---------------------------------------------|------------------|
| Hugo Alberto Torrent   | [@hugotorrent](https://github.com/hugotorrent)        | `/integrante/hugo` |
| Diego González         | [@diego-gonzalez](https://github.com/diegoale528)      | `/integrante/diego` |
| Luciano Reguera        | [@luciano-reguera](https://github.com/lucianoreguera)     | `/integrante/luciano` |

> 

---

## 🛠️ Tecnologías Utilizadas

| Tecnología         | Versión  | Uso                                                |
|--------------------|----------|----------------------------------------------------|
| **React**          | 19.x     | Framework principal de la SPA                      |
| **Vite**           | 8.x      | Bundler y servidor de desarrollo                   |
| **React Router**   | 7.x      | Navegación SPA (rutas declarativas)                |
| **Lucide React**   | 1.x      | Iconografía SVG (menú, acciones, tech stack)       |
| **CSS Vanilla**    | —        | Estilos con variables CSS (sin frameworks)         |
| **Google Fonts**   | —        | JetBrains Mono, Outfit, Inter                      |
| **Rick & Morty API** | v2    | API externa pública para el módulo de consumo      |
| **Vercel**         | —        | Plataforma de deploy                               |

---

## 📁 Estructura de Archivos

```
tp2-react/
├── index.html                   # Punto de entrada HTML
├── vite.config.js               # Configuración Vite
├── vercel.json                  # Rewrites para SPA en Vercel
├── package.json
│
└── src/
    ├── main.jsx                 # Punto de entrada React
    ├── App.jsx                  # BrowserRouter + Routes
    ├── index.css                # Tokens de diseño global (variables CSS)
    │
    ├── data/
    │   ├── team.js              # Datos de los 3 integrantes del equipo
    │   └── explorer.json        # 20 películas de ciencia ficción (JSON local)
    │
    ├── components/
    │   ├── layout/
    │   │   ├── Layout.jsx       # Wrapper: Sidebar + Outlet (contenido)
    │   │   ├── Layout.css
    │   │   ├── Sidebar.jsx      # Sidebar fija con NavLink y submenú
    │   │   └── Sidebar.css
    │   └── ui/
    │       ├── MemberCard.jsx   # Tarjeta de integrante (Home grid)
    │       ├── MemberCard.css
    │       ├── SkillBar.jsx     # Barra de progreso con IntersectionObserver
    │       ├── SkillBar.css
    │       ├── ProjectCarousel.jsx  # Carrusel manual prev/next
    │       ├── ProjectCarousel.css
    │       ├── TechIcon.jsx     # Ícono de tecnología con hover glow
    │       ├── TechIcon.css
    │       ├── SocialButton.jsx # Botón de red social con hover avanzado
    │       ├── SocialButton.css
    │       ├── Lightbox.jsx     # Visor: ESC + flechas + overlay
    │       ├── Lightbox.css
    │       └── Loader.jsx       # Spinner de carga
    │
    ├── pages/
    │   ├── Home.jsx             # Dashboard con grilla de integrantes
    │   ├── Home.css
    │   ├── MemberProfile.jsx    # Perfil individual dinámico (/integrante/:id)
    │   ├── MemberProfile.css
    │   ├── DataExplorer.jsx     # Explorador JSON + filtros en tiempo real
    │   ├── DataExplorer.css
    │   ├── ApiModule.jsx        # Rick & Morty API + paginación
    │   ├── ApiModule.css
    │   ├── Gallery.jsx          # Galería grid + Lightbox integrado
    │   ├── Gallery.css
    │   ├── Bitacora.jsx         # Timeline + análisis de migración
    │   ├── Bitacora.css
    │   ├── ComponentTree.jsx    # Árbol de renderizado visual
    │   └── ComponentTree.css
    │
    └── hooks/
        ├── useApi.js            # Custom hook: fetch con loading/error/data
        └── useLightbox.js       # Custom hook: estado del lightbox
```

---

## 🎨 Guía de Estilos

### Paleta de Colores

| Token                 | Hexadecimal | Uso                              |
|-----------------------|-------------|----------------------------------|
| `--clr-bg`            | `#0a0c10`   | Fondo principal                  |
| `--clr-bg-card`       | `#111520`   | Fondo de tarjetas                |
| `--clr-bg-sidebar`    | `#080a0e`   | Fondo de la sidebar              |
| `--clr-bg-elevated`   | `#161c2a`   | Elementos elevados               |
| `--clr-green`         | `#00ff41`   | Acento terminal (primario)       |
| `--clr-violet`        | `#6c63ff`   | Acento secundario                |
| `--clr-cyan`          | `#00d4ff`   | Acento terciario                 |
| `--clr-yellow`        | `#ffd700`   | Ratings / alertas                |
| `--clr-text`          | `#e2e8f0`   | Texto principal                  |
| `--clr-text-muted`    | `#6b7fa3`   | Texto secundario / labels        |
| `--clr-border`        | `#1a2235`   | Bordes de tarjetas               |

### Tipografías (Google Fonts)

| Familia           | Pesos           | Uso                         | Link |
|-------------------|-----------------|-----------------------------|------|
| `JetBrains Mono`  | 300, 400, 500, 700 | UI, labels, código, terminal | [↗](https://fonts.google.com/specimen/JetBrains+Mono) |
| `Outfit`          | 300, 400, 600, 700, 900 | Títulos y headings   | [↗](https://fonts.google.com/specimen/Outfit) |
| `Inter`           | 300, 400, 500, 600 | Cuerpo de texto, párrafos  | [↗](https://fonts.google.com/specimen/Inter) |

### Iconografía

- **Lucide React** — iconos SVG para navegación, acciones y UI general
- **Emojis nativos** — iconos de tecnologías en `TechIcon.jsx`
- **SVGs inline** — logos de redes sociales (GitHub, LinkedIn, Instagram) en `SocialButton.jsx`

---

## ⚙️ Funciones Dinámicas y Componentes React

### Custom Hooks

#### `useApi(url)` — `src/hooks/useApi.js`
Fetch asíncrono reutilizable con manejo de estados `loading`, `error` y `data`. Incluye función `refetch` para recargar. Usado en `ApiModule.jsx`.

#### `useLightbox(images)` — `src/hooks/useLightbox.js`
Gestiona el estado del visor de imágenes: índice actual, navegación prev/next y apertura/cierre. Usado en `Gallery.jsx`.

---

### Componentes Principales

#### `Sidebar` — Navegación Dashboard
Sidebar fija con logo del grupo, menú jerárquico con `NavLink` de React Router, submenú expandible de integrantes. Colapsa a hamburger en mobile con overlay.

#### `MemberCard` — Tarjeta del Dashboard
Tarjeta con animación `fadeInUp` escalonada por índice, color de acento variable por integrante, avatar circular con anillo giratorio en hover y navegación al perfil.

#### `SkillBar` — Barra de Progreso
Barra animada que detecta visibilidad con `IntersectionObserver` y anima su llenado al entrar al viewport. Efecto shimmer continuo.

#### `ProjectCarousel` — Carrusel de Proyectos
Carrusel manual con controles prev/next, indicadores de punto, contador de posición y animación de cambio de slide.

#### `TechIcon` — Ícono de Tecnología
Grilla de iconos con colores específicos por tecnología. Hover: `scale + glow` con color dinámico.

#### `SocialButton` — Botón de Red Social
Botones con transición de color y escala en hover, usando el color propio de cada red social.

#### `Lightbox` — Visor de Imágenes
Modal fullscreen con overlay blur, cierre con tecla `ESC`, navegación con flechas del teclado y botones. Bloquea el scroll del body mientras está abierto.

#### `DataExplorer` — Explorador JSON
Filtrado en tiempo real con `useState` + `useMemo`. Búsqueda por texto en título, director y descripción. Filtro por género y ordenamiento por ID, rating o año.

#### `ApiModule` — Módulo de API
Consume `rickandmortyapi.com/api/character` con estados loading/error, paginación con indicador de posición (página X de 42) y botón de recarga.

---

## 🖼️ Capturas de Pantalla

### Dashboard — Home
![alt text](/src/assets/img/capturas/dashboard.png)

### Perfil Individual
![alt text](/src/assets/img/capturas/individualHugo.png)
![alt text](/src/assets/img/capturas/individualDiego.png)
![alt text](/src/assets/img/capturas/individualLuciano.png)

### Explorador de Datos
![alt text](/src/assets/img/capturas/explorador.png)

### Módulo de API
![alt text](/src/assets/img/capturas/moduloAPI.png)

### Mobile
![alt text](/src/assets/img/capturas/mobile1.png)
![alt text](/src/assets/img/capturas/mobile2.png)
![alt text](/src/assets/img/capturas/mobile3.png)

---

## 🤖 Uso de Inteligencia Artificial

### Herramientas Utilizadas

| Herramienta     | Proveedor         | Uso Principal                                                   |
|-----------------|-------------------|-----------------------------------------------------------------|
| **Gemini Pro**  | Google            | Asistencia técnica, refactorización, revisión de código y buenas prácticas |

### Áreas de Asistencia de la IA

- **Comprensión y Desarrollo de Lógica Compleja:** Soporte clave para estructurar e implementar funciones complejas que resultaban difíciles de asimilar o desarrollar desde cero (por ejemplo, el manejo de estados asíncronos en los Custom Hooks como `useApi` y `useLightbox`, la lógica de paginación del módulo de API externa, y la detección de intersección del viewport para animar las barras de habilidades).
- **Revisión y Estructuración de Código (Clean Code):** Asistencia en la revisión de código para garantizar la adherencia a estándares de código limpio (*Clean Code*), modularización de componentes para evitar lógica duplicada, y recomendaciones sobre mejores prácticas de nombrado de funciones, variables y archivos.
- **Estructuración Base:** Orientación en la configuración inicial de Vite, el enrutamiento modular con React Router y la distribución semántica de carpetas.
- **Resolución de Conflictos (Debugging):** Diagnóstico rápido de dependencias, imports conflictivos de iconos de Lucide y optimización del bundler.

### Proceso de Integración y Autoría


1. **Revisado:** Cada fragmento de código fue analizado minuciosamente para garantizar su correcto funcionamiento y legibilidad.
2. **Comprendido:** El equipo se aseguró de asimilar conceptualmente toda lógica sugerida, especialmente en los segmentos de mayor complejidad técnica que requerían explicación previa.
3. **Adaptado:** El código fue modificado de forma manual y contextualizado con los datos reales del equipo y las necesidades de diseño del proyecto.



---

## 🚀 Cómo Ejecutar Localmente

```bash
# 1. Clonar el repositorio
git clone https://github.com/usuario/tp2-react.git
cd tp2-react

# 2. Instalar dependencias
npm install

# 3. Levantar el servidor de desarrollo
npm run dev
# → http://localhost:5173/


```

---

## 📈 Evolución: TP1 → TP2

| Aspecto           | TP1 (HTML/CSS/JS)                | TP2 (React + Vite)                         |
|-------------------|----------------------------------|--------------------------------------------|
| **Estructura**    | Múltiples archivos HTML          | SPA con React Router                       |
| **Navegación**    | Links entre páginas (recarga)    | NavLink sin recarga de página              |
| **Estilos**       | Un `style.css` global            | CSS por componente + variables globales    |
| **JavaScript**    | Manipulación DOM manual          | Estado React con `useState` / `useEffect`  |
| **API**           | No implementada                  | Fetch asíncrono con hook `useApi`          |
| **Reutilización** | Código repetido en cada HTML     | Componentes reutilizables                  |
| **Build**         | Estático, sin compilación        | Vite con HMR, optimización y tree-shaking |

---


