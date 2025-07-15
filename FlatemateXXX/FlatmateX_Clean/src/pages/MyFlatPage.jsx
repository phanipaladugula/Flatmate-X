// src/pages/MyFlatPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

import FlatOwnerProfile from '../components/MyFlatPage/FlatOwnerProfile';
import FlatDetailsSection from '../components/MyFlatPage/FlatDetailsSection';
import FlatDescription from '../components/MyFlatPage/FlatDescription';
import FlatImageGallery from '../components/MyFlatPage/FlatImageGallery';
import ActionButtons from '../components/MyFlatPage/ActionButtons';
import MainHeader from '../components/MainPage/Header';
import MainFooter from '../components/MainPage/Footer';
import { myFlatData } from '../data/myFlatData';

const MyFlatPage = () => {
  const { owner, flat } = myFlatData;
  const navigate = useNavigate();
  const { isLoggedIn, logout } = useAuth();

  // This page is protected by PrivateRoute, so isLoggedIn should be true here.
  // if (!isLoggedIn) { navigate('/auth'); return null; } // PrivateRoute handles this now.

  const handleEditFlat = () => {
    console.log('Edit Flat button clicked!');
    navigate('/upload-flat');
  };

  const handleDeleteFlat = () => {
    console.log('Delete Flat button clicked!');
    if (window.confirm('Are you sure you want to delete this flat listing?')) {
      alert('Flat listing deleted!');
      // After deletion, navigate to a safe page (e.g., main listings)
      navigate('/main-listings');
    }
  };

  // Dummy/Real handlers for Header on MyFlatPage
  const dummyToggleSidebar = () => console.log('Sidebar toggle (dummy)');
  const dummyOnSearch = (term) => console.log('Search (dummy):', term);
  const handleHeaderProfileClick = () => {
    logout(); // Log out if profile icon clicked
    navigate('/'); // Redirect to landing page after logout
  };

  return (
    <div className="min-h-screen flex flex-col font-segoe-ui text-gray-800 bg-app-background bg-cover bg-center bg-fixed">
      {/* Reusing the Main Header for consistency */}
      <MainHeader
        toggleSidebar={dummyToggleSidebar}
        onSearch={dummyOnSearch}
        searchTerm=""
        onProfileClick={handleHeaderProfileClick}
      />

      <div className="container mx-auto max-w-4xl p-6 my-8 bg-white rounded-lg shadow-lg flex-grow">
        <FlatOwnerProfile owner={owner} />
        <FlatDetailsSection flat={flat} />
        <FlatDescription description={flat.description} />
        <FlatImageGallery images={flat.images} />
        <ActionButtons onEdit={handleEditFlat} onDelete={handleDeleteFlat} />
      </div>

      {/* Reusing the Main Footer for consistency */}
      <MainFooter />
    </div>
  );
};

export default MyFlatPage;