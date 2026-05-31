import { useState } from 'react';
import { ChevronLeft, ChevronRight, RefreshCw, AlertTriangle } from 'lucide-react';
import { useApi } from '../hooks/useApi';
import Loader from '../components/ui/Loader';
import './ApiModule.css';

const PAGE_SIZE = 20;
const TOTAL_CHARS = 826; // Rick & Morty total characters

export default function ApiModule() {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(TOTAL_CHARS / PAGE_SIZE);

  const { data, loading, error, refetch } = useApi(
    `https://rickandmortyapi.com/api/character?page=${page}`
  );

  const handlePrev = () => { if (page > 1) setPage((p) => p - 1); };
  const handleNext = () => { if (page < totalPages) setPage((p) => p + 1); };

  const STATUS_COLOR = { Alive: 'green', Dead: 'red', unknown: 'muted' };

  return (
    <div className="page api-page">
      <header className="page-header">
        <p className="page-eyebrow">API externa · Rick & Morty API</p>
        <h1 className="page-title">Módulo de API</h1>
        <p className="page-subtitle">
          Consumo asíncrono · Paginación · Estados de carga y error
        </p>
        <div className="api-info">
          <span>🔗</span>
          <code>rickandmortyapi.com/api/character</code>
          <span>·</span>
          <span>{TOTAL_CHARS} personajes</span>
        </div>
      </header>

      {/* Pagination — top */}
      <div className="api-pagination">
        <button
          className="btn btn--ghost"
          onClick={handlePrev}
          disabled={page === 1 || loading}
        >
          <ChevronLeft size={14} /> anterior
        </button>

        <div className="api-page-indicator">
          <span className="api-page-num">{page}</span>
          <span className="api-page-sep">/</span>
          <span>{totalPages}</span>
        </div>

        <button
          className="btn btn--ghost"
          onClick={handleNext}
          disabled={page === totalPages || loading}
        >
          siguiente <ChevronRight size={14} />
        </button>

        <button
          className="btn btn--ghost-violet api-refresh"
          onClick={refetch}
          disabled={loading}
          title="Recargar"
        >
          <RefreshCw size={13} className={loading ? 'api-spin' : ''} />
        </button>
      </div>

      {/* States */}
      {loading && <Loader text="Consultando API..." />}

      {error && (
        <div className="state-box api-error">
          <AlertTriangle size={40} />
          <p>Error al conectar con la API</p>
          <code>{error}</code>
          <button className="btn btn--ghost" onClick={refetch} style={{ marginTop: '1rem' }}>
            reintentar
          </button>
        </div>
      )}

      {/* Grid */}
      {!loading && !error && data?.results && (
        <div className="api-grid">
          {data.results.map((char, i) => (
            <article
              className="api-card card"
              key={char.id}
              style={{ animationDelay: `${i * 0.03}s` }}
            >
              <img
                src={char.image}
                alt={char.name}
                className="api-card__img"
                loading="lazy"
              />
              <div className="api-card__body">
                <div className="api-card__status-row">
                  <span
                    className={`api-card__status-dot api-card__status-dot--${
                      STATUS_COLOR[char.status] || 'muted'
                    }`}
                  />
                  <span className="api-card__status">{char.status}</span>
                  <span className="api-card__species">· {char.species}</span>
                </div>
                <h3 className="api-card__name">{char.name}</h3>
                <p className="api-card__meta">📍 {char.location?.name}</p>
                <div className="api-card__badges">
                  <span className={`badge ${char.gender === 'Male' ? 'badge--cyan' : char.gender === 'Female' ? 'badge--violet' : 'badge--green'}`}>
                    {char.gender}
                  </span>
                  <span className="badge badge--yellow"># {char.id}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* Pagination — bottom */}
      {!loading && !error && data?.results && (
        <div className="api-pagination api-pagination--bottom">
          <button className="btn btn--ghost" onClick={handlePrev} disabled={page === 1}>
            <ChevronLeft size={14} /> anterior
          </button>
          <span className="terminal-prompt">
            página {page} de {totalPages} · {data.info?.count} personajes
          </span>
          <button className="btn btn--ghost" onClick={handleNext} disabled={page === totalPages}>
            siguiente <ChevronRight size={14} />
          </button>
        </div>
      )}
    </div>
  );
}
