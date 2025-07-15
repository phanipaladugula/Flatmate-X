// src/components/ExplorePage/ExploreButton.jsx
import React from 'react';

const ExploreButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="mt-10 px-8 py-3 text-base font-medium text-white bg-transparent border border-white rounded-full transition-colors duration-300 hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-white"
    >
      Explore
    </button>
  );
};

export default ExploreButton;