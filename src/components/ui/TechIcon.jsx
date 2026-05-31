import './TechIcon.css';

const TECH_MAP = {
  'HTML5':      { emoji: '🌐', label: 'HTML5',      color: '#e34c26' },
  'CSS3':       { emoji: '🎨', label: 'CSS3',       color: '#264de4' },
  'JavaScript': { emoji: '⚡', label: 'JavaScript', color: '#f7df1e' },
  'React':      { emoji: '⚛️', label: 'React',      color: '#61dafb' },
  'Git':        { emoji: '🔀', label: 'Git',        color: '#f05032' },
  'GitHub':     { emoji: '🐙', label: 'GitHub',     color: '#ffffff' },
  'Python':     { emoji: '🐍', label: 'Python',     color: '#3776ab' },
  'Blender':    { emoji: '🎲', label: 'Blender',    color: '#ea7600' },
  'VS Code':    { emoji: '💻', label: 'VS Code',    color: '#007acc' },
  'Figma':      { emoji: '🖌️', label: 'Figma',      color: '#f24e1e' },
  'Node.js':    { emoji: '🟢', label: 'Node.js',    color: '#339933' },
  'TypeScript': { emoji: '📘', label: 'TypeScript', color: '#3178c6' },
  'Vite':       { emoji: '⚡', label: 'Vite',       color: '#646cff' },
};

export default function TechIcon({ name }) {
  const tech = TECH_MAP[name] || { emoji: '🔧', label: name, color: '#6b7fa3' };

  return (
    <div
      className="tech-icon"
      style={{ '--tech-clr': tech.color }}
      title={tech.label}
    >
      <span className="tech-icon__emoji">{tech.emoji}</span>
      <span className="tech-icon__label">{tech.label}</span>
    </div>
  );
}
