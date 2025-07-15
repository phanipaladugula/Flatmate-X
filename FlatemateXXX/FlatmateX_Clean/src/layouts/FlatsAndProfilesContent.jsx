// src/layouts/FlatsAndProfilesContent.jsx
import React, { useState, useEffect } from 'react';
import ProfileCard from '../components/MainPage/ProfileCard';
import ResultsGrid from '../components/AfterSearch/ResultsGrid';
import { profileData, flatListingsData } from '../data/flatsData';

const FlatsAndProfilesContent = ({ searchedCity, showFlatsForRent, onFlatCardClick, onProfileCardClick }) => {
  const [displayedFlatListings, setDisplayedFlatListings] = useState([]);
  const [displayedProfileData, setDisplayedProfileData] = useState(profileData); // Profiles always visible by default

  useEffect(() => {
    // Filter profiles always based on search term if available
    const lowercasedCity = searchedCity ? searchedCity.toLowerCase() : '';
    const filteredProfiles = profileData.filter(profile =>
        profile.name.toLowerCase().includes(lowercasedCity) ||
        profile.traits.some(trait => trait.toLowerCase().includes(lowercasedCity)) ||
        profile.wants.some(want => want.toLowerCase().includes(lowercasedCity))
    );
    setDisplayedProfileData(searchedCity ? filteredProfiles : profileData); // If search, show filtered, else show all

    // Filter flats only if showFlatsForRent is true and a search term exists
    if (showFlatsForRent && searchedCity) {
      const filteredFlats = flatListingsData.filter(flat =>
        flat.loc.toLowerCase().includes(lowercasedCity) ||
        flat.title.toLowerCase().includes(lowercasedCity) ||
        flat.desc.toLowerCase().includes(lowercasedCity)
      );
      setDisplayedFlatListings(filteredFlats);
    } else {
      setDisplayedFlatListings([]); // Hide flats if no search or showFlatsForRent is false
    }
  }, [searchedCity, showFlatsForRent]); // Depend on both for re-evaluation

  return (
    <div className="flex flex-col gap-main-content-gap flex-grow font-segoe-ui">
      {/* Meet Your Future Flatmate (Profile Grid) - ALWAYS VISIBLE */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-main-dark-brown">Meet Your Future Flatmate</h2>
        {displayedProfileData.length > 0 ? (
          <div className="grid grid-cols-auto-fit-200 gap-profile-grid-gap justify-center">
            {displayedProfileData.map((profile) => (
              <ProfileCard key={profile.id} profile={profile} onClick={onProfileCardClick} />
            ))}
          </div>
        ) : (
          <p className="text-gray-600 p-4 bg-gray-50 rounded-lg">No flatmates found for "{searchedCity}". Try another search term or city.</p>
        )}
      </section>

      {/* Flats for Rent - CONDITIONALLY RENDERED AFTER SEARCH */}
      {showFlatsForRent && (
        <section className="mb-8"> {/* Added margin-bottom for consistency */}
          <h2 className="text-2xl font-bold mb-4 text-main-dark-brown">Flats for Rent</h2>
          {displayedFlatListings.length > 0 ? (
            <ResultsGrid data={displayedFlatListings} onFlatCardClick={onFlatCardClick} />
          ) : (
            <p className="text-gray-600 p-4 bg-gray-50 rounded-lg">No flats found for "{searchedCity}". Try another search term or city.</p>
          )}
        </section>
      )}
    </div>
  );
};

export default FlatsAndProfilesContent;