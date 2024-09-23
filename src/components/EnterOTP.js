import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EnterOTP = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { transactionId, email } = location.state;
    const [otp, setOtp] = useState('');
    const [authToken, setAuthToken] = useState('');

    useEffect(() => {
        // Récupérer le token d'authentification du localStorage
        const access = localStorage.getItem('access');
        setAuthToken(access);
    }, []);

    const handleVerifyOtp = async () => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/user/verify-otp/', {
                transaction_id: transactionId,
                email: email,
                otp_code: otp
            }, {
                headers: {
                    Authorization: `Bearer ${authToken}`
                }
            });
            if (response.status === 200) {
                navigate('/otp-success');
            } else {
                console.error('OTP verification failed:', response.data);
            }
        } catch (error) {
            console.error('Error verifying OTP:', error);
        }
    };

    return (
        <div>
            <h1>Enter OTP</h1>
            <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
            />
            <button onClick={handleVerifyOtp}>Verify OTP</button>
        </div>
    );
};

export default EnterOTP;
