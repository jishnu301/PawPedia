
import React, { useState, useEffect } from 'react';
import { Breed } from '../types';
import { fetchDogImage } from '../services/dogApi';
import LoadingSpinner from './LoadingSpinner';
import { FavoriteButton } from './FavoriteButton';

interface BreedCardProps {
  breed: Breed;
}

const BreedCard: React.FC<BreedCardProps> = ({ breed }) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadImage = async () => {
      setIsLoading(true);
      const url = await fetchDogImage(breed.id);
      setImageUrl(url);
      setIsLoading(false);
    };
    loadImage();
  }, [breed.id]);

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 overflow-hidden flex flex-col relative">
      <div className="absolute top-2 right-2 z-10">
          <FavoriteButton breedId={breed.id} />
      </div>
      <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
        {isLoading ? (
          <LoadingSpinner />
        ) : imageUrl ? (
          <img src={imageUrl} alt={breed.name} className="w-full h-full object-cover" />
        ) : (
          <div className="text-gray-500">Image not found</div>
        )}
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-brand-text">{breed.name}</h3>
        <p className="text-sm text-gray-600 mt-2 flex-grow">{breed.description}</p>
      </div>
    </div>
  );
};

export default BreedCard;
