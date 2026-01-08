import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { Navbar } from '../../components/layout/Navbar';
import { Footer } from '../../components/layout/Footer';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
export function CheckoutSuccess() {
  return <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <main className="flex-1 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <Card className="p-8 text-center">
          <div className="mx-auto mb-4 w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
            <CheckCircle className="w-7 h-7 text-green-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Payment Successful</h1>
          <p className="text-gray-600 mt-2">
            Thanks for your order. You will receive a confirmation email shortly.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/products">
              <Button variant="ghost">Continue Shopping</Button>
            </Link>
            <Link to="/customer/dashboard">
              <Button>View Dashboard</Button>
            </Link>
          </div>
        </Card>
      </main>

      <Footer />
    </div>;
}
