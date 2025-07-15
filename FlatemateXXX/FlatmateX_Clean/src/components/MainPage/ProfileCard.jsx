// src/components/MainPage/ProfileCard.jsx
import React from 'react';

const ProfileCard = ({ profile, onClick }) => {
  return (
    <div
      className="relative flex flex-col justify-end w-full max-w-[180px] aspect-square rounded-profile-card shadow-main-custom overflow-hidden mx-auto cursor-pointer sm:max-w-[160px]"
      onClick={() => onClick(profile.id)}
    >
      <img src={profile.image} alt={profile.name} className="absolute inset-0 w-full h-full object-cover rounded-profile-card z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent rounded-profile-card z-20"></div>
      <div className="absolute inset-x-0 bottom-0 z-30 px-[10px] pt-[60px] pb-[10px] text-white text-[0.65rem] leading-[1.1] shadow-md rounded-b-profile-card flex flex-row justify-between items-start sm:p-1 sm:pt-8">
        <div className="flex-1 pr-profile-card-col-pad text-left sm:text-center sm:px-0">
          <h4 className="font-bold text-[0.9em] uppercase text-white tracking-wide border-b border-white pb-0.5 mb-0.5 w-fit whitespace-nowrap mx-auto sm:mx-0">
            {profile.name}
          </h4>
          <ul className="list-disc pl-[1em] m-0 text-white text-[1em] font-medium sm:list-none sm:p-0 sm:text-center sm:text-[0.9em] whitespace-normal">
            {profile.traits.map((trait, index) => (
              <li key={index} className="mb-[1px] text-[0.9em]">{trait}</li>
            ))}
          </ul>
        </div>
        <div className="flex-1 pl-profile-card-col-pad text-left sm:text-center sm:px-0">
          <h4 className="font-bold text-[1em] uppercase text-white tracking-[0.6px] mb-0.5 text-left sm:text-center sm:text-[0.9em]">WANT</h4>
          <ul className="list-none p-0 m-0 text-left text-white text-[1em] font-medium sm:text-center sm:text-[0.9em] whitespace-normal">
            {profile.wants.map((want, index) => (
              <li key={index} className="mb-[1px] text-[0.9em]">{want}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;