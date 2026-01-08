export type UserRole = 'customer' | 'member' | 'delivery';
export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
  membershipExpiry?: string; // ISO date string
  membershipTier?: 'basic' | 'premium' | 'elite';
}
export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  stock: number;
  fitnessGoal?: 'weight-loss' | 'muscle-gain' | 'endurance' | 'general-health';
  rating: number;
  reviews: number;
}
export interface CartItem extends Product {
  quantity: number;
}
export type OrderStatus = 'pending' | 'processing' | 'shipped' | 'delivered';
export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  total: number;
  status: OrderStatus;
  date: string;
  shippingAddress: string;
  paymentMethod: 'stripe' | 'cod';
}
export interface Workout {
  id: string;
  day: string; // e.g., "Monday"
  title: string;
  exercises: Exercise[];
}
export interface Exercise {
  name: string;
  sets: number;
  reps: string;
  rest: string; // e.g., "60s"
}
export interface MealPlan {
  id: string;
  day: string;
  meals: {
    type: 'breakfast' | 'lunch' | 'dinner' | 'snack';
    name: string;
    calories: number;
    protein: number;
    carbs: number;
    fats: number;
  }[];
}
export interface SupplementRecommendation {
  id: string;
  productId: string;
  reason: string;
  priority: 'high' | 'medium' | 'low';
}