import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard, Truck, CheckCircle } from 'lucide-react';
import { Navbar } from '../../components/layout/Navbar';
import { Footer } from '../../components/layout/Footer';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Card } from '../../components/ui/Card';
export function Checkout() {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState<'stripe' | 'cod'>('stripe');
  const [isProcessing, setIsProcessing] = useState(false);
  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      // alert('Payment successful');
      navigate('/checkout/success');
    }, 2000);
  };
  return <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <main className="flex-1 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">Checkout</h1>
          <p className="text-gray-600 mt-1">Complete your order securely</p>
        </div>

        <form onSubmit={handleCheckout} className="space-y-8">
          {/* Shipping Address */}
          <Card className="p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
              <div className="bg-primary-100 text-primary-600 p-2 rounded-lg mr-3">
                <Truck className="w-5 h-5" />
              </div>
              Shipping Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input label="First Name" required />
              <Input label="Last Name" required />
              <Input label="Address" className="md:col-span-2" required />
              <Input label="City" required />
              <Input label="ZIP / Postal Code" required />
            </div>
          </Card>

          {/* Payment Method */}
          <Card className="p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
              <div className="bg-primary-100 text-primary-600 p-2 rounded-lg mr-3">
                <CreditCard className="w-5 h-5" />
              </div>
              Payment Method
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className={`
                  border rounded-xl p-4 cursor-pointer transition-all flex items-center
                  ${paymentMethod === 'stripe' ? 'border-primary-500 bg-primary-50 ring-1 ring-primary-500' : 'border-gray-200 hover:border-gray-300'}
                `} onClick={() => setPaymentMethod('stripe')}>
                <div className={`w-5 h-5 rounded-full border flex items-center justify-center mr-3 ${paymentMethod === 'stripe' ? 'border-primary-600' : 'border-gray-300'}`}>
                  {paymentMethod === 'stripe' && <div className="w-3 h-3 rounded-full bg-primary-600" />}
                </div>
                <span className="font-medium text-gray-900">
                  Credit Card (Stripe)
                </span>
              </div>

              <div className={`
                  border rounded-xl p-4 cursor-pointer transition-all flex items-center
                  ${paymentMethod === 'cod' ? 'border-primary-500 bg-primary-50 ring-1 ring-primary-500' : 'border-gray-200 hover:border-gray-300'}
                `} onClick={() => setPaymentMethod('cod')}>
                <div className={`w-5 h-5 rounded-full border flex items-center justify-center mr-3 ${paymentMethod === 'cod' ? 'border-primary-600' : 'border-gray-300'}`}>
                  {paymentMethod === 'cod' && <div className="w-3 h-3 rounded-full bg-primary-600" />}
                </div>
                <span className="font-medium text-gray-900">
                  Cash on Delivery
                </span>
              </div>
            </div>

            {paymentMethod === 'stripe' && <div className="space-y-4 bg-gray-50 p-4 rounded-xl">
                <Input label="Card Number" placeholder="0000 0000 0000 0000" />
                <div className="grid grid-cols-2 gap-4">
                  <Input label="Expiry Date" placeholder="MM/YY" />
                  <Input label="CVC" placeholder="123" />
                </div>
              </div>}
          </Card>

          <Button type="submit" className="w-full" size="lg" isLoading={isProcessing} leftIcon={<CheckCircle className="w-5 h-5" />}>
            Pay $349.99
          </Button>
        </form>
      </main>

      <Footer />
    </div>;
}
