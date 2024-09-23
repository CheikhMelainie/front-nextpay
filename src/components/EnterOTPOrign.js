import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EnterOTP = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { phoneNumber } = location.state;
    const [otp, setOtp] = useState(new Array(6).fill(""));

    const handleVerifyOtp = async () => {
        try {
            const otpCode = otp.join('');
            const response = await axios.post('http://127.0.0.1:8000/nextpay/verify-otp/', {
                phone_number: phoneNumber,
                otp_code: otpCode
            });

            if (response.status === 200) {
                navigate('/otp-success', { state: { transactionId: response.data.transaction_id } });
            } else {
                toast.error(response.data.detail || 'OTP verification failed');
            }
        } catch (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                toast.error(error.response.data.detail || 'Error verifying OTP');
            } else if (error.request) {
                // The request was made but no response was received
                toast.error('No response from server. Please try again later.');
            } else {
                // Something happened in setting up the request that triggered an Error
                toast.error('Error verifying OTP');
            }
        }
    };

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return false;
        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);
        if (element.nextSibling) {
            element.nextSibling.focus();
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-200">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md w-full">
                <h1 className="text-2xl font-bold mb-4">Entrez le code OTP</h1>
                <div className="flex justify-center mb-4 space-x-2">
                    {otp.map((data, index) => (
                        <input
                            key={index}
                            type="text"
                            name="otp"
                            maxLength="1"
                            value={data}
                            onChange={e => handleChange(e.target, index)}
                            className="w-12 h-12 text-2xl text-center border border-gray-300 rounded-md"
                            onFocus={e => e.target.select()}
                        />
                    ))}
                </div>
                <button
                    onClick={handleVerifyOtp}
                    className="bg-purple-600 w-full text-white py-2 px-4 rounded-lg hover:bg-purple-700"
                >
                    Vérifier l'OTP
                </button>
            </div>
            <ToastContainer />
        </div>
    );
};

export default EnterOTP;
