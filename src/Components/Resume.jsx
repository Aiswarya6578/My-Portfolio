import React from 'react';

const Resume = () => {
  return (
<div className="bg-gradient-to-r from-gray-500 via-black to-black text-white p-8 min-h-screen flex justify-center items-center">
        
      <div className="max-w-4xl mx-auto bg-gray-300 text-gray-800 p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
        
        <header className="text-center mb-12">
          <h1 className="text-6xl font-extrabold text-black">Aiswarya Shajeev</h1>
          <p className="text-2xl mt-2 text-gray-600">Full-Stack Developer</p>
          <p className="mt-2 text-gray-500">Email: aiswaryashajeev84@gmail.com | LinkedIn: linkedin.com/in/aiswaryashajeev | GitHub: github.com/aiswaryashajeev</p>
        </header>

        
        <section className="mb-12">
          <h2 className="text-4xl font-semibold text-black mb-6">Summary</h2>
          <p className="text-lg text-gray-800 leading-relaxed">
            A highly motivated and passionate Full-Stack Developer with expertise in both frontend and backend technologies.
            Focused on building responsive and scalable web applications, ensuring performance and a seamless user experience.
            Adept at problem-solving and optimizing applications for best results.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-4xl font-semibold text-black mb-6">Skills</h2>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
            <ul className="text-gray-800 space-y-4">
              <li><strong className="text-black">Frontend:</strong> React, JavaScript, HTML5, CSS3, Tailwind CSS, Material UI</li>
              <li><strong className="text-black">Backend:</strong> Node.js, Express.js, MongoDB, Mongoose</li>
              <li><strong className="text-black">Version Control:</strong> Git, GitHub</li>
            </ul>
            <ul className="text-gray-800 space-y-4">
              <li><strong className="text-black">Languages:</strong> JavaScript, HTML, CSS</li>
              <li><strong className="text-black">Tools:</strong> VS Code, Postman, Webpack</li>
              <li><strong className="text-black">Other:</strong> RESTful APIs, JWT, GraphQL</li>
            </ul>
          </div>
        </section>

 <section className="mb-12">
  <h2 className="text-4xl font-semibold text-black mb-6">Experience</h2>
  <div className="space-y-6">
    <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-2xl transition-all duration-300">
      <h3 className="text-2xl font-semibold text-gray-800">Self-Taught MERN Stack Developer</h3>
      <p className="text-sm italic text-gray-500">January 2023 - Present</p>
      <ul className="list-disc pl-6 mt-2 text-gray-700">
        <li>Built full-stack applications using the MERN stack (MongoDB, Express.js, React, Node.js) from scratch.</li>
        <li>Developed RESTful APIs for efficient data handling between frontend and backend.</li>
        <li>Implemented user authentication and authorization with JWT for secure login.</li>
        <li>Ensured responsive design and seamless user experiences across devices.</li>
        <li>Optimized app performance for fast loading and better user engagement.</li>
        <li>Collaborated with online communities and platforms to stay updated with new technologies.</li>
      </ul>
    </div>
  </div>
</section>


       {/* Projects Section */}
<section className="mb-12">
  <h2 className="text-4xl font-semibold text-black mb-6">Projects</h2>
  <div className="space-y-6">

    <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
      <h3 className="text-2xl font-semibold text-gray-800">Bus Ticket Booking App (Frontend)</h3>
      <p className="text-sm italic text-gray-500">React | Frontend Only</p>
      <p className="text-gray-700 mt-2">
        A bus ticket booking application built using React for the frontend. This app allows users to view available bus seats, choose a seat, and book tickets. It uses a simple and intuitive UI for ease of use.
      </p>
      <ul className="list-disc pl-6 mt-2 text-gray-700">
        <li>Implemented seat selection with availability status.</li>
        <li>Utilized React for managing state and components.</li>
        <li>Designed responsive UI for mobile and desktop.</li>
      </ul>
    </div>

    <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
      <h3 className="text-2xl font-semibold text-gray-800">React Todo App</h3>
      <p className="text-sm italic text-gray-500">React</p>
      <p className="text-gray-700 mt-2">
        A simple to-do list application built with React, allowing users to add, edit, delete, and mark tasks as complete. This project demonstrates my understanding of state management and React components.
      </p>
      <ul className="list-disc pl-6 mt-2 text-gray-700">
        <li>Utilized React state and hooks (useState, useEffect) to manage tasks.</li>
        <li>Implemented CRUD functionality for tasks.</li>
        <li>Designed a clean and user-friendly UI.</li>
      </ul>
    </div>

    <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
      <h3 className="text-2xl font-semibold text-gray-800">Chatbot Application</h3>
      <p className="text-sm italic text-gray-500">React, Node.js, MERN Stack</p>
      <p className="text-gray-700 mt-2">
        A chatbot app built using the MERN stack. The frontend is powered by React, and the backend uses Node.js to handle messages. This app can answer basic questions and provide user-specific information.
      </p>
      <ul className="list-disc pl-6 mt-2 text-gray-700">
        <li>Implemented a chatbot interface in React with dynamic responses.</li>
        <li>Integrated a backend in Node.js to process and respond to user queries.</li>
        <li>Utilized MongoDB for storing conversation history.</li>
      </ul>
    </div>

    <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
      <h3 className="text-2xl font-semibold text-gray-800">Full Stack E-commerce Coffee Website</h3>
      <p className="text-sm italic text-gray-500">MERN Stack (MongoDB, Express.js, React, Node.js)</p>
      <p className="text-gray-700 mt-2">
        A full-stack e-commerce website built with the MERN stack, designed for selling coffee products online. The website includes user authentication, product listings, shopping cart, and order management features. Admin can manage products and view orders.
      </p>
      <ul className="list-disc pl-6 mt-2 text-gray-700">
        <li>Developed a responsive frontend using React.</li>
        <li>Implemented user authentication and authorization using JWT.</li>
        <li>Built RESTful APIs with Node.js and Express for product management and order handling.</li>
        <li>Utilized MongoDB for storing product details, user data, and orders.</li>
        <li>Created a smooth checkout process and integrated a payment gateway.</li>
      </ul>
    </div>

  </div>
</section>

{/* Education Section */}
<section className="mb-12">
  <h2 className="text-4xl font-semibold text-black mb-6">Education</h2>
  <div className="space-y-6">

    {/* Higher Secondary Education */}
    <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
      <h3 className="text-2xl font-semibold text-gray-800">Higher Secondary - Biology Science</h3>
      <p className="text-sm italic text-gray-500">GHSS Vallikeezhu</p>
      <p className="text-gray-700 mt-2">Completed Higher Secondary Education with a focus on Biology Science.</p>
    </div>

    {/* High School */}
    <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
      <h3 className="text-2xl font-semibold text-gray-800">High School</h3>
      <p className="text-sm italic text-gray-500">Vimala Hridaya Higher Secondary School</p>
      <p className="text-gray-700 mt-2">Completed High School with a strong academic foundation.</p>
    </div>

    {/* Graduation */}
    {/* <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
      <h3 className="text-2xl font-semibold text-gray-800">Graduation - Bachelor in Pharmacy</h3>
      <p className="text-sm italic text-gray-500">MGM Silver Jubilee College of Pharmacy</p>
      <p className="text-gray-700 mt-2">Completed Bachelor's degree in Pharmacy, gaining in-depth knowledge of pharmaceutical sciences.</p>
    </div> */}

  </div>
</section>



        

        {/* Languages Section */}
        <section className="mb-12">
          <h2 className="text-4xl font-semibold text-black mb-6">Languages</h2>
          <ul className="list-disc pl-6 text-gray-700">
            <li>English (Fluent)</li>
            <li>Malayalam (Native)</li>
          </ul>
        </section>

        {/* Interests Section */}
        <section>
          <h2 className="text-4xl font-semibold text-black mb-6">Interests</h2>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Coding challenges (LeetCode, HackerRank)</li>
            <li>Open-source contributions</li>
            <li>Web development trends and frameworks</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Resume;
