import React from 'react';
import { MapPin, ShoppingCart, Eye } from 'lucide-react';
import { Product } from '../types';
import { useApp } from '../context/AppContext';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useApp();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ar-LY', {
      style: 'currency',
      currency: 'LYD',
      minimumFractionDigits: 0
    }).format(price);
  };

  const getCityName = (city: string) => {
    return city === 'tripoli' ? 'طرابلس' : 'بنغازي';
  };

  const getConditionName = (condition: string) => {
    return condition === 'new' ? 'جديد' : 'مستعمل';
  };

  const getConditionColor = (condition: string) => {
    return condition === 'new' 
      ? 'bg-green-100 text-green-800' 
      : 'bg-blue-100 text-blue-800';
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
      {/* Product Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getConditionColor(product.condition)}`}>
            {getConditionName(product.condition)}
          </span>
        </div>
      </div>

      {/* Product Details */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2" dir="rtl">
          {product.name}
        </h3>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2" dir="rtl">
          {product.description}
        </p>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center text-gray-500 text-sm">
            <MapPin className="w-4 h-4 ml-1" />
            <span>{getCityName(product.city)}</span>
          </div>
          <div className="text-lg font-bold text-blue-600">
            {formatPrice(product.price)}
          </div>
        </div>

        <div className="flex items-center space-x-3 space-x-reverse">
          <button
            onClick={() => addToCart(product)}
            className="flex-1 flex items-center justify-center space-x-2 space-x-reverse bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            <ShoppingCart className="w-4 h-4" />
            <span>أضف للسلة</span>
          </button>
          
          <button className="flex items-center justify-center w-10 h-10 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
            <Eye className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};