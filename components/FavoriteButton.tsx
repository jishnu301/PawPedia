
import React from 'react';
import { useFavorites } from '../context/FavoritesContext';

interface FavoriteButtonProps {
  breedId: string;
}

const StarIcon: React.FC<{ isFavorite: boolean }> = ({ isFavorite }) => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill={isFavorite ? 'currentColor' : 'none'} 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={`w-6 h-6 transition-colors duration-200 ${isFavorite ? 'text-yellow-400' : 'text-gray-400 hover:text-yellow-400'}`}
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    </svg>
);


export const FavoriteButton: React.FC<FavoriteButtonProps> = ({ breedId }) => {
  const { favoriteIds, toggleFavorite } = useFavorites();
  const isFavorite = favoriteIds.has(breedId);

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card click events
    e.preventDefault();
    toggleFavorite(breedId);
  };

  return (
    <button
      onClick={handleToggle}
      aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
      className="p-1 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-500"
    >
      <StarIcon isFavorite={isFavorite} />
    </button>
  );
};
