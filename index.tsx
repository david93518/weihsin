
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const url = new URL(window.location.href);
const spaRedirect = url.searchParams.get('spa_redirect');
if (spaRedirect) {
  url.searchParams.delete('spa_redirect');
  window.history.replaceState({}, '', spaRedirect);
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
