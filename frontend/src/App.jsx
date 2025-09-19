import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import Marketplace from './pages/Marketplace';
import ModelDetail from './pages/ModelDetail';
import Login from './pages/Login';
import Listings from './pages/Developer/Listings';
import DevGuide from './pages/Developer/Guide';
import BuyerGuide from './pages/Buyer/Guide';

export default function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/model/:id" element={<ModelDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/developer/listings" element={<Listings />} />
        <Route path="/developer/guide" element={<DevGuide />} />
        <Route path="/buyer/guide" element={<BuyerGuide />} />
      </Routes>
    </div>
  );
}