import React from 'react';
import { 
  Shield, 
  Users, 
  MapPin, 
  Clock, 
  Phone, 
  Mail,
  MessageSquare,
  Award,
  TrendingUp,
  Heart
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const stats = [
    { icon: Users, number: '10,000+', label: 'عضو نشط' },
    { icon: Award, number: '50,000+', label: 'منتج متوفر' },
    { icon: MapPin, number: '15+', label: 'مدينة ليبية' },
    { icon: TrendingUp, number: '95%', label: 'رضا العملاء' }
  ];

  const values = [
    {
      icon: Shield,
      title: 'الثقة والأمان',
      description: 'نضمن لك تجربة آمنة ومحمية مع جميع البائعين المعتمدين'
    },
    {
      icon: Users,
      title: 'المجتمع الليبي',
      description: 'منصة ليبية بحتة تخدم السوق المحلي وتدعم الاقتصاد الوطني'
    },
    {
      icon: Clock,
      title: 'السرعة والفعالية',
      description: 'نوفر لك الوقت والجهد في البحث عن قطع الغيار المطلوبة'
    },
    {
      icon: Heart,
      title: 'خدمة العملاء',
      description: 'فريق دعم متخصص لخدمتك والإجابة على استفساراتك'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" dir="rtl">
            نحن هنا لخدمتك
          </h1>
          <p className="text-xl leading-relaxed" dir="rtl">
            منصة قطع غيار ليبيا هي الوجهة الأولى لبيع وشراء قطع غيار السيارات في ليبيا. 
            نهدف إلى ربط البائعين والمشترين في مكان واحد موثوق وآمن.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mb-4">
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600" dir="rtl">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Story */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4" dir="rtl">
              قصتنا
            </h2>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <p className="text-lg leading-relaxed text-gray-700 mb-6" dir="rtl">
              بدأت فكرة منصة قطع غيار ليبيا من الحاجة الملحة لإيجاد حل للتحديات التي يواجهها 
              أصحاب السيارات في ليبيا عند البحث عن قطع الغيار المناسبة بأسعار معقولة وجودة موثوقة.
            </p>
            
            <p className="text-lg leading-relaxed text-gray-700 mb-6" dir="rtl">
              في عام 2024، قررنا إنشاء هذه المنصة الإلكترونية لتكون الجسر الذي يربط بين 
              البائعين والمشترين في جميع أنحاء ليبيا. نؤمن بأن التكنولوجيا يمكنها تبسيط 
              عملية التجارة وجعلها أكثر شفافية وأماناً.
            </p>
            
            <p className="text-lg leading-relaxed text-gray-700" dir="rtl">
              اليوم، نفخر بكوننا المنصة الرائدة في مجال تجارة قطع غيار السيارات في ليبيا، 
              ونواصل العمل على تطوير خدماتنا لنقدم لكم أفضل تجربة تسوق ممكنة.
            </p>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4" dir="rtl">
              قيمنا ومبادئنا
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-center space-x-4 space-x-reverse mb-4">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center">
                    <value.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900" dir="rtl">
                    {value.title}
                  </h3>
                </div>
                <p className="text-gray-600" dir="rtl">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4" dir="rtl">
              تواصل معنا
            </h2>
            <p className="text-gray-600" dir="rtl">
              نحن هنا لمساعدتك والإجابة على جميع استفساراتك
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <Phone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2" dir="rtl">الهاتف</h3>
              <p className="text-gray-600">+218 91 234 5678</p>
              <p className="text-gray-600">+218 21 123 4567</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2" dir="rtl">البريد الإلكتروني</h3>
              <p className="text-gray-600">info@libya-parts.ly</p>
              <p className="text-gray-600">support@libya-parts.ly</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <MessageSquare className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2" dir="rtl">واتساب</h3>
              <p className="text-gray-600">+218 91 234 5678</p>
              <button className="mt-3 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors duration-200">
                ارسل رسالة
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};