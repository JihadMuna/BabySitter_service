import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useBabysittersList from "../hooks/useBabysittersList";

const LoginBabySitters = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const navigate = useNavigate();

  // Use the useBabysittersList hook
  const { loginBabysitter } = useBabysittersList();

  const handleLogin = async () => {
    try {
      // Call the loginBabysitter function from the useBabysittersList hook
      const { data, error } = await loginBabysitter({
        email, // Assuming the username is used for login
        password,
      });

      if (error) {
        setError(error.message); // Set the error message
        return;
      }

      // If login is successful, you can perform further actions here
      const { token } = data;
      localStorage.setItem("authToken", token);
      console.log("Babysitter logged in successfully. Token:", token);

      // Close the login modal
      onClose();

      // Open success modal
      setSuccessModalOpen(true);

      // Navigate to the home page after a delay
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      console.error("Error during babysitter login:", error);
    }
  };

  useEffect(() => {
    // Cleanup function when unmounting
    return () => {};
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Login as Babysitter
      </h2>
      <form className="flex flex-col items-center space-y-4 bg-gray-200 w-96 py-8 rounded shadow-md">
        <label className="text-gray-700">
          Email:
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 p-2 border rounded-md w-64 focus:outline-none focus:border-pink-500"
          />
        </label>
        <label className="text-gray-700">
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 p-2 border rounded-md w-64 focus:outline-none focus:border-pink-500"
          />
        </label>
        <button
          type="button"
          onClick={handleLogin}
          className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-500 focus:outline-none"
        >
          Login
        </button>
        {error && <p className="text-red-500">{error}</p>}
      </form>

      {/* Success Modal */}
      {successModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <p className="text-xl font-bold text-green-500">
              Login Successful!
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginBabySitters;
