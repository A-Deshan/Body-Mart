import React, { useState } from 'react';
import { Filter, ChevronDown, ChevronUp, X } from 'lucide-react';
import { Button } from './ui/Button';
import { motion, AnimatePresence } from 'framer-motion';
interface FilterState {
  category: string[];
  priceRange: [number, number];
  goal: string[];
}
interface ProductFilterProps {
  onFilterChange: (filters: FilterState) => void;
}
export function ProductFilter({
  onFilterChange
}: ProductFilterProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    category: [],
    priceRange: [0, 500],
    goal: []
  });
  const categories = ['Supplements', 'Equipment', 'Apparel', 'Accessories'];
  const goals = ['Weight Loss', 'Muscle Gain', 'Endurance', 'General Health'];
  const toggleFilter = (type: keyof FilterState, value: string) => {
    const current = filters[type] as string[];
    const updated = current.includes(value) ? current.filter(item => item !== value) : [...current, value];
    const newFilters = {
      ...filters,
      [type]: updated
    };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };
  return <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      {/* Mobile Toggle */}
      <div className="p-4 flex items-center justify-between cursor-pointer md:cursor-default" onClick={() => setIsOpen(!isOpen)}>
        <div className="flex items-center space-x-2">
          <Filter className="w-5 h-5 text-primary-600" />
          <span className="font-bold text-gray-900">Filters</span>
          {(filters.category.length > 0 || filters.goal.length > 0) && <span className="bg-primary-100 text-primary-700 text-xs font-bold px-2 py-0.5 rounded-full">
              {filters.category.length + filters.goal.length}
            </span>}
        </div>
        <div className="md:hidden">
          {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </div>
      </div>

      {/* Filter Content */}
      <div className={`
        md:block border-t border-gray-100 md:border-t-0
        ${isOpen ? 'block' : 'hidden'}
      `}>
        <div className="p-4 space-y-6">
          {/* Categories */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wider">
              Category
            </h4>
            <div className="space-y-2">
              {categories.map(cat => <label key={cat} className="flex items-center space-x-3 cursor-pointer group">
                  <div className={`
                    w-5 h-5 rounded border flex items-center justify-center transition-colors
                    ${filters.category.includes(cat) ? 'bg-primary-600 border-primary-600' : 'border-gray-300 group-hover:border-primary-400'}
                  `}>
                    {filters.category.includes(cat) && <X className="w-3 h-3 text-white" />}
                  </div>
                  <input type="checkbox" className="hidden" checked={filters.category.includes(cat)} onChange={() => toggleFilter('category', cat)} />
                  <span className="text-sm text-gray-600 group-hover:text-gray-900">
                    {cat}
                  </span>
                </label>)}
            </div>
          </div>

          {/* Fitness Goals */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wider">
              Fitness Goal
            </h4>
            <div className="space-y-2">
              {goals.map(goal => <label key={goal} className="flex items-center space-x-3 cursor-pointer group">
                  <div className={`
                    w-5 h-5 rounded border flex items-center justify-center transition-colors
                    ${filters.goal.includes(goal) ? 'bg-secondary-600 border-secondary-600' : 'border-gray-300 group-hover:border-secondary-400'}
                  `}>
                    {filters.goal.includes(goal) && <X className="w-3 h-3 text-white" />}
                  </div>
                  <input type="checkbox" className="hidden" checked={filters.goal.includes(goal)} onChange={() => toggleFilter('goal', goal)} />
                  <span className="text-sm text-gray-600 group-hover:text-gray-900">
                    {goal}
                  </span>
                </label>)}
            </div>
          </div>

          {/* Price Range (Simplified) */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wider">
              Price Range
            </h4>
            <div className="flex items-center space-x-4">
              <input type="number" placeholder="Min" className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-primary-500 focus:border-primary-500" />
              <span className="text-gray-400">-</span>
              <input type="number" placeholder="Max" className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-primary-500 focus:border-primary-500" />
            </div>
          </div>

          {/* Clear Button */}
          <Button variant="outline" size="sm" className="w-full" onClick={() => {
          setFilters({
            category: [],
            priceRange: [0, 500],
            goal: []
          });
          onFilterChange({
            category: [],
            priceRange: [0, 500],
            goal: []
          });
        }}>
            Clear All Filters
          </Button>
        </div>
      </div>
    </div>;
}