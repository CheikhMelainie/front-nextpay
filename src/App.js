import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/Routes';
import AuthProvider from './context/AuthContext';
import CustomThemeProvider from './context/ThemeProvider';
import './styles/main.css';

const App = () => {
  return (
    <AuthProvider>
      <CustomThemeProvider>
        <Router>
          <AppRoutes />
        </Router>
      </CustomThemeProvider>
    </AuthProvider>
  );
};

export default App;
