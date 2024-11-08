import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { User2, MessageSquare, ShoppingCart, Calendar, Settings, UserPlus, Crown, LogOut } from 'lucide-react';

function Sidebar() {
  const location = useLocation();
  const baseUrl = '/me';

  const menuItems = [
    { icon: User2, label: 'Dashboard', href: `${baseUrl}` },
    { icon: MessageSquare, label: 'Messages', href: `${baseUrl}/messages` },
    { icon: ShoppingCart, label: 'Health Products', href: `${baseUrl}/health-products` },
    { icon: User2, label: 'Doctors', href: `${baseUrl}/doctors` },
    { icon: Calendar, label: 'Appointments', href: `${baseUrl}/appointments` },
    { icon: Settings, label: 'Settings', href: `${baseUrl}/settings` },
    { icon: UserPlus, label: 'Invite a Friend', href: `${baseUrl}/invite` },
    { icon: Crown, label: 'Upgrade Account', href: `${baseUrl}/upgrade` },
    { icon: LogOut, label: 'Log Out', href: '/logout' },
  ];

  return (
    <div className="bg-white shadow-md w-64 h-screen flex-shrink-0">
      <div className="p-4">
        <h2 className="text-2xl font-semibold text-gray-800">Stetha</h2>
      </div>
      <nav className="mt-4">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            className={`flex items-center py-2 px-4 text-gray-700 hover:bg-gray-200 ${
              location.pathname === item.href ? 'bg-gray-200' : ''
            }`}
          >
            <item.icon className="h-5 w-5 mr-2" />
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}

export default Sidebar;