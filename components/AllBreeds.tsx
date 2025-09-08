
import React, { useState } from 'react';
import { DOG_BREEDS } from '../constants';
import BreedCard from './BreedCard';

const AllBreeds: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBreeds = DOG_BREEDS.filter(breed =>
    breed.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-4 text-brand-primary">Meet the Breeds</h2>

      <div className="mb-8 max-w-lg mx-auto">
        <input
          type="text"
          placeholder="Search for a breed..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-full shadow-sm focus:ring-brand-accent focus:border-brand-accent text-lg"
          aria-label="Search for a dog breed"
        />
      </div>
      
      {filteredBreeds.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {filteredBreeds.map(breed => (
            <BreedCard key={breed.id} breed={breed} />
          ))}
        </div>
      ) : (
        <div className="text-center bg-white p-12 rounded-lg shadow-md">
            <p className="text-gray-500 text-lg">No breeds found matching "{searchTerm}".</p>
            <p className="mt-2 text-gray-400">Try a different search term or clear the search bar to see all breeds.</p>
        </div>
      )}
    </div>
  );
};

export default AllBreeds;
