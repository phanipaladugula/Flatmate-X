// src/components/MyFlatPage/FlatDetailsSection.jsx
import React from 'react';
import DetailRow from './DetailRow';

const FlatDetailsSection = ({ flat }) => {
  return (
    <div className="bg-myflat-detail-bg p-6 rounded-lg border border-myflat-detail-border shadow-sm mb-6">
      <h3 className="text-xl font-bold text-myflat-text-dark mb-4">Flat Details</h3>
      <div className="space-y-2">
        <DetailRow label="Address" value={flat.address} />
        <DetailRow label="Monthly Rent" value={flat.rent} />
        <DetailRow label="Bedrooms" value={flat.bedrooms} />
        <DetailRow label="Bathrooms" value={flat.bathrooms} />
        <DetailRow label="Amenities" value={flat.amenities.join(', ')} />
      </div>
    </div>
  );
};

export default FlatDetailsSection;