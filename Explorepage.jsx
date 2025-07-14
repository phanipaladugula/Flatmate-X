import React from 'react';
import backgroundImage from '../assets/image.png'; // Make sure to place your image in src/assets

const LandingPage = () => {
  return (
    <div className="h-screen overflow-hidden font-sans text-white">
      {/* Background Image Container */}
      <div className="fixed inset-0 -z-10 blur-[2px]">
        <img
          src={backgroundImage}
          alt="Background"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Header */}
      <header className="absolute left-0 top-0 z-10 w-full px-8 py-6 md:px-12 md:py-8">
        <div className="text-2xl font-bold tracking-tight text-white">
          flatmateX
        </div>
      </header>

      {/* Main Content */}
      <main className="flex h-full flex-col items-start justify-center bg-black/40 px-8 md:px-12">
        <div className="font-inter text-[10vw] font-bold md:text-[5vw]">
          <div className="font-hanken flex items-baseline gap-[1.2vw]">
            <p>Find Your</p>
            {/* Animated Words Section */}
            <div className="h-[10vw] overflow-hidden leading-[10vw] md:h-[5vw] md:leading-[5vw]">
              <span className="animate-scroll-up block text-[#ffd12a]">Vibe</span>
              <span className="animate-scroll-up block text-[#ffd12a]">Flat</span>
              <span className="animate-scroll-up block text-[#ffd12a]">Flatmate</span>
              {/* The last element is repeated to ensure a smooth loop */}
              <span className="animate-scroll-up block text-[#ffd12a]">Vibe</span>
            </div>
          </div>
        </div>

        {/* Explore Button */}
        <a
          href="/main_page.html" // Change this to your desired link, e.g., '/explore' for React Router
          className="mt-10 rounded-full border border-white bg-transparent px-8 py-3 text-base font-medium text-white no-underline transition-colors duration-300 ease-in-out hover:bg-white hover:text-black"
        >
          Explore
        </a>
      </main>
    </div>
  );
};

export default LandingPage;