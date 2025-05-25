//componente KnowledgeItem.jsx
// Importa el componente FontAwesomeIcon para usar íconos.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Define el componente funcional KnowledgeItem.
// Recibe tres props: icon (el ícono a mostrar), title (el título del conocimiento) y description (la descripción).
const KnowledgeItem = ({ icon, title, description }) => {
  // Retorna la estructura JSX que representa un elemento de conocimiento.
  return (
    // Contenedor principal del elemento de conocimiento con estilos de Tailwind CSS:
    // fondo blanco, padding, bordes redondeados, sombra y texto centrado.
    <div className="knowledge-item bg-white p-5 rounded-md shadow-sm text-center">
      {/* Contenedor del ícono con estilos de Tailwind CSS: color amarillo, tamaño de texto grande y margen inferior. */}
      <div className="icon text-yellow-500 text-3xl mb-3">
        {/* Renderiza el ícono utilizando el componente FontAwesomeIcon y la prop 'icon'. */}
        <FontAwesomeIcon icon={icon} />
      </div>
      {/* Título del conocimiento con estilos de Tailwind CSS: tamaño de texto, color gris y margen inferior. */}
      <h3 className="text-lg text-gray-700 mb-1">{title}</h3>
      {/* Descripción del conocimiento con estilos de Tailwind CSS: color gris y tamaño de texto pequeño. */}
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

// Exporta el componente KnowledgeItem para que pueda ser utilizado en otras partes de la aplicación.
export default KnowledgeItem;