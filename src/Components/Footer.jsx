import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-100 via-gray-300 to-gray-400 text-black py-8 shadow-lg relative">
      <div className="absolute inset-0 bg-[url('https://www.toptal.com/designers/subtlepatterns/patterns/diagonal_stripes.png')] opacity-20"></div>
      <div className="container mx-auto flex justify-between items-center px-4 relative z-10">
        <div className="text-left text-lg font-semibold">
          <p>&copy; 2024 My Portfolio</p>
        </div>
        <div className="text-right space-x-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f text-2xl hover:text-blue-600"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter text-2xl hover:text-blue-400"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in text-2xl hover:text-blue-700"></i>
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github text-2xl hover:text-gray-700"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
