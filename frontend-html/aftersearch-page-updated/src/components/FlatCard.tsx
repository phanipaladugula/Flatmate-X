import React from 'react';
import { Flat } from '../types';
import Tag from './Tag';
import MateCard from './MateCard';
import FlatImages from './FlatImages';

interface FlatCardProps {
  flat: Flat;
}

const FlatCard: React.FC<FlatCardProps> = ({ flat }) => {
  return (
    <div className="mb-2">
      <div className="bg-card-bg rounded-xl shadow-custom border-[1.5px] border-border overflow-hidden flex flex-col min-h-32 relative transition-all duration-200 text-text-color hover:shadow-custom-lg hover:bg-[#f9f5ee]">
        <FlatImages images={flat.images} />
        
        <div className="p-4 md:p-5 flex-1 flex flex-col justify-center">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg md:text-xl font-bold text-name-dark m-0">
              {flat.title}
            </h2>
            <span className="bg-highlight text-white py-1 px-3 md:py-2 md:px-4 rounded-full text-sm md:text-base font-medium whitespace-nowrap">
              ₹{flat.price}/mo
            </span>
          </div>
          
          <div className="flex flex-wrap gap-2 mt-2 mb-3">
            {flat.tags.map((tag, index) => (
              <Tag key={index}>{tag}</Tag>
            ))}
          </div>
          
          <p className="text-sm md:text-base mb-2">{flat.desc}</p>
          
          <p className="text-sm md:text-base text-subtext-color mt-2 flex items-center font-medium">
            <span className="text-lg md:text-xl mr-1">📍</span> {flat.loc}
          </p>
        </div>
      </div>

      {flat.mates && flat.mates.length > 0 && (
        <div className="bg-transparent p-2 ml-6 md:ml-10 flex flex-col gap-3 mt-3">
          {flat.mates.map((mate, index) => (
            <MateCard key={index} mate={mate} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FlatCard;