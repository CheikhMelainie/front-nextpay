import React, { useState } from 'react';
import { FaLock, FaSyncAlt } from 'react-icons/fa';
import { changePassword } from '../api/api';
import { ToastContainer,toast } from 'react-toastify';

import Navbar from './Navbar';
import Footer from './Footer';

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await changePassword({ old_password: oldPassword, new_password: newPassword });
      toast.success('Le mot de passe a été changé avec succès:', response);
      setOldPassword('');
      setNewPassword('');
      setError(null);
    } catch (error) {
      toast.error('Erreur lors du changement de mot de passe :', error);
      setError('Impossible de modifier le mot de passe. Veuillez réessayer.');
    }
  };

  return (
    <div>
      <Navbar />
    
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
    <ToastContainer />
      <div className="w-full max-w-sm p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6 text-white bg-purple-600 p-2 rounded">Changer le mot de passe</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit}  className="w-full space-y-4">
          <div className="relative">
            <FaLock className="absolute left-3 top-3 text-purple-600" />
            <input
              type="password"
              placeholder="Ancien mot de passe *"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              className="w-full px-10 py-2 border rounded-md shadow-sm focus:outline-none focus:border-purple-500"
              required
            />
          </div>
          <div className="relative">
            <FaLock className="absolute left-3 top-3 text-purple-600" />
            <input
              type="password"
              placeholder="Nouveau mot de passe *"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full px-10 py-2 border rounded-md shadow-sm focus:outline-none focus:border-purple-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full mb-4 py-2 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700 flex items-center justify-center"
          >
            Changer le mot de passe
            <FaSyncAlt className="ml-2" />
          </button>
        </form>
      </div>
      
    </div>
    <Footer />
    </div>
  );
};

export default ChangePassword;
