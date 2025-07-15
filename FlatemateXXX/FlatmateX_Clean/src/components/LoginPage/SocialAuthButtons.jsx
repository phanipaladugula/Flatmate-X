// src/components/LoginPage/SocialAuthButtons.jsx
import React from 'react';

const SocialAuthButtons = () => {
  return (
    <div className="flex space-x-4 mb-6">
      <button className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-300">
        <img src="https://cdn-icons-png.flaticon.com/128/2168/2168281.png" alt="Facebook" className="w-14 h-14 rounded-full"></img>
      </button>
      <button className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-300">
        <img src="https://cdn-icons-png.flaticon.com/128/10110/10110386.png" alt="Google" className="w-14 h-14 rounded-full"></img>
      </button>
      <button className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-300">
        <img src="https://cdn-icons-png.flaticon.com/128/1384/1384014.png" alt="LinkedIn" className="w-14 h-14 rounded-full"></img>
      </button>
    </div>
  );
};

export default SocialAuthButtons;