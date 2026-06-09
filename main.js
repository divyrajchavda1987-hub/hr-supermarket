import './styles.css';
import HRSupermarket from './src/customer/main.jsx';
import React from 'react';
import { createRoot } from 'react-dom/client';

const root = document.getElementById('root');
if (root) {
  createRoot(root).render(React.createElement(HRSupermarket));
}
