import React, { useState, useEffect } from 'react';
import { User2, Shield, Stethoscope, Camera, Calendar, Globe, Paperclip, Video, MessageCircle, FileText, Heart, Activity, Weight, Bell } from 'lucide-react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';
import { Routes, Route, Link } from 'react-router-dom';
import Messages from './Message';
import Doctors from './Doctors';
import Appointments from './Appointment';
import Shop from './Shop';
import EarlyAccess from './EarlyAccess';
import AI from './AI';
import Settings from './Settings';
import Premium from './Premium';

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
    <div className="flex h-screen bg-[#F0F4F8]">
      {/* Sidebar */}
      <aside 
        className={`fixed md:static inset-y-0 left-0 z-30 w-64 transform bg-white shadow-lg transition-transform duration-300 ease-in-out ${
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
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-[#F0F4F8] p-6">
          <Routes>
            <Route index element={<DashboardHome />} />
            <Route path="messages" element={<Messages />} />
            <Route path="doctors" element={<Doctors />} />
            <Route path="appointments" element={<Appointments />} />
            <Route path="health-products" element={<Shop />} />
            <Route path="early-access" element={<EarlyAccess />} />
            <Route path="ai" element={<AI />} />
            <Route path="settings" element={<Settings />} />
            <Route path="upgrade" element={<Premium />} />
          </Routes>
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

function QuickActionCard({ icon, label, href }) {
  return (
    <Link to={href} className="flex flex-col items-center justify-center gap-2 rounded-xl bg-white p-4 shadow-sm transition-all hover:shadow-md hover:bg-blue-50">
      <div className="rounded-full bg-[#E6F3F8] p-3">
        {React.cloneElement(icon, { className: "h-6 w-6 text-[#0077B6]" })}
      </div>
      <span className="text-sm font-medium text-gray-700 text-center">{label}</span>
    </Link>
  );
}

function ServiceButton({ icon, label, href }) {
  return (
    <Link to={href} className="flex flex-col items-center gap-2 rounded-xl bg-white p-4 transition-colors hover:bg-gray-100 shadow-sm">
      <div className="rounded-full bg-[#E6F3F8] p-3">
        {React.cloneElement(icon, { className: "h-6 w-6 text-[#0077B6]" })}
      </div>
      <span className="text-sm font-medium">{label}</span>
    </Link>
  );
}

function AppointmentCard({ image, time, doctor, specialty, isVideo }) {
  return (
    <div className="flex items-center justify-between rounded-xl bg-white p-4 shadow">
      <div className="flex items-center gap-4">
        <img src={image} alt={doctor} className="h-12 w-12 rounded-full" />
        <div>
          <p className="font-medium text-gray-900">{time}</p>
          <p className="text-sm text-gray-600">{doctor}</p>
          <p className="text-xs text-gray-500">{specialty}</p>
        </div>
      </div>
      {isVideo ? (
        <Video className="h-5 w-5 text-[#0077B6]" />
      ) : (
        <Bell className="h-5 w-5 text-[#0077B6]" />
      )}
    </div>
  );
}

function HealthMetricCard({ icon, label, value, change }) {
  const isPositive = change.startsWith('+');
  return (
    <div className="rounded-xl bg-white p-4 shadow">
      <div className="flex items-center justify-between mb-2">
        {React.cloneElement(icon, { className: "h-6 w-6 text-[#0077B6]" })}
        <span className={`text-sm font-medium ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
          {change}
        </span>
      </div>
      <h3 className="text-lg font-semibold text-gray-700">{value}</h3>
      <p className="text-sm text-gray-500">{label}</p>
    </div>
  );
}

function HealthTipCard({ title, description, image }) {
  return (
    <div className="rounded-xl bg-white overflow-hidden shadow">
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
        <a href="#" className="inline-block mt-2 text-[#0077B6] hover:underline">Read More</a>
      </div>
    </div>
  );
}

function DashboardHome() {
  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <section>
        <div className="bg-gradient-to-r from-[#0077B6] to-[#00B4D8] text-white rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-2">Welcome back, David!</h2>
          <p className="text-blue-100">Your health is our priority. How can we help you today?</p>
        </div>
      </section>

      {/* Search */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search for doctors, services, or health information"
          className="w-full rounded-full bg-white py-3 pl-10 pr-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#0077B6] shadow-sm"
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

      {/* Quick Actions */}
      <section>
        <h2 className="mb-4 text-xl bg-pink-50 font-bold text-gray-800">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <QuickActionCard icon={<Video />} label="Start Video Call" href="/video-call" />
          <QuickActionCard icon={<Calendar />} label="Schedule Appointment" href="/schedule" />
          <QuickActionCard icon={<MessageCircle />} label="Message Doctor" href="/messages" />
          <QuickActionCard icon={<FileText />} label="View Health Records" href="/records" />
        </div>
      </section>

      {/* Services */}
      <section>
        <h2 className="mb-4 text-xl font-bold text-gray-800">Our Services</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <ServiceButton icon={<User2 />} label="Find a Doctor" href="/doctors" />
          <ServiceButton icon={<Stethoscope />} label="Specialties" href="/specialties" />
          <ServiceButton icon={<Shield />} label="Insurance" href="/insurance" />
          <ServiceButton icon={<Globe />} label="Pharmacy" href="/pharmacy" />
        </div>
      </section>

      {/* Upcoming Appointments will be reading from the database*/}
      <section>
        <h2 className="mb-4 text-xl font-bold text-gray-800">Upcoming Appointments</h2>
        <div className="space-y-4">
          <AppointmentCard
            image="/assets/davy.jpg"
            time="10:00 AM Today"
            doctor="Dr. David Njoroge"
            specialty="Cardiologist"
            isVideo={true}
          />
          <AppointmentCard
            image="/assets/davy.jpg"
            time="2:00 PM Tomorrow"
            doctor="Dr. Michael Patel"
            specialty="Dermatologist"
            isVideo={false}
          />
        </div>
      </section>

      {/* Health Metrics */}
      <section>
        <h2 className="mb-4 text-xl font-bold text-gray-800">Your Health Metrics</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <HealthMetricCard icon={<Heart />} label="Heart Rate" value="72 bpm" change="+3%" />
          <HealthMetricCard icon={<Activity />} label="Blood Pressure" value="120/80 mmHg" change="-2%" />
          <HealthMetricCard icon={<Weight />} label="Weight" value="68 kg" change="0%" />
        </div>
      </section>

      {/* Health Tips */}
      <section>
        <h2 className="mb-4 text-xl font-bold text-gray-800">Health Tips & Resources</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <HealthTipCard
            title="5 Ways to Boost Your Immune System"
            description="Learn simple, effective strategies to strengthen your body's natural defenses."
            image="/assets/images/immunity.jpeg"
          />
          <HealthTipCard
            title="Understanding Telemedicine: Your Questions Answered"
            description="Discover how virtual healthcare works and its benefits for you."
            image="/assets/images/medicine.jpeg"
          />
        </div>
      </section>
    </div>
  );
}

export default Dashboard;