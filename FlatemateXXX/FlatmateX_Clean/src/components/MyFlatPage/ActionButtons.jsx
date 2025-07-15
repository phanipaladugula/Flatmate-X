// src/components/MyFlatPage/ActionButtons.jsx
import React from 'react';

const ActionButtons = ({ onEdit, onDelete }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mt-8">
      <button
        onClick={onEdit}
        className="flex-1 px-6 py-3 bg-myflat-button-green text-white font-semibold rounded-lg shadow-md hover:bg-myflat-button-green-dark transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-myflat-button-green-dark"
      >
        Edit Flat Details
      </button>
      <button
        onClick={onDelete}
        className="flex-1 px-6 py-3 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-700"
      >
        Delete Flat Listing
      </button>
    </div>
  );
};

export default ActionButtons;