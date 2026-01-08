import React, { forwardRef } from 'react';
import { ChevronDown } from 'lucide-react';
interface SelectOption {
  value: string;
  label: string;
}
interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: SelectOption[];
  error?: string;
}
export const Select = forwardRef<HTMLSelectElement, SelectProps>(({
  label,
  options,
  error,
  className = '',
  ...props
}, ref) => {
  return <div className="w-full">
        {label && <label className="block text-sm font-medium text-gray-700 mb-1.5">
            {label}
          </label>}
        <div className="relative">
          <select ref={ref} className={`
              w-full px-4 py-2.5 pr-10 rounded-lg border bg-white text-gray-900 appearance-none
              focus:outline-none focus:ring-2 focus:ring-offset-0 transition-all duration-200
              ${error ? 'border-red-300 focus:border-red-500 focus:ring-red-200' : 'border-gray-300 focus:border-primary-500 focus:ring-primary-200'}
              ${props.disabled ? 'bg-gray-50 text-gray-500 cursor-not-allowed' : ''}
              ${className}
            `} {...props}>
            {options.map(option => <option key={option.value} value={option.value}>
                {option.label}
              </option>)}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-gray-500">
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>
        {error && <p className="mt-1.5 text-sm text-red-600 animate-fade-in">{error}</p>}
      </div>;
});
Select.displayName = 'Select';