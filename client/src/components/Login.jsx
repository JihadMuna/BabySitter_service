import React, { useState } from "react";
import parent1 from "../assets/parent2.jpg";
import parent2 from "../assets/parent1.jpg";
import babysitter1 from "../assets/babysitter2.jpg";
import babysitter2 from "../assets/babysitter1.jpg";
import { useNavigate } from "react-router-dom";

const Login = ({ onClose, isLoginModalOpen }) => {
  const [hoveredImage, setHoveredImage] = useState(null);
  const navigate = useNavigate();

  // Define event handlers for hovering in and out
  const handleMouseEnter = (image) => {
    setHoveredImage(image);
  };

  const handleMouseLeave = () => {
    setHoveredImage(null);
  };

  const handleLogin = (selectedOption) => {
    console.log("Selected Option:", selectedOption);
    // Navigate to the appropriate login page
    if (selectedOption === "parent") {
      navigate("/login-parents");
    } else if (selectedOption === "babysitter") {
      navigate("/login-babysitters");
    }

    // Close the modal
    onClose();
  };

  return (
    <>
      {isLoginModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white px-5 py-20 mt-20 rounded shadow-lg relative">
            <button
              onClick={() => {
                onClose();
                navigate("/");
              }}
              className="absolute top-3 right-5 text-gray-700-bold cursor-pointer"
            >
              X
            </button>
            <h2 className="text-xl font-bold mb-4 text-center">
              Select and continue to login:
            </h2>
            <div className="flex justify-center items-center space-x-8 mb-8">
              <div
                className={`cursor-pointer ${
                  hoveredImage === "parent" ? "border-blue-500" : ""
                }`}
                onMouseEnter={() => handleMouseEnter("parent")}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleLogin("parent")}
              >
                <img
                  src={hoveredImage === "parent" ? parent1 : parent2}
                  alt="Login as Parent"
                  className={`w-48 h-48 object-cover ${
                    hoveredImage === "parent" ? "border-4 border-blue-500" : ""
                  }`}
                />
                <p className="text-center mt-2 text-gray-600">
                  Login as Parent
                </p>
              </div>
              <div
                className={`cursor-pointer ${
                  hoveredImage === "babysitter" ? "border-pink-500" : ""
                }`}
                onMouseEnter={() => handleMouseEnter("babysitter")}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleLogin("babysitter")}
              >
                <img
                  src={
                    hoveredImage === "babysitter" ? babysitter1 : babysitter2
                  }
                  alt="Login as Babysitter"
                  className={`w-48 h-48 object-cover ${
                    hoveredImage === "babysitter"
                      ? "border-4 border-pink-500"
                      : ""
                  }`}
                />
                <p className="text-center mt-2 text-gray-600">
                  Login as Babysitter
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
