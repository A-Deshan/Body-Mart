import React from 'react';
import { Package, Truck, CheckCircle, Clock } from 'lucide-react';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';
import { Order } from '../types';
interface OrderCardProps {
  order: Order;
}
export function OrderCard({
  order
}: OrderCardProps) {
  const getStatusConfig = (status: string) => {
    switch (status) {
      case 'delivered':
        return {
          icon: CheckCircle,
          color: 'success',
          label: 'Delivered'
        };
      case 'shipped':
        return {
          icon: Truck,
          color: 'info',
          label: 'Shipped'
        };
      case 'processing':
        return {
          icon: Package,
          color: 'warning',
          label: 'Processing'
        };
      default:
        return {
          icon: Clock,
          color: 'neutral',
          label: 'Pending'
        };
    }
  };
  const statusConfig = getStatusConfig(order.status);
  const StatusIcon = statusConfig.icon;
  return <Card className="hover:border-primary-200 transition-colors">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
        <div>
          <div className="flex items-center space-x-3 mb-1">
            <h3 className="text-lg font-bold text-gray-900">
              Order #{order.id}
            </h3>
            <Badge variant={statusConfig.color as any} className="flex items-center space-x-1">
              <StatusIcon className="w-3 h-3 mr-1" />
              {statusConfig.label}
            </Badge>
          </div>
          <p className="text-sm text-gray-500">
            Placed on {new Date(order.date).toLocaleDateString()}
          </p>
        </div>
        <div className="mt-2 md:mt-0 text-right">
          <p className="text-2xl font-bold text-gray-900">
            ${order.total.toFixed(2)}
          </p>
          <p className="text-xs text-gray-500">{order.items.length} items</p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="relative pt-4 pb-2">
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-100">
          <div style={{
          width: order.status === 'delivered' ? '100%' : order.status === 'shipped' ? '75%' : order.status === 'processing' ? '50%' : '25%'
        }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary-500 transition-all duration-500" />
        </div>
        <div className="flex justify-between text-xs text-gray-500">
          <span>Ordered</span>
          <span>Processing</span>
          <span>Shipped</span>
          <span>Delivered</span>
        </div>
      </div>

      {/* Items Preview */}
      <div className="mt-4 pt-4 border-t border-gray-100">
        <div className="flex -space-x-2 overflow-hidden">
          {order.items.slice(0, 4).map((item, idx) => <img key={idx} className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover bg-gray-100" src={item.image} alt={item.name} />)}
          {order.items.length > 4 && <div className="flex items-center justify-center h-10 w-10 rounded-full ring-2 ring-white bg-gray-100 text-xs font-medium text-gray-600">
              +{order.items.length - 4}
            </div>}
        </div>
      </div>
    </Card>;
}