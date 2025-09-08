
import React from 'react';
import { Page } from '../types';

interface HeaderProps {
  onNavigate: (page: Page) => void;
  currentPage: Page;
  onContactClick: () => void;
}

const PawIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-brand-secondary">
    <path fillRule="evenodd" d="M9.315 7.585c.624.283 1.296.425 2.01.425a10.373 10.373 0 012.01-.425c.875 0 1.705.18 2.457.521a.75.75 0 01.289 1.085l-1.393 2.191c-.503.792-.813 1.74- .813 2.755C14.15 15.67 14.584 17 15 17.55c.416.55 1.026.85 1.685.85h.216c.112 0 .223-.01.332-.03a.75.75 0 01.597 1.023l-.849 1.868a.75.75 0 01-1.282-.582l.348-.765a2.532 2.532 0 00-2.22-3.377c-.503-.047-1.028-.182-1.57-.406a19.49 19.49 0 01-1.57.406c-.542.224-1.067.36-1.57.405a2.532 2.532 0 00-2.22 3.377l.348.765a.75.75 0 01-1.282.582l-.849-1.868a.75.75 0 01.597-1.023c.11.02.22.03.332.03h.216c.659 0 1.27-.3 1.685-.85.416-.55.85-1.879.56-3.434 0-1.016-.31-1.963-.813-2.755L5.568 9.191a.75.75 0 01.289-1.085c.752-.34 1.582-.52 2.457-.52z" clipRule="evenodd" />
  </svg>
);

const Header: React.FC<HeaderProps> = ({ onNavigate, currentPage, onContactClick }) => {
  const navItems: { page: Page; label: string }[] = [
    { page: 'home', label: 'Home' },
    { page: 'all', label: 'All Breeds' },
    { page: 'compare', label: 'Compare' },
    { page: 'ai', label: 'AI Selector' },
    { page: 'favorites', label: 'Favorites' },
    { page: 'pupcare', label: 'PupCare' },
  ];

  const baseButtonClass = "px-2.5 py-1.5 rounded-md text-sm font-semibold transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2 focus:ring-offset-brand-bg whitespace-nowrap";

  const getButtonClass = (page: Page) => {
    if (currentPage === page) {
      return `${baseButtonClass} bg-brand-primary text-white scale-105 shadow-lg`;
    }
    return `${baseButtonClass} bg-white text-brand-text hover:bg-brand-secondary hover:text-white hover:scale-105 hover:shadow-md`;
  };
  
  const contactButtonClass = `${baseButtonClass} bg-white text-brand-text hover:bg-brand-secondary hover:text-white hover:scale-105 hover:shadow-md`;


  return (
    <header className="bg-white/80 backdrop-blur-sm shadow-md sticky top-0 z-10">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        <div className="flex items-center cursor-pointer flex-shrink-0" onClick={() => onNavigate('home')}>
          <PawIcon />
          <h1 className="text-2xl md:text-3xl font-black text-brand-primary ml-2">
            PawPedia
          </h1>
        </div>
        <div className="flex items-center flex-nowrap space-x-1 sm:space-x-2">
          {navItems.map(item => (
            <button key={item.page} onClick={() => onNavigate(item.page)} className={getButtonClass(item.page)}>
              {item.label}
            </button>
          ))}
           <button onClick={onContactClick} className={contactButtonClass}>
              Contact
            </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
