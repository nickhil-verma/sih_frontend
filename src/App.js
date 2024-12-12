import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Login from './components/Login';
import './App.css';
import Instituesignup from './components/Instituesignup';
import ApprovedInstitute from './components/ApprovedInstitue';
import Admin from "./components/Admin";
 import Navbar from './components/Navbar';
import Userpage from './Userpage';
 
import LoadingPage from './components/LoadingPage'; 
function App() {
  // Initialize state from localStorage or default to false
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem("isAuthenticated") === "true";
  });
  const [loading, setLoading] = useState(true); // Loading state
  const [hasAccessedAdmin, setHasAccessedAdmin] = useState(() => {
    return localStorage.getItem("hasAccessedAdmin") === "true";
  });
  const handleLoadingFinish = () => {
    console.log("Loading finished");
    setLoading(false);
  };
  

  // Use effect to update localStorage when state changes
  useEffect(() => {
    localStorage.setItem("isAuthenticated", isAuthenticated);
  }, [isAuthenticated]);

  useEffect(() => {
    localStorage.setItem("hasAccessedAdmin", hasAccessedAdmin);
  }, [hasAccessedAdmin]);

  // Remove loading after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  // Define a PrivateRoute component for protected routes
  const PrivateRoute = ({ element }) => {
    if (isAuthenticated && hasAccessedAdmin) {
      return element;
    } else {
      return <Navigate to="/login" />;
    }
  };

  return (
    <>
      {loading ? (
        <LoadingPage onFinish={handleLoadingFinish} />
      ) : (
        <Router>
          <div className="overflow-x-hidden">
            <Navbar />
            <Routes>
              <Route path="/" element={<Userpage />} /> {/* Home page */}
              <Route path="/ApprovedInstitute" element={<ApprovedInstitute />} />
              <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
              <Route path="/admin" element={<Admin setHasAccessedAdmin={setHasAccessedAdmin} />} />
              <Route path="/institute-login" element={<Instituesignup />} />
     
              <Route path="*" element={<Navigate to="/" />} />
           
            </Routes>
          </div>
        </Router>
      )}
    </>
  );
}

export default App;
