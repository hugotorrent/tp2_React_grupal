// team.js — Datos del equipo Grupo 18
// Completar los campos marcados con TODO con los datos reales de cada integrante
import avatarHugo from '../assets/img/hugo_pixel.png';
import avatarDiego from '../assets/img/Diego_pixel.png';
import avatarLuciano from '../assets/img/luciano_pixel.png';

// Imágenes  proyectos de Hugo
import viviendaImg from '../assets/img/hugo_img/vivienda.jpg';
import sepriceImg from '../assets/img/hugo_img/seprice.png';
import santoDomingoImg from '../assets/img/hugo_img/santo_domingo.jpg';

// Imágenes proyectos de Diego
import proyecto1 from '../assets/img/diego_img/proyecto1.jpg';
import proyecto2 from '../assets/img/diego_img/proyecto2.jpg';
import proyecto3 from '../assets/img/diego_img/proyecto3.png';

// Imágenes proyectos de Luciano
import terraSostenibleImg from '../assets/img/luciano_img/terrasostenible.png';
import cataNewsImg from '../assets/img/luciano_img/catanews.png';
import stockImg from '../assets/img/luciano_img/stock.png'

export const team = [
  {
    id: "hugo",
    name: "Hugo Alberto Torrent",
    handle: "hugo_torrent",
    initials: "HT",
    role: "Developer · Render 3D · Fotografía",
    location: "planeta Marte, Via Lactea",
    birthDate: "1283-01-01",
    bio: "Terrestre apasionado por el diseño espacial y la tecnología. Empecé a trabajar en el modelado y renderizado para estudios de arquitectura, actualmente me encuentro inmerso en la Ingeniería de Software, utilizando herramientas como Figma, Android Studio y Visual Studio Code.",
    avatar: avatarHugo,
    skills: [
      { name: "JavaScript", level: 70 },
      { name: "HTML & CSS", level: 65 },
      { name: "React", level: 50 },
      { name: "Git & GitHub", level: 70 },
      { name: "Blender 3D", level: 60 },
      { name: "Fotografía", level: 85 },
    ],
    projects: [
      {
        title: "Vivienda Unifamiliar",
        description: "Trabajo de modelado y diseño arquitectónico detallado para este espacio de encuentro y calidad.",
        tech: ["Blender", "Cycles", "Render 3D"],
        image: viviendaImg,
      },
      {
        title: "Clínica Seprice - Trabajo final IFTS DSOO",
        description: "Desarrollo y proyección estructural enfocada en la funcionalidad y flujo de espacios de salud.",
        tech: ["React", "HTML & CSS", "JavaScript"],
        image: sepriceImg,
      },
      {
        title: "Fotografía Arquitectónica - Templo de Santo Domingo",
        description: "Exploración de la luz, la forma y la textura en espacios urbanos y estructuras modernas. Una mirada personal sobre el diseño espacial.",
        tech: ["Fotografía", "Lightroom", "Photoshop"],
        image: santoDomingoImg,
      },
    ],
    techStack: ["HTML5", "CSS3", "JavaScript", "React", "Git", "Blender", "VS Code"],
    social: {
      github: "https://github.com/hugotorrent",
      linkedin: "https://es.linkedin.com",
      instagram: "https://www.instagram.com",
    },
    badges: ["Dev", "Render3D", "Foto"],
  },
  {
    id: "diego",
    name: "Diego González",
    handle: "diego_gonzalez",
    initials: "DG",
    role: "Developer · Diseño · Data Science · Nutrición · Mindfullness",
    location: "Planeta Mercurio, Via Lactea",
    birthDate: "1743-05-29",
    bio: "Interés en el desarrollo web y el diseño de interfaces. Apasionado por las nuevas tecnologías. Uniendo lo mejor de mundos diversos como la nutrición y la ciencia de datos para crear soluciones innovadoras y centradas en el usuario.",
    avatar: avatarDiego,
    skills: [
      { name: "HTML & CSS", level: 75 },
      { name: "JavaScript", level: 75 },
      { name: "React", level: 65 },
      { name: "Git & GitHub", level: 50 },
      { name: "Diseño UI", level: 60 },
      { name: "Figma", level: 70 },
    ],
    projects: [
      {
        title: "Proyecto 1",
        description: "Curriculum Vitae Fluido con un enfoque dinamico, moderno y responsivo.",
        tech: ["HTML", "CSS", "JavaScript", "NodeJS"],
        image: proyecto1,

      },
      {
        title: "Proyecto 2",
        description: "Calculadora simple e intuitiva.",
        tech: ["HTML", "CSS", "JavaScript"],
        image: proyecto2,

      },
      {
        title: "Proyecto 3",
        description: "Diseño de interfaz para una aplicación de gestión de tareas en Figma.",
        tech: ["Figma"],
        image: proyecto3,

      },
    ],
    techStack: ["HTML5", "CSS3", "JavaScript", "React", "Git", "Figma", "VS Code"],
    social: {
      github: "https://github.com/diegoale528",
      linkedin: "https://es.linkedin.com",
      instagram: "https://www.instagram.com",
    },
    badges: ["Dev", "Diseño", "UI"],
  },
  {
    id: "luciano",
    name: "Luciano Reguera",
    handle: "luciano_reguera",
    initials: "LR",
    role: "Developer · Backend",
    location: "Tattoine, Territorios del Borde Exterior",
    birthDate: "1465-01-01",
    bio: "Backend Developer & Software Architect. Especializado en algoritmos, soluciones estructuradas y especificaciones técnicas. Cruzando el hiperespacio hacia el desarrollo Frontend para convertirme en un Jedi de stack completo.",
    avatar: avatarLuciano,
    skills: [
      { name: "JavaScript", level: 90 },
      { name: "Java", level: 80 },
      { name: "PHP", level: 90 },
      { name: "Python", level: 60 },
      { name: "Git & GitHub", level: 65 },
      { name: "Algoritmos", level: 75 },
    ],
    projects: [
      {
        title: "Terra Sostenible",
        description: "Desarrollo landing page",
        tech: ["JavaScript", "HTML", "CSS", "Astro"],
        image: terraSostenibleImg,
      },
      {
        title: "Catanews",
        description: "Diario de noticias de la ciudad de Catamarca.",
        tech: ["Laravel", "Tailwind CSS", "Alpine JS"],
        image: cataNewsImg,
      },
      {
        title: "Sistema stock",
        description: "Desarrollo sistema de stock.",
        tech: ["NestJS", "Postgres", "React", "CSS", "TanStack"],
        image: stockImg
      },
    ],
    techStack: ["HTML5", "CSS3", "JavaScript", "React", "Git", "Python", "VS Code"],
    social: {
      github: "https://github.com/lucianoreguera",
      linkedin: null,
      instagram: null,
    },
    badges: ["Dev", "Backend", "Algoritmos"],
  },
];

export const getTeamMember = (id) => team.find((m) => m.id === id);
