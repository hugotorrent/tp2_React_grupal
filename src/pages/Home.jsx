import { useNavigate } from 'react-router-dom';
import { team } from '../data/team';
import MemberCard from '../components/ui/MemberCard';
import './Home.css';

export default function Home() {
  return (
    <div className="page home-page">
      {/* Header */}
      <header className="page-header home-header">
        <div className="home-badge">
          <span className="terminal-dot" />
          <span>sistema en línea</span>
        </div>
        <p className="page-eyebrow">Desarrollo de Sistemas Web Front End · 2° D · 2026</p>
        <h1 className="page-title home-title">GRUPO_18</h1>
        <p className="page-subtitle home-subtitle">
          Trabajo Práctico 2 — Migración a React · Arquitectura de Componentes
        </p>

        {/* Stats row */}
        <div className="home-stats">
          <div className="home-stat">
            <span className="home-stat__value">3</span>
            <span className="home-stat__label">integrantes</span>
          </div>
          <div className="home-stat">
            <span className="home-stat__value">7</span>
            <span className="home-stat__label">secciones</span>
          </div>
          <div className="home-stat">
            <span className="home-stat__value">React</span>
            <span className="home-stat__label">framework</span>
          </div>
          <div className="home-stat">
            <span className="home-stat__value">Vite</span>
            <span className="home-stat__label">bundler</span>
          </div>
        </div>
      </header>

      <hr className="divider" />

      {/* Team grid */}
      <section aria-labelledby="team-title">
        <p className="section-title" id="team-title">integrantes del equipo</p>
        <p className="home-grid-hint terminal-prompt">
          cat team.json | grep members — 3 encontrados
        </p>
        <div className="home-team-grid">
          {team.map((member, i) => (
            <MemberCard key={member.id} member={member} index={i} />
          ))}
        </div>
      </section>

      {/* About section */}
      <section className="home-about" aria-labelledby="about-title">
        <p className="section-title" id="about-title">sobre este proyecto</p>
        <div className="home-about-grid">
          <div className="home-about-card">
            <div className="home-about-icon">🚀</div>
            <h3>Migración a React</h3>
            <p>Evolución del TP1 (HTML/CSS/JS) hacia una SPA con arquitectura de componentes reutilizables y React Router.</p>
          </div>
          <div className="home-about-card">
            <div className="home-about-icon">🎨</div>
            <h3>Estética Terminal</h3>
            <p>Diseño hacker/terminal conservado y amplificado con animaciones, glassmorphism y una paleta coherente.</p>
          </div>
          <div className="home-about-card">
            <div className="home-about-icon">⚡</div>
            <h3>Interactividad</h3>
            <p>Filtros en tiempo real, API externa paginada, galería con Lightbox y carrusel de proyectos.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
