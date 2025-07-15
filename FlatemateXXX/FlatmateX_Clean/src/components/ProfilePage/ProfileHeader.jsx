// src/components/ProfilePage/ProfileHeader.jsx
import React from 'react';

const ProfileHeader = ({ profile }) => {
  return (
    <div className="flex items-center gap-6 p-6 bg-profile-header-bg-light border-l-8 border-profile-header-border-green rounded-xl md:flex-col md:text-center md:gap-4 md:p-5">
      <img
        src={profile.image}
        alt="Profile Picture"
        className="w-36 h-36 rounded-full border-4 border-dashed border-profile-border-green object-cover md:w-32 md:h-32"
      />
      <div className="text-lg md:text-base">
        <h2 className="text-2xl font-bold mb-2">{profile.name}</h2>
        <p className="m-0">Age: {profile.age}</p>
        <p className="m-0">Gender: {profile.gender}</p>
        <p className="m-0">Occupation: {profile.occupation}</p>
      </div>
    </div>
  );
};

export default ProfileHeader;