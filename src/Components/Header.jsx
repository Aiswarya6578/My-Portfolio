import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-black via-gray-400 to-black text-white py-8">
      <div className="container mx-auto flex flex-row justify-between items-center px-4">
        <h1 className="text-2xl font-bold">AISWARYA SHAJEEV</h1>
        <nav>
          <ul className="flex flex-row gap-x-10">
            <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
            <li><Link to="/about" className="hover:text-gray-300">About</Link></li>
            <li><Link to="/projects" className="hover:text-gray-300">Projects</Link></li>
            <li><Link to="/contact" className="hover:text-gray-300">Contact</Link></li>
            <li><Link to="/resume" className="hover:text-gray-300">Resume</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
