import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import Navbar from '../components/Navbar';
import Content from '../components/Content'; 
import Footer from '../components/Footer';   

const DashboardPage = () => {
  const { auth, logout } = useContext(AuthContext);

  return (
    <div>
      <Navbar />
      <Content/>
      <Footer />
    </div>
  );
};

export default DashboardPage;
