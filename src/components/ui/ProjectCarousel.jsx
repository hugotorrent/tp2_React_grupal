import { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import './ProjectCarousel.css';

export default function ProjectCarousel({ projects }) {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + projects.length) % projects.length);
  const next = () => setCurrent((c) => (c + 1) % projects.length);

  const project = projects[current];

  return (
    <div className="carousel">
      {/* Slide */}
      <div className={`carousel__slide ${project.image ? 'carousel__slide--has-image' : ''}`} key={current}>
        {project.image && (
          <div className="carousel__image-wrap">
            <img src={project.image} alt={project.title} className="carousel__image" />
          </div>
        )}
        <div className="carousel__body">
          <div className="carousel__slide-header">
            <span className="carousel__year">{project.year}</span>
            <h4 className="carousel__title">{project.title}</h4>
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="carousel__ext-link">
                <ExternalLink size={14} />
              </a>
            )}
          </div>

          <p className="carousel__desc">{project.description}</p>

          <div className="carousel__tech">
            {project.tech.map((t) => (
              <span key={t} className="badge badge--violet">{t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="carousel__controls">
        <button className="carousel__btn" onClick={prev} aria-label="Anterior">
          <ChevronLeft size={16} />
        </button>

        <div className="carousel__dots">
          {projects.map((_, i) => (
            <button
              key={i}
              className={`carousel__dot ${i === current ? 'active' : ''}`}
              onClick={() => setCurrent(i)}
              aria-label={`Ir al proyecto ${i + 1}`}
            />
          ))}
        </div>

        <button className="carousel__btn" onClick={next} aria-label="Siguiente">
          <ChevronRight size={16} />
        </button>
      </div>

      {/* Counter */}
      <p className="carousel__counter">
        {current + 1} / {projects.length}
      </p>
    </div>
  );
}
