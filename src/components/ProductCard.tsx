import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Star } from 'lucide-react';
import { Card } from './ui/Card';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
import { Product } from '../types';
interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
}
export function ProductCard({
  product,
  onAddToCart
}: ProductCardProps) {
  return <Card hoverEffect noPadding className="flex flex-col h-full group">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" />
        {product.stock < 10 && product.stock > 0 && <div className="absolute top-2 left-2">
            <Badge variant="warning">Low Stock</Badge>
          </div>}
        {product.stock === 0 && <div className="absolute top-2 left-2">
            <Badge variant="error">Out of Stock</Badge>
          </div>}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <div className="mb-2">
          <p className="text-xs text-primary-600 font-semibold uppercase tracking-wide">
            {product.category}
          </p>
          <Link to={`/products/${product.id}`}>
            <h3 className="text-lg font-bold text-gray-900 mt-1 line-clamp-1 hover:text-primary-600 transition-colors">
              {product.name}
            </h3>
          </Link>
        </div>

        {/* Rating */}
        <div className="flex items-center mb-3">
          <Star className="w-4 h-4 text-yellow-400 fill-current" />
          <span className="ml-1 text-sm font-medium text-gray-900">
            {product.rating}
          </span>
          <span className="mx-1 text-gray-300">•</span>
          <span className="text-sm text-gray-500">
            {product.reviews} reviews
          </span>
        </div>

        <p className="text-sm text-gray-600 line-clamp-2 mb-4 flex-1">
          {product.description}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
          <span className="text-xl font-bold text-gray-900">
            ${product.price.toFixed(2)}
          </span>
          <Button size="sm" onClick={() => onAddToCart && onAddToCart(product)} disabled={product.stock === 0} leftIcon={<ShoppingCart className="w-4 h-4" />}>
            Add
          </Button>
        </div>
      </div>
    </Card>;
}