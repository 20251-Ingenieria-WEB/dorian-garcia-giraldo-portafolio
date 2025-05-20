import React from 'react';

const LanguageItem = ({ name, percentage }) => {
  return (
    <div className="language-item mb-3">
      <span className="language-name block text-sm text-gray-700 mb-1">{name}</span>
      <div className="progress-bar bg-gray-300 rounded-full h-2 overflow-hidden relative">
        <div className="progress bg-yellow-500 h-full rounded-full absolute left-0 top-0" style={{ width: `${percentage}%` }}></div>
        <span className="progress-value absolute top-1/2 right-2 transform -translate-y-1/2 text-white text-xs">{percentage}%</span>
      </div>
    </div>
  );
};

export default LanguageItem;