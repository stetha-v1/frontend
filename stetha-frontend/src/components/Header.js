import React from 'react';
import { Bell, Menu, User, Settings, LogOut } from 'lucide-react';
import { Popover, Transition } from '@headlessui/react';
import { Fragment } from 'react';

function Header({ toggleSidebar }) {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <button
              onClick={toggleSidebar}
              className="text-gray-500 hover:text-[#0077B6] focus:outline-none focus:ring-2 focus:ring-[#0077B6] rounded-md md:hidden"
              aria-label="Toggle sidebar"
            >
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
            <h1 className="ml-2 text-xl font-bold text-[#0077B6] md:ml-0"></h1>
          </div>
          <div className="flex items-center space-x-4">
            <button 
              className="relative p-2 text-gray-400 hover:text-[#0077B6] focus:outline-none focus:ring-2 focus:ring-[#0077B6] rounded-full"
              aria-label="Notifications"
            >
              <Bell className="h-6 w-6" aria-hidden="true" />
              <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400 ring-2 ring-white"></span>
            </button>
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button 
                    className="flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-[#0077B6] rounded-full"
                    aria-label="Open user menu"
                  >
                    <img
                      src="/assets/davy.jpg"
                      alt="User avatar"
                      className="h-10 w-10 rounded-full border-2 border-[#00B4D8]"
                    />
                    <span className="hidden md:flex ml-2 font-medium text-gray-700">David Njoroge</span>
                  </Popover.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                      <div className="px-4 py-2 border-b border-gray-100">
                        <p className="text-sm font-medium text-gray-700">David Njoroge</p>
                        <p className="text-xs text-gray-500">ID: 12345</p>
                      </div>
                      <a
                        href="#profile"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center"
                      >
                        <User className="h-4 w-4 mr-2 text-[#0077B6]" />
                        Profile
                      </a>
                      <a
                        href="#settings"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center"
                      >
                        <Settings className="h-4 w-4 mr-2 text-[#0077B6]" />
                        Settings
                      </a>
                      <a
                        href="#logout"
                        className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-50 flex items-center"
                      >
                        <LogOut className="h-4 w-4 mr-2 text-red-600" />
                        Log out
                      </a>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;