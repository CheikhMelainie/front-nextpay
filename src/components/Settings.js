import React from 'react';
import { FaCog, FaSyncAlt, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const SettingsPage = () => {
  return (
    <div className="bg-gray-100">
        <Navbar />
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-45 px-4">
      <div className="w-full max-w-xs">
        <button className="w-full mb-4 py-2 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700 flex items-center justify-center">
          <FaCog className="mr-2" /> Paramètres
        </button>
        <Link to={"/changepassword"} className="w-full mb-4 py-2 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700 flex items-center justify-center">
          <FaSyncAlt className="mr-2" /> Changer le mot de passe
        </Link>
        <Link to={"/profile"} className="w-full py-2 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700 flex items-center justify-center">
          <FaUser className="mr-2" /> Profil
        </Link>
      </div>
      
    </div>
    <Footer />
    </div>
  );
};

export default SettingsPage;
