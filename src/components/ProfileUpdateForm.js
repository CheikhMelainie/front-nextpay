import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import api from '../api/api';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGlobe, FaSyncAlt } from 'react-icons/fa';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Navbar';
import Footer from '../components/Footer';

const ProfileUpdateForm = () => {
  const { user, setUser } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    nom_complet: '',
    email: '',
    numero_telephone: '',
    adrese: '',
    website: '',
  });

  useEffect(() => {
    if (user) {
      setFormData({
        nom_complet: user.nom_complet || '',
        email: user.email || '',
        numero_telephone: user.numero_telephone || '',
        adrese: user.adrese || '',
        website: user.website || '',
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.put('/user/update-profile/', formData);
      setUser(response.data);
      toast.success('Profile updated successfully');
    } catch (error) {
      console.error('Error updating profile', error);
      alert('Failed to update profile');
    }
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gray-100">
     <Navbar />
    
    <div className="w-full max-w-2xl mx-auto bg-white shadow-md rounded-lg overflow-hidden p-4 space-y-8">
    <ToastContainer />
      <div className="bg-purple-600 text-white text-center py-4 relative">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-purple-600 to-transparent"></div>
        <div className="flex items-center justify-center z-10 relative">
          <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center text-2xl font-bold">
            {user.nom_complet.charAt(0) + user.nom_complet.split(' ')[1].charAt(0)}
          </div>
        </div>
        <h1 className="text-xl font-bold mt-2 z-10 relative">{user.nom_complet}</h1>
      </div>
      <form onSubmit={handleSubmit} className="w-full space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center bg-gray-100 p-3 rounded-lg">
            <FaUser className="text-purple-600 mr-3" />
            <input
              type="text"
              name="nom_complet"
              value={formData.nom_complet}
              onChange={handleChange}
              className="flex-grow p-2 border border-gray-300 rounded-lg"
              placeholder="Name"
            />
          </div>
          <div className="flex items-center bg-gray-100 p-3 rounded-lg">
            <FaEnvelope className="text-purple-600 mr-3" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="flex-grow p-2 border border-gray-300 rounded-lg"
              placeholder="Email"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center bg-gray-100 p-3 rounded-lg">
            <FaPhone className="text-purple-600 mr-3" />
            <input
              type="text"
              name="numero_telephone"
              value={formData.numero_telephone}
              onChange={handleChange}
              className="flex-grow p-2 border border-gray-300 rounded-lg"
              placeholder="Phone"
            />
          </div>
          <div className="flex items-center bg-gray-100 p-3 rounded-lg">
            <FaMapMarkerAlt className="text-purple-600 mr-3" />
            <input
              type="text"
              name="adrese"
              value={formData.adrese}
              onChange={handleChange}
              className="flex-grow p-2 border border-gray-300 rounded-lg"
              placeholder="Address"
            />
          </div>
        </div>
        <div className="flex items-center bg-gray-100 p-3 rounded-lg">
          <FaGlobe className="text-purple-600 mr-3" />
          <input
            type="url"
            name="website"
            value={formData.website}
            onChange={handleChange}
            className="flex-grow p-2 border border-gray-300 rounded-lg"
            placeholder="Website"
          />
        </div>
        <div className="text-center ">
          <button type="submit" className="w-full text-xl font-bold mt-2 z-10 relative bg-purple-700 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition duration-300 ml-2">
          Mettre à jour votre profil
          </button>
        </div>
      </form>
    </div>
    <Footer />
    </div>
  );
};

export default ProfileUpdateForm;
