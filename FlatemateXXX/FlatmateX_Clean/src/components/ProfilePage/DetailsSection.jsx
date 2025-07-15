// src/components/ProfilePage/DetailsSection.jsx
import React from 'react';
import ProgressBar from './ProgressBar';

const DetailsSection = ({ title, data, type }) => {
  return (
    <div className="flex-1 bg-profile-left-box-bg rounded-xl p-5 border-l-6 border-profile-left-box-border md:p-4">
      {type === 'details' && (
        <>
          {data.map((item, index) => (
            <div key={index} className="flex mb-2 text-base">
              <span className="font-bold min-w-[120px] text-left md:min-w-[100px]">{item.label}:</span>
              <span className="flex-1 text-left">{item.value}</span>
            </div>
          ))}
        </>
      )}

      {type === 'progress' && (
        <>
          {data.map((item, index) => (
            <ProgressBar key={index} label={item.label} percentage={item.percentage} />
          ))}
        </>
      )}
    </div>
  );
};

export default DetailsSection;