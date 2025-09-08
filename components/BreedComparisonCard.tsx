import React, { useState, useEffect } from 'react';
import { Breed } from '../types';
import { fetchDogImage } from '../services/dogApi';
import LoadingSpinner from './LoadingSpinner';
import { FavoriteButton } from './FavoriteButton';

interface BreedComparisonCardProps {
  breed: Breed;
}

const TraitItem: React.FC<{ label: string; value: string }> = ({ label, value }) => {
  return (
    <div className="flex justify-between items-center py-3 border-b border-gray-200 last:border-b-0">
      <span className="text-gray-700">{label}</span>
      <span className="font-bold text-brand-text text-right">{value}</span>
    </div>
  );
};

const BreedComparisonCard: React.FC<BreedComparisonCardProps> = ({ breed }) => {
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
    <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full flex flex-col">
      <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
        {isLoading ? (
          <LoadingSpinner />
        ) : imageUrl ? (
          <img src={imageUrl} alt={breed.name} className="w-full h-full object-cover" />
        ) : (
          <div className="text-gray-500">Image not found</div>
        )}
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex justify-center items-center gap-2 mb-1">
          <h3 className="text-2xl font-bold text-brand-primary">{breed.name}</h3>
          <FavoriteButton breedId={breed.id} />
        </div>
        <p className="text-base text-gray-800 text-center mt-2 mb-6">{breed.description}</p>
        <div className="bg-gray-50 p-4 rounded-md flex-grow">
          {Object.entries(breed.traits).map(([key, value]) => (
            <TraitItem key={key} label={key} value={value} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BreedComparisonCard;