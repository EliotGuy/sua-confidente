import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import '@fontsource/inter';
import '@fontsource/playfair-display';
import '@fontsource/lora'; // Defaults to weight 400.
import '@fontsource/mukta-vaani';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
