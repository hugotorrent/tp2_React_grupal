import { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import './Lightbox.css';

export default function Lightbox({ images, current, onClose, onPrev, onNext }) {
  const handleKey = useCallback((e) => {
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowLeft') onPrev();
    if (e.key === 'ArrowRight') onNext();
  }, [onClose, onPrev, onNext]);

  useEffect(() => {
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [handleKey]);

  const img = images[current];

  return (
    <div className="lightbox" onClick={onClose} role="dialog" aria-modal="true">
      {/* Close */}
      <button className="lightbox__close" onClick={onClose} aria-label="Cerrar">
        <X size={20} />
      </button>

      {/* Counter */}
      <div className="lightbox__counter">
        {current + 1} / {images.length}
      </div>

      {/* Navigation */}
      <button
        className="lightbox__nav lightbox__nav--prev"
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        aria-label="Anterior"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        className="lightbox__nav lightbox__nav--next"
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        aria-label="Siguiente"
      >
        <ChevronRight size={24} />
      </button>

      {/* Image */}
      <div className="lightbox__content" onClick={(e) => e.stopPropagation()}>
        {img.src ? (
          <img src={img.src} alt={img.title || 'Imagen'} className="lightbox__img" />
        ) : (
          <div className="lightbox__placeholder">
            <ZoomIn size={48} />
            <p>{img.title || 'Sin imagen'}</p>
          </div>
        )}
        {img.title && <p className="lightbox__caption">{img.title}</p>}
      </div>

      {/* Keyboard hint */}
      <div className="lightbox__hint">
        <span>ESC cerrar</span>
        <span>← → navegar</span>
      </div>
    </div>
  );
}
