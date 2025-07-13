import React from 'react';

interface FlatImagesProps {
  images: string[];
}

const FlatImages: React.FC<FlatImagesProps> = ({ images }) => {
  return (
    <div className="flex gap-2 overflow-x-auto p-3 md:p-4 pt-3">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt="Flat"
          className="w-28 md:w-32 h-16 md:h-20 object-cover rounded-lg flex-shrink-0 bg-gray-200 transition-transform duration-200 hover:scale-105"
        />
      ))}
    </div>
  );
};

export default FlatImages;