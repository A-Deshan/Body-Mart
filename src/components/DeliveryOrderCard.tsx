import React, { Component } from 'react';
import { MapPin, Phone, Package, Navigation } from 'lucide-react';
import { Card } from './ui/Card';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
import { Order } from '../types';
interface DeliveryOrderCardProps {
  order: Order;
  onUpdateStatus: (id: string, status: string) => void;
}
export function DeliveryOrderCard({
  order,
  onUpdateStatus
}: DeliveryOrderCardProps) {
  return <Card className="border-l-4 border-l-primary-500">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-bold text-gray-900 text-lg">Order #{order.id}</h3>
          <p className="text-sm text-gray-500">
            {new Date(order.date).toLocaleDateString()}
          </p>
        </div>
        <Badge variant={order.status === 'delivered' ? 'success' : 'warning'}>
          {order.status}
        </Badge>
      </div>

      <div className="space-y-3 mb-6">
        <div className="flex items-start">
          <MapPin className="w-5 h-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
          <p className="text-gray-700 text-sm">{order.shippingAddress}</p>
        </div>
        <div className="flex items-center">
          <Phone className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" />
          <a href="tel:+15551234567" className="text-primary-600 text-sm font-medium hover:underline">
            +1 (555) 123-4567
          </a>
        </div>
        <div className="flex items-center">
          <Package className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" />
          <p className="text-gray-600 text-sm">
            {order.items.length} items • ${order.total.toFixed(2)}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <Button variant="outline" size="sm" className="w-full" leftIcon={<Navigation className="w-4 h-4" />} onClick={() => window.open(`https://maps.google.com/?q=${encodeURIComponent(order.shippingAddress)}`, '_blank')}>
          Navigate
        </Button>

        {order.status !== 'delivered' && <Button variant="primary" size="sm" className="w-full" onClick={() => onUpdateStatus(order.id, 'delivered')}>
            Mark Delivered
          </Button>}
      </div>
    </Card>;
}