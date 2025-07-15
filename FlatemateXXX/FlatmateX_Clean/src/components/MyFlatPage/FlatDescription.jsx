// src/components/MyFlatPage/FlatDescription.jsx
import React from 'react';

const FlatDescription = ({ description }) => {
  return (
    <div className="bg-myflat-description-bg p-6 rounded-lg border border-myflat-container-border shadow-sm mb-6">
      <h3 className="text-xl font-bold text-myflat-text-dark mb-4">Description</h3>
      <p className="text-myflat-text-light leading-relaxed whitespace-pre-line">
        {description}
      </p>
    </div>
  );
};

export default FlatDescription;