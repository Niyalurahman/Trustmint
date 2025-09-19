import React from 'react';

export default function BuyerGuide() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Buyer Guide</h1>
      <div className="space-y-4 max-w-2xl mx-auto">
        {[1,2,3].map(step => (
          <div key={step} className="bg-white rounded-2xl shadow-lg p-4 hover:shadow-2xl transition flex items-center gap-4">
            <div className="text-white font-bold text-xl w-10 h-10 flex items-center justify-center rounded-full bg-purple-500">{step}</div>
            <p>Step {step}: Placeholder instructions for buyers.</p>
          </div>
        ))}
      </div>
    </div>
  );
}