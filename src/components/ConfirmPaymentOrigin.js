import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaWallet } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ConfirmPayment = () => {
    const [amount, setAmount] = useState(null);
    const [commercantId, setCommercantId] = useState(null);
    const [walletsInfo, setWalletsInfo] = useState([]);
    const [selectedWallet, setSelectedWallet] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [otpMethod, setOtpMethod] = useState('phone');
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        setAmount(params.get('montant'));
        setCommercantId(params.get('commercant_id'));
        const walletsInfoParam = params.get('wallets_info');
        if (walletsInfoParam) {
            const walletsArray = walletsInfoParam.split(',').map(wallet => {
                const [wallet_name, code_commercant] = wallet.split(':');
                return { wallet_name, code_commercant };
            });
            setWalletsInfo(walletsArray);
        }
    }, [location.search]);

    const validatePhoneNumber = (phone) => {
        const regex = /^\+222[234]\d{7}$/;
        return regex.test(phone);
    };

    const handlePayment = async () => {
        if (!validatePhoneNumber(phoneNumber)) {
            toast.error('Le numéro de téléphone doit commencer par +222 suivi par 2, 3 ou 4 et contenir 7 chiffres supplémentaires.');
            return;
        }

        if (!selectedWallet) {
            toast.error('Aucun portefeuille sélectionné.');
            return;
        }

        try {
            const response = await axios.post('http://127.0.0.1:8000/nextpay/create-transaction/', {
                code_commercant: selectedWallet.code_commercant,
                wallet_name: selectedWallet.wallet_name,
                amount: amount,
                description: 'Description du paiement',
                sender_phone: phoneNumber,
                otp_method: otpMethod,
            });

            if (response.status === 201) {
                console.log('Paiement avec le portefeuille:', response.data);
                navigate('/enter-otp-origin', { state: { phoneNumber: phoneNumber } });
            } else {
                toast.error(response.data.detail || 'Erreur lors du paiement.');
            }
        } catch (error) {
            if (error.response) {
                toast.error(error.response.data.detail || 'Erreur lors du paiement.');
            } else if (error.request) {
                toast.error('Pas de réponse du serveur. Veuillez réessayer plus tard.');
            } else {
                toast.error('Erreur lors du paiement.');
            }
        }
    };

    return (
        <div className="bg-gray-100">
            <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
                <ToastContainer />
                <header className="text-center mb-6">
                    <h1 className="text-4xl font-bold text-purple-700">
                        Next<span className="text-black">Pay</span>
                    </h1>
                    <h3 className="text-lg font-semibold text-gray-800">NP Vérifier</h3>
                    <p className="text-sm text-gray-500">Personnalisation de la page de paiement</p>
                </header>
                <div className="text-center bg-purple-600 text-white p-4 rounded-lg mb-6">
                    <div className="flex items-center justify-center gap-2">
                        <FaWallet size={30} />
                        <p className="text-lg font-semibold">Next Technology Entreprises</p>
                    </div>
                    <p className="text-xl">Montant à payer: {amount} MRU</p>
                </div>
                <div className="mb-6">
                    <label htmlFor="wallet-select" className="block mb-2 font-semibold">Choisissez un portefeuille :</label>
                    <select
                        id="wallet-select"
                        value={selectedWallet ? selectedWallet.wallet_name : ''}
                        onChange={(e) => setSelectedWallet(walletsInfo.find(wallet => wallet.wallet_name === e.target.value))}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                    >
                        <option value="" disabled>Sélectionnez un portefeuille</option>
                        {walletsInfo.map((wallet, index) => (
                            <option key={index} value={wallet.wallet_name}>
                                {wallet.wallet_name} (Code Commercant: {wallet.code_commercant})
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mb-6">
                    <label htmlFor="phone-number" className="block mb-2 font-semibold">Numéro de téléphone:</label>
                    <input
                        id="phone-number"
                        type="tel"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="otp-method" className="block mb-2 font-semibold">Method OTP:</label>
                    <select
                        id="otp-method"
                        value={otpMethod}
                        onChange={(e) => setOtpMethod(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                    >
                        <option value="phone">Phone</option>
                    </select>
                </div>
                <button onClick={handlePayment} className="w-full py-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700">
                Payer {amount} MRU
                </button>
            </div>
        </div>
    );
};

export default ConfirmPayment;
