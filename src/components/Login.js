import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MdAdminPanelSettings } from "react-icons/md";
import DSU from "../img/M.jpg";

const Login = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); // Loading state
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate input
    if (!email || !password) {
      toast.error('Email and password are required');
      return;
    }

    setLoading(true); // Start loading

    try {
      const url = 'https://ceda-auth.vercel.app/auth/login';
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();
      const { success, message, jwtToken, name, error } = result;

      if (success) {
        // Successful login actions
        toast.success(message);
        localStorage.setItem('token', jwtToken);
        localStorage.setItem('loggedInUser', name);

        // Update authentication state
        setIsAuthenticated(true);

        // Navigate to admin page
        setTimeout(() => {
          navigate('/admin');
        }, 1000);
      } else {
        toast.error(message || error?.details[0]?.message || 'An error occurred');
      }
    } catch (err) {
      toast.error('An error occurred while logging in');
      console.error('Login error:', err);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className='flex flex-col justify-between min-h-screen bg-gray-100' style={{ backgroundImage: `url(${DSU})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className='flex flex-col items-center justify-center flex-grow'>
        <div className='bg-gray-800 backdrop-blur-sm p-6 rounded shadow-md w-full max-w-sm bg-opacity-30'>
          <h1 className='flex text-white justify-center text-center items-center text-2xl font-bold mb-4'>Admin Dashboard &nbsp; <MdAdminPanelSettings /></h1>
          
          <form onSubmit={handleSubmit}>
            <div className='mb-4'>
              <label htmlFor='email' className='block text-sm font-medium text-white'>Email:</label>
              <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder='Enter Admin Email'
                className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500'
              />
            </div>
            <div className='mb-4'>
              <label htmlFor='password' className='block text-sm font-medium text-white'>Password:</label>
              <input
                type='password'
                placeholder='Enter Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500'
              />
            </div>
            <div className='justify-center text-center items-center py-2 underline-offset-1'>
              <a href="/" className='text-blue-100'>Not an Admin? return Home</a>
            </div>
            <button type='submit' className='w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition'>
              {loading ? 'Logging In...' : 'Login'}
            </button>
          </form>

          {/* Loading Dots Effect */}
          
        </div>
      </div>

      {/* Footer Section */}
      <footer className="text-white py-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="mb-4">&copy; {new Date().getFullYear()} All rights reserved to Ministry of Social Justice and Empowerment</p>
          <div className="flex justify-center space-x-4 mb-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
              <FaFacebook size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <FaTwitter size={24} />
            </a>
            <a href="https://instagram.com/your_instagram_handle" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
              <FaInstagram size={24} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FaGithub size={24} />
            </a>
          </div>
           
        </div>
      </footer>

      {/* Toast Notifications */}
      <ToastContainer />
    </div>
  );
};

export default Login;
