// src/components/ProfilePage/DescriptionBox.jsx
import React from 'react';

const DescriptionBox = ({ title, content }) => {
  return (
    <div className="my-8 p-5 text-base leading-relaxed bg-profile-desc-bg border-l-8 border-profile-desc-border rounded-lg md:my-6 md:p-4">
      <strong className="block mb-2">{title}</strong>
      {content.split('\n').map((paragraph, index) => (
        <p key={index} className="mb-2 last:mb-0">{paragraph}</p>
      ))}
    </div>
  );
};

export default DescriptionBox;