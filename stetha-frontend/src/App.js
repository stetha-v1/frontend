import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserLogin from './pages/user/UserLogin';
import UserSignup from './pages/user/UserSignup';
import DoctorLogin from './pages/doctor/DoctorLogin';
import DoctorSignup from './pages/doctor/DoctorSignup';
import DoctorOnboarding from './pages/doctor/DoctorOnboarding';
import UserDashboard from './components/user/UserDashboard';
import DoctorDashboard from './components/doctor/DoctorDashboard';

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
        <Route path="/doc/dashboard" element={<DoctorDashboard />} /> {/* Update to /doc/dashboard */}
      </Routes>
    </Router>
  );
};

export default App;
