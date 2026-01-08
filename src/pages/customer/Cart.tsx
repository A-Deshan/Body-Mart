import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Navbar } from '../../components/layout/Navbar';
import { Footer } from '../../components/layout/Footer';
import { CartItem } from '../../components/CartItem';
import { Button } from '../../components/ui/Button';
import { mockProducts } from '../../utils/mockData';
export function Cart() {
  // Mock cart state
  const [cartItems, setCartItems] = useState([{
    ...mockProducts[0],
    quantity: 1
  }, {
    ...mockProducts[2],
    quantity: 2
  }]);
  const updateQuantity = (id: string, qty: number) => {
    setCartItems(items => items.map(item => item.id === id ? {
      ...item,
      quantity: qty
    } : item));
  };
  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = subtotal > 50 ? 0 : 10;
  const total = subtotal + shipping;
  return <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
          <p className="text-gray-600 mt-1">
            {cartItems.length} items in your cart
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Cart Items */}
          <div className="flex-1 bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
            {cartItems.length > 0 ? <div className="divide-y divide-gray-100">
                {cartItems.map(item => <CartItem key={item.id} item={item} onUpdateQuantity={updateQuantity} onRemove={removeItem} />)}
              </div> : <div className="text-center py-12">
                <p className="text-gray-500 mb-6">Your cart is empty</p>
                <Link to="/products">
                  <Button>Start Shopping</Button>
                </Link>
              </div>}

            {cartItems.length > 0 && <div className="mt-8">
                <Link to="/products" className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Continue Shopping
                </Link>
              </div>}
          </div>

          {/* Summary */}
          {cartItems.length > 0 && <div className="w-full lg:w-96">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 sticky top-24">
                <h2 className="text-lg font-bold text-gray-900 mb-6">
                  Order Summary
                </h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span>
                      {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                    </span>
                  </div>
                  <div className="border-t border-gray-100 pt-4 flex justify-between text-lg font-bold text-gray-900">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                <Link to="/checkout">
                  <Button className="w-full" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
                    Proceed to Checkout
                  </Button>
                </Link>

                <div className="mt-6 text-center">
                  <p className="text-xs text-gray-500">
                    Secure checkout powered by Stripe
                  </p>
                </div>
              </div>
            </div>}
        </div>
      </main>

      <Footer />
    </div>;
}