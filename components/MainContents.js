// components/MainContents.js

/**
 * Importación de componentes de sección:
 * - HeroSection: Componente principal de presentación/banner
 * - MyKnowledgeSection: Componente que muestra habilidades/conocimientos
 * - EducationSection: Componente de formación académica
 * - PortfolioSection: Componente que muestra proyectos destacados
 */
import HeroSection from './HeroSection';
import MyKnowledgeSection from './MyKnowledgeSection';
import EducationSection from './EducationSection';
import PortfolioSection from './PortfolioSection';

/**
 * Componente MainContents - Contenedor principal del contenido
 * 
 * Funcionalidad:
 * - Organiza las secciones principales del portafolio en un layout vertical
 * - Implementa scroll vertical para contenido extenso
 * - Diseño responsive para adaptarse a diferentes dispositivos
 * 
 * Estructura:
 * - Contenedor principal que envuelve todas las secciones
 * - Sistema de padding y espaciado consistente
 * - Fondo claro (bg-gray-50) para mejor legibilidad
 */
const MainContents = () => {
  return (
    // Contenedor principal
    // Diseño responsive:
    // - Mobile (default): w-full (100% ancho), p-4 (padding 16px)
    // - Desktop (md:): md:w-3/5 (60% ancho), md:p-6 (padding 24px)
    // Altura:
    // - Mobile: h-auto (altura automática), min-h-[50vh] (altura mínima del 50% del viewport)
    // - Desktop: md:h-screen (altura completa del viewport)
    // overflow-y-auto: Habilita scroll vertical si el contenido excede la altura
    // bg-gray-50: Fondo gris claro para mejor contraste visual
    <div className="w-full md:w-3/5 bg-gray-50 p-4 md:p-6 h-auto min-h-[50vh] md:h-screen overflow-y-auto">
        {/* Sección Hero - Banner principal */}
        <HeroSection />

        {/* Sección de Conocimientos - Habilidades técnicas */}
        <MyKnowledgeSection />

        {/* Sección de Educación - Formación académica */}
        <EducationSection />

        {/* Sección de Portafolio - Proyectos destacados */}
        <PortfolioSection />
    </div>
  );
};

// Exportación por defecto para uso en otros componentes
export default MainContents;