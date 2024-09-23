import React, { useState, useContext, useEffect } from 'react';
import { FaHome, FaWallet, FaHistory, FaQuestionCircle, FaBell, FaCog, FaUser, FaEnvelope, FaSignOutAlt, FaPhone } from 'react-icons/fa';
import { AuthContext } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import userPhoto from '../assets/images/profile.jpg';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const toggleNavbar = () => setNavbarOpen(!navbarOpen);

  const { user, setUser, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nom_complet: '',
    email: '',
    numero_telephone: '',
    adrese: '',
    website: '',
  });

  useEffect(() => {
    if (user) {
      setFormData({
        nom_complet: user.nom_complet || '',
        email: user.email || '',
        numero_telephone: user.numero_telephone || '',
        adrese: user.adrese || '',
        website: user.website || '',
      });
    }
  }, [user]);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <h1 className="text-4xl font-bold text-purple-700">Next<span className="text-black">Pay</span></h1>
        </a>
        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            id="user-menu-button"
            aria-expanded={dropdownOpen}
            onClick={toggleDropdown}
          >
            <span className="sr-only">Open user menu</span>
            <img className="w-8 h-8 rounded-full" src={userPhoto} alt="user photo" />
          </button>
          {dropdownOpen && (
            <div className="z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 absolute right-0 mt-12">
              <div className="px-5 py-15">
                <span className="flex items-center text-sm text-gray-900 dark:text-white">
                  <FaUser className="mr-2 text-purple-600" /> {user.nom_complet}
                </span>
                <span className="flex items-center text-sm text-gray-500 truncate dark:text-gray-400">
                  <FaPhone className="mr-2 text-purple-600" /> {user.numero_telephone}
                </span>
                <span className="flex items-center text-sm text-gray-500 truncate dark:text-gray-400">
                  <FaEnvelope className="mr-2 text-purple-600" /> {user.email}
                </span>

              </div>
              <ul className="py-2" aria-labelledby="user-menu-button">
                <li>
                  <a onClick={handleLogout} className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white cursor-pointer">
                    <FaSignOutAlt className="mr-2 text-purple-600" /> Se déconnecter
                  </a>
                </li>
              </ul>
            </div>
          )}
          <button
            data-collapse-toggle="navbar-user"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-user"
            aria-expanded={navbarOpen}
            onClick={toggleNavbar}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${navbarOpen ? 'block' : 'hidden'}`} id="navbar-user">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link to="/dashboard" className="flex items-center py-2 px-3 text-white bg-gray-400 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">
                <FaHome className="mr-2 text-purple-700 text-2xl" /> Home
              </Link>
            </li>
            <li>
              <Link to="/wallets" className="flex items-center py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                <FaWallet className="mr-2 text-purple-700 text-2xl" /> Portefeuilles
              </Link>
            </li>
            <li>
              <Link to="/transactions" className="flex items-center py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                <FaHistory className="mr-2 text-purple-700 text-2xl" /> Histoire
              </Link>
            </li>
            <li>
              <Link to="/help" className="flex items-center py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                <FaQuestionCircle className="mr-2 text-purple-700 text-2xl" /> Aide
              </Link>
            </li>
            <li>
              <a href="#" className="flex items-center py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                <FaBell className="mr-2 text-purple-700 text-2xl" /> Notifications
              </a>
            </li>
            <li>
              <Link to={"/settings"} className="flex items-center py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                <FaCog className="mr-2 text-purple-700 text-2xl" /> Paramètres
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
