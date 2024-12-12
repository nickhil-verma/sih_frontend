import React, { useEffect, useState } from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js';
import Softskill from './Softskill';

const Admin = () => {
  // Required components ko register karo
  ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

  // Institutes ki list aur loading status ka state bana rahe hain
  const [institutes, setInstitutes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [photoApproval, setPhotoApproval] = useState(false);
  const [orgApproval, setOrgApproval] = useState(false);
  const [selectedInstituteCode, setSelectedInstituteCode] = useState(null);

  // Institutes ko API se fetch karna
  useEffect(() => {
    fetch('http://localhost:5000/api/organizations/names') // Sabhi organizations ko fetch karo
      .then((response) => response.json())
      .then((data) => {
        // Calculate IES score for each institute before setting the data
        const updatedInstitutes = data.map((institute) => {
          const des = institute.des; // Disability Equipment Score
          const ies = institute.ies; // Infrastructure Equipment Score
          const les = institute.les; // Lab Equipment Score

          // IES Score Calculation
          const iisScore = (des / 10) * 35 + (ies / 10) * 7.5 + (les / 10) * 7.5;
          return { ...institute, iisScore: parseFloat(iisScore.toFixed(2)) };
        });

        setInstitutes(updatedInstitutes);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching institute list:', error);
        setLoading(false);
      });
  }, []);

  // Approval updates handle karna (photoApproval aur orgApproval dono)
  const handleApprovalUpdate = () => {
    if (!selectedInstituteCode) {
      alert('Please select an institute');
      return;
    }

    // PhotoApproval aur orgApproval status ko backend mein bhejna
    fetch(`http://localhost:5000/api/organizations/${selectedInstituteCode}`, {
      method: 'PUT', // Update ke liye PUT method use karo
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ photoApproval, orgApproval }), // Updated body bhejna
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Updated:', data);
        alert('Approvals updated successfully');
        // Update hone ke baad institutes list ko reload karna
        setInstitutes((prevInstitutes) =>
          prevInstitutes.map((institute) =>
            institute.aicteCode === selectedInstituteCode
              ? { ...institute, photoApproval, orgApproval }
              : institute
          )
        );
      })
      .catch((error) => {
        console.error('Error updating approvals:', error);
      });
  };

  // Institute ko select karte waqt approval details ko set karna
  const handleInstituteSelection = (code) => {
    setSelectedInstituteCode(code);
    // Naye institute select karte waqt photoApproval aur orgApproval reset karna
    const selectedInstitute = institutes.find((institute) => institute.aicteCode === code);
    setPhotoApproval(selectedInstitute.photoApproval || false); // Default value set kar rahe hain
    setOrgApproval(selectedInstitute.orgApproval || false); // Default value set kar rahe hain
  };

  // Photo approval toggle karna
  const handlePhotoApprovalChange = () => {
    setPhotoApproval(!photoApproval);
  };

  // Organization approval toggle karna
  const handleOrgApprovalChange = () => {
    setOrgApproval(!orgApproval);
  };

  // Agar data abhi fetch ho raha ho toh loading message dikhana
  if (loading) {
    return <div className="text-center text-xl">Loading institutes...</div>;
  }

  // Pie Chart ka data
  const pieData = {
    labels: ['Class Quality (35%)', 'Attendance (15%)', 'Infrastructure for Specially Abled (35%)', 'Laboratory and Ground Infra (15%)'],
    datasets: [
      {
        label: 'IIS Distribution',
        data: [35, 15, 35, 15],
        backgroundColor: [
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 99, 132, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(255, 206, 86, 0.6)',
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  // Bar Chart ka data IIS scores ke liye
  const barData = {
    labels: institutes.map(institute => institute.name), // Organization names ko labels mein daal rahe hain
    datasets: [
      {
        label: 'IIS Score',
        data: institutes.map(institute => institute.iisScore), // IIS scores ko data points mein daal rahe hain
        backgroundColor: 'rgba(75,197,192,0.6)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
      },
    ],
  };

  const barOptions = {
    scales: {
      y: {
        beginAtZero: true,
        max: 10 // Y-axis ka max limit set kar rahe hain 10 tak
      },
    },
  };

  return (
    <div className="mt-16 p-6">
      <h1 className="text-3xl font-semibold text-center mb-6">Admin Panel</h1>
      <div className='flex flex-row justify-center items-center'>
        <div className="w-full max-w-md mx-auto mb-8">
          <h2 className="text-xl font-semibold text-center mb-4">IIS Distribution Pie Chart</h2>
          <Pie data={pieData} />
        </div>

        {/* Bar Chart Section */}
        <div className="w-full max-w-md mx-auto mb-8">
          <h2 className="text-xl font-semibold text-center mb-4">IIS Scores Bar Chart</h2>
          <Bar data={barData} options={barOptions} />
        </div>
      </div>

      {/* Institute cards display */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {institutes.map((institute) => (
          <div className="bg-white p-4 border rounded-lg shadow-md" key={institute._id}>
            <h2 className="text-xl font-bold">{institute.name}</h2>
            <p><strong>Address:</strong> {institute.address}</p>
            <p><strong>AICTE Code:</strong> {institute.aicteCode}</p>
            <div className="mb-4">
              <p className="font-semibold mb-2"><strong>IIS Score:</strong> {institute.iisScore}</p>
              <div className="relative h-2 w-full bg-[#B3C8ED] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#799DED]"
                  style={{ width: `${(institute.iisScore / 10) * 100}%` }}
                ></div>
              </div>
            </div>
            <p className={`font-semibold ${institute.photoApproval ? 'text-green-600' : 'text-red-600'}`}>
              Photo Approval: {institute.photoApproval ? 'Approved' : 'Not Approved'}
            </p>
            <p className={`font-semibold ${institute.orgApproval ? 'text-green-600' : 'text-red-600'}`}>
              Organization Approval: {institute.orgApproval ? 'Approved' : 'Not Approved'}
            </p>
            <p className="font-semibold"><strong>infrastructureEquipmentScore:</strong> {institute.ies}</p>
            <p className="font-semibold"><strong>disabilityEquipmentScore:</strong> {institute.des}</p>
            <p className="font-semibold"><strong>labEquipmentScore:</strong> {institute.les}</p>
            <button
              onClick={() => handleInstituteSelection(institute.aicteCode)}
              className="mt-4 py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
            >
              Select for Update
            </button>
          </div>
        ))}
      </div>

      {selectedInstituteCode && (
        <div className="mt-6 bg-white p-6 border rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4">Update Approvals</h3>
          <div className="mb-4">
            <label className="block text-lg mb-2">
              Photo Approval:
              <input
                type="checkbox"
                checked={photoApproval}
                onChange={handlePhotoApprovalChange}
                className="ml-2 form-checkbox"
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-lg mb-2">
              Organization Approval:
              <input
                type="checkbox"
                checked={orgApproval}
                onChange={handleOrgApprovalChange}
                className="ml-2 form-checkbox"
              />
            </label>
          </div>
          <button
            onClick={handleApprovalUpdate}
            className="py-2 px-6 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none"
          >
            Update Approvals
          </button>
        </div>
      )}
      <Softskill/>
    </div>
  );
};

export default Admin;
