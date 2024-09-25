import React, { createContext, useState, useEffect } from 'react';
import api from '../api/api';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ access: null, user: null });
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await api.get('/user/profile/');
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user', error);
      } finally {
        setLoading(false);
      }
    }
    const access = localStorage.getItem('access');
    if (access) {
      setAuth({ access, user: null });
    }
    fetchUser();
  }, []);


  const login = async (credentials) => {
    try {
      const response = await api.post('http://127.0.0.1:8000/user/api/login/', credentials);
      if (response.status === 200) {
      
      const { access, user } = response.data;
        // Enregistrez le token d'accès dans le localStorage
      localStorage.setItem('access', access);
      console.log('Access token stored in localStorage:', access); // Log the access token
      setAuth({ access, user });

      } else {
        throw new Error('Login failed');
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        throw new Error('Identifiant ou mot de passe incorrect');
      } else {
        throw new Error('La connexion a échoué. Veuillez réessayer.');
      }
    }
  };





  // const login = async (credentials) => {
  //   try {
  //     console.log('Attempting login with credentials:', credentials);
  //     const response = await api.post('/user/api/login/', credentials);
  //     console.log('Response data:', response.data);
  //     const { access, user } = response.data;
  //     localStorage.setItem('access', access);
  //     setAuth({ access, user });
  //   } catch (error) {
  //     if (error.response) {
  //       console.error('Login failed - Server responded:', error.response.data);
  //     } else if (error.request) {
  //       console.error('Login failed - No response received:', error.request);
  //     } else {
  //       console.error('Login failed:', error.message);
  //     }
  //   }
  // };

  

  const logout = () => {
    localStorage.removeItem('access');
    setAuth({ access: null, user: null });
  };

  return (
    <AuthContext.Provider value={{ user, setUser, auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
