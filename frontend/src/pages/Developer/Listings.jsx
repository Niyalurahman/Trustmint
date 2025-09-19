import React from 'react';

export default function Listings() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Developer Listings</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[1,2,3].map(i => (
          <div key={i} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">
            <h2 className="text-xl font-bold mb-2">Model {i}</h2>
            <p className="text-gray-600 mb-2">Status: Pending</p>
          </div>
        ))}
      </div>
    </div>
  );
}