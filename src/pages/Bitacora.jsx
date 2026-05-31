import './Bitacora.css';

const LOG_ENTRIES = [
  {
    id: 1,
    date: '13/05/2026',
    type: 'init',
    title: 'Inicio del Proyecto — TP1',
    body: 'Se estableció la estructura base del proyecto TP1 con HTML semántico, CSS vanilla con variables personalizadas y JavaScript puro. Se definió la estética terminal como identidad visual del equipo.',
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 2,
    date: '13/05/2026',
    type: 'design',
    title: 'Decisiones de Diseño',
    body: 'Se eligió la estética terminal por motivaciones estéticas y técnicas. Se usó la fuente JetBrains Mono para reforzar el look de código. Paleta de colores: verde terminal (#00ff41), violeta (#6c63ff) y fondo oscuro (#0a0c10).',
    tags: ['CSS', 'UX', 'Tipografía'],
  },
  {
    id: 3,
    date: '13/04/2026',
    type: 'feature',
    title: 'Implementación de Interactividad JS',
    body: 'Se implementaron las funciones navbarToggle(), showTeamMessage(), toggleSkills() y markActiveNavLink(). El menú hamburguesa utiliza CSS transform para la animación de las líneas del ícono.',
    tags: ['JavaScript', 'DOM', 'Animaciones'],
  },
  {
    id: 4,
    date: '14/05/2026',
    type: 'migration',
    title: 'Migración a React — TP2',
    body: 'Inicio de la migración del sitio estático a una SPA React con Vite y React Router. Se mantuvo la identidad visual terminal y se trasladó cada sección a componentes reutilizables.',
    tags: ['React', 'Vite', 'Migración'],
  },
  {
    id: 5,
    date: '26/05/2026',
    type: 'arch',
    title: 'Arquitectura de Componentes',
    body: 'Se diseñó la estructura: App → Layout (Sidebar + Outlet) → Páginas → Componentes UI. Cada integrante tiene su ruta dinámica /integrante/:id. Se implementaron Custom Hooks (useApi, useLightbox) para separar la lógica de la presentación.',
    tags: ['React', 'Hooks', 'Router'],
  },
  {
    id: 6,
    date: '27/05/2026',
    type: 'ai',
    title: 'Uso de Inteligencia Artificial',
    body: 'El uso de asistentes basados en inteligencia artificial actuó como soporte técnico clave en este proyecto. Se empleó principalmente en el desarrollo de los efectos visuales temáticos, como las animaciones flicker y el efecto de scanlines que definen la estética de terminal retro. Adicionalmente, sirvió de guía para estructurar la lógica interactiva en JavaScript, optimizando las funciones dinámicas de la portada y la gestión de los perfiles. También brindó asistencia en la redacción de la documentación técnica y en el relevamiento de la rúbrica del trabajo práctico. Todo el código propuesto fue exhaustivamente revisado, comprendido y adaptado manualmente por el equipo para garantizar la autoría del proyecto.',
    tags: ['IA', 'Desarrollo', 'Proceso'],
  },
];

const MIGRATION_POINTS = [
  {
    from: 'Múltiples archivos HTML',
    to: 'SPA con React Router',
    reason: 'Navegación sin recarga, mejor UX y mantenimiento centralizado.',
  },
  {
    from: 'CSS global en style.css',
    to: 'CSS Modules + variables globales',
    reason: 'Estilos encapsulados por componente, sin colisiones de nombres.',
  },
  {
    from: 'JavaScript DOM manual',
    to: 'Estado React (useState, useEffect)',
    reason: 'UI reactiva y predecible, sin manipulación directa del DOM.',
  },
  {
    from: 'Fetch duplicado en cada página',
    to: 'Custom Hook useApi()',
    reason: 'Lógica reutilizable con manejo consistente de loading/error.',
  },
  {
    from: 'Nav duplicada en cada HTML',
    to: 'Componente Sidebar compartido',
    reason: 'Un solo componente actualiza toda la navegación automáticamente.',
  },
];

const TYPE_CONFIG = {
  init: { emoji: '🚀', color: 'var(--clr-green)', label: 'INIT' },
  design: { emoji: '🎨', color: 'var(--clr-violet)', label: 'DESIGN' },
  feature: { emoji: '⚡', color: 'var(--clr-cyan)', label: 'FEATURE' },
  migration: { emoji: '🔀', color: 'var(--clr-yellow)', label: 'MIGRATE' },
  arch: { emoji: '🏗️', color: 'var(--clr-green)', label: 'ARCH' },
  ai: { emoji: '🤖', color: 'var(--clr-violet)', label: 'AI' },
};

export default function Bitacora() {
  return (
    <div className="page bitacora-page">
      <header className="page-header">
        <p className="page-eyebrow">registro del proyecto · bitácora</p>
        <h1 className="page-title">BITACORA.LOG</h1>
        <p className="page-subtitle">
          Decisiones · Proceso · Migración HTML → React
        </p>
      </header>

      {/* Log timeline */}
      <section aria-labelledby="log-title">
        <p className="section-title" id="log-title">entradas del registro</p>
        <div className="bitacora-timeline">
          {LOG_ENTRIES.map((entry) => {
            const cfg = TYPE_CONFIG[entry.type] || TYPE_CONFIG.feature;
            return (
              <article key={entry.id} className="log-entry">
                <div className="log-entry__line" style={{ background: cfg.color }} />
                <div className="log-entry__dot" style={{ background: cfg.color }} />
                <div className="log-entry__card card">
                  <div className="log-entry__header">
                    <span className="log-entry__emoji">{cfg.emoji}</span>
                    <div>
                      <div className="log-entry__meta">
                        <span
                          className="log-entry__type"
                          style={{ color: cfg.color }}
                        >
                          {cfg.label}
                        </span>
                        <span className="log-entry__date">{entry.date}</span>
                      </div>
                      <h3 className="log-entry__title">{entry.title}</h3>
                    </div>
                  </div>
                  <p className="log-entry__body">{entry.body}</p>
                  <div className="log-entry__tags">
                    {entry.tags.map((t) => (
                      <span key={t} className="badge badge--green">{t}</span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Migration analysis */}
      <section className="bitacora-migration" aria-labelledby="migration-title">
        <p className="section-title" id="migration-title">análisis de migración · HTML → React</p>
        <p className="bitacora-migration-desc">
          Justificación técnica del proceso de evolución desde una arquitectura estática
          hacia una SPA con arquitectura de componentes.
        </p>

        <div className="migration-table">
          <div className="migration-table__header">
            <span>TP1 — Estático (HTML/JS)</span>
            <span className="migration-table__arrow">→</span>
            <span>TP2 — React (SPA)</span>
          </div>
          {MIGRATION_POINTS.map((point, i) => (
            <div key={i} className="migration-row">
              <div className="migration-row__from">
                <span className="migration-row__label from">ANTES</span>
                <p>{point.from}</p>
              </div>
              <div className="migration-row__reason">
                <span className="migration-row__why">→</span>
                <p>{point.reason}</p>
              </div>
              <div className="migration-row__to">
                <span className="migration-row__label to">AHORA</span>
                <p>{point.to}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GitFlow / Roles */}
      <section className="bitacora-roles" aria-labelledby="roles-title">
        <p className="section-title" id="roles-title">flujo de trabajo · roles</p>
        <div className="roles-grid">
          <div className="card roles-card">
            <div className="roles-card__icon">👤</div>
            <h3>Hugo Torrent</h3>
            <p>Setup del proyecto, estructura de componentes, Sidebar, Home, MemberProfile, CSS global.</p>
            <div className="roles-card__tags">
              <span className="badge badge--green">Lead Dev</span>
              <span className="badge badge--cyan">UI/UX</span>
            </div>
          </div>
          <div className="card roles-card">
            <div className="roles-card__icon">👤</div>
            <h3>Diego González</h3>
            <p>DataExplorer, filtrado en tiempo real, Galería con Lightbox y estilos de componentes.</p>
            <div className="roles-card__tags">
              <span className="badge badge--violet">Frontend</span>
              <span className="badge badge--green">Data</span>
            </div>
          </div>
          <div className="card roles-card">
            <div className="roles-card__icon">👤</div>
            <h3>Luciano Reguera</h3>
            <p>Módulo de API externa, paginación, Custom Hooks, testing y deploy en Vercel.</p>
            <div className="roles-card__tags">
              <span className="badge badge--cyan">API</span>
              <span className="badge badge--yellow">Deploy</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
