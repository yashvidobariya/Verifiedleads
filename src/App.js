import React from 'react';
import './App.css';
import Header from './main/Header';
import './css/style.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import ContactUs from './Pages/Contact';

import Footer from './main/Footer';
import Price from './screen/Price';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/price" element={<Price />} />
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
