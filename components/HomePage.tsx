import React from 'react';
import { Page } from '../types';

interface HomePageProps {
    onNavigate: (page: Page) => void;
}

const BenefitCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300">
    <div className="flex justify-center items-center mx-auto bg-brand-secondary text-white rounded-full w-16 h-16">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-brand-primary mt-4">{title}</h3>
    <p className="mt-2 text-gray-600">{children}</p>
  </div>
);

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <div className="relative bg-cover bg-center rounded-lg shadow-2xl overflow-hidden h-96" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=1974&auto=format&fit=crop')" }}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end items-center text-center p-8">
          <h2 className="text-4xl md:text-6xl font-black text-white drop-shadow-lg">
            Find Your Perfect Paw-tner
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-3xl">
            Your ultimate guide to the world of dogs. Explore popular breeds, compare their traits, or let our AI find the perfect furry friend for you!
          </p>
        </div>
      </div>

      {/* Why Own a Dog Section */}
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-brand-primary">Why Own a Dog?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <BenefitCard 
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" /></svg>}
            title="Unconditional Love"
          >
            Experience a unique bond of friendship and loyalty that only a dog can provide. They're always there to greet you with a wagging tail.
          </BenefitCard>
          <BenefitCard 
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
            title="Healthier Lifestyle"
          >
            Daily walks, playtime, and outdoor adventures with your dog are fantastic ways to stay active and improve your physical health.
          </BenefitCard>
          <BenefitCard
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
            title="Stress Relief"
          >
            Petting a dog has been shown to lower stress levels and increase happiness. Their calming presence can make any day better.
          </BenefitCard>
        </div>
      </div>
      
      {/* Choosing Your Companion Section */}
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-brand-primary">Choosing Your Canine Companion</h2>
        <div className="bg-white p-8 rounded-lg shadow-lg text-left max-w-4xl mx-auto">
            <p className="text-gray-700 mb-4">Finding the right dog involves matching their needs with your lifestyle. Here are a few things to consider:</p>
            <ul className="list-disc list-inside space-y-3 text-gray-600">
                <li>
                    <span className="font-bold text-brand-text">Energy Level:</span> A high-energy dog like a Border Collie needs a lot of exercise, while a Pug is happy with short walks. Match the dog's energy to your own activity level.
                </li>
                <li>
                    <span className="font-bold text-brand-text">Size:</span> Larger breeds need more space, both indoors and out. A Great Dane might not be the best fit for a small apartment, but a French Bulldog would be perfectly happy.
                </li>
                <li>
                    <span className="font-bold text-brand-text">Grooming:</span> Consider how much time you can dedicate to grooming. A Poodle requires professional grooming, whereas a Boxer needs just a quick weekly brush.
                </li>
                <li>
                    <span className="font-bold text-brand-text">Temperament:</span> Think about whether you want a dog that's a loyal guardian, a playful family member, or an independent companion.
                </li>
            </ul>
            <p className="text-gray-700 mt-6">Use our tools to explore different breeds and find the one that will be your perfect friend for life!</p>
        </div>
      </div>

      {/* Get Started Section */}
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-center mb-8 text-brand-primary">Get Started</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-brand-primary">Explore Breeds</h3>
            <p className="mt-2 text-gray-600">Discover details and images for dozens of popular dog breeds.</p>
            <button onClick={() => onNavigate('all')} className="mt-4 px-6 py-2 bg-brand-secondary text-white font-bold rounded-full hover:bg-brand-primary transition-colors duration-300">
              View All Breeds
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-brand-primary">Compare Traits</h3>
            <p className="mt-2 text-gray-600">See two breeds side-by-side to compare their size, temperament, and more.</p>
            <button onClick={() => onNavigate('compare')} className="mt-4 px-6 py-2 bg-brand-secondary text-white font-bold rounded-full hover:bg-brand-primary transition-colors duration-300">
              Compare Now
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-brand-primary">AI Selector</h3>
            <p className="mt-2 text-gray-600">Answer a few questions and let our AI suggest the perfect breed for your lifestyle.</p>
            <button onClick={() => onNavigate('ai')} className="mt-4 px-6 py-2 bg-brand-secondary text-white font-bold rounded-full hover:bg-brand-primary transition-colors duration-300">
              Find My Match
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;