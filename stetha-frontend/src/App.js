import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserLogin from './pages/user/UserLogin';
import UserSignup from './pages/user/UserSignup';
import DoctorLogin from './pages/doctor/DoctorLogin';
import DoctorSignup from './pages/doctor/DoctorSignup';
import DoctorOnboarding from './pages/doctor/DoctorOnboarding';
import UserDashboard from './components/user/UserDashboard';
import DoctorDashboard from './components/doctor/DoctorDashboard';
import UserAppointment from './components/user/UserAppointment';
import UserProfile from './components/user/UserProfile';
import UserSettings from './components/user/UserSettings';


const App = () => {
  return (
    <Router>
      
      <Routes>
        <Route path="/user/login" element={<UserLogin />} />
        <Route path="/user/signup" element={<UserSignup />} />
        <Route path="/doc/login" element={<DoctorLogin />} />
        <Route path="/doc/signup" element={<DoctorSignup />} />
        <Route path="/doc/onboarding" element={<DoctorOnboarding />} />
        <Route path="/me" element={<UserDashboard />} />
        <Route path="/doc/dashboard" element={<DoctorDashboard />} />
        <Route path="/me/appointments" element={<UserAppointment />} />
        <Route path="/me/profile" element={<UserProfile />} />
        <Route path="/me/settings" element={<UserSettings />} />
      </Routes>
     
    </Router>
  );
};

export default App;