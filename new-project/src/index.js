import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'boxicons';
import Main from './components/main';
import Header from './components/header';
import Footer from './components/footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Header/>
    <Main/>
    <Footer/>
  </React.StrictMode>
);


