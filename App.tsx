
import React, { useState, useCallback } from 'react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import AllBreeds from './components/AllBreeds';
import CompareBreeds from './components/CompareBreeds';
import AiSelector from './components/AiSelector';
import Favorites from './components/Favorites';
import PupCare from './components/PupCare';
import ContactModal from './components/ContactModal';
import { FavoritesProvider } from './context/FavoritesContext';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const navigate = useCallback((page: Page) => {
    setCurrentPage(page);
  }, []);

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={navigate} />;
      case 'all':
        return <AllBreeds />;
      case 'compare':
        return <CompareBreeds />;
      case 'ai':
        return <AiSelector />;
      case 'favorites':
        return <Favorites />;
      case 'pupcare':
        return <PupCare />;
      default:
        return <HomePage onNavigate={navigate} />;
    }
  };

  return (
    <FavoritesProvider>
      <div className="min-h-screen bg-brand-bg text-brand-text font-sans">
        <Header 
          onNavigate={navigate} 
          currentPage={currentPage} 
          onContactClick={() => setIsContactModalOpen(true)} 
        />
        <main className="p-4 sm:p-6 lg:p-8">
          {renderContent()}
        </main>
        <footer className="text-center p-4 text-gray-500 text-sm">
          <p>PawPedia &copy; {new Date().getFullYear()}. All barks reserved.</p>
        </footer>
        <ContactModal 
          isOpen={isContactModalOpen} 
          onClose={() => setIsContactModalOpen(false)} 
        />
      </div>
    </FavoritesProvider>
  );
};

export default App;
