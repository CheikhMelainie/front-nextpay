import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import { FaPhone, FaLock } from 'react-icons/fa';
import { ToastContainer,toast } from 'react-toastify';

const LoginPage = () => {
  const [credentials, setCredentials] = useState({ login: '', password: '' });
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(credentials);
      navigate('/subscribe-wallet'); // Rediriger vers la page SubscribeWalletPage après la connexion réussie
    } catch (error) {
      toast.error(error.message);
      console.error('Login failed:', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <ToastContainer />
      <h1 className="text-4xl font-bold text-purple-700 mb-8">
        Next<span className="text-black">Pay</span>
      </h1>
      <div className="w-full max-w-md">
        <div className="bg-purple-700 text-white text-center py-4 rounded-t-md">
          <h2 className="text-2xl">Se connecter</h2>
        </div>
        <div className="bg-white shadow-md rounded-b-md px-8 py-10">
          <form onSubmit={handleSubmit} className="w-full">
            <label htmlFor="phone_number" className="block mb-2 text-sm font-medium text-gray-900">Numéro de téléphone</label>
            <div className="relative mb-6">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <FaPhone className="mr-2 text-purple-700" />
              </div>
              <input
                type="tel"
                id="phone_number"
                name="login"
                value={credentials.login}
                onChange={handleChange}
                placeholder="Numéro de téléphone"
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
              />
            </div>

            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Mot de passe</label>
            <div className="flex relative mb-6">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <FaLock className="mr-2 text-purple-700" />
              </div>
              <input
                type="password"
                id="password"
                name="password"
                value={credentials.password}
                onChange={handleChange}
                placeholder="Mot de passe"
                required
                className="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
              />
            </div>

            <div className="flex items-center mb-4">
              <input type="checkbox" id="remember" className="mr-2" />
              <label htmlFor="remember" className="text-gray-600">Souviens-toi de moi</label>
            </div>
            <button
              type="submit"
              className="text-2xl w-full bg-purple-700 text-white py-3 rounded flex items-center justify-center"
            >
              Se connecter
            </button>
            <div className="flex items-center justify-center mt-4 space-x-4">
              <Link to="/passwordreset" className="text-blue-600">Mot de passe oublié?</Link>
              <Link to="/" className="text-blue-600">Vous n'avez pas de compte ? Inscrivez-vous</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
