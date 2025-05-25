// componente LanguageItem.jsx

// Define el componente funcional LanguageItem.
// Recibe dos props: 'name' (el nombre del idioma) y 'percentage' (el porcentaje de dominio).
const LanguageItem = ({ name, percentage }) => {
  // Retorna la estructura JSX que representa un elemento de idioma con su barra de progreso.
  return (
    // Contenedor principal para cada elemento de idioma, con un margen inferior.
    <div className="language-item mb-3">
      {/* Muestra el nombre del idioma. Estilos de Tailwind CSS para el tipo de display, tamaño de texto, color y margen. */}
      <span className="language-name block text-sm text-gray-700 mb-1">{name}</span>
      {/* Contenedor de la barra de progreso. Estilos de Tailwind CSS para el fondo, bordes redondeados, altura y desbordamiento oculto.
          También es 'relative' para posicionar el progreso y el valor porcentual dentro de él. */}
      <div className="progress-bar bg-gray-300 rounded-full h-2 overflow-hidden relative">
        {/* Barra de progreso de color amarillo. Su ancho se establece dinámicamente con la prop 'percentage'.
            Es 'absolute' para posicionarla en la esquina superior izquierda del contenedor. */}
        <div className="progress bg-yellow-500 h-full rounded-full absolute left-0 top-0" style={{ width: `${percentage}%` }}></div>
        {/* Muestra el valor porcentual. Se posiciona absolutamente dentro de la barra de progreso,
            centrado verticalmente y a la derecha. Estilos para color de texto y tamaño. */}
        <span className="progress-value absolute top-1/2 right-2 transform -translate-y-1/2 text-white text-xs">{percentage}%</span>
      </div>
    </div>
  );
};

// Exporta el componente LanguageItem para que pueda ser utilizado en otras partes de la aplicación.
export default LanguageItem;