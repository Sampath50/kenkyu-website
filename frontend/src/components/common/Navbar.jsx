import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">KP</span>
              </div>
              <span className="font-bold text-xl text-gray-800">Kenkyu Publisher</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary-600 transition">Home</Link>
            <Link to="/journals" className="text-gray-700 hover:text-primary-600 transition">Journals</Link>
            <Link to="/articles" className="text-gray-700 hover:text-primary-600 transition">Articles</Link>
            
            {token ? (
              <>
                <Link to="/submit" className="btn-primary">Submit Paper</Link>
                <Link to="/dashboard" className="text-gray-700 hover:text-primary-600 transition">Dashboard</Link>
                <button onClick={handleLogout} className="text-red-600 hover:text-red-700">Logout</button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-gray-700 hover:text-primary-600 transition">Login</Link>
                <Link to="/register" className="btn-primary">Register</Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <Link to="/" className="block py-2 text-gray-700">Home</Link>
            <Link to="/journals" className="block py-2 text-gray-700">Journals</Link>
            <Link to="/articles" className="block py-2 text-gray-700">Articles</Link>
            {token ? (
              <>
                <Link to="/submit" className="block py-2 text-gray-700">Submit Paper</Link>
                <Link to="/dashboard" className="block py-2 text-gray-700">Dashboard</Link>
                <button onClick={handleLogout} className="block py-2 text-red-600">Logout</button>
              </>
            ) : (
              <>
                <Link to="/login" className="block py-2 text-gray-700">Login</Link>
                <Link to="/register" className="block py-2 btn-primary text-center">Register</Link>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;