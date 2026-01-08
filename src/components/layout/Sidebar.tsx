import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, ShoppingBag, History, User, Settings, LogOut, Dumbbell, Calendar, Utensils, RefreshCw, Truck } from 'lucide-react';
import { UserRole } from '../../types';
interface SidebarProps {
  role: UserRole;
}
export function Sidebar({
  role
}: SidebarProps) {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  const getLinks = (role: UserRole) => {
    switch (role) {
      case 'customer':
        return [{
          name: 'Dashboard',
          path: '/customer/dashboard',
          icon: LayoutDashboard
        }, {
          name: 'My Orders',
          path: '/customer/orders',
          icon: History
        }, {
          name: 'Cart',
          path: '/cart',
          icon: ShoppingBag
        }, {
          name: 'Profile',
          path: '/customer/profile',
          icon: User
        }];
      case 'member':
        return [{
          name: 'Dashboard',
          path: '/member/dashboard',
          icon: LayoutDashboard
        }, {
          name: 'Fitness Profile',
          path: '/member/fitness-profile',
          icon: User
        }, {
          name: 'Workout Plan',
          path: '/member/workout-plan',
          icon: Dumbbell
        }, {
          name: 'Meal Plan',
          path: '/member/meal-plan',
          icon: Utensils
        }, {
          name: 'Recommendations',
          path: '/member/recommendations',
          icon: ShoppingBag
        }, {
          name: 'Renew Membership',
          path: '/member/renew',
          icon: RefreshCw
        }];
      case 'delivery':
        return [{
          name: 'Assigned Orders',
          path: '/delivery/orders',
          icon: Truck
        }, {
          name: 'Profile',
          path: '/delivery/profile',
          icon: User
        }];
      default:
        return [];
    }
  };
  const links = getLinks(role);
  return <div className="w-64 bg-white border-r border-gray-100 h-screen fixed left-0 top-0 flex flex-col z-40">
      {/* Logo Area */}
      <div className="h-16 flex items-center px-6 border-b border-gray-100">
        <Link to="/" className="flex items-center space-x-2">
          <div className="bg-primary-600 p-1.5 rounded-lg">
            <Dumbbell className="w-5 h-5 text-white" />
          </div>
          <span className="text-lg font-bold text-gray-900">
            Body<span className="text-primary-600">Mart</span>
          </span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-6 px-3 space-y-1">
        {links.map(link => {
        const Icon = link.icon;
        const active = isActive(link.path);
        return <Link key={link.path} to={link.path} className={`
                flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition-colors
                ${active ? 'bg-primary-50 text-primary-700' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}
              `}>
              <Icon className={`w-5 h-5 mr-3 ${active ? 'text-primary-600' : 'text-gray-400'}`} />
              {link.name}
            </Link>;
      })}
      </nav>

      {/* User Footer */}
      <div className="p-4 border-t border-gray-100">
        <div className="flex items-center p-2 mb-2 rounded-lg bg-gray-50">
          <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-bold text-xs">
            JD
          </div>
          <div className="ml-3 overflow-hidden">
            <p className="text-sm font-medium text-gray-900 truncate">
              John Doe
            </p>
            <p className="text-xs text-gray-500 truncate capitalize">{role}</p>
          </div>
        </div>
        <button className="flex items-center w-full px-2 py-2 text-sm font-medium text-red-600 rounded-lg hover:bg-red-50 transition-colors">
          <LogOut className="w-4 h-4 mr-3" />
          Sign Out
        </button>
      </div>
    </div>;
}