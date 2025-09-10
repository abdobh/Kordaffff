import React from 'react';
import { Search, RotateCcw } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const SearchSection: React.FC = () => {
  const { searchQuery, setSearchQuery, selectedFilters, setSelectedFilters, resetFilters } = useApp();

  const handleCityFilter = (city: string) => {
    setSelectedFilters({
      ...selectedFilters,
      city: selectedFilters.city === city ? '' : city
    });
  };

  const handleConditionFilter = (condition: string) => {
    setSelectedFilters({
      ...selectedFilters,
      condition: selectedFilters.condition === condition ? '' : condition
    });
  };

  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ابحث عن قطع الغيار أو السيارات..."
              className="w-full pr-12 pl-4 py-4 text-lg rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              dir="rtl"
            />
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {/* City Filters */}
          <button
            onClick={() => handleCityFilter('tripoli')}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
              selectedFilters.city === 'tripoli'
                ? 'bg-white text-blue-600 shadow-lg'
                : 'bg-blue-500 text-white hover:bg-blue-400'
            }`}
          >
            طرابلس
          </button>
          
          <button
            onClick={() => handleCityFilter('benghazi')}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
              selectedFilters.city === 'benghazi'
                ? 'bg-white text-blue-600 shadow-lg'
                : 'bg-blue-500 text-white hover:bg-blue-400'
            }`}
          >
            بنغازي
          </button>

          {/* Condition Filters */}
          <button
            onClick={() => handleConditionFilter('new')}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
              selectedFilters.condition === 'new'
                ? 'bg-white text-blue-600 shadow-lg'
                : 'bg-blue-500 text-white hover:bg-blue-400'
            }`}
          >
            جديدة
          </button>
          
          <button
            onClick={() => handleConditionFilter('used')}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
              selectedFilters.condition === 'used'
                ? 'bg-white text-blue-600 shadow-lg'
                : 'bg-blue-500 text-white hover:bg-blue-400'
            }`}
          >
            مستعملة
          </button>

          {/* Reset Button */}
          <button
            onClick={resetFilters}
            className="flex items-center space-x-2 space-x-reverse px-6 py-3 bg-gray-600 text-white rounded-lg font-medium hover:bg-gray-500 transition-colors duration-200"
          >
            <RotateCcw className="w-4 h-4" />
            <span>إعادة تعيين</span>
          </button>
        </div>

        {/* Active Filters Display */}
        {(selectedFilters.city || selectedFilters.condition || searchQuery) && (
          <div className="text-center text-white/90">
            <span className="text-sm">البحث النشط: </span>
            {searchQuery && <span className="bg-white/20 px-3 py-1 rounded-full text-sm mx-1">"{searchQuery}"</span>}
            {selectedFilters.city && (
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm mx-1">
                {selectedFilters.city === 'tripoli' ? 'طرابلس' : 'بنغازي'}
              </span>
            )}
            {selectedFilters.condition && (
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm mx-1">
                {selectedFilters.condition === 'new' ? 'جديدة' : 'مستعملة'}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};