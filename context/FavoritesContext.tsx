
import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';

interface FavoritesContextType {
  favoriteIds: Set<string>;
  toggleFavorite: (breedId: string) => void;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [favoriteIds, setFavoriteIds] = useState<Set<string>>(() => {
    try {
      const item = window.localStorage.getItem('favoriteBreeds');
      return item ? new Set(JSON.parse(item)) : new Set();
    } catch (error) {
      console.error('Error reading favorites from localStorage', error);
      return new Set();
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem('favoriteBreeds', JSON.stringify(Array.from(favoriteIds)));
    } catch (error) {
      console.error('Error saving favorites to localStorage', error);
    }
  }, [favoriteIds]);

  const toggleFavorite = (breedId: string) => {
    setFavoriteIds(prevIds => {
      const newIds = new Set(prevIds);
      if (newIds.has(breedId)) {
        newIds.delete(breedId);
      } else {
        newIds.add(breedId);
      }
      return newIds;
    });
  };

  return (
    <FavoritesContext.Provider value={{ favoriteIds, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = (): FavoritesContextType => {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};
