import React from 'react';
import ModelCard from '../components/ModelCard';
import { useNavigate } from 'react-router-dom';

export default function Landing() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50 p-6">
      <div className="text-center py-20">
        <h1 className="text-5xl font-bold mb-4">Welcome to TrustMint</h1>
        <p className="text-gray-700 mb-8 text-lg">Your decentralized AI model marketplace.</p>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => navigate('/login')}
            className="px-6 py-3 rounded-xl bg-yellow-400 hover:bg-yellow-500 text-black font-semibold shadow-lg transform transition hover:scale-105"
          >
            Download CLI
          </button>
          <button
            onClick={() => navigate('/marketplace')}
            className="px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-semibold shadow-lg transform transition hover:scale-105"
          >
            Explore Marketplace
          </button>
        </div>
      </div>
      <h2 className="text-3xl font-bold text-center mb-8">Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1,2,3].map((i) => <ModelCard key={i} title={`Feature ${i}`} />)}
      </div>
    </div>
  );
}