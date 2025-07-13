import React, { useState, useEffect, useRef } from 'react';
import { MapPin } from 'lucide-react';
import { cityNames } from '../data/mockData';

interface SearchBarProps {
  searchValue: string;
  onSearchChange: (value: string) => void;
  onReset: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchValue, onSearchChange, onReset }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node) &&
          inputRef.current && !inputRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setShowDropdown(false);
        inputRef.current?.blur();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const handleCitySelect = (city: string) => {
    onSearchChange(city);
    setShowDropdown(false);
  };

  const handleInputFocus = () => {
    setShowDropdown(true);
  };

  return (
    <div className="flex justify-center items-center gap-3 mb-8">
      <div className="relative w-full max-w-sm">
        <input
          ref={inputRef}
          type="text"
          value={searchValue}
          onChange={(e) => onSearchChange(e.target.value)}
          onFocus={handleInputFocus}
          placeholder="Search city..."
          className="w-full py-3 px-4 text-base rounded-lg border-[1.5px] border-border bg-card-bg/75 text-text-color transition-shadow duration-200 shadow-custom focus:outline-none focus:shadow-[0_2px_12px_rgba(180,138,86,0.2)]"
          autoComplete="off"
        />
        
        {showDropdown && (
          <div
            ref={dropdownRef}
            className="absolute top-[110%] left-0 w-full bg-white/85 border-[1.5px] border-border rounded-xl shadow-custom-xl p-2 z-10 max-h-80 overflow-y-auto"
          >
            {cityNames.map((city) => (
              <button
                key={city}
                onClick={() => handleCitySelect(city)}
                className="w-full text-left py-2 px-4 rounded-lg text-base text-name-dark cursor-pointer bg-transparent border-none hover:bg-[#f7ecd7] focus:bg-[#f7ecd7] focus:outline-none"
              >
                {city}
              </button>
            ))}
          </div>
        )}
      </div>
      
      <button
        onClick={onReset}
        className="bg-gradient-to-br from-[#f7ecd7] via-[#f7ecd7] to-tag-bg border-[1.5px] border-border rounded-full shadow-[0_2px_8px_rgba(180,138,86,0.12)] p-2 cursor-pointer flex items-center justify-center transition-all duration-250 outline-none w-10 h-10 text-highlight hover:bg-gradient-to-br hover:from-[#f9f5ee] hover:to-tag-bg hover:shadow-[0_6px_24px_rgba(180,138,86,0.18)] hover:scale-110 active:scale-95 md:w-11 md:h-11"
        aria-label="Reset search"
      >
        <MapPin className="w-5 h-5 md:w-6 md:h-6 transition-transform duration-300" />
      </button>
    </div>
  );
};

export default SearchBar;