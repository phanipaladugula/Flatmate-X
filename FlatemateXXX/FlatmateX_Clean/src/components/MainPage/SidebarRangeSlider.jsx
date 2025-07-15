// src/components/MainPage/SidebarRangeSlider.jsx
import React from 'react';

const SidebarRangeSlider = ({ label, iconClass, min, max, value, onChange }) => {
  return (
    <div className="mb-sidebar-section-mb bg-main-section-bg-opacity rounded-[12px] p-sidebar-section-pad shadow-main-section-shadow">
      <label className="flex items-center font-semibold text-sidebar-label mb-sidebar-label-mb text-main-dark-brown gap-sidebar-label-gap">
        <i className={iconClass}></i> {label}: <span className="font-normal" id="ageValue">{value}</span>
      </label>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value))}
        className="w-full h-[8px] bg-gray-300 rounded-[4px] outline-none opacity-70 transition-opacity duration-200 mt-sidebar-select-mt
                   [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-[20px] [&::-webkit-slider-thumb]:h-[20px] [&::-webkit-slider-thumb]:bg-main-dark-brown [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-grab [&::-webkit-slider-thumb]:shadow-md
                   [&::-moz-range-thumb]:w-[20px] [&::-moz-range-thumb]:h-[20px] [&::-moz-range-thumb]:bg-main-dark-brown [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:cursor-grab [&::-moz-range-thumb]:shadow-md
                   hover:opacity-100"
      />
    </div>
  );
};

export default SidebarRangeSlider;