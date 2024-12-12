import React, { useState } from 'react';
import LOGO from "../img/SJE LOGO.jpeg";
import { RiAdminLine } from "react-icons/ri";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    
      <div className='bg-white fixed w-full flex items-center border-b-[1px] border-gray-200 px-5 py-2 z-50'>
        <div className='flex justify-center items-center space-x-4'>
          <a href="/" className='flex items-center space-x-4'>
            <img className='h-16 rounded-full' src={LOGO} alt="Logo" />
            <h1 className='font-bold'>Ministry of Social Justice and Empowerment</h1>
          </a>
        </div>

         
        <ul className='hidden md:flex space-x-10 text-lg font-normal ml-auto'>
          <li>
            <a 
              href="#About" 
              className="transition-transform duration-300 hover:transform hover:-translate-y-1 hover:text-[#799DED]"
            >
              About
            </a>
          </li>
          <li>
            <a 
              className='flex items-center justify-center text-center transition-transform duration-300 hover:transform hover:-translate-y-1 hover:text-[#799DED]' 
              href='/ApprovedInstitute'
            >
                Institute List
            </a>
          </li>
          <li>
            <a 
              className='flex items-center justify-center text-center transition-transform duration-300 hover:transform hover:-translate-y-1 hover:text-[#799DED]' 
              href='/institute-login'
            >
                Institute Addn
            </a>
          </li>
          <li>
            <a 
              className='flex items-center justify-center text-center transition-transform duration-300 hover:transform hover:-translate-y-1 hover:text-[#799DED]' 
              href='/login'
            >
              <RiAdminLine /> Admin
            </a>
          </li>
          
        </ul>

        
        <div className="ml-auto md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg className="w-8 h-8 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Full-screen popup menu for smaller screens */}
      {isOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center">
          <button onClick={toggleMenu} className="absolute top-4 right-4 text-gray-800 text-3xl focus:outline-none">
            &times;
          </button>
          <ul className='flex flex-col space-y-8 text-2xl font-medium text-gray-800'>
            <li><a onClick={toggleMenu} href="#About">About</a></li>
            <li>
              <a className='flex items-center justify-center text-center' href='/login'>
                <RiAdminLine /> Admin
              </a>
            </li>
            <li>
              <a className='flex items-center justify-center text-center' href='/institute-login'>
                <RiAdminLine /> Institute Login
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;
