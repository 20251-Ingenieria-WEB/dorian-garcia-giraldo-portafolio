//Componente RightMenu.js

// Importación de componentes de FontAwesome para los iconos de redes sociales
// FontAwesomeIcon: Componente para renderizar iconos
// Iconos de marcas (brands) para redes sociales:
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faLinkedinIn,  // Icono de LinkedIn
  faGithub,      // Icono de GitHub
  faTwitter,     // Icono de Twitter
  faCodepen      // Icono de CodePen
} from '@fortawesome/free-brands-svg-icons';

/**
 * Array de objetos con información de redes sociales
 * Cada objeto contiene:
 * - icon: Icono de FontAwesome a mostrar
 * - url: Enlace a la red social
 * - label: Texto descriptivo para accesibilidad (aria-label)
 */
const socialLinks = [
    { 
      icon: faLinkedinIn, 
      url: 'https://linkedin.com/in/dorian-garcia-8a9451210', 
      label: 'LinkedIn' 
    },
    { 
      icon: faGithub, 
      url: 'https://github.com/20251-Ingenieria-WEB/dorian-garcia-giraldo-portafolio', 
      label: 'GitHub' 
    },
    { 
      icon: faTwitter, 
      url: '#',  // Enlace placeholder (debería ser reemplazado por uno real)
      label: 'Twitter' 
    },
    { 
      icon: faCodepen, 
      url: '#',  // Enlace placeholder (debería ser reemplazado por uno real)
      label: 'CodePen' 
    }
  ];

/**
 * Componente RightMenu - Panel lateral de redes sociales
 * Muestra iconos interactivos para redes sociales profesionales
 * Diseño responsive que se adapta a diferentes tamaños de pantalla
 */
const RightMenu = () => {
  return (
    // Contenedor principal del menú derecho
    // w-full: Ocupa todo el ancho en móviles
    // md:w-1/4: En pantallas medianas/grandes ocupa 1/4 del ancho
    // h-auto: Altura automática en móviles
    // md:h-screen: Altura completa en pantallas mayores
    <div className="w-full md:w-1/4 p-4 h-auto md:h-screen">
        {/* Sección de redes sociales */}

        {/* Título de sección */}
        {/* text-xs: Texto extra pequeño */}
        {/* uppercase: Texto en mayúsculas */}
        {/* tracking-wider: Espaciado entre letras aumentado */}
        {/* mb-6: Margen inferior para separación */}
        <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-6">
          Conecta
        </h3>
      
      {/* Lista de redes sociales */}
      {/* flex flex-col: Disposición en columna */}
      {/* items-center: Centrado horizontal */}
      {/* space-y-5: Espaciado vertical entre elementos */}
      <ul className="flex flex-col items-center space-y-5">
        {/* Mapeo del array socialLinks para renderizar cada red social */}
        {socialLinks.map((link, index) => (
          <li key={index}>
            {/* Enlace a red social */}
            {/* w-10 h-10: Tamaño fijo 10x10 unidades (40x40px aprox) */}
            {/* rounded-full: Forma circular */}
            {/* bg-gray-100: Fondo gris claro */}
            {/* flex items-center justify-center: Centrado del icono */}
            {/* hover:bg-yellow-400: Efecto hover amarillo */}
            {/* transition-all duration-300: Transición suave de animaciones */}
            {/* shadow-sm/hover:shadow-md: Efectos de sombra */}
            <a 
              href={link.url} 
              className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center
                         text-gray-600 hover:bg-yellow-400 hover:text-white transition-all
                         duration-300 shadow-sm hover:shadow-md"
              aria-label={link.label}  // Texto accesible para screen readers
              target="_blank"         // Abre enlace en nueva pestaña
              rel="noopener noreferrer"  // Seguridad para target="_blank"
            >
              {/* Icono de la red social */}
              <FontAwesomeIcon icon={link.icon} className="text-lg" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Exportación del componente como default para su uso en otros archivos
export default RightMenu;