// src/components/HelpDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';


const HelpDetail = () => {
  const { id } = useParams();
  const questions = [
    "Comment ajouter une nouvelle portefeuille sur ma compte Nextpay ?",
    "Comment puis-je modifier mon mot de passe et mes questions de sécurité ?",
    "Pourquoi mon paiement a-t-il été refusé ?",
    "Comment associer une carte de débit ou de crédit à mon compte NextPay ?",
    "Comment vérifier mon compte NextPay ?",
    "Comment changer le nom sur mon compte NextPay ?",
  ];

  const details = {
    0: [
      "Voici comment ajouter un portefeuille sur NextPay:",
      "1. Connectez-vous à votre compte.",
      "2. Sélectionnez les portefeuilles.",
      "3. Cliquez sur le bouton Ajouter un portefeuille",
      "4. Entrez les informations demandées.",
      "5. Une fois terminé, un message de succès sera envoyé."
    ],
    1: [
      "Voici comment modifer votre mot de passe",
      "1. Connectez-vous à votre compte.",
      "2. Sélectionnez les paramètres.",
      "3. Cliquez sur le bouton Changer le mot de passe",
      "4. Entrez l'ancien mot de passe suivi du nouveau mot de passe.",
      "5. Une fois terminé, un message de succès sera envoyé."
    ],
    // Add other details as necessary
  };

  return (
    <div className="bg-gray-100">
      <Navbar />
      <div className="relative mb-4">
        <input
          type="text"
          placeholder="Questions de recherche, mots-clés"
          className="w-full p-2 border border-gray-300 rounded-md"
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
      <h2 className="text-2xl font-bold mb-4">{questions[id]}</h2>
      <ul className="list-disc pl-6">
        {details[id] && details[id].map((detail, index) => (
          <li key={index} className="mb-2">{detail}</li>
        ))}
      </ul>
      <Footer />
    </div>
    
  );
};

export default HelpDetail;
