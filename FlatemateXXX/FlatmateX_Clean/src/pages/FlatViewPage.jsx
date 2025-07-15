import React, { useState } from 'react';
import MainFooter from '../components/MainPage/Footer';

const images = [
  "https://img.interiorcompany.com/interior/webproduct/Contemporary%20Master%20Bedroom%20Design%20with%20Cream%20Fabricated%20Wall%20Panel.png?aio=w-768",
  "https://img.interiorcompany.com/interior/webproduct/779638755025906631937.png?aio=w-768",
  "https://img.interiorcompany.com/interior/webproduct/563638705103415244386.png?aio=w-768",
  "https://img.interiorcompany.com/interior/webproduct/tropical-balcony-design-with-concrete-walls-and-wooden-flooring.png?aio=w-768",
  "https://www.bhg.com/thmb/vfQXHcPNLIzNo9vZQxs-m6JUwz8=/750x0/filters:no_upscale():format(webp)/ShojiWhite.jpg"
];

const FlatViewPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const changeSlide = (direction) => {
    const next = (currentIndex + direction + images.length) % images.length;
    setCurrentIndex(next);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-fixed bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1697224687433-de3d2a618872?q=80&w=1062')",
      }}
    >
      {/* Navbar */}
      <div className="flex justify-between items-center px-8 py-4 bg-[#B19470] text-white">
        <h1 className="text-2xl font-bold">FlatmateX</h1>
        <div className="cursor-pointer" onClick={toggleSidebar}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="32"
            viewBox="0 0 24 24"
            width="32"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M12 12c2.67 0 8 1.34 8 4v2h-16v-2c0-2.66 
                     5.33-4 8-4zm0-2c-1.66 0-3-1.34-3-3s1.34-3 
                     3-3 3 1.34 3 3-1.34 3-3 3z" />
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto mt-10 mb-20 bg-white p-8 rounded-xl shadow-lg">
        {/* Image & Details Section */}
        <div className="flex flex-col lg:flex-row items-stretch gap-6 mb-8">
          {/* Image Slider */}
          <div className="relative flex-1 min-w-[300px] h-[320px]">
            <img
              src={images[currentIndex]}
              alt="Flat"
              className="w-full h-full object-cover rounded-xl border-4 border-[#ead0b2]"
            />
            <span
              onClick={() => changeSlide(-1)}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 text-4xl cursor-pointer text-gray-700 select-none"
            >
              ‹
            </span>
            <span
              onClick={() => changeSlide(1)}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-4xl cursor-pointer text-gray-700 select-none"
            >
              ›
            </span>
          </div>

          {/* Flat Details */}
          <div className="flex-1 min-w-[300px] h-[320px] bg-[#ead0b2] border-l-8 border-[#7E6752] p-6 rounded-xl">
            {[
              ["Location", "Green Park, Delhi"],
              ["Rent", "₹12,000 / month"],
              ["Size", "2 BHK, 800 sqft"],
              ["Furnishing", "Semi-furnished"],
              ["Floor", "2nd floor"],
              ["AC", "Yes"],
              ["Pet Friendly", "No"],
              ["Available From", "Immediately"],
            ].map(([label, value]) => (
              <div key={label} className="flex justify-between mb-2 text-sm">
                <span className="font-semibold min-w-[140px]">{label}:</span>
                <span>{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="bg-[#bcaa8c] border-l-8 border-[#9E7E44] p-6 rounded-lg mb-8 text-base leading-relaxed">
          <strong>Description</strong>
          <br />
          This spacious 2 BHK apartment in Green Park is perfect for working professionals or students. It features a well-lit living room, modular kitchen, and a private balcony. Located in a safe neighborhood with easy access to metro stations, grocery stores, and cafes.
        </div>

        {/* Highlights */}
        <div className="bg-[#dcd7b2] border-l-8 border-[#d3ca6e] p-6 rounded-lg mb-6">
          <strong className="block mb-2">Why you'll love this flat:</strong>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>Walking distance to Green Park metro</li>
            <li>Natural light in all rooms</li>
            <li>Peaceful residential area</li>
            <li>Near AIIMS and Hauz Khas market</li>
          </ul>
        </div>

        {/* Buttons */}
        <div className="bg-[#dcd7b2] border-l-8 border-[#d3ca6e] p-6 rounded-lg text-center">
          <p className="mb-4">To message Owner and Confirm this Flat.</p>
          <div className="flex justify-center gap-4">
            <button className="px-6 py-2 bg-[#d29e4a] text-white rounded-full font-semibold">
              Message
            </button>
            <button className="px-6 py-2 bg-[#d29e4a] text-white rounded-full font-semibold">
              Confirm
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#fff9e6] shadow-lg transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-lg font-semibold">Your Profile</h3>
          <button onClick={toggleSidebar} className="text-xl">
            &times;
          </button>
        </div>
        <ul className="p-4 space-y-4 font-medium">
          <li>
            <a href="#">View Profile</a>
          </li>
          <li>
            <a href="#">My Listings</a>
          </li>
          <li>
            <a href="#">Messages</a>
          </li>
          <li>
            <a href="#">Settings</a>
          </li>
          <li>
            <a href="#">Logout</a>
          </li>
        </ul>
      </div>

      {/* Footer */}
      <MainFooter />
    </div>
  );
};

export default FlatViewPage;
