import React from 'react';

const Home = () => {
  return (
    <div className="bg-gradient-to-br from-gray-600 via-white to-gray-400 h-screen flex flex-col justify-center items-center">
      <div className="text-center mb-8 w-full p-6">
        <h2 className="font-extrabold text-6xl mb-4">My Skills</h2>
        <hr className="border-t-4 border-black my-10" />
        <p className="text-2xl max-w-3xl mx-auto font-semibold">
          Below is a quick overview of my main technical skill sets and tools I use.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 max-w-4xl w-full">
        <div className="bg-black text-white p-6 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex justify-center items-center flex-col p-10 rounded-lg">
          <p className="font-black text-2xl p-2">FRONTEND</p>
          <ul className="list-disc pl-6">
            <li>React</li>
            <li>Javascript</li>
            <li>Node.js</li>
            <li>HTML & CSS</li>
          </ul>
        </div>

        <div className="bg-black text-white p-10 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex justify-center items-center flex-col rounded-lg">
          <p className="font-black text-2xl p-2">BACKEND</p>
          <ul className="list-disc pl-6">
            <li>Node.js</li>
            <li>Express</li>
            <li>MongoDB</li>
            <li>Mongoose</li>
          </ul>
        </div>
      </div>

      <div className="bg-black text-white p-10 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex justify-center items-center flex-col rounded-lg mt-6 max-w-3xl mx-auto">
        <p className="font-black text-3xl p-2">Problem Solving</p>
        <p>
          As a full-stack developer, problem-solving is at the core of my development process. I thrive in challenging environments where I can apply my analytical thinking and technical skills to identify issues, find effective solutions, and implement them efficiently. Whether it’s debugging complex code, optimizing performance, or finding creative ways to meet user needs, I approach each problem methodically.
        </p>
      </div>
    </div>
  );
};

export default Home;
