import React from "react";

export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-100 to-blue-100">
      <div className="bg-white shadow-2xl rounded-3xl p-10 w-96 text-center">
        <h1 className="text-3xl font-bold mb-6">Login</h1>
        <p className="mb-4 text-gray-600">Choose a login method</p>

        {/* Email & Password Form */}
        <form className="space-y-4 text-left">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 px-4 rounded-2xl bg-blue-500 hover:bg-blue-600 text-white font-semibold shadow-lg transform transition hover:scale-105"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-300" />
          <span className="px-3 text-gray-500 text-sm">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Google Login */}
        <button
          className="w-full py-3 px-4 rounded-2xl bg-red-500 hover:bg-red-600 text-white font-semibold shadow-lg transform transition hover:scale-105 mb-3"
          onClick={() => alert("Google login coming soon 🚀")}
        >
          🔑 Continue with Google
        </button>

        {/* MetaMask Login */}
        <button
          className="w-full py-3 px-4 rounded-2xl bg-yellow-400 hover:bg-yellow-500 text-black font-semibold shadow-lg transform transition hover:scale-105"
          onClick={() => alert("MetaMask connect coming soon 🚀")}
        >
          🔗 Connect with MetaMask
        </button>
      </div>
    </div>
  );
}
