// src/components/MyFlatPage/DetailRow.jsx
import React from 'react';

const DetailRow = ({ label, value }) => {
  return (
    <div className="flex items-start mb-2 last:mb-0">
      <span className="font-semibold text-myflat-text-dark w-32 flex-shrink-0">{label}:</span>
      <span className="text-myflat-text-light flex-1">{value}</span>
    </div>
  );
};

export default DetailRow;