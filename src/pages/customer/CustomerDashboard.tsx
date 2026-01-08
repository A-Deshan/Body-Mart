import React from 'react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { StatCard } from '../../components/StatCard';
import { OrderCard } from '../../components/OrderCard';
import { ShoppingBag, Clock, CreditCard } from 'lucide-react';
import { mockOrders } from '../../utils/mockData';
export function CustomerDashboard() {
  return <DashboardLayout role="customer">
      <div className="space-y-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Welcome back, John!
          </h1>
          <p className="text-gray-600 mt-1">
            Here's what's happening with your orders.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard title="Total Orders" value="12" icon={ShoppingBag} color="primary" />
          <StatCard title="Pending Delivery" value="2" icon={Clock} color="warning" />
          <StatCard title="Total Spent" value="$1,240" icon={CreditCard} color="info" />
        </div>

        {/* Recent Orders */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-gray-900">Recent Orders</h2>
            <a href="/customer/orders" className="text-sm font-medium text-primary-600 hover:text-primary-700">
              View all
            </a>
          </div>
          <div className="space-y-4">
            {mockOrders.slice(0, 2).map(order => <OrderCard key={order.id} order={order} />)}
          </div>
        </div>
      </div>
    </DashboardLayout>;
}