import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useParentsList from "../hooks/useParentsList";

const SignupParent = ({ onClose }) => {
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const navigate = useNavigate();

  // Use the usParentsList hook
  const { createParent } = useParentsList();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    address: "",
    phoneNumber: "",
    numberOfKids: 0,
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleParentSignup = async (e) => {
    e.preventDefault();
    try {
      await createParent(formData);

      // Open success modal
      setSuccessModalOpen(true);

      onClose();

      // Navigate to the home page after a delay
      setTimeout(() => {
        navigate("/login-parents");
      }, 2000);
    } catch (error) {
      // Check if error.response exists before accessing its properties
      if (error.response) {
        console.error("Error signing up:", error.response.data);
      } else {
        console.error("Error signing up:", error.message);
      }
    }
  };

  return (
    <>
      <div>
        <h2 className="mt-4 text-center text-2xl text-pink-600 ">
          Hello Parent :-)
        </h2>
        <h2 className="mt-4 text-center text-xl text-blue-600 ">
          Register here
        </h2>
        <form
          onSubmit={handleParentSignup}
          className="bg-gray-100 flex flex-col py-4 pl-8 pr-25 rounded shadow-md mx-auto w-96 m-4"
        >
          <label className="flex mr-4 mb-4">
            Username:
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="form-input rounded block ml-2 w-96"
            />
          </label>
          <label className="flex mr-4 mb-4">
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-input block ml-4 w-96"
            />
          </label>
          <label className="flex mr-4 mb-4">
            Password:
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="form-input rounded block ml-2 w-96"
            />
          </label>
          <label className="flex mr-4 mb-4">
            Address:
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="form-input rounded block ml-2 w-96"
            />
          </label>
          <label className="flex mr-4 mb-4">
            Phone Number:
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="form-input block ml-2 w-52"
            />
          </label>
          <label className="flex mr-4 mb-4">
            Number of Kids:
            <input
              type="number"
              name="numberOfKids"
              value={formData.numberOfKids}
              onChange={handleChange}
              className="form-input rounded block ml-2 w-10"
            />
          </label>
          <label className="flex mr-4 mb-4">
            Description:
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="form-input rounded block ml-2 w-96"
            />
          </label>
          <button
            type="submit"
            className="bg-pink-500 text-white py-2 px-10 rounded mx-auto mt-2hover:bg-pink-600"
          >
            Sign Up
          </button>
        </form>
        {/* Success Modal */}
        {successModalOpen && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <p className="text-xl font-bold text-pink-600">
                Welcome To our Family!
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SignupParent;
