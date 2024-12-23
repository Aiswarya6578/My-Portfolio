import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-gray-400 via-black to-black py-10">
      <div className="max-w-4xl mx-auto p-6 bg-gray-500 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6">Contact Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Phone Number */}
          <div className="p-6 bg-gray-300 rounded-lg shadow-lg hover:bg-gray-300 transition-all">
          <h3 className=" font-extrabold text-xl mb-2">Phone Number</h3>

            <p className=" text-xl font-medium text-gray-600">+91 8139006780</p>
          </div>

          {/* Email */}
          <div className="p-6 bg-gray-300 rounded-lg shadow-lg hover:bg-gray-300 transition-all">
            <h3 className="text-xl font-extrabold mb-2">Email</h3>
            <p className=" text-xl font-medium text-gray-600">aiswaryashajeev84@gmail.com</p>
          </div>
        </div>

        {/* Address */}
        <div className="p-6 bg-gray-300 rounded-lg shadow-lg hover:bg-gray-300 transition-all mb-8">
          <h3 className="text-xl font-extrabold mb-2">Address</h3>
          <p className=" text-xl font-medium text-gray-600">Puthuvalil House , Sakthikualangara, PO ,Kollam</p>
        </div>

        <div className="flex justify-center mb-8 space-x-6">
          {/* Social Media Links */}
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-blue-800 transition-all"
          >
            <FaFacebook />
          </a>
          <a
            href="https://x.com/home"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-gray-600 transition-all"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-gray-600 transition-all"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-gray-600 transition-all"
          >
            <FaGithub />
          </a>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-center mb-4">Send a Message</h3>
          <form className="space-y-4">
            {/* Message Form */}
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 bg-gray-300 rounded-lg border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 bg-gray-300 rounded-lg border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-4 bg-gray-300 rounded-lg border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="w-full py-3 bg-black text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
