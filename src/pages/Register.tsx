import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Dumbbell, User, Users, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Card } from '../components/ui/Card';
export function Register() {
  const navigate = useNavigate();
  const [step, setStep] = useState<'role' | 'form'>('role');
  const [role, setRole] = useState<'customer' | 'member'>('customer');
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate(role === 'member' ? '/member/dashboard' : '/customer/dashboard');
    }, 1500);
  };
  return <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <Link to="/" className="inline-flex items-center space-x-2 mb-6">
            <div className="bg-primary-600 p-2 rounded-lg">
              <Dumbbell className="w-8 h-8 text-white" />
            </div>
          </Link>
          <h2 className="text-3xl font-bold text-gray-900">
            Create an account
          </h2>
          <p className="mt-2 text-gray-600">
            Join BodyMart to start your journey
          </p>
        </div>

        {step === 'role' ? <div className="space-y-4">
            <Card className={`cursor-pointer transition-all ${role === 'customer' ? 'ring-2 ring-primary-500 shadow-md' : 'hover:bg-gray-50'}`} onClick={() => setRole('customer')}>
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                  <User className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Customer</h3>
                  <p className="text-sm text-gray-500">
                    Shop for products and track orders
                  </p>
                </div>
              </div>
            </Card>

            <Card className={`cursor-pointer transition-all ${role === 'member' ? 'ring-2 ring-primary-500 shadow-md' : 'hover:bg-gray-50'}`} onClick={() => setRole('member')}>
              <div className="flex items-center space-x-4">
                <div className="bg-green-100 p-3 rounded-full text-green-600">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Gym Member</h3>
                  <p className="text-sm text-gray-500">
                    Access workout plans, meals & discounts
                  </p>
                </div>
              </div>
            </Card>

            <Button className="w-full mt-6" size="lg" onClick={() => setStep('form')}>
              Continue as {role === 'customer' ? 'Customer' : 'Member'}
            </Button>
          </div> : <form className="bg-white p-8 rounded-2xl shadow-lg space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Input label="First Name" placeholder="John" required />
                <Input label="Last Name" placeholder="Doe" required />
              </div>
              <Input label="Email" type="email" placeholder="you@example.com" required />
              <Input label="Password" type="password" placeholder="••••••••" required />
              <Input label="Confirm Password" type="password" placeholder="••••••••" required />
            </div>

            <Button type="submit" className="w-full" size="lg" isLoading={isLoading} rightIcon={<ArrowRight className="w-4 h-4" />}>
              Create Account
            </Button>

            <button type="button" onClick={() => setStep('role')} className="w-full text-sm text-gray-500 hover:text-gray-900">
              Back to role selection
            </button>
          </form>}

        <div className="text-center text-sm">
          <span className="text-gray-500">Already have an account? </span>
          <Link to="/login" className="font-medium text-primary-600 hover:text-primary-500">
            Sign in
          </Link>
        </div>
      </div>
    </div>;
}