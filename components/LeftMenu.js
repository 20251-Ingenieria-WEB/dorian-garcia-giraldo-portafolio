
// Importación de componentes de FontAwesome para los iconos
// FontAwesomeIcon: Componente para renderizar iconos
// faEnvelope, faPhone, faMapMarkerAlt: Iconos específicos a utilizar
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

/**
 * Componente LeftMenu - Panel lateral de información personal
 * Muestra perfil, información de contacto, habilidades y experiencia
 * Diseño responsive que se adapta a diferentes tamaños de pantalla
 */
const LeftMenu = () => {
  return (
    // Contenedor principal del menú
    // w-full: Ocupa todo el ancho en móviles
    // md:w-1/5: En pantallas medianas/grandes ocupa 1/5 del ancho
    // h-auto: Altura automática en móviles
    // md:h-screen: Altura completa en pantallas mayores
    <div className="w-full md:w-1/5 p-4 h-auto md:h-screen">
      
      {/* Sección de perfil - Contiene imagen, nombre y título profesional */}
      {/* text-center: Contenido centrado */}
      {/* mb-8: Margen inferior grande para separación visual */}
      <div className="profile text-center mb-8">
        {/* Contenedor de imagen de perfil */}
        {/* w-32 h-32: Tamaño fijo 32x32 unidades */}
        {/* rounded-full: Forma circular */}
        {/* overflow-hidden: Recorta la imagen para que se ajuste */}
        {/* shadow-md: Sombra media para efecto de elevación */}
        {/* border-4 border-white: Borde blanco grueso */}
        <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-md border-4 border-white mb-4">
          <img 
            src="/images/dor.jpg" 
            alt="Profile" 
            className="w-full h-full object-cover" // object-cover: Ajuste de imagen para cubrir el espacio
          />
        </div>
        {/* Nombre principal - Texto grande y en negrita */}
        <h1 className="text-xl font-bold text-gray-800 mb-1">Dorian García</h1>
        {/* Título profesional - Texto más pequeño y color gris */}
        <p className="text-sm text-gray-600">Frontend Developer and Xray-Technologist</p>
      </div>

      {/* Sección de información de contacto */}
      {/* mb-8: Margen inferior grande para separación */}
      <div className="info mb-8">
        {/* Título de sección */}
        <h2 className="text-lg font-semibold mb-4 text-gray-800">Contact</h2>
        
        {/* Elemento de correo electrónico */}
        {/* flex items-center: Alinea icono y texto verticalmente */}
        <p className="flex items-center text-sm text-gray-700 mb-3">
          <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-gray-600" /> {/* Icono de sobre */}
          dorian.garcia@udea.edu.co
        </p>
        
        {/* Elemento de teléfono - Misma estructura que correo */}
        <p className="flex items-center text-sm text-gray-700 mb-3">
          <FontAwesomeIcon icon={faPhone} className="mr-2 text-gray-600" /> {/* Icono de teléfono */}
          +57 3012567185
        </p>
        
        {/* Elemento de ubicación - Misma estructura que anteriores */}
        <p className="flex items-center text-sm text-gray-700 mb-3">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-gray-600" /> {/* Icono de ubicación */}
          City, Envigado
        </p>
      </div>

      {/* Sección de idiomas */}
      <div className="languages mb-8">
        {/* Título de sección */}
        <h2 className="text-lg font-semibold mb-4 text-gray-800">spoken languages</h2>
        
        {/* Barra de progreso para español */}
        <div className="mb-4">
          {/* Etiqueta del idioma */}
          <span className="block text-sm text-gray-700 mb-1">Spanish</span>
          {/* Contenedor de la barra de progreso */}
          <div className="bg-gray-200 rounded-full h-2 overflow-hidden">
            {/* Barra de progreso amarilla - w-full indica 100% */}
            <div className="bg-yellow-400 h-full rounded-full w-full"></div>
          </div>
        </div>
        
        {/* Barra de progreso para inglés */}
        <div className="mb-4">
          <span className="block text-sm text-gray-700 mb-1">English</span>
          <div className="bg-gray-200 rounded-full h-2 overflow-hidden">
            {/* w-3/4 indica 75% de progreso */}
            <div className="bg-yellow-400 h-full rounded-full w-3/4"></div>
          </div>
        </div>
      </div>

      {/* Sección de lenguajes de programación */}
      <div className="programming-languages">
        {/* Título de sección */}
        <h2 className="text-lg font-semibold mb-4 text-gray-800">programming-languages</h2>
        
        {/* Contenedor de la lista de tecnologías */}
        {/* space-y-3: Espaciado vertical entre elementos */}
        <div className="space-y-3">
          {/* Mapeo del array de tecnologías para renderizar dinámicamente */}
          {['JavaScript', 'React', 'Next.js', 'Tailwind CSS'].map((tech) => (
            // Cada elemento de la lista tiene una key única
            <div key={tech} className="flex items-center">
              {/* Punto amarillo como viñeta */}
              <div className="w-2 h-2 rounded-full bg-yellow-400 mr-2"></div>
              {/* Nombre de la tecnología */}
              <span className="text-gray-700">{tech}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Sección de experiencia en radiología */}
      {/* Misma estructura que la sección de lenguajes de programación */}
      <div className="programming-languages">
        <h2 className="text-lg font-semibold mb-4 text-gray-800">Xray experience</h2>
        <div className="space-y-3">
          {['CT', 'RMN', 'Conventional RX', 'mammography'].map((tech) => (
            <div key={tech} className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-yellow-400 mr-2"></div>
              <span className="text-gray-700">{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Exportación del componente como default
export default LeftMenu;