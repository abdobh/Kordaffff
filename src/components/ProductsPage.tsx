import React from 'react';
import { SearchSection } from './SearchSection';
import { ProductCard } from './ProductCard';
import { mockProducts } from '../data/mockData';
import { useApp } from '../context/AppContext';
import { Filter, Grid, List } from 'lucide-react';

export const ProductsPage: React.FC = () => {
  const { searchQuery, selectedFilters } = useApp();
  const [viewMode, setViewMode] = React.useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = React.useState('latest');

  // Filter and sort products
  const filteredProducts = mockProducts
    .filter(product => {
      const matchesSearch = searchQuery === '' || 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCity = selectedFilters.city === '' || product.city === selectedFilters.city;
      const matchesCondition = selectedFilters.condition === '' || product.condition === selectedFilters.condition;
      
      return matchesSearch && matchesCity && matchesCondition;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      }
    });

  return (
    <div className="min-h-screen bg-gray-50">
      <SearchSection />
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900" dir="rtl">
              جميع المنتجات
            </h1>
            <p className="text-gray-600 mt-2" dir="rtl">
              {filteredProducts.length} منتج متوفر
            </p>
          </div>
          
          {/* Controls */}
          <div className="flex items-center space-x-4 space-x-reverse">
            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              dir="rtl"
            >
              <option value="latest">الأحدث</option>
              <option value="price-low">السعر: من الأقل للأعلى</option>
              <option value="price-high">السعر: من الأعلى للأقل</option>
              <option value="name">الاسم</option>
            </select>
            
            {/* View Mode Toggle */}
            <div className="flex border border-gray-300 rounded-lg">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-50'}`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-50'}`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Products Grid/List */}
        {filteredProducts.length > 0 ? (
          <div className={
            viewMode === 'grid' 
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
              : 'space-y-4'
          }>
            {filteredProducts.map(product => (
              <div key={product.id} className={viewMode === 'list' ? 'bg-white rounded-xl shadow-md p-6' : ''}>
                {viewMode === 'grid' ? (
                  <ProductCard product={product} />
                ) : (
                  <div className="flex items-center space-x-6 space-x-reverse">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2" dir="rtl">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 mb-2" dir="rtl">
                        {product.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">
                          {product.city === 'tripoli' ? 'طرابلس' : 'بنغازي'} • 
                          {product.condition === 'new' ? 'جديد' : 'مستعمل'}
                        </span>
                        <span className="text-lg font-bold text-blue-600">
                          {new Intl.NumberFormat('ar-LY', {
                            style: 'currency',
                            currency: 'LYD',
                            minimumFractionDigits: 0
                          }).format(product.price)}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-2xl shadow-lg">
            <Filter className="w-16 h-16 mx-auto text-gray-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2" dir="rtl">
              لا توجد منتجات متطابقة
            </h3>
            <p className="text-gray-600" dir="rtl">
              جرب تغيير البحث أو المرشحات للعثور على المنتجات المطلوبة
            </p>
          </div>
        )}
      </div>
    </div>
  );
};