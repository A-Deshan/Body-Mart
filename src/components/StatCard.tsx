import React from 'react';
import { Card } from './ui/Card';
import { BoxIcon } from 'lucide-react';
interface StatCardProps {
  title: string;
  value: string | number;
  icon: BoxIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  color?: 'primary' | 'secondary' | 'warning' | 'info';
}
export function StatCard({
  title,
  value,
  icon: Icon,
  trend,
  color = 'primary'
}: StatCardProps) {
  const colors = {
    primary: 'bg-primary-50 text-primary-600',
    secondary: 'bg-secondary-50 text-secondary-600',
    warning: 'bg-yellow-50 text-yellow-600',
    info: 'bg-blue-50 text-blue-600'
  };
  return <Card>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
          {trend && <div className={`flex items-center mt-2 text-sm ${trend.isPositive ? 'text-green-600' : 'text-red-600'}`}>
              <span className="font-medium">
                {trend.isPositive ? '+' : ''}
                {trend.value}%
              </span>
              <span className="ml-1 text-gray-500">from last month</span>
            </div>}
        </div>
        <div className={`p-3 rounded-xl ${colors[color]}`}>
          <Icon className="w-6 h-6" />
        </div>
      </div>
    </Card>;
}