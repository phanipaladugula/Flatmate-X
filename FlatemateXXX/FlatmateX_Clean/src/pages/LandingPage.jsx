// src/pages/LandingPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import VideoBackground from '../components/ExplorePage/VideoBackground';
import LandingHeader from '../components/MainPage/Header'; // Reusing the Main Header
import LandingPageContent from '../layouts/LandingPageContent';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    console.log('Explore button clicked! Navigating to Main Listings.');
    navigate('/main-listings');
  };

  // Dummy handlers for Header (as it expects these props but they're not fully functional on landing page)
  const dummyToggleSidebar = () => console.log('Sidebar toggle (dummy)');
  const dummyOnSearch = (term) => console.log('Search (dummy):', term);
  const dummyOnProfileClick = () => {
    navigate('/auth'); // Navigate to Auth page if profile icon clicked on Landing page
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden font-inter">
      {/* VideoBackground spans full screen behind everything */}
      <VideoBackground src="/image.png" alt="The image" />

      {/* Header for Landing Page - position it like the main app header */}
      {/*
      <LandingHeader
        toggleSidebar={dummyToggleSidebar}
        onSearch={dummyOnSearch}
        searchTerm=""
        onProfileClick={dummyOnProfileClick}
      />
       */}
      {/* Landing Page Content - Centered (or aligned based on visual) and overlaying background */}
      {/* Updated alignment: Flex container to stretch across screen, content within it */}
      <div className="absolute inset-0 flex items-center justify-start p-12 text-white md:p-8 bg-black/40"> {/* Adjusted to stretch and provide overlay */}
        <LandingPageContent onExploreClick={handleExploreClick} />
      </div>
    </div>
  );
};

export default LandingPage;