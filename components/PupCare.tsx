
import React, { useState } from 'react';
import { DOG_BREEDS } from '../constants';

// Card component for displaying care info
const CareCard: React.FC<{ title: string; icon: React.ReactNode; children: React.ReactNode }> = ({ title, icon, children }) => (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full">
        <div className="flex items-center mb-4">
            <div className="text-brand-primary mr-3">{icon}</div>
            <h3 className="text-2xl font-bold text-brand-primary">{title}</h3>
        </div>
        <div className="space-y-4">{children}</div>
    </div>
);

// Detail item within a card
const CareDetail: React.FC<{ label: string; value: string }> = ({ label, value }) => (
    <div>
        <p className="font-semibold text-gray-700">{label}</p>
        <p className="text-gray-600">{value}</p>
    </div>
);


const PupCare: React.FC = () => {
    const [selectedBreedId, setSelectedBreedId] = useState<string>('');

    const handleSelectBreed = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedBreedId(e.target.value);
    };

    const selectedBreed = DOG_BREEDS.find(b => b.id === selectedBreedId);

    return (
        <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-10">
                <h2 className="text-4xl font-black text-brand-primary">PupCare Guides</h2>
                <p className="text-lg text-gray-600 mt-2">Breed-specific tips for a happy and healthy dog.</p>
            </div>

            <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
                 <label htmlFor="breed-select" className="block text-lg font-semibold text-gray-800 mb-2">
                    Select a Breed
                </label>
                <select
                    id="breed-select"
                    value={selectedBreedId}
                    onChange={handleSelectBreed}
                    className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-brand-accent focus:border-brand-accent bg-gray-50 text-lg"
                >
                    <option value="">-- Choose a breed --</option>
                    {DOG_BREEDS.map(breed => (
                        <option key={breed.id} value={breed.id}>
                            {breed.name}
                        </option>
                    ))}
                </select>
            </div>

            {selectedBreed ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <CareCard 
                        title="Nutrition Guide"
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.518.759a1.126 1.126 0 00-.527 1.285l.791 2.923a1.126 1.126 0 001.285.527l2.25-1.125a1 1 0 011.06.54l.74 4.435a1 1 0 01-.836.986H3a1 1 0 01-1-1V3z" /><path d="M15 3a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V3z" /></svg>}
                    >
                        <CareDetail label="Daily Calories" value={selectedBreed.pupCare.nutrition.dailyCalories} />
                        <CareDetail label="Common Allergies" value={selectedBreed.pupCare.nutrition.commonAllergies} />
                        <CareDetail label="Feeding Tips" value={selectedBreed.pupCare.nutrition.feedingTips} />
                    </CareCard>
                     <CareCard 
                        title="Grooming Essentials"
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M2.5 4A1.5 1.5 0 001 5.5V6h18v-.5A1.5 1.5 0 0017.5 4h-15zM19 8H1V5.5A2.5 2.5 0 013.5 3h13A2.5 2.5 0 0119 5.5V8zM1 14v-4h18v4a1 1 0 01-1 1H2a1 1 0 01-1-1z" clipRule="evenodd" /></svg>}
                    >
                        <CareDetail label="Frequency" value={selectedBreed.pupCare.grooming.frequency} />
                        <CareDetail label="Recommended Tools" value={selectedBreed.pupCare.grooming.tools} />
                        <CareDetail label="Coat Type" value={selectedBreed.pupCare.grooming.coatType} />
                    </CareCard>
                </div>
            ) : (
                <div className="text-center bg-white p-12 rounded-lg shadow-md">
                    <p className="text-gray-500 text-lg">Select a breed from the dropdown above to see its care guide.</p>
                </div>
            )}
        </div>
    );
};

export default PupCare;