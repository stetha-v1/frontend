import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import UserLogin from './pages/user/Login';
import UserSignUp from './pages/user/SignUp';
import UserDashboard from './pages/user/Dashboard';
import DoctorLogin from './pages/doctor/Login';
import DoctorSignUp from './pages/doctor/SignUp';
import DoctorDashboard from './pages/doctor/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/me/login" element={<UserLogin />} />
        <Route path="/me/signup" element={<UserSignUp />} />
        <Route path="/me/*" element={<UserDashboard />} />
        <Route path="/doc/login" element={<DoctorLogin />} />
        <Route path="/doc/signup" element={<DoctorSignUp />} />
        <Route path="/doc/*" element={<DoctorDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;