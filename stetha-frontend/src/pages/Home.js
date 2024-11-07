import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Welcome to Stetha</h1>
      <p className="mb-8 text-xl">Choose your role to get started:</p>
      <div className="space-x-4">
        <Link to="/user/signin" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          I'm a Patient
        </Link>
        <Link to="/doctor/signin" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          I'm a Doctor
        </Link>
      </div>
    </div>
  );
}

export default Home;