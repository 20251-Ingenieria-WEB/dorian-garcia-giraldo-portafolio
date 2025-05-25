/**
 * Página Principal de la Aplicación - Layout Base
 * 
 * Descripción:
 * Este componente representa la estructura principal de la aplicación web.
 * Organiza los tres componentes fundamentales en un layout responsive:
 * - LeftMenu: Panel izquierdo con información personal
 * - MainContents: Área central con el contenido principal
 * - RightMenu: Panel derecho con redes sociales
 * 
 * Responsive Behavior:
 * - Mobile: Apila los componentes verticalmente (flex-col)
 * - Desktop: Muestra en fila los tres paneles (md:flex-row)
 */

// Importación de componentes de layout
import LeftMenu from '../components/LeftMenu';      // Panel izquierdo (información personal)
import MainContents from '../components/MainContents'; // Contenido central principal
import RightMenu from '../components/RightMenu';    // Panel derecho (redes sociales)

/**
 * Componente Home
 * 
 * Funcionalidad:
 * - Sirve como contenedor principal de la aplicación
 * - Gestiona la disposición responsive de los paneles
 * - No contiene lógica de estado (componente presentacional)
 * 
 * Estructura:
 * - Contenedor flex que cambia de dirección según el viewport
 * - Renderiza los tres componentes principales en orden lógico
 */
export default function Home() {
  return (
    // Contenedor principal flex
    // Mobile: flex-col (dirección columna - apilado vertical)
    // Desktop: md:flex-row (dirección fila - tres columnas)
    // No se especifica altura para permitir crecimiento natural del contenido
    <div className="flex flex-col md:flex-row">
      
      {/* Panel Izquierdo - Información personal */}
      <LeftMenu />
      
      {/* Contenido Principal - Secciones del portafolio */}
      <MainContents />
      
      {/* Panel Derecho - Redes sociales */}
      <RightMenu />
    </div>
  );
}

/**
 * Notas adicionales:
 * - Este componente no maneja estado ni efectos (stateless)
 * - La responsividad se maneja completamente con Tailwind CSS
 * - El orden de los componentes en el DOM es importante para:
 *   - Mobile: LeftMenu -> MainContents -> RightMenu (vertical)
 *   - Desktop: Los tres paneles en fila manteniendo el orden visual
 * - No requiere props ya que es el componente raíz de la página
 */

/**
 * Posibles mejoras:
 * 1. Podría añadirse un componente Header/Navbar para móviles
 * 2. Implementar un footer condicional para mobile
 * 3. Añadir sistema de theming (dark/light mode)
 */