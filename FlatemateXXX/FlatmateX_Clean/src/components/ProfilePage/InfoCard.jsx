// src/components/ProfilePage/InfoCard.jsx
import React from 'react';

const InfoCard = ({ children, type }) => {
  const baseClasses = "rounded-xl p-6 my-8 text-base md:my-6 md:p-4";
  let specificClasses = "";

  if (type === "notice") {
    specificClasses = "bg-profile-notice-bg border-l-8 border-profile-notice-border";
  } else if (type === "highlight") {
    specificClasses = "bg-profile-highlight-box-bg border-l-8 border-profile-highlight-box-border";
  }

  return (
    <div className={`${baseClasses} ${specificClasses}`}>
      {children}
    </div>
  );
};

export default InfoCard;