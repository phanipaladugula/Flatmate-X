import React from 'react';
import { Flatmate } from '../types';
import Tag from './Tag';

interface MateCardProps {
  mate: Flatmate;
}

const MateCard: React.FC<MateCardProps> = ({ mate }) => {
  return (
    <div className="bg-card-bg rounded-xl border-[1.2px] border-border flex items-center p-3 md:p-4 min-h-20 w-full">
      <img
        src={mate.img}
        alt="Profile"
        className="w-12 h-12 md:w-16 md:h-16 object-cover rounded-full mr-3 md:mr-4 bg-gray-200 flex-shrink-0"
      />
      <div className="flex-1">
        <div className="text-base md:text-lg font-bold text-name-dark mb-1">
          {mate.title}
        </div>
        <div className="flex flex-wrap gap-1 md:gap-2 mt-1">
          {mate.tags.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </div>
        <div 
          className="mt-1 text-sm text-text-color"
          dangerouslySetInnerHTML={{ __html: mate.desc.replace(/\n/g, '<br>') }}
        />
        <div className="text-sm text-subtext-color mt-1 flex items-center font-medium">
          <span className="text-lg mr-1">📍</span> {mate.loc}
        </div>
      </div>
    </div>
  );
};

export default MateCard;