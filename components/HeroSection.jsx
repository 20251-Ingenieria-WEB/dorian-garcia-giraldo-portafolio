
// componente HeroSection.jsx
// Importa el componente FontAwesomeIcon para usar íconos.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Importa el ícono faArrowRight específico de los íconos sólidos gratuitos.
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

// Define el componente funcional HeroSection.
const HeroSection = () => {
  // Retorna la estructura JSX que representa la sección principal (hero).
  return (
    // Sección principal con estilos de Tailwind CSS para flexbox, alineación y margen inferior.
    <section className="hero flex items-center gap-10 mb-16">
      {/* Contenedor para el texto del héroe, ocupa el espacio disponible. */}
      <div className="hero-text flex-1">
        {/* Título principal con el nombre, estilos de Tailwind CSS para tamaño, color, peso de fuente y margen. */}
        <h1 className="text-3xl text-gray-800 font-bold mb-3">I'm Dorian García</h1>
        {/* Subtítulo para la primera profesión, estilos de Tailwind CSS para tamaño, color y margen. */}
        <h2 className="text-2xl text-gray-700 mb-5">Front-end Developer</h2>
        {/* Subtítulo para la segunda profesión, estilos de Tailwind CSS para tamaño, color y margen. */}
        <h2 className="text-2xl text-gray-700 mb-5">x-ray Technologist</h2>
        {/* Párrafo de descripción del héroe, estilos de Tailwind CSS para color, espaciado de línea y margen. */}
        <p className="hero-description text-gray-700 leading-relaxed mb-8">Passionate students web developer with 2 years of experience building responsive, user-friendly applications. Specialized in modern frameworks like React and Next.js, with a strong eye for design and performance optimization. Dedicated to writing clean, maintainable code and solving complex problems with elegant solutions.</p>
        {/* Botón "HIRE ME" con estilos de Tailwind CSS para fondo, texto, relleno, bordes redondeados, cursor y transiciones de color al pasar el ratón. */}
        <button className="hire-me-button bg-yellow-500 text-white font-bold py-3 px-6 rounded-md cursor-pointer transition-colors hover:bg-yellow-600">
          HIRE ME {/* Texto del botón. */}
          {/* Ícono de flecha derecha de Font Awesome, con un margen izquierdo. */}
          <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
        </button>
      </div>
      {/* Contenedor de la imagen del héroe, con estilos de Tailwind CSS para tamaño fijo, forma circular, desbordamiento oculto y sombra. */}
      <div className="hero-image-container flex-shrink-0 w-72 h-72 rounded-full overflow-hidden shadow-md">
        {/* Imagen del héroe, ocupando todo el ancho y alto del contenedor y ajustando su contenido. */}
        <img src="/images/dor.jpg" alt="Dorian García" className="w-full h-full object-cover" />
      </div>
    </section>
  );
};

// Exporta el componente HeroSection para que pueda ser utilizado en otras partes de la aplicación.
export default HeroSection;