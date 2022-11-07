import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from '../src/Style/Global'
import AppRoutes from './Router/Routes';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle/>
    
    <AppRoutes/>

  </React.StrictMode>
);

