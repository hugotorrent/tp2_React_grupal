// team.js — Datos del equipo Grupo 18
// Completar los campos marcados con TODO con los datos reales de cada integrante
import avatarHugo from '../assets/img/hugo_pixel.png';
import avatarDiego from '../assets/img/Diego_pixel.png';
import avatarLuciano from '../assets/img/luciano_pixel.png';

// Imágenes  proyectos de Hugo
import viviendaImg from '../assets/img/hugo_img/vivienda.jpg';
import sepriceImg from '../assets/img/hugo_img/seprice.png';
import santoDomingoImg from '../assets/img/hugo_img/santo_domingo.jpg';



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
    role: "Developer · Diseño", // TODO: completar rol real
    location: "San Juan, AR", // TODO: verificar
    birthDate: "2000-01-01", // TODO: cambiar fecha real
    bio: "Interés en el desarrollo web y el diseño de interfaces. Apasionado por las nuevas tecnologías.",
    avatar: avatarDiego,
    skills: [
      { name: "HTML & CSS", level: 75 },
      { name: "JavaScript", level: 65 },
      { name: "React", level: 55 },
      { name: "Git & GitHub", level: 60 },
      { name: "Diseño UI", level: 70 },
      { name: "Figma", level: 50 },
    ],
    projects: [
      {
        title: "Proyecto 1", // TODO: completar
        description: "Descripción del proyecto 1 de Diego.", // TODO
        tech: ["HTML", "CSS", "JavaScript"],

      },
      {
        title: "Proyecto 2", // TODO
        description: "Descripción del proyecto 2 de Diego.", // TODO
        tech: ["React", "CSS"],

      },
      {
        title: "Proyecto 3", // TODO
        description: "Descripción del proyecto 3 de Diego.", // TODO
        tech: ["Figma", "HTML"],

      },
    ],
    techStack: ["HTML5", "CSS3", "JavaScript", "React", "Git", "Figma", "VS Code"],
    social: {
      github: "https://github.com/diego-gonzalez", // TODO: link real
      linkedin: null,
      instagram: null,
    },
    badges: ["Dev", "Diseño", "UI"],
  },
  {
    id: "luciano",
    name: "Luciano Reguera",
    handle: "luciano_reguera",
    initials: "LR",
    role: "Developer · Backend", // TODO: completar rol real
    location: "San Juan, AR", // TODO: verificar
    birthDate: "2000-01-01", // TODO: cambiar fecha real
    bio: "Enfoque en desarrollo y resolución de problemas técnicos. Le gusta la lógica y los desafíos algorítmicos.",
    avatar: avatarLuciano,
    skills: [
      { name: "JavaScript", level: 70 },
      { name: "HTML & CSS", level: 65 },
      { name: "React", level: 55 },
      { name: "Git & GitHub", level: 65 },
      { name: "Python", level: 60 },
      { name: "Algoritmos", level: 72 },
    ],
    projects: [
      {
        title: "Proyecto 1", // TODO
        description: "Descripción del proyecto 1 de Luciano.", // TODO
        tech: ["JavaScript", "HTML", "CSS"],

      },
      {
        title: "Proyecto 2", // TODO
        description: "Descripción del proyecto 2 de Luciano.", // TODO
        tech: ["Python", "Algoritmos"],

      },
      {
        title: "Proyecto 3", // TODO
        description: "Descripción del proyecto 3 de Luciano.", // TODO
        tech: ["React", "CSS"],

      },
    ],
    techStack: ["HTML5", "CSS3", "JavaScript", "React", "Git", "Python", "VS Code"],
    social: {
      github: "https://github.com/luciano-reguera", // TODO: link real
      linkedin: null,
      instagram: null,
    },
    badges: ["Dev", "Backend", "Algoritmos"],
  },
];

export const getTeamMember = (id) => team.find((m) => m.id === id);
