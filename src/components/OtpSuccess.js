import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaCheckCircle, FaDownload, FaArrowLeft } from 'react-icons/fa';
import axios from 'axios';

const OtpSuccess = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const state = location.state || {};
    const { transactionId } = state;

    const handleDownloadInvoice = async () => {
        if (!transactionId) {
            console.error('Transaction ID is missing');
            return;
        }
    
        try {
            const response = await axios.get(`http://127.0.0.1:8000/nextpay/generate-invoice/${transactionId}/`, {
                responseType: 'blob', // Important for file download
            });
    
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', `invoice_${transactionId}.pdf`);
            document.body.appendChild(link);
            link.click();
        } catch (error) {
            console.error('Error downloading the invoice:', error.message); // Log the error message
            // Handle the error gracefully, e.g., show an error message to the user
        }
    };
    

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md text-center">
                <h1 className="text-4xl font-bold text-purple-700 mb-6">
                    Next<span className="text-black">Pay</span>
                </h1>
                <div className="flex justify-center mb-6">
                    <FaCheckCircle className="text-5xl text-green-600" />
                </div>
                <h1 className="text-2xl font-semibold mb-4">Paiement réussi !</h1>
                <p className="text-lg mb-6">Cliquez sur le bouton ci-dessous pour la retour.</p>
                <div className="flex justify-center space-x-4">
                    <button 
                        onClick={handleDownloadInvoice} 
                        className="flex items-center bg-white text-black border border-black px-4 py-2 rounded hover:opacity-80"
                    >
                        <FaDownload className="mr-2" /> Télécharger la facture
                    </button>
                    <button 
                        onClick={() => window.location.href = 'http://localhost/paiementorigin.php'} 
                        className="flex items-center bg-purple-700 text-white px-4 py-2 rounded hover:opacity-80"
                    >
                        <FaArrowLeft className="mr-2" /> Retour
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OtpSuccess;
