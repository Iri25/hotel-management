import React from 'react';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './routes/Home';
import AccountPage from './routes/Account';
import HotelPage from './routes/Hotel';
import './App.css';
import Navbar from './components/ui/Navbar';
import HotelDetails from './routes/HotelDetails';

function App() {
  return (
      <div className="w-screen h-screen bg-gray-lightest flex flex-col items-center gap-y-10">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/account" element={<AccountPage />} />
            <Route path="/hotel" element={<HotelPage />} />
            <Route path="/hotel/:hotelId" element={<HotelDetails />} /> 
          </Routes>
        </Router>
      </div >
  );
}

export default App;
