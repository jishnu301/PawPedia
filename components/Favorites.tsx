
import React from 'react';
import { useFavorites } from '../context/FavoritesContext';
import { DOG_BREEDS } from '../constants';
import BreedCard from './BreedCard';

const Favorites: React.FC = () => {
  const { favoriteIds } = useFavorites();
  const favoriteBreeds = DOG_BREEDS.filter(breed => favoriteIds.has(breed.id));

  return (
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8 text-brand-primary">Your Favorite Breeds</h2>
      {favoriteBreeds.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {favoriteBreeds.map(breed => (
            <BreedCard key={breed.id} breed={breed} />
          ))}
        </div>
      ) : (
        <div className="text-center bg-white p-12 rounded-lg shadow-md">
          <p className="text-gray-500 text-lg">You haven't added any favorite breeds yet.</p>
          <p className="mt-2 text-gray-400">Click the star icon on a breed card to add it to your favorites!</p>
        </div>
      )}
    </div>
  );
};

export default Favorites;
