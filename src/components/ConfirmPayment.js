import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ConfirmPayment = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [transactionDetails, setTransactionDetails] = useState({});
    const [walletName, setWalletName] = useState('');
    const [email, setEmail] = useState(''); // Nouveau state pour l'e-mail
    const [authToken, setAuthToken] = useState('');

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const transaction_id = queryParams.get('transaction_id');
        const montant = queryParams.get('montant');
        const commercant_id = queryParams.get('commercant_id');

        setTransactionDetails({ transaction_id, montant, commercant_id });

        // Supposons que vous stockez le token d'authentification dans le localStorage
        const access = localStorage.getItem('access');
        setAuthToken(access);
    }, [location.search]);

    const handleConfirm = async () => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/user/create-transaction/', {
                transaction_id: transactionDetails.transaction_id,
                amount: transactionDetails.montant,
                wallet_name: walletName,
                description: `Transaction ID: ${transactionDetails.transaction_id}`,
                code_commercant: transactionDetails.commercant_id,
                sender: email
            }, {
                headers: {
                    Authorization: `Bearer ${authToken}`
                }
            });
            if (response.status === 201) {
                // Rediriger vers la page de saisie de l'OTP en passant l'ID de la transaction et l'e-mail
                navigate('/enter-otp', {
                    state: { transactionId: transactionDetails.transaction_id, email: email }
                });
            }
        } catch (error) {
            console.error('Error creating transaction:', error);
        }
    };

    return (
        <div>
            <h1>Confirmation de Transaction</h1>
            <p>Transaction ID: {transactionDetails.transaction_id}</p>
            <p>Montant: {transactionDetails.montant}</p>
            <p>Commercant ID: {transactionDetails.commercant_id}</p>
            <input
                type="text"
                placeholder="Nom du Wallet"
                value={walletName}
                onChange={(e) => setWalletName(e.target.value)}
            />
            <input
                type="email" // Utilisation du type email pour la saisie de l'e-mail
                placeholder="Votre adresse e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={handleConfirm}>Confirmer</button>
        </div>
    );
};

export default ConfirmPayment;
