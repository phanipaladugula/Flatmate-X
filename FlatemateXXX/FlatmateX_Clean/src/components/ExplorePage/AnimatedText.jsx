

import React from 'react';

// You can pass the logo text as a prop, or define it directly
const AnimatedText = ({ logoText = 'FlatmateX' }) => {
  return (
    <>
      {/* Logo Text Container - Top Left */}
      <header className="absolute top-0 left-0 z-10 p-4 md:p-8">
        {/* Adjusted logo text size - feel free to fine-tune 'text-lg', 'font-semibold', etc. */}
        <span className="text-lg font-semibold text-white md:text-xl font-inter"> 
          {logoText}
        </span>
      </header>

      {/* Main Animated Text Content */}
      {/* Decreased text size: 3vw for mobile, 6vw for desktop */}
      <div className="font-inter text-[3vw] font-bold md:text-[6vw]">
        {/* Replicating .loader styles */}
        <div className="flex items-baseline gap-[0.8vw] md:gap-[1.2vw]">
          <p>Find Your</p>
          {/* Replicating .loader .words styles with responsive adjustments */}
          {/* Adjusted height and line-height to match the new font sizes */}
          <div className="h-[3vw] md:h-[6vw] leading-[3vw] md:leading-[6vw] overflow-hidden">
            {/* Apply the animation based on screen size */}
            <div className="flex flex-col animate-[scrollUpMobile_6s_infinite] md:animate-[scrollUpDesktop_6s_infinite]">
              {/* Replicating .word styles including color and ensuring block display */}
              {/* Ensuring text size aligns with container's line-height for better baseline */}
              {/* Decreased text size on individual words */}
              <span className="animated-word-color block text-[3vw] md:text-[6vw] whitespace-nowrap">Vibe</span>
              <span className="animated-word-color block text-[3vw] md:text-[6vw] whitespace-nowrap">Flat</span>
              <span className="animated-word-color block text-[3vw] md:text-[6vw] whitespace-nowrap">Flatmate</span>
              <span className="animated-word-color block text-[3vw] md:text-[6vw] whitespace-nowrap">Vibe</span>
            </div>
          </div>
        </div>
      </div>

      {/* Inline keyframes and custom color definition */}
      <style>
        {`
          /* Custom color from your CSS for the scrolling words */
          .animated-word-color {
            color: #ffd12a; /* Your specified color */
          }

          /* Desktop animation (applied on md screens and up) */
          /* Adjusted transform values to match the new 6vw height for desktop */
          @keyframes scrollUpDesktop {
            /* Vibe */
            0%   { transform: translateY(0); }
            10%  { transform: translateY(0); } /* Pause for Vibe */

            /* Flat */
            25%  { transform: translateY(-6vw); } /* Scroll up 1 word height (now 6vw) */
            35%  { transform: translateY(-6vw); } /* Pause for Flat */

            /* Flatmate */
            50%  { transform: translateY(-12vw); } /* Scroll up 2 word heights (now 12vw) */
            60%  { transform: translateY(-12vw); } /* Pause for Flatmate */

            /* Last Vibe (for loop) */
            85%  { transform: translateY(-18vw); } /* Scroll up 3 word heights (now 18vw) */
            100% { transform: translateY(-18vw); } /* Pause for last Vibe, then loops instantly to 0% */
          }

          /* Mobile animation (default, max-width: 768px) */
          /* Adjusted transform values to match the new 3vw height for mobile */
          @keyframes scrollUpMobile {
            /* Vibe */
            0%   { transform: translateY(0); }
            10%  { transform: translateY(0); } /* Pause for Vibe */

            /* Flat */
            25%  { transform: translateY(-3vw); } /* Scroll up 1 word height (now 3vw) */
            35%  { transform: translateY(-3vw); } /* Pause for Flat */

            /* Flatmate */
            50%  { transform: translateY(-6vw); } /* Scroll up 2 word heights (now 6vw) */
            60%  { transform: translateY(-6vw); } /* Pause for Flatmate */

            /* Last Vibe (for loop) */
            85%  { transform: translateY(-9vw); } /* Scroll up 3 word heights (now 9vw) */
            100% { transform: translateY(-9vw); } /* Pause for last Vibe, then loops instantly to 0% */
          }
        `}
      </style>
    </>
  );
};

export default AnimatedText;