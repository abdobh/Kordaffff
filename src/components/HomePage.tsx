import React from 'react';
import { Truck, Shield, Clock, Users } from 'lucide-react';
import { SearchSection } from './SearchSection';
import { ProductCard } from './ProductCard';
import { mockProducts } from '../data/mockData';
import { useApp } from '../context/AppContext';

export const HomePage: React.FC = () => {
  const { searchQuery, selectedFilters } = useApp();

  // Filter products based on search and filters
  const filteredProducts = mockProducts.filter(product => {
    const matchesSearch = searchQuery === '' || 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCity = selectedFilters.city === '' || product.city === selectedFilters.city;
    const matchesCondition = selectedFilters.condition === '' || product.condition === selectedFilters.condition;
    
    return matchesSearch && matchesCity && matchesCondition;
  });

  const features = [
    {
      icon: Truck,
      title: 'توصيل سريع',
      description: 'توصيل لجميع المدن الليبية خلال 24 ساعة'
    },
    {
      icon: Shield,
      title: 'ضمان الجودة',
      description: 'جميع قطع الغيار مفحوصة ومضمونة'
    },
    {
      icon: Clock,
      title: 'متوفر 24/7',
      description: 'خدمة عملاء متواصلة طوال الأسبوع'
    },
    {
      icon: Users,
      title: 'شبكة واسعة',
      description: 'آلاف التجار والمشترين في جميع أنحاء ليبيا'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Search Section */}
      <SearchSection />

      {/* Welcome Message */}
      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6" dir="rtl">
            مرحباً بك في سوق قطع غيار السيارات الأول في ليبيا
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed" dir="rtl">
            منصة إلكترونية متخصصة في بيع وشراء قطع غيار السيارات المستعملة والجديدة. 
            تصفح آلاف المنتجات من تجار موثوقين في طرابلس وبنغازي والمدن الأخرى. 
            اعثر على ما تحتاجه بأفضل الأسعار وأعلى جودة.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12" dir="rtl">
            لماذا تختار منصتنا؟
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mb-4">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3" dir="rtl">
                  {feature.title}
                </h3>
                <p className="text-gray-600" dir="rtl">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4" dir="rtl">
              {filteredProducts.length > 0 
                ? `المنتجات المتاحة (${filteredProducts.length})` 
                : 'المنتجات المميزة'}
            </h2>
            <p className="text-gray-600" dir="rtl">
              اكتشف أحدث قطع الغيار المتوفرة من تجارنا المعتمدين
            </p>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Truck className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2" dir="rtl">
                لا توجد منتجات متطابقة
              </h3>
              <p className="text-gray-600" dir="rtl">
                جرب تغيير كلمات البحث أو المرشحات للعثور على المنتجات المطلوبة
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};