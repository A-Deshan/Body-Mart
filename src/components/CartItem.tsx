import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { CartItem as CartItemType } from '../types';
interface CartItemProps {
  item: CartItemType;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
}
export function CartItem({
  item,
  onUpdateQuantity,
  onRemove
}: CartItemProps) {
  return <div className="flex items-center py-6 border-b border-gray-100 last:border-0">
      {/* Image */}
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg border border-gray-200">
        <img src={item.image} alt={item.name} className="h-full w-full object-cover object-center" />
      </div>

      {/* Details */}
      <div className="ml-4 flex-1 flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div className="flex-1">
          <h3 className="text-base font-medium text-gray-900">
            <a href={`/products/${item.id}`}>{item.name}</a>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{item.category}</p>
          <p className="mt-1 text-sm font-medium text-primary-600">
            ${item.price.toFixed(2)}
          </p>
        </div>

        {/* Controls */}
        <div className="mt-4 sm:mt-0 flex items-center justify-between sm:space-x-6">
          <div className="flex items-center border border-gray-300 rounded-lg">
            <button onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))} className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-l-lg transition-colors" disabled={item.quantity <= 1}>
              <Minus className="w-4 h-4" />
            </button>
            <span className="px-4 py-1 text-sm font-medium text-gray-900 min-w-[2.5rem] text-center">
              {item.quantity}
            </span>
            <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)} className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-r-lg transition-colors">
              <Plus className="w-4 h-4" />
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <p className="text-base font-bold text-gray-900 w-20 text-right">
              ${(item.price * item.quantity).toFixed(2)}
            </p>
            <button onClick={() => onRemove(item.id)} className="text-red-500 hover:text-red-700 p-2 hover:bg-red-50 rounded-full transition-colors">
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>;
}