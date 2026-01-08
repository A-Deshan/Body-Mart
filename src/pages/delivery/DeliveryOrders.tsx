import React from 'react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { DeliveryOrderCard } from '../../components/DeliveryOrderCard';
import { mockOrders } from '../../utils/mockData';
export function DeliveryOrders() {
  return <DashboardLayout role="delivery">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Assigned Deliveries
          </h1>
          <p className="text-gray-600 mt-1">
            You have 3 orders to deliver today.
          </p>
        </div>

        <div className="space-y-4">
          {mockOrders.map(order => <DeliveryOrderCard key={order.id} order={order} onUpdateStatus={(id, status) => console.log(id, status)} />)}
        </div>
      </div>
    </DashboardLayout>;
}