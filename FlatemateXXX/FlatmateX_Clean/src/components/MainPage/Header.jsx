import React from 'react';
import SearchBar from '../AfterSearch/SearchBar';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Header = ({ toggleSidebar, searchTerm = '' }) => {
  const navigate = useNavigate();
  const { isLoggedIn, logout } = useAuth();

  const handleHomeClick = () => {
    navigate('/main-listings');
  };

  const handleProfileIconClick = () => {
    if (isLoggedIn) {
      logout();
      navigate('/');
    } else {
      navigate('/auth');
    }
  };

  const handleSearch = (city) => {
    if (city && city.trim()) {
      navigate(`/after-search/${encodeURIComponent(city.trim())}`);
    }
  };

  const handleRefresh = () => {
    navigate('/main-listings');
  };

  return (
    <header className="sticky top-0 z-50 h-[62px] flex items-center justify-between px-[32px] bg-[#4D2B14] shadow-md">
      {/* LEFT SIDE ICONS: Home & Filter */}
      <div className="flex items-center gap-4">
        <button
          className="icon-btn"
          title="Home"
          onClick={handleHomeClick}
        >
          <i className="fas fa-home"></i>
        </button>

        <button
          id="filterBtn"
          className="icon-btn"
          title="Filters"
          onClick={toggleSidebar}
        >
          <i className="fas fa-sliders"></i>
        </button>
      </div>

      {/* CENTER: Working SearchBar Component */}
      <div className="flex-1 flex justify-center">
        <SearchBar
          onSearch={handleSearch}
          onRefresh={handleRefresh}
          initialSearchTerm={searchTerm}
        />
      </div>

      {/* RIGHT SIDE: Profile Icon */}
      <div
        className="profile-circle cursor-pointer"
        onClick={handleProfileIconClick}
      >
        <i className="fas fa-user"></i>
      </div>
    </header>
  );
};

export default Header;
