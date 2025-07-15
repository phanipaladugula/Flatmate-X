// src/components/MyFlatPage/FlatImageGallery.jsx
import React from 'react';

const FlatImageGallery = ({ images }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
      {images.map((src, index) => (
        <div key={index} className="relative w-full h-48 sm:h-40 md:h-36 overflow-hidden rounded-lg shadow-md">
          <img
            src={src}
            alt={`Flat image ${index + 1}`}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      ))}
    </div>
  );
};

export default FlatImageGallery;