import React from 'react';
import ModelCard from '../components/ModelCard';

export default function Marketplace() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-center">Marketplace</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1,2,3,4,5,6].map((i) => <ModelCard key={i} title={`Model ${i}`} />)}
      </div>
    </div>
  );
}