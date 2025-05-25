// componente PortfolioSection.jsx
// Importa el componente PortfolioItem, que se utilizará para mostrar cada proyecto del portafolio.
import PortfolioItem from './PortfolioItem';

// Define el componente funcional PortfolioSection.
const PortfolioSection = () => {
  // Retorna la estructura JSX que representa la sección del portafolio.
  return (
    // Sección principal del portafolio con estilos de Tailwind CSS para margen inferior.
    <section className="portfolio mb-16">
      {/* Título de la sección del portafolio con estilos de Tailwind CSS para tamaño, color, peso de fuente y margen. */}
      <h2 className="text-2xl text-gray-800 font-bold mb-4 text-center">Portfolio</h2>
      {/* Descripción de la sección del portafolio con estilos de Tailwind CSS para color, espaciado de línea y margen. */}
      <p className="section-description text-gray-700 leading-relaxed mb-8">Here are some of my recent projects. Click on a project to learn more..</p>
      {/* Contenedor de la cuadrícula de elementos del portafolio.
          Utiliza grid de Tailwind CSS para organizar los elementos en 1 columna por defecto
          y 2 columnas en pantallas medianas (md) y más grandes, con un espacio entre ellos. */}
      <div className="portfolio-grid grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Componente PortfolioItem para el "Proyecto_covid". */}
        <PortfolioItem
          image="/images/bussines.jpg" // Ruta de la imagen del proyecto.
          title="Proyecto_covid https://github.com/Dor00/proyecto_Covid" // Título del proyecto y enlace GitHub.
          description="COVID detection using CNN (convolutional neural network) through Chest X-rays via Telegram." // Descripción del proyecto.
          link="https://github.com/Dor00/proyecto_Covid" // Enlace completo al repositorio GitHub.
        />
        {/* Componente PortfolioItem para el proyecto de "image compression". */}
        <PortfolioItem
          image="/images/bussines.jpg" // Ruta de la imagen del proyecto.
          title="image compression https://github.com/Dor00/imageCompression" // Título del proyecto y enlace GitHub.
          description="Final project on mobile computing 2024-2, group 01. Program for mobile devices that can reduce image weight.." // Descripción del proyecto.
          link="https://github.com/Dor00/imageCompression" // Enlace completo al repositorio GitHub.
        />
      </div>
    </section>
  );
};

// Exporta el componente PortfolioSection para que pueda ser utilizado en otras partes de la aplicación.
export default PortfolioSection;