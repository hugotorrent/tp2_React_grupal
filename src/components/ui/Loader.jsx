export default function Loader({ text = 'Cargando...' }) {
  return (
    <div className="loader-wrap">
      <div className="loader-spinner" />
      <span className="terminal-prompt">{text}</span>
    </div>
  );
}
