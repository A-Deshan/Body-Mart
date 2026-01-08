import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// Public Pages
import { Home } from './pages/Home';
import { ProductCatalog } from './pages/ProductCatalog';
import { ProductDetails } from './pages/ProductDetails';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
// Customer Pages
import { CustomerDashboard } from './pages/customer/CustomerDashboard';
import { Cart } from './pages/customer/Cart';
import { Checkout } from './pages/customer/Checkout';
import { CheckoutSuccess } from './pages/customer/CheckoutSuccess';
// Member Pages
import { MemberDashboard } from './pages/member/MemberDashboard';
// Delivery Pages
import { DeliveryOrders } from './pages/delivery/DeliveryOrders';
function App() {
  return <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductCatalog />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* Customer Routes */}
        <Route path="/customer/dashboard" element={<CustomerDashboard />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/checkout/success" element={<CheckoutSuccess />} />
        <Route path="/customer/orders" element={<CustomerDashboard />} />{' '}
        {/* Reusing dashboard for demo */}
        <Route path="/customer/profile" element={<CustomerDashboard />} />{' '}
        {/* Reusing dashboard for demo */}
        {/* Member Routes */}
        <Route path="/member/dashboard" element={<MemberDashboard />} />
        <Route path="/member/workout-plan" element={<MemberDashboard />} />{' '}
        {/* Reusing dashboard for demo */}
        <Route path="/member/meal-plan" element={<MemberDashboard />} />{' '}
        {/* Reusing dashboard for demo */}
        {/* Delivery Routes */}
        <Route path="/delivery/orders" element={<DeliveryOrders />} />
        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>;
}
export { App };