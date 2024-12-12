import React, { useState } from 'react';

const Softskill = () => {
  const [aicteCode, setAicteCode] = useState('');
  const [classQuality, setClassQuality] = useState(null);
  const [attendanceScore, setAttendanceScore] = useState(null);

  const fetchData = async () => {
    try {
      // Fetch class quality data
      const classQualityResponse = await fetch(`https://pyattendence.vercel.app/api/speech-brightness?AICTE_CODE=${aicteCode}`);
      const classQualityData = await classQualityResponse.json();
      setClassQuality(classQualityData.averageScore);

      // Fetch attendance score data
      const attendanceResponse = await fetch(`https://pyattendence.vercel.app/api/face-count?AICTE_CODE=${aicteCode}`);
      const attendanceData = await attendanceResponse.json();
      setAttendanceScore(attendanceData.averageScore);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Monitor Institution Skill Training programme</h1>
      <input
        type="text"
        placeholder="Enter AICTE Code (e.g., U-0987)"
        value={aicteCode}
        onChange={(e) => setAicteCode(e.target.value)}
        className="border border-gray-300 rounded-lg p-2 mb-4 w-full max-w-xs"
      />
      <button 
        onClick={fetchData} 
        className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
      >
        Fetch Data
      </button>

      {classQuality && attendanceScore && (
        <div className="flex justify-around mt-6">
          <div className="bg-white shadow-md rounded-lg p-4 w-48">
            <h2 className="text-lg font-semibold">Class Quality</h2>
            <p className="text-xl">{classQuality}</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4 w-48">
            <h2 className="text-lg font-semibold">Attendance Score</h2>
            <p className="text-xl">{attendanceScore}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Softskill;
