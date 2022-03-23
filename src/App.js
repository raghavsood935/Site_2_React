import React from 'react';
import Navbar from './Components/Navbar';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Pages/Home';
import Services from './Components/Pages/Services';
import Products from './Components/Pages/Products';
import SignUp from './Components/Pages/SignUp';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path= "/" element= {<Home />} /> 
        <Route path= "/services" element= {<Services />} />
        <Route path= "/products" element= {<Products />} />
        <Route path= "/sign-up" element= {<SignUp />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
