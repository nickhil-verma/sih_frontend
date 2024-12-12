import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Institutesignup = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    aicteCode: '',
    logoUrl: '',
    score: '0',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/organizations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const jsonResponse = await response.json();
        console.log('Form submitted successfully:', jsonResponse);
        toast.success('Form submitted successfully!'); // Success notification
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Error submitting form. Please try again.'); // Error notification
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-4 bg-white shadow-md rounded">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">University Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded w-full p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded w-full p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">AICTE Code:</label>
          <input
            type="text"
            name="aicteCode"
            value={formData.aicteCode}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded w-full p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Logo URL:</label>
          <input
            type="url"
            name="logoUrl"
            value={formData.logoUrl}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded w-full p-2"
          />
        </div>
        <button 
          type="submit" 
          className="bg-teal-600 text-white py-2 px-4 rounded hover:bg-teal-500">
          Submit
        </button>
      </form>
      <div className="mt-4">
        <a href='http://127.0.0.1:5000/'><button 
         className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500">
         Get Image Verification
       </button></a>
      </div>
      <ToastContainer /> {/* Toast container for notifications */}
    </div>
  );
};

export default Institutesignup;
