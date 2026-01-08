import React from 'react';
import { useParams } from 'react-router-dom';
import { ShoppingCart, Check, Star, Truck, ShieldCheck } from 'lucide-react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { mockProducts } from '../utils/mockData';
export function ProductDetails() {
  const {
    id
  } = useParams();
  const product = mockProducts.find(p => p.id === id) || mockProducts[0];
  return <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden border border-gray-200">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[...Array(4)].map((_, i) => <div key={i} className="aspect-square bg-gray-100 rounded-lg overflow-hidden border border-gray-200 cursor-pointer hover:ring-2 ring-primary-500">
                  <img src={product.image} alt="Thumbnail" className="w-full h-full object-cover opacity-70 hover:opacity-100 transition-opacity" />
                </div>)}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-6">
              <div className="flex items-center space-x-2 mb-2">
                <Badge variant="info">{product.category}</Badge>
                {product.stock < 10 && <Badge variant="warning">Low Stock</Badge>}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {product.name}
              </h1>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="ml-1 font-bold text-gray-900">
                    {product.rating}
                  </span>
                  <span className="ml-1 text-gray-500">
                    ({product.reviews} reviews)
                  </span>
                </div>
                <span className="text-gray-300">|</span>
                <span className="text-green-600 font-medium flex items-center">
                  <Check className="w-4 h-4 mr-1" /> In Stock
                </span>
              </div>
            </div>

            <div className="text-3xl font-bold text-gray-900 mb-6">
              ${product.price.toFixed(2)}
            </div>

            <p className="text-gray-600 leading-relaxed mb-8 text-lg">
              {product.description}
            </p>

            <div className="space-y-6 border-t border-gray-100 pt-8">
              <div className="flex items-center space-x-4">
                <div className="w-32">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Quantity
                  </label>
                  <select className="w-full border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
                <div className="flex-1 pt-6">
                  <Button size="lg" className="w-full" leftIcon={<ShoppingCart className="w-5 h-5" />}>
                    Add to Cart
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-xl">
                  <Truck className="w-6 h-6 text-primary-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Free Shipping
                    </h4>
                    <p className="text-sm text-gray-500">On orders over $50</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-xl">
                  <ShieldCheck className="w-6 h-6 text-primary-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      2 Year Warranty
                    </h4>
                    <p className="text-sm text-gray-500">
                      Full coverage included
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>;
}