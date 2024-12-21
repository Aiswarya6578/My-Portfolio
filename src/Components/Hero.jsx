import React from 'react';

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen w-full">
      {/* Image Section with Gradient Overlay */}
      <div className="relative w-full md:w-1/2 h-1/2 md:h-full bg-[url('/portfolio_img.jpg')] bg-cover bg-no-repeat bg-center">
        {/* Gradient overlay on the right side */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black"></div>
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full bg-black text-white flex flex-col items-center justify-center px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center max-w-lg mx-auto mb-4">
          WELCOME TO MY PORTFOLIO
        </h1>

        <h2 className="text-center max-w-xl mx-auto leading-relaxed tracking-wider">
          Hello, my name is <span className="text-gray-600 text-4xl px-3 font-bold">Aiswarya Shajeev</span>. I'm a full-stack developer specialized in frontend and backend development for scalable web apps. I have made a variety of MERN Stack Applications.
        </h2>

        <button className="px-6 py-2 bg-gray-200 text-black mt-7 font-semibold rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400">
          Explore more
        </button>
      </div>
    </div>
  );
};

export default Hero;
