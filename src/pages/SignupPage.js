// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import api from '../api/api';

// const SignupPage = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     email: '',
//     nom_complet: '',
//     adrese: '',
//     numero_telephone: '',
//     otp: '',
//     username: '',
//     password: '',
//     website: '',
//     category: '',
//     verification_status: true,
//     activation_status: true,
//     bank_account_number: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const a = {
//         "email": "haimedahacheikhmalainine@gmail.com",
//         "nom_complet": "Nom Complet",
//         "adrese": "Adresse",
//         "numero_telephone": "0123456789",
//          "otp":"658765",
//         "username": "nom_utilisateur",
//         "password": "votre_mot_de_passe",
//         "website": "http://www.example.com",
//         "category": "Catégorie",
//         "verification_status": true,
//         "activation_status": true,
//         "bank_account_number": "1234567890"
//     }
//     try {
//       console.log('Données envoyées :', a);

//       await api.post('/user/verify-otp/commercant/', formData
//       );
//       navigate('/login');
//     } catch (error) {
//       console.error('Signup failed:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Signup</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           placeholder="Email"
//           required
//         />
//         <input
//           type="text"
//           name="nom_complet"
//           value={formData.nom_complet}
//           onChange={handleChange}
//           placeholder="Full Name"
//           required
//         />
//         <input
//           type="text"
//           name="adrese"
//           value={formData.adrese}
//           onChange={handleChange}
//           placeholder="Address"
//           required
//         />
//         <input
//           type="text"
//           name="numero_telephone"
//           value={formData.numero_telephone}
//           onChange={handleChange}
//           placeholder="Phone Number"
//           required
//         />
//         <input
//           type="text"
//           name="otp"
//           value={formData.otp}
//           onChange={handleChange}
//           placeholder="Enter OTP"
//           required
//         />
//         <input
//           type="text"
//           name="username"
//           value={formData.username}
//           onChange={handleChange}
//           placeholder="Username"
//           required
//         />
//         <input
//           type="password"
//           name="password"
//           value={formData.password}
//           onChange={handleChange}
//           placeholder="Password"
//           required
//         />
//         <input
//           type="text"
//           name="website"
//           value={formData.website}
//           onChange={handleChange}
//           placeholder="Website"
//           required
//         />
//         <input
//           type="text"
//           name="category"
//           value={formData.category}
//           onChange={handleChange}
//           placeholder="Category"
//           required
//         />
//         <input
//           type="text"
//           name="bank_account_number"
//           value={formData.bank_account_number}
//           onChange={handleChange}
//           placeholder="Bank Account Number"
//           required
//         />
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// };

// export default SignupPage;



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/api';
import { Link } from 'react-router-dom';

const SignupPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nom_complet: '',
    adrese: '',
    phone_number: '',
    otp: '',
    password: '',
    website: '',
    category: '',
    verification_status: true,
    activation_status: true,
    bank_account_number: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
        "nom_complet": formData.nom_complet,
        "adrese": formData.adrese,
        "phone_number": formData.phone_number,
        "otp": formData.otp,
        "password": formData.password,
        "website": formData.website,
        "category": formData.category,
        "verification_status": true,
        "activation_status": true,
        "bank_account_number": formData.bank_account_number
    };
    try {
      await api.post('/user/verify-otp/commercant/', data);
      navigate('/login');
    } catch (error) {
      console.error('Signup failed:', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <h1 className="text-4xl font-bold text-purple-700">
        Next<span className="text-black">Pay</span>
      </h1>
      <div className="w-full max-w-md mt-8">
        <div className="bg-purple-700 text-white text-center py-2 rounded-t-md">
          <h2 className="text-lg"></h2>
        </div>
        <div className="bg-white shadow-md rounded-b-md p-8">
          <form onSubmit={handleSubmit} className='w-full'>
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Nom</label>
            <input
              type="text"
              name="nom_complet"
              value={formData.nom_complet}
              onChange={handleChange}
              placeholder="Nom Complet *"
              required
              className="w-full p-2 border border-gray-300 rounded mb-4"
            />
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Address</label>
            <input
              type="text"
              name="adrese"
              value={formData.adrese}
              onChange={handleChange}
              placeholder="Adresse *"
              required
              className="w-full p-2 border border-gray-300 rounded mb-4"
            />
             <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Numéro de téléphone</label>
            <input
              type="text"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
              placeholder="Numéro de téléphone *"
              required
              className="w-full p-2  border border-gray-300 rounded mb-4"
            />
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Lien de site Web </label>
            <input
              type="text"
              name="website"
              value={formData.website}
              onChange={handleChange}
              placeholder="Lien de site Web *"
              required
              className="w-full p-2 border border-gray-300 rounded mb-4"
            />
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Mot de passe</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Mot de passe *"
              required
              className="w-full p-2 border border-gray-300 rounded mb-4"
            />
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">OTP Code</label>
            <input
              type="text"
              name="otp"
              value={formData.otp}
              onChange={handleChange}
              placeholder="OTP Code *"
              required
              className="w-full p-2 border border-gray-300 rounded mb-4"
            />
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Category</label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              placeholder="Category *"
              required
              className="w-full p-2 border border-gray-300 rounded mb-4"
            />
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Numéro de compte bancaire</label>
            <input
              type="text"
              name="bank_account_number"
              value={formData.bank_account_number}
              onChange={handleChange}
              placeholder="Numéro de compte bancaire *"
              required
              className="w-full p-2 border border-gray-300 rounded mb-4"
            />
            <button
              type="submit"
              className="w-full bg-purple-700 text-white py-2 rounded flex items-center justify-center"
            >
            S'inscrire
            </button>
            <div className="text-center mt-4">
              <p className="text-gray-600">Vous avez déja un compte ? <Link to={"/login"} className="text-blue-600">
              Se connecter</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
