import React from 'react';
import PIE from "../img/WhatsApp Image 2024-12-12 at 07.38.58_3bec9b9c.jpg";

const IIS = () => {
  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-2xl font-bold text-center mb-4">Distribution of IIS (Inclusive Institute Score)</h1>
      <p className="text-gray-700 mb-4 max-w-xl text-center">
        This is the criteria on how we judge an institute based on basic components, 
        where 15% is allotted for attendance, 15% for laboratory and infrastructure, 
        35% for class quality, and 35% for infrastructure which makes an institute compatible for all.
      </p>
      <div className="flex justify-center">
        <img src={PIE} alt="IIS Distribution Pie Chart" className="rounded-lg max-w-full h-auto" />
      </div>
    </div>
  );
}

export default IIS;
