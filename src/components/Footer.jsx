import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Section: About */}
          <div>
            <h3 className="text-xl font-semibold mb-4">About SportsConnect</h3>
            <p className="text-gray-400 text-sm">
              SportsConnect is your platform to find players, book fields, and connect with the sports community. Whether you're looking for a solo game or a group match, we've got you covered!
            </p>
          </div>

          {/* Middle Section: Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white text-sm">Home</Link></li>
              <li><Link to="/fields" className="text-gray-400 hover:text-white text-sm">Fields</Link></li>
              <li><Link to="/players" className="text-gray-400 hover:text-white text-sm">Players</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white text-sm">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Right Section: Social Media and Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Stay Connected</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 12h16M4 18h16M4 6h16"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 12h16M4 18h16M4 6h16"></path>
                </svg>
              </a>
            </div>

            <h3 className="text-xl font-semibold mt-6">Contact Us</h3>
            <p className="text-gray-400 text-sm">Email: support@sportsconnect.com</p>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="mt-12 border-t border-gray-600 pt-4 text-center">
          <p className="text-gray-400 text-sm">© 2024 SportsConnect. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
