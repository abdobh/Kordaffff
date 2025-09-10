import React, { useState } from 'react';
import { Check, Star, Crown, Award, Gift } from 'lucide-react';
import { packages } from '../data/mockData';

export const PackagesPage: React.FC = () => {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  const getPackageIcon = (packageId: string) => {
    switch (packageId) {
      case 'free': return Gift;
      case 'bronze': return Award;
      case 'silver': return Star;
      case 'gold': return Crown;
      default: return Gift;
    }
  };

  const handlePackageSelect = (packageId: string) => {
    if (packageId === 'free') {
      setSelectedPackage(packageId);
    } else {
      // Navigate to detailed package page
      console.log(`Selected package: ${packageId}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4" dir="rtl">
            اختر الباقة المناسبة لك
          </h1>
          <p className="text-xl text-gray-600" dir="rtl">
            باقات متنوعة تناسب جميع احتياجاتك التجارية
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pkg) => {
            const Icon = getPackageIcon(pkg.id);
            const isRecommended = pkg.id === 'gold';
            
            return (
              <div
                key={pkg.id}
                className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
                  isRecommended ? 'ring-2 ring-blue-500 transform scale-105' : ''
                }`}
              >
                {isRecommended && (
                  <div className="absolute top-0 left-0 right-0 bg-blue-500 text-white text-center py-2 text-sm font-medium">
                    الأكثر شعبية
                  </div>
                )}
                
                <div className="p-8">
                  <div className="text-center mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 ${pkg.color} text-white rounded-full mb-4`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900" dir="rtl">
                      {pkg.nameAr}
                    </h3>
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-gray-900">
                        {pkg.price === 0 ? 'مجاني' : `${pkg.price} د.ل`}
                      </span>
                      {pkg.price > 0 && (
                        <span className="text-gray-600 text-sm">/شهر</span>
                      )}
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    {pkg.featuresAr.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3 space-x-reverse">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700" dir="rtl">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => handlePackageSelect(pkg.id)}
                    className={`w-full py-3 rounded-lg font-medium transition-colors duration-200 ${
                      pkg.id === 'free'
                        ? 'bg-gray-600 text-white hover:bg-gray-700'
                        : isRecommended
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    {pkg.id === 'free' ? 'ابدأ مجاناً' : 'اختر هذه الباقة'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Free Package Modal */}
        {selectedPackage === 'free' && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl p-8 max-w-md w-full">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center" dir="rtl">
                الباقة المجانية
              </h3>
              <div className="text-center mb-6">
                <Gift className="w-16 h-16 mx-auto text-gray-500 mb-4" />
                <p className="text-gray-600" dir="rtl">
                  ابدأ رحلتك التجارية مع 30 منتج مجاناً لمدة 7 أيام
                </p>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between" dir="rtl">
                  <span>عدد المنتجات:</span>
                  <span className="font-semibold">30 منتج</span>
                </div>
                <div className="flex justify-between" dir="rtl">
                  <span>المدة:</span>
                  <span className="font-semibold">7 أيام</span>
                </div>
                <div className="flex justify-between" dir="rtl">
                  <span>الدعم الفني:</span>
                  <span className="font-semibold">أساسي</span>
                </div>
              </div>

              <div className="flex space-x-4 space-x-reverse">
                <button
                  onClick={() => setSelectedPackage(null)}
                  className="flex-1 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  إلغاء
                </button>
                <button
                  onClick={() => {
                    console.log('Activate free package');
                    setSelectedPackage(null);
                  }}
                  className="flex-1 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"
                >
                  تفعيل الآن
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Gold Package Details Section */}
        <div className="mt-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-2xl p-8 text-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center" dir="rtl">
              تفاصيل الباقة الذهبية
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4" dir="rtl">المميزات الخاصة</h3>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2 space-x-reverse" dir="rtl">
                    <Check className="w-5 h-5" />
                    <span>البداية من تاريخ التفعيل</span>
                  </li>
                  <li className="flex items-center space-x-2 space-x-reverse" dir="rtl">
                    <Check className="w-5 h-5" />
                    <span>إمكانية التغيير أو الترقية في أي وقت</span>
                  </li>
                  <li className="flex items-center space-x-2 space-x-reverse" dir="rtl">
                    <Check className="w-5 h-5" />
                    <span>دعم فني متواصل 24/7</span>
                  </li>
                  <li className="flex items-center space-x-2 space-x-reverse" dir="rtl">
                    <Check className="w-5 h-5" />
                    <span>أدوات تسويقية متقدمة</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4" dir="rtl">طرق الدفع</h3>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2 space-x-reverse" dir="rtl">
                    <Check className="w-5 h-5" />
                    <span>الدفع الإلكتروني</span>
                  </li>
                  <li className="flex items-center space-x-2 space-x-reverse" dir="rtl">
                    <Check className="w-5 h-5" />
                    <span>التحويل البنكي</span>
                  </li>
                  <li className="flex items-center space-x-2 space-x-reverse" dir="rtl">
                    <Check className="w-5 h-5" />
                    <span>الدعم الفني للمساعدة</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <p className="mb-4" dir="rtl">
                ننصح بتجربة الباقة المجانية أولاً للتعرف على المنصة
              </p>
              <button className="bg-white text-yellow-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                تواصل معنا عبر واتساب
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};