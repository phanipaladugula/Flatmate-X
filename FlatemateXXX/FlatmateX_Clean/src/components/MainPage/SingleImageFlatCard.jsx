// src/components/MainPage/SingleImageFlatCard.jsx
import React from 'react';

const SingleImageFlatCard = ({ flat, onClick }) => {
  return (
    <div
      className="relative flex-none w-[150px] min-h-[100px] aspect-[4/3] rounded-card shadow-main-custom overflow-hidden cursor-pointer flex items-end sm:flex-0 sm:basis-[40vw] sm:min-h-auto"
      onClick={() => onClick(flat.id)}
    >
      <img src={flat.image} alt="Flat image" className="absolute inset-0 w-full h-full object-cover rounded-card z-10" />
      <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-black/80 to-black/0 rounded-b-card z-20"></div>
      <div className="absolute inset-x-0 bottom-0 z-30 px-[10px] py-[8px] text-white font-bold text-[0.8rem] leading-[1.2] tracking-[0.8px] text-shadow whitespace-pre-line rounded-b-card pointer-events-none sm:text-[0.7rem] sm:p-2">
        {flat.location}
      </div>
    </div>
  );
};

export default SingleImageFlatCard;