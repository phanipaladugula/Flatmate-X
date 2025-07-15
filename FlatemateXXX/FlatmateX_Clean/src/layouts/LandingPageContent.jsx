// src/layouts/LandingPageContent.jsx
import React from 'react';
import AnimatedText from '../components/ExplorePage/AnimatedText';
import ExploreButton from '../components/ExplorePage/ExploreButton';

const LandingPageContent = ({ onExploreClick }) => {
  return (
    // This div is now the content container that receives alignment from its parent (LandingPage)
    // Its children are aligned within itself.
    <div className="flex flex-col items-start justify-center"> {/* Aligned content to start (left) */}
      <AnimatedText />
      <ExploreButton onClick={onExploreClick} />
    </div>
  );
};

export default LandingPageContent;