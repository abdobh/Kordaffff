import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navigation } from './components/Navigation';
import { HomePage } from './components/HomePage';
import { MerchantDashboard } from './components/MerchantDashboard';
import { PackagesPage } from './components/PackagesPage';
import { ShoppingCart } from './components/ShoppingCart';
import { AboutPage } from './components/AboutPage';
import { ProductsPage } from './components/ProductsPage';

function AppContent() {
  const { currentView } = useApp();

  const renderCurrentView = () => {
    switch (currentView) {
      case 'home':
        return <HomePage />;
      case 'products':
        return <ProductsPage />;
      case 'packages':
        return <PackagesPage />;
      case 'dashboard':
        return <MerchantDashboard />;
      case 'cart':
        return <ShoppingCart />;
      case 'about':
        return <AboutPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <Navigation />
      <main>
        {renderCurrentView()}
      </main>
    </div>
  );
}

function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;