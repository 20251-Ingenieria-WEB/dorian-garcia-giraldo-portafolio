/**
 * Componente EducationItem - Tarjeta de elemento educativo
 * 
 * Descripción:
 * Muestra información estructurada sobre un ítem educativo (carrera, curso, certificación)
 * en formato de tarjeta con diseño limpio y responsive.
 * 
 * Props:
 * @param {string} title - Título principal de la formación (ej: "Ingeniería de Sistemas")
 * @param {string} [degree] - Grado o tipo de formación (opcional)
 * @param {string} duration - Periodo de tiempo (ej: "2018 - 2022")
 * @param {string} description - Detalles adicionales sobre la formación
 */

const EducationItem = ({ title, degree, duration, description }) => {
  return (
    // Contenedor principal de la tarjeta educativa
    // bg-white: Fondo blanco
    // p-6: Padding de 24px
    // rounded-md: Bordes redondeados
    // shadow-sm: Sombra suave para efecto de elevación
    <div className="education-item bg-white p-6 rounded-md shadow-sm">
      
      {/* Título principal - Texto grande y semibold */}
      <h3 className="text-xl text-gray-700 font-semibold mb-2">{title}</h3>
      
      {/* Grado académico (condicional) - Texto en cursiva */}
      {/* Solo se muestra si se provee el prop 'degree' */}
      {degree && (
        <p className="degree text-gray-600 italic mb-1">
          {degree}
        </p>
      )}
      
      {/* Duración - Texto pequeño y color gris */}
      <p className="duration text-gray-500 text-sm mb-3">
        {duration}
      </p>
      
      {/* Descripción - Texto con interlineado relajado */}
      <p className="description text-gray-700 leading-relaxed text-sm">
        {description}
      </p>
    </div>
  );
};

export default EducationItem;

/**
 * Estilos y diseño:
 * - Jerarquía visual clara con tamaños de texto decrecientes
 * - Paleta de grises para diferenciar tipos de información
 * - Espaciado consistente (mb-*) para separación vertical
 * - Tipografía: 
 *   - Títulos en semibold (600)
 *   - Texto secundario en normal (400)
 * 
 * Uso recomendado:
 * <EducationItem 
 *   title="Ingeniería de Software"
 *   degree="Licenciatura"
 *   duration="2018-2022"
 *   description="Especialización en desarrollo web y bases de datos."
 * />
 * 
 * Accesibilidad:
 * - Estructura semántica con etiquetas <h3> para títulos
 * - Contraste adecuado entre texto y fondo
 * - Jerarquía de información clara
 */

/**
 * Posibles mejoras:
 * 1. Añadir iconos para tipos de formación
 * 2. Soporte para múltiples descripciones (array)
 * 3. Variantes de color mediante props
 * 4. Animación hover para mejor interactividad
 */