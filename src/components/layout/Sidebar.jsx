import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  LayoutDashboard, Users, Search, Globe, Image,
  BookOpen, GitBranch, ChevronDown, ChevronRight,
  Terminal, Menu, X
} from 'lucide-react';
import { team } from '../../data/team';
import './Sidebar.css';

const navItems = [
  { to: '/', icon: LayoutDashboard, label: 'Dashboard', exact: true },
  {
    label: 'Integrantes',
    icon: Users,
    children: team.map((m) => ({ to: `/integrante/${m.id}`, label: m.name.split(' ')[0] + ' ' + m.name.split(' ')[1] })),
  },
  { to: '/explorador', icon: Search, label: 'Explorador JSON' },
  { to: '/api', icon: Globe, label: 'API Externa' },
  { to: '/galeria', icon: Image, label: 'Galería' },
  { to: '/bitacora', icon: BookOpen, label: 'Bitácora' },
  { to: '/arquitectura', icon: GitBranch, label: 'Árbol de Componentes' },
];

export default function Sidebar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [memberExpanded, setMemberExpanded] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close mobile sidebar on route change
  useEffect(() => { setMobileOpen(false); }, [location]);

  return (
    <>
      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="sidebar-overlay" onClick={() => setMobileOpen(false)} />
      )}

      {/* Mobile toggle button */}
      <button
        className="sidebar-mobile-toggle"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle sidebar"
      >
        {mobileOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar panel */}
      <aside className={`sidebar ${mobileOpen ? 'sidebar--open' : ''}`}>
        {/* Logo */}
        <div className="sidebar__logo">
          <div className="sidebar__logo-icon">
            <Terminal size={18} />
          </div>
          <div>
            <div className="sidebar__logo-text">GRUPO_18</div>
            <div className="sidebar__logo-sub">DSW Front End - 2° D</div>
          </div>
        </div>

        <div className="sidebar__divider" />

        {/* Navigation */}
        <nav className="sidebar__nav">
          <p className="sidebar__label">NAVEGACIÓN</p>
          <ul className="sidebar__list">
            {navItems.map((item) => {
              if (item.children) {
                const anyActive = item.children.some((c) =>
                  location.pathname === c.to
                );
                return (
                  <li key={item.label}>
                    <button
                      className={`sidebar__group-btn ${anyActive ? 'active' : ''}`}
                      onClick={() => setMemberExpanded((p) => !p)}
                    >
                      <item.icon size={16} className="sidebar__icon" />
                      <span>{item.label}</span>
                      {memberExpanded ? (
                        <ChevronDown size={14} className="sidebar__chevron" />
                      ) : (
                        <ChevronRight size={14} className="sidebar__chevron" />
                      )}
                    </button>
                    {memberExpanded && (
                      <ul className="sidebar__sub-list">
                        {item.children.map((child) => (
                          <li key={child.to}>
                            <NavLink
                              to={child.to}
                              className={({ isActive }) =>
                                `sidebar__sub-link ${isActive ? 'active' : ''}`
                              }
                            >
                              <span className="sidebar__sub-dot" />
                              {child.label}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              }

              return (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.exact}
                    className={({ isActive }) =>
                      `sidebar__link ${isActive ? 'active' : ''}`
                    }
                  >
                    <item.icon size={16} className="sidebar__icon" />
                    <span>{item.label}</span>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Footer */}
        <div className="sidebar__footer">
          <div className="terminal-dot" />
          <span>sistema activo</span>
        </div>
      </aside>
    </>
  );
}
