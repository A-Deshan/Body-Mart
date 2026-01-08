import React from 'react';
import { motion } from 'framer-motion';
interface Tab {
  id: string;
  label: string;
}
interface TabsProps {
  tabs: Tab[];
  activeTab: string;
  onChange: (id: string) => void;
  className?: string;
}
export function Tabs({
  tabs,
  activeTab,
  onChange,
  className = ''
}: TabsProps) {
  return <div className={`flex space-x-1 bg-gray-100 p-1 rounded-xl ${className}`}>
      {tabs.map(tab => <button key={tab.id} onClick={() => onChange(tab.id)} className={`
            relative px-4 py-2 text-sm font-medium rounded-lg outline-none transition-colors
            ${activeTab === tab.id ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700'}
          `}>
          {activeTab === tab.id && <motion.div layoutId="activeTab" className="absolute inset-0 bg-white rounded-lg shadow-sm" transition={{
        type: 'spring',
        bounce: 0.2,
        duration: 0.6
      }} />}
          <span className="relative z-10">{tab.label}</span>
        </button>)}
    </div>;
}