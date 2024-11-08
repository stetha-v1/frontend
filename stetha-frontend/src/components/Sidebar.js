import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Sidebar() {
  const location = useLocation();
  const baseUrl = '/me';

  const mainMenuItems = [
    { icon: '/assets/icons/dashboard.png', label: 'Dashboard', href: `${baseUrl}`, color: 'bg-blue-100 hover:bg-blue-200 text-blue-800' },
    { icon: '/assets/icons/message.png', label: 'Messages', href: `${baseUrl}/messages`, color: 'bg-green-300 hover:bg-green-200 text-green-800' },
    { icon: '/assets/icons/doctor.png', label: 'Doctors', href: `${baseUrl}/doctors`, color: 'bg-blue-100 hover:bg-blue-200 text-yellow-800' },
    { icon: '/assets/icons/appointments.png', label: 'Appointments', href: `${baseUrl}/appointments`, color: 'bg-blue-100 hover:bg-pink-200 text-pink-800' },
    { icon: '/assets/icons/shop.png', label: 'Shop', href: `${baseUrl}/health-products`, color: 'bg-blue-100 hover:bg-purple-200 text-purple-800' },
    //{ icon: '/assets/icons/invite.png', label: 'Invite a Friend', href: `${baseUrl}/invite`, color: 'bg-indigo-100 hover:bg-indigo-200 text-indigo-800' },
  ];

  const bottomMenuItems = [
    { icon: '/assets/icons/early-access.png', label: 'Early Access', href: `${baseUrl}/early-access`, color: 'bg-emerald-100 hover:bg-emerald-200 text-emerald-800' },
    { icon: '/assets/icons/ai.png', label: 'Stetha AI', href: `${baseUrl}/ai`, color: 'bg-cyan-100 hover:bg-cyan-200 text-cyan-800' },
    { icon: '/assets/icons/settings.png', label: 'Settings', href: `${baseUrl}/settings`, color: 'bg-gray-100 hover:bg-gray-200 text-gray-800' },
    { icon: '/assets/icons/premium.png', label: 'Premium', href: `${baseUrl}/upgrade`, color: 'bg-amber-100 hover:bg-amber-200 text-amber-800' },
  ];

  const renderMenuItem = (item) => (
    <Link
      key={item.href}
      to={item.href}
      className={`flex items-center py-3 px-6 transition-colors duration-200 rounded-lg mx-2 mb-3 ${item.color} ${
        location.pathname === item.href ? 'font-medium ring-2 ring-offset-2 ring-offset-beige-100 ring-gray-300' : ''
      }`}
    >
      <img src={item.icon} alt={item.label} className="h-5 w-5 mr-3" />
      <span>{item.label}</span>
    </Link>
  );

  return (
    <div className="bg-beige-100 w-64 h-screen flex-shrink-0 flex flex-col rounded-r-2xl overflow-hidden shadow-lg">
      <div className="p-6 border-b border-beige-200 flex items-center">
        <img src="/assets/st.png" alt="Stetha Logo" className="h-8 mr-3" />
        <h2 className="text-3xl font-bold text-gray-800">Stetha</h2>
      </div>
      <nav className="flex-grow py-6 flex flex-col justify-between overflow-y-auto px-2">
        <div className="space-y-2">
          {mainMenuItems.map(renderMenuItem)}
        </div>
        <div className="mt-auto space-y-2">
          {bottomMenuItems.map(renderMenuItem)}
          <Link
            to="/logout"
            className="flex items-center py-3 px-6 text-white bg-red-500 hover:bg-red-600 transition-colors duration-200 rounded-lg mx-2 mb-3"
          >
            <img src="/assets/icons/logout.png" alt="Log Out" className="h-5 w-5 mr-3" />
            <span>Log Out</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;