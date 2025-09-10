import React, { useState } from 'react';
import { 
  Plus, 
  Package, 
  MessageSquare, 
  CreditCard, 
  BarChart3, 
  LogOut,
  TrendingUp,
  ShoppingBag,
  Bell,
  Calendar
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { mockProducts, mockMessages, mockSubscription } from '../data/mockData';

export const MerchantDashboard: React.FC = () => {
  const { user } = useApp();
  const [activeSection, setActiveSection] = useState('overview');

  const stats = [
    {
      icon: Package,
      title: 'إجمالي المنتجات',
      value: mockProducts.length.toString(),
      change: '+12%',
      color: 'bg-blue-500'
    },
    {
      icon: TrendingUp,
      title: 'منتجات هذا الأسبوع',
      value: '3',
      change: '+25%',
      color: 'bg-green-500'
    },
    {
      icon: MessageSquare,
      title: 'رسائل جديدة',
      value: mockMessages.filter(m => !m.isRead).length.toString(),
      change: 'جديد',
      color: 'bg-orange-500'
    },
    {
      icon: Bell,
      title: 'تنبيه',
      value: 'باقتك تنتهي خلال 7 أيام',
      change: 'هام',
      color: 'bg-red-500'
    }
  ];

  const menuItems = [
    { id: 'overview', label: 'نظرة عامة', icon: BarChart3 },
    { id: 'add-product', label: 'إضافة منتج', icon: Plus },
    { id: 'my-products', label: 'منتجاتي', icon: Package },
    { id: 'messages', label: 'رسائل العملاء', icon: MessageSquare },
    { id: 'subscription', label: 'اشتراكي', icon: CreditCard },
    { id: 'analytics', label: 'تحليلات النشاط', icon: BarChart3 }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600 mb-1" dir="rtl">{stat.title}</p>
                      <p className="text-2xl font-bold text-gray-900" dir="rtl">{stat.value}</p>
                      <p className={`text-sm ${stat.color.replace('bg-', 'text-')}`}>
                        {stat.change}
                      </p>
                    </div>
                    <div className={`${stat.color} p-3 rounded-lg`}>
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4" dir="rtl">النشاط الأخير</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-900" dir="rtl">تم إضافة منتج جديد: مكابح أمامية نيسان</span>
                  </div>
                  <span className="text-sm text-gray-500">منذ ساعتين</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-900" dir="rtl">رسالة جديدة حول محرك تويوتا</span>
                  </div>
                  <span className="text-sm text-gray-500">منذ 4 ساعات</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-900" dir="rtl">تم تجديد الباقة الذهبية</span>
                  </div>
                  <span className="text-sm text-gray-500">منذ يوم واحد</span>
                </div>
              </div>
            </div>
          </div>
        );

      case 'add-product':
        return (
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg font-semibold mb-6" dir="rtl">إضافة منتج جديد</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2" dir="rtl">
                  اسم المنتج
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  dir="rtl"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2" dir="rtl">
                  الوصف
                </label>
                <textarea
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  dir="rtl"
                ></textarea>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2" dir="rtl">
                    السعر
                  </label>
                  <input
                    type="number"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2" dir="rtl">
                    الحالة
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="new">جديد</option>
                    <option value="used">مستعمل</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2" dir="rtl">
                  المدينة
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="tripoli">طرابلس</option>
                  <option value="benghazi">بنغازي</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                إضافة المنتج
              </button>
            </form>
          </div>
        );

      case 'my-products':
        return (
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg font-semibold mb-6" dir="rtl">منتجاتي</h3>
            <div className="space-y-4">
              {mockProducts.map(product => (
                <div key={product.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center space-x-4 space-x-reverse">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div>
                      <h4 className="font-semibold" dir="rtl">{product.name}</h4>
                      <p className="text-sm text-gray-600" dir="rtl">
                        {product.price} د.ل - {product.condition === 'new' ? 'جديد' : 'مستعمل'}
                      </p>
                    </div>
                  </div>
                  <div className="flex space-x-2 space-x-reverse">
                    <button className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200">
                      تعديل
                    </button>
                    <button className="px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200">
                      حذف
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'messages':
        return (
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg font-semibold mb-6" dir="rtl">رسائل العملاء</h3>
            <div className="space-y-4">
              {mockMessages.map(message => (
                <div key={message.id} className={`p-4 rounded-lg border ${!message.isRead ? 'bg-blue-50 border-blue-200' : 'bg-gray-50 border-gray-200'}`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold" dir="rtl">عميل جديد</span>
                    <span className="text-sm text-gray-500">
                      {new Date(message.createdAt).toLocaleDateString('ar-LY')}
                    </span>
                  </div>
                  <p className="text-gray-700" dir="rtl">{message.content}</p>
                  <button className="mt-2 text-blue-600 hover:text-blue-800 text-sm">
                    رد على الرسالة
                  </button>
                </div>
              ))}
            </div>
          </div>
        );

      case 'subscription':
        return (
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg font-semibold mb-6" dir="rtl">اشتراكي الحالي</h3>
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 p-6 rounded-xl text-white mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-2xl font-bold" dir="rtl">الباقة الذهبية</h4>
                  <p className="opacity-90" dir="rtl">500 منتج - 90 يوم</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold">120 د.ل</p>
                  <p className="text-sm opacity-90">شهرياً</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="font-semibold mb-2" dir="rtl">تاريخ البداية</h5>
                <p className="text-gray-600">{new Date(mockSubscription.startDate).toLocaleDateString('ar-LY')}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="font-semibold mb-2" dir="rtl">تاريخ الانتهاء</h5>
                <p className="text-gray-600">{new Date(mockSubscription.endDate).toLocaleDateString('ar-LY')}</p>
              </div>
            </div>

            <button className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200">
              ترقية الباقة
            </button>
          </div>
        );

      default:
        return (
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <p className="text-gray-600" dir="rtl">المحتوى قيد التطوير</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900" dir="rtl">
            مرحباً، {user?.name}
          </h1>
          <p className="text-gray-600" dir="rtl">إدارة أعمالك وتتبع أداء منتجاتك</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-xl shadow-md p-6">
              <nav className="space-y-2">
                {menuItems.map(item => (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`w-full flex items-center space-x-3 space-x-reverse px-4 py-3 rounded-lg text-right transition-colors duration-200 ${
                      activeSection === item.id
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </button>
                ))}
                
                <button className="w-full flex items-center space-x-3 space-x-reverse px-4 py-3 rounded-lg text-right text-red-600 hover:bg-red-50 transition-colors duration-200 mt-4">
                  <LogOut className="w-5 h-5" />
                  <span>تسجيل خروج</span>
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};