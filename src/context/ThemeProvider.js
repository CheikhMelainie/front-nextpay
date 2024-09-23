import React from 'react';
import { ThemeProvider } from '@material-tailwind/react';

const CustomThemeProvider = ({ children }) => {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
};

export default CustomThemeProvider;
