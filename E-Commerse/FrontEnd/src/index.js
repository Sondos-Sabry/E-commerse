import React from 'react';
import ReactDOM from 'react-dom/client';
import './ProjectStyle/index.css';
import './i18n';
import App from '../src/App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    
    
    <BrowserRouter>
    <Provider store={store}>
      <App />
      </Provider>
      </BrowserRouter>
    
   

 
);


