
import React, { useState } from 'react';
import { getBreedRecommendation, QuizAnswers } from '../services/geminiService';
import { DOG_BREEDS } from '../constants';
import { Breed } from '../types';
import BreedCard from './BreedCard';
import LoadingSpinner from './LoadingSpinner';

const AiSelector: React.FC = () => {
  const [answers, setAnswers] = useState<QuizAnswers>({
    apartment: 'No',
    playful: 'Yes',
    kids: 'Yes',
    grooming: 'Low',
    budget: 'Any',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<Breed | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setAnswers(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setResult(null);
    setError(null);
    
    if (!process.env.API_KEY) {
        setError("API Key is not configured. This feature is unavailable.");
        setIsLoading(false);
        return;
    }

    try {
      const breedName = await getBreedRecommendation(answers);
      if (breedName) {
        const recommendedBreed = DOG_BREEDS.find(b => b.name.toLowerCase() === breedName.toLowerCase());
        setResult(recommendedBreed || null);
        if (!recommendedBreed) {
          setError(`AI suggested "${breedName}", but we couldn't find it in our list.`);
        }
      } else {
        setError('Could not get a recommendation. Please try again.');
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };
  
  const questions = [
    { id: 'apartment', label: 'Do you live in an apartment?', options: ['Yes', 'No'] },
    { id: 'playful', label: 'Do you want a playful dog?', options: ['Yes', 'No'] },
    { id: 'kids', label: 'Do you have kids?', options: ['Yes', 'No'] },
    { id: 'grooming', label: 'How much time can you spend on grooming?', options: ['Low', 'Medium', 'High'] },
    { id: 'budget', label: 'What is your budget (INR)?', options: ['Any', 'Under ₹30,000', '₹30,000 - ₹60,000', 'Over ₹60,000'] },
  ];

  return (
    <div className="container mx-auto max-w-4xl text-center">
      <h2 className="text-3xl font-bold mb-2 text-brand-primary">Find Your Perfect Paw-tner!</h2>
      <p className="text-gray-600 mb-8">Answer a few questions and our AI will suggest a breed for you.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg text-left">
          {questions.map(q => (
             <div key={q.id} className="mb-6">
                <label htmlFor={q.id} className="block text-md font-semibold text-gray-800 mb-2">{q.label}</label>
                <select
                    id={q.id}
                    name={q.id}
                    value={answers[q.id as keyof QuizAnswers]}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-brand-accent focus:border-brand-accent bg-gray-50"
                >
                    {q.options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                </select>
             </div>
          ))}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-brand-primary text-white font-bold py-3 px-4 rounded-md hover:bg-opacity-90 transition-all duration-300 disabled:bg-gray-400 flex items-center justify-center space-x-2"
          >
            {isLoading && <LoadingSpinner />}
            <span>{isLoading ? 'Thinking...' : 'Get Recommendation'}</span>
          </button>
        </form>

        <div className="mt-8 md:mt-0">
          <h3 className="text-2xl font-bold text-brand-text mb-4">Our Suggestion:</h3>
          <div className="p-4 bg-white rounded-lg shadow-lg min-h-[300px] flex items-center justify-center">
            {isLoading ? (
              <div className="text-center">
                <LoadingSpinner />
                <p className="mt-2 text-gray-500">Fetching your perfect match...</p>
              </div>
            ) : error ? (
              <div className="text-red-500 bg-red-100 p-4 rounded-md">{error}</div>
            ) : result ? (
              <BreedCard breed={result} />
            ) : (
              <div className="text-center text-gray-500">
                <p>Your recommended breed will appear here after you submit the form.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiSelector;