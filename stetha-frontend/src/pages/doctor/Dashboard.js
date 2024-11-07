import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';

function DoctorDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div className={`md:flex ${sidebarOpen ? 'block' : 'hidden'}`}>
        <Sidebar isDoctor={true} />
      </div>
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header toggleSidebar={toggleSidebar} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
          <Routes>
            <Route path="/" element={<h1 className="text-2xl font-bold">Welcome to your doctor dashboard</h1>} />
            <Route path="/appointments" element={<h1 className="text-2xl font-bold">Your Appointments</h1>} />
            <Route path="/messages" element={<h1 className="text-2xl font-bold">Your Messages</h1>} />
            <Route path="/patients" element={<h1 className="text-2xl font-bold">Your Patients</h1>} />
            <Route path="/upgrade" element={<h1 className="text-2xl font-bold">Upgrade Account</h1>} />
            <Route path="/settings" element={<h1 className="text-2xl font-bold">Settings</h1>} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default DoctorDashboard;