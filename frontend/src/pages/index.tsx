import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Welcome to Policy Editor</h1>
      <Link 
        to="/policy" 
        className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition shadow-md"
      >
        Create a new Policy
      </Link>
    </div>
  );
};

export default HomePage;