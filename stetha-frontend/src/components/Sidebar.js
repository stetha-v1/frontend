import React from "react";
import { Link } from 'react-router-dom';
import {
    ShoppingBag, Calendar, Users, MessageSquare,
    Crown, LogOut, Menu, User, Bell, Search,
    X, Settings, Tv, ClipboardList, Pill as PillIcon,
    Brai as BrainIcon, UserCheck, FIleText,
    CHevronDown,
    BotIcon,

} from 'lucide-react';

// Notification icon components insed it,
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
  