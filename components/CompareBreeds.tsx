import React, { useState } from 'react';
import { DOG_BREEDS } from '../constants';
import { Breed } from '../types';
import BreedComparisonCard from './BreedComparisonCard';

const CompareBreeds: React.FC = () => {
  const [breed1, setBreed1] = useState<Breed | null>(null);
  const [breed2, setBreed2] = useState<Breed | null>(null);

  const handleSelect1 = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedBreed = DOG_BREEDS.find(b => b.id === e.target.value) || null;
    setBreed1(selectedBreed);
  };

  const handleSelect2 = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedBreed = DOG_BREEDS.find(b => b.id === e.target.value) || null;
    setBreed2(selectedBreed);
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8 text-brand-primary">Compare Breeds</h2>
      
      <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="breed1" className="block text-sm font-medium text-gray-700 mb-1">Breed 1</label>
            <select
              id="breed1"
              value={breed1?.id || ''}
              onChange={handleSelect1}
              className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-accent focus:border-brand-accent bg-white"
            >
              <option value="" disabled>Choose a breed</option>
              {DOG_BREEDS.map(b => <option key={b.id} value={b.id}>{b.name}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="breed2" className="block text-sm font-medium text-gray-700 mb-1">Breed 2</label>
            <select
              id="breed2"
              value={breed2?.id || ''}
              onChange={handleSelect2}
              className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-accent focus:border-brand-accent bg-white"
            >
              <option value="" disabled>Choose a breed</option>
              {DOG_BREEDS.map(b => <option key={b.id} value={b.id}>{b.name}</option>)}
            </select>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          {breed1 ? <BreedComparisonCard breed={breed1} /> : <div className="text-center p-8 bg-gray-100 rounded-lg">Select a breed to see details.</div>}
        </div>
        <div>
          {breed2 ? <BreedComparisonCard breed={breed2} /> : <div className="text-center p-8 bg-gray-100 rounded-lg">Select a breed to see details.</div>}
        </div>
      </div>
    </div>
  );
};

export default CompareBreeds;