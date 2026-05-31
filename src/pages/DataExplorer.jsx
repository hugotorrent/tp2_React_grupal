import { useState, useMemo } from 'react';
import { Search, Filter, X, Film, Star } from 'lucide-react';
import movies from '../data/explorer.json';
import './DataExplorer.css';

const GENRES = ['Todos', ...new Set(movies.map((m) => m.genre))];

export default function DataExplorer() {
  const [query, setQuery] = useState('');
  const [genre, setGenre] = useState('Todos');
  const [sortBy, setSortBy] = useState('id');

  const filtered = useMemo(() => {
    let list = movies;

    if (genre !== 'Todos') list = list.filter((m) => m.genre === genre);

    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (m) =>
          m.title.toLowerCase().includes(q) ||
          m.director.toLowerCase().includes(q) ||
          m.description.toLowerCase().includes(q)
      );
    }

    return [...list].sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'year') return b.year - a.year;
      return a.id - b.id;
    });
  }, [query, genre, sortBy]);

  const clearFilters = () => { setQuery(''); setGenre('Todos'); setSortBy('id'); };
  const hasFilters = query || genre !== 'Todos' || sortBy !== 'id';

  return (
    <div className="page explorer-page">
      <header className="page-header">
        <p className="page-eyebrow">datos locales · JSON</p>
        <h1 className="page-title">Explorador de Datos</h1>
        <p className="page-subtitle">
          20 películas de ciencia ficción · filtrado en tiempo real
        </p>
      </header>

      {/* Controls */}
      <div className="explorer-controls">
        {/* Search */}
        <div className="explorer-search-wrap">
          <Search size={15} className="explorer-search-icon" />
          <input
            id="explorer-search"
            type="text"
            className="input explorer-search"
            placeholder="Buscar por título, director o descripción..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {query && (
            <button className="explorer-clear-btn" onClick={() => setQuery('')} aria-label="Limpiar">
              <X size={14} />
            </button>
          )}
        </div>

        {/* Genre filter */}
        <div className="explorer-filter-wrap">
          <Filter size={14} className="explorer-filter-icon" />
          <select
            id="explorer-genre"
            className="input select explorer-select"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          >
            {GENRES.map((g) => <option key={g}>{g}</option>)}
          </select>
        </div>

        {/* Sort */}
        <select
          id="explorer-sort"
          className="input select explorer-select-sm"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="id">↑ ID</option>
          <option value="rating">★ Rating</option>
          <option value="year"> Año</option>
        </select>

        {/* Clear all */}
        {hasFilters && (
          <button className="btn btn--ghost" onClick={clearFilters}>
            <X size={13} />
            limpiar
          </button>
        )}
      </div>

      {/* Results count */}
      <div className="explorer-results-info">
        <span className="terminal-prompt">
          {filtered.length} resultado{filtered.length !== 1 ? 's' : ''} de {movies.length} películas
        </span>
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="state-box">
          <span className="state-box__icon">🎬</span>
          <p>No se encontraron resultados para "<strong>{query}</strong>"</p>
          <button className="btn btn--ghost" onClick={clearFilters} style={{ marginTop: '1rem' }}>
            limpiar filtros
          </button>
        </div>
      ) : (
        <div className="explorer-grid">
          {filtered.map((movie, i) => (
            <article
              className="explorer-card card"
              key={movie.id}
              style={{ animationDelay: `${i * 0.04}s` }}
            >
              <div className="explorer-card__top">
                <Film size={16} className="explorer-card__icon" />
                <span className="explorer-card__year">{movie.year}</span>
                <span className="explorer-card__duration">{movie.duration} min</span>
              </div>

              <h3 className="explorer-card__title">{movie.title}</h3>
              <p className="explorer-card__director">{movie.director}</p>

              <div className="explorer-card__badges">
                <span className="badge badge--violet">{movie.genre}</span>
                <span className="explorer-card__country">{movie.country}</span>
              </div>

              <p className="explorer-card__desc">{movie.description}</p>

              <div className="explorer-card__rating">
                <Star size={13} fill="currentColor" />
                <span>{movie.rating}</span>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
