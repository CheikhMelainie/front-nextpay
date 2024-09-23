// src/components/Help.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Help = () => {
  const [searchTerm, setSearchTerm] = useState('');

  
  
  const questions = [
    "Comment ajouter une nouvelle portefeuille sur ma compte Nextpay ?",
    "Comment puis-je modifier mon mot de passe et mes questions de sécurité ?",
    "Pourquoi mon paiement a-t-il été refusé ?",
    "Comment associer une carte de débit ou de crédit à mon compte NextPay ?",
    "Comment vérifier mon compte NextPay ?",
    "Comment changer le nom sur mon compte NextPay ?",
  ];

  const filteredQuestions = questions.filter(question =>
    question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className=" bg-gray-100">
      <Navbar />
      <h2 className="text-2xl font-bold mb-4">Bonjour Cheikh Haimedaha. Comment puis-je t'aider?</h2>
      <div className="relative mb-4">
        <input
          type="text"
          placeholder="Questions de recherche, mots-clés"
          className="w-full p-2 border border-gray-300 rounded-md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <span className="absolute top-0 right-0 mt-2 mr-3">
          <svg
            className="w-6 h-6 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-4.35-4.35m1.24-6.55a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </span>
      </div>
      <ul className="list-disc pl-6">
        {filteredQuestions.map((question, index) => (
          <li key={index} className="mb-2">
            <Link to={`/help/${index}`} className="text-blue-600 underline">
              {question}
            </Link>
          </li>
        ))}
      </ul>
      <Footer />
    </div>
  );
};

export default Help;
