import React from 'react';
import { ShoppingBag, Trash2, Plus, Minus } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const ShoppingCart: React.FC = () => {
  const { cart, removeFromCart } = useApp();

  const updateQuantity = (itemId: string, change: number) => {
    // Implementation for updating quantity
    console.log(`Update quantity for item ${itemId} by ${change}`);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ar-LY', {
      style: 'currency',
      currency: 'LYD',
      minimumFractionDigits: 0
    }).format(price);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-12">
            <ShoppingBag className="w-24 h-24 mx-auto text-gray-300 mb-6" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4" dir="rtl">
              سلتك فارغة حالياً
            </h2>
            <p className="text-gray-600 mb-8" dir="rtl">
              تصفح منتجاتنا واختر ما يناسبك لإضافته إلى سلة التسوق
            </p>
            <button 
              onClick={() => window.history.back()}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              متابعة التسوق
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8" dir="rtl">
          سلة المشتريات
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="space-y-6">
                {cart.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4 space-x-reverse border-b border-gray-200 pb-6">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900" dir="rtl">
                        {item.product.name}
                      </h3>
                      <p className="text-gray-600 text-sm" dir="rtl">
                        {item.product.condition === 'new' ? 'جديد' : 'مستعمل'} - 
                        {item.product.city === 'tripoli' ? ' طرابلس' : ' بنغازي'}
                      </p>
                      <p className="text-lg font-bold text-blue-600">
                        {formatPrice(item.product.price)}
                      </p>
                    </div>

                    <div className="flex items-center space-x-3 space-x-reverse">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-50"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="font-semibold">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-50"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="w-8 h-8 flex items-center justify-center text-red-600 hover:bg-red-50 rounded-full"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold mb-6" dir="rtl">
                ملخص الطلب
              </h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between" dir="rtl">
                  <span>عدد المنتجات:</span>
                  <span>{cart.length}</span>
                </div>
                <div className="flex justify-between" dir="rtl">
                  <span>إجمالي الكمية:</span>
                  <span>{cart.reduce((sum, item) => sum + item.quantity, 0)}</span>
                </div>
                <div className="flex justify-between text-lg font-bold" dir="rtl">
                  <span>المجموع:</span>
                  <span>{formatPrice(getTotalPrice())}</span>
                </div>
              </div>

              <div className="space-y-3">
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                  إتمام الطلب
                </button>
                <button 
                  onClick={() => window.history.back()}
                  className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  متابعة التسوق
                </button>
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800" dir="rtl">
                  🚚 توصيل مجاني للطلبات أكثر من 500 د.ل
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};