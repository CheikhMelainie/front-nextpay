import React, { useEffect, useState } from 'react';
import { getTransactionById } from '../api/api';
import { useParams } from 'react-router-dom';
import { FaPhone, FaRegClock, FaIdBadge, FaUser, FaDollarSign } from 'react-icons/fa';

import Navbar from './Navbar';
import Footer from './Footer';


const TransactionDetail = () => {
  const { id } = useParams();
  const [transaction, setTransaction] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchTransaction = async () => {
      try {
        const data = await getTransactionById(id);
        setTransaction(data);
        console.log(data);
      } catch (error) {
        setError('Failed to fetch transaction details');
      } finally {
        setLoading(false);
      }
    };

    fetchTransaction();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!transaction) return <div>No transaction found</div>;

  return (
    <div>
      <Navbar/>
      <h2 className="text-2xl font-bold mb-4">ID de transaction: {transaction.id}</h2>
      <div className="bg-gray-200 p-4 rounded-lg mb-2">
        <div className="flex items-center mb-2">
          <FaPhone className="w-6 h-6 text-purple-600 mr-2" />
          <span>{transaction.client_phone}</span>
        </div>
        <div className="flex items-center mb-2">
          <FaRegClock className="w-6 h-6 text-purple-600 mr-2" />
          <span>{new Date(transaction.timestamp).toLocaleString()}</span>
        </div>
        <div className="flex items-center mb-2">
          <FaIdBadge className="w-6 h-6 text-purple-600 mr-2" />
          <span>{transaction.code_commerce}</span>
        </div>
        <div className="flex items-center mb-2">
          <FaDollarSign className="w-6 h-6 text-purple-600 mr-2" />
          <span>{transaction.amount} MRU</span>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TransactionDetail;
