import React from 'react';

export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-100 to-blue-100">
      <div className="bg-white shadow-2xl rounded-3xl p-10 w-96 text-center">
        <h1 className="text-3xl font-bold mb-6">Login</h1>
        <p className="mb-4 text-gray-600">Connect your wallet to continue</p>
        <button
          className="w-full py-3 px-4 rounded-2xl bg-yellow-400 hover:bg-yellow-500 text-black font-semibold shadow-lg transform transition hover:scale-105"
          onClick={() => alert('MetaMask connect coming soon 🚀')}
        >
          🔗 Connect with MetaMask
        </button>
      </div>
    </div>
  );
}