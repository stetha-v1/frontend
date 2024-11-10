import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, MessageCircle, Users, Calendar, ShoppingBag, Zap, Bot, Settings, Crown, LogOut } from 'lucide-react';

function Sidebar() {
  const location = useLocation();
  const baseUrl = '/me';

  const mainMenuItems = [
    { icon: Home, label: 'Dashboard', href: `${baseUrl}`, color: 'text-blue-600 bg-blue-100 hover:bg-blue-200' },
    { icon: MessageCircle, label: 'Messages', href: `${baseUrl}/messages`, color: 'text-green-600 bg-green-100 hover:bg-green-200' },
    { icon: Users, label: 'Doctors', href: `${baseUrl}/doctors`, color: 'text-yellow-600 bg-yellow-100 hover:bg-yellow-200' },
    { icon: Calendar, label: 'Appointments', href: `${baseUrl}/appointments`, color: 'text-pink-600 bg-pink-100 hover:bg-pink-200' },
    { icon: ShoppingBag, label: 'Shop', href: `${baseUrl}/health-products`, color: 'text-purple-600 bg-purple-100 hover:bg-purple-200' },
  ];

  const bottomMenuItems = [
    { icon: Zap, label: 'Early Access', href: `${baseUrl}/early-access`, color: 'text-emerald-600 bg-emerald-100 hover:bg-emerald-200' },
    { icon: Bot, label: 'Stetha AI', href: `${baseUrl}/ai`, color: 'text-cyan-600 bg-cyan-100 hover:bg-cyan-200' },
    { icon: Settings, label: 'Settings', href: `${baseUrl}/settings`, color: 'text-gray-600 bg-gray-100 hover:bg-gray-200' },
    { icon: Crown, label: 'Premium', href: `${baseUrl}/upgrade`, color: 'text-amber-600 bg-amber-100 hover:bg-amber-200' },
  ];

  const renderMenuItem = (item) => {
    const Icon = item.icon;
    return (
      <Link
        key={item.href}
        to={item.href}
        className={`flex items-center py-3 px-4 transition-all duration-200 rounded-xl mb-3 ${item.color} ${
          location.pathname === item.href
            ? 'font-medium ring-2 ring-offset-2 ring-offset-gray-50 ring-gray-300 shadow-md transform scale-105'
            : 'hover:shadow-md hover:transform hover:scale-105'
        }`}
      >
        <Icon className="h-6 w-6 mr-4" />
        <span className="text-sm font-medium">{item.label}</span>
      </Link>
    );
  };

  return (
    <div className="bg-gray-50 w-64 h-screen flex-shrink-0 flex flex-col overflow-hidden shadow-lg">
      <div className="p-6 border-b border-gray-200 flex items-center justify-center bg-gradient-to-r from-blue-500 to-cyan-500">
        <img src="/assets/st.png" alt="Stetha Logo" className="h-10 mr-3" />
        <h2 className="text-3xl font-bold text-white">Stetha</h2>
      </div>
      <nav className="flex-grow py-8 flex flex-col justify-between overflow-y-auto px-4 space-y-8">
        <div className="space-y-2">
          {mainMenuItems.map(renderMenuItem)}
        </div>
        <div className="space-y-2">
          {bottomMenuItems.map(renderMenuItem)}
          <Link
            to="/logout"
            className="flex items-center py-3 px-4 text-white bg-red-500 hover:bg-red-600 transition-all duration-200 rounded-xl mt-4 hover:shadow-md hover:transform hover:scale-105"
          >
            <LogOut className="h-6 w-6 mr-4" />
            <span className="text-sm font-medium">Log Out</span>
          </Link>
        </div>
      </nav>
      <div className="p-4 border-t border-gray-200 bg-gray-100">
        <div className="flex items-center space-x-3">
          <img src="/assets/davy.jpg" alt="User Avatar" className="h-10 w-10 rounded-full border-2 border-blue-500" />
          <div>
            <p className="text-sm font-medium text-gray-900">David Njoroge</p>
            <p className="text-xs text-gray-500">Premium Member</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;