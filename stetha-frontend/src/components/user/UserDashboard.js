import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShoppingBag, Calendar, Users, MessageSquare, 
  Crown, LogOut, Menu, User, Bell, Search,
  Activity, Heart, Clock, ChevronRight,
  X, Settings, Tv, ClipboardList, Pill as PillIcon,
  Brain as BrainIcon, UserCheck, FileText,
  ChevronDown
} from 'lucide-react';

// Enhanced StatCard with glassmorphism
const StatCard = ({ icon: Icon, title, value, trend }) => (
  <div className="backdrop-blur-md bg-white/70 p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-white/20">
    <div className="flex justify-between items-center">
      <div className="flex items-center space-x-3">
        <div className={`p-2 rounded-lg ${trend > 0 ? 'bg-emerald-100' : 'bg-rose-100'}`}>
          <Icon className={`w-5 h-5 ${trend > 0 ? 'text-emerald-600' : 'text-rose-600'}`} />
        </div>
        <div>
          <p className="text-sm text-gray-600">{title}</p>
          <h4 className="text-xl font-bold">{value}</h4>
        </div>
      </div>
      <span className={`text-sm font-medium ${trend > 0 ? 'text-emerald-600' : 'text-rose-600'}`}>
        {trend > 0 ? '+' : ''}{trend}%
      </span>
    </div>
  </div>
);

// Notification Dropdown Component
const NotificationDropdown = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  
  return (
    <div className="absolute right-0 mt-2 w-80 backdrop-blur-md bg-white/90 rounded-lg shadow-lg border border-white/20 z-50">
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-3">Notifications</h3>
        <div className="space-y-4">
          {[
            {
              title: "Appointment Reminder",
              message: "Dr. Smith in 30 minutes",
              time: "Just now",
              type: "urgent"
            },
            {
              title: "Medicine Reminder",
              message: "Time to take your evening medication",
              time: "5m ago",
              type: "warning"
            },
            {
              title: "Lab Results",
              message: "Your blood test results are ready",
              time: "1h ago",
              type: "info"
            }
          ].map((notification, index) => (
            <div key={index} className="flex items-start space-x-3 p-2 hover:bg-blue-50 rounded-lg transition-colors">
              <div className={`p-2 rounded-full ${
                notification.type === 'urgent' ? 'bg-rose-100' :
                notification.type === 'warning' ? 'bg-amber-100' : 'bg-blue-100'
              }`}>
                <Bell className={`w-4 h-4 ${
                  notification.type === 'urgent' ? 'text-rose-600' :
                  notification.type === 'warning' ? 'text-amber-600' : 'text-blue-600'
                }`} />
              </div>
              <div>
                <h4 className="font-medium text-sm">{notification.title}</h4>
                <p className="text-xs text-gray-600">{notification.message}</p>
                <span className="text-xs text-gray-400">{notification.time}</span>
              </div>
            </div>
          ))}
        </div>
        <button 
          className="w-full mt-3 p-2 text-sm text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
        >
          View all notifications
        </button>
      </div>
    </div>
  );
};

// Profile Dropdown Component
const ProfileDropdown = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  
  return (
    <div className="absolute right-0 mt-2 w-60 backdrop-blur-md bg-white/90 rounded-lg shadow-lg border border-white/20 z-50">
      <div className="p-4">
        <div className="flex items-center space-x-3 mb-4 pb-4 border-b">
          <img
            src="/assets/davy.jpg"
            alt="Profile"
            className="w-10 h-10 rounded-full border-2 border-blue-500"
          />
          <div>
            <h4 className="font-medium">Davvy</h4>
            <p className="text-sm text-gray-600">Patient ID: #12345</p>
          </div>
        </div>
        {[
          { icon: User, text: "My Profile", path: "/profile" },
          { icon: Settings, text: "Account Settings", path: "/settings" },
          { icon: Bell, text: "Notifications", path: "/notifications" },
          { icon: LogOut, text: "Logout", path: "/logout", className: "text-rose-600 hover:bg-rose-50" }
        ].map((item) => (
          <Link
            key={item.text}
            to={item.path}
            className={`flex items-center space-x-3 p-2 rounded-lg hover:bg-blue-50 transition-colors ${item.className || ''}`}
          >
            <item.icon className="w-4 h-4" />
            <span className="text-sm">{item.text}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

// Main Dashboard Component
const UserDashboard = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const sidebarLinks = [
    { icon: Activity, text: "Dashboard", path: "/me" },
    { icon: Calendar, text: "Appointments", path: "/me/appointments" },
    { icon: Users, text: "Doctors", path: "/doctors" },
    { icon: MessageSquare, text: "Messages", path: "/messages" },
    { icon: FileText, text: "Medical Records", path: "/records" },
    { icon: PillIcon, text: "Medications", path: "/medications" },
    { icon: ShoppingBag, text: "Health Store", path: "/store" },
    { icon: BrainIcon, text: "Mental Health", path: "/mental-health" }
  ];

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Sidebar - Now with fixed position */}
      <aside 
        className={`fixed h-screen overflow-y-auto md:fixed w-72 backdrop-blur-md bg-white/80 shadow-xl transition-all duration-300
          ${isMobileMenuOpen ? 'left-0' : '-left-72'} md:left-0 z-50`}
      >
        <div className="flex items-center justify-between p-6 border-b bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="flex items-center space-x-3">
            <img
              src="/assets/st.png"
              alt="Logo"
              className="w-8 h-8 rounded-lg"
            />
            <h2 className="text-2xl font-bold">Stetha</h2>
          </div>
          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex flex-col h-[calc(100vh-80px)] justify-between p-4">
          <div className="space-y-2">
            {sidebarLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                <link.icon className="w-5 h-5" />
                <span>{link.text}</span>
              </Link>
            ))}
          </div>

          <div className="space-y-2 border-t pt-4">
            <Link to="/premium" className="flex items-center space-x-3 p-3 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600">
              <Crown className="w-5 h-5" />
              <span>Upgrade to Premium</span>
            </Link>
            <Link to="/settings" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100">
              <Settings className="w-5 h-5" />
              <span>Settings</span>
            </Link>
            <Link to="/logout" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-rose-50 hover:text-rose-600">
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Content - Adjusted margin to account for fixed sidebar */}
      <div className="flex-1 md:ml-72">
        {/* Header */}
        <header className="backdrop-blur-md bg-white/80 shadow-sm sticky top-0 z-40">
          <div className="flex justify-between items-center p-4 md:p-6">
            <button
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>

            <div className="flex items-center space-x-4 flex-1 md:flex-none md:ml-8">
              <div className="relative flex-1 md:w-64">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-10 pr-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/50 backdrop-blur-sm"
                />
                <Search className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
              </div>
            </div>

            <div className="flex items-center space-x-6">
  {/* Notification Button */}
  <div className="relative">
    <button
      className="relative"
      onClick={() => {
        setIsNotificationOpen(!isNotificationOpen);
        setIsDropdownOpen(false);
      }}
    >
      <Bell className="w-6 h-6 text-gray-600" />
      <span className="absolute -top-1 -right-1 w-5 h-5 bg-rose-500 rounded-full text-white text-xs flex items-center justify-center">
        3
      </span>
    </button>

    {/* Notification Dropdown with smooth transition */}
    <NotificationDropdown 
      isOpen={isNotificationOpen}
      onClose={() => setIsNotificationOpen(false)}
      className={`absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-4 transition-all duration-300 ease-in-out transform ${isNotificationOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
    />
  </div>

  {/* Profile Dropdown */}
  <div className="relative">
    <button
      className="flex items-center space-x-3"
      onClick={() => {
        setIsDropdownOpen(!isDropdownOpen);
        setIsNotificationOpen(false);
      }}
    >
      <img
        src="/assets/davy.jpg"
        alt="Profile"
        className="w-8 h-8 rounded-full border-2 border-blue-500"
      />
      <span className="hidden md:block font-medium">David NJoroge</span>
      <ChevronDown className="w-4 h-4 text-gray-600" />
    </button>

    {/* Profile Dropdown with smooth transition */}
    <ProfileDropdown
      isOpen={isDropdownOpen}
      onClose={() => setIsDropdownOpen(false)}
      className={`absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg p-4 transition-all duration-300 ease-in-out transform ${isDropdownOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
    />
  </div>
</div>

          </div>
        </header>

        <main className="p-4 md:p-6 space-y-6">
          {/* Welcome Section */}
          <div className="relative backdrop-blur-md bg-gradient-to-r from-blue-600/90 to-purple-600/90 rounded-xl p-6 text-white shadow-lg overflow-hidden">
  {/* Background Image */}
  <img
    src="/assets/st.png"
    alt="background pattern"
    className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
  />

  {/* Content */}
  <div className="relative z-10 flex justify-between items-center space-x-4">
    {/* Profile Section */}
    <div className="flex items-center space-x-4">
      {/* Profile Image */}
      <img
        src="/assets/davy.jpg"
        alt="User avatar"
        className="w-16 h-16 rounded-full border-4 border-white shadow-lg"
      />
      <div>
        <h1 className="text-2xl font-bold mb-1">Welcome back, Davy!</h1>
        <p className="text-blue-100">Your health status is looking good today.</p>
      </div>
    </div>

    {/* View Report Button */}
    <button className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-colors flex items-center space-x-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 12h2m-6 0h.01M4 6h16M4 6a2 2 0 012-2h12a2 2 0 012 2m0 12a2 2 0 01-2 2H6a2 2 0 01-2-2m16 0H4"
        />
      </svg>
      <span>View Report</span>
    </button>
  </div>
</div>


          

          {/* Quick Actions */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
  {[
    { title: 'Book Appointment', icon: Calendar },
    { title: 'Video Consultation', icon: Tv },
    { title: 'Lab Tests', icon: ClipboardList },
    { title: 'Order Medicine', icon: PillIcon }
  ].map((action) => (
    <button
      key={action.title}
      className="relative bg-gradient-to-br from-blue-500 to-purple-600 p-5 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-white text-left group"
    >
      {/* Icon with Background */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 shadow-md">
          <action.icon className="w-6 h-6 text-white" />
        </div>
        <ChevronRight className="w-5 h-5 text-gray-200 group-hover:text-white transition-colors" />
      </div>
      
      {/* Title and Description */}
      <h3 className="font-bold text-lg leading-tight">{action.title}</h3>
      <p className="text-sm text-gray-200 mt-1 opacity-80 group-hover:opacity-100 transition-opacity">
        Quick access
      </p>
    </button>
  ))}
</div>
{/* Stats Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard icon={Activity} title="Heart Rate" value="72 bpm" trend={5} />
            <StatCard icon={Clock} title="Sleep" value="7.3 hrs" trend={-2} />
            <StatCard icon={Heart} title="Blood Pressure" value="120/80" trend={3} />
            <StatCard icon={Activity} title="Steps" value="8,234" trend={12} />
          </div>


          {/* Recent Activities */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Recent Activities</h3>
              <button className="text-blue-600 hover:text-blue-700">View all</button>
            </div>
            <div className="space-y-4">
              {[
                {
                  action: "Appointment Scheduled",
                  description: "Dental checkup with Dr. Michael Chen",
                  time: "2 hours ago",
                  icon: Calendar
                },
                {
                  action: "Medicine Reminder",
                  description: "Take vitamin supplements",
                  time: "5 hours ago",
                  icon: PillIcon
                },
                {
                  action: "Health Record Updated",
                  description: "Blood test results added",
                  time: "Yesterday",
                  icon: FileText
                }
              ].map((activity, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <activity.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium">{activity.action}</h4>
                    <p className="text-sm text-gray-600">{activity.description}</p>
                  </div>
                  <span className="text-sm text-gray-500">{activity.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Health Tips Section */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Daily Health Tips</h3>
              <button className="text-blue-600 hover:text-blue-700">View all tips</button>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                {
                  title: "Stay Hydrated",
                  description: "Drink at least 8 glasses of water daily for optimal health.",
                  icon: Activity
                },
                {
                  title: "Regular Exercise",
                  description: "30 minutes of daily exercise can improve your overall health.",
                  icon: UserCheck
                },
                {
                  title: "Mental Wellness",
                  description: "Practice mindfulness and take regular breaks during work.",
                  icon: Activity
                }
              ].map((tip) => (
                <div key={tip.title} className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <tip.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <h4 className="font-medium">{tip.title}</h4>
                  </div>
                  <p className="text-sm text-gray-600">{tip.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <footer className="mt-8 text-center text-gray-600 text-sm">
            <p>© 2024 Stetha. All rights reserved.</p>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default UserDashboard;