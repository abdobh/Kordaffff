export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  condition: 'new' | 'used';
  city: 'tripoli' | 'benghazi';
  images: string[];
  sellerId: string;
  createdAt: Date;
  category: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'buyer' | 'seller' | 'admin';
  city: string;
  phone?: string;
  createdAt: Date;
}

export interface Subscription {
  id: string;
  userId: string;
  packageType: 'free' | 'bronze' | 'silver' | 'gold';
  startDate: Date;
  endDate: Date;
  maxProducts: number;
  isActive: boolean;
}

export interface CartItem {
  id: string;
  product: Product;
  quantity: number;
}

export interface Message {
  id: string;
  fromUserId: string;
  toUserId: string;
  productId?: string;
  content: string;
  isRead: boolean;
  createdAt: Date;
}

export interface Package {
  id: string;
  name: string;
  nameAr: string;
  price: number;
  duration: number; // days
  maxProducts: number;
  features: string[];
  featuresAr: string[];
  color: string;
}