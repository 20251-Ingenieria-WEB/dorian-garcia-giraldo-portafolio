import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const LeftMenu = () => {
  return (
    
    //<div className="w-1/5  p-4 h-screen">
     <div className="w-full md:w-1/5 p-4 h-auto md:h-screen">
        {/* Sección de perfil */}
        <div className="profile text-center mb-8">
        <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-md border-4 border-white mb-4">
          <img 
            src="/images/dor.jpg" 
            alt="Profile" 
            className="w-full h-full object-cover"
          />
          
        </div>
        <h1 className="text-xl font-bold text-gray-800 mb-1">Dorian García</h1>
        <p className="text-sm text-gray-600">Frontend Developer</p>
      </div>

       {/* Información de contacto */}
      <div className="info mb-8">
        <h2 className="text-lg font-semibold mb-4 text-gray-800">Contact</h2>
        <p className="flex items-center text-sm text-gray-700 mb-3">
          <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-gray-600" />
          dorian.garcia@udea.edu.co
        </p>
        <p className="flex items-center text-sm text-gray-700 mb-3">
          <FontAwesomeIcon icon={faPhone} className="mr-2 text-gray-600" />
          +57 3012567185
        </p>
        <p className="flex items-center text-sm text-gray-700 mb-3">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-gray-600" />
          City, Envigado
        </p>
      </div>

      {/* Idiomas */}
      <div className="languages mb-8">
        <h2 className="text-lg font-semibold mb-4 text-gray-800">
spoken languages</h2>
        <div className="mb-4">
          <span className="block text-sm text-gray-700 mb-1">Spanish</span>
          <div className="bg-gray-200 rounded-full h-2 overflow-hidden">
            <div className="bg-yellow-400 h-full rounded-full w-full"></div>
          </div>
        </div>
        <div className="mb-4">
          <span className="block text-sm text-gray-700 mb-1">English</span>
          <div className="bg-gray-200 rounded-full h-2 overflow-hidden">
            <div className="bg-yellow-400 h-full rounded-full w-3/4"></div>
          </div>
        </div>
      </div>

      {/* Habilidades técnicas */}
      <div className="programming-languages">
        <h2 className="text-lg font-semibold mb-4 text-gray-800">programming-languages</h2>
        <div className="space-y-3">
          {['JavaScript', 'React', 'Next.js', 'Tailwind CSS'].map((tech) => (
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

export default LeftMenu;