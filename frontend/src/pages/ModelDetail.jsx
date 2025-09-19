import React from 'react';

export default function ModelDetail() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6 grid md:grid-cols-2 gap-6">
        <div className="h-64 bg-gray-200 rounded-lg"></div>
        <div>
          <h1 className="text-3xl font-bold mb-4">Model Details</h1>
          <p className="text-gray-600 mb-4">Placeholder for metadata and proof info.</p>
          <button className="px-6 py-3 rounded-xl bg-green-500 hover:bg-green-600 text-white font-semibold shadow transition">
            Verify Proof (coming soon)
          </button>
        </div>
      </div>
    </div>
  );
}