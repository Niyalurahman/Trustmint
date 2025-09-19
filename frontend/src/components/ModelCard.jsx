import React from 'react';

export default function ModelCard({ title }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 hover:scale-105 p-4">
      <div className="h-40 bg-gray-200 rounded-lg mb-4"></div>
      <h2 className="font-bold text-xl mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">This is a visually appealing placeholder description.</p>
      <button className="w-full py-2 px-4 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-semibold shadow transition">
        View Details
      </button>
    </div>
  );
}