import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-blue-900 p-6 shadow-xl text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-extrabold tracking-wide flex items-center">
          <span className="text-yellow-300">Life Care</span>  Hospital
        </h1>
        <div className="hidden md:flex space-x-8 text-lg">
          <Link className="hover:text-yellow-300 transition duration-300" to="/">Home</Link>
          <Link className="hover:text-yellow-300 transition duration-300" to="/about">About</Link>
          <Link className="hover:text-yellow-300 transition duration-300" to="/services">Services</Link>
          <Link className="hover:text-yellow-300 transition duration-300" to="/contact">Contact</Link>
        </div>
        <button className="hidden md:block bg-yellow-300 text-blue-900 font-bold py-2 px-6 rounded-lg hover:bg-yellow-400 transition duration-300">
          <Link to={"/appointment"}>Book Appointment</Link>
        </button>
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-800 text-white p-4">
          <Link className="block py-2 hover:text-yellow-300" to="/" onClick={handleLinkClick}>Home</Link>
          <Link className="block py-2 hover:text-yellow-300" to="/about" onClick={handleLinkClick}>About</Link>
          <Link className="block py-2 hover:text-yellow-300" to="/services" onClick={handleLinkClick}>Services</Link>
          <Link className="block py-2 hover:text-yellow-300" to="/contact" onClick={handleLinkClick}>Contact</Link>
          <button className="w-full bg-yellow-300 text-blue-900 font-bold py-2 mt-4 rounded-lg hover:bg-yellow-400 transition duration-300" onClick={handleLinkClick}>
            Book Appointment
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
