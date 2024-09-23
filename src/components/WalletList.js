// src/components/WalletList.js
import React, { useEffect, useState } from 'react';
import { getWalletsByMerchantCode } from '../api/api';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const WalletList = () => {
  const [wallets, setWallets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchWallets = async () => {
      try {
        const data = await getWalletsByMerchantCode();
        setWallets(data.wallets);
      } catch (error) {
        setError('Failed to fetch wallets');
      } finally {
        setLoading(false);
      }
    };

    fetchWallets();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <Navbar />
      <div className="flex flex-col  bg-gray-100 items-center mt-8">
        <h2 className="text-2xl font-bold mb-4">Vos portefeuilles</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {wallets.map((wallet, index) => (
            <div key={index} className="bg-gray-200 p-4 rounded-lg shadow-md w-64">
              <div className="mb-2">
                <label className="block text-sm font-medium text-gray-700">Nom</label>
                <div className="mt-1 p-2 border border-gray-300 rounded-md bg-white">
                  {wallet.wallet_name}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Code commerçant</label>
                <div className="mt-1 p-2 border border-gray-300 rounded-md bg-white">
                  {wallet.code_commercant}
                </div>
              </div>
            </div>
          ))}
        </div>
        <Link to={"/subscribe-wallet"} className="mt-6 px-4 py-2 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700">
        Ajouter un nouveau portefeuille
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default WalletList;
