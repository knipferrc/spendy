import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from '../../lib/context/theme';
import { AuthProvider } from '../../lib/context/auth';
import { Routes } from '../../routes';
import { I18nProvider } from '../../lib/context/i18n';

export const App: React.FC = () => {
  useEffect(() => {
    if (import.meta.env.MODE === 'production') {
      if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
          navigator.serviceWorker.register('/sw.js').then().catch();
        });
      }
    }
  }, []);

  return (
    <BrowserRouter>
      <ThemeProvider>
        <I18nProvider>
          <AuthProvider>
            <Routes />
          </AuthProvider>
        </I18nProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};
