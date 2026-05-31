import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Calendar, Briefcase } from 'lucide-react';
import { getTeamMember } from '../data/team';
import SkillBar from '../components/ui/SkillBar';
import ProjectCarousel from '../components/ui/ProjectCarousel';
import TechIcon from '../components/ui/TechIcon';
import SocialButton from '../components/ui/SocialButton';
import './MemberProfile.css';

function calcAge(birthDate) {
  if (!birthDate) return '??';
  const today = new Date();
  const birth = new Date(birthDate);
  let age = today.getFullYear() - birth.getFullYear();
  const m = today.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) age--;
  return age;
}

export default function MemberProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const member = getTeamMember(id);

  if (!member) {
    return (
      <div className="page">
        <div className="state-box">
          <span className="state-box__icon">⚠</span>
          <p>Integrante no encontrado: <code>{id}</code></p>
          <Link to="/" className="btn btn--ghost" style={{ marginTop: '1rem' }}>
            volver al inicio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="page profile-page">
      {/* Back button */}
      <button className="profile-back btn btn--ghost" onClick={() => navigate(-1)}>
        <ArrowLeft size={14} />
        volver
      </button>

      <div className="profile-grid">
        {/* ══ LEFT COLUMN — terminal window ══ */}
        <aside className="profile-aside">
          <div className="profile-aside-inner">
            {/* Avatar */}
            <div className="profile-avatar-wrap">
              {member.avatar ? (
                <img src={member.avatar} alt={member.name} className="profile-avatar-img" />
              ) : (
                <div className="profile-avatar-initials">{member.initials}</div>
              )}
            </div>

            {/* Identity */}
            <p className="profile-handle">{member.handle}</p>
            <h1 className="profile-name">{member.name}</h1>
            <p className="profile-role">{member.role}</p>

            {/* Meta */}
            <div className="profile-meta">
              <div className="profile-meta-item">
                <MapPin size={12} />
                <span>{member.location}</span>
              </div>
              <div className="profile-meta-item">
                <Calendar size={12} />
                <span>{calcAge(member.birthDate)} años</span>
              </div>
              <div className="profile-meta-item">
                <Briefcase size={12} />
                <span>Desarrollo de Software</span>
              </div>
            </div>

            {/* Badges — todos verdes igual que TP1 */}
            <div className="profile-badges">
              {member.badges.map((b) => (
                <span key={b} className="badge badge--green">{b}</span>
              ))}
            </div>

            <hr className="profile-divider" />

            {/* Social */}
            <div className="profile-social">
              {Object.entries(member.social).map(([platform, href]) => (
                <SocialButton key={platform} platform={platform} href={href} />
              ))}
            </div>

            {/* Bio */}
            {member.bio && (
              <>
                <hr className="profile-divider" />
                <div className="profile-bio">
                  <p className="section-title">bio</p>
                  <p>{member.bio}</p>
                </div>
              </>
            )}

            {/* Avatar placeholder note */}
            {!member.avatar && (
              <div className="profile-avatar-note">
                <span>imagen pendiente — editar <code>team.js</code></span>
              </div>
            )}
          </div>
        </aside>

        {/* ══ RIGHT COLUMN ══ */}
        <div className="profile-main">
          {/* Skills — styled as skills-section TP1 */}
          <section className="profile-skills-section" aria-labelledby={`skills-${id}`}>
            <p className="section-title" id={`skills-${id}`}>habilidades</p>
            <div className="profile-skills-grid">
              {member.skills.map((skill) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  color="green"
                />
              ))}
            </div>
          </section>

          {/* Projects Carousel */}
          <section aria-labelledby={`projects-${id}`}>
            <p className="section-title" id={`projects-${id}`}>proyectos</p>
            <ProjectCarousel projects={member.projects} />
          </section>

          {/* Tech Stack */}
          <section className="profile-tech-section" aria-labelledby={`tech-${id}`}>
            <p className="section-title" id={`tech-${id}`}>tech stack</p>
            <div className="profile-tech-grid">
              {member.techStack.map((tech) => (
                <TechIcon key={tech} name={tech} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
