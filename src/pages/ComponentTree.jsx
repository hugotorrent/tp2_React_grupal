import './ComponentTree.css';

const TREE = {
  name: 'App',
  type: 'root',
  desc: 'BrowserRouter + Routes',
  children: [
    {
      name: 'Layout',
      type: 'layout',
      desc: 'Sidebar + Outlet',
      children: [
        {
          name: 'Sidebar',
          type: 'layout',
          desc: 'Navegación fija',
          children: [
            { name: 'NavLink', type: 'ui', desc: 'Enlace activo' },
            { name: 'SubmenuItem', type: 'ui', desc: 'Integrantes' },
          ],
        },
        {
          name: 'Home',
          type: 'page',
          desc: '/',
          children: [
            { name: 'MemberCard', type: 'ui', desc: 'x3 animadas', children: [] },
          ],
        },
        {
          name: 'MemberProfile',
          type: 'page',
          desc: '/integrante/:id',
          children: [
            { name: 'SkillBar', type: 'ui', desc: 'IntersectionObserver' },
            { name: 'ProjectCarousel', type: 'ui', desc: 'Manual prev/next' },
            { name: 'TechIcon', type: 'ui', desc: 'x7+ con hover' },
            { name: 'SocialButton', type: 'ui', desc: 'GitHub, LinkedIn...' },
          ],
        },
        {
          name: 'DataExplorer',
          type: 'page',
          desc: '/explorador',
          children: [
            { name: 'useState', type: 'hook', desc: 'query + genre' },
            { name: 'useMemo', type: 'hook', desc: 'filtrado reactivo' },
          ],
        },
        {
          name: 'ApiModule',
          type: 'page',
          desc: '/api',
          children: [
            { name: 'useApi', type: 'hook', desc: 'fetch + loading/error' },
            { name: 'Loader', type: 'ui', desc: 'estado de carga' },
            { name: 'Pagination', type: 'ui', desc: 'anterior/siguiente' },
          ],
        },
        {
          name: 'Gallery',
          type: 'page',
          desc: '/galeria',
          children: [
            { name: 'useLightbox', type: 'hook', desc: 'estado del visor' },
            { name: 'Lightbox', type: 'ui', desc: 'ESC + flechas + overlay' },
          ],
        },
        {
          name: 'Bitacora',
          type: 'page',
          desc: '/bitacora',
          children: [],
        },
        {
          name: 'ComponentTree',
          type: 'page',
          desc: '/arquitectura',
          children: [],
        },
      ],
    },
  ],
};

const TYPE_CONFIG = {
  root:   { color: 'var(--green)',     label: 'ROOT',   bg: 'var(--green-dark)' },
  layout: { color: 'var(--green-dim)', label: 'LAYOUT', bg: 'var(--bg-card2)' },
  page:   { color: 'var(--amber)',     label: 'PAGE',   bg: 'var(--bg-card2)' },
  ui:     { color: 'var(--green)',     label: 'UI',     bg: 'var(--bg-card2)' },
  hook:   { color: 'var(--green-dim)', label: 'HOOK',   bg: 'var(--bg-card2)' },
};

function TreeNode({ node, depth = 0 }) {
  const cfg = TYPE_CONFIG[node.type] || TYPE_CONFIG.ui;
  const hasChildren = node.children && node.children.length > 0;

  return (
    <div className="tree-node" style={{ paddingLeft: depth > 0 ? '1.5rem' : '0' }}>
      {depth > 0 && (
        <div className="tree-node__connector">
          <span className="tree-node__branch">└─</span>
        </div>
      )}
      <div
        className="tree-node__box"
        style={{
          borderColor: cfg.color,
          background: cfg.bg,
        }}
      >
        <div className="tree-node__header">
          <span className="tree-node__type" style={{ color: cfg.color }}>
            {cfg.label}
          </span>
          <span className="tree-node__name" style={{ color: cfg.color }}>
            {'<'}{node.name}{'>'}
          </span>
        </div>
        <p className="tree-node__desc">{node.desc}</p>
      </div>

      {hasChildren && (
        <div className="tree-node__children">
          {node.children.map((child, i) => (
            <TreeNode key={i} node={child} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function ComponentTree() {
  return (
    <div className="page tree-page">
      <header className="page-header">
        <p className="page-eyebrow">arquitectura · árbol de renderizado</p>
        <h1 className="page-title">Árbol de Componentes</h1>
        <p className="page-subtitle">
          Estructura jerárquica de la SPA — componente raíz hasta hojas
        </p>
      </header>

      {/* Legend */}
      <div className="tree-legend">
        {Object.entries(TYPE_CONFIG).map(([type, cfg]) => (
          <div key={type} className="tree-legend__item">
            <span className="tree-legend__dot" style={{ background: cfg.color }} />
            <span className="tree-legend__label" style={{ color: cfg.color }}>
              {cfg.label}
            </span>
          </div>
        ))}
      </div>

      {/* Tree */}
      <div className="tree-container">
        <TreeNode node={TREE} depth={0} />
      </div>

      {/* File structure */}
      <section className="tree-files" aria-labelledby="files-title">
        <p className="section-title" id="files-title">estructura de archivos</p>
        <pre className="tree-files__pre">
{`tp2-react/src/
├── main.jsx                 # Punto de entrada React
├── App.jsx                  # BrowserRouter + Routes
├── index.css                # Tokens de diseño global
│
├── data/
│   ├── team.js              # Datos de los 3 integrantes
│   └── explorer.json        # 20 películas sci-fi
│
├── components/
│   ├── layout/
│   │   ├── Layout.jsx       # Sidebar + Outlet
│   │   ├── Layout.css
│   │   ├── Sidebar.jsx      # Sidebar fija con NavLink
│   │   └── Sidebar.css
│   └── ui/
│       ├── MemberCard.jsx   # Tarjeta de integrante
│       ├── SkillBar.jsx     # Barra de progreso animada
│       ├── ProjectCarousel  # Carrusel manual
│       ├── TechIcon.jsx     # Ícono de tecnología
│       ├── SocialButton.jsx # Botón red social
│       ├── Lightbox.jsx     # Visor con ESC + flechas
│       └── Loader.jsx       # Spinner de carga
│
├── pages/
│   ├── Home.jsx             # Dashboard grid
│   ├── MemberProfile.jsx    # Perfil dinámico :id
│   ├── DataExplorer.jsx     # JSON + filtros en tiempo real
│   ├── ApiModule.jsx        # Rick & Morty API paginada
│   ├── Gallery.jsx          # Grid + Lightbox
│   ├── Bitacora.jsx         # Timeline + migración
│   └── ComponentTree.jsx    # Este componente
│
└── hooks/
    ├── useApi.js            # fetch con loading/error
    └── useLightbox.js       # Estado del lightbox`}
        </pre>
      </section>
    </div>
  );
}
