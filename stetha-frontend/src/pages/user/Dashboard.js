import React, { useState, useEffect } from 'react';
import { User2, Shield, Stethoscope, Camera, Calendar, Globe, Paperclip } from 'lucide-react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside 
        className={`fixed md:static inset-y-0 left-0 z-30 w-64 transform bg-white transition-transform duration-300 ease-in-out ${
          sidebarOpen || !isMobile ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0`}
      >
        <Sidebar />
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <Header toggleSidebar={toggleSidebar} />

        {/* Main Content Area */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-4">
          <div className="space-y-6">
            {/* Search */}
            <div className="relative">
  <input
    type="text"
    placeholder="Search"
    className="w-full rounded-xl bg-white py-3 pl-10 pr-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00B4D8]"
  />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
</div>

            {/* Services */}
            <section>
              <h2 className="mb-4 text-xl font-bold">Services for you</h2>
              <div className="grid grid-cols-4 gap-4">
                <ServiceButton icon={<User2 />} label="Doctors" href="/doctors" />
                <ServiceButton icon={<svg viewBox="0 0 24 24" className="h-6 w-6 text-[#00B4D8]">
                  <path 
                    fill="currentColor" 
                    d="M12 2a4 4 0 014 4v2h1a3 3 0 013 3v7a3 3 0 01-3 3H7a3 3 0 01-3-3v-7a3 3 0 013-3h1V6a4 4 0 014-4zm0 2a2 2 0 00-2 2v2h4V6a2 2 0 00-2-2z"
                  />
                </svg>} label="Dental" href="/dental" />
                <ServiceButton icon={<Shield />} label="Insurance" href="/insurance" />
                <ServiceButton icon={<Stethoscope />} label="Labs" href="/labs" />
              </div>
            </section>

            {/* Promo */}
            <section>
              <div className="relative overflow-hidden rounded-2xl bg-[#F0F3F7] p-6">
                <div className="relative z-10">
                  <h3 className="mb-2 text-2xl font-bold text-[#334257]">Get the Best Medical services</h3>
                  <p className="text-sm text-[#516475]">at stetha we prioritize your health the most</p>
                </div>
                <img
                  src="/assets/photo.jpeg"
                  alt="Medical Service"
                  className="absolute bottom-0 right-0 h-24 w-24 object-cover opacity-50"
                />
              </div>
            </section>

            {/* Quick Access */}
            <section>
              <h2 className="mb-4 text-xl font-bold text-[#334257]">Quick Access</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <QuickAccessCard icon={<Camera />} label="Teleconsultation" href="/teleconsultation" />
                <QuickAccessCard icon={<Calendar />} label="Appointments" href="/appointments" />
                <QuickAccessCard icon={<Globe />} label="Pharmacy" href="/pharmacy" />
                <QuickAccessCard icon={<Paperclip />} label="Reports" href="/reports" />
              </div>
            </section>

            {/* Upcoming Appointments */}
            <section>
              <h2 className="mb-4 text-xl font-bold text-[#334257]">Upcoming Appointments</h2>
              <div className="space-y-4">
                <AppointmentCard
                  image="/placeholder.svg?height=50&width=50"
                  time="10:00 AM"
                  doctor="Dr Mahindra"
                  isActive={true}
                />
                <AppointmentCard
                  image="/placeholder.svg?height=50&width=50"
                  time="2:00 PM"
                  doctor="Dr. Sharma"
                  isActive={false}
                />
              </div>
            </section>
          </div>
        </main>

        {/* Footer */}
        <Footer />
      </div>

      {/* Overlay for mobile */}
      {isMobile && sidebarOpen && (
        <div 
          className="fixed inset-0 z-20 bg-black bg-opacity-50 transition-opacity" 
          onClick={toggleSidebar}
        />
      )}
    </div>
  );
}

function ServiceButton({ icon, label, href }) {
  return (
    <a href={href} className="flex flex-col items-center gap-2 rounded-xl bg-white p-4 transition-colors hover:bg-gray-200">
      {icon}
      <span className="text-xs">{label}</span>
    </a>
  );
}

function AppointmentCard({ image, time, doctor, isActive }) {
  return (
    <div className="flex items-center justify-between rounded-xl bg-white p-4 shadow">
      <div className="flex items-center gap-4">
        <img src={image} alt={doctor} className="h-12 w-12 rounded-full" />
        <div>
          <p className="font-medium text-gray-900">{time}</p>
          <p className="text-sm text-gray-600">{doctor}</p>
        </div>
      </div>
      {isActive && (
        <div className="h-3 w-3 rounded-full bg-green-500"></div>
      )}
    </div>
  );
}

function QuickAccessCard({ icon, label, href }) {
  return (
    <a href={href} className="flex items-center gap-3 rounded-xl bg-white p-4 transition-colors hover:bg-gray-200 shadow">
      {icon}
      <span className="flex-1 text-sm font-medium text-[#334257]">{label}</span>
    </a>
  );
}

export default Dashboard;