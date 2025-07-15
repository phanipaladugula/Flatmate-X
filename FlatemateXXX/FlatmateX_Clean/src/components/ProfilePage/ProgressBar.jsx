// src/components/ProfilePage/ProgressBar.jsx
import React from 'react';

const ProgressBar = ({ label, percentage }) => {
  return (
    <div className="mb-2">
      <div className="flex justify-between text-base">
        <span className="font-bold">{label}</span>
        <span>{percentage}%</span>
      </div>
      <div className="bg-profile-progress-bar-bg h-2.5 rounded-full overflow-hidden mt-1">
        <div
          className="bg-profile-progress-bar-fill h-full rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;