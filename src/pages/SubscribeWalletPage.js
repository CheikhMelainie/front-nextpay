import React, { useState, useEffect, useContext } from 'react';
import api from '../api/api';
import { AuthContext } from '../context/AuthContext';
import '../styles/SubscribeWalletPage.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SubscribeWalletPage = () => {
  const [wallets, setWallets] = useState([]);
  const [selectedWallet, setSelectedWallet] = useState('');
  const [codeCommercant, setCodeCommercant] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState(''); // Nouveau state pour le numéro de téléphone
  const { auth } = useContext(AuthContext);

  useEffect(() => {
    const fetchWallets = async () => {
      try {
        const response = await api.get('/nextpay/wallets/');
        setWallets(response.data);
      } catch (error) {
        console.error('Error fetching wallets:', error);
      }
    };

    if (auth.access) {
      fetchWallets();
    }
  }, [auth.access]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const subscriptionData = {
      walet: selectedWallet, // Correction : 'walet' -> 'wallet'
      code_commercant: codeCommercant,
      is_valid: isValid,
      phone_number: phoneNumber, // Champ ajouté pour le numéro de téléphone
    };

    try {
      console.log('Données envoyées :', subscriptionData);
      const response = await api.post('/nextpay/createpaymentcode/', subscriptionData);
      if (response.status === 201) {
        toast.success('Portefeuille ajouté avec succès !');
      } else {
        toast.error('Erreur lors de lajout du portefeuille. Veuillez réessayer.');
        }
      } catch (error) {
        console.error('Subscription failed:', error);
        if (error.response && error.response.data && error.response.data.error) {
          toast.error(error.response.data.error);
        } else {
          toast.error("L'abonnement a échoué. Veuillez réessayer.");
        }
      }
    };
  
    return (
      <div>
        <Navbar />
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
          <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-center mb-6 text-white bg-purple-700 p-2 rounded">Abonnez-vous à Wallet</h2>
            <form onSubmit={handleSubmit} className='w-full'>
              <div className="mb-4">
                <label htmlFor="wallet" className="block text-sm font-medium text-gray-700">Sélectionnez un portefeuille</label>
                <select
                  id="wallet"
                  value={selectedWallet}
                  onChange={(e) => setSelectedWallet(e.target.value)}
                  required
                  className="block w-full mt-1 p-2.5 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="" disabled>Sélectionnez un portefeuille</option>
                  {wallets.map((wallet) => (
                    <option key={wallet.id} value={wallet.id}>
                      {wallet.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="codeCommercant" className="block text-sm font-medium text-gray-700">Code commerçant</label>
                <input
                  id="codeCommercant"
                  type="text"
                  value={codeCommercant}
                  onChange={(e) => setCodeCommercant(e.target.value)}
                  placeholder="Code commerçant"
                  required
                  className="w-full mt-1 p-2.5 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Numéro de téléphone</label>
                <input
                  id="phoneNumber"
                  type="text"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="Numéro de téléphone"
                  required
                  className="w-full mt-1 p-2.5 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="gap-4 flex items-center justify-start ">
                <input
                  id="isValid"
                  type="checkbox"
                  checked={isValid}
                  onChange={(e) => setIsValid(e.target.checked)}
                />
                <label htmlFor="isValid">Est valable</label>
              </div>
              <button
                type="submit"
                className="text-2xl w-full bg-purple-700 text-white py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                S'abonner
              </button>
            </form>
          </div>
        </div>
        <Footer />
        <ToastContainer />
      </div>
    );
  };
  
  export default SubscribeWalletPage;
  