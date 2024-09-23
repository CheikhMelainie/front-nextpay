// import React, { useState } from 'react';
// import axios from 'axios';

// const ResetPasswordConfirm = () => {
//     const [formData, setFormData] = useState({
//         phone_number: '',
//         otp_code: '',
//         password: ''
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('http://192.168.1.208:8000/user/password/reset/confirm/', formData);
//             console.log('Password reset successful:', response.data);
//             // Ajoutez ici votre logique de redirection ou de confirmation
//         } catch (error) {
//             console.error('Password reset failed:', error);
//             // Gérez les erreurs de manière appropriée, par exemple en affichant un message à l'utilisateur
//         }
//     };

//     return (
//         <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
//             <div className="bg-purple-700 text-white text-center py-4 rounded-t-md">
//                 <h2 className="text-2xl">Forgot Password</h2>
//             </div>
//             <form onSubmit={handleSubmit} className='w-full'>
//                 <div className="mb-4">
//                     <label htmlFor="phone_number" className="block mb-2 text-sm font-medium text-gray-900">Phone Number</label>
//                     <input
//                         type="text"
//                         id="phone_number"
//                         name="phone_number"
//                         value={formData.phone_number}
//                         onChange={handleChange}
//                         className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-purple-700"
//                         required
//                     />
//                 </div>
//                 <div className="mb-4">
//                     <label htmlFor="otp_code" className="block mb-2 text-sm font-medium text-gray-900">OTP Code</label>
//                     <input
//                         type="text"
//                         id="otp_code"
//                         name="otp_code"
//                         value={formData.otp_code}
//                         onChange={handleChange}
//                         className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-purple-700"
//                         required
//                     />
//                 </div>
//                 <div className="mb-4">
//                     <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">New Password</label>
//                     <input
//                         type="password"
//                         id="password"
//                         name="password"
//                         value={formData.password}
//                         onChange={handleChange}
//                         className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-purple-700"
//                         required
//                     />
//                 </div>
//                 <button
//                     type="submit"
//                     className="w-full bg-purple-700 text-white py-3 rounded-lg hover:bg-purple-800 focus:outline-none focus:bg-purple-800"
//                 >
//                     Reset Password
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default ResetPasswordConfirm;


import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ResetPasswordConfirm = () => {
    const [formData, setFormData] = useState({
        phone_number: '',
        otp_code: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/user/password/reset/confirm/', formData);
            console.log('Réinitialisation du mot de passe réussie :', response.data);
            toast.success('Réinitialisation du mot de passe réussie '); // Affiche un message de succès
            // Ajoutez ici votre logique de redirection ou de confirmation
        } catch (error) {
            console.error('La réinitialisation du mot de passe a échoué :', error);
            toast.error('Erreur lors de la réinitialisation du mot de passe. Veuillez réessayer.'); // Affiche un message d'erreur
        }
    };

    return (
        <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
            <ToastContainer />
            <div className="bg-purple-700 text-white text-center py-4 rounded-t-md">
                <h2 className="text-2xl">Mot de passe oublié</h2>
            </div>
            <form onSubmit={handleSubmit} className='w-full'>
                <div className="mb-4">
                    <label htmlFor="phone_number" className="block mb-2 text-sm font-medium text-gray-900">Numéro de téléphone</label>
                    <input
                        type="text"
                        id="phone_number"
                        name="phone_number"
                        value={formData.phone_number}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-purple-700"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="otp_code" className="block mb-2 text-sm font-medium text-gray-900">OTP Code</label>
                    <input
                        type="text"
                        id="otp_code"
                        name="otp_code"
                        value={formData.otp_code}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-purple-700"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Nouveau mot de passe</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-purple-700"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-purple-700 text-white py-3 rounded-lg hover:bg-purple-800 focus:outline-none focus:bg-purple-800"
                >
                    Réinitialiser le mot de passe
                </button>
            </form>
        </div>
    );
};

export default ResetPasswordConfirm;
