// src/components/MainPage/SidebarCheckboxGroup.jsx
import React from 'react';

const SidebarCheckboxGroup = ({ label, iconClass, options, selected, onChange }) => {
  return (
    <div className="mb-sidebar-section-mb bg-main-section-bg-opacity rounded-[12px] p-sidebar-section-pad shadow-main-section-shadow">
      <label className="flex items-center font-semibold text-sidebar-label mb-sidebar-label-mb text-main-dark-brown gap-sidebar-label-gap">
        <i className={iconClass}></i> {label}
      </label>
      <div className="ml-[7px]">
        {options.map((option) => (
          <label key={option} className="flex items-center font-normal mb-[3px] text-sidebar-category-list gap-sidebar-label-gap cursor-pointer text-main-dark-brown">
            <input
              type="checkbox"
              className="accent-main-dark-brown size-[16px] mr-sidebar-checkbox-mr"
              checked={selected.includes(option)}
              onChange={() => onChange(option)}
            />
            {option}
          </label>
        ))}
      </div>
    </div>
  );
};

export default SidebarCheckboxGroup;