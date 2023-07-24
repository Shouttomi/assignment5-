import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root:ReactDOM.Root = ReactDOM.createRoot(
  document.getElementById('root') || document.createElement('div')
);
root.render(<App />);
