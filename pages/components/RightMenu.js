// components/RightMenu.tsx
//'use client';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faLinkedinIn, 
  faGithub, 
  faTwitter, 
  faCodepen 
} from '@fortawesome/free-brands-svg-icons';

const socialLinks = [
    { icon: faLinkedinIn, url: '#', label: 'LinkedIn' },
    { icon: faGithub, url: '#', label: 'GitHub' },
    { icon: faTwitter, url: '#', label: 'Twitter' },
    { icon: faCodepen, url: '#', label: 'CodePen' }
  ];



const RightMenu = () => {
  return (
    //<div className="w-1/5 p-4 h-screen">
    <div className="w-full md:w-1/4  p-4 h-auto md:h-screen">
        {/* Sección de redes sociales */}

        <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-6">Conecta</h3>
      
      <ul className="flex flex-col items-center space-y-5">
        {socialLinks.map((link, index) => (
          <li key={index}>
            <a 
              href={link.url} 
              className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center
                         text-gray-600 hover:bg-yellow-400 hover:text-white transition-all
                         duration-300 shadow-sm hover:shadow-md"
              aria-label={link.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={link.icon} className="text-lg" />
            </a>
          </li>
        ))}
      </ul>



    </div>
  );
};

export default RightMenu;