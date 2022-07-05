import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import SiteRoutes from './components/SiteRoutes';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'mdbreact/dist/css/mdb.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SiteRoutes />
  </React.StrictMode>
);
