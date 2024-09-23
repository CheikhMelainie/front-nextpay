import React, { useState } from 'react';
import api from '../api/api.js'
import Navbar from './Navbar';
import Footer from './Footer';
import { FaPaperPlane } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        nom: '',
        numero_tel: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post('/user/contact/', formData);
            if (response.status === 201) {
                toast.success("Message envoyé avec succès !");
                setFormData({
                    nom: '',
                    numero_tel: '',
                    message: '',
                });
            }
        } catch (error) {
            toast.error("Erreur lors de l'envoi du message. Veuillez réessayer.");
        }
    };

    return (
        <>
            <Navbar />
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
                <ToastContainer />
                <div className="w-full max-w-md p-6 bg-white shadow-md rounded-lg">
                    <h1 className="text-3xl font-bold text-center mb-4">
                        <span className="text-purple-600">Next</span>Pay
                    </h1>
                    <div className="bg-purple-600 text-white text-center py-2 rounded mb-6">
                    Contactez-nous
                    </div>
                    <form className="space-y-4 w-full" onSubmit={handleSubmit}>
                        <div>
                            <label className="block mb-1 text-gray-700" htmlFor="nom">Nom</label>
                            <input
                                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-purple-500"
                                type="text"
                                id="nom"
                                name="nom"
                                placeholder="Votre nom"
                                value={formData.nom}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label className="block mb-1 text-gray-700" htmlFor="numero_tel">Numéro de téléphone</label>
                            <input
                                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-purple-500"
                                type="text"
                                id="numero_tel"
                                name="numero_tel"
                                placeholder="Numéro de téléphone"
                                value={formData.numero_tel}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label className="block mb-1 text-gray-700" htmlFor="message">Message</label>
                            <textarea
                                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-purple-500"
                                id="message"
                                name="message"
                                placeholder="Message"
                                rows="4"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <button
                            className="w-full bg-purple-600 text-white py-2 rounded-lg flex items-center justify-center hover:bg-purple-700 focus:outline-none focus:bg-purple-700"
                            type="submit"
                        >
                            Envoyer <FaPaperPlane className="ml-2" />
                        </button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Contact;
