import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-black via-gray-400 to-black text-white py-4">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <h1 className="text-sm sm:text-lg md:text-xl font-bold truncate">
          AISWARYA SHAJEEV
        </h1>

        {/* Hamburger Menu Button */}
        <button
          className="block md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {/* Navigation Menu */}
        <nav
          className={`${
            menuOpen ? 'block' : 'hidden'
          } md:flex absolute md:static top-14 left-0 w-full md:w-auto bg-black md:bg-transparent z-10`}
        >
          <ul className="flex flex-col md:flex-row items-center md:gap-x-10 gap-y-4 md:gap-y-0 py-4 md:py-0">
            <li>
              <Link
                to="/"
                className="hover:text-gray-300 block px-4 md:px-0 text-xs sm:text-sm md:text-base"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-gray-300 block px-4 md:px-0 text-xs sm:text-sm md:text-base"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className="hover:text-gray-300 block px-4 md:px-0 text-xs sm:text-sm md:text-base"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-gray-300 block px-4 md:px-0 text-xs sm:text-sm md:text-base"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/resume"
                className="hover:text-gray-300 block px-4 md:px-0 text-xs sm:text-sm md:text-base"
              >
                Resume
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
