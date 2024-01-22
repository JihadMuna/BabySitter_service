// components/SignupParent.jsx
import React, { useState } from "react";

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
    <form onSubmit={handleSubmit} className="signup-form">
      <label>
        Username:
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </label>
      <label>
        Address:
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
      </label>
      <label>
        Phone Number:
        <input
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
      </label>
      <label>
        Number of Kids:
        <input
          type="number"
          name="numberOfKids"
          value={formData.numberOfKids}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignupParent;
