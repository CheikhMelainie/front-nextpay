import React from 'react';
import bankily from '../assets/images/bankily-removebg-preview.jpg';
import masrivi from '../assets/images/m1-removebg-preview.jpg';
import sedad from '../assets/images/sedad-removebg-preview.jpg';
import send from '../assets/images/sendmony-removebg-preview.jpg';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import '../styles/Content.css'; // Ajoutez ce fichier pour les styles personnalisés

const Content = () => {
  return (
    <div className="w-full bg-gray-100">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-purple-700">
          Next<span className="text-black">Pay</span>
        </h1>
        <p className="mt-2 text-lg">
          NextPay est une plateforme de paiement en ligne qui permet aux utilisateurs de faire des transactions financières en ligne de manière sécurisée.
        </p>
      </div>
      <div className="text-center mb-4">
        <h2 className="text-2xl font-semibold">Quelques portefeuilles où vous pouvez payer</h2>
      </div>
      <Carousel
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        interval={3000}
      >
        <div className="w-full">
          <img src={bankily} alt="Bankily 1" className="carousel-image" />
        </div>
        <div>
          <img src={masrivi} alt="Masrivi" className="carousel-image w-full" />
        </div>
        <div>
          <img src={sedad} alt="Sedad" className="carousel-image" />
        </div>
      </Carousel>

      {/* Nouvelle section */}
      <div className="new-section flex flex-col md:flex-row items-center mt-8">
        <div className="text-section md:w-1/2 p-4">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Pourquoi choisir NextPay ?</h2>
          <p className="text-lg text-gray-700 mb-4">
          NextPay offre un moyen sécurisé et simple de gérer vos transactions en ligne. Grâce à notre plateforme conviviale, vous pouvez régler rapidement vos achats en quelques clics.
          </p>
          <p className="text-lg text-gray-700">
          Rejoignez des milliers d'utilisateurs qui font confiance à NextPay pour leurs transactions quotidiennes et profitez de la commodité des paiements en ligne transparents.
          </p>
        </div>
        <div className="image-section md:w-1/2 p-4">
          <img src={send} alt="NextPay benefits" className="rounded-lg shadow-md w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Content;
