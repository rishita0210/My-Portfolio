import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Myport from './components/Myport/myport'
import Contact from './components/Contact/Contact'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Navbar/>
    <Hero/>
    <About/>
    <Myport/>
    <Contact/>
    
    
  </React.StrictMode>
);


