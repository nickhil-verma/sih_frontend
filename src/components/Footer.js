import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-teal-950 text-white py-6">
      <div className="max-w-6xl mx-auto text-center">
        <p className="mb-4">&copy; {new Date().getFullYear()} All rights reserved to Ministry of Social Justice and Empowerment</p>
        <div className="flex justify-center space-x-4 mb-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            <FaFacebook size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <FaTwitter size={24} />
          </a>
          <a href="https://www.instagram.com/ " target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
            <FaInstagram size={24} />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaGithub size={24} />
          </a>
        </div>
        <div>
 
        </div>
        <div className="mt-4">
          <p className="text-sm">Support Social Justice: <a href="https://www.socialjustice.org/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Learn More</a></p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
