// src/components/MyFlatPage/FlatOwnerProfile.jsx
import React from 'react';

const FlatOwnerProfile = ({ owner }) => {
  return (
    <div className="flex items-center gap-6 p-6 bg-myflat-container-bg rounded-lg border border-myflat-container-border shadow-sm mb-6 sm:flex-col sm:text-center">
      <img
        src={owner.image}
        alt={`${owner.name}'s profile`}
        className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-md flex-shrink-0"
      />
      <div>
        <h2 className="text-2xl font-bold text-myflat-text-dark">{owner.name}</h2>
        <p className="text-lg text-myflat-text-light mt-1">My Flat Listing</p>
      </div>
    </div>
  );
};

export default FlatOwnerProfile;