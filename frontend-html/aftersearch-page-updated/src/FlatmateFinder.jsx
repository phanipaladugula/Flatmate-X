import React, { useState, useMemo, useEffect, useRef } from 'react';
import { MapPin } from 'lucide-react';

// Mock data
const cityNames = [
  "Ahmedabad", "Bengaluru", "Chandigarh", "Chennai", "Delhi", "Hyderabad",
  "Indore", "Jaipur", "Kolkata", "Lucknow", "Mumbai", "Noida", "Pune", "Surat",
].sort((a, b) => a.localeCompare(b));

const flatsData = [
  {
    type: 'flat',
    title: 'Studio Flat near Indiranagar',
    price: 14000,
    images: [
      'https://i.pinimg.com/736x/5c/64/80/5c648081ffac417b33c713b606f6722a.jpg',
      'https://i.pinimg.com/736x/07/76/81/07768185a8902b65dcca15c507eadcae.jpg',
      'https://i.pinimg.com/736x/94/21/c7/9421c702fcfa71059fa8e56cb79a3b63.jpg'
    ],
    desc: 'Well-lit studio with Wi-Fi, AC, and washing machine.',
    loc: 'Indiranagar, Bengaluru',
    tags: ['AC', 'Wi-Fi', 'Washing Machine'],
    mates: [
      {
        title: 'Arjun Mehta',
        habits: ['Non-Smoker'],
        desc: '22 • Male • M.Des Interior\nInto gaming and late-night conversations.',
        loc: 'Indiranagar, Bengaluru',
        img: 'https://randomuser.me/api/portraits/men/47.jpg',
        tags: ['Smoker']
      },
      {
        title: 'Ananya Joshi',
        habits: ['Non-Smoker'],
        desc: '25 • Female • BA Psychology\nLoves pets, especially cats.',
        loc: 'Indiranagar, Bengaluru',
        img: 'https://randomuser.me/api/portraits/women/30.jpg',
        tags: ['Smoker']
      }
    ]
  },
  {
    type: 'flat',
    title: '2BHK in South Delhi',
    price: 16000,
    images: [
      'https://i.pinimg.com/736x/7e/20/89/7e2089c22501f26a6b6287bc232dc432.jpg',
      'https://i.pinimg.com/736x/34/56/88/345688551e19c77b627b69ffbf595050.jpg',
      'https://i.pinimg.com/736x/05/43/1f/05431fb0a6cec64af7cc512d2b146612.jpg'
    ],
    desc: 'Well-lit studio with Wi-Fi, AC, and washing machine.',
    loc: 'South Delhi, Delhi',
    tags: ['AC', 'Wi-Fi', 'Washing Machine'],
    mates: [
      {
        title: 'Sneha Iyer',
        habits: ['Non-Smoker'],
        desc: '22 • Female • B.Tech CSE\nLooking for someone who enjoys art and music.',
        loc: 'South Delhi, Delhi',
        img: 'https://randomuser.me/api/portraits/women/18.jpg',
        tags: ['Smoker']
      },
      {
        title: 'Ishaan Rao',
        habits: ['Non-Smoker'],
        desc: '22 • Male • B.Arch\nPrefers non-smoking flatmates.',
        loc: 'South Delhi, Delhi',
        img: 'https://randomuser.me/api/portraits/men/55.jpg',
        tags: ['Smoker']
      }
    ]
  },
  {
    type: 'flat',
    title: '1BHK near MG Road',
    price: 25000,
    images: [
      'https://i.pinimg.com/736x/83/33/7b/83337b99857a1dfe0a475e9d7194c5a1.jpg',
      'https://i.pinimg.com/736x/2d/dd/04/2ddd04d8364c0a8c178201a9c1e292bf.jpg',
      'https://i.pinimg.com/736x/7b/e2/18/7be218b32e91ff3923692c32ab6f0e2b.jpg'
    ],
    desc: 'Well-lit studio with Wi-Fi, AC, and washing machine.',
    loc: 'MG Road, Bengaluru',
    tags: ['AC', 'Wi-Fi', 'Washing Machine'],
    mates: [
      {
        title: 'Kabir Malhotra',
        habits: ['Non-Smoker'],
        desc: '25 • Male • B.Des Fashion\nLoves pets, especially cats.',
        loc: 'MG Road, Bengaluru',
        img: 'https://randomuser.me/api/portraits/men/22.jpg',
        tags: ['Smoker']
      },
      {
        title: 'Meher Kapoor',
        habits: ['Non-Smoker'],
        desc: '22 • Female • MBA\nVegetarian and into yoga.',
        loc: 'MG Road, Bengaluru',
        img: 'https://randomuser.me/api/portraits/women/52.jpg',
        tags: ['Smoker']
      }
    ]
  },
  {
    type: 'flat',
    title: '3BHK near Vasant Kunj',
    price: 25000,
    images: [
      'https://i.pinimg.com/736x/c9/72/91/c972911a7d71ffb71b0fb42584dfff08.jpg',
      'https://i.pinimg.com/736x/ef/1f/d2/ef1fd2ad309153a395c809a97a0e4d25.jpg'
    ],
    desc: 'Well-lit studio with Wi-Fi, AC, and washing machine.',
    loc: 'Vasant Kunj, Delhi',
    tags: ['AC', 'Wi-Fi', 'Washing Machine'],
    mates: [
      {
        title: 'Riya Shah',
        habits: ['Non-Smoker'],
        desc: '25 • Female • LLB\nNeeds a quiet place for remote work.',
        loc: 'Vasant Kunj, Delhi',
        img: 'https://randomuser.me/api/portraits/women/26.jpg',
        tags: ['Smoker']
      }
    ]
  }
];

// Tag Component
const Tag = ({ children }) => {
  return (
    <span className="bg-tag-bg text-tag-text text-sm rounded-full py-1 px-3 font-medium inline-block">
      {children}
    </span>
  );
};

// Flat Images Component
const FlatImages = ({ images }) => {
  return (
    <div className="flex gap-2 overflow-x-auto p-3 md:p-4 pt-3">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt="Flat"
          className="w-28 md:w-32 h-16 md:h-20 object-cover rounded-lg flex-shrink-0 bg-gray-200 transition-transform duration-200 hover:scale-105"
        />
      ))}
    </div>
  );
};

// Mate Card Component
const MateCard = ({ mate }) => {
  return (
    <div className="bg-card-bg rounded-xl border-[1.2px] border-border flex items-center p-3 md:p-4 min-h-20 w-full">
      <img
        src={mate.img}
        alt="Profile"
        className="w-12 h-12 md:w-16 md:h-16 object-cover rounded-full mr-3 md:mr-4 bg-gray-200 flex-shrink-0"
      />
      <div className="flex-1">
        <div className="text-base md:text-lg font-bold text-name-dark mb-1">
          {mate.title}
        </div>
        <div className="flex flex-wrap gap-1 md:gap-2 mt-1">
          {mate.tags.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </div>
        <div 
          className="mt-1 text-sm text-text-color"
          dangerouslySetInnerHTML={{ __html: mate.desc.replace(/\n/g, '<br>') }}
        />
        <div className="text-sm text-subtext-color mt-1 flex items-center font-medium">
          <span className="text-lg mr-1">📍</span> {mate.loc}
        </div>
      </div>
    </div>
  );
};

// Flat Card Component
const FlatCard = ({ flat }) => {
  return (
    <div className="mb-2">
      <div className="bg-card-bg rounded-xl shadow-custom border-[1.5px] border-border overflow-hidden flex flex-col min-h-32 relative transition-all duration-200 text-text-color hover:shadow-custom-lg hover:bg-[#f9f5ee]">
        <FlatImages images={flat.images} />
        
        <div className="p-4 md:p-5 flex-1 flex flex-col justify-center">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg md:text-xl font-bold text-name-dark m-0">
              {flat.title}
            </h2>
            <span className="bg-highlight text-white py-1 px-3 md:py-2 md:px-4 rounded-full text-sm md:text-base font-medium whitespace-nowrap">
              ₹{flat.price}/mo
            </span>
          </div>
          
          <div className="flex flex-wrap gap-2 mt-2 mb-3">
            {flat.tags.map((tag, index) => (
              <Tag key={index}>{tag}</Tag>
            ))}
          </div>
          
          <p className="text-sm md:text-base mb-2">{flat.desc}</p>
          
          <p className="text-sm md:text-base text-subtext-color mt-2 flex items-center font-medium">
            <span className="text-lg md:text-xl mr-1">📍</span> {flat.loc}
          </p>
        </div>
      </div>

      {flat.mates && flat.mates.length > 0 && (
        <div className="bg-transparent p-2 ml-6 md:ml-10 flex flex-col gap-3 mt-3">
          {flat.mates.map((mate, index) => (
            <MateCard key={index} mate={mate} />
          ))}
        </div>
      )}
    </div>
  );
};

// Search Bar Component
const SearchBar = ({ searchValue, onSearchChange, onReset }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target) &&
          inputRef.current && !inputRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    const handleEscape = (event) => {
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

  const handleCitySelect = (city) => {
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

// Results Grid Component
const ResultsGrid = ({ flats }) => {
  if (flats.length === 0) {
    return (
      <div className="text-center text-text-color">
        <p>No results found.</p>
      </div>
    );
  }

  return (
    <main className="flex flex-col gap-5">
      {flats.map((flat, index) => (
        <FlatCard key={index} flat={flat} />
      ))}
    </main>
  );
};

// Header Component
const Header = () => {
  return (
    <header className="text-center mb-8">
      <h1 className="text-2xl md:text-4xl mb-6 text-name-dark font-bold tracking-wide">
        Find Your Ideal Flat and Flatmate
      </h1>
    </header>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="text-center mt-8 text-subtext-color text-sm">
      &copy; 2023 Flatmate Finder. All rights reserved.
    </footer>
  );
};

// Custom hook for search functionality
const useSearch = (data) => {
  const [searchValue, setSearchValue] = useState('');

  const filteredData = useMemo(() => {
    if (!searchValue.trim()) {
      return data;
    }

    const keyword = searchValue.toLowerCase();
    
    return data.filter(flat => {
      const flatMatch = flat.title.toLowerCase().includes(keyword) ||
        flat.desc.toLowerCase().includes(keyword) ||
        flat.loc.toLowerCase().includes(keyword) ||
        flat.tags.join(' ').toLowerCase().includes(keyword);
      
      const matesMatch = flat.mates && flat.mates.some(mate =>
        mate.title.toLowerCase().includes(keyword) ||
        mate.desc.toLowerCase().includes(keyword) ||
        mate.loc.toLowerCase().includes(keyword) ||
        mate.tags.join(' ').toLowerCase().includes(keyword)
      );
      
      return flatMatch || matesMatch;
    });
  }, [data, searchValue]);

  const handleSearchChange = (value) => {
    setSearchValue(value);
  };

  const handleReset = () => {
    setSearchValue('');
  };

  return {
    searchValue,
    filteredData,
    handleSearchChange,
    handleReset,
  };
};

// Main Flatmate Finder Component
const FlatmateFinder = () => {
  const { searchValue, filteredData, handleSearchChange, handleReset } = useSearch(flatsData);

  return (
    <div className="min-h-screen bg-body-bg text-text-color font-sans">
      <div className="max-w-4xl mx-auto py-6 md:py-10 px-4 md:px-6">
        <Header />
        <SearchBar 
          searchValue={searchValue}
          onSearchChange={handleSearchChange}
          onReset={handleReset}
        />
        <ResultsGrid flats={filteredData} />
        <Footer />
      </div>
    </div>
  );
};

export default FlatmateFinder;