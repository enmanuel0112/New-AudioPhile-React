import './scss/App.scss';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Earphones from './components/earphones';
import Headphones from './components/headphones';
import Speakers from './components/speakers';
import Home from './components/home';
import Checkout from './components/checkout';
import StateComponents from './context/StateComponents';
import ProductDetails from './components/ProductDetails';
import Login from './components/login';


function App() {

  return (
    <StateComponents>
      <>
        <Router basename='/New-AudioPhile-React'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/earphones'
              element={<Earphones />} />
            <Route path='/headphones'
              element={<Headphones />} />
            <Route path='/speakers'
              element={<Speakers />} />
            <Route path='/checkout'
              element={<Checkout />} />
            <Route path="/productDeatils/:id" element={<ProductDetails />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </Router>
      </>
    </StateComponents>
  );
}

export default App;
