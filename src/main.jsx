import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { PreferencesProvider } from './context/PreferencesContext';
import App from './App';
import './styles/main.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PreferencesProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PreferencesProvider>
  </React.StrictMode>,
);
