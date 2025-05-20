import React from 'react';

const PortfolioItem = ({ image, title, description, link }) => {
  return (
    <div className="portfolio-item bg-white rounded-md overflow-hidden shadow-md">
      <img src={image} alt={title} className="w-full h-auto block" />
      <div className="p-5">
        <h4 className="text-lg text-gray-700 font-semibold mb-2">{title}</h4>
        <p className="text-gray-600 text-sm leading-relaxed mb-3">{description}</p>
        <a href={link} className="block bg-gray-200 text-gray-700 text-center py-2 rounded-sm text-decoration-none transition-colors hover:bg-gray-300">View Project</a>
      </div>
    </div>
  );
};

export default PortfolioItem;