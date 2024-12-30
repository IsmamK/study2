import React, { useState } from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-indigo-600 text-white shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-2xl font-extrabold tracking-tight text-white hover:text-gray-200">
            SportsConnect
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="hover:text-gray-200">Home</Link>
          <Link to="/fields" className="hover:text-gray-200">Fields</Link>
          <Link to="/players" className="hover:text-gray-200">Players</Link>
          <Link to="/groups" className="hover:text-gray-200">Groups</Link>
          <Link to="/book" className="hover:text-gray-200">Book</Link>
    
        </div>

        {/* User Authentication */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/login" className="hover:text-gray-200">Login</Link>
          <Link to="/signup" className="px-4 py-2 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 transition duration-300">
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isMenuOpen && (
        <div className="md:hidden bg-indigo-600 text-white px-6 py-4 space-y-4">
          <Link to="/" className="block hover:text-gray-200">Home</Link>
          <Link to="/fields" className="block hover:text-gray-200">Fields</Link>
          <Link to="/players" className="block hover:text-gray-200">Players</Link>
          <Link to="/book" className="block hover:text-gray-200">Shop</Link>
          <Link to="/about" className="block hover:text-gray-200">About</Link>
          <Link to="/contact" className="block hover:text-gray-200">Contact</Link>
          <Link to="/login" className="block hover:text-gray-200">Login</Link>
          <Link to="/signup" className="block px-4 py-2 bg-white text-indigo-600 rounded-lg hover:bg-gray-100">Sign Up</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
