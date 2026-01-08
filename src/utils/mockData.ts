import { Product, Order, User, Workout, MealPlan } from '../types';
export const mockProducts: Product[] = [{
  id: '1',
  name: 'Whey Protein Isolate',
  category: 'Supplements',
  price: 49.99,
  image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&q=80&w=1000',
  description: 'Premium grass-fed whey protein isolate for maximum muscle recovery.',
  stock: 120,
  fitnessGoal: 'muscle-gain',
  rating: 4.8,
  reviews: 124
}, {
  id: '2',
  name: 'Adjustable Dumbbells Set',
  category: 'Equipment',
  price: 299.99,
  image: 'https://images.unsplash.com/photo-1638536532686-d610adfc8e5c?auto=format&fit=crop&q=80&w=1000',
  description: 'Space-saving adjustable dumbbells ranging from 5 to 52.5 lbs.',
  stock: 15,
  fitnessGoal: 'muscle-gain',
  rating: 4.9,
  reviews: 89
}, {
  id: '3',
  name: 'Yoga Mat Pro',
  category: 'Accessories',
  price: 35.0,
  image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?auto=format&fit=crop&q=80&w=1000',
  description: 'Extra thick non-slip yoga mat for comfort and stability.',
  stock: 200,
  fitnessGoal: 'general-health',
  rating: 4.6,
  reviews: 210
}, {
  id: '4',
  name: 'Pre-Workout Energy',
  category: 'Supplements',
  price: 39.99,
  image: 'https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?auto=format&fit=crop&q=80&w=1000',
  description: 'Explosive energy and focus for your most intense workouts.',
  stock: 85,
  fitnessGoal: 'endurance',
  rating: 4.7,
  reviews: 156
}, {
  id: '5',
  name: 'Resistance Bands Set',
  category: 'Accessories',
  price: 24.99,
  image: 'https://images.unsplash.com/photo-1598289431512-b97b0917affc?auto=format&fit=crop&q=80&w=1000',
  description: 'Set of 5 resistance bands with varying intensity levels.',
  stock: 300,
  fitnessGoal: 'weight-loss',
  rating: 4.5,
  reviews: 342
}, {
  id: '6',
  name: 'Kettlebell 16kg',
  category: 'Equipment',
  price: 55.0,
  image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=1000',
  description: 'Cast iron kettlebell for dynamic strength training.',
  stock: 45,
  fitnessGoal: 'muscle-gain',
  rating: 4.8,
  reviews: 76
}];
export const mockOrders: Order[] = [{
  id: 'ORD-001',
  userId: 'user-1',
  items: [{
    ...mockProducts[0],
    quantity: 1
  }, {
    ...mockProducts[4],
    quantity: 1
  }],
  total: 74.98,
  status: 'delivered',
  date: '2023-10-15',
  shippingAddress: '123 Fitness Blvd, Gym City, CA 90210',
  paymentMethod: 'stripe'
}, {
  id: 'ORD-002',
  userId: 'user-1',
  items: [{
    ...mockProducts[1],
    quantity: 1
  }],
  total: 299.99,
  status: 'processing',
  date: '2023-10-28',
  shippingAddress: '123 Fitness Blvd, Gym City, CA 90210',
  paymentMethod: 'stripe'
}, {
  id: 'ORD-003',
  userId: 'user-2',
  items: [{
    ...mockProducts[2],
    quantity: 2
  }],
  total: 70.0,
  status: 'pending',
  date: '2023-10-29',
  shippingAddress: '456 Wellness Way, Healthville, NY 10001',
  paymentMethod: 'cod'
}];
export const mockUsers: User[] = [{
  id: 'user-1',
  name: 'John Doe',
  email: 'john@example.com',
  role: 'customer',
  avatar: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=100'
}, {
  id: 'user-2',
  name: 'Sarah Smith',
  email: 'sarah@example.com',
  role: 'member',
  avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100',
  membershipExpiry: '2024-05-15',
  membershipTier: 'premium'
}, {
  id: 'delivery-1',
  name: 'Mike Driver',
  email: 'mike@bodymart.com',
  role: 'delivery',
  avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100'
}];
export const mockWorkouts: Workout[] = [{
  id: 'w-1',
  day: 'Monday',
  title: 'Upper Body Power',
  exercises: [{
    name: 'Bench Press',
    sets: 4,
    reps: '8-10',
    rest: '90s'
  }, {
    name: 'Overhead Press',
    sets: 3,
    reps: '10-12',
    rest: '60s'
  }, {
    name: 'Pull Ups',
    sets: 3,
    reps: 'Failure',
    rest: '90s'
  }]
}, {
  id: 'w-2',
  day: 'Wednesday',
  title: 'Lower Body Strength',
  exercises: [{
    name: 'Squats',
    sets: 4,
    reps: '6-8',
    rest: '120s'
  }, {
    name: 'Romanian Deadlifts',
    sets: 3,
    reps: '10-12',
    rest: '90s'
  }, {
    name: 'Lunges',
    sets: 3,
    reps: '12 each',
    rest: '60s'
  }]
}, {
  id: 'w-3',
  day: 'Friday',
  title: 'Full Body HIIT',
  exercises: [{
    name: 'Burpees',
    sets: 4,
    reps: '30s',
    rest: '30s'
  }, {
    name: 'Kettlebell Swings',
    sets: 4,
    reps: '45s',
    rest: '30s'
  }, {
    name: 'Box Jumps',
    sets: 4,
    reps: '30s',
    rest: '30s'
  }]
}];
export const mockMealPlan: MealPlan[] = [{
  id: 'mp-1',
  day: 'Monday',
  meals: [{
    type: 'breakfast',
    name: 'Oatmeal with Berries & Whey',
    calories: 450,
    protein: 30,
    carbs: 60,
    fats: 10
  }, {
    type: 'lunch',
    name: 'Chicken Breast & Quinoa Salad',
    calories: 550,
    protein: 45,
    carbs: 50,
    fats: 15
  }, {
    type: 'snack',
    name: 'Greek Yogurt & Almonds',
    calories: 200,
    protein: 15,
    carbs: 10,
    fats: 12
  }, {
    type: 'dinner',
    name: 'Salmon with Asparagus',
    calories: 500,
    protein: 40,
    carbs: 10,
    fats: 30
  }]
}];