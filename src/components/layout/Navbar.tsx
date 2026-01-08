import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart, User, Dumbbell } from 'lucide-react';
import { Button } from '../ui/Button';
import { motion, AnimatePresence } from 'framer-motion';
export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  // Mock auth state - in real app this comes from context
  const isAuthenticated = false;
  const navLinks = [{
    name: 'Home',
    path: '/'
  }, {
    name: 'Shop',
    path: '/products'
  }, {
    name: 'Membership',
    path: '/#membership'
  }, {
    name: 'About',
    path: '/#about'
  }];
  const isActive = (path: string) => location.pathname === path;
  return <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-primary-600 p-1.5 rounded-lg group-hover:bg-primary-700 transition-colors">
              <Dumbbell className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900 tracking-tight">
              Body<span className="text-primary-600">Mart</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => <Link key={link.name} to={link.path} className={`text-sm font-medium transition-colors hover:text-primary-600 ${isActive(link.path) ? 'text-primary-600' : 'text-gray-600'}`}>
                {link.name}
              </Link>)}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/cart" className="relative p-2 text-gray-600 hover:text-primary-600 transition-colors">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-red-500 rounded-full">
                2
              </span>
            </Link>

            {isAuthenticated ? <Link to="/customer/dashboard">
                <Button variant="ghost" size="sm" leftIcon={<User className="w-4 h-4" />}>
                  Dashboard
                </Button>
              </Link> : <div className="flex items-center space-x-3">
                <Link to="/login">
                  <Button variant="ghost" size="sm">
                    Log in
                  </Button>
                </Link>
                <Link to="/register">
                  <Button variant="primary" size="sm">
                    Sign up
                  </Button>
                </Link>
              </div>}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-4">
            <Link to="/cart" className="relative p-2 text-gray-600">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-red-500 rounded-full">
                2
              </span>
            </Link>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-gray-600 hover:text-gray-900">
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && <motion.div initial={{
        opacity: 0,
        height: 0
      }} animate={{
        opacity: 1,
        height: 'auto'
      }} exit={{
        opacity: 0,
        height: 0
      }} className="md:hidden bg-white border-b border-gray-100 overflow-hidden">
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map(link => <Link key={link.name} to={link.path} onClick={() => setIsMobileMenuOpen(false)} className={`block px-3 py-2 rounded-md text-base font-medium ${isActive(link.path) ? 'bg-primary-50 text-primary-700' : 'text-gray-700 hover:bg-gray-50'}`}>
                  {link.name}
                </Link>)}
              <div className="pt-4 border-t border-gray-100 space-y-3">
                <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start">
                    Log in
                  </Button>
                </Link>
                <Link to="/register" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="primary" className="w-full">
                    Sign up
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>}
      </AnimatePresence>
    </nav>;
}