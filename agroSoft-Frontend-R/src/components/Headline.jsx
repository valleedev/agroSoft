import React from 'react';

const Headline = ({ 
  title, 
  description, 
  buttonText, 
  onButtonClick, 
  iconClass = 'fas fa-plus',
  showButton = true 
}) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <div>
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
      {showButton && (
        <button
          onClick={onButtonClick}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2"
        >
          <i className={iconClass}></i>
          <span>{buttonText}</span>
        </button>
      )}
    </div>
  );
};

export default Headline;
