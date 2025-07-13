import React from 'react';
import { Flat } from '../types';
import FlatCard from './FlatCard';

interface ResultsGridProps {
  flats: Flat[];
}

const ResultsGrid: React.FC<ResultsGridProps> = ({ flats }) => {
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

export default ResultsGrid;