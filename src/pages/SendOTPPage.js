// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import api from '../api/api';
// import { FaPaperPlane } from 'react-icons/fa';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const SendOTPPage = () => {
//   const navigate = useNavigate();
//   const [phoneNumber, setPhoneNumber] = useState('');

//   const handleSendOTP = async () => {
//     try {
//       await api.post('/user/register/commercant/', { phone_number: phoneNumber, otp_method: 'phone' });
//       navigate('/signup', { state: { phone_number: phoneNumber } });
//     } catch (error) {
//       if (error.response && error.response.status === 401) {
//         toast.error('Unauthorized. Please check your permissions.');
//       } else {
//         toast.error('Error sending OTP. Please try again.');
//       }
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
//       <div className="text-center mb-8">
//         <h1 className="text-4xl font-bold text-purple-700">Next<span className="text-black">Pay</span></h1>
//       </div>
//       <div className="bg-purple-700 text-white text-center rounded-lg px-8 py-4 mb-4 w-72">
//         <h2 className="text-xl font-semibold">Verification</h2>
//       </div>
//       <div className="w-72">
//         <input
//           type="tel"
//           value={phoneNumber}
//           onChange={(e) => setPhoneNumber(e.target.value)}
//           placeholder="Phone Number *"
//           className="w-full px-4 py-2 mb-4 border border-gray-300 rounded"
//           required
//         />
//         <button
//           onClick={handleSendOTP}
//           className="w-full flex items-center justify-center bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-700"
//         >
//           <span className="mr-2">SEND</span> <FaPaperPlane />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SendOTPPage;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/api';
import { FaPaperPlane } from 'react-icons/fa';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SendOTPPage = () => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSendOTP = async () => {
    try {
      await api.post('/user/register/commercant/', { phone_number: phoneNumber, otp_method: 'phone' });
      navigate('/signup', { state: { phone_number: phoneNumber } });
      toast.success('OTP sent successfully to your phone. Please check and verify.');
    } catch (error) {
      if (error.response) {
        const { data, status } = error.response;
        if (status === 400) {
          if (data && data.error) {
            toast.error(data.error);
          } else {
            toast.error('Bad request. Please check your input.');
          }
        } else if (status === 401) {
          toast.error('Unauthorized. Please check your permissions.');
        } else if (status === 500) {
          toast.error('Server error. Please try again later.');
        } else {
          toast.error('An unexpected error occurred. Please try again.');
        }
      } else {
        toast.error('Network error. Please check your internet connection.');
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <ToastContainer />
      <div className="text-center mb-8 ">
        <h1 className="text-4xl font-bold text-purple-700">Next<span className="text-black">Pay</span></h1>
      </div>
      <div className="bg-purple-700 text-white text-center rounded-lg px-8 py-4 mb-4 w-72">
        <h2 className="text-xl font-semibold">Vérification</h2>
      </div>
      <div className="w-72">
        <input
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Numéro de téléphone *"
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded"
          required
        />
        <button
          onClick={handleSendOTP}
          className="w-full flex items-center justify-center bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-700"
        >
          <span className="mr-2">Envoyer</span> <FaPaperPlane />
        </button>
      </div>
    </div>
  );
};

export default SendOTPPage;
