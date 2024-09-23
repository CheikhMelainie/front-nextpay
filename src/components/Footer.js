import React from 'react';
import { Link } from 'react-router-dom';
import { FaInfoCircle, FaFileAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-white shadow-md w-full">
            <div className="max-w-screen-xl mx-auto px-4 py-8 md:px-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <Link to="/" className="flex items-center mb-4 md:mb-0 space-x-3">
                        <h1 className="text-4xl font-bold text-purple-700">Next<span className="text-black">Pay</span></h1>
                    </Link>
                    <ul className="flex flex-wrap justify-center md:justify-end items-center mb-6 text-sm font-medium text-gray-500">
                        <li className="flex items-center mb-2 md:mb-0">
                            <FaInfoCircle className="mr-2 text-purple-700" />
                            <Link to="/about" className="hover:underline me-2 md:me-4">À propos</Link>
                        </li>
                        <li className="flex items-center mb-2 md:mb-0">
                            <FaFileAlt className="mr-2 text-purple-600" />
                            <Link to="/licensing" className="hover:underline me-2 md:me-4">Licence</Link>
                        </li>
                        <li className="flex items-center mb-2 md:mb-0">
                            <FaEnvelope className="mr-2 text-purple-600" />
                            <Link to="/contact" className="hover:underline me-2 md:me-4">Contact</Link>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <div className="text-sm text-gray-500 sm:text-center">
                    <span className="block mb-2 dark:text-gray-400">© {new Date().getFullYear()} NextPay. Tous droits réservés.</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
