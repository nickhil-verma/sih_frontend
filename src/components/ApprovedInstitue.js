import React, { useEffect, useState } from 'react';

const ApprovedInstitue = () => {
  // Institutes ka state, aur loading ka state set kar rahe hain
  const [institutes, setInstitutes] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect ke andar institutes fetch kar rahe hain
  useEffect(() => {
    fetch('http://localhost:5000/api/organizations/names')  // API se institutes ki list fetch kar rahe hain
      .then((response) => response.json()) // JSON format mein data receive kar rahe hain
      .then((data) => {
        setInstitutes(data);  // Fetch ki hui data ko institutes state mein store kar rahe hain
        setLoading(false);  // Loading ko false kar rahe hain jab data fetch ho jaye
      })
      .catch((error) => {
        console.error('Error fetching institute list:', error);  // Agar error aaye toh console mein print karo
        setLoading(false);  // Loading ko false kar rahe hain
      });
  }, []);  // Empty dependency array ka matlab hai ki ye hook sirf ek baar chalega jab component mount hoga

  // Agar data load ho raha ho toh loading message dikha rahe hain
  if (loading) {
    return <div className="text-center text-xl">Loading institutes...</div>;  // Loading ka message
  }

  return (
    <div className="mt-52 p-6">
      <h1 className="text-3xl font-semibold text-center mb-6">Institutes List</h1>

      {/* Institutes ka display grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {institutes.map((institute) => (
          <div className="bg-white border-black border-[1.5px] p-4 rounded-lg shadow-md" key={institute._id}>
            {/* Institute ka naam, address aur details display kar rahe hain */}
            <h2 className="text-xl font-bold">{institute.name}</h2>
            <p><strong>Address:</strong> {institute.address}</p>
            <p><strong>AICTE Code:</strong> {institute.aicteCode}</p>

            {/* IIS Score aur progress bar display kar rahe hain */}
            <p><strong>IIS Score:</strong> {institute.iisScore}</p>
            <div className="relative h-2 w-full bg-[#B3C8ED] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#799DED]"
                style={{ width: `${(institute.iisScore / 10) * 100}%` }}  // IIS score ke basis pe progress bar ka width set kar rahe hain
              ></div>
            </div>

            {/* Photo approval aur Organization approval ko color ke hisaab se dikhana */}
            <p className={`font-semibold ${institute.photoApproval ? 'text-green-600' : 'text-red-600'}`}>
              Photo Approval: {institute.photoApproval ? 'Approved' : 'Not Approved'}
            </p>
            <p className={`font-semibold ${institute.orgApproval ? 'text-green-600' : 'text-red-600'}`}>
              Organization Approval: {institute.orgApproval ? 'Approved' : 'Not Approved'}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApprovedInstitue;
    