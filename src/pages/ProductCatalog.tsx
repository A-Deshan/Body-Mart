import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { ProductCard } from '../components/ProductCard';
import { ProductFilter } from '../components/ProductFilter';
import { mockProducts } from '../utils/mockData';
export function ProductCatalog() {
  const [filteredProducts, setFilteredProducts] = useState(mockProducts);
  const handleFilterChange = (filters: any) => {
    // In a real app, this would filter based on the criteria
    // For now, we just shuffle or filter simply to show interaction
    let result = [...mockProducts];
    if (filters.category.length > 0) {
      result = result.filter(p => filters.category.includes(p.category));
    }
    if (filters.goal.length > 0) {
      result = result.filter(p => filters.goal && filters.goal.includes(p.fitnessGoal));
    }
    setFilteredProducts(result);
  };
  return <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Filter */}
          <aside className="w-full md:w-64 flex-shrink-0">
            <div className="sticky top-24">
              <ProductFilter onFilterChange={handleFilterChange} />
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-gray-900">All Products</h1>
              <p className="text-gray-600 text-sm mt-1">
                Showing {filteredProducts.length} results
              </p>
            </div>

            {filteredProducts.length > 0 ? <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => <motion.div key={product.id} layout initial={{
              opacity: 0
            }} animate={{
              opacity: 1
            }} exit={{
              opacity: 0
            }}>
                    <ProductCard product={product} />
                  </motion.div>)}
              </motion.div> : <div className="text-center py-20 bg-white rounded-xl border border-gray-200">
                <p className="text-gray-500 text-lg">
                  No products found matching your filters.
                </p>
                <button onClick={() => window.location.reload()} className="mt-4 text-primary-600 font-medium hover:underline">
                  Clear all filters
                </button>
              </div>}
          </div>
        </div>
      </main>

      <Footer />
    </div>;
}