// src/components/MainPage/Sidebar.jsx
import React from 'react';
import FilterUI from './FilterUI';

const Sidebar = ({ isActive, onClose }) => {
  return (
    <>
      <aside className={`fixed top-[7.5%] w-[320px] h-[92.5%] bg-main-sidebar-bg shadow-main-sidebar rounded-r-card z-40 px-sidebar-pad-x py-sidebar-pad-y overflow-y-auto transition-all duration-custom ${isActive ? 'left-0' : '-left-full'}`}>
        <FilterUI /> {/* The FilterUI component is rendered here */}
      </aside>
      <div className={`fixed inset-0 bg-black/20 z-30 transition-opacity duration-custom ${isActive ? 'block opacity-100' : 'hidden opacity-0'}`} onClick={onClose}></div>
    </>
  );
};

export default Sidebar;