import { useState } from 'react';
import { ZoomIn } from 'lucide-react';
import Lightbox from '../components/ui/Lightbox';
import { useLightbox } from '../hooks/useLightbox';
import './Gallery.css';

// Importación de imágenes
import imgUrbana from '../assets/img/galeria/urbana.png';
import imgPaisaje from '../assets/img/galeria/paisaje.png';
import imgNocturna from '../assets/img/galeria/nocturna.png';
import imgRetrato from '../assets/img/galeria/retrato.png';
import imgAbstracto from '../assets/img/galeria/abstracto.png';

// Importación de los Renders 3D
import imgRender1 from '../assets/img/galeria/render_arquitectonico_1.png';
import imgRender2 from '../assets/img/galeria/render_arquitectonico_2.png';
import imgRenderInterior from '../assets/img/galeria/render_interior.png';

// Importación de las Secciones Web
import imgWebDesktop from '../assets/img/galeria/web_desktop.png';
import imgWebMobile from '../assets/img/galeria/web_mobile.png';
import imgWebSidebar from '../assets/img/galeria/web_sidebar.png';
import imgWebMembercard from '../assets/img/galeria/web_membercard.png';

// Galería de imágenes 
const IMAGES = [
  { id: 1, title: 'Render Arquitectónico 1', category: 'Render 3D', src: imgRender1 },
  { id: 2, title: 'Fotografía Urbana 1', category: 'Fotografía', src: imgUrbana },
  { id: 3, title: 'Interfaz TP1 — Desktop', category: 'UI/Web', src: imgWebDesktop },
  { id: 4, title: 'Render Arquitectónico 2', category: 'Render 3D', src: imgRender2 },
  { id: 5, title: 'Fotografía Paisajística', category: 'Fotografía', src: imgPaisaje },
  { id: 6, title: 'Interfaz TP1 — Mobile', category: 'UI/Web', src: imgWebMobile },
  { id: 7, title: 'Render Interior', category: 'Render 3D', src: imgRenderInterior },
  { id: 8, title: 'Fotografía Nocturna', category: 'Fotografía', src: imgNocturna },
  { id: 9, title: 'Componente — Sidebar', category: 'UI/Web', src: imgWebSidebar },
  { id: 10, title: 'Render Exterior', category: 'Render 3D', src: imgAbstracto },
  { id: 11, title: 'Fotografía Retrato', category: 'Fotografía', src: imgRetrato },
  { id: 12, title: 'Componente — MemberCard', category: 'UI/Web', src: imgWebMembercard },
];

const CATEGORIES = ['Todas', ...new Set(IMAGES.map((img) => img.category))];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('Todas');
  const filtered = activeCategory === 'Todas'
    ? IMAGES
    : IMAGES.filter((img) => img.category === activeCategory);

  const { isOpen, currentIndex, open, close, prev, next } = useLightbox(filtered);

  return (
    <div className="page gallery-page">
      <header className="page-header">
        <p className="page-eyebrow">multimedia · galería interactiva</p>
        <h1 className="page-title">Galería</h1>
        <p className="page-subtitle">
          Grid con Lightbox integrado · zoom · navegación · ESC para cerrar
        </p>
      </header>

      {/* Category filter */}
      <div className="gallery-filters">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            className={`gallery-filter-btn ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="gallery-grid">
        {filtered.map((img, i) => (
          <button
            key={img.id}
            className="gallery-item"
            onClick={() => open(i)}
            aria-label={`Abrir: ${img.title}`}
            style={{ animationDelay: `${i * 0.05}s` }}
          >
            {img.src ? (
              <img src={img.src} alt={img.title} className="gallery-item__img" loading="lazy" />
            ) : (
              <div className="gallery-item__placeholder">
                <span className="gallery-item__placeholder-num">{img.id}</span>
                <span className="gallery-item__placeholder-cat">{img.category}</span>
              </div>
            )}
            <div className="gallery-item__overlay">
              <ZoomIn size={22} />
              <span>{img.title}</span>
            </div>
          </button>
        ))}
      </div>

      <p className="gallery-hint terminal-prompt" style={{ marginTop: '1rem', fontSize: '0.78rem' }}>
        {filtered.length} imágenes · click para ampliar · ESC para cerrar
      </p>

      {/* Lightbox */}
      {isOpen && (
        <Lightbox
          images={filtered}
          current={currentIndex}
          onClose={close}
          onPrev={prev}
          onNext={next}
        />
      )}
    </div>
  );
}
