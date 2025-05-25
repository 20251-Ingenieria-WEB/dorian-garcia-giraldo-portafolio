// componente MyKnowledgeSection.jsx
// Importa el componente KnowledgeItem, que se utilizará para mostrar cada habilidad o conocimiento.
import KnowledgeItem from './KnowledgeItem';
// Importa el componente FontAwesomeIcon para usar íconos.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Importa los íconos específicos de Font Awesome que se utilizarán en esta sección.
import { faCode, faObjectGroup, faCameraRetro, faCircleRadiation } from '@fortawesome/free-solid-svg-icons';

// Define el componente funcional MyKnowledgeSection.
const MyKnowledgeSection = () => {
  // Retorna la estructura JSX que representa la sección "My Knowledge".
  return (
    // Sección principal de conocimientos con estilos de Tailwind CSS para margen inferior.
    <section className="my-knowledge mb-16">
      {/* Título de la sección de conocimientos con estilos de Tailwind CSS para tamaño, color, peso de fuente y margen. */}
      <h2 className="text-2xl text-gray-800 font-bold mb-4 text-center">My Knowledge</h2>
      {/* Descripción de la sección, detallando las tecnologías y habilidades. */}
      <p className="section-description text-gray-700 leading-relaxed mb-8">
        Frontend: React, Next.js, JavaScript (ES6+), TypeScript, HTML5, CSS3, Tailwind CSS
        <br />
        Backend: Node.js, Express, RESTful APIs (optional)
        <br />
        Tools: Git, GitHub, Vercel, Figma (for UI/UX collaboration)
        <br />
        I am trained in patient care, equipment operation, image processing, and radiation safety protocols.
      </p>
      {/* Contenedor de la cuadrícula de elementos de conocimiento.
          Utiliza grid de Tailwind CSS para organizar los elementos en 2 columnas por defecto
          y 4 columnas en pantallas medianas (md) y más grandes, con un espacio entre ellos. */}
      <div className="knowledge-grid grid grid-cols-2 md:grid-cols-4 gap-5">
        {/* Componente KnowledgeItem para "Web Development". Se le pasa el ícono faCode y el título. */}
        <KnowledgeItem icon={faCode} title="Web Development" description="" />
        {/* Componente KnowledgeItem para "UI/UX Design". Se le pasa el ícono faObjectGroup y el título. */}
        <KnowledgeItem icon={faObjectGroup} title="UI/UX Design" description="" />
        {/* Componente KnowledgeItem para "Photography". Se le pasa el ícono faCameraRetro y el título. */}
        <KnowledgeItem icon={faCameraRetro} title="Photography" description="" />
        {/* Componente KnowledgeItem para "X-ray Technologist". Se le pasa el ícono faCircleRadiation y el título. */}
        <KnowledgeItem icon={faCircleRadiation} title="X-ray Technologist" description="" />
      </div>
    </section>
  );
};

// Exporta el componente MyKnowledgeSection para que pueda ser utilizado en otras partes de la aplicación.
export default MyKnowledgeSection;