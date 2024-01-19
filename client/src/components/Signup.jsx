import React, { useState } from "react";
import { Link } from "react-router-dom";
import babysitter1 from "../assets/babysitterservice2.jpg";
import babysitter2 from "../assets/babysitterservice1.jpg";
import job1 from "../assets/job2.jpg";
import job2 from "../assets/job1.jpg";

const Signup = ({ onClose }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [hoveredImage, setHoveredImage] = useState(null);

  // Define event handlers for hovering in and out
  const handleMouseEnter = (image) => {
    setHoveredImage(image);
  };

  const handleMouseLeave = () => {
    setHoveredImage(null);
  };

  const handleSignup = () => {
    // Add your signup logic here
    console.log("Selected Option:", hoveredImage);
    // You may want to perform registration and handle the signup process
    // For simplicity, just close the modal in this example
    onClose();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white px-5 py-20 mt-20 rounded shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-5 text-gray-700-bold cursor-pointer"
        >
          X
        </button>
        <h2 className="text-xl font-bold mb-4 text-center">
          Select and continue to registration:
        </h2>
        <div className="flex justify-center items-center space-x-8 mb-8">
          <div
            className={`cursor-pointer ${
              hoveredImage === "job" ? "border-pink-500" : ""
            }`}
            onMouseEnter={() => handleMouseEnter("job")}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={hoveredImage === "job" ? job1 : job2}
              alt="Search for Job"
              className={`w-48 h-48 object-cover ${
                hoveredImage === "job" ? "border-4 border-pink-500" : ""
              }`}
            />
            <p className="text-center mt-2 text-gray-600">Search for Job</p>
          </div>
          <div
            className={`cursor-pointer ${
              hoveredImage === "babysitter" ? "border-pink-500" : ""
            }`}
            onMouseEnter={() => handleMouseEnter("babysitter")}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={hoveredImage === "babysitter" ? babysitter1 : babysitter2}
              alt="Search for Babysitter"
              className={`w-48 h-48 object-cover ${
                hoveredImage === "babysitter" ? "border-4 border-pink-500" : ""
              }`}
            />
            <p className="text-center mt-2 text-gray-600">
              Search for Babysitter
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
