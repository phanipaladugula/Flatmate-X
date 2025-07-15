// src/components/ExplorePage/VideoBackground.jsx
import React from 'react';

const VideoBackground = ({ src, alt }) => {
  return (
    <div className="fixed inset-0 w-full h-full -z-10">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default VideoBackground;