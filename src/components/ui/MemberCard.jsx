import { useNavigate } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';
import './MemberCard.css';

export default function MemberCard({ member, index }) {
  const navigate = useNavigate();

  return (
    <article
      className="member-card"
      style={{ animationDelay: `${index * 0.12}s` }}
      onClick={() => navigate(`/integrante/${member.id}`)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && navigate(`/integrante/${member.id}`)}
    >
      {/* Top accent line */}
      <div className="member-card__accent-line" />

      {/* Avatar */}
      <div className="member-card__avatar-wrap">
        {member.avatar ? (
          <img
            src={member.avatar}
            alt={member.name}
            className="member-card__avatar-img"
          />
        ) : (
          <div className="member-card__avatar-initials">
            {member.initials}
          </div>
        )}
        <div className="member-card__avatar-ring" />
      </div>

      {/* Info */}
      <div className="member-card__info">
        <p className="member-card__handle">@{member.handle}</p>
        <h3 className="member-card__name">{member.name}</h3>
        <p className="member-card__role">{member.role}</p>

        <div className="member-card__meta">
          <MapPin size={12} />
          <span>{member.location}</span>
        </div>

        {/* Badges */}
        <div className="member-card__badges">
          {member.badges.map((b) => (
            <span key={b} className="badge badge--green">{b}</span>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="member-card__cta">
        <span>ver perfil</span>
        <ArrowRight size={14} />
      </div>
    </article>
  );
}
