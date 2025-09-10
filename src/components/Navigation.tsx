import React from 'react';
import { 
  Home, 
  Package, 
  User, 
  ShoppingCart, 
  Info, 
  LogOut,
  Search,
  Menu,
  X
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const Navigation: React.FC = () => {
  const { user, cart, currentView, setCurrentView } = useApp();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const navItems = [
    { id: 'home', label: 'الرئيسية', icon: Home },
    { id: 'products', label: 'المنتجات', icon: Search },
    { id: 'packages', label: 'الباقات', icon: Package },
    ...(user?.role === 'seller' ? [{ id: 'dashboard', label: 'ملف التاجر', icon: User }] : []),
    { id: 'cart', label: 'سلة المشتريات', icon: ShoppingCart, badge: cart.length },
    { id: 'about', label: 'عنا', icon: Info }
  ];

  const handleLogout = () => {
    // Implement logout logic
    console.log('Logout clicked');
  };

  return (
    <nav className="bg-white shadow-lg border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <div className="text-2xl font-bold text-blue-600">
              قطع غيار ليبيا
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 space-x-reverse">
            {navItems.map(({ id, label, icon: Icon, badge }) => (
              <button
                key={id}
                onClick={() => setCurrentView(id)}
                className={`flex items-center space-x-2 space-x-reverse px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  currentView === id
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{label}</span>
                {badge !== undefined && badge > 0 && (
                  <span className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {badge}
                  </span>
                )}
              </button>
            ))}
            
            {user && (
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 space-x-reverse px-3 py-2 rounded-md text-sm font-medium text-red-600 hover:bg-red-50 transition-colors duration-200"
              >
                <LogOut className="w-4 h-4" />
                <span>تسجيل خروج</span>
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map(({ id, label, icon: Icon, badge }) => (
                <button
                  key={id}
                  onClick={() => {
                    setCurrentView(id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`flex items-center justify-between w-full px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    currentView === id
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <Icon className="w-5 h-5" />
                    <span>{label}</span>
                  </div>
                  {badge !== undefined && badge > 0 && (
                    <span className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {badge}
                    </span>
                  )}
                </button>
              ))}
              
              {user && (
                <button
                  onClick={handleLogout}
                  className="flex items-center w-full px-3 py-2 rounded-md text-base font-medium text-red-600 hover:bg-red-50 transition-colors duration-200"
                >
                  <LogOut className="w-5 h-5 ml-3" />
                  <span>تسجيل خروج</span>
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};