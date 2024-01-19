import React from "react";
import { Link } from "react-router-dom";
import logoImage from "../assets/babylogo.png";

function Footer() {
  return (
    <footer className="bg-gray-200 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <ul className="flex space-x-4">
          <li>
            <Link
              to="/about"
              className="text-blue-700 hover:text-blue-500 text-sm sm:text-base"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/privacy-policy"
              className="text-blue-700 hover:text-blue-500 text-sm sm:text-base"
            >
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link
              to="/terms-of-use"
              className="text-blue-700 hover:text-blue-500 text-sm sm:text-base"
            >
              Terms of Use
            </Link>
          </li>
          <li>
            <Link
              to="/customer-service"
              className="text-blue-700 hover:text-blue-500 text-sm sm:text-sm"
            >
              Customer Service
            </Link>
          </li>
        </ul>
        <img
          src={logoImage}
          alt="logo-image"
          className="h-6 w-auto sm:h-8 sm:w-18"
        />
      </div>
    </footer>
  );
}

export default Footer;
