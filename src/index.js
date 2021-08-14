import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navigation from './components/navigation/navigation';
import Header from './components/header/header';
import Products from './components/products/products';
import Footer from './components/footer/footer';


ReactDOM.render(
  <React.StrictMode>
    <App />
    <Navigation />
    <Header />
    <Products />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
