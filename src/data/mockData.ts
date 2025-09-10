import { Product, User, Subscription, Message, Package } from '../types';

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'محرك تويوتا كورولا 2015',
    description: 'محرك في حالة ممتازة، تم فحصه بالكامل',
    price: 3500,
    condition: 'used',
    city: 'tripoli',
    images: ['https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg'],
    sellerId: '1',
    createdAt: new Date('2024-01-15'),
    category: 'محركات'
  },
  {
    id: '2',
    name: 'علبة تروس أوتوماتيك هوندا أكورد',
    description: 'علبة تروس جديدة لم تستعمل',
    price: 2800,
    condition: 'new',
    city: 'benghazi',
    images: ['https://images.pexels.com/photos/3593922/pexels-photo-3593922.jpeg'],
    sellerId: '2',
    createdAt: new Date('2024-01-20'),
    category: 'علب التروس'
  },
  {
    id: '3',
    name: 'مكابح أمامية نيسان التيما',
    description: 'مكابح أصلية في حالة جيدة',
    price: 450,
    condition: 'used',
    city: 'tripoli',
    images: ['https://images.pexels.com/photos/3593922/pexels-photo-3593922.jpeg'],
    sellerId: '1',
    createdAt: new Date('2024-01-22'),
    category: 'مكابح'
  }
];

export const mockUser: User = {
  id: '1',
  name: 'أحمد محمد',
  email: 'ahmed@example.com',
  role: 'seller',
  city: 'طرابلس',
  phone: '+218912345678',
  createdAt: new Date('2024-01-01')
};

export const mockSubscription: Subscription = {
  id: '1',
  userId: '1',
  packageType: 'gold',
  startDate: new Date('2024-01-01'),
  endDate: new Date('2024-02-01'),
  maxProducts: 100,
  isActive: true
};

export const mockMessages: Message[] = [
  {
    id: '1',
    fromUserId: '2',
    toUserId: '1',
    productId: '1',
    content: 'هل المحرك متوفر للمعاينة؟',
    isRead: false,
    createdAt: new Date('2024-01-23')
  },
  {
    id: '2',
    fromUserId: '3',
    toUserId: '1',
    content: 'ما هو أقل سعر للمكابح؟',
    isRead: false,
    createdAt: new Date('2024-01-24')
  }
];

export const packages: Package[] = [
  {
    id: 'free',
    name: 'Free Package',
    nameAr: 'الباقة المجانية',
    price: 0,
    duration: 7,
    maxProducts: 30,
    features: ['30 Products', '7 Days Duration', 'Basic Support'],
    featuresAr: ['30 منتج', '7 أيام صالحة', 'دعم فني أساسي'],
    color: 'bg-gray-500'
  },
  {
    id: 'bronze',
    name: 'Bronze Package',
    nameAr: 'الباقة البرونزية',
    price: 50,
    duration: 30,
    maxProducts: 100,
    features: ['100 Products', '30 Days Duration', 'Priority Support', 'Analytics'],
    featuresAr: ['100 منتج', '30 يوم صالحة', 'دعم فني متقدم', 'تحليلات النشاط'],
    color: 'bg-amber-600'
  },
  {
    id: 'silver',
    name: 'Silver Package',
    nameAr: 'الباقة الفضية',
    price: 80,
    duration: 60,
    maxProducts: 200,
    features: ['200 Products', '60 Days Duration', 'Priority Support', 'Advanced Analytics', 'Featured Listings'],
    featuresAr: ['200 منتج', '60 يوم صالحة', 'دعم فني متقدم', 'تحليلات متطورة', 'إعلانات مميزة'],
    color: 'bg-gray-400'
  },
  {
    id: 'gold',
    name: 'Gold Package',
    nameAr: 'الباقة الذهبية',
    price: 120,
    duration: 90,
    maxProducts: 500,
    features: ['500 Products', '90 Days Duration', '24/7 Support', 'Premium Analytics', 'Featured Listings', 'Marketing Tools'],
    featuresAr: ['500 منتج', '90 يوم صالحة', 'دعم فني متواصل', 'تحليلات احترافية', 'إعلانات مميزة', 'أدوات تسويقية'],
    color: 'bg-yellow-500'
  }
];