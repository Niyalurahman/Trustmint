import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 shadow-lg sticky top-0 z-50 flex justify-between items-center">
      <div className="font-bold text-xl">TrustMint</div>
      <div className="flex items-center space-x-4">
        <Link className="hover:underline" to="/">Home</Link>
        <Link className="hover:underline" to="/marketplace">Marketplace</Link>
        <Link className="hover:underline" to="/developer/listings">Developer</Link>
        <Link className="hover:underline" to="/developer/guide">Dev Guide</Link>
        <Link className="hover:underline" to="/buyer/guide">Buyer Guide</Link>
        <Link className="px-4 py-2 rounded-xl bg-yellow-400 text-black font-semibold hover:bg-yellow-500 transition" to="/login">
          Download CLI
        </Link>
      </div>
    </nav>
  );
}