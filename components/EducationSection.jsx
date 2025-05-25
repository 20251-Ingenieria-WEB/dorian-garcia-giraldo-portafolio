// componente EducationSection.jsx
// Importa el componente EducationItem, que se utilizará para mostrar cada elemento de educación.
import EducationItem from './EducationItem';

// Define el componente funcional EducationSection.
const EducationSection = () => {
  // Retorna la estructura JSX que representa la sección de educación.
  return (
    // Sección principal de educación con estilos de Tailwind CSS para margen inferior.
    <section className="education mb-16">
      {/* Título de la sección de educación con estilos de Tailwind CSS para tamaño, color, peso de fuente y margen. */}
      <h2 className="text-2xl text-gray-800 font-bold mb-4 text-center">Education</h2>
      {/* Descripción de la sección con estilos de Tailwind CSS para color, espaciado de línea y margen. */}
      <p className="section-description text-gray-800 leading-relaxed mb-8">Realized Studies.</p>
      {/* Contenedor de la lista de elementos de educación. Utiliza flexbox para organizar los elementos en una columna con espacio entre ellos. */}
      <div className="education-list flex flex-col gap-6">
        {/* Componente EducationItem para la educación en Sena. */}
        <EducationItem
          title="Sena" // Título o institución de la educación.
          degree="X ray technology" // Grado o título obtenido.
          duration="2000 - 2003" // Duración de la educación.
          description="This degree qualifies professionals to perform and assist in medical diagnostic imaging procedures, such as X-rays, MRIs, and CT scans. Graduates are trained in patient care, equipment operation, image processing, and radiation safety protocols. They work closely with radiologists and healthcare teams to ensure accurate diagnostics while maintaining high-quality standards and patient safety.
." // Descripción detallada de la educación.
        />
        {/* Componente EducationItem para la educación en la Universidad de Antioquia. */}
        <EducationItem
          title="Universidad de Antioquia" // Título o institución de la educación.
          degree="Ingenieria de sistemas" // Grado o título obtenido.
          duration="2021 - 2025" // Duración de la educación.
          description="Relevant coursework: Algorithms, Data Structures, Web Development, Databases." // Descripción detallada de la educación.
        />
        {/* Componente EducationItem para el certificado de Bootcamp de Desarrollo IA. */}
        <EducationItem
          title="Certificate IA Development Bootcamp" // Título o institución del certificado.
          duration="2025" // Duración del certificado.
          description="Neural network training learning to solve specific problems affecting the community." // Descripción detallada del certificado.
        />
      </div>
    </section>
  );
};

// Exporta el componente EducationSection para que pueda ser utilizado en otras partes de la aplicación.
export default EducationSection;