// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import api from '../api/api';
// import { FaPaperPlane } from 'react-icons/fa'; // Importing the paper plane icon
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const PasswordReset = () => {
//   const navigate = useNavigate();
//   const [phoneNumber, setPhoneNumber] = useState('');

//   const handleSendOTP = async () => {
//     try {
//       await api.post('/user/password/reset/', { phone_number: phoneNumber });
//       navigate('/passwordresetconfirmation', { state: { phone_number: phoneNumber } });
//     } catch (error) {
//       toast.error('Error sending OTP. Please try again.');
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
//       <div className="text-center mb-8">
//         <h1 className="text-4xl font-bold text-purple-700">Next<span className="text-black">Pay</span></h1>
//       </div>
//       <div className="bg-purple-700 text-white text-center rounded-lg px-8 py-4 mb-4 w-72">
//         <h2 className="text-xl font-semibold">Forgot password?</h2>
//       </div>
//       <div className="w-72">
//         <input
//           type="text"
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

// export default PasswordReset;




import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/api';
import { FaPaperPlane } from 'react-icons/fa'; // Import de l'icône du papier avion
import { ToastContainer, toast } from 'react-toastify'; // Import de toast
import 'react-toastify/dist/ReactToastify.css';

const PasswordReset = () => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSendOTP = async () => {
    try {
      // Valider le format du numéro de téléphone
      if (!/^(\+222[234]\d{7})$/.test(phoneNumber)) {
        toast.error('Invalid phone number format. Please enter a valid number starting with +222 followed by 2, 3, or 4, and then 7 digits.');
        return;
      }

      await api.post('/user/password/reset/', { phone_number: phoneNumber });
      navigate('/passwordresetconfirmation', { state: { phone_number: phoneNumber } });
    } catch (error) {
      if (error.response && error.response.status === 400) {
        toast.error('Invalid phone number. Please check and try again.');
      } else if (error.response && error.response.status === 500) {
        toast.error('Server error. Please try again later.');
      } else {
        toast.error('Error sending OTP. Please try again.');
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <ToastContainer />
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-purple-700">Next<span className="text-black">Pay</span></h1>
      </div>
      <div className="bg-purple-700 text-white text-center rounded-lg px-8 py-4 mb-4 w-72">
        <h2 className="text-xl font-semibold">Mot de passe oublié?</h2>
      </div>
      <div className="w-72">
        <input
          type="text"
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

export default PasswordReset;
