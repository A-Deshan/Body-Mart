import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
interface CardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  noPadding?: boolean;
  hoverEffect?: boolean;
}
export function Card({
  children,
  className = '',
  noPadding = false,
  hoverEffect = false,
  ...props
}: CardProps) {
  return <motion.div className={`
        bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden
        ${noPadding ? '' : 'p-6'}
        ${className}
      `} whileHover={hoverEffect ? {
    y: -4,
    boxShadow: '0 10px 25px -5px rgba(188, 15, 15, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)'
  } : undefined} transition={{
    duration: 0.2
  }} {...props}>
      {children}
    </motion.div>;
}