import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MessageSquare, Calendar, Users, Crown, Settings, LogOut } from 'lucide-react';

const Sidebar = ({ isDoctor }) => {
  const location = useLocation();
  const baseUrl = isDoctor ? '/doc' : '/me';

  const menuItems = [
    { icon: MessageSquare, label: 'Messages', href: `${baseUrl}/messages` },
    { icon: Calendar, label: 'Appointments', href: `${baseUrl}/appointments` },
    { icon: Users, label: isDoctor ? 'Patients' : 'Doctors', href: `${baseUrl}/${isDoctor ? 'patients' : 'doctors'}` },
    { icon: Crown, label: 'Upgrade Account', href: `${baseUrl}/upgrade` },
    { icon: Settings, label: 'Settings', href: `${baseUrl}/settings` },
    { icon: LogOut, label: 'Log Out', href: '/logout' },
  ];

  return (
    <div className="bg-white shadow-md w-64 h-screen flex-shrink-0 hidden md:block">
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
};

export default Sidebar;