import React, { useEffect, useState } from 'react';
import { getTransactionHistory } from '../api/api';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const TransactionHistory = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchId, setSearchId] = useState('');
  const [searchDate, setSearchDate] = useState('');

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const data = await getTransactionHistory();
        setTransactions(data);
        console.log(data);
      } catch (error) {
        setError('Failed to fetch transactions');
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  const filteredTransactions = transactions.filter(transaction => {
    const matchesId = searchId ? transaction.id.includes(searchId) : true;
    const matchesDate = searchDate ? new Date(transaction.timestamp).toLocaleDateString() === new Date(searchDate).toLocaleDateString() : true;
    return matchesId && matchesDate;
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="bg-gray-100">
      <Navbar />
      <h2 className="text-2xl font-bold mb-4">Historique des transactions</h2>
      <div className="relative mb-4">
        <input
          type="date"
          value={searchDate}
          onChange={(e) => setSearchDate(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      {filteredTransactions.map((transaction) => (
        <Link
          to={`/transaction/${transaction.id}`}
          key={transaction.id}
          className="flex justify-between items-center p-4 mb-2 bg-gray-200 rounded-lg"
        >
          <div>
            <div className="font-medium">{transaction.sender_name}</div>
            <div className="text-gray-600">{new Date(transaction.timestamp).toLocaleDateString()}</div>
          </div>
          <div className="font-bold">{transaction.amount} MRU</div>
        </Link>
      ))}
      <Footer />
    </div>
  );
};

export default TransactionHistory;
