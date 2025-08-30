import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useContext } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer} from 'react-toastify';

import { AppContext } from './context/AppContext'; // ✅ Import your context

import Home from './pages/Home';
import Result from './pages/Result';
import BuyCredit from './pages/BuyCredit';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Login from './components/Login'; // ✅ Import Login component

const App = () => {

  const {showLogin} = useContext(AppContext); 

  return (
      <div className="px-4 sm:px-10 md:px-14 lg:px-28 xl:px-40 min-h-screen bg-gradient-to-b from-teal-50 to-orange-50">
        <ToastContainer position='bottom-right' />
        <NavBar />
        {showLogin && <Login/>}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/result" element={<Result />} />
          <Route path="/buy-credit" element={<BuyCredit />} />
        </Routes>
        <Footer>
          
        </Footer>
      </div>
  );
};

export default App;
