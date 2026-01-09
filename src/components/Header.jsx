import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* ===== LOGO ===== */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          Car<span className="text-indigo-600">Rental</span>
        </Link>

        {/* ===== DESKTOP MENU ===== */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            to="/cars"
            className="text-gray-700 hover:text-blue-600 font-medium transition"
          >
            View Cars
          </Link>

          <Link
            to="/login"
            className="text-gray-700 hover:text-blue-600 font-medium transition"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-2 rounded-lg font-semibold hover:from-indigo-600 hover:to-blue-600 transition"
          >
            Sign Up
          </Link>
        </nav>

        {/* ===== MOBILE MENU BUTTON ===== */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* ===== MOBILE MENU ===== */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col p-4 gap-4">
            <Link
              to="/cars"
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              View Cars
            </Link>

            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Login
            </Link>

            <Link
              to="/signup"
              onClick={() => setMenuOpen(false)}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-2 rounded-lg font-semibold text-center"
            >
              Sign Up
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}


