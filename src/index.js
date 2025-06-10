import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration'; // default dari CRA

// Membuat root dan merender komponen utama App
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// Mendaftarkan service worker untuk fitur PWA (Progressive Web App)
serviceWorkerRegistration.register();
