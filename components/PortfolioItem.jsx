
// componente PortfolioItem.jsx
// Define el componente funcional PortfolioItem.
// Recibe tres props: 'image' (la ruta de la imagen del proyecto), 'title' (el título del proyecto),
// 'description' (una breve descripción del proyecto) y 'link' (el enlace al proyecto).
const PortfolioItem = ({ image, title, description, link }) => {
  // Retorna la estructura JSX que representa un elemento individual del portafolio.
  return (
    // Contenedor principal de un elemento del portafolio.
    // Aplica estilos de Tailwind CSS para fondo blanco, bordes redondeados, desbordamiento oculto y sombra.
    <div className="portfolio-item bg-white rounded-md overflow-hidden shadow-md">
      {/* Imagen del proyecto.
          La fuente de la imagen (`src`) y el texto alternativo (`alt`) se obtienen de las props.
          Estilos de Tailwind CSS para ancho completo, altura automática y display de bloque. */}
      <img src={image} alt={title} className="w-full h-auto block" />
      {/* Contenedor para el texto y el enlace del proyecto.
          Aplica un padding de 5 unidades de Tailwind CSS. */}
      <div className="p-5">
        {/* Título del proyecto.
            Estilos de Tailwind CSS para tamaño de texto, color, peso de fuente y margen inferior. */}
        <h4 className="text-lg text-gray-700 font-semibold mb-2">{title}</h4>
        {/* Descripción del proyecto.
            Estilos de Tailwind CSS para color de texto, tamaño de texto, espaciado de línea y margen inferior. */}
        <p className="text-gray-600 text-sm leading-relaxed mb-3">{description}</p>
        {/* Enlace para ver el proyecto.
            Estilos de Tailwind CSS para display de bloque, fondo, color de texto, centrado de texto,
            padding vertical, bordes redondeados, sin decoración de texto y transiciones al pasar el ratón. */}
        <a href={link} className="block bg-gray-200 text-gray-700 text-center py-2 rounded-sm text-decoration-none transition-colors hover:bg-gray-300">View Project</a>
      </div>
    </div>
  );
};

export default PortfolioItem;