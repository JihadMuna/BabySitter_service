// components/SignupParent.jsx
import React, { useState } from "react";
import axios from "axios";

const SignupParent = ({ onClose }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    address: "",
    phoneNumber: "",
    numberOfKids: 0,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleParentSignup = async (e) => {
    try {
      // Make a POST request to server's signup endpoint
      const response = await axios.post(
        "https://mybabysitter-service.onrender.com/api/parents/signup",
        formData
      );

      // Handle the response from the server
      console.log(response.data);

      // Clear the form or navigate to another page upon successful signup
      // For simplicity, we're just logging the response here
    } catch (error) {
      console.error("Error signing up:", error.response.data);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form fields if needed
    // Call the signup function and pass the form data
    handleParentSignup(formData);
    onClose(); // You might want to close the modal upon successful signup
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
          onSubmit={handleSubmit}
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
          <button
            type="submit"
            className="bg-pink-500 text-white py-2 px-10 rounded mx-auto mt-2hover:bg-pink-600"
          >
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
};

export default SignupParent;
