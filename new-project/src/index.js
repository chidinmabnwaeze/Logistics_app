import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'boxicons';
import Main from './components/main';
import Header from './components/header';
// import Footer from './components/footer';
import Card from './components/card2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Header/>
    <Main/>
    <Card/>
    {/* <Footer/> */}
  </React.StrictMode>
);


