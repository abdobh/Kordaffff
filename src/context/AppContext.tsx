import React, { createContext, useContext, useState } from 'react';
import { User, CartItem, Product } from '../types';
import { mockUser } from '../data/mockData';

interface AppContextType {
  user: User | null;
  cart: CartItem[];
  currentView: string;
  searchQuery: string;
  selectedFilters: {
    city: string;
    condition: string;
  };
  setUser: (user: User | null) => void;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  setCurrentView: (view: string) => void;
  setSearchQuery: (query: string) => void;
  setSelectedFilters: (filters: { city: string; condition: string }) => void;
  resetFilters: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
};

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(mockUser);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [currentView, setCurrentView] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilters, setSelectedFilters] = useState({
    city: '',
    condition: ''
  });

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existingItem = prev.find(item => item.product.id === product.id);
      if (existingItem) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { id: Date.now().toString(), product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCart(prev => prev.filter(item => item.product.id !== productId));
  };

  const resetFilters = () => {
    setSelectedFilters({ city: '', condition: '' });
    setSearchQuery('');
  };

  return (
    <AppContext.Provider value={{
      user,
      cart,
      currentView,
      searchQuery,
      selectedFilters,
      setUser,
      addToCart,
      removeFromCart,
      setCurrentView,
      setSearchQuery,
      setSelectedFilters,
      resetFilters
    }}>
      {children}
    </AppContext.Provider>
  );
};