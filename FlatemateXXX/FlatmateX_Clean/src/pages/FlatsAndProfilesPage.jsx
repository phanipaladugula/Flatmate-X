// src/pages/FlatsAndProfilesPage.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

import MainHeader from '../components/MainPage/Header';
import Sidebar from '../components/MainPage/Sidebar';
import FlatsAndProfilesContent from '../layouts/FlatsAndProfilesContent';
import MainFooter from '../components/MainPage/Footer';
import SingleImageFlatCard from '../components/MainPage/SingleImageFlatCard';
import ProfileCard from '../components/MainPage/ProfileCard';
import { flatData, profileData } from '../data/flatsData';

const FlatsAndProfilesPage = () => {
  const navigate = useNavigate();
  const { isLoggedIn, storeLastClickedProfile } = useAuth();

  const [isSidebarActive, setIsSidebarActive] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [showFlatsForRent, setShowFlatsForRent] = useState(false);
  const [displayedProfileData, setDisplayedProfileData] = useState(profileData);

  const toggleSidebar = () => setIsSidebarActive(!isSidebarActive);

  const handleSearch = (term) => {
    setSearchTerm(term);
    setShowFlatsForRent(true);

    const lowercasedTerm = term.toLowerCase();
    if (term && lowercasedTerm.trim() !== '') {
      const filteredProfiles = profileData.filter(profile =>
        profile.name.toLowerCase().includes(lowercasedTerm) ||
        (Array.isArray(profile.traits) && profile.traits.some(trait => trait.toLowerCase().includes(lowercasedTerm))) ||
        (Array.isArray(profile.wants) && profile.wants.some(want => want.toLowerCase().includes(lowercasedTerm)))
      );
      setDisplayedProfileData(filteredProfiles);
    } else {
      setDisplayedProfileData(profileData);
    }
  };

  useEffect(() => {
    const lowercasedTerm = searchTerm ? searchTerm.toLowerCase() : '';
    if (!searchTerm || lowercasedTerm.trim() === '') {
      setDisplayedProfileData(profileData);
    }
  }, [searchTerm]);

  const handleProfileOrFlatCardClick = (id, type) => {
    if (isLoggedIn) {
      if (type === 'flat') {
        navigate(`/flat/${id}`);
      } else {
        navigate(`/profile-view/${id}`);
      }
    } else {
      storeLastClickedProfile(id);
      navigate('/auth');
    }
  };

  const handleHeaderProfileClick = () => {
    navigate(isLoggedIn ? '/profile-view/me' : '/auth');
  };

  return (
    <div className="min-h-screen flex flex-col font-segoe-ui text-main-page-primary">
      <MainHeader
        toggleSidebar={toggleSidebar}
        onSearch={handleSearch}
        searchTerm={searchTerm}
        onProfileClick={handleHeaderProfileClick}
      />

      <Sidebar isActive={isSidebarActive} onClose={toggleSidebar} />

      <main className="flex-1 flex flex-col max-w-[1200px] mx-auto w-full px-[18px] pb-[42px] mt-[38px]">
        <section className="mb-[38px]">
          <h2 className="text-2xl font-bold mb-4 text-main-dark-brown">Featured Locations</h2>
          <div className="flex flex-nowrap overflow-x-auto gap-[28px] pb-[15px] hide-scrollbar">
            {flatData.map((flat) => (
              <SingleImageFlatCard
                key={flat.id}
                flat={flat}
                onClick={() => handleProfileOrFlatCardClick(flat.id, 'flat')}
              />
            ))}
          </div>
        </section>

        <section className="mb-[38px]">
          <h2 className="text-2xl font-bold mb-4 text-main-dark-brown">Meet Your Future Flatmate</h2>
          {displayedProfileData.length > 0 ? (
            <div className="grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-6">
              {displayedProfileData.map((profile) => (
                <ProfileCard
                  key={profile.id}
                  profile={{
                    ...profile,
                    image: "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=700&auto=format&fit=crop&q=60"
                  }}
                  onClick={() => handleProfileOrFlatCardClick(profile.id, 'profile')}
                />
              ))}
            </div>
          ) : (
            <p className="p-8 text-center text-gray-600 bg-white rounded-lg shadow-md">
              No flatmates found for "{searchTerm}".
            </p>
          )}
        </section>

        <div className="flex-1 flex flex-col gap-[38px]">
          {showFlatsForRent ? (
            <FlatsAndProfilesContent
              searchedCity={searchTerm}
              onFlatCardClick={(id) => handleProfileOrFlatCardClick(id, 'flat')}
            />
          ) : (
            <div className="p-8 text-center text-gray-600 bg-white rounded-lg shadow-md mb-[38px]">
              <p className="text-lg mb-4">Please use the search bar above to find flats and flatmates in your desired city.</p>
              <p className="text-sm">Click the filter icon to open filters.</p>
            </div>
          )}
        </div>
      </main>

      <MainFooter />
    </div>
  );
};

export default FlatsAndProfilesPage;
