export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  demoUrl: string;
  githubUrl: string;
}

// Reemplazá los valores de cada proyecto con la info real (descripción completa,
// links de GitHub/demo, e imagen). Para la imagen: pisá el archivo .svg correspondiente
// en src/assets/projects/ con tu captura real (.png/.jpg) y actualizá el import de
// arriba con el nombre de archivo nuevo — Vite se encarga de optimizarla y de que
// funcione tanto en desarrollo como en el build de producción.
import estudioJuridicoImg from "../assets/projects/estudio-juridico.png";
import constructoraImg from "../assets/projects/constructora.png";
import gestionPedidosImg from "../assets/projects/gestion-pedidos.png";
import coriaRefriImg from "../assets/projects/coriaRefriImg.png";

export const projects: Project[] = [
  {
    id: "estudio-juridico",
    title: "Estudio Jurídico & Legal",
    description:
      "Landing page corporativa diseñada para transmitir confianza y autoridad. Optimizada para la captación de clientes (leads) con llamadas a la acción estratégicas y diseño responsive en cada sección.",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    image: estudioJuridicoImg,
    demoUrl: "https://estudiodresrodriguez.com.ar/",
    githubUrl: "#",
  },
  {
    id: "constructora",
    title: "Constructora & Desarrollos",
    description:
      "Portfolio digital para empresa de construcción. Galería de proyectos interactiva y optimización de imágenes para una carga veloz. Diseño robusto pensado para transmitir solidez y trayectoria.",
    tags: ["React", "Vite", "UX/UI Design"],
    image: constructoraImg,
    demoUrl: "https://www.josealegreconstrucciones.com/",
    githubUrl: "#",
  },
  {
    id: "gestion-pedidos",
    title: "Sistema de Gestión de pedidos en restaurantes (SaaS)",
    description:
      "Aplicación web diseñada para manejar hamburgueserías o restaurantes, tiene sector pedidos, cocina y estadísticas en tiempo real para optimizar la operación diaria del local.",
    tags: ["React", "Node.js", "MySQL", "Auth", "Tailwind", "Express"],
    image: gestionPedidosImg,
    demoUrl: "https://cocos.coriadev.com/",
    githubUrl: "",
  },
  {
    id: "coria-refrigeracion",
    title: "One page para empresa de refrigeración | CORIA REFRIGERACION",
    description:
      "Aplicación web de una sola página para empresa de refrigeración, con diseño responsive y optimización de imágenes para una carga veloz. Se buscó transmitir confianza y profesionalismo a través del diseño y la experiencia de usuario.",
    tags: ["React", "Tailwind", "Framer Motion"],
    image: coriaRefriImg,
    demoUrl: "https://coriarefrigeracion.coriadev.com/",
    githubUrl: "",
  },
];

// Cantidad de espacios vacíos para futuros proyectos que se muestran al final del grid.
export const emptySlots = 2;
